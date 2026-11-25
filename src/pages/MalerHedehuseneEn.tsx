import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-hedehusene";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Hedehusene | Interior Painting & Facades";

const AREAS = ["Hedehusene by", "Baldersbrønde", "Fløng", "Reerslev"];

const KEY_TAKEAWAYS = [
  "Villas in Hedehusene are often 40-60 years old, and facades, windows and woodwork typically need cleaning and priming before new paint.",
  "Basements and utility rooms often need a different type of paint from the rest of the house because of damp.",
  "A combined quote for facade and interior painting saves time if both jobs need doing anyway.",
  "Book early in spring and autumn, when demand for facade painting is highest.",
];

const ROOM_TABLE = [
  {
    p: "Living room and lounge areas",
    d: "A calm, even wall colour that lasts for many years without feeling dull.",
    h: "Choose the shade to suit the light — many villa living rooms in Hedehusene have large windows facing the garden.",
  },
  {
    p: "Bedroom",
    d: "A matt or semi-matt finish that reduces glare and gives a calm feel.",
    h: "Less hard-wearing paint is usually fine, as the room is used less intensively than, say, the kitchen or entrance hall.",
  },
  {
    p: "Basement and utility room",
    d: "Moisture-blocking paint or special basement treatment, depending on the damp level.",
    h: "Many villa basements have natural damp — the preparation should always be assessed on site before paint is chosen.",
  },
  {
    p: "Woodwork, doors and windows",
    d: "Hard-wearing wood paint with good adhesion that withstands changing weather and handling.",
    h: "Removing old, flaking paint and priming correctly is essential on older villas.",
  },
  {
    p: "Facade",
    d: "Weather-resistant facade paint suited to the house's brickwork, render or timber cladding.",
    h: "Requires thorough cleaning and any repair of render or cracks before painting.",
  },
  {
    p: "Garage and shed",
    d: "Robust exterior paint, often in the same colour as the main house for a uniform look.",
    h: "Can be combined with facade painting of the main house to save on scaffolding/set-up.",
  },
];

const FAQS = [
  {
    q: "Do you paint villas in Hedehusene?",
    a: "Yes. Hedehusene, close to Roskilde, is mostly villa neighbourhoods, and we do both facade painting and interior painting of villas in the area.",
  },
  {
    q: "How far from Hedehusene do you cover?",
    a: "We cover Hedehusene and nearby areas such as Baldersbrønde, Fløng and Reerslev, as well as the whole Roskilde area.",
  },
  {
    q: "Can you help with renovation before painting?",
    a: "Yes, we are happy to do filling and surface preparation before we paint, so the result lasts for many years.",
  },
  {
    q: "What does it cost to have a villa painted in Hedehusene?",
    a: "The price depends on the size and condition of the house. We always give a free, no-obligation quote once we have seen the job.",
  },
  {
    q: "Can basements and utility rooms be painted too?",
    a: "Yes. Many villas in Hedehusene have a basement or utility room where damp can be a challenge. We assess the substrate and use moisture-blocking paint if relevant before we recommend a solution.",
  },
  {
    q: "Do you also paint garages and sheds?",
    a: "Yes, we are happy to paint garages, sheds and carports as part of a larger job, or as a separate smaller job next to the main house.",
  },
];

export default function MalerHedehuseneEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Hedehusene for villas and terraced houses. Interior painting, basement/utility room, facade painting and renovation. Free, no-obligation quote."
        />
        <meta
          name="keywords"
          content="painter hedehusene, painting company hedehusene, interior painting hedehusene, facade painting hedehusene, painter baldersbrønde"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Hedehusene. Interior painting, facade painting, renovation and commercial painting. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Hedehusene. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Hedehusene" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Hedehusene
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for villas in Hedehusene and the surrounding
              area — facade painting, interior painting and renovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover Hedehusene and the surrounding area
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
              A painting company with experience from Hedehusene
            </h2>
            <p className="text-muted-foreground mb-4">
              Hedehusene, close to Roskilde, is mostly villa neighbourhoods. As
              a painter in Hedehusene, we often do facade painting, wood
              protection and exterior maintenance, in addition to ordinary
              interior painting.
            </p>
            <p className="text-muted-foreground mb-4">
              The town's proximity to Roskilde means we can quickly get to jobs
              in both Hedehusene and the surrounding areas.
            </p>
            <p className="text-muted-foreground">
              We cover Hedehusene and the surrounding area, including{" "}
              <strong>Baldersbrønde</strong>, <strong>Fløng</strong> and{" "}
              <strong>Reerslev</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover Hedehusene and the surrounding area
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
                alt="Facade painting of a villa"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Facade painting of villas
            </h2>
            <p className="text-muted-foreground mb-4">
              Facade painting is one of the most requested jobs in Hedehusene —
              often combined with window painting and minor repairs to render
              or woodwork.
            </p>
            <p className="text-muted-foreground mb-6">
              We use weather-resistant materials and are happy to advise on
              colours that suit the style of the house.
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

      {/* ARTICLE — PAINTING THE VILLA ROOM BY ROOM */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              How to choose the right paint for your villa in Hedehusene
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Villas in Hedehusene are typically 40-60 years old, with a mix
                of brick facades, rendered surfaces and timber cladding. That
                means both interior and exterior painting often need more
                preparation than in a newer home — old, flaking paint has to be
                removed, render and woodwork repaired, and the substrate primed
                correctly before the new paint can give a lasting result.
              </p>
              <p>
                Indoors, it is especially the basement and utility room that
                make special demands. Many of the houses have natural damp on
                the basement level, and here it is important to assess whether
                moisture-blocking paint is needed, or whether the damp problem
                should be solved before painting. The living room, bedrooms and
                other lounge areas can usually be painted with ordinary wall
                paint, just adapted to the light and how the room is used.
              </p>
              <p>
                Outdoors, facade painting is the most requested job in
                Hedehusene, often combined with painting of windows, doors and
                the garage or shed. It makes sense to gather the jobs in one
                quote, so scaffolding or a lift only has to be set up once and
                the whole exterior of the house looks uniform.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: painting by room and surface
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {ROOM_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Room or surface</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Key features</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Preparation and points to watch</th>
                  </tr>
                </thead>
                <tbody>
                  {ROOM_TABLE.map((row) => (
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
              How to get started
            </h3>
            <ul className="space-y-2">
              {[
                "Describe which rooms and surfaces need painting, both inside and outside.",
                "Mention any damp in the basement or utility room, so we can assess the need for moisture-blocking paint.",
                "Get a combined quote if the facade, windows and garage/shed are to be painted at the same time.",
                "Arrange a site visit, so the preparation and number of coats can be assessed correctly.",
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

      {/* ARTICLE — MAN MALER IN HEDEHUSENE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Does the villa in Hedehusene need new facade paint, or do the
              living room, bedrooms or basement need a fresh coat inside? MAN
              MALER is your local painter in the Hedehusene area, close to
              Roskilde, with experience in both the facades of older villas
              and interior renovation. We always give a free, no-obligation
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
              MAN MALER: villa specialists close to Roskilde
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Hedehusene is known for its quiet villa neighbourhoods, which
                means we often work on the whole house — facade, windows,
                garage and garden on one side, and living room, bedrooms and
                basement on the other. That combination calls for a painter
                who can assess exterior and interior surfaces together, so the
                work is planned as efficiently as possible for you as a
                homeowner.
              </p>
              <p>
                Being close to Roskilde means we can quickly come out for a site
                visit and start jobs in Hedehusene, Baldersbrønde, Fløng and
                Reerslev. We make a point of inspecting the house before we give
                a quote, so you get a realistic picture of preparation,
                schedule and price — whether it is a single facade or a larger,
                combined renovation.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of
                your house in the Hedehusene area. With photos or a short
                description we can often give an initial assessment quickly;
                for larger jobs a site visit is always the best way to a
                precise quote.
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
              Our services in Hedehusene
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facade painting and exterior maintenance",
                "Interior painting of villas",
                "Renovation, filling and preparation of surfaces",
                "Wood protection for windows, doors and fences",
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
                Interior painting in Hedehusene →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Hedehusene →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Hedehusene →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Hedehusene →
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
              Frequently asked questions — Painter in Hedehusene
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
              Ready to get your Hedehusene place painted?
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
