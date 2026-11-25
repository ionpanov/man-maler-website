import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import interiorImg from "@/assets/interior.webp";
import { EN_ROUTES, langPath } from "@/lib/enRoutes";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";

const DA_PATH = "/maler-hillerod";
const URL = `https://manmaler.dk${EN_ROUTES[DA_PATH]}`;
const L = (daPath: string) => langPath(daPath, "en");
const AREAS = ["Hillerød Bymidte", "Ålholm", "Sophienborg", "Favrholm"];

const KEY_TAKEAWAYS = [
  "New render typically needs several weeks to months to cure before the facade can be painted.",
  "The choice of materials in a newly built house should be compatible with the building's warranty terms.",
  "New plasterboard walls and ceilings need a different primer from older, previously painted surfaces.",
  "One combined quote for the whole house often gives the most efficient planning for new builds.",
];

const NEWBUILD_TABLE = [
  {
    p: "Freshly rendered facade",
    d: "Weather-resistant facade paint, applied only once the render has fully cured.",
    h: "Curing time depends on the type of render — always check the building's instructions.",
  },
  {
    p: "New interior walls and ceilings",
    d: "Primer suited to new plasterboard, so the paint that follows adheres properly.",
    h: "New surfaces typically need different pre-treatment from older, previously painted walls.",
  },
  {
    p: "New woodwork, mouldings and skirting boards",
    d: "Hard-wearing paint with an even finish on brand-new, untreated wood.",
    h: "Thorough masking and precision give the most professional result from the start.",
  },
  {
    p: "Kitchen and bathroom in a newly built house",
    d: "Washable, moisture-resistant paint suited to new surfaces.",
    h: "Less preparation than in older houses, as the substrate is new and free of earlier damage.",
  },
  {
    p: "Garage and carport (new build)",
    d: "Robust outdoor paint that matches the colour and style of the main house.",
    h: "Can with advantage be done in the same project as the facade painting of the house.",
  },
];

const FAQS = [
  {
    q: "Do you paint both older and newer homes in Hillerød?",
    a: "Yes. Hillerød has a mix of older villas and newer residential areas such as Favrholm and Sophienborg, and we adapt the solution to the age and condition of the home.",
  },
  {
    q: "Can you help with renovating an older villa?",
    a: "Yes, we are happy to renovate older villas in Hillerød — filling, repair of surfaces and the right primer treatment before painting.",
  },
  {
    q: "Do you also cover Ålholm and Favrholm?",
    a: "Yes, we cover the whole of Hillerød Municipality, including Ålholm, Sophienborg and the newer urban area Favrholm.",
  },
  {
    q: "What does it cost to have a home painted in Hillerød?",
    a: "The price depends on the size and condition of the home. We always give a free, no-obligation quote once we have seen the job or had it described to us.",
  },
  {
    q: "How long must freshly rendered facade dry before it can be painted?",
    a: "It depends on the type of render, but new render typically needs several weeks to months to cure before it is painted. We always assess the condition of the facade and advise on the right time.",
  },
  {
    q: "Can you paint a newly built house in Favrholm without affecting the building warranty?",
    a: "Yes, we use products and methods that are compatible with the building's warranty terms. We always recommend checking the building warranty before choosing materials that differ from the building's recommendations.",
  },
];

const TITLE = "Painter Hillerød | Painting company, new builds & villas";

export default function MalerHillerodEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Hillerød for new builds in Favrholm and older villas. Interior painting, freshly rendered facades and renovation. Free, no-obligation quote."
        />
        <meta
          name="keywords"
          content="painter hillerød, painting company hillerød, interior painting hillerød, facade painting hillerød, painter favrholm, painter sophienborg"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Hillerød. Interior painting, facade painting and renovation. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Hillerød. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Hillerød" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Hillerød
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for villas and newer homes in Hillerød — interior and exterior painting, renovation and commercial painting.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Hillerød Municipality
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
              A painting company with experience in Hillerød
            </h2>
            <p className="text-muted-foreground mb-4">
              Hillerød in North Zealand has a mix of older villas and newer residential areas such as Favrholm and Sophienborg. As a painter in Hillerød, we always adapt the solution to the age and condition of the home and the surfaces to be treated.
            </p>
            <p className="text-muted-foreground mb-4">
              We do painting work for both private homes and commercial properties in and around Hillerød.
            </p>
            <p className="text-muted-foreground">
              We cover all of Hillerød Municipality, including <strong>Ålholm</strong>, <strong>Sophienborg</strong> and <strong>Favrholm</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Hillerød
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
                src={interiorImg}
                alt="Interior painting of a villa"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Interior painting and renovation
            </h2>
            <p className="text-muted-foreground mb-4">
              We do interior painting and renovation of villas in Hillerød — from single rooms to whole homes, always with thorough preparation of the surfaces.
            </p>
            <p className="text-muted-foreground mb-6">
              We are also happy to advise on colours and materials that suit the style and layout of the home.
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
              Painting new builds in Favrholm and Hillerød
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Hillerød is a growing town, and the new urban area of Favrholm in particular means many homeowners have a brand-new house that is to be painted for the first time. That is a different job from painting an older house: there is no old paint to remove, but new surfaces have their own requirements for timing and choice of materials.
              </p>
              <p>
                A freshly rendered facade typically needs several weeks to months to cure, depending on the type of render, before it can be painted. If the facade is painted too early, moisture in the render risks damaging the new paint. We always advise on the right time, based on the building's instructions and the condition of the facade.
              </p>
              <p>
                It is also worth noting that the choice of materials in a newly built house should be compatible with the building's warranty terms. We use products that do not affect the building warranty, and we always recommend checking this if you want materials that differ from the building's own recommendations.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: painting the newly built house
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {NEWBUILD_TABLE.map((row) => (
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
                  {NEWBUILD_TABLE.map((row) => (
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
              How to plan a new build
            </h3>
            <ul className="space-y-2">
              {[
                "Check the building's instructions for the earliest time the facade can be painted.",
                "Choose materials that are compatible with the building warranty.",
                "Use a primer suited to new plasterboard walls before the final colour is applied.",
                "Get one combined quote for the whole house if several surfaces are to be painted for the first time.",
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

      {/* ARTICLE — MAN MALER */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Is the newly built house in Favrholm to be painted for the first time, or does the older villa need renovating? MAN MALER is your local painter in Hillerød, with experience in both new builds and older homes. We always give a free, no-obligation quote once we have seen the job or had it described to us.
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
              MAN MALER: from new builds to older villas
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Hillerød's growth means we take on jobs across a wide range — from a brand-new house in Favrholm that is to be painted for the first time, to an older villa in the town centre or around Ålholm and Sophienborg that needs renovating. We always adapt our approach to the age and condition of the house.
              </p>
              <p>
                For new builds, we advise on the right time to paint, so new surfaces such as render and plasterboard have had the time they need to cure. For older houses, we instead put weight on thorough preparation, so the new paint lasts for many years to come.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of your job in Hillerød — whether it is a newly built house or an older villa that needs a new look.
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
              Our services in Hillerød
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Interior painting of villas and homes",
                "Facade painting and outdoor maintenance",
                "Renovation, filling and preparation of surfaces",
                "Commercial painting for offices and shops",
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
              <Link to={L("/priser")} className="inline-block py-1 text-primary font-medium hover:underline">
                See our prices →
              </Link>
              <Link to={L("/ydelser/indendoers-maling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Interior painting in Hillerød →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Hillerød →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Hillerød →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Hillerød →
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
              Frequently asked questions — Painter in Hillerød
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
              Ready to get your Hillerød place painted?
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
