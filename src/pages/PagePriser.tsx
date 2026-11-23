import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import ExploreLinks from "@/components/ExploreLinks";
import PriceTable from "@/components/PriceTable";
import { CheckCircle, Clock, MapPin, ShieldCheck } from "lucide-react";
import { PRICES, PRICE_PATH, priceOfferCatalog } from "@/lib/prices";

const ORIGIN = "https://manmaler.dk";
const TITLE = "Priser på malerarbejde | Fra 65 kr./m² – MAN MALER";
const DESCRIPTION =
  "Se MAN MALERs priser på malerarbejde i København og på Sjælland: vægge, lofter, spartling, tapet og døre. Priser i DKK inkl. moms og gratis tilbud.";

const link = "text-primary hover:underline";

const FAQS = [
  {
    q: "Er priserne med moms?",
    a: "Ja. Alle priser på siden er i danske kroner og inkluderer 25 % moms.",
  },
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
  {
    q: "Gælder priserne hele Sjælland?",
    a: "Ja, priserne gælder i København og på resten af Sjælland.",
  },
];

export default function PagePriser() {
  const url = `${ORIGIN}${PRICE_PATH}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Malerarbejde",
    serviceType: "Malerarbejde",
    url,
    provider: { "@id": `${ORIGIN}/#organization` },
    areaServed: ["København", "Sjælland"].map((name) => ({ "@type": "AdministrativeArea", name })),
    hasOfferCatalog: priceOfferCatalog(PRICES),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <Helmet>
        <html lang="da" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="maler priser, maler pris københavn, pris på malerarbejde, maling pr. m2, maler timepris, hvad koster en maler, malerpriser sjælland, spartling pris, tapetfjernelse pris"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${ORIGIN}/og-image.jpg`} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs items={[{ name: "Forside", to: "/" }, { name: "Priser" }]} />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Priser på malerarbejde i København og på Sjælland
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Her kan du se, hvad de mest almindelige maleropgaver koster. Alle priser er i danske kroner og
              inkl. 25 % moms.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                København og hele Sjælland
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                Svar inden for 24 timer
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" />
                Gratis og uforpligtende tilbud
              </div>
            </div>
            <Link
              to="/kontakt"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Få et gratis tilbud
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* PRICE TABLE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Prisliste
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Priserne er vejledende, fordi den endelige pris afhænger af opgaven. Står der &quot;efter
              opgaven&quot;, giver vi en pris, når vi har set billeder eller været forbi.
            </p>
            <div className="mb-6">
              <PriceTable rows={PRICES} />
            </div>
            <p className="text-sm text-muted-foreground">
              Priserne er i DKK inkl. 25 % moms. Pris pr. time bruges, hvor opgaven ikke kan måles i m², stk.
              eller meter.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT AFFECTS PRICE */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Hvad gør, at prisen bliver højere eller lavere?
            </h2>
            <ul className="space-y-3 mb-8">
              {[
                "Underlaget: skal der spartles, rettes revner op eller tages tapet ned først?",
                "Malingen og antal strøg: almindelig vægmaling eller noget, der tåler mere slid i køkken og entré.",
                "Loftshøjden: høje lofter tager længere tid.",
                "Adgangen: fjerde sal uden elevator, parkering, og om du bor i boligen, mens vi arbejder.",
                "Tidspunktet: skal arbejdet ske om aftenen eller i weekenden?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Kan du ikke finde din opgave på listen, er det helt i orden. Skriv til os, så finder vi en pris. Du
              kan også læse om vores{" "}
              <Link to="/ydelser/indendoers-maling" className={link}>indvendige maling</Link>,{" "}
              <Link to="/ydelser/renovering" className={link}>renovering</Link> og{" "}
              <Link to="/ydelser/erhvervsmaling" className={link}>erhvervsmaling</Link>, eller se, hvordan vi{" "}
              <Link to="/ydelser/maler-aften-weekend" className={link}>tilpasser vores program</Link> efter dig.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW TO GET PRICE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="p-6 md:p-8 rounded-2xl bg-warm-surface border border-border">
              <h2 className="text-xl md:text-2xl font-display font-semibold mb-3 text-foreground">
                Sådan får du en pris på din opgave
              </h2>
              <p className="text-muted-foreground mb-3">Skriv til os med:</p>
              <ul className="space-y-1 text-muted-foreground text-sm mb-4 list-disc pl-5">
                <li>Hvor boligen eller lokalet ligger</li>
                <li>Antal rum og cirka hvor mange kvadratmeter</li>
                <li>Hvad der skal males: vægge, lofter, træværk</li>
                <li>Billeder af rummene og eventuelle skader</li>
              </ul>
              <p className="text-muted-foreground text-sm mb-5">
                Billederne kan du lægge direkte ind i kontaktformularen. Vi svarer inden for 24 timer, og tilbuddet
                er gratis og uforpligtende.
              </p>
              <Link
                to="/kontakt"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Få et gratis tilbud
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-10 text-center text-foreground">
              Ofte stillede spørgsmål om priser
            </h2>
            <div className="space-y-8">
              {FAQS.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center flex flex-col items-center gap-1">
              <Link to="/maler-koebenhavn" className="inline-block py-1 text-primary font-medium hover:underline">
                Maler i København →
              </Link>
              <Link to="/maler-frederiksberg" className="inline-block py-1 text-primary font-medium hover:underline">
                Maler på Frederiksberg →
              </Link>
              <Link to="/ofte-stillede-spoergsmaal" className="inline-block py-1 text-primary font-medium hover:underline">
                Flere spørgsmål om malerarbejde →
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
              Klar til at få en pris?
            </h2>
            <p className="text-lg mb-10 text-primary-foreground/90">
              Kontakt os i dag for et gratis og uforpligtende tilbud.
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Få et gratis tilbud
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
