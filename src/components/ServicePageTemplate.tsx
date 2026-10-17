import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ChevronRight, Clock, MapPin, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { CITIES } from "@/lib/cities";

const ORIGIN = "https://manmaler.dk";

export interface ServicePageData {
  path: string;
  name: string;
  serviceType: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  lead: string;
  heroPoints: [string, string, string];
  image: { src: string; alt: string };
  imageHeading: string;
  imageParagraphs: ReactNode[];
  intro: { heading: string; paragraphs: ReactNode[] };
  steps: { heading: string; items: { title: string; text: string }[] };
  table: {
    heading: string;
    intro: string;
    columns: [string, string, string];
    rows: { p: string; d: ReactNode; h: ReactNode }[];
  };
  price: { heading: string; paragraphs: ReactNode[]; items: string[]; closing: ReactNode };
  context: { heading: string; paragraphs: ReactNode[] };
  faqs: { q: string; a: string }[];
  related: { to: string; title: string; text: string };
  ctaTitle: string;
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const url = `${ORIGIN}${data.path}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: data.name,
    serviceType: data.serviceType,
    description: data.description,
    url,
    provider: { "@id": `${ORIGIN}/#organization` },
    areaServed: CITIES.map((city) => ({ "@type": "City", name: city.name })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${ORIGIN}/kontakt`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: `${ORIGIN}/` },
      { "@type": "ListItem", position: 2, name: "Ydelser", item: `${ORIGIN}/ydelser` },
      { "@type": "ListItem", position: 3, name: data.name, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />

        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${ORIGIN}/og-image.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative pt-12 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <nav aria-label="Brødkrumme" className="mb-8 flex justify-center">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground">
              <li className="flex items-center gap-1">
                <Link to="/" className="hover:text-primary hover:underline">Forside</Link>
                <ChevronRight size={14} aria-hidden="true" />
              </li>
              <li className="flex items-center gap-1">
                <Link to="/ydelser" className="hover:text-primary hover:underline">Ydelser</Link>
                <ChevronRight size={14} aria-hidden="true" />
              </li>
              <li aria-current="page" className="text-foreground font-medium">{data.name}</li>
            </ol>
          </nav>
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              {data.h1}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">{data.lead}</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" />
                {data.heroPoints[0]}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                {data.heroPoints[1]}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                {data.heroPoints[2]}
              </div>
            </div>
            <Link
              to="/kontakt"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Få et gratis tilbud
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
                src={data.image.src}
                alt={data.image.alt}
                width={800}
                height={600}
                loading="eager"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              {data.imageHeading}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {data.imageParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              {data.intro.heading}
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              {data.intro.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-card-foreground">
              {data.steps.heading}
            </h2>
            <ol className="space-y-5">
              {data.steps.items.map((step, index) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </AnimatedSection>
        </div>
      </section>

      {/* TABLE */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-foreground">
              {data.table.heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{data.table.intro}</p>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 md:hidden">
              {data.table.rows.map((row) => (
                <div key={row.p} className="p-4 rounded-xl bg-warm-surface border border-border">
                  <p className="font-semibold text-foreground mb-2">{row.p}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-foreground">{data.table.columns[1]}: </span>
                    {row.d}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{data.table.columns[2]}: </span>
                    {row.h}
                  </p>
                </div>
              ))}
            </div>

            {/* Tablet/desktop: full table, no scroll needed */}
            <div className="hidden md:block">
              <table className="w-full text-sm border-collapse table-fixed">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">{data.table.columns[0]}</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">{data.table.columns[1]}</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">{data.table.columns[2]}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.table.rows.map((row) => (
                    <tr key={row.p} className="border-b border-border align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">{row.p}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.d}</td>
                      <td className="py-3 text-muted-foreground">{row.h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PRICE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-card-foreground">
              {data.price.heading}
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
              {data.price.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <ul className="space-y-2 mb-8">
              {data.price.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">{data.price.closing}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              {data.context.heading}
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              {data.context.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-10 text-center text-card-foreground">
              Ofte stillede spørgsmål om {data.name.toLowerCase()}
            </h2>
            <div className="space-y-8">
              {data.faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-semibold text-lg text-card-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* RELATED + CITIES */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Se også
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-14">
              <Link
                to={data.related.to}
                className="block p-5 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition border border-border"
              >
                <span className="font-semibold text-foreground block mb-1">{data.related.title} →</span>
                <span className="text-sm text-muted-foreground">{data.related.text}</span>
              </Link>
              <Link
                to="/referencer"
                className="block p-5 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition border border-border"
              >
                <span className="font-semibold text-foreground block mb-1">Se vores referencer →</span>
                <span className="text-sm text-muted-foreground">
                  Eksempler på malerarbejde, vi har udført for private og virksomheder.
                </span>
              </Link>
            </div>

            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              {data.name} i dit område
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {CITIES.map((city) => (
                <Link
                  key={city.path}
                  to={city.path}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={14} className="text-primary flex-shrink-0" />
                  Maler i {city.name}
                </Link>
              ))}
            </div>
            <div className="text-center flex flex-col items-center gap-2">
              <Link to="/ydelser" className="text-primary font-medium hover:underline">
                Se alle vores malerydelser →
              </Link>
              <Link to="/omraader" className="text-sm text-muted-foreground hover:underline">
                Se alle de områder, vi dækker →
              </Link>
              <Link to="/om-os" className="text-sm text-muted-foreground hover:underline">
                Læs mere om MAN MALER →
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
              {data.ctaTitle}
            </h2>
            <p className="text-lg mb-10 text-primary-foreground/90">
              Kontakt os i dag for et gratis og uforpligtende tilbud.
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Få et gratis tilbud
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
