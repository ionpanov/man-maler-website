import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import renovationImg from "@/assets/renovation.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-gentofte";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Gentofte | Villa Painting & High-End Finish";
const AREAS = ["Hellerup", "Charlottenlund", "Ordrup", "Vangede"];

const KEY_TAKEAWAYS = [
  "Gentofte's large villas often have many details — mouldings, panels and stucco — that call for precision rather than quick fixes.",
  "Decorative techniques such as lime paint and textured paint can bring out a villa's architectural style.",
  "Many villas are listed as worth preserving, which can mean guidelines for facade colours and materials.",
  "Quality materials and enough time for each coat are essential for a result that lasts for many years.",
];

const FINISH_TABLE = [
  {
    p: "Mouldings, panels and door surrounds",
    d: "Precision work with sharp edges and smooth transitions between surfaces and colours.",
    h: "Needs thorough masking and patience — this is where the professional result shows most clearly.",
  },
  {
    p: "Stucco and classic details",
    d: "Careful painting that keeps the details sharp without filling the profiles.",
    h: "Older stucco can be fragile and should be handled with care throughout the process.",
  },
  {
    p: "Facade (villa worth preserving)",
    d: "Materials and colours that respect the villa's original architectural style.",
    h: "Check any municipal guidelines for colour choice before the work starts.",
  },
  {
    p: "Decorative walls (lime paint etc.)",
    d: "A lively, natural surface with depth, different from ordinary wall paint.",
    h: "Needs experience with the technique, as the result is hard to correct once applied.",
  },
  {
    p: "Exterior woodwork and windows",
    d: "Hard-wearing, weather-resistant wood paint that matches the house's high level of finish.",
    h: "Thorough cleaning and several thin coats give the most durable and neat result.",
  },
];

const FAQS = [
  {
    q: "Do you work on the large villas Gentofte is known for?",
    a: "Yes. Gentofte has many large, well-kept villas, and we focus on a high level of finish and precision in all our work here.",
  },
  {
    q: "Can you help with full renovation of older villas?",
    a: "Yes, we are happy to take on extensive renovation jobs where both the facade and interior surfaces are prepared and painted in one continuous process.",
  },
  {
    q: "Do you also cover Hellerup and Charlottenlund?",
    a: "Yes, we cover all of Gentofte Municipality, including Hellerup, Charlottenlund, Ordrup and Vangede.",
  },
  {
    q: "What does it cost to have a villa painted in Gentofte?",
    a: "The price depends on the size and condition of the house and the choice of materials. We always give a free, no-obligation quote once we have seen the job.",
  },
  {
    q: "Do you offer decorative painting techniques such as lime paint?",
    a: "Yes, we are happy to do lime paint, textured paint and other decorative techniques that suit the villa's architecture and the look you want.",
  },
  {
    q: "Are there special considerations for villas worth preserving?",
    a: "Many villas in Gentofte are listed as worth preserving, and there may be guidelines for facade colours and materials. We are happy to help clarify this before we recommend a solution.",
  },
];

export default function MalerGentofteEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Gentofte for large villas. Interior painting with a high finish, decorative techniques and facade painting of listed homes. Free quote."
        />
        <meta
          name="keywords"
          content="painter gentofte, painting company gentofte, interior painting gentofte, facade painting gentofte, painter hellerup, painter charlottenlund"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Gentofte. Facade painting, interior painting and renovation of villas. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Gentofte. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Gentofte" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Gentofte
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for villas in Gentofte — facade painting, interior painting and renovation with a focus on precision and finish.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Gentofte Municipality
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
              A painting company with experience in Gentofte
            </h2>
            <p className="text-muted-foreground mb-4">
              {"Gentofte is known for its large villas and well-kept residential areas. As a painter in Gentofte, we focus on precision and a high level of finish in everything we do — from facade painting to interior jobs."}
            </p>
            <p className="text-muted-foreground mb-4">
              {"We take plenty of time to prepare the surfaces, so the result lives up to the high standards many homeowners in the area expect."}
            </p>
            <p className="text-muted-foreground">
              We cover all of Gentofte Municipality, including{" "}
              <strong>Hellerup</strong>, <strong>Charlottenlund</strong> and{" "}
              <strong>Ordrup</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Gentofte
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
                alt="Renovation of a villa"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Renovation with a high finish
            </h2>
            <p className="text-muted-foreground mb-4">
              {"Many of our jobs in Gentofte are renovations of older villas, where the details matter a lot — mouldings, panels and transitions must be painted with precision."}
            </p>
            <p className="text-muted-foreground mb-6">
              {"We use quality materials and take the time each coat needs, so the result lasts for many years."}
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
              Villa painting with a high finish in Gentofte
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                {"Gentofte is known for large, well-kept villas, where the details often matter as much as the large surfaces. Mouldings, panels, door surrounds and stucco call for a different approach from an ordinary wall — it is about precision work, sharp edges and smooth transitions between colours, rather than getting on quickly."}
              </p>
              <p>
                {"Many of the villas in the municipality are also listed as worth preserving, which means facade colours and materials should respect the house's original architectural style. We are happy to clarify any municipal guidelines before we recommend a solution, so the result both looks good and follows the rules in force."}
              </p>
              <p>
                {"For homeowners who want something beyond ordinary wall paint, we also offer decorative techniques such as lime paint and textured paint. These techniques give a lively, natural surface with depth, but need experience — the result is hard to correct once applied, so preparation and precision are essential."}
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: finish and techniques for the villa
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {FINISH_TABLE.map((row) => (
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
                  {FINISH_TABLE.map((row) => (
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
              How to get the best result
            </h3>
            <ul className="space-y-2">
              {[
                "Set aside time for a site visit, so all details and wishes are clarified in advance.",
                "Find out whether the house is listed as worth preserving before choosing a facade colour.",
                "Consider a decorative technique such as lime paint if you want a unique look.",
                "Choose quality materials that match the villa's level and last for many years.",
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
              {"Should the villa in Gentofte get a new facade, or do you want a unique look indoors with a decorative technique? MAN MALER is your local painter in Gentofte, with experience in the high level of finish many homeowners in the area expect. We always give a free, no-obligation quote once we have seen the job."}
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
              MAN MALER: precision for Gentofte's villas
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                {"Our jobs in Gentofte are rarely just about painting a surface — they are about reaching a result that matches the villa's standard and the homeowner's expectations. That applies whether the job is a classic facade painting, a full renovation of an older villa, or a decorative wall treatment meant to give a room a special look."}
              </p>
              <p>
                {"We always take plenty of time for preparation, as that is where the foundation for a durable and good-looking result is laid. On larger jobs we often combine facade work and interior renovation in one continuous process, so the villa looks uniform, both outside and inside."}
              </p>
              <p>
                {"Contact MAN MALER if you want a no-obligation assessment of your villa in Gentofte. For jobs like this we always recommend a site visit, so we can give a quote that takes account of all details, wishes and any preservation requirements."}
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
              Our services in Gentofte
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facade painting of villas with a high finish",
                "Interior painting and decorative techniques",
                "Colour advice suited to the house's style",
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
                Interior painting in Gentofte →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Gentofte →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Gentofte →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Gentofte →
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
              Frequently asked questions — Painter in Gentofte
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
              Ready to get your painting done in Gentofte?
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
