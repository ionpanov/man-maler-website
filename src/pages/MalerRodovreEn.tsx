import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import renovationImg from "@/assets/renovation.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-rodovre";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Rødovre | Interior, facade & renovation";
const AREAS = ["Rødovre Centrum", "Islev", "Hendriksholm", "Broparken"];

const KEY_TAKEAWAYS = [
  "Many houses in Rødovre date from the mid-1900s and need more preparation than newer buildings.",
  "Eternit (fibre-cement) facades from before about 1988 should always be assessed for asbestos before any sanding or cleaning.",
  "Old plaster layers and earlier types of paint can hide damp or damage that should be fixed first.",
  "Thorough preparation is the most important factor in how long the new paint lasts."
];

const TABLE = [
  {
    "p": "Eternit facade (before about 1988)",
    "d": "May contain asbestos — must not be sanded or cleaned aggressively without an assessment first.",
    "h": "We always assess the panels first and follow the current rules for safe handling."
  },
  {
    "p": "Rendered brick facade",
    "d": "Weather-resistant facade paint that suits the original render.",
    "h": "Cracks and loose render should be repaired before painting, to stop damp getting in."
  },
  {
    "p": "Windows and woodwork from the period",
    "d": "Hard-wearing wood paint with good adhesion to older wood that has often been painted several times.",
    "h": "Stripping old layers of paint is often needed for an even result."
  },
  {
    "p": "Interior walls with older plaster",
    "d": "Paint suited to uneven spots and earlier repairs in the surface.",
    "h": "Old plaster layers can hide cracks or signs of damp that should be assessed before painting."
  },
  {
    "p": "Basement",
    "d": "Damp-proof paint or treatment, depending on the moisture level.",
    "h": "Especially relevant in older houses, where the basement often has natural damp."
  }
];

const FAQS = [
  {
    "q": "Do you paint both detached houses and terraced houses in Rødovre?",
    "a": "Yes. Rødovre is mostly detached-house areas and terraced housing, and we do both facade painting and interior painting to suit the type of home."
  },
  {
    "q": "Can you help with renovation, not just painting?",
    "a": "Yes, we also do filling, repair of surfaces and preparation before painting — especially relevant for older houses, where the surfaces need more preparation."
  },
  {
    "q": "Do you also cover Islev and Hendriksholm?",
    "a": "Yes, we cover the whole of Rødovre Municipality, including Islev, Hendriksholm and Broparken."
  },
  {
    "q": "What does it cost to have a house painted in Rødovre?",
    "a": "The price depends on the size and condition of the house and how much preparation is needed. We always give a free, no-obligation quote once we have seen the job."
  },
  {
    "q": "Can you paint eternit facades from the 1950s and 60s?",
    "a": "Yes, but we always assess the facade first. Eternit panels from before about 1988 may contain asbestos, and they must not be sanded or cleaned aggressively. If there are signs of asbestos, we follow the current rules for safe handling, or refer you to a specialist if the panels need to be replaced."
  },
  {
    "q": "How much preparation does a house from the mid-1900s need?",
    "a": "Typically more than a newer house. Old plaster layers, earlier types of paint and any damp must be assessed before we recommend the right solution — we always include this in the quote."
  }
];

const CHECKLIST = [
  "Tell us the year the house was built, so we can assess whether the facade needs special attention.",
  "Let us assess eternit facades before anything is sanded or cleaned.",
  "Mention any damp in the basement, so we can recommend the right paint.",
  "Set aside time for thorough preparation — it is what decides how long the result lasts."
];

const SERVICES = [
  "Facade painting and exterior maintenance",
  "Interior painting of houses and terraced houses",
  "Renovation, filling and preparation of surfaces",
  "Commercial painting for offices and shops"
];

export default function MalerRodovreEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Rødovre for houses and terraced houses from the mid-1900s. Interior painting, renovation and facade painting. Free, no-obligation quote."
        />
        <meta
          name="keywords"
          content="painter rødovre, painting company rødovre, interior painting rødovre, facade painting rødovre, painter islev, painter hendriksholm"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Rødovre. Interior painting, facade painting and renovation. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content={`${ORIGIN}/og-image.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Rødovre. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Rødovre" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Rødovre
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for houses, terraced houses and businesses in Rødovre —
              facade painting, interior painting and renovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Rødovre Municipality
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                Reply within 24 hours
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" />
                Free, no-obligation quote
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

      {/* INTRO / LOCAL RELEVANCE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-card-foreground">
              A painting company with experience in Rødovre
            </h2>
            <p className="text-muted-foreground mb-4">
              Rødovre is mostly detached-house areas and terraced housing close to Copenhagen. As a painter in Rødovre, we often do facade painting, wood protection and exterior maintenance, as well as regular interior painting.
            </p>
            <p className="text-muted-foreground mb-4">
              Many of the homes in the area date from the mid-1900s, when the surfaces often need extra preparation before painting to get a durable result.
            </p>
            <p className="text-muted-foreground">
              We cover the whole of Rødovre Municipality, including <strong>Islev</strong>, <strong>Hendriksholm</strong> and <strong>Broparken</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Rødovre
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {AREAS.map((a) => (
                <span
                  key={a}
                  className="px-4 py-2 rounded-full bg-warm-surface text-sm text-foreground border border-border"
                >
                  {a}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICE HIGHLIGHT */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={renovationImg}
                alt="Renovation and preparation of surfaces"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Renovation and preparation
            </h2>
            <p className="text-muted-foreground mb-4">
              Many of our jobs in Rødovre start with thorough preparation — filling, repair of surfaces and the right primer — before the actual painting begins.
            </p>
            <p className="text-muted-foreground mb-6">
              This applies to both facade painting and interior renovation, so the result lasts for many years.
            </p>
            <Link
              to="/referencer"
              className="inline-block py-1 text-primary font-medium hover:underline"
            >
              See examples of our work →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Painting and renovating older houses in Rødovre
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
                <p>
                  Many of the houses and terraced houses in Rødovre were built in the mid-1900s, which means the surfaces often need more preparation than on a newer house. Facades can be rendered brick or eternit panels, the windows have often been painted several times over the years, and interior walls can hide older plaster layers or earlier repairs.
                </p>
                <p>
                  One particular point of attention is eternit facades from before about 1988, which may contain asbestos. They must not be sanded or cleaned aggressively until the facade has been assessed. We always deal with this before we recommend a solution, and we follow the current rules for safe handling, or refer you to a specialist if the panels need to be replaced.
                </p>
                <p>
                  Besides the facade, the basement often needs a special assessment in older houses — natural damp is common, and here we choose damp-proof paint or another treatment, depending on the moisture level. Thorough preparation is the most important factor in whether the result lasts for many years, whether the job is inside or outside.
                </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: painting the older house
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {TABLE.map((row) => (
                <div key={row.p} className="p-4 rounded-xl bg-warm-surface border border-border">
                  <p className="font-semibold text-foreground mb-2">{row.p}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-foreground">Key features: </span>
                    {row.d}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Preparation: </span>
                    {row.h}
                  </p>
                </div>
              ))}
            </div>

            {/* Tablet/desktop: full table, no scroll needed */}
            <div className="hidden md:block mb-10">
              <table className="w-full text-sm border-collapse table-fixed">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Surface</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Key features</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Preparation and points to watch</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE.map((row) => (
                    <tr key={row.p} className="border-b border-border align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">{row.p}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.d}</td>
                      <td className="py-3 text-muted-foreground">{row.h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              How to plan the renovation
            </h3>
            <ul className="space-y-2">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE — MAN MALER */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Does the facade of your house or terraced house in Rødovre need renovating, or do the living room and basement need interior painting? MAN MALER is your local painter in Rødovre, with experience in the thorough preparation that houses from the mid-1900s often need. We always give a free, no-obligation quote once we have seen the job.
            </p>

            <div className="p-6 rounded-xl bg-warm-surface border border-border mb-10">
              <h4 className="font-display font-semibold mb-3 text-foreground">
                ⚡ In short
              </h4>
              <ul className="space-y-2">
                {KEY_TAKEAWAYS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-card-foreground">
              MAN MALER: experience with Rødovre's older housing
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Rødovre is one of the older suburbs close to Copenhagen, which means many of our jobs here start with a thorough assessment before we give a quote. The facade material, the age of the house and any damp in the basement all affect which solution we recommend — and how much preparation is needed before the painting starts.
              </p>
              <p>
                We put special weight on safety with older eternit facades, where asbestos may be involved. Here we always assess the facade carefully before we recommend the next step, so the job is handled correctly and safely for everyone.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of your house in the Rødovre area. With photos or a short description we can often give an initial assessment quickly; for older houses, though, we always recommend a site visit, so that everything is included in the quote.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES RECAP */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-foreground text-center">
              Our services in Rødovre
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {SERVICES.map((item) => (
                <div key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 flex flex-col items-center gap-2">
              <Link to={L("/ydelser")} className="inline-block py-1 text-primary font-medium hover:underline">
                See all our painting services →
              </Link>
              <Link to={L("/priser")} className="inline-block py-1 text-primary font-medium hover:underline">
                See our prices →
              </Link>
              <Link to={L("/ydelser/indendoers-maling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Interior painting in Rødovre →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Rødovre →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Rødovre →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Rødovre →
              </Link>
              <Link to={L("/omraader")} className="inline-block py-1.5 text-sm text-muted-foreground hover:underline">
                See all the areas we cover →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <NearbyAreas current={DA_PATH} lang="en" />

      {/* FAQ */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-10 text-center text-card-foreground">
              Frequently asked questions — Painter in Rødovre
            </h2>
            <div className="space-y-8">
              {FAQS.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-semibold text-lg text-card-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to={L("/ofte-stillede-spoergsmaal")} className="inline-block py-1 text-primary font-medium hover:underline">
                See all frequently asked questions about painting →
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
              Ready to get painting done in Rødovre?
            </h2>
            <p className="text-lg mb-10 text-primary-foreground/90">
              Contact us today for a free, no-obligation quote.
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
