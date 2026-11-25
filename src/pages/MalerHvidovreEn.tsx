import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-hvidovre";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Hvidovre | Painting Company, Functionalist Houses";

const AREAS = ["Hvidovre by", "Avedøre", "Friheden", "Rebæk"];

const KEY_TAKEAWAYS = [
  "Many houses in Hvidovre were built in the functionalist or 1950s style, where period-correct colours give the most authentic look.",
  "A consistent colour palette across house, garage and fence often gives the most harmonious overall impression.",
  "Simple, clean lines are typical of functionalist architecture and should be respected in the choice of colour.",
  "Thorough removal of old paint on older facades is essential for an even, durable result.",
];

const PERIOD_TABLE = [
  {
    p: "Facade (functionalist/1950s style)",
    d: "Period-correct shades that respect the original architectural look of the house.",
    h: "Cleaning off old paint and repairing plaster should be assessed first.",
  },
  {
    p: "Windows and window frames",
    d: "Hard-wearing wood paint in a shade that matches the period and style of the facade.",
    h: "Older window frames often need thorough stripping before new paint.",
  },
  {
    p: "Fence and garden gate",
    d: "The same or a matching colour as the main house for a unified look.",
    h: "Can be painted in the same job as the facade.",
  },
  {
    p: "Garage and shed",
    d: "A colour that matches the main house, so the whole plot looks consistent.",
    h: "Simple to combine with facade painting to save time and cost.",
  },
  {
    p: "Interior trim and panels",
    d: "Simple, clean colours that suit the characteristic simplicity of the functionalist style.",
    h: "Precise work around edges gives the most professional result.",
  },
];

const FAQS = [
  {
    q: "Do you paint terraced houses from the 1950s and 60s in Hvidovre?",
    a: "Yes. Hvidovre has many terraced houses and detached houses from the mid-1900s, and we have experience with this type of surface — including cleaning off old paint and repairs before painting.",
  },
  {
    q: "How long does facade painting of a terraced house take?",
    a: "It depends on the condition of the house and how much preparation is needed. We always come and see the job before we give a schedule and a quote.",
  },
  {
    q: "Do you also cover Avedøre and Friheden?",
    a: "Yes, we cover all of Hvidovre Municipality, including Avedøre, Friheden and Rebæk.",
  },
  {
    q: "What does it cost to have a terraced house painted in Hvidovre?",
    a: "The price depends on the size and condition of the house. We always give a free, no-obligation quote once we have seen the job.",
  },
  {
    q: "Can you advise on period-correct colours for a functionalist house?",
    a: "Yes, we are happy to advise on shades that suit the year the house was built and its architectural style, so the facade looks authentic rather than random.",
  },
  {
    q: "Should the garage and fence be painted the same colour as the house?",
    a: "It often gives the most harmonious overall impression, especially in functionalist and 1950s areas, where the houses were originally designed with a consistent colour palette.",
  },
];

export default function MalerHvidovreEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Hvidovre for functionalist houses and terraced houses from the 1950s. Period-correct colours, interior painting and facade painting. Free quote."
        />
        <meta
          name="keywords"
          content="painter hvidovre, painting company hvidovre, facade painting hvidovre, interior painting hvidovre, painter avedøre, painter friheden, functionalist colours"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Hvidovre. Facade painting, interior painting and renovation. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Hvidovre. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: langPath("/omraader", "en") }, { name: "Painter in Hvidovre" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Hvidovre
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for terraced houses, detached houses and businesses in Hvidovre —
              facade painting, interior painting and renovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Hvidovre Municipality
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
              A painting company with experience in Hvidovre
            </h2>
            <p className="text-muted-foreground mb-4">
              Hvidovre has many terraced houses and detached houses from the
              mid-1900s, close to Copenhagen. As a painter in Hvidovre, we
              therefore often get jobs involving facade painting, wood
              protection and exterior maintenance of older housing.
            </p>
            <p className="text-muted-foreground mb-4">
              Many of the houses need thorough preparation before painting —
              cleaning off old paint, repairing plaster or woodwork, and the
              right primer, so the result lasts.
            </p>
            <p className="text-muted-foreground">
              We cover all of Hvidovre Municipality, including{" "}
              <strong>Avedøre</strong>, <strong>Friheden</strong> and{" "}
              <strong>Rebæk</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Hvidovre
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
              Facade painting of terraced houses
            </h2>
            <p className="text-muted-foreground mb-4">
              Facade painting of terraced houses and detached houses is one of
              the jobs we often do in Hvidovre — with a focus on thorough
              preparation and durable, weatherproof materials.
            </p>
            <p className="text-muted-foreground mb-6">
              We are also happy to advise on colours and materials that suit
              the age and style of the house.
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

      {/* ARTICLE — PERIOD-CORRECT COLOURS FOR FUNCTIONALIST HOUSES */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Period-correct colours for Hvidovre's functionalist houses
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Hvidovre has several characteristic residential areas built in
                the functionalist or 1950s style, marked by simple, clean lines
                and a clear architectural idea. When these houses are painted,
                the choice of colour is about more than personal taste — a
                shade that suits the year the house was built and its style
                gives a far more authentic and harmonious result than a random
                colour choice.
              </p>
              <p>
                Many of the houses were originally designed with a consistent
                colour palette, where the main house, garage, fence and garden
                gate work together. We are happy to advise on how to restore or
                respect this overall impression, while the house still looks
                contemporary and well kept.
              </p>
              <p>
                As with other older buildings, facades from the 1950s and 60s
                need thorough removal of old paint and any repair of plaster or
                woodwork before the new paint is applied. This applies both to
                the facade and to windows and window frames, which often have
                several layers of earlier paint that should be removed for an
                even result.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: colours and surfaces on the functionalist house
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {PERIOD_TABLE.map((row) => (
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
                  {PERIOD_TABLE.map((row) => (
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
              How to choose the right colour
            </h3>
            <ul className="space-y-2">
              {[
                "Consider the year the house was built and its style before choosing the final facade colour.",
                "Let the garage, fence and garden gate follow the same colour palette as the main house.",
                "Have old paint thoroughly cleaned off for an even result on older facades.",
                "Ask us about period-correct shades if you want an authentic look.",
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

      {/* ARTICLE — MAN MALER IN HVIDOVRE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Does your functionalist house need a facade colour that suits its
              architectural style, or does the terraced house need interior
              painting? MAN MALER is your local painter in Hvidovre, with
              experience in the municipality's characteristic residential
              areas from the mid-1900s. We always give a free, no-obligation
              quote once we have seen the job.
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
              MAN MALER: colour advice for Hvidovre's architecture
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We make sure the choice of colour respects the original style
                of the house, whether the job is a single terraced house or a
                whole group of houses in the same neighbourhood. That gives a
                result that not only looks good today, but also fits naturally
                into the overall streetscape.
              </p>
              <p>
                We always make a thorough assessment of the condition of the
                facade before we recommend a solution — older surfaces often
                need more preparation than newer buildings, and we include that
                in the quote, so there are no surprises along the way.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of
                your house in Hvidovre — whether it is a facade that needs a
                period-correct colour, or an interior job that needs a new
                look.
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
              Our services in Hvidovre
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facade painting and exterior maintenance",
                "Wood protection for windows, doors and fences",
                "Interior painting of terraced houses and detached houses",
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
              <Link to={L("/priser")} className="inline-block py-1 text-primary font-medium hover:underline">
                See our prices →
              </Link>
              <Link to={L("/ydelser/indendoers-maling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Interior painting in Hvidovre →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Hvidovre →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Hvidovre →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Hvidovre →
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
              Frequently asked questions — Painter in Hvidovre
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
              Ready to get your place painted in Hvidovre?
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
