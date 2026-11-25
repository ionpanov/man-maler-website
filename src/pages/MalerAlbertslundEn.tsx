import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import renovationImg from "@/assets/renovation.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-albertslund";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Albertslund | Facade Renovation – MAN MALER";
const AREAS = ["Albertslund Nord", "Albertslund Syd", "Herstedøster", "Hersted Industripark"];

const KEY_TAKEAWAYS = [
  "Many facades in Albertslund are 50-60 years old and need concrete, mortar or joint repairs before painting.",
  "Minor cracks can often be handled with cleaning and painting, while larger damage needs repair first.",
  "The business area around Hersted Industripark has different requirements than private terraced houses.",
  "A thorough inspection of the facade decides whether the job is a renovation or just a surface treatment.",
];

const FACADE_TABLE = [
  {
    p: "Brick facade",
    d: "Weather-resistant facade paint that suits the age and condition of the brickwork.",
    h: "Cracks and loose mortar should be repaired before painting, to stop moisture getting in.",
  },
  {
    p: "Concrete elements and concrete facade",
    d: "Materials suited to the concrete surface and any earlier repairs.",
    h: "Concrete damage such as spalling or reinforcement corrosion should be fixed first.",
  },
  {
    p: "Joints",
    d: "Tight, flexible joints that protect against moisture penetration.",
    h: "Leaking or broken-down joints should be repaired before the facade is painted.",
  },
  {
    p: "Windows and woodwork (terraced house)",
    d: "Hard-wearing wood paint with good adhesion to older, often previously painted wood.",
    h: "Stripping old layers of paint gives the most durable result.",
  },
  {
    p: "Commercial premises (Hersted Industripark)",
    d: "Durable, fast-drying paint suited to operations and traffic.",
    h: "Often planned outside opening hours to avoid disturbing operations.",
  },
];

const FAQS = [
  {
    q: "Do you have experience with the brick buildings Albertslund is known for?",
    a: "Yes. Albertslund has many terraced houses and brick developments from the 1960s and 70s, and we have experience with this type of facade — including cleaning and repairing plaster and brickwork before painting.",
  },
  {
    q: "Can you help with facade renovation of older terraced houses?",
    a: "Yes, facade renovation is a regular part of our work in Albertslund. We prepare the surfaces thoroughly, so the new paintwork lasts for many years.",
  },
  {
    q: "Do you also cover Hersted Industripark?",
    a: "Yes, we do both commercial painting in Hersted Industripark and home painting in the surrounding neighbourhoods.",
  },
  {
    q: "What does facade renovation cost in Albertslund?",
    a: "The price depends on the condition of the facade and how much preparation is needed. We always give a free, no-obligation quote once we have seen the job.",
  },
  {
    q: "Can you repair damage in concrete and joints before painting?",
    a: "Yes, concrete damage and leaking joints should always be fixed before painting. We assess the condition of the facade and recommend the right repair, so the paint that follows lasts for many years.",
  },
  {
    q: "How do I know whether the facade needs repair or just painting?",
    a: "It depends on how much damage there is. Minor cracks and surface wear can often be handled with thorough cleaning and painting, while larger damage in mortar or concrete needs repair first. We always assess this at an inspection.",
  },
];

export default function MalerAlbertslundEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Albertslund for brick and concrete buildings. Facade renovation, concrete and joint repair, interior and commercial painting. Free quote."
        />
        <meta
          name="keywords"
          content="painter albertslund, painting company albertslund, facade renovation albertslund, interior painting albertslund, painter herstedøster"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Albertslund. Facade painting, facade renovation and interior painting. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Albertslund. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Albertslund" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Albertslund
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for terraced houses, businesses and facade
              renovation in Albertslund — with experience in brick and concrete
              buildings.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Albertslund Municipality
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
              A painting company with experience in Albertslund
            </h2>
            <p className="text-muted-foreground mb-4">
              Albertslund is known for its distinctive terraced-house and brick
              developments from the 1960s and 70s. As a painter in Albertslund,
              we often work on facade renovation and wood protection on older
              developments, where the surfaces need thorough preparation before
              painting.
            </p>
            <p className="text-muted-foreground mb-4">
              We also do commercial painting for the many businesses in and
              around Hersted Industripark.
            </p>
            <p className="text-muted-foreground">
              We cover all of Albertslund Municipality, including{" "}
              <strong>Albertslund Nord</strong>,{" "}
              <strong>Albertslund Syd</strong> and{" "}
              <strong>Herstedøster</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Albertslund
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
                alt="Facade renovation of a terraced house"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Facade renovation in Albertslund
            </h2>
            <p className="text-muted-foreground mb-4">
              Many of the terraced houses in Albertslund are now 50-60 years
              old, and the facades often need a thorough renovation before they
              can be painted — repairs to brickwork, joints and woodwork.
            </p>
            <p className="text-muted-foreground mb-6">
              We always go through the facade thoroughly before giving a quote,
              so you know exactly what the job involves.
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

      {/* ARTICLE — BRICK AND CONCRETE FACADE RENOVATION */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Facade renovation of brick and concrete buildings in Albertslund
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Albertslund is known for its distinctive terraced-house and
                brick developments from the 1960s and 70s, and many
                developments also have concrete elements as part of the
                structure. At 50-60 years old, it is rarely enough to simply
                paint the facade again — first it has to be established whether
                there is damage in the brickwork, concrete or joints that needs
                repairing before the new paint can give a lasting result.
              </p>
              <p>
                Minor cracks and ordinary surface wear can often be handled
                with thorough cleaning and painting. Larger damage, such as
                spalling in concrete or reinforcement corrosion, needs repair
                first — otherwise the problem carries on under the new paint and
                becomes visible again relatively quickly. Leaking or
                broken-down joints should also be repaired, as they can let
                moisture into the structure.
              </p>
              <p>
                Besides home painting, we also do commercial painting for the
                many businesses in and around Hersted Industripark, where the
                requirements for the surfaces often differ from a private home
                — more durability, faster drying time and planning that takes
                the company's operations into account.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: facade and commercial in Albertslund
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {FACADE_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Surface or premises</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Key features</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Preparation and points to watch</th>
                  </tr>
                </thead>
                <tbody>
                  {FACADE_TABLE.map((row) => (
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
              How to plan the facade renovation
            </h3>
            <ul className="space-y-2">
              {[
                "Have the facade checked for damage to brickwork, concrete and joints before painting is planned.",
                "Repair larger damage first, so the new paint lasts for many years.",
                "Ask for one combined quote if several terraced houses in the same development are to be renovated.",
                "Mention if the job is commercial in Hersted Industripark, so we can plan around operations.",
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

      {/* ARTICLE — MAN MALER IN ALBERTSLUND */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Does the terraced house's facade need renovating before painting,
              or does the commercial unit in Hersted Industripark need a new
              coat? MAN MALER is your local painter in Albertslund, with
              experience in the distinctive brick and concrete buildings from
              the 1960s and 70s. We always give a free, no-obligation quote
              once we have seen the job.
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
              MAN MALER: facade renovation with a focus on the right preparation
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We always start with a thorough inspection of the facade before
                giving a quote. This matters especially in Albertslund, where
                many developments are 50-60 years old, and where damage to
                brickwork, concrete or joints can be hidden behind an otherwise
                neat-looking coat of paint. By assessing this first, we avoid
                the job becoming more expensive than necessary, or problems
                coming back shortly after the painting is done.
              </p>
              <p>
                We also do commercial painting in and around Hersted
                Industripark, where we adapt materials and planning to the
                company's operations and the requirements for surfaces in a
                commercial setting.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of
                your job in Albertslund — whether it is a single terraced house
                or a whole development that needs renovating.
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
              Our services in Albertslund
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facade renovation and facade painting",
                "Wood protection for windows and doors",
                "Interior painting of terraced houses",
                "Commercial painting for businesses",
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
                Interior painting in Albertslund →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Albertslund →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Albertslund →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Albertslund →
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
              Frequently asked questions — Painter in Albertslund
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
              Ready to get your Albertslund place painted?
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
