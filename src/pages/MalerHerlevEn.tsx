import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import commercialImg from "@/assets/commercial.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-herlev";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Herlev | Shops, chains & commercial";
const AREAS = ["Herlev Bygade", "Hjortespring", "Kildegård", "Herlev Hospital area"];

const KEY_TAKEAWAYS = [
  "Chain stores often want consistent brand colours across several locations.",
  "Shop facades can usually be painted in the evening or at weekends, without the shop having to close.",
  "Display windows and sign areas need precision work, so goods and signs stay visible.",
  "A single quote for several shops in the same chain often gives the most efficient planning."
];

const TABLE = [
  {
    "p": "Shop facade and entrance",
    "d": "Professional facade painting that matches the chain's brand colours and makes a welcoming impression.",
    "h": "Usually planned for the evening or weekend, so the shop can stay open."
  },
  {
    "p": "Display windows and sign areas",
    "d": "Precision work that keeps edges sharp around glass and signs.",
    "h": "Thorough masking is needed to avoid paint splashes on glass and fittings."
  },
  {
    "p": "Shop floor (interior)",
    "d": "Colours that support the chain's brand and create a welcoming atmosphere for customers.",
    "h": "Often done outside opening hours or in stages, to avoid disturbing trade."
  },
  {
    "p": "Office behind the shop",
    "d": "Calm, professional colours for administrative work.",
    "h": "Can often be painted at the same time as the shop floor, in one process."
  },
  {
    "p": "Storeroom and back rooms",
    "d": "Robust, easy-to-clean paint suited to daily use and the movement of goods.",
    "h": "Lower finish requirements than customer-facing areas, but durability still matters."
  }
];

const FAQS = [
  {
    "q": "Do you do both residential and commercial painting in Herlev?",
    "a": "Yes. Herlev has a mix of apartment blocks, detached-house areas and business areas, and we do both interior painting for private customers and commercial painting for businesses in the municipality."
  },
  {
    "q": "Can you paint outside normal working hours for commercial jobs?",
    "a": "Yes, we are happy to plan commercial painting for the evening or weekend, so it does not disturb daily operations."
  },
  {
    "q": "Do you also cover Hjortespring and Kildegård?",
    "a": "Yes, we cover the whole of Herlev Municipality, including Hjortespring, Kildegård and the area around Herlev Hospital."
  },
  {
    "q": "What does painting work cost in Herlev?",
    "a": "The price depends on the scope of the job and the condition of the surfaces. We always give a free, no-obligation quote once we have seen or had the job described."
  },
  {
    "q": "Can you paint several shop locations in the same brand colour?",
    "a": "Yes, we are happy to match brand colours across several locations, so the chain's shops look consistent wherever they are."
  },
  {
    "q": "Can a shop facade be painted without the shop closing?",
    "a": "In many cases, yes. We are happy to plan the work for the evening or weekend, so the shop can stay open during normal opening hours."
  }
];

const CHECKLIST = [
  "Give us the chain's brand colours, so we can match them exactly across locations.",
  "Tell us if the shop must stay open during the work, so we can plan for the evening or weekend.",
  "Mask display windows and sign areas thoroughly for a sharp result.",
  "Ask for a single quote if several shops in the chain need painting."
];

const SERVICES = [
  "Commercial painting for offices and shops",
  "Interior painting of apartments and houses",
  "Facade painting and exterior maintenance",
  "Renovation, filling and preparation of surfaces"
];

export default function MalerHerlevEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Painter in Herlev for shops, chains and homes. Interior painting in brand colours, facade painting and commercial painting without closing. Free quote."
        />
        <meta
          name="keywords"
          content="painter herlev, painting company herlev, commercial painting herlev, interior painting herlev, painter hjortespring, painter kildegård, shop facade painting"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Herlev. Interior painting, facade painting and commercial painting. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content={`${ORIGIN}/og-image.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Herlev. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: L("/omraader") }, { name: "Painter in Herlev" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Herlev
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for homes and businesses in Herlev — interior and
              exterior painting, renovation and commercial painting.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Herlev Municipality
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
              A painting company with experience in Herlev
            </h2>
            <p className="text-muted-foreground mb-4">
              Herlev has a mix of apartment blocks, detached-house areas and large business areas. As a painter in Herlev, we therefore do both interior painting for private homeowners and commercial painting for businesses, offices and institutions in the area.
            </p>
            <p className="text-muted-foreground mb-4">
              For commercial jobs, we are happy to plan the work outside normal working hours, so it does not disturb daily operations.
            </p>
            <p className="text-muted-foreground">
              We cover the whole of Herlev Municipality, including <strong>Hjortespring</strong>, <strong>Kildegård</strong> and the area around <strong>Herlev Hospital</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover all of Herlev
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
              Commercial painting in Herlev
            </h2>
            <p className="text-muted-foreground mb-4">
              Herlev has many businesses and commercial properties, and commercial painting is a regular part of our work in the area — from offices and shops to larger institutions.
            </p>
            <p className="text-muted-foreground mb-6">
              We always adapt the schedule to the business's needs, so operations can carry on undisturbed.
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
              Shop and chain painting in Herlev
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
                <p>
                  Herlev has a lot of retail, and many of our commercial jobs here are for shops and chains that need to look consistent across several locations. This applies to both the facade and the shop floor inside: brand colours must be matched exactly, so customers see the same visual identity whichever shop in the chain they visit.
                </p>
                <p>
                  A practical question that comes up often is how to paint a shop facade without closing. We are happy to plan the work for the evening or weekend, so the shop can stay open during normal opening hours. It takes careful planning, but it means turnover is not affected by the painting.
                </p>
                <p>
                  Display windows and sign areas also need precision work — edges around glass and signs must be sharp, and thorough masking is needed to avoid paint splashes on goods and fittings.
                </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overview: painting shops and commercial premises
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
              How to plan the shop job
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
              Does the chain need consistent brand colours across several locations, or does your home need a fresh coat of paint? MAN MALER is your local painter in Herlev, with experience in both retail and private homes in the municipality. We always give a free, no-obligation quote once we have seen or had the job described.
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
              MAN MALER: consistent branding across shop locations
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We have experience matching brand colours exactly, so a chain's shops look consistent wherever in Herlev — or in the rest of Greater Copenhagen — they are. This applies to both the facade that meets customers from outside and the shop floor inside.
              </p>
              <p>
                We always plan the work to fit the shop's opening hours and operations — often by painting in the evening or at weekends, so turnover is not affected. Alongside commercial jobs, we also do interior painting, facade painting and renovation for private homeowners across Herlev Municipality.
              </p>
              <p>
                Contact MAN MALER if you want a no-obligation assessment of your job in Herlev — whether it is a shop that needs to match a chain's brand, or a home that needs a new look.
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
              Our services in Herlev
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
                Interior painting in Herlev →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Herlev →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Herlev →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Herlev →
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
              Frequently asked questions — Painter in Herlev
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
              Ready to get painting done in Herlev?
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
