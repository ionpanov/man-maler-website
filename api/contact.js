import nodemailer from "nodemailer";

const MAX_PHOTOS = 8;
const BLOB_HOST = /^https:\/\/[a-z0-9-]+\.public\.blob\.vercel-storage\.com\/inquiries\//;

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {

    const { name, email, phone, services, message } = req.body;
    const photos = Array.isArray(req.body.photos)
      ? req.body.photos.filter((url) => typeof url === "string" && BLOB_HOST.test(url)).slice(0, MAX_PHOTOS)
      : [];

    // Basic validation
    if (!name || !email || !phone || !message || !services?.length) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields"
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const servicesList = services.map(service => `<li>${escapeHtml(service)}</li>`).join("");

    const photosHtml = photos.length
      ? `<h3 style="margin-bottom:5px;margin-top:20px;">Photos (${photos.length})</h3>
        <p style="font-size:13px;color:#666;margin-top:0;">Links expire automatically after 45 days.</p>
        <p>${photos
          .map((url) => `<a href="${escapeHtml(url)}" style="display:inline-block;margin:0 8px 8px 0"><img src="${escapeHtml(url)}" width="160" alt="Customer photo" style="border-radius:6px;border:1px solid #ddd"></a>`)
          .join("")}</p>`
      : "";

    const emailHTML = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#222">

        <h2 style="margin-bottom:10px;">New Inquiry from MANMALER Website</h2>

        <p style="margin-top:0;">
          A visitor submitted the contact form on <strong>manmaler.dk</strong>.
        </p>

        <hr style="margin:20px 0;">

        <h3 style="margin-bottom:5px;">Customer Information</h3>

        <p>
          <strong>Name:</strong> ${escapeHtml(name)}
        </p>

        <p>
          <strong>Email:</strong> 
          <a href="mailto:${escapeHtml(email)}" style="color:#2563eb">${escapeHtml(email)}</a>
        </p>
<p>
  <strong>Phone:</strong> 
  <a href="tel:${escapeHtml(phone)}" style="color:#2563eb">${escapeHtml(phone)}</a>
</p>
        <h3 style="margin-bottom:5px;margin-top:20px;">Requested Services</h3>

        <ul>
          ${servicesList}
        </ul>

        <h3 style="margin-bottom:5px;margin-top:20px;">Project Details</h3>

        <p style="white-space:pre-line;background:#f5f5f5;padding:12px;border-radius:6px;">
          ${escapeHtml(message)}
        </p>

        ${photosHtml}

        <hr style="margin:20px 0;">

        <p style="font-size:13px;color:#666;">
          Submitted: ${new Date().toLocaleString()} <br/>
          Source: manmaler.dk contact form
        </p>

      </div>
    `;

    await transporter.sendMail({
      from: `"MANMALER Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New Website Inquiry – ${services.join(", ")}`,
      html: emailHTML,
    });

    return res.status(200).json({ success: true });

  } catch (error) {

    console.error("EMAIL ERROR:", error);

    return res.status(500).json({
      success: false,
      error: "Email sending failed",
    });

  }

}