import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import interiorImg from "@/assets/interior.webp";
import { EN_ROUTES, langPath } from "@/lib/enRoutes";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";

const DA_PATH = "/maler-greve";
const URL = `https://manmaler.dk${EN_ROUTES[DA_PATH]}`;
const L = (daPath: string) => langPath(daPath, "en");
const AREAS = ["Greve Strand", "Karlslunde", "Hundige", "Tune"];

const KEY_TAKEAWAYS = [
  "Greve's location by the coast means more wear from wind, sun and salty air on facades and woodwork.",
  "Weather-resistant products and thorough cleaning are especially important close to the coast.",
  "Decking, fences and outdoor woodwork should be treated regularly to last for many years.",
  "One combined quote for the facade and outdoor woodwork often gives the most efficient planning.",
];

const SURFACE_TABLE = [
  {
    p: "Facade",
    d: "Weather-resistant facade paint that can withstand wind, driving rain and salty air from the coast.",
    h: "Cleaning off algae, salt deposits and loose paint is often necessary before new treatment.",
  },
  {
    p: "Windows and exterior doors",
    d: "Hard-wearing wood paint with good adhesion that handles temperature swings and moisture.",
    h: "The coastal climate means more frequent maintenance than further inland.",
  },
  {
    p: "Decking and fences",
    d: "Wood protection or oil that protects against UV, moisture and weathering.",
    h: "Should be treated regularly — especially surfaces facing south and west.",
  },
  {
    p: "Living room and lounge areas",
    d: "A calm wall colour that brings out the light from large windows facing the garden or the beach.",
    h: "Choose the shade based on the light — many houses in Greve have open floor plans with plenty of daylight.",
  },
  {
    p: "Kitchen and bathroom",
    d: "Washable, moisture-resistant paint that handles high humidity and frequent cleaning.",
    h: "Especially important in bathrooms close to the coast, where humidity is generally higher.",
  },
];

const FAQS = [
  {
    q: "Do you paint detached houses in Greve?",
    a: "Yes. Greve has many detached-house neighbourhoods, and we do facade painting, interior painting and renovation to suit the type of home.",
  },
  {
    q: "Can you help with wood protection for fences and sheds?",
    a: "Yes, we do wood protection for fences, carports and sheds as part of our outdoor services in Greve.",
  },
  {
    q: "Do you also cover Karlslunde and Hundige?",
    a: "Yes, we cover the whole of Greve Municipality, including Karlslunde, Hundige and Tune.",
  },
  {
    q: "What does it cost to have a detached house painted in Greve?",
    a: "The price depends on the size and condition of the house. We always give a free, no-obligation quote once we have seen the job.",
  },
  {
    q: "Does the coastal location affect the choice of paint?",
    a: "Yes. Salty air, wind and moisture from the coast wear down facades, windows and woodwork faster. So we often choose more weather-resistant products and put extra weight on cleaning and priming when we paint close to the coast.",
  },
  {
    q: "Can you paint decking, fences and outdoor furniture?",
    a: "Yes, we are happy to do wood protection and painting of decking, fences and fixed outdoor furniture as part of a facade or garden job.",
  },
];

const TITLE = "Painter Greve | Painting company, interior & facade";

export default function MalerGreveEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Greve for detached houses by the coast. Interior painting, weather-resistant facade painting and wood protection. Free, no-obligation quote."
        />
        <meta
          name="keywords"
          content="painter greve, painting company greve, interior painting greve, facade painting greve, painter karlslunde, painter hundige"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Greve. Interior painting, facade painting and wood protection. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Greve. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Greve" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Greve
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for detached houses and villas by the coast in Greve — facade painting, interior painting and wood protection.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Greve Municipality
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
              A painting company with experience in Greve
            </h2>
            <p className="text-muted-foreground mb-4">
              Greve, on the coast south of Copenhagen, has many detached-house neighbourhoods. As a painter in Greve, we often do facade painting, wood protection and interior painting for homeowners in the area.
            </p>
            <p className="text-muted-foreground mb-4">
              The coastal location means facades and woodwork may need extra protection against wind and weather — we take that into account in our choice of materials.
            </p>
            <p className="text-muted-foreground">
              We cover all of Greve Municipality, including <strong>Karlslunde</strong>, <strong>Hundige</strong> and <strong>Tune</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Greve
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
                alt="Interior painting of a detached house"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Interior painting of detached houses
            </h2>
            <p className="text-muted-foreground mb-4">
              We do interior painting of living rooms, bedrooms and shared areas in detached houses in Greve — always with thorough masking and preparation of the surfaces.
            </p>
            <p className="text-muted-foreground mb-6">
              We are also happy to advise on colour choices that suit the light and layout of the home.
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
              Painting close to the coast: what the Greve climate demands
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Living close to the coast in Greve has its advantages — but it also puts special demands on facades, windows and woodwork. Wind, sun and salty air wear down surfaces faster than further inland, so the choice of paint and the preparation matter even more here than in many other areas.
              </p>
              <p>
                Outside, this means facades often need thorough cleaning before they are repainted — algae, salt deposits and loose paint must be removed so the new treatment can adhere properly. Windows, exterior doors, decking and fences should also be treated regularly, as these surfaces are especially exposed to the weather, particularly facing south and west.
              </p>
              <p>
                Inside, it is typically bathrooms and kitchens that need extra attention, as humidity is generally higher in homes near the coast. Here we choose washable, moisture-resistant paint that can handle both steam and frequent cleaning without losing its look.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: paint by surface and climate
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
              How to protect your home best
            </h3>
            <ul className="space-y-2">
              {[
                "Have the facade thoroughly cleaned of algae and salt deposits before repainting.",
                "Choose weather-resistant products for the facade, windows and exterior doors.",
                "Treat decking and fences regularly, especially on sides exposed to sun and wind.",
                "Use moisture-resistant paint in the kitchen and bathroom because of the higher humidity.",
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
              Does the detached house in Greve need a new facade before summer, or do the living room, kitchen or bathroom need a fresh coat inside? MAN MALER is your local painter in Greve, with experience of the special coastal climate from Greve Strand to Karlslunde, Hundige and Tune. We always give a free, no-obligation quote once we have seen the job.
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
              MAN MALER: experience with coastal homes in Greve
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Greve Municipality stretches from the detached-house neighbourhoods around Tune to the coastal areas at Greve Strand and Hundige, so homes have different needs depending on how close they are to the water. We always assess the house's location and exposure to the weather before we recommend materials and the number of coats — for the facade, windows and outdoor woodwork alike.
              </p>
              <p>
                Many of our jobs in Greve combine exterior maintenance with interior painting in the same project — for example facade painting in spring and renovation of the living room or bathroom in the same period. This makes for more efficient planning, both for us and for you as the homeowner.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of your house in the Greve area. With photos or a short description we can often give an initial assessment quickly; for larger jobs, especially outdoor ones, a site visit is always the best way to a precise quote.
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
              Our services in Greve
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facade painting and outdoor maintenance",
                "Wood protection for fences, carports and sheds",
                "Interior painting of detached houses and villas",
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
                Interior painting in Greve →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Greve →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Greve →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Greve →
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
              Frequently asked questions — Painter in Greve
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
              Ready to get your Greve place painted?
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
