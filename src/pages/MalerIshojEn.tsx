import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import interiorImg from "@/assets/interior.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-ishoj";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Ishøj | Social Housing & Villas – MAN MALER";
const AREAS = ["Ishøj Strand", "Vejleåparken", "Torslunde", "Ishøj Landsby"];

const KEY_TAKEAWAYS = [
  "In social housing (almene boliger), the A or B scheme decides who pays for painting when a tenant moves out.",
  "Quick painting between move-out and move-in is important, so the flat can be let again without unnecessary vacancy.",
  "Standard colours and washable surfaces make it easier to prepare the home for a new tenant.",
  "One combined quote for several flats in the same housing estate often gives the most efficient planning.",
];

const RENTAL_TABLE = [
  {
    p: "Living room and bedrooms",
    d: "A neutral standard colour that suits most tenants and is easy to maintain.",
    h: "Holes left by pictures and furniture should be filled before painting.",
  },
  {
    p: "Hallway",
    d: "Hard-wearing paint that can handle frequent touching and cleaning.",
    h: "Often the surface that shows the most wear at move-out.",
  },
  {
    p: "Kitchen",
    d: "Washable paint that can withstand grease and frequent cleaning.",
    h: "Grease stains and discolouration should be cleaned off thoroughly before painting.",
  },
  {
    p: "Bathroom",
    d: "Moisture-resistant paint without mould spots or flaking.",
    h: "Moisture damage should be fixed before painting, so the problem does not come back.",
  },
  {
    p: "Windows and frames",
    d: "Hard-wearing wood paint that can handle the wind and weather of the coast.",
    h: "Stripping old paint gives the most durable result.",
  },
];

const FAQS = [
  {
    q: "Do you paint both flats and villas in Ishøj?",
    a: "Yes. Ishøj has mixed housing close to the coast, from apartment buildings to villas, and we adapt the solution to the type of home.",
  },
  {
    q: "Can you help with jobs close to the coast, where wind and weather cause more wear?",
    a: "Yes, we use weather-resistant materials suited to coastal conditions, and we are happy to advise on the right choice for your home.",
  },
  {
    q: "Do you also cover Torslunde and Ishøj Landsby?",
    a: "Yes, we cover the whole of Ishøj Municipality, including Torslunde, Ishøj Landsby and Vejleåparken.",
  },
  {
    q: "What does painting cost in Ishøj?",
    a: "The price depends on the size of the job and the condition of the home. We always give a free, no-obligation quote once we have seen the job or had it described to us.",
  },
  {
    q: "Who pays for painting when moving out of social housing?",
    a: "It depends on whether the housing estate uses the A scheme or the B scheme. Under the B scheme, payments are made continuously through the rent, and the housing association typically takes care of painting at move-out. Under the A scheme, the tenant maintains the home themselves during the tenancy. We are happy to help clarify what applies to your home.",
  },
  {
    q: "Can you paint a flat quickly between two tenants?",
    a: "Yes, we are happy to paint between move-out and move-in in social housing, and we adjust the schedule so the flat can be let again as quickly as possible.",
  },
];

export default function MalerIshojEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Ishøj for social housing, flats and villas. Interior painting at move-out, facade painting and renovation. Free quote."
        />
        <meta
          name="keywords"
          content="painter ishøj, painting company ishøj, interior painting ishøj, facade painting ishøj, painter vejleåparken, painter torslunde"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Ishøj. Interior painting, facade painting and renovation. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Ishøj. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Ishøj" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Ishøj
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for homes and businesses in Ishøj — interior and
              exterior painting, renovation and commercial painting.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Ishøj Municipality
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
              A painting company with experience in Ishøj
            </h2>
            <p className="text-muted-foreground mb-4">
              Ishøj, in the south-western part of Greater Copenhagen, has mixed
              housing close to the coast — from apartment buildings to villas
              and terraced houses. As a painter in Ishøj, we adapt the solution
              to the type of home and the conditions of the coastal location.
            </p>
            <p className="text-muted-foreground mb-4">
              Wind and weather from the coast can wear facades down more, so we
              put extra emphasis on weather-resistant materials and correct
              pre-treatment.
            </p>
            <p className="text-muted-foreground">
              We cover all of Ishøj Municipality, including{" "}
              <strong>Vejleåparken</strong>, <strong>Torslunde</strong> and{" "}
              <strong>Ishøj Landsby</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Ishøj
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
                alt="Interior painting of a flat"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Interior painting in Ishøj
            </h2>
            <p className="text-muted-foreground mb-4">
              We do interior painting of flats and houses in Ishøj — walls,
              ceilings and woodwork, always with thorough masking and
              preparation of the surfaces.
            </p>
            <p className="text-muted-foreground mb-6">
              We are also happy to advise on colour choices that suit the
              light and layout of the home.
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

      {/* ARTICLE — PAINTING SOCIAL HOUSING AT MOVE-OUT */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Painting social housing in Ishøj at move-out
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Ishøj has many social housing units (almene boliger), among
                others in Vejleåparken, and different rules for painting apply
                here than in a private rental home. The housing estate uses
                either the A scheme or the B scheme: under the B scheme,
                payments are made continuously through the rent, and the
                housing association typically takes care of painting at
                move-out, while under the A scheme the tenant maintains the
                home themselves during the tenancy.
              </p>
              <p>
                Whichever scheme applies, it is important that the painting is
                done quickly and consistently between move-out and move-in, so
                the flat can be let again without unnecessary vacancy. We
                therefore often work with standard colours and washable
                surfaces, which are both easy to maintain and quick to apply on
                a tight schedule.
              </p>
              <p>
                Ishøj is also close to the coast, which means windows, frames
                and any facades are more exposed to wind and weather than
                further inland. We take this into account when we recommend
                materials for both social housing and private villas in the
                area.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: painting at move-out in social housing
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {RENTAL_TABLE.map((row) => (
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
                  {RENTAL_TABLE.map((row) => (
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
              How to plan the move-out painting
            </h3>
            <ul className="space-y-2">
              {[
                "Find out whether the housing estate uses the A scheme or the B scheme before the work is agreed.",
                "Choose standard colours and washable surfaces that suit most future tenants.",
                "Ask for one combined quote if several flats in the same housing estate are to be painted.",
                "Schedule the work tightly, so the flat can be let again as soon as possible.",
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

      {/* ARTICLE — MAN MALER IN ISHØJ */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Does the flat in Vejleåparken need painting before a new tenant
              moves in, or does the villa close to the coast need facade
              painting? MAN MALER is your local painter in Ishøj, with
              experience in both social housing and private houses in the
              municipality. We always give a free, no-obligation quote once we
              have seen the job or had it described to us.
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
              MAN MALER: experience with Ishøj's social housing
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We have solid experience with the practical process around
                move-out in social housing — from clarifying which maintenance
                scheme applies, to delivering a quote that fits the housing
                association's requirements and schedule. This makes the
                process simpler for both the housing estate and tenant
                services.
              </p>
              <p>
                For private homeowners in Ishøj, especially close to the coast,
                we focus on weather-resistant materials that can withstand wind
                and salt from the sea. Whether the job is a single flat or a
                whole housing estate, we always give a quote that is easy to
                understand.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of
                your job in Ishøj — whether it is a social housing flat that
                needs preparing for a new tenant, or a private villa that needs
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
              Our services in Ishøj
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Interior painting of flats and villas",
                "Facade painting with weather-resistant materials",
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
              <Link to={L("/priser")} className="inline-block py-1 text-primary font-medium hover:underline">
                See our prices →
              </Link>
              <Link to={L("/ydelser/indendoers-maling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Interior painting in Ishøj →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Ishøj →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Ishøj →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Ishøj →
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
              Frequently asked questions — Painter in Ishøj
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
              Ready to get your Ishøj place painted?
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
