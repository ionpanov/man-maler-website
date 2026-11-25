import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import interiorImg from "@/assets/interior.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-taastrup";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Taastrup | Interior & Facade – MAN MALER";
const AREAS = ["Taastrup Torv", "Nykær", "Reerslev", "Sengeløse"];

const KEY_TAKEAWAYS = [
  "The hallway, living room, kitchen and facade matter most for the first impression when selling a home.",
  "Neutral, light colours usually make it easier for a potential buyer to picture themselves in the home.",
  "Commercial premises in the Høje-Taastrup business area are often painted outside normal opening hours to avoid disrupting operations.",
  "One combined quote for several rooms or the whole home often gives the most efficient planning before a viewing.",
];

const SALE_PREP_TABLE = [
  {
    p: "Hallway and entrance",
    d: "A clean, welcoming look that sets the tone for the rest of the home.",
    h: "Small scratches and scuffs show clearly here — often the first thing a buyer notices.",
  },
  {
    p: "Living room and lounge areas",
    d: "Neutral, light colours that make the room easier for a new owner to furnish.",
    h: "Filling holes left by pictures and furniture should be part of the preparation.",
  },
  {
    p: "Kitchen",
    d: "A clean, washable surface without grease stains or discolouration.",
    h: "One of the rooms buyers weigh most at viewings — worn walls stand out quickly.",
  },
  {
    p: "Bathroom",
    d: "Moisture-resistant paint without mould spots or flaking.",
    h: "Moisture damage should be fixed before painting, or the problem soon comes back.",
  },
  {
    p: "Facade (house/terraced house)",
    d: "Weather-resistant facade paint that gives a well-kept first impression from the outside.",
    h: "Cleaning off mould, algae and loose paint is often necessary before the new treatment.",
  },
  {
    p: "Commercial premises and warehouses",
    d: "Durable, fast-drying paint suited to operations, traffic and any fire protection requirements.",
    h: "Often planned outside opening hours so the daily operation is not disturbed.",
  },
];

const FAQS = [
  {
    q: "Do you paint both older villas and newer terraced houses in Taastrup?",
    a: "Yes. Taastrup in the western suburbs has mixed housing, from older villas to newer terraced houses, and we adapt the solution to the age and condition of the house.",
  },
  {
    q: "Can you help with renovation before selling a home?",
    a: "Yes, we are happy to do painting and minor renovation when a home is being sold, so it looks its best.",
  },
  {
    q: "Do you also cover Sengeløse and Reerslev?",
    a: "Yes, we cover the whole of Høje-Taastrup Municipality, including Sengeløse, Reerslev and Nykær.",
  },
  {
    q: "What does it cost to have a home painted in Taastrup?",
    a: "The price depends on the size and condition of the home. We always give a free, no-obligation quote once we have seen the job or had it described to us.",
  },
  {
    q: "Which rooms matter most to paint before the home is shown?",
    a: "The hallway, living room and kitchen are the rooms a buyer typically notices most. The facade also matters a lot for the first impression if you are selling a villa or a terraced house.",
  },
  {
    q: "Do you do commercial painting in the Høje-Taastrup business area?",
    a: "Yes, we are happy to paint offices, showrooms and warehouses in the business areas around Taastrup, planned around the company's opening hours and operations.",
  },
];

export default function MalerTaastrupEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Taastrup for villas, terraced houses and businesses. Interior and facade painting, and home prep before a sale. Free, no-obligation quote."
        />
        <meta
          name="keywords"
          content="painter taastrup, painting company taastrup, interior painting taastrup, facade painting taastrup, painter sengeløse, painter høje-taastrup"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Taastrup. Interior painting, facade painting and renovation. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Taastrup. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Taastrup" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Taastrup
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for villas, terraced houses and businesses in
              Taastrup — interior and exterior painting, renovation and
              commercial painting.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Høje-Taastrup Municipality
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
              A painting company with experience in Taastrup
            </h2>
            <p className="text-muted-foreground mb-4">
              Taastrup in the western suburbs has mixed housing — from older
              villas in the central parts of the town to newer terraced houses
              on the edge. As a painter in Taastrup, we always adapt the
              solution to the age and condition of the house and the surfaces
              to be treated.
            </p>
            <p className="text-muted-foreground mb-4">
              We are also happy to paint when a home is being sold or bought,
              where a fresh coat of paint can make a big difference to how the
              home looks.
            </p>
            <p className="text-muted-foreground">
              We cover all of Høje-Taastrup Municipality, including{" "}
              <strong>Sengeløse</strong>, <strong>Reerslev</strong> and{" "}
              <strong>Nykær</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Taastrup
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
                alt="Interior painting of a home"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Interior painting and preparation
            </h2>
            <p className="text-muted-foreground mb-4">
              Many of our jobs in Taastrup are interior painting of living
              rooms, bedrooms and shared areas — often as part of a renovation
              or preparation before a sale.
            </p>
            <p className="text-muted-foreground mb-6">
              We always mask and prepare thoroughly, so the work is clean and
              professional.
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

      {/* ARTICLE — PREPARATION BEFORE A HOME SALE AND COMMERCIAL */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Painting before a home sale and in commercial premises in Taastrup
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Taastrup and Høje-Taastrup Municipality have a wide range of
                jobs — from villas and terraced houses that need preparing
                before a sale, to offices, showrooms and warehouses in the
                municipality's large business areas. Both call for a painter
                who understands what the job is really about: not just
                applying paint, but creating the right impression, whether for
                a buyer or a customer.
              </p>
              <p>
                When a home is being sold, it is often the hallway, living
                room, kitchen and facade that matter most for the first
                impression. Neutral, light colours usually make it easier for a
                potential buyer to imagine the home as their own, and a freshly
                painted facade can lift the look of the whole property before
                anyone steps inside. If the budget is limited, we are happy to
                advise on which rooms give the most effect for the money.
              </p>
              <p>
                In the business areas around Taastrup we paint offices,
                showrooms and warehouses — often planned outside normal opening
                hours so the daily operation is not disturbed. Here we choose
                durable, fast-drying products that can handle both traffic and
                the use the premises are exposed to.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: painting before a sale and in commercial premises
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {SALE_PREP_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Room or premises</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Key features</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Preparation and points to watch</th>
                  </tr>
                </thead>
                <tbody>
                  {SALE_PREP_TABLE.map((row) => (
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
              How to prioritise the job
            </h3>
            <ul className="space-y-2">
              {[
                "Tell us if the home is being painted before a sale, so we can advise on priorities.",
                "Choose neutral, light colours in the living room and lounge areas for the widest appeal.",
                "Fix moisture damage in the bathroom before painting, so the problem does not come back.",
                "Agree the timing for commercial jobs so operations are disturbed as little as possible.",
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

      {/* ARTICLE — MAN MALER IN TAASTRUP */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Does your home need to be made ready for sale, or does the office
              or warehouse in the Høje-Taastrup business area need a new coat
              of paint? MAN MALER is your local painter in Taastrup, with
              experience in both private homes and commercial premises. We
              always give a free, no-obligation quote once we have seen the job
              or had it described to us.
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
              MAN MALER: from preparing homes to commercial premises
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Høje-Taastrup Municipality is known for its broad mix of homes
                and businesses — from older villas in the central part of
                Taastrup to one of the largest business areas in the Copenhagen
                region. We always adapt our approach to the nature of the job:
                a home that is being sold needs different priorities than an
                office that has to be painted outside opening hours.
              </p>
              <p>
                When preparing homes for sale, we advise on which rooms are
                most worth painting if the budget is limited, and which colours
                appeal to the most potential buyers. On commercial jobs we
                focus on planning that minimises disruption to operations, and
                on materials that can handle the daily use of the premises.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of
                your job in the Taastrup area — whether it is a home that needs
                preparing for sale or commercial premises that need
                maintenance.
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
              Our services in Taastrup
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Interior painting of villas and terraced houses",
                "Facade painting and exterior maintenance",
                "Renovation and preparation before a home sale",
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
              <Link to={L("/priser")} className="inline-block py-1 text-primary font-medium hover:underline">
                See our prices →
              </Link>
              <Link to={L("/ydelser/indendoers-maling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Interior painting in Taastrup →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Taastrup →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Taastrup →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Taastrup →
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
              Frequently asked questions — Painter in Taastrup
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
              Ready to get your Taastrup place painted?
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
