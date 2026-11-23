import { Link } from "react-router-dom";
import PriceTable from "@/components/PriceTable";
import { PRICES_COMMON, PRICE_PATH } from "@/lib/prices";
import { NEARBY, cityByPath } from "@/lib/cities";
import { langPath } from "@/lib/enRoutes";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import interiorImg from "@/assets/interior.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import HreflangLinks from "@/components/HreflangLinks";

const DA_PATH = "/maler-frederiksberg";
const L = (daPath: string) => langPath(daPath, "en");
const AREAS = ["Frederiksberg Allé", "Solbjerg", "Flintholm", "Fasanvej"];

const KEY_TAKEAWAYS = [
  "Older apartment buildings in Frederiksberg often have stucco ceilings, cornices and wallpaper that need extra care when painting.",
  "Access via stairwells and stairs, and consideration for neighbours, affect how the work is planned.",
  "For smaller jobs you can often stay in the apartment while we paint individual rooms.",
  "Wallpaper removal and preparation of older walls should always be part of the quote when relevant.",
];

const APARTMENT_TABLE = [
  {
    p: "Stucco ceilings and cornices",
    d: "Precision work, where the surrounding surfaces are painted without damaging the details.",
    h: "Takes patience and often masking with tape before the painting starts.",
  },
  {
    p: "Walls with old wallpaper",
    d: "Wallpaper removal and preparation of the surface before new paint can be applied evenly.",
    h: "Old glue and uneven spots under the wallpaper often have to be fixed first.",
  },
  {
    p: "Woodwork and panels",
    d: "Hard-wearing paint with good adhesion, suited to the profiles and details of older woodwork.",
    h: "Stripping earlier layers of paint is often necessary in older buildings.",
  },
  {
    p: "Street-facing windows",
    d: "Durable paint that can withstand dust, traffic and frequent opening and closing.",
    h: "The city environment wears windows down faster than in quieter areas.",
  },
  {
    p: "Kitchen and bathroom in the apartment",
    d: "Washable, moisture-resistant paint that handles daily use and cleaning.",
    h: "Especially important in smaller apartments, where the rooms are used heavily.",
  },
];

const FAQS = [
  {
    q: "Do you have experience with older apartment buildings in Frederiksberg?",
    a: "Yes. Frederiksberg has many older apartment buildings with stucco ceilings and characteristic details, and we adapt our work to them, both for interior painting and for facade work.",
  },
  {
    q: "Can you paint an apartment while I live there?",
    a: "In many cases yes, especially for individual rooms. For larger jobs we often recommend moving out of the affected rooms for a while. We always find a solution that fits your situation.",
  },
  {
    q: "Do you also paint facades in Frederiksberg?",
    a: "Yes, we do facade painting and exterior maintenance on buildings in Frederiksberg, including preparing older surfaces before painting.",
  },
  {
    q: "What does it cost to have an apartment painted?",
    a: "The price depends on the size and condition of the apartment. We always give a free, no-obligation quote once we have seen the job or had it described to us.",
  },
  {
    q: "Can you paint around stucco ceilings without damaging them?",
    a: "Yes, we work carefully around stucco ceilings, cornices and other older details so they stay intact while the surrounding surfaces are painted.",
  },
  {
    q: "Can you remove old wallpaper before painting?",
    a: "Yes, wallpaper removal is a common part of our work in older apartments in Frederiksberg. We assess the surface and prepare the wall properly before the new paint is applied.",
  },
];

const TITLE = "Painter Frederiksberg | Prices from 65 DKK/m² – MAN MALER";
const URL = "https://manmaler.dk/en/painter-frederiksberg";

function nearbyName(name: string) {
  return name === "København" ? "Copenhagen" : name;
}

function NearbyAreasEn({ current }: { current: string }) {
  const here = cityByPath(current);
  const nearby = (NEARBY[current] ?? []).map(cityByPath).filter(Boolean);
  if (!here || nearby.length === 0) return null;

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
            Painting work near {nearbyName(here.name)}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nearby.map((city) => (
              <Link
                key={city!.path}
                to={L(city!.path)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
              >
                <MapPin size={16} className="text-primary flex-shrink-0" />
                Painter in {nearbyName(city!.name)}
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function MalerFrederiksbergEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Frederiksberg for apartments and older buildings. See prices, e.g. walls from 65 DKK/m² incl. VAT, and get a free quote within 24 hours."
        />
        <meta
          name="keywords"
          content="painter frederiksberg, painting company frederiksberg, interior painting frederiksberg, facade painting frederiksberg, painter solbjerg, painter flintholm"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Frederiksberg. Interior painting, facade painting and renovation. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Frederiksberg. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: "/omraader" }, { name: "Painter in Frederiksberg" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Frederiksberg
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for apartments and buildings in Frederiksberg —
              interior painting, facade painting and renovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Frederiksberg
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
              A painting company that knows Frederiksberg
            </h2>
            <p className="text-muted-foreground mb-4">
              Frederiksberg is densely built and known for its many older
              apartment buildings with stucco ceilings, tall panels and
              characteristic facades. As a painter in Frederiksberg, we often
              get jobs that need both precision with the details and
              experience with older surfaces.
            </p>
            <p className="text-muted-foreground mb-4">
              We also know the practical side of working in densely built
              areas — access via stairwells and stairs, consideration for
              neighbours, and limited parking. We take this into account when
              we plan a job in Frederiksberg.
            </p>
            <p className="text-muted-foreground">
              We cover all of Frederiksberg, including areas around{" "}
              <strong>Frederiksberg Allé</strong>, <strong>Solbjerg</strong>,{" "}
              <strong>Flintholm</strong> and <strong>Fasanvej</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Frederiksberg
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
                alt="Interior painting of an apartment"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Interior painting of apartments
            </h2>
            <p className="text-muted-foreground mb-4">
              Many of our jobs in Frederiksberg are interior painting of
              apartments — walls, ceilings, woodwork and panels, often with
              respect for older building details such as stucco ceilings and
              cornices.
            </p>
            <p className="text-muted-foreground mb-6">
              We always prepare the surfaces thoroughly before painting, so
              the result is durable and professional.
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

      {/* ARTICLE — PAINTING IN OLDER APARTMENTS */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Painting in older apartments in Frederiksberg
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Frederiksberg is one of the most densely built districts in the
                Copenhagen area, and it shows in the housing stock: many
                apartment buildings were built 80-100 years ago, with stucco
                ceilings, tall panels, cornices and often several layers of
                wallpaper under the current surface. That makes different
                demands on the painting work than in newer buildings.
              </p>
              <p>
                Stucco ceilings and cornices call for precision work — the
                surrounding surfaces must be painted without damaging the
                details, which often means thorough masking and patience rather
                than quick fixes. Walls with older wallpaper usually need
                thorough preparation: the wallpaper is removed, the surface is
                assessed, and any uneven spots or old glue are fixed before the
                new paint can give an even result.
              </p>
              <p>
                The dense buildings also bring practical considerations that
                are not as common elsewhere: access via stairwells and stairs,
                consideration for neighbours, and often limited options for
                parking close to the building. We always plan jobs in
                Frederiksberg with this in mind, so the work runs as smoothly
                as possible.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: painting in the older apartment
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {APARTMENT_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Surface or detail</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Key features</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Preparation and points to watch</th>
                  </tr>
                </thead>
                <tbody>
                  {APARTMENT_TABLE.map((row) => (
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
              How to plan the job
            </h3>
            <ul className="space-y-2">
              {[
                "Tell us if the apartment has stucco ceilings or other details that need to be protected.",
                "Mention if there is old wallpaper that must be removed before the walls are painted.",
                "Clarify access via the stairwell and stairs, especially for larger jobs.",
                "Agree whether you will stay during the work, or whether some rooms need to be empty for a while.",
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

      {/* PRICE */}
      <section id="priser" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              What does a painter in Frederiksberg cost?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Prices are the same in Frederiksberg as in the rest of Copenhagen and Zealand. Here are the most
              common jobs. Prices are in Danish kroner incl. 25% VAT and are guidelines, as the final price
              depends on the job. In older apartments with stucco ceilings, wallpaper and high ceilings, the
              preparation can take longer, so feel free to send photos.
            </p>
            <div className="mb-6">
              <PriceTable rows={PRICES_COMMON} lang="en" />
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              See all prices, including filling, wallpaper, doors and repairs, on the{" "}
              <Link to={langPath(PRICE_PATH, "en")} className="text-primary hover:underline">price page</Link>.
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get a free quote
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE — MAN MALER IN FREDERIKSBERG */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Does your apartment in Frederiksberg need a fresh start, or does
              the building's facade need maintenance? MAN MALER is your local
              painter in Frederiksberg, with experience in older apartment
              buildings, stucco ceilings and the practical side of working in a
              densely built district. We always give a free, no-obligation
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
              MAN MALER: experience with Frederiksberg's older buildings
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Many of our jobs in Frederiksberg are about bringing life back
                to apartments that have not been painted in many years — often
                with several layers of old wallpaper, worn panels and stucco
                ceilings that have to be treated with respect for their
                original character. We always assess the surface thoroughly
                before we recommend a solution, so the result is durable and
                suits the character of the apartment.
              </p>
              <p>
                Besides the interior work, we also do facade painting and
                exterior maintenance on buildings in Frederiksberg. Here access
                matters more than in many other places — scaffolding, lifts and
                transport of materials must be coordinated with residents and
                possibly the housing association, which we always plan well in
                advance.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of
                your apartment or building in Frederiksberg. With photos or a
                short description we can often give an initial assessment
                quickly; for larger jobs a site visit is always the best way to
                a precise quote.
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
              Our services in Frederiksberg
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Interior painting of apartments and buildings",
                "Facade painting and exterior maintenance",
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
                Interior painting in Frederiksberg →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Frederiksberg →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Frederiksberg →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Frederiksberg →
              </Link>
              <Link to={L("/omraader")} className="inline-block py-1.5 text-sm text-muted-foreground hover:underline">
                See all the areas we cover →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <NearbyAreasEn current={DA_PATH} />

      {/* FAQ */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-10 text-center text-card-foreground">
              Frequently asked questions — Painter in Frederiksberg
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
              Ready to get your Frederiksberg place painted?
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
