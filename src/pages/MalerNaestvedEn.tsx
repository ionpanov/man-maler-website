import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import commercialImg from "@/assets/commercial.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-naestved";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Næstved | Interior Painting & Commercial";

const AREAS = ["Næstved Bymidte", "Karrebæksminde", "Fensmark", "Herlufsholm"];

const KEY_TAKEAWAYS = [
  "Næstved has a broad business community, and jobs range from offices and shops to institutions and industrial halls.",
  "Work in schools and care homes is always planned outside hours of use, with low-emission paint where relevant.",
  "Industrial halls and production premises have special requirements for durability and ease of cleaning.",
  "A combined quote for several rooms or buildings often gives the most efficient planning for business customers.",
];

const COMMERCIAL_TABLE = [
  {
    p: "Office",
    d: "Calm, professional colour schemes that support a good working environment.",
    h: "Often planned outside working hours or in stages, so operations are not disrupted.",
  },
  {
    p: "Shop and showroom",
    d: "Colours and finish that support the brand and create a welcoming space for customers.",
    h: "Often done outside opening hours or during a planned closure.",
  },
  {
    p: "School and institution",
    d: "Robust, easy-to-clean paint that can handle heavy use and frequent cleaning.",
    h: "Low-emission paint is recommended, and the work is planned outside hours of use out of consideration for the users.",
  },
  {
    p: "Care home and healthcare facility",
    d: "Low-emission, hygiene-friendly paint suited to the needs of residents and staff.",
    h: "Requires close coordination with the facility on timing and access to the rooms.",
  },
  {
    p: "Industrial hall and production",
    d: "Hard-wearing paint, often resistant to chemicals and cleaning, suited to the production environment.",
    h: "Fire protection requirements and the substrate should be clarified before the materials are chosen.",
  },
];

const FAQS = [
  {
    q: "Do you do both residential and commercial painting in Næstved?",
    a: "Yes. Næstved is one of the larger towns in South Zealand, with both homes and businesses, and we do painting work for both.",
  },
  {
    q: "Can you help with larger commercial jobs?",
    a: "Yes, we are happy to take on larger commercial painting jobs for offices, shops and institutions in Næstved and the surrounding area.",
  },
  {
    q: "Do you also cover Fensmark and Karrebæksminde?",
    a: "Yes, we cover all of Næstved Municipality, including Fensmark, Karrebæksminde and Herlufsholm.",
  },
  {
    q: "What does it cost to have a home painted in Næstved?",
    a: "The price depends on the size and condition of the home. We always give a free, no-obligation quote once we have seen the job or had it described to us.",
  },
  {
    q: "Can you paint in schools, care homes or other institutions?",
    a: "Yes, we are happy to do painting work in institutions. We always plan the job outside hours of use, and we use low-emission paint where relevant out of consideration for the users.",
  },
  {
    q: "Do you paint industrial halls and production premises?",
    a: "Yes, we are happy to paint industrial halls and production premises, adapted to the requirements for durability, cleaning and any fire protection in the individual room.",
  },
];

export default function MalerNaestvedEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Næstved for homes, institutions and businesses. Interior, facade and commercial painting for offices and industrial halls. Free quote."
        />
        <meta
          name="keywords"
          content="painter næstved, painting company næstved, interior painting næstved, facade painting næstved, painter fensmark, commercial painting næstved"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Næstved. Interior painting, facade painting and commercial painting. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Næstved. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Næstved" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Næstved
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for homes and businesses in Næstved — interior
              and exterior painting, renovation and commercial painting.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Næstved Municipality
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
              A painting company with experience from Næstved
            </h2>
            <p className="text-muted-foreground mb-4">
              Næstved in South Zealand is one of the region's larger towns,
              with both older and newer residential areas and a broad business
              community. As a painter in Næstved, we do both residential
              painting for private customers and commercial painting for
              businesses and institutions.
            </p>
            <p className="text-muted-foreground mb-4">
              We always adapt the quote to the size of the job, whether it is a
              single apartment or a larger commercial property.
            </p>
            <p className="text-muted-foreground">
              We cover all of Næstved Municipality, including{" "}
              <strong>Fensmark</strong>, <strong>Karrebæksminde</strong> and{" "}
              <strong>Herlufsholm</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Næstved
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
                src={commercialImg}
                alt="Commercial painting of an office"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Commercial painting in Næstved
            </h2>
            <p className="text-muted-foreground mb-4">
              Næstved has a broad business community, and commercial painting
              is a regular part of our work here — from offices and shops to
              larger institutions.
            </p>
            <p className="text-muted-foreground mb-6">
              We always plan the work to fit into the company's daily routine
              and disrupt operations as little as possible.
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

      {/* ARTICLE — COMMERCIAL PAINTING IN NÆSTVED */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Commercial painting for Næstved's businesses and institutions
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Næstved is one of South Zealand's largest towns, and that is
                reflected in the range of commercial jobs we do here — offices,
                shops, schools, care homes and industrial halls each have their
                own requirements for paint, planning and choice of materials.
                As a painter in Næstved, we always adapt our approach to how
                the room is used and the people who spend time there every day.
              </p>
              <p>
                In schools and care homes, we put special emphasis on planning
                the work outside hours of use and using low-emission paint, so
                residents, pupils and staff are disturbed as little as
                possible. In shops and showrooms, it is often about getting the
                right colour and finish for the brand, while the work is
                typically done outside opening hours or during a planned
                closure.
              </p>
              <p>
                In industrial halls and production premises, the job makes
                other demands: here the paint often has to withstand
                chemicals, frequent cleaning and wear from daily operations,
                and any fire protection requirements must be clarified before
                the materials are chosen.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: commercial painting by type of room
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {COMMERCIAL_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Type of room</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Key features</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Planning and points to watch</th>
                  </tr>
                </thead>
                <tbody>
                  {COMMERCIAL_TABLE.map((row) => (
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
              How to plan the commercial job
            </h3>
            <ul className="space-y-2">
              {[
                "Tell us if the room is in use during the work, so we can plan the timing properly.",
                "Mention if there are special requirements for low emissions, hygiene or fire protection.",
                "Get a combined quote if several rooms or buildings are to be painted in the same project.",
                "Clarify access and any operating hours before the work is finally planned.",
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

      {/* ARTICLE — MAN MALER IN NÆSTVED */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Does the office, school or home in Næstved need a fresh coat of
              paint? MAN MALER is your local painter in Næstved, with
              experience in both private homes and the broad business
              community the town and its surroundings have. We always give a
              free, no-obligation quote once we have seen or had the job
              described to us.
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
              MAN MALER: from residential painting to large commercial jobs
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Næstved is a growing town, with both older and newer
                residential areas and a broad business community that ranges
                from small offices to large production companies. That variety
                means we keep adapting our approach — a private apartment
                needs different planning from a school or a production hall,
                where operations must not be disturbed unnecessarily.
              </p>
              <p>
                For larger commercial jobs, we focus on giving a quote that is
                easy to understand, whether it covers a single building or
                several rooms to be painted in the same project. We always
                coordinate timing and access with the customer, so the work
                fits into daily operations, whether it is a company, an
                institution or a private home.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of
                your job in the Næstved area — whether it is a home that needs
                painting, or a commercial job that needs special planning.
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
              Our services in Næstved
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Commercial painting for offices and institutions",
                "Interior painting of homes",
                "Facade painting and exterior maintenance",
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
                Interior painting in Næstved →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Næstved →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Næstved →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Næstved →
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
              Frequently asked questions — Painter in Næstved
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
              Ready to get your Næstved place painted?
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
