import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import ExploreLinks from "@/components/ExploreLinks";
import HreflangLinks from "@/components/HreflangLinks";
import PriceTable from "@/components/PriceTable";
import { CheckCircle, Clock, MapPin, ShieldCheck } from "lucide-react";
import { PRICES, PRICE_PATH, priceOfferCatalog } from "@/lib/prices";
import { EN_ROUTES, langPath, ORIGIN } from "@/lib/enRoutes";

type Lang = "da" | "en";

const link = "text-primary hover:underline";

const COPY = {
  da: {
    title: "Priser på malerarbejde | Fra 65 kr./m² – MAN MALER",
    description:
      "Se MAN MALERs priser på malerarbejde i København og på Sjælland: vægge, lofter, spartling, tapet og døre. Priser i DKK inkl. moms og gratis tilbud.",
    keywords:
      "maler priser, maler pris københavn, pris på malerarbejde, maling pr. m2, maler timepris, hvad koster en maler, malerpriser sjælland, spartling pris, tapetfjernelse pris",
    crumbHome: "Forside",
    crumbHere: "Priser",
    aria: "Brødkrumme",
    h1: "Priser på malerarbejde i København og på Sjælland",
    lead: "Her kan du se, hvad de mest almindelige maleropgaver koster. Alle priser er i danske kroner og inkl. 25 % moms.",
    points: ["København og hele Sjælland", "Svar inden for 24 timer", "Gratis og uforpligtende tilbud"],
    cta: "Få et gratis tilbud",
    listTitle: "Prisliste",
    listIntro:
      "Priserne er vejledende, fordi den endelige pris afhænger af opgaven. Står der \"efter opgaven\", giver vi en pris, når vi har set billeder eller været forbi.",
    listNote:
      "Priserne er i DKK inkl. 25 % moms. Pris pr. time bruges, hvor opgaven ikke kan måles i m², stk. eller meter.",
    factorsTitle: "Hvad gør, at prisen bliver højere eller lavere?",
    factors: [
      "Underlaget: skal der spartles, rettes revner op eller tages tapet ned først?",
      "Malingen og antal strøg: almindelig vægmaling eller noget, der tåler mere slid i køkken og entré.",
      "Loftshøjden: høje lofter tager længere tid.",
      "Adgangen: fjerde sal uden elevator, parkering, og om du bor i boligen, mens vi arbejder.",
      "Tidspunktet: skal arbejdet ske om aftenen eller i weekenden?",
    ],
    notOnList: "Kan du ikke finde din opgave på listen, er det helt i orden. Skriv til os, så finder vi en pris. Du kan også læse om vores",
    linkIndoor: "indvendige maling",
    linkReno: "renovering",
    linkCommercial: "erhvervsmaling",
    orSee: ", eller se, hvordan vi",
    linkFlex: "tilpasser vores program",
    after: "efter dig.",
    and: "og",
    howTitle: "Sådan får du en pris på din opgave",
    howSend: "Skriv til os med:",
    howItems: [
      "Hvor boligen eller lokalet ligger",
      "Antal rum og cirka hvor mange kvadratmeter",
      "Hvad der skal males: vægge, lofter, træværk",
      "Billeder af rummene og eventuelle skader",
    ],
    howNote:
      "Billederne kan du lægge direkte ind i kontaktformularen. Vi svarer inden for 24 timer, og tilbuddet er gratis og uforpligtende.",
    faqTitle: "Ofte stillede spørgsmål om priser",
    faqs: [
      { q: "Er priserne med moms?", a: "Ja. Alle priser på siden er i danske kroner og inkluderer 25 % moms." },
      {
        q: "Er det en fast pris, eller kan den ændre sig?",
        a: "Priserne på siden er vejledende. Når vi har set opgaven, kan vi aftale en fast pris, så du ved, hvad det ender på.",
      },
      {
        q: "Hvad koster det at male vægge pr. m²?",
        a: "Maling af vægge i to strøg koster 65–150 kr./m² inkl. moms. Hvor i intervallet prisen lander, afhænger af underlag, farveskift og adgangsforhold.",
      },
      {
        q: "Hvad koster en maler pr. time?",
        a: "Timeprisen ligger typisk mellem 593,75 og 812,50 kr. inkl. moms, afhængigt af arbejdet. Slibning ligger i den lave ende, mindre rettelser i den høje.",
      },
      {
        q: "Hvorfor står nogle opgaver som \"efter opgaven\"?",
        a: "Fordi tiden varierer meget fra opgave til opgave, fx ved spartling af lofter, reparation af revner og tapetsering. Her giver billeder eller en besigtigelse det bedste grundlag for en pris.",
      },
      { q: "Gælder priserne hele Sjælland?", a: "Ja, priserne gælder i København og på resten af Sjælland." },
    ],
    cph: "Maler i København →",
    frb: "Maler på Frederiksberg →",
    moreFaq: "Flere spørgsmål om malerarbejde →",
    ctaTitle: "Klar til at få en pris?",
    ctaText: "Kontakt os i dag for et gratis og uforpligtende tilbud.",
    serviceName: "Malerarbejde",
    areas: ["København", "Sjælland"],
  },
  en: {
    title: "Painting prices | From 65 DKK/m² – MAN MALER",
    description:
      "MAN MALER painting prices in Copenhagen and Zealand: walls, ceilings, filling, wallpaper and doors. Prices in DKK incl. VAT and a free quote.",
    keywords:
      "painter prices, painter price Copenhagen, cost of painting, painting price per m2, painter hourly rate, how much does a painter cost, painting prices Zealand",
    crumbHome: "Home",
    crumbHere: "Prices",
    aria: "Breadcrumb",
    h1: "Painting prices in Copenhagen and across Zealand",
    lead: "Here is what the most common painting jobs cost. All prices are in Danish kroner and include 25% VAT.",
    points: ["Copenhagen and all of Zealand", "Reply within 24 hours", "Free, non-binding quote"],
    cta: "Get a free quote",
    listTitle: "Price list",
    listIntro:
      "Prices are indicative, because the final price depends on the job. Where it says \"depends on the job\", we give a price once we have seen photos or visited.",
    listNote:
      "Prices are in DKK incl. 25% VAT. The hourly price is used where the job cannot be measured in m², pieces or metres.",
    factorsTitle: "What makes the price higher or lower?",
    factors: [
      "The surface: does it need filling, crack repairs or wallpaper removal first?",
      "The paint and number of coats: ordinary wall paint or something that withstands more wear in a kitchen or hallway.",
      "Ceiling height: high ceilings take longer.",
      "Access: fourth floor without a lift, parking, and whether you live there while we work.",
      "Timing: does the work need to happen in the evening or at the weekend?",
    ],
    notOnList: "If you cannot find your job on the list, that is fine. Write to us and we will find a price. You can also read about our",
    linkIndoor: "interior painting",
    linkReno: "renovation",
    linkCommercial: "commercial painting",
    orSee: ", or see how we",
    linkFlex: "adapt our schedule",
    after: "to you.",
    and: "and",
    howTitle: "How to get a price for your job",
    howSend: "Write to us with:",
    howItems: [
      "Where the home or premises are",
      "Number of rooms and roughly how many square metres",
      "What needs painting: walls, ceilings, woodwork",
      "Photos of the rooms and any damage",
    ],
    howNote:
      "You can add the photos directly in the contact form. We reply within 24 hours, and the quote is free and non-binding.",
    faqTitle: "Frequently asked questions about prices",
    faqs: [
      { q: "Do the prices include VAT?", a: "Yes. All prices on this page are in Danish kroner and include 25% VAT." },
      {
        q: "Is it a fixed price, or can it change?",
        a: "The prices on this page are indicative. Once we have seen the job, we can agree a fixed price, so you know what it comes to.",
      },
      {
        q: "What does it cost to paint walls per m²?",
        a: "Painting walls in two coats costs 65–150 DKK/m² incl. VAT. Where in that range the price lands depends on the surface, colour change and access.",
      },
      {
        q: "What does a painter cost per hour?",
        a: "The hourly rate is typically between 593.75 and 812.50 DKK incl. VAT, depending on the work. Sanding is at the low end, minor touch-ups at the high end.",
      },
      {
        q: "Why do some jobs say \"depends on the job\"?",
        a: "Because the time varies a lot from job to job, for example when filling ceilings, repairing cracks and hanging wallpaper. Photos or a visit give the best basis for a price.",
      },
      { q: "Do the prices apply across Zealand?", a: "Yes, the prices apply in Copenhagen and the rest of Zealand." },
    ],
    cph: "Painter in Copenhagen →",
    frb: "Painter in Frederiksberg →",
    moreFaq: "More questions about painting →",
    ctaTitle: "Ready for a price?",
    ctaText: "Contact us today for a free, non-binding quote.",
    serviceName: "Painting",
    areas: ["Copenhagen", "Zealand"],
  },
} as const;

export default function PagePriser({ lang = "da" }: { lang?: Lang }) {
  const c = COPY[lang];
  const path = lang === "en" ? EN_ROUTES[PRICE_PATH] : PRICE_PATH;
  const url = `${ORIGIN}${path}`;
  const L = (daPath: string) => langPath(daPath, lang);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.serviceName,
    serviceType: c.serviceName,
    url,
    provider: { "@id": `${ORIGIN}/#organization` },
    areaServed: c.areas.map((name) => ({ "@type": "AdministrativeArea", name })),
    hasOfferCatalog: priceOfferCatalog(PRICES, lang),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <HreflangLinks daPath={PRICE_PATH} lang={lang} />
      <Helmet>
        <title>{c.title}</title>
        <meta name="description" content={c.description} />
        <meta name="keywords" content={c.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={c.title} />
        <meta property="og:description" content={c.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${ORIGIN}/og-image.jpg`} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.title} />
        <meta name="twitter:description" content={c.description} />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs items={[{ name: c.crumbHome, to: "/" }, { name: c.crumbHere }]} ariaLabel={c.aria} />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">{c.h1}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">{c.lead}</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                {c.points[0]}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                {c.points[1]}
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" />
                {c.points[2]}
              </div>
            </div>
            <Link
              to="/kontakt"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {c.cta}
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* PRICE TABLE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">{c.listTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{c.listIntro}</p>
            <div className="mb-6">
              <PriceTable rows={PRICES} lang={lang} />
            </div>
            <p className="text-sm text-muted-foreground">{c.listNote}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT AFFECTS PRICE */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">{c.factorsTitle}</h2>
            <ul className="space-y-3 mb-8">
              {c.factors.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              {c.notOnList}{" "}
              <Link to={L("/ydelser/indendoers-maling")} className={link}>{c.linkIndoor}</Link>,{" "}
              <Link to={L("/ydelser/renovering")} className={link}>{c.linkReno}</Link> {c.and}{" "}
              <Link to={L("/ydelser/erhvervsmaling")} className={link}>{c.linkCommercial}</Link>
              {c.orSee}{" "}
              <Link to={L("/ydelser/maler-aften-weekend")} className={link}>{c.linkFlex}</Link> {c.after}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW TO GET PRICE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="p-6 md:p-8 rounded-2xl bg-warm-surface border border-border">
              <h2 className="text-xl md:text-2xl font-display font-semibold mb-3 text-foreground">{c.howTitle}</h2>
              <p className="text-muted-foreground mb-3">{c.howSend}</p>
              <ul className="space-y-1 text-muted-foreground text-sm mb-4 list-disc pl-5">
                {c.howItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mb-5">{c.howNote}</p>
              <Link
                to="/kontakt"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                {c.cta}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-10 text-center text-foreground">{c.faqTitle}</h2>
            <div className="space-y-8">
              {c.faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center flex flex-col items-center gap-1">
              <Link to={L("/maler-koebenhavn")} className="inline-block py-1 text-primary font-medium hover:underline">
                {c.cph}
              </Link>
              <Link to={L("/maler-frederiksberg")} className="inline-block py-1 text-primary font-medium hover:underline">
                {c.frb}
              </Link>
              <Link to={L("/ofte-stillede-spoergsmaal")} className="inline-block py-1 text-primary font-medium hover:underline">
                {c.moreFaq}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ExploreLinks />

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden bg-primary">
        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">{c.ctaTitle}</h2>
            <p className="text-lg mb-10 text-primary-foreground/90">{c.ctaText}</p>
            <Link
              to="/kontakt"
              className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {c.cta}
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
