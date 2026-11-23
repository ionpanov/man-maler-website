import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Clock, MapPin, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HreflangLinks from "@/components/HreflangLinks";
import { CITIES, SERVICE_PAGES } from "@/lib/cities";
import { langPath } from "@/lib/enRoutes";
import interiorImg from "@/assets/interior.webp";

const ORIGIN = "https://manmaler.dk";
const DA_PATH = "/ofte-stillede-spoergsmaal";
const PATH = "/en/faq";

interface Faq {
  q: string;
  a: string;
  more?: { to: string; label: string };
}

const GROUPS: { id: string; title: string; faqs: Faq[] }[] = [
  {
    id: "quotes-and-prices",
    title: "Quotes and prices",
    faqs: [
      {
        q: "Is a quote from MAN MALER free?",
        a: "Yes. We always give a free quote with no obligation, once we have seen or been given a description of the job. You do not pay for the visit or the quote.",
        more: { to: "/kontakt", label: "Get a free quote" },
      },
      {
        q: "How do I get a quote?",
        a: "Send photos, measurements and a short description of the job through the contact form, or call us. For larger jobs we come out and inspect. You get a written quote with the scope, number of coats and materials.",
        more: { to: "/kontakt", label: "Go to the contact form" },
      },
      {
        q: "What does a painter cost?",
        a: "Painting walls in two coats costs 65–150 DKK/m² and ceilings 115 DKK/m². Filling walls starts from 85 DKK/m², and a complete wall finish from 350 DKK/m². All prices include 25% VAT and are indicative, because the final price depends on the scope of the job, the condition of the surface and access. That is why we give a written quote.",
        more: { to: langPath("/priser", "en"), label: "See all prices" },
      },
      {
        q: "Can you give a price per square metre over the phone?",
        a: "Our indicative prices per m² are on the prices page. The right price also depends on holes, cracks, wallpaper, ceiling height and access. With photos or an inspection we can give you a quote you can rely on.",
        more: { to: langPath("/priser", "en"), label: "See our prices" },
      },
      {
        q: "How quickly do you reply to an enquiry?",
        a: "As a rule we reply within 24 hours.",
      },
    ],
  },
  {
    id: "process-and-practicalities",
    title: "Process and practical questions",
    faqs: [
      {
        q: "How far in advance should I book a painter?",
        a: "The earlier, the better. Facade painting is seasonal and is best booked well before spring, while interior painting can often be planned at shorter notice. Contact us and we will tell you when we can start.",
        more: { to: "/ydelser/facademaling", label: "Read about facade painting and the right timing" },
      },
      {
        q: "Do I have to move the furniture myself?",
        a: "We move and cover smaller pieces of furniture. If you want us to handle heavier furniture too, we agree that in advance so it is stated in the quote.",
      },
      {
        q: "Can I stay at home while you paint?",
        a: "In many cases yes, especially for single rooms. For larger jobs and renovations we recommend not using the affected rooms for a while. It gives a better result and a shorter job.",
        more: { to: "/ydelser/renovering", label: "Read about renovation and refurbishment" },
      },
      {
        q: "What about covering and clean-up?",
        a: "Floors, furniture and fittings are covered before we start. When the work is finished, we remove the covering, clean up and go through the result with you.",
      },
      {
        q: "What if I am not happy with the result?",
        a: "We always go through the result with you at handover. If something is missing or does not match the agreement, contact us and we will find a solution.",
      },
    ],
  },
  {
    id: "services",
    title: "Services",
    faqs: [
      {
        q: "Which services does MAN MALER offer?",
        a: "We do interior painting, facade painting, renovation and refurbishment, and commercial painting for private homeowners and businesses.",
        more: { to: "/ydelser", label: "See all our services" },
      },
      {
        q: "What is the difference between interior painting and renovation?",
        a: "Interior painting is painting walls, ceilings and woodwork on a surface that is in reasonable condition. Renovation is when the surfaces first need to be restored, for example after moisture or mould damage, with extensive filling, or together with other tradespeople.",
        more: { to: "/ydelser/renovering", label: "Read more about renovation" },
      },
      {
        q: "Do you paint for both private customers and businesses?",
        a: "Yes. We paint flats, houses and terraced homes, as well as offices, shops, institutions and warehouses. We plan commercial jobs around the company's operations.",
        more: { to: "/ydelser/erhvervsmaling", label: "Read more about commercial painting" },
      },
      {
        q: "Can you help with choosing colours?",
        a: "Yes. We are happy to advise on colours, gloss and materials based on the light, use and style of the room, and for facades based on the age and surroundings of the house.",
      },
    ],
  },
  {
    id: "areas",
    title: "Areas",
    faqs: [
      {
        q: "Which areas do you cover?",
        a: "We cover Copenhagen and all of Zealand, including Frederiksberg, Gentofte, Lyngby, Herlev, Ballerup, Glostrup, Rødovre, Hvidovre, Brøndby, Ishøj, Albertslund, Taastrup, Hedehusene, Greve, Roskilde, Køge, Hillerød, Helsingør and Næstved.",
        more: { to: "/omraader", label: "See all areas" },
      },
      {
        q: "Do you also take jobs outside the towns?",
        a: "Yes. If the job is on Zealand but outside the towns we have pages for, contact us and we will assess it.",
        more: { to: "/kontakt", label: "Contact us about your job" },
      },
      {
        q: "Do you come and inspect before giving a quote?",
        a: "For larger jobs and older houses we always inspect. For smaller jobs we can often give a quote from photos, measurements and a description.",
      },
    ],
  },
];

const ALL_FAQS = GROUPS.flatMap((group) => group.faqs);

export default function FaqPageEn() {
  const url = `${ORIGIN}${PATH}`;
  const title = "Painter FAQ: quotes, prices and process | MAN MALER";
  const description =
    "Answers to common questions about painting: quotes and prices, process, interior painting, facade painting, renovation and areas. Get a free quote.";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
      { "@type": "ListItem", position: 2, name: "FAQ", item: url },
    ],
  };

  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="painter FAQ, painter prices, painting company questions, painter quote, interior painting, facade painting, renovation, Copenhagen"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:image" content={`${ORIGIN}/og-image.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative pt-12 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 flex justify-center">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground">
              <li className="flex items-center gap-1">
                <Link to="/" className="inline-block py-1 hover:text-primary hover:underline">Home</Link>
                <ChevronRight size={14} aria-hidden="true" />
              </li>
              <li aria-current="page" className="text-foreground font-medium">FAQ</li>
            </ol>
          </nav>
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Frequently asked questions about painters and painting
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Here you will find answers to what our customers ask most often: quotes and prices, how a job runs, and
              what we can help with in Copenhagen and on Zealand.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" />
                Free quote, no obligation
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                Reply within 24 hours
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Covering Copenhagen and all of Zealand
              </div>
            </div>
            <Link
              to="/kontakt"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Get a free quote
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* IMAGE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={interiorImg}
                alt="Painter at work on interior painting"
                width={800}
                height={600}
                loading="eager"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Get answers before you decide
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most questions are about the same things: what it costs, how long it takes, and what needs to be ready
                before we start. The answers here apply to all our services.
              </p>
              <p>
                If an answer is missing, or your job has special conditions, write to us through the{" "}
                <Link to="/kontakt" className="text-primary hover:underline">contact form</Link>.
              </p>
            </div>
            <nav aria-label="Jump to topic" className="mt-6 flex flex-wrap gap-2">
              {GROUPS.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="px-4 py-2 rounded-full bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  {group.title}
                </a>
              ))}
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ GROUPS */}
      {GROUPS.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          className={`py-20 px-6 scroll-mt-24 ${index % 2 === 0 ? "" : "bg-card"}`}
        >
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-10 text-foreground">
                {group.title}
              </h2>
              <div className="space-y-8">
                {group.faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    {faq.more && (
                      <Link to={langPath(faq.more.to, "en")} className="inline-block mt-2 text-primary font-medium hover:underline">
                        {faq.more.label} →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* SERVICES + CITIES */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-card-foreground text-center">
              Read more about our services
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-14">
              {SERVICE_PAGES.map((service) => (
                <Link
                  key={service.path}
                  to={langPath(service.path, "en")}
                  className="block p-5 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition border border-border"
                >
                  <span className="font-semibold text-foreground block mb-1">{service.nameEn} →</span>
                  <span className="text-sm text-muted-foreground">{service.blurbEn}</span>
                </Link>
              ))}
            </div>

            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-card-foreground text-center">
              Painter in your area
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {CITIES.map((city) => (
                <Link
                  key={city.path}
                  to={langPath(city.path, "en")}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={14} className="text-primary flex-shrink-0" />
                  Painter in {city.name === "København" ? "Copenhagen" : city.name}
                </Link>
              ))}
            </div>
            <div className="text-center flex flex-col items-center gap-2">
              <Link to="/ydelser" className="inline-block py-1 text-primary font-medium hover:underline">
                See all our painting services →
              </Link>
              <Link to="/referencer" className="inline-block py-1.5 text-sm text-muted-foreground hover:underline">
                See our references →
              </Link>
              <Link to="/om-os" className="inline-block py-1.5 text-sm text-muted-foreground hover:underline">
                Read more about MAN MALER →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden bg-primary">
        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
              Did not find the answer to your question?
            </h2>
            <p className="text-lg mb-10 text-primary-foreground/90">
              Contact us today for a free quote with no obligation.
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Get a free quote
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
