import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";
import { EN_ROUTES, langPath } from "@/lib/enRoutes";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";

const DA_PATH = "/maler-koge";
const URL = `https://manmaler.dk${EN_ROUTES[DA_PATH]}`;
const L = (daPath: string) => langPath(daPath, "en");
const AREAS = ["Køge Bymidte", "Ølby", "Ll. Skensved", "Herfølge"];

const KEY_TAKEAWAYS = [
  "Køge's old town centre has many buildings worth preserving, where the choice of colour and materials should respect the building's original character.",
  "Half-timbered houses need a different technique from rendered facades, so the wood can breathe properly.",
  "Newer residential areas such as Ølby and Ll. Skensved have more ordinary requirements for facade and interior painting.",
  "Always check any municipal guidelines on colours before you choose a facade colour in the historic town centre.",
];

const SURFACE_TABLE = [
  {
    p: "Half-timbering",
    d: "Breathable paint that follows the natural movement of the wood and does not trap moisture.",
    h: "Requires an assessment of the condition of the wood and often repair of dried-out or rotten parts before painting.",
  },
  {
    p: "Rendered facades (older houses)",
    d: "Materials that suit the original render and respect the age and style of the house.",
    h: "The colour choice should be checked against any municipal guidelines for buildings worth preserving.",
  },
  {
    p: "Facades on newer houses",
    d: "Ordinary weather-resistant facade paint suited to the material of the house (brick, render or wood).",
    h: "Fewer restrictions than in the town centre, but thorough cleaning is still needed before painting.",
  },
  {
    p: "Old windows with glazing bars",
    d: "Hard-wearing wood paint that can be applied precisely around small panes and glazing bars.",
    h: "Time-consuming work — allow extra time for cleaning and several thin coats.",
  },
  {
    p: "Interior of older houses",
    d: "Paint suited to high ceilings, stucco and older walls that may be uneven.",
    h: "A thorough assessment of the substrate is important, as older walls often hide earlier repairs.",
  },
];

const FAQS = [
  {
    q: "Do you have experience with the historic buildings in Køge's town centre?",
    a: "Yes. Køge's older town centre has many historic buildings with characteristic facades, and we take special care of this in the preparation and choice of materials.",
  },
  {
    q: "Do you also paint newer residential areas such as Ølby?",
    a: "Yes, we do painting work in both the historic town centre and the newer residential areas around Køge, such as Ølby and Ll. Skensved.",
  },
  {
    q: "Do you also cover Herfølge?",
    a: "Yes, we cover the whole of Køge Municipality, including Herfølge and the surrounding villages.",
  },
  {
    q: "What does it cost to have a house painted in Køge?",
    a: "The price depends on the size, age and condition of the house. We always give a free, no-obligation quote once we have seen the job.",
  },
  {
    q: "Are there special rules on colours for houses in the old town centre?",
    a: "Many buildings worth preserving in Køge's town centre have guidelines on facade colours from the municipality or a local preservation plan. We are happy to help clarify what applies to your house before we choose a colour.",
  },
  {
    q: "Can you paint half-timbered houses?",
    a: "Yes, half-timbering needs a different technique and type of paint from an ordinary rendered facade. We assess the condition of the wood and use materials that let the wood breathe properly.",
  },
];

const TITLE = "Painter Køge | Painting company, interior & facade";

export default function MalerKogeEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Køge for historic houses and newer homes. Interior painting, half-timbering and facade painting in the old town centre and surroundings. Free quote."
        />
        <meta
          name="keywords"
          content="painter køge, painting company køge, interior painting køge, facade painting køge, painter ølby, painter herfølge"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Køge. Interior painting, facade painting and renovation. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Køge. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Køge" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Køge
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for historic houses and newer homes in Køge — facade painting, interior painting and renovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Køge Municipality
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
              A painting company with experience in Køge
            </h2>
            <p className="text-muted-foreground mb-4">
              Køge is a market town with an older town centre and newer residential areas outside it. As a painter in Køge, we adapt our work to both — from historic buildings with half-timbering and old facades to modern terraced houses and villas.
            </p>
            <p className="text-muted-foreground mb-4">
              When we work in the historic town centre, we take special care of the character of the buildings and use materials that suit the age and style of the facade.
            </p>
            <p className="text-muted-foreground">
              We cover all of Køge Municipality, including <strong>Ølby</strong>, <strong>Ll. Skensved</strong> and <strong>Herfølge</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Køge
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
                alt="Facade painting of a house in Køge"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Facade painting of historic houses
            </h2>
            <p className="text-muted-foreground mb-4">
              Houses in Køge's older town centre often need extra care when the facade is painted — correct cleaning, repair of render and woodwork, and materials that respect the building's original character.
            </p>
            <p className="text-muted-foreground mb-6">
              We are also happy to advise on colour choices that suit the age of the house and the surrounding streetscape.
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
              Painting historic houses and newer homes in Køge
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Køge is one of the older market towns in Zealand, and it shows clearly in the town centre with half-timbered houses, rendered facades and old windows with glazing bars. At the same time, the municipality has newer residential areas such as Ølby and Ll. Skensved, where the houses were built on completely different principles. As a painter in Køge, we therefore work with two very different approaches, depending on where the house is and how old it is.
              </p>
              <p>
                In the historic town centre, it is first and foremost about respecting the building's original character. Half-timbering must be treated with breathable paint that follows the movement of the wood, while rendered facades often need materials that suit the original render. Many of these houses are also worth preserving, which can mean the municipality has guidelines on which facade colours are allowed — something we always recommend clarifying before the work is planned.
              </p>
              <p>
                In the newer residential areas around Køge, the requirements are more ordinary: weather-resistant facade paint suited to the material of the house, and interior painting of newer walls and ceilings, which rarely need the same degree of special treatment as the old houses in the town centre.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: paint by the age and type of the house
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {SURFACE_TABLE.map((row) => (
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
                  {SURFACE_TABLE.map((row) => (
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
              How to plan the painting work properly
            </h3>
            <ul className="space-y-2">
              {[
                "Find out whether the house is worth preserving and whether rules apply to facade colours.",
                "Choose breathable paint for half-timbering, so the wood is not sealed in.",
                "Have the condition of rendered facades assessed before the colour and material are chosen.",
                "Allow extra time for old windows with glazing bars, as the work is more detailed.",
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
              Does the half-timbered house in Køge's town centre need new life, or does the villa in Ølby need interior painting? MAN MALER is your local painter in Køge, with experience in both the historic town centre and the newer residential areas in the municipality. We always give a free, no-obligation quote once we have seen the job.
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
              MAN MALER: experience with Køge's historic town centre
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Painting a house in Køge's town centre is a different job from painting a newer terraced house on the edge of the municipality. We always inspect the house before we give a quote, so we can assess the facade material, the age of the house and any preservation concerns to be taken into account. This applies especially to half-timbering and older rendered facades, where the wrong paint can do more harm than good.
              </p>
              <p>
                We are also happy to help clarify whether a house is covered by municipal guidelines on facade colours, so you avoid choosing a colour that later has to be redone. In the newer residential areas such as Ølby, Ll. Skensved and Herfølge the process is more straightforward, but we still put weight on thorough preparation and a quote that is easy to understand.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of your house in the Køge area — whether it is an old house in the town centre or a newer home in the surroundings.
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
              Our services in Køge
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facade painting of historic and newer houses",
                "Interior painting of villas and terraced houses",
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
              <Link to={L("/ydelser/indendoers-maling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Interior painting in Køge →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Køge →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Køge →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Køge →
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
              Frequently asked questions — Painter in Køge
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
              Ready to get your Køge place painted?
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
