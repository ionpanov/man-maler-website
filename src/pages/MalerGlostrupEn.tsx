import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-glostrup";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Glostrup | Terraced houses & healthcare";
const AREAS = ["Glostrup by", "Hvissinge", "Ejby", "Stadion area"];

const KEY_TAKEAWAYS = [
  "Many terraced houses in Glostrup belong to housing cooperatives, where the facade colour must be approved by the board.",
  "A single quote for several terraced houses in the same association can often give more efficient planning.",
  "Clinics and healthcare facilities need hygienic surfaces and planning outside patient hours.",
  "Thorough preparation of windows and woodwork is essential for a durable result on older terraced houses."
];

const TABLE = [
  {
    "p": "Facade (housing cooperative/owners' association)",
    "d": "Colour and material often have to match the association's approved facade plan.",
    "h": "Check approval with the board before the colour is finally chosen."
  },
  {
    "p": "Facade (private house)",
    "d": "Weather-resistant facade paint suited to the material and style of the house.",
    "h": "Stripping and repair of render or woodwork should be assessed first."
  },
  {
    "p": "Windows and woodwork",
    "d": "Hard-wearing wood paint with good adhesion to older wood that has often been painted before.",
    "h": "Stripping old layers of paint gives the most durable result."
  },
  {
    "p": "Waiting room and clinic",
    "d": "Easy-to-clean, hygienic paint that withstands frequent cleaning.",
    "h": "Usually planned outside opening hours, so patients are not disturbed."
  },
  {
    "p": "Staff facilities (healthcare sector)",
    "d": "Robust, neutral paint that supports a calm working environment.",
    "h": "Coordinated with the clinic's operations to cause as little disturbance as possible."
  }
];

const FAQS = [
  {
    "q": "Do you paint detached houses and terraced houses in Glostrup?",
    "a": "Yes. Glostrup has many terraced houses and detached houses, and we do both facade painting and interior painting to suit the type of home."
  },
  {
    "q": "How long does a typical painting job in Glostrup take?",
    "a": "It depends on the scope of the job. We always come and see the job before we give a specific schedule and a quote."
  },
  {
    "q": "Do you also cover Hvissinge and Ejby?",
    "a": "Yes, we cover the whole of Glostrup Municipality, including Hvissinge, Ejby and the area around Glostrup Stadium."
  },
  {
    "q": "What does it cost to have a terraced house painted in Glostrup?",
    "a": "The price depends on the size and condition of the house. We always give a free, no-obligation quote once we have seen the job."
  },
  {
    "q": "Does the facade need approval from the housing cooperative before it is painted?",
    "a": "In many of Glostrup's housing cooperatives and owners' associations, the facade colour and materials must be approved by the board before the work starts. We are happy to help clarify this and adapt the quote to the association's guidelines."
  },
  {
    "q": "Do you do painting work in the healthcare sector, such as clinics?",
    "a": "Yes, we are happy to paint waiting rooms, offices and staff facilities in clinics and the healthcare sector, with a focus on hygienic surfaces and planning that does not disturb patients or staff."
  }
];

const CHECKLIST = [
  "Check with the board whether the facade colour and materials need approval first.",
  "Ask for a single quote if several terraced houses in the same association are to be painted.",
  "Tell us if the job is a clinic or healthcare facility, so we can plan outside opening hours.",
  "Choose hygienic paint for waiting rooms and staff facilities."
];

const SERVICES = [
  "Facade painting and exterior maintenance",
  "Window painting and wood protection",
  "Interior painting of houses and terraced houses",
  "Renovation, filling and preparation of surfaces"
];

export default function MalerGlostrupEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Glostrup for terraced houses, housing cooperatives and healthcare. Interior painting, facade painting and hygienic surfaces. Free quote."
        />
        <meta
          name="keywords"
          content="painter glostrup, painting company glostrup, interior painting glostrup, facade painting glostrup, painter hvissinge, painter ejby"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Glostrup. Facade painting, interior painting and renovation. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content={`${ORIGIN}/og-image.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Glostrup. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Glostrup" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Glostrup
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for houses, terraced houses and businesses in Glostrup —
              facade painting, interior painting and renovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Glostrup Municipality
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
              A painting company with experience in Glostrup
            </h2>
            <p className="text-muted-foreground mb-4">
              Glostrup is a commuter town close to Copenhagen with many terraced houses and detached houses. As a painter in Glostrup, we often do facade painting, window painting and interior renovation for homeowners in the municipality.
            </p>
            <p className="text-muted-foreground mb-4">
              We always put weight on thorough preparation of the surfaces before painting, so the result lasts for many years.
            </p>
            <p className="text-muted-foreground">
              We cover the whole of Glostrup Municipality, including <strong>Hvissinge</strong> and <strong>Ejby</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Glostrup
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
                alt="Facade painting of a house"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Facade painting in Glostrup
            </h2>
            <p className="text-muted-foreground mb-4">
              Facade painting is one of the most requested jobs in the Glostrup area — often combined with window painting and minor repairs to render or woodwork.
            </p>
            <p className="text-muted-foreground mb-6">
              We use weather-resistant materials suited to the Danish climate, and are happy to advise on colour choice.
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
              Terraced houses, housing cooperatives and healthcare in Glostrup
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
                <p>
                  Glostrup is known for its many terraced houses, a large share of which are organised in housing cooperatives or owners' associations. Here facade painting is rarely an individual decision: colour and materials typically have to be approved by the board, so the whole development looks consistent. We are happy to clarify the association's guidelines before we give a quote, so there are no surprises along the way.
                </p>
                <p>
                  When several terraced houses in the same association are being painted at the same time, it often makes sense to combine the job into one process — this can give both more efficient planning and a more uniform price for the households involved.
                </p>
                <p>
                  Glostrup also has a substantial healthcare sector, and we are happy to do painting work in clinics, waiting rooms and staff facilities. The requirements are different from a private home: the surfaces must be hygienic and easy to clean, and the work is typically planned outside opening hours, so patients and staff are not disturbed.
                </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: housing and healthcare in Glostrup
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Surface or room</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Key features</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Preparation and points to watch</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE.map((row) => (
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
              {CHECKLIST.map((item) => (
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
              Does the terraced house need a new facade once the housing cooperative has approved it, or does the clinic need its waiting room painted? MAN MALER is your local painter in Glostrup, with experience in both housing associations' requirements and the healthcare sector's need for hygienic surfaces. We always give a free, no-obligation quote once we have seen the job.
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
              MAN MALER: housing associations and healthcare in Glostrup
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We have experience with the practical process around housing cooperatives and owners' associations in Glostrup — from clarifying what the board needs to approve, to giving a quote that covers several terraced houses in the same association. This makes the process simpler for everyone and ensures a consistent result across the development.
              </p>
              <p>
                In the healthcare sector we focus on hygiene and planning. Surfaces in clinics and waiting rooms must withstand frequent cleaning, and the work is always coordinated with the clinic's operations, so patients and staff are disturbed as little as possible.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of your job in Glostrup — whether it is a terraced house that needs approval from an association, or a healthcare facility that needs special planning.
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
              Our services in Glostrup
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {SERVICES.map((item) => (
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
                Interior painting in Glostrup →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Glostrup →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Glostrup →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Glostrup →
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
              Frequently asked questions — Painter in Glostrup
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
              Ready to get painting done in Glostrup?
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
