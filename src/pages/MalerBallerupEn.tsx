import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import renovationImg from "@/assets/renovation.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-ballerup";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Ballerup | Painting Company, Offices & Business";

const AREAS = [
  "Ballerup by", "Skovlunde", "Måløv", "Smørum", "Tapeten", "Egebjerg",
];

const KEY_TAKEAWAYS = [
  "Ballerup has many office companies, and brand colours in reception and meeting rooms should be matched exactly.",
  "Reception and customer areas can often be painted in stages, so the business stays open during the work.",
  "Open-plan offices and meeting rooms make different demands on colour, acoustics and durability.",
  "One combined quote for several rooms in the same building often gives the most efficient planning.",
];

const OFFICE_TABLE = [
  {
    p: "Reception and customer area",
    d: "Professional colour scheme that matches the company's brand and makes a good first impression.",
    h: "Often planned in stages or outside busy hours, so customers are not disturbed.",
  },
  {
    p: "Meeting rooms",
    d: "Calm, professional colours that support concentration and meetings.",
    h: "Can often be painted in a single day if the room is not in use.",
  },
  {
    p: "Open-plan office",
    d: "Light, neutral colours that support a good working environment in large, open rooms.",
    h: "Typically planned outside working hours or in stages to avoid disrupting operations.",
  },
  {
    p: "Canteen and staff rooms",
    d: "Easy-to-clean, washable paint that can handle daily use and cleaning.",
    h: "Good ventilation during the work is important in rooms used for eating and breaks.",
  },
  {
    p: "Facade (commercial building)",
    d: "Weatherproof facade paint that gives a professional look from the outside.",
    h: "Cleaning off old paint and any repair of the facade should be assessed before painting.",
  },
];

const FAQS = [
  {
    q: "Do you paint both detached houses and apartment buildings in Ballerup?",
    a: "Yes. Ballerup has a mix of detached-house areas, terraced houses and apartment buildings, and we adapt the solution to the type of home — from facade painting on a house to interior painting in an apartment.",
  },
  {
    q: "How long does it take to have a house painted in Ballerup?",
    a: "It depends on the scope of the job and the condition of the house. We always come and see the job before we give a schedule and a specific quote.",
  },
  {
    q: "Do you also cover Skovlunde and Måløv?",
    a: "Yes, we cover all of Ballerup Municipality, including Skovlunde, Måløv, Smørum and the surrounding areas.",
  },
  {
    q: "Can you help with commercial painting for businesses in Ballerup?",
    a: "Yes, we do commercial painting for offices, shops and business premises in Ballerup, often planned outside normal working hours to avoid disturbing operations.",
  },
  {
    q: "What does painting work cost in Ballerup?",
    a: "The price depends on the scope of the job, the condition of the surfaces and the choice of materials. We always give a free, no-obligation quote once we have seen or had the job described.",
  },
  {
    q: "Can you paint in the company's brand colours?",
    a: "Yes, we are happy to match specific brand colours for reception, meeting rooms and open-plan offices, so the company's visual identity is consistent throughout the premises.",
  },
  {
    q: "Can reception and the customer area be painted while the business is open?",
    a: "In many cases yes, if the work is planned in stages or outside busy hours. We always agree a solution that disturbs customers and staff as little as possible.",
  },
];

export default function MalerBallerupEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Ballerup for office companies, houses and terraced houses. Interior painting in brand colours, facade painting and commercial painting. Free quote."
        />
        <meta
          name="keywords"
          content="painter ballerup, painting company ballerup, interior painting ballerup, facade painting ballerup, painter skovlunde, painter måløv, commercial office painting"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Ballerup. Interior painting, facade painting, renovation and commercial painting. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Ballerup. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: langPath("/omraader", "en") }, { name: "Painter in Ballerup" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Ballerup
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for detached houses, terraced houses, apartments and businesses in
              Ballerup Municipality — interior and exterior painting, renovation and
              commercial painting.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Ballerup Municipality
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
              A painting company for Ballerup and the surrounding area
            </h2>
            <p className="text-muted-foreground mb-4">
              Ballerup, in the western part of Greater Copenhagen, has a wide
              range of housing types — from detached-house areas and terraced
              houses to newer apartment buildings and business areas. As a
              painter in Ballerup, we therefore get both facade painting jobs
              on houses and interior painting in apartments.
            </p>
            <p className="text-muted-foreground mb-4">
              Whether you need a single renovated living room, a whole facade
              painted, or an ongoing maintenance agreement for business
              premises, we adapt the solution to the job and always give a
              free, no-obligation quote before the work starts.
            </p>
            <p className="text-muted-foreground">
              We cover <strong>Ballerup by</strong> and the surrounding
              areas such as <strong>Skovlunde</strong>, <strong>Måløv</strong>{" "}
              and <strong>Smørum</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Ballerup Municipality
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
                alt="Renovation and painting work"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Renovation and preparation of surfaces
            </h2>
            <p className="text-muted-foreground mb-4">
              Many of our jobs in the Ballerup area start with thorough
              preparation — filling, repairing surfaces and the right primer
              — before the painting itself begins. That gives a result that
              lasts for many years.
            </p>
            <p className="text-muted-foreground mb-6">
              We work with both private homes and commercial properties, and
              always plan the job so it fits into your day.
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

      {/* ARTICLE — OFFICE PAINTING AND BRAND COLOURS */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Office painting and brand colours for businesses in Ballerup
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Ballerup is home to a large number of office companies, and
                here painting is often about more than just choosing a nice
                colour. Reception and customer areas are the company's public
                face, and many want to match the paint to their brand colours,
                so the visual look is consistent whether a visitor is sitting
                in reception or in a meeting room.
              </p>
              <p>
                One practical question that often comes up is how to paint
                without the business having to close. We are therefore happy to
                plan the work in stages, or outside the times when there are
                most customers or meetings, so operations can continue as
                normally as possible during the painting.
              </p>
              <p>
                Open-plan offices, meeting rooms and canteens all make
                different demands on paint — from light, neutral colours in
                open offices to easy-to-clean surfaces in rooms where people
                eat. We are happy to advise on which solution suits each room
                best.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: painting office and commercial rooms
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {OFFICE_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Room</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Key features</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Planning and points to watch</th>
                  </tr>
                </thead>
                <tbody>
                  {OFFICE_TABLE.map((row) => (
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
              How to plan the office job
            </h3>
            <ul className="space-y-2">
              {[
                "Tell us your brand colours, so we can match them exactly.",
                "Let us know if the business needs to stay open during the work, so we can plan in stages.",
                "Choose easy-to-clean paint for the canteen and staff rooms.",
                "Get one combined quote if several rooms in the building are to be painted.",
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

      {/* ARTICLE — MAN MALER IN BALLERUP */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Does the office need new brand colours in reception, or does the
              house need facade painting? MAN MALER is your local painter in
              Ballerup, with experience in both office companies and private
              homes in the municipality. We always give a free, no-obligation
              quote once we have seen or had the job described.
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
              MAN MALER: from office painting to private homes
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We do ongoing jobs for office companies in Ballerup, where we
                match brand colours exactly and plan the work so it disturbs
                operations as little as possible. We also have a lot of
                experience with private homes — from detached houses and
                terraced houses to apartments, where the job can be anything
                from a single living room to a whole facade.
              </p>
              <p>
                Whatever the type of job, we always start by assessing what
                needs painting and what the requirements are for colour,
                finish and schedule. That gives a quote that is easy to
                understand and a process that suits both businesses and
                private homeowners.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of
                your job in Ballerup — whether it is an office that needs to
                match the company's brand, or a home that needs a new look.
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
              Our services in Ballerup
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Interior painting of apartments, houses and terraced houses",
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
                Interior painting in Ballerup →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Ballerup →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Ballerup →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Ballerup →
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
              Frequently asked questions — Painter in Ballerup
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
              Ready to get your place painted in Ballerup?
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
