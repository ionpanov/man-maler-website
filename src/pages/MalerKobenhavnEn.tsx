import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import projectImg from "@/assets/projects/proj53.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import HreflangLinks from "@/components/HreflangLinks";
import PriceTable from "@/components/PriceTable";
import { PRICES, PRICE_PATH, priceOfferCatalog } from "@/lib/prices";
import { NEARBY, cityByPath } from "@/lib/cities";
import { langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-koebenhavn";
const TITLE = "Painter Copenhagen | Prices from 65 DKK/m² – MAN MALER";
const URL_EN = "https://manmaler.dk/en/painter-copenhagen";

const NEIGHBORHOODS = [
  "Indre By", "Nørrebro", "Østerbro", "Vesterbro", "Amager",
  "Frederiksberg", "Valby", "Sydhavn", "Nordvest", "Brønshøj",
];

const CHECKLIST = [
  {
    p: "Surfaces and scope of work",
    d: "Which walls, ceilings and woodwork are treated, and which rooms the work covers.",
    h: "Lets you compare quotes for the same job instead of comparing price alone.",
  },
  {
    p: "Preparation and repairs",
    d: "Whether filling, wallpaper removal, crack repair and dealing with loose paint, nicotine, damp marks or minor damage are included.",
    h: "Good preparation makes a big difference to smooth surfaces and a lasting result.",
  },
  {
    p: "Paint and number of coats",
    d: "Type of paint, gloss level, durability, washability and how many coats are applied.",
    h: "The paint must suit the room and the surface, especially in a kitchen, hallway or child's room.",
  },
  {
    p: "Access",
    d: "How things like a fourth floor with no lift, limited parking or working in an occupied building are handled.",
    h: "Access can affect the price, the planning and the need for coordination.",
  },
  {
    p: "Masking and protection",
    d: "How floors and furniture are protected during the work.",
    h: "Reduces the risk of damage and makes the job run more smoothly, especially if the home is in use.",
  },
  {
    p: "Tidying up and final cleaning",
    d: "Whether masking is removed, and whether tidying up and final cleaning are part of the price.",
    h: "Avoids any doubt about what is left to do once the painting is finished.",
  },
  {
    p: "Schedule",
    d: "When the work can start, how long it is expected to take, and how it is organised if you stay at home during the work.",
    h: "Makes it easier to judge how the project will affect your daily life.",
  },
];

const FAQS = [
  {
    q: "How much does a painter in Copenhagen cost?",
    a: "The price depends on the size of the job, the surface, preparation, materials and access. A visit, or a detailed description with measurements and photos, gives the best basis for an accurate written quote.",
  },
  {
    q: "What is the hourly rate for a painter in Copenhagen?",
    a: "Our hourly rates are typically between 593.75 and 812.50 DKK incl. VAT, depending on the work. Sanding is at the low end, minor touch-ups at the high end. For larger jobs we usually give a total price, so you know the amount before we start.",
  },
  {
    q: "How much does painting cost per m²?",
    a: "Painting walls with two coats costs 65–150 DKK/m² incl. VAT, and ceilings 115 DKK/m². Filling walls starts from 85 DKK/m², and a complete finish with filling, priming, glass-fibre fleece and painting from 350 DKK/m². The price depends on the surface and the preparation.",
  },
  {
    q: "How much does it cost to have 50 m² or 100 m² painted?",
    a: "It depends on whether you mean the floor area or the wall and ceiling surfaces, and on the preparation. Take the per-m² prices in the table above and multiply by the surfaces to be painted. Send measurements and photos, and you get a total price for your own job.",
  },
  {
    q: "Where do I find a cheap painter in Copenhagen?",
    a: "The cheapest painter is not always the cheapest solution. Get two or three quotes and look at what each one includes: preparation, number of coats, masking and tidying up. That way you compare like with like.",
  },
  {
    q: "What should a painting quote include?",
    a: "The quote should describe the surfaces, preparation, number of coats, type of paint, materials, masking, tidying up and schedule. This makes it easier to compare painting quotes and avoid unexpected extra costs.",
  },
  {
    q: "Can I stay at home while the painter works?",
    a: "Yes, often. Agree in advance how rooms are divided up, how furniture is covered and when the work is done. Good planning is especially important in Copenhagen apartments with limited space, parking or access without a lift.",
  },
  {
    q: "How long does it take to paint an apartment in Copenhagen?",
    a: "It depends on the size of the apartment and the scope of the work, for example whether surfaces also need filling or preparing first. We always give a schedule together with the quote, so you know exactly what to expect.",
  },
  {
    q: "Do you also do commercial painting in Copenhagen?",
    a: "Yes, we paint offices, shops and commercial premises across Copenhagen and the surrounding area, often outside normal working hours so we do not disturb your business.",
  },
];

export default function MalerKobenhavnEn() {
  const lp = (p: string) => langPath(p, "en");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Painting in Copenhagen",
    serviceType: "Painting",
    url: URL_EN,
    provider: { "@id": "https://manmaler.dk/#organization" },
    areaServed: { "@type": "City", name: "Copenhagen" },
    hasOfferCatalog: priceOfferCatalog(PRICES, "en"),
  };

  const nearby = (NEARBY[DA_PATH] ?? []).map(cityByPath).filter(Boolean);

  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Looking for a painter in Copenhagen? See our prices, e.g. wall painting from 65 DKK/m² incl. VAT. Get a free quote within 24 hours from MAN MALER."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL_EN} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Copenhagen. Interior painting, facade painting, renovation and commercial painting. Free, non-binding quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL_EN} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Copenhagen. Free, non-binding quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: "/omraader" }, { name: "Painter in Copenhagen" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Copenhagen
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Your local painting company in Copenhagen — interior and exterior painting,
              renovation and commercial painting for homes and businesses across the city.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover all of Copenhagen
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                Reply within 24 hours
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" />
                Free, non-binding quote
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
            <p className="text-muted-foreground mb-4">
              Are you looking for a painter in Copenhagen who can give your home, office or
              building a good-looking, lasting result? The right painting job is not only about
              colours, but also about thorough preparation, sharp detail and materials that suit
              the rooms.
            </p>
            <p className="text-muted-foreground mb-8">
              Here you can find help choosing a local painter in Copenhagen and learn what to
              consider before you request a free, non-binding quote.
            </p>

            <div className="p-6 rounded-2xl bg-warm-surface border border-border">
              <h2 className="text-lg font-display font-semibold mb-4 text-foreground">
                ⚡ In short
              </h2>
              <ul className="space-y-2">
                {[
                  "Describe the job precisely to get realistic quotes and to compare prices, materials and schedules.",
                  "Choose a painter by quality, preparation and experience – not only the lowest price.",
                  "Allow for access, parking and masking in Copenhagen homes and buildings.",
                  "Get a written agreement on surfaces, paint, treatments, materials and final cleaning.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CASE HIGHLIGHT */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={projectImg}
                alt="Painting work in an apartment in Copenhagen"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Painting in Copenhagen
            </h2>
            <p className="text-muted-foreground mb-4">
              Interior painting of an apartment in Copenhagen, with painting of walls, ceilings
              and woodwork, plus filling and preparation of surfaces — one of the types of job
              we often do for homeowners in the city.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground mb-2">
              "We had painting work done in our apartment and the result was fantastic. Very
              professional, thorough work, finished on time. Highly recommended."
            </blockquote>
            <p className="text-sm text-muted-foreground mb-6">— Mette H., Copenhagen</p>
            <Link
              to="/referencer"
              className="inline-block py-1 text-primary font-medium hover:underline"
            >
              See more of our projects →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* PRICE */}
      <section id="priser" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              How much does a painter in Copenhagen cost?
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
              <p>
                Here are our prices for the most common jobs. All prices are in Danish kroner (DKK)
                incl. 25% VAT, and they apply in Copenhagen and on Zealand. They are guidelines,
                because the final price depends on the job.
              </p>
            </div>

            <div className="mb-6">
              <PriceTable rows={PRICES} lang="en" />
            </div>
            <p className="text-sm text-muted-foreground mb-10">
              Prices are in DKK incl. 25% VAT. The hourly rate is used where the job cannot be
              measured in m², pieces or metres. You can also see the prices on{" "}
              <Link to={lp(PRICE_PATH)} className="text-primary hover:underline">our prices page</Link>.
            </p>

            <h3 className="text-xl font-display font-semibold mb-4 text-foreground">
              What makes the price higher or lower?
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                "The surface: does it need filling, crack repair or wallpaper removal first?",
                "The paint and number of coats: ordinary wall paint, or something that withstands more wear in a kitchen or hallway.",
                "Ceiling height: high ceilings, as in many Copenhagen apartments, take longer.",
                "Access: fourth floor with no lift, parking, and whether you live in the home while we work.",
                "Timing: does the work have to be done in the evening or at the weekend?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-10">
              After we have seen the job, we can agree a fixed price, so you know what it will come to.
            </p>

            <div className="p-6 rounded-2xl bg-warm-surface border border-border">
              <h3 className="text-lg font-display font-semibold mb-3 text-foreground">
                How to get a price for your job
              </h3>
              <p className="text-muted-foreground mb-3">Write to us with:</p>
              <ul className="space-y-1 text-muted-foreground text-sm mb-4 list-disc pl-5">
                <li>Where in Copenhagen the home is</li>
                <li>Number of rooms and roughly how many square metres</li>
                <li>What needs painting: walls, ceilings, woodwork</li>
                <li>Photos of the rooms and any damage</li>
              </ul>
              <p className="text-muted-foreground text-sm mb-5">
                You can upload the photos directly in the contact form. We reply within 24 hours,
                and the quote is free and non-binding.
              </p>
              <Link
                to="/kontakt"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get a free quote
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE — FINDING A PAINTER */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Finding a painter in Copenhagen for the right painting job
            </h2>
            <p className="text-muted-foreground mb-4">
              Finding a painter in Copenhagen is not only about getting the lowest price. It is
              about choosing a professional who understands the condition of the home, the light
              in the rooms and the practical conditions that often come with the city's
              apartments, houses and commercial premises. A well-done painting job can lift a
              worn room considerably, while poor preparation quickly shows as uneven surfaces,
              visible joins or paint that does not last.
            </p>
            <p className="text-muted-foreground mb-4">
              Start by defining the job as concretely as possible. Is it only the walls in one
              room, or does the work also include ceilings, woodwork, filling, wallpaper removal
              or crack repair? The clearer the job is described, the easier it is for a painter
              to give a realistic quote. It also gives you a better basis for comparing prices,
              materials and schedules across quotes.
            </p>
            <p className="text-muted-foreground mb-4">
              In Copenhagen, access can affect both planning and price. An apartment on the fourth
              floor with no lift, limited parking or work in an occupied building often needs extra
              coordination. So ask how the painter protects floors and furniture, handles masking
              and tidying up, and organises the work if you stay at home. These details separate a
              smooth job from a project that takes up more of your everyday life than it needs to.
            </p>
            <p className="text-muted-foreground mb-4">
              The right paint is not chosen by colour alone either. Gloss, durability, washability
              and surface must suit the room. A kitchen, hallway and child's room make different
              demands than a bedroom, and older walls may need thorough preparation before the
              final colour goes on. Our painters typically assess the surface first, so loose
              paint, nicotine, damp marks or minor damage are dealt with properly rather than just
              covered up.
            </p>
            <p className="text-muted-foreground mb-10">
              Ask for a written agreement where the scope is clearly described: which surfaces are
              treated, how many coats are applied, which type of paint is used, and whether
              materials, masking and final cleaning are included. References and photos of similar
              jobs can also say more than a general promise of quality. When expectations are
              agreed from the start, it is easier to choose a painter who suits the job, the home
              and the result you want.
            </p>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Checklist for quotes from painters in Copenhagen
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {CHECKLIST.map((row) => (
                <div key={row.p} className="p-4 rounded-xl bg-warm-surface border border-border">
                  <p className="font-semibold text-foreground mb-2">{row.p}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-foreground">To include in the quote: </span>
                    {row.d}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Why: </span>
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Point to clarify</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">What the quote should describe</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  {CHECKLIST.map((row) => (
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
              Choose the right painter
            </h3>
            <ul className="space-y-2">
              {[
                "Describe the job precisely, including walls, ceilings, woodwork and any repairs needed.",
                "Get written quotes with materials, number of coats, masking and final cleaning.",
                "Clarify access, parking and coordination when working in occupied Copenhagen apartments.",
                "Choose paint by the room's wear, washability, gloss and the condition of the walls.",
                "Look at references and photos of similar jobs before you choose.",
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

      {/* NEIGHBORHOODS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We paint in every district of Copenhagen
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {NEIGHBORHOODS.map((n) => (
                <span
                  key={n}
                  className="px-4 py-2 rounded-full bg-warm-surface text-sm text-foreground border border-border"
                >
                  {n}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mt-8">
              Whether you live in Østerbro, Nørrebro, Vesterbro or Amager, we agree the visit and
              the time to suit you. This covers every postcode in the city, from København K to
              NV, S and Ø. If you live in Frederiksberg, you can read about{" "}
              <Link to={lp("/maler-frederiksberg")} className="text-primary hover:underline">painters in Frederiksberg</Link>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* APARTMENT, MOVE-OUT, COMMERCIAL */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Painting for apartments, move-outs and businesses
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Many people contact us when an apartment is to be handed back or let. Then there
                is a date the walls and ceilings must be ready for. Tell us the deadline when you
                contact us, and we will plan around it. You can also read about our{" "}
                <Link to={lp("/ydelser/indendoers-maling")} className="text-primary hover:underline">interior painting</Link>{" "}
                and{" "}
                <Link to={lp("/ydelser/renovering")} className="text-primary hover:underline">renovation</Link>.
              </p>
              <p>
                Offices, shops and housing associations are often painted outside opening hours,
                so operations can carry on. We adapt our schedule to yours, including{" "}
                <Link to={lp("/ydelser/maler-aften-weekend")} className="text-primary hover:underline">evenings and weekends</Link>.
                See more under{" "}
                <Link to={lp("/ydelser/erhvervsmaling")} className="text-primary hover:underline">commercial painting</Link>{" "}
                or our{" "}
                <Link to={lp("/b2b")} className="text-primary hover:underline">B2B partnership</Link>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE — READY FOR A QUOTE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-card-foreground">
              Painter Copenhagen: ready for a free, non-binding quote from our painter?
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
              <p>
                When you choose a painter in Copenhagen, it should be easy to get a clear picture
                of the job, the process and the price. A good painting job does not start with a
                standard solution, but with a thorough assessment of the condition of the home,
                the light, the materials and your wishes for the finish. That is why our painter
                starts from your own rooms – whether it is a single wall, a classic Copenhagen
                apartment, a move-out refurbishment or a larger renovation of a house or
                commercial premises.
              </p>
              <p>
                You can get a free quote that describes the scope of the work and the main
                assumptions, so you know what is included before the work starts. A non-binding
                quote also gives you peace to compare solutions and ask the questions that matter:
                Should the walls be filled completely? Is priming needed? Which paint suits the
                kitchen, bedroom or facade? And how is the work planned so that daily life is
                disturbed as little as possible?
              </p>
              <p>
                We believe a painting quote should be transparent rather than just low. That is
                why a fixed price can be agreed after we have seen the job and defined its scope,
                so there is a shared understanding of materials, preparation, number of treatments
                and the result you want. This reduces the risk of surprises along the way and
                makes it easier to decide with confidence.
              </p>
              <p>
                Contact us when you need professional advice on colours, surfaces or practical
                planning in Copenhagen and the surrounding area. With photos, measurements or a
                short description of the job, we can often give an initial assessment quickly; for
                more extensive work, a visit is the best route to an accurate solution. The aim is
                simple: well-done painting, proper dialogue and a quote that is as clear as the
                finished surface.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-card-foreground">
              How to get a clear quote
            </h3>
            <ul className="space-y-2">
              {[
                "Send photos, measurements and a short description of the job.",
                "Have the surfaces, light and need for preparation assessed.",
                "Clarify paint type, colours and the finish you want in each room.",
                "Receive a transparent quote with scope, materials and treatments.",
                "Agree a visit for larger renovations or complex jobs.",
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

      {/* SERVICES RECAP */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-foreground text-center">
              Our services in Copenhagen
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Interior painting of apartments and houses",
                "Facade painting and exterior painting",
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
              <Link to={lp("/ydelser")} className="inline-block py-1 text-primary font-medium hover:underline">
                See all our painting services →
              </Link>
              <Link to={lp("/ydelser/indendoers-maling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Interior painting in Copenhagen →
              </Link>
              <Link to={lp("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Copenhagen →
              </Link>
              <Link to={lp("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Copenhagen →
              </Link>
              <Link to={lp("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Copenhagen →
              </Link>
              <Link to={lp("/maler-roskilde")} className="inline-block py-1.5 text-sm text-muted-foreground hover:underline">
                Do you live in the Roskilde area? See our page about painters in Roskilde →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* NEARBY AREAS (English equivalent of NearbyAreas) */}
      {nearby.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
                Painting near Copenhagen
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {nearby.map((city) => (
                  <Link
                    key={city!.path}
                    to={lp(city!.path)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                  >
                    <MapPin size={16} className="text-primary flex-shrink-0" />
                    Painter in {city!.name}
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-10 text-center text-card-foreground">
              Frequently asked questions — Painter in Copenhagen
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
              <Link to={lp("/ofte-stillede-spoergsmaal")} className="inline-block py-1 text-primary font-medium hover:underline">
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
              Ready to get your Copenhagen home painted?
            </h2>
            <p className="text-lg mb-10 text-primary-foreground/90">
              Contact us today for a free, non-binding quote.
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
