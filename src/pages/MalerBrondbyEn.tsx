import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-brondby";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Brøndby | Apartment Blocks & Commercial Painting";
const AREAS = ["Brøndby Strand", "Brøndbyøster", "Brøndbyvester", "Priorparken"];

const KEY_TAKEAWAYS = [
  "Larger apartment blocks and high-rises need a lift or scaffolding and close coordination with the housing association.",
  "Facade projects in social housing estates are typically decided at a residents' meeting before the work can start.",
  "A clear quote with a well-defined scope makes it easier for an estate board to decide.",
  "The commercial areas in Brøndby make different demands than homes, especially in planning around operating hours.",
];

const BLOCK_TABLE = [
  {
    p: "Facade (apartment block/high-rise)",
    d: "Weather-resistant facade paint that can be applied efficiently on large, continuous surfaces.",
    h: "Needs a lift or scaffolding and thorough cleaning of the existing facade.",
  },
  {
    p: "Balconies and access galleries",
    d: "Hard-wearing paint that withstands weather, traffic and daily use.",
    h: "The boundary between shared and private areas should be settled with the housing association.",
  },
  {
    p: "Stairwells and stairs",
    d: "Robust, easy-to-clean paint that can withstand heavy traffic.",
    h: "Often planned in stages so residents are disturbed as little as possible during the work.",
  },
  {
    p: "Terraced house and villa (private)",
    d: "Weather-resistant facade paint suited to the house's material and style.",
    h: "A simpler process than an apartment block, but still needs thorough preparation.",
  },
  {
    p: "Commercial premises and warehouse",
    d: "Robust, quick-drying paint suited to operations and traffic.",
    h: "Often planned outside opening hours to avoid disrupting operations.",
  },
];

const FAQS = [
  {
    q: "Do you paint villas, terraced houses and commercial premises in Brøndby?",
    a: "Yes. Brøndby has a mix of terraced houses, villas and commercial areas, and we take on jobs from facade painting of homes to office painting for businesses.",
  },
  {
    q: "Can you help with commercial painting for businesses near the commercial areas?",
    a: "Yes, we do commercial painting for offices, warehouses and shops in Brøndby's commercial areas, and we are happy to plan the work around the company's opening hours.",
  },
  {
    q: "Do you also cover Brøndby Strand and Priorparken?",
    a: "Yes, we cover all of Brøndby Municipality, including Brøndby Strand, Brøndbyøster, Brøndbyvester and Priorparken.",
  },
  {
    q: "What does it cost to have a terraced house painted in Brøndby?",
    a: "The price depends on the size and condition of the house. We always give a free, no-obligation quote once we have seen the job.",
  },
  {
    q: "Can you paint facades on larger apartment blocks, e.g. in Brøndby Strand?",
    a: "Yes, we do facade painting on apartment blocks and high-rises, including stairwells, access galleries and facades. Jobs like this typically need a lift or scaffolding, and we always plan together with the housing association.",
  },
  {
    q: "How does a painting job work when it has to be approved by a housing association?",
    a: "Larger facade projects in social housing estates are typically decided at a residents' meeting. We are happy to help prepare a concrete, transparent quote that the estate board can use in the decision process.",
  },
];

export default function MalerBrondbyEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Brøndby for apartment blocks, terraced houses and businesses. Facade painting of high-rises, interior painting and commercial painting. Free quote."
        />
        <meta
          name="keywords"
          content="painter brøndby, painting company brøndby, commercial painting brøndby, painter brøndby strand, facade painting apartment blocks"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Brøndby. Facade painting, interior painting and commercial painting. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Brøndby. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Brøndby" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Brøndby
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for terraced houses, villas and businesses in Brøndby — facade painting, interior painting and commercial painting.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Brøndby Municipality
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
              A painting company with experience in Brøndby
            </h2>
            <p className="text-muted-foreground mb-4">
              {"Brøndby has a mix of terraced houses, villas and larger commercial areas. As a painter in Brøndby, we do both home painting for private customers and commercial painting for businesses, warehouses and offices."}
            </p>
            <p className="text-muted-foreground mb-4">
              {"For commercial jobs we plan the work to fit the company's daily routine and disturb operations as little as possible."}
            </p>
            <p className="text-muted-foreground">
              We cover all of Brøndby Municipality, including{" "}
              <strong>Brøndby Strand</strong>, <strong>Brøndbyøster</strong>{" "}
              and <strong>Brøndbyvester</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Brøndby
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
                src={exteriorImg}
                alt="Facade painting of a terraced house"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Facade painting and commercial painting
            </h2>
            <p className="text-muted-foreground mb-4">
              {"We do both facade painting of homes and commercial painting for businesses in Brøndby — two types of job that often go hand in hand in an area where homes and businesses sit close together."}
            </p>
            <p className="text-muted-foreground mb-6">
              {"We always give a concrete quote, adapted to the scope and schedule of the job."}
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

      {/* ARTICLE 1 */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Facade painting of apartment blocks in Brøndby Strand and nearby
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                {"Brøndby Strand is known for its large apartment blocks and high-rises, and that makes different demands on the painting work than an ordinary terraced house. Facades on this scale typically need a lift or scaffolding, a thorough plan for cleaning the existing surface, and a process that takes account of the many residents living in the building during the work."}
              </p>
              <p>
                {"In social housing estates, facade painting is rarely a decision made by the individual resident. Larger facade projects are typically decided at a residents' meeting, where residents vote on the project, often based on a concrete and transparent quote. We are happy to prepare material that an estate board can use in that process, so the basis for the decision is clear."}
              </p>
              <p>
                {"Besides the facade itself, many jobs also involve balconies, access galleries, stairwells and stairs — surfaces that see heavy traffic and wear, and therefore need robust, easy-to-clean materials. The work is often planned in stages so residents are disturbed as little as possible along the way."}
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: painting apartment blocks and homes
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {BLOCK_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Surface or building part</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Key features</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Preparation and points to watch</th>
                  </tr>
                </thead>
                <tbody>
                  {BLOCK_TABLE.map((row) => (
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
              How to plan the facade project
            </h3>
            <ul className="space-y-2">
              {[
                "Get a concrete quote the estate board can use at a residents' meeting.",
                "Clarify access to a lift or scaffolding before the work is planned.",
                "Decide whether balconies and access galleries should be part of the same project as the facade.",
                "Plan the work in stages so residents are disturbed as little as possible.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE 2 */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {"Does the housing estate's facade need painting, or does the office in one of Brøndby's commercial areas need a fresh coat? MAN MALER is your local painter in Brøndby, with experience in both large facade projects on apartment blocks and the practical side of commercial painting. We always give a free, no-obligation quote once we have seen the job."}
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
              MAN MALER: from housing estates to commercial areas
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                {"Brøndby has a broad mix of housing types and commercial areas, and that is reflected in the jobs we do here — from large facade projects in social housing estates to smaller private terraced houses and commercial painting in offices and warehouses. We always adapt our approach to the scale of the job and the decision processes involved."}
              </p>
              <p>
                {"For larger projects in housing estates, we aim to deliver a quote that is easy to understand and use in a decision process, whether it has to be approved by a board or decided at a residents' meeting. For commercial jobs we always plan the work to fit the company's operations."}
              </p>
              <p>
                {"Contact MAN MALER if you want a no-obligation assessment of your job in Brøndby — whether it is a large facade project, a terraced house or a commercial job."}
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
              Our services in Brøndby
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facade painting and exterior maintenance",
                "Interior painting of terraced houses and villas",
                "Commercial painting for offices and warehouses",
                "Renovation, filling and preparation of surfaces",
              ].map((item) => (
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
              <Link to={L("/ydelser/indendoers-maling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Interior painting in Brøndby →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Brøndby →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Brøndby →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Brøndby →
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
              Frequently asked questions — Painter in Brøndby
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
              Ready to get your painting done in Brøndby?
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
