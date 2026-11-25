import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-lyngby";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Lyngby | Large Properties & Commercial Painting";
const AREAS = ["Kongens Lyngby", "Virum", "Sorgenfri", "Lundtofte"];

const KEY_TAKEAWAYS = [
  "Large properties with gardens and several buildings need more planning of access, scaffolding and logistics.",
  "Pool houses, orangeries and garden rooms are often painted as part of one job together with the main house.",
  "The business area around DTU has offices and laboratories with special requirements for surfaces.",
  "Good planning of access routes through the garden saves time and reduces the risk of damage to plants.",
];

const ESTATE_TABLE = [
  {
    p: "Facade (large property)",
    d: "Weather-resistant facade paint that can be applied efficiently on large, continuous surfaces.",
    h: "Scaffolding and access through the garden should be planned so plants and the driveway are not damaged.",
  },
  {
    p: "Pool house and orangery",
    d: "Materials suited to high humidity and temperature swings in glass and pool areas.",
    h: "Can often be painted in the same run as the main house, saving a second scaffolding set-up.",
  },
  {
    p: "Garage and carport",
    d: "Robust outdoor paint that matches the colour and style of the main house.",
    h: "Easy to combine with facade painting for a uniform overall look.",
  },
  {
    p: "Office and laboratory (commercial)",
    d: "Paint resistant to chemicals and cleaning, suited to the demands of laboratories and offices.",
    h: "Often planned outside working hours to avoid disturbing research or operations.",
  },
  {
    p: "Interior of the main house",
    d: "High finish with calm colours that support the house's architecture and size.",
    h: "Thorough covering of large rooms and furniture is an important part of the preparation.",
  },
];

const FAQS = [
  {
    q: "Do you have experience with larger villas and stately homes in Lyngby?",
    a: "Yes. Kongens Lyngby and the surrounding area have many large villas, and we focus on precision and a high level of finish, both for facade painting and interior jobs.",
  },
  {
    q: "How long does it take to paint the facade of a larger villa?",
    a: "It depends on the size of the house and the condition of the facade. We always come and see the job before we give a concrete schedule and quote.",
  },
  {
    q: "Do you also cover Virum and Sorgenfri?",
    a: "Yes, we cover all of Lyngby-Taarbæk Municipality, including Virum, Sorgenfri and Lundtofte.",
  },
  {
    q: "What does it cost to have a villa painted in Lyngby?",
    a: "The price depends on the size and condition of the house and the choice of materials. We always give a free, no-obligation quote once we have seen the job.",
  },
  {
    q: "Can you paint pool houses, orangeries and other buildings in the garden?",
    a: "Yes, many of the large properties in Lyngby have pool houses, orangeries or garden rooms, which we are happy to paint as part of one job or separately.",
  },
  {
    q: "Do you do commercial painting for offices and laboratories near DTU?",
    a: "Yes, we are happy to paint offices and laboratories in the business area around DTU, adapted to any requirements for chemical resistance and easy-to-clean surfaces.",
  },
];

export default function MalerLyngbyEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Kongens Lyngby for large villas, pool houses and commercial premises near DTU. Interior, facade and commercial painting. Free quote."
        />
        <meta
          name="keywords"
          content="painter lyngby, painting company lyngby, interior painting lyngby, facade painting lyngby, painter virum, painter sorgenfri, commercial painting dtu"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Kongens Lyngby. Facade painting, interior painting and renovation of villas. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Kongens Lyngby. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Lyngby" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Lyngby
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for villas and houses in Kongens Lyngby — facade painting, interior painting and renovation with precision.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Lyngby-Taarbæk
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
              A painting company with experience in Lyngby
            </h2>
            <p className="text-muted-foreground mb-4">
              {"Kongens Lyngby, in the north of Greater Copenhagen, has many large villas and stately homes. As a painter in Lyngby, we put special emphasis on precision, clean lines and a professional finish — both for facade painting and interior jobs."}
            </p>
            <p className="text-muted-foreground mb-4">
              {"We often take on extensive renovation jobs, where both exterior and interior surfaces need thorough preparation before painting."}
            </p>
            <p className="text-muted-foreground">
              We cover all of Lyngby-Taarbæk Municipality, including{" "}
              <strong>Virum</strong>, <strong>Sorgenfri</strong> and{" "}
              <strong>Lundtofte</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Lyngby-Taarbæk
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
              Facade painting with precision
            </h2>
            <p className="text-muted-foreground mb-4">
              {"Larger villas in the Lyngby area often need a more extensive process — scaffolding, thorough cleaning and several coats of paint for a durable and good-looking result."}
            </p>
            <p className="text-muted-foreground mb-6">
              {"We are happy to advise on colours and materials that suit the style and architecture of the house."}
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
              Painting large properties and businesses in Lyngby
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                {"Kongens Lyngby and the surrounding area have many properties with large gardens and several buildings — a main house, a garage, and often a pool house or orangery too. That makes different demands on planning than an ordinary terraced house: access through the garden, placement of scaffolding and protection of plants must be thought through before the work starts."}
              </p>
              <p>
                {"Pool houses and orangeries are often exposed to high humidity and large temperature swings, which calls for materials that can cope with that environment. When several buildings on the same plot are to be painted, it makes sense to combine the jobs into one run, so scaffolding and set-up only need to happen once."}
              </p>
              <p>
                {"Lyngby is also home to DTU and a large business area with offices and laboratories. Here the jobs make different demands than private homes — surfaces often need to withstand chemicals and frequent cleaning, and the work is typically planned outside working hours so as not to disturb research or daily operations."}
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: painting properties and commercial premises
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {ESTATE_TABLE.map((row) => (
                <div key={row.p} className="p-4 rounded-xl bg-warm-surface border border-border">
                  <p className="font-semibold text-foreground mb-2">{row.p}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-foreground">Key features: </span>
                    {row.d}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Planning: </span>
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Building or room</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Key features</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Planning and points to watch</th>
                  </tr>
                </thead>
                <tbody>
                  {ESTATE_TABLE.map((row) => (
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
              How to plan the large job
            </h3>
            <ul className="space-y-2">
              {[
                "Tell us how many buildings on the plot need painting, so we can give one overall quote.",
                "Clarify access routes through the garden, so plants and the driveway are not damaged.",
                "Mention any special requirements for chemical resistance if the job is an office or laboratory.",
                "Agree the timing for commercial jobs, so operations are disturbed as little as possible.",
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
              {"Should the main house, pool house and garage be painted in one run, or does the office near DTU need new walls? MAN MALER is your local painter in Lyngby, with experience in both large private properties and the business community that comes with DTU and the surrounding companies. We always give a free, no-obligation quote once we have seen the job."}
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
              MAN MALER: logistics for large properties and businesses
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                {"When a property in Lyngby has several buildings and a large garden, the job is as much about planning as about the painting itself. We always assess access, placement of scaffolding and the order of the buildings before we give a quote, so the work can be done efficiently and without unnecessary damage to the garden and plants."}
              </p>
              <p>
                {"In the business area around DTU we take on jobs that need a different approach from private homes — offices and laboratories often have specific requirements for how resistant the surfaces are, and the work typically has to be planned outside normal working hours so as not to disturb operations."}
              </p>
              <p>
                {"Contact MAN MALER if you want a no-obligation assessment of your job in the Lyngby area — whether it is a large property with several buildings or commercial premises that need careful planning."}
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
              Our services in Lyngby
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facade painting of villas and larger houses",
                "Interior painting with a focus on finish",
                "Renovation, filling and preparation of surfaces",
                "Commercial painting for offices and institutions",
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
                Interior painting in Lyngby →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Lyngby →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Lyngby →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Lyngby →
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
              Frequently asked questions — Painter in Lyngby
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
              Ready to get your painting done in Lyngby?
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
