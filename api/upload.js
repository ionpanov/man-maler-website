import { handleUpload } from "@vercel/blob/client";

const MAX_BYTES = 6 * 1024 * 1024;
const RETENTION_DAYS = 45;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const json = await handleUpload({
      body: req.body,
      request: req,
      onBeforeGenerateToken: async (pathname) => {
        if (!/^inquiries\/[\w.-]+$/.test(pathname)) {
          throw new Error("Invalid upload path");
        }
        return {
          allowedContentTypes: ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"],
          maximumSizeInBytes: MAX_BYTES,
          addRandomSuffix: true,
          ttlDays: RETENTION_DAYS,
        };
      },
      onUploadCompleted: async () => {},
    });
    return res.status(200).json(json);
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    return res.status(400).json({ error: "Upload failed" });
  }
}
