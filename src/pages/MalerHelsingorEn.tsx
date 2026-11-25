import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import renovationImg from "@/assets/renovation.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-helsingor";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Helsingør | Rentals & Historic Town Centre";

const AREAS = ["Helsingør Bymidte", "Snekkersten", "Espergærde", "Nordre Strandvej"];

const KEY_TAKEAWAYS = [
  "Because Helsingør is a tourist town, many homes are used for short-term rental, where quick turnaround is important.",
  "Facade painting and larger jobs are best planned outside the high season.",
  "The coastal climate wears windows and facades down faster, so weather-resistant materials matter.",
  "Hard-wearing, washable surfaces make it easier to keep a rental home presentable between guests.",
];

const RENTAL_TOURISM_TABLE = [
  {
    p: "Guest rooms and rental homes",
    d: "Hard-wearing, washable paint that stays presentable between changing guests.",
    h: "Fast drying time is important so the home can be used again soon after painting.",
  },
  {
    p: "Facade (visible to guests)",
    d: "Weather-resistant facade paint that gives a welcoming first impression.",
    h: "Best planned outside the high season, when there are fewer guests.",
  },
  {
    p: "Windows and exterior doors",
    d: "Hard-wearing wood paint that can withstand the coastal wind and salty air.",
    h: "The coastal climate means maintenance is needed more often.",
  },
  {
    p: "Stairwell (rental building)",
    d: "Robust, easy-to-clean paint that can handle heavy guest traffic.",
    h: "Often planned for quiet periods to avoid disturbing guests.",
  },
  {
    p: "Historic facade (town centre)",
    d: "Materials that respect the age of the building and the historic streetscape.",
    h: "Thorough cleaning and repair of the render is often necessary before painting.",
  },
];

const FAQS = [
  {
    q: "Do you have experience with older houses in Helsingør's historic town centre?",
    a: "Yes. Helsingør has a historic town centre with many older houses, and facade painting there often requires extra preparation of old surfaces. We have experience with that.",
  },
  {
    q: "Do you also paint villas along the coast?",
    a: "Yes, we do facade painting and interior painting of villas in coastal areas such as Snekkersten and Espergærde, with materials suited to the coastal climate.",
  },
  {
    q: "Do you cover all of Helsingør Municipality?",
    a: "Yes, we cover all of Helsingør Municipality, including Snekkersten, Espergærde and the area around Nordre Strandvej.",
  },
  {
    q: "What does it cost to have a house painted in Helsingør?",
    a: "The price depends on the size, age and condition of the house. We always give a free, no-obligation quote once we have seen the job.",
  },
  {
    q: "Can you paint a rental home quickly between two guests?",
    a: "Yes, we are happy to paint short-term rental homes and rooms, where fast completion is important so the home can be used again without unnecessary waiting.",
  },
  {
    q: "Is there a best time to paint a rental home in a tourist town?",
    a: "Yes, it often makes the most sense to plan facade painting and larger jobs outside the high season, when demand for rentals is typically lower.",
  },
];

export default function MalerHelsingorEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Helsingør for rental homes, historic houses and coastal villas. Interior painting, quick turnaround and facade painting. Free quote."
        />
        <meta
          name="keywords"
          content="painter helsingør, painting company helsingør, interior painting helsingør, facade painting helsingør, painter snekkersten, painter espergærde"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Helsingør. Facade painting, interior painting and renovation. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Helsingør. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Helsingør" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Helsingør
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for historic houses and coastal villas in Helsingør —
              facade painting, interior painting and renovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Helsingør Municipality
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
              A painting company with experience from Helsingør
            </h2>
            <p className="text-muted-foreground mb-4">
              Helsingør is a coastal town with a historic centre and many
              older houses. As a painter in Helsingør, we often get jobs that
              need thorough preparation of old surfaces, as well as villas
              along the coast, where wind and salt water wear the facades
              down faster.
            </p>
            <p className="text-muted-foreground mb-4">
              We always choose materials to suit the location of the house and
              the conditions it is exposed to.
            </p>
            <p className="text-muted-foreground">
              We cover all of Helsingør Municipality, including{" "}
              <strong>Snekkersten</strong> and <strong>Espergærde</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Helsingør
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
                alt="Renovation of an older house"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Renovation of older houses
            </h2>
            <p className="text-muted-foreground mb-4">
              Many houses in Helsingør's town centre need thorough surface
              renovation before they can be painted — render has to be
              repaired, and window frames and old layers of paint have to be
              removed properly.
            </p>
            <p className="text-muted-foreground mb-6">
              We always do a thorough inspection before we give a quote, so
              you know exactly what the job involves.
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

      {/* ARTICLE — RENTAL HOMES IN A TOURIST TOWN */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Painting rental homes in Helsingør
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Helsingør is a tourist town, with Kronborg and the ferry to
                Sweden among its landmarks, and that means many homes in and
                around the town centre are used for short-term rental. This
                makes different demands on the painting work than an ordinary
                home: the surfaces must withstand frequent use and cleaning,
                and the work often has to be done quickly so the home can be
                used again as soon as possible.
              </p>
              <p>
                We typically recommend hard-wearing, washable surfaces in guest
                rooms and common areas, and fast-drying paint that keeps the
                time the home is out of use to a minimum. We are happy to plan
                larger jobs such as facade painting outside the high season,
                when there are fewer guests and less pressure on rentals.
              </p>
              <p>
                Besides rental homes, Helsingør also has a historic town centre
                with many older houses, where facade painting requires thorough
                preparation of old surfaces, as well as coastal villas, where
                wind and salt water call for weather-resistant materials.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: painting for rentals and the historic town centre
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {RENTAL_TOURISM_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Surface or room</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Key features</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Planning and points to watch</th>
                  </tr>
                </thead>
                <tbody>
                  {RENTAL_TOURISM_TABLE.map((row) => (
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
                "Tell us if the home is used for short-term rental, so we can plan a quick solution.",
                "Choose hard-wearing, washable surfaces for guest rooms and common areas.",
                "Plan facade painting outside the high season if possible.",
                "Allow extra time for historic facades that need thorough preparation.",
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

      {/* ARTICLE — MAN MALER IN HELSINGØR */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Does your rental home need to be ready quickly for the next
              guest, or does the historic house in the town centre need facade
              painting? MAN MALER is your local painter in Helsingør, with
              experience in both short-term rental and older buildings. We
              always give a free, no-obligation quote once we have seen the
              job.
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
              MAN MALER: experience with Helsingør's rental homes and town centre
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We know the practical demands of running rental homes in a
                tourist town — fast completion, durable surfaces and planning
                that takes the season into account. We also have experience
                with Helsingør's historic town centre, where older facades need
                a completely different approach from a newer rental home.
              </p>
              <p>
                Whether the job is a single guest room, a whole rental building
                or a historic facade, we always inspect thoroughly before we
                give a quote, so you know exactly what the job involves and how
                long it takes.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of
                your job in the Helsingør area — whether it is a rental home
                that needs to be ready quickly, or an older house that needs
                renovation.
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
              Our services in Helsingør
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facade painting of historic and coastal houses",
                "Interior painting of villas and apartments",
                "Renovation, filling and preparation of surfaces",
                "Wood protection suited to the coastal climate",
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
                Interior painting in Helsingør →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Helsingør →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Helsingør →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Helsingør →
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
              Frequently asked questions — Painter in Helsingør
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
              Ready to get your Helsingør place painted?
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
