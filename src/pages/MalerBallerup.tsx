import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import renovationImg from "@/assets/renovation.webp";

const AREAS = [
  "Ballerup by", "Skovlunde", "Måløv", "Smørum", "Tapeten", "Egebjerg",
];

const FAQS = [
  {
    q: "Udfører I malerarbejde i både villaer og etageejendomme i Ballerup?",
    a: "Ja. Ballerup har en blanding af villakvarterer, rækkehuse og etageejendomme, og vi tilpasser løsningen efter boligtypen — fra facademaling på en villa til indendørs maling i en lejlighed.",
  },
  {
    q: "Hvor lang tid tager det at få malet et hus i Ballerup?",
    a: "Det afhænger af opgavens omfang og husets stand. Vi kommer altid ud og ser opgaven, før vi giver en tidsplan og et konkret tilbud.",
  },
  {
    q: "Dækker I også Skovlunde og Måløv?",
    a: "Ja, vi dækker hele Ballerup Kommune, inklusiv Skovlunde, Måløv, Smørum og de omkringliggende områder.",
  },
  {
    q: "Kan I hjælpe med erhvervsmaling til virksomheder i Ballerup?",
    a: "Ja, vi udfører erhvervsmaling til kontorer, butikker og erhvervslokaler i Ballerup, ofte planlagt uden for normal arbejdstid for at undgå at forstyrre driften.",
  },
  {
    q: "Hvad koster malerarbejde i Ballerup?",
    a: "Prisen afhænger af opgavens omfang, overfladernes stand og materialevalg. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set eller fået beskrevet opgaven.",
  },
];

export default function MalerBallerup() {
  return (
    <>
      <Helmet>
        <title>Maler i Ballerup | Facademaling & Renovering – MAN MALER</title>
        <meta
          name="description"
          content="Søger du en maler i Ballerup? MAN MALER udfører indendørs og udendørs maling, renovering og erhvervsmaling i hele Ballerup Kommune. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler ballerup, malerfirma ballerup, facademaling ballerup, maler skovlunde, maler måløv"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-ballerup" />

        <meta property="og:title" content="Maler i Ballerup | MAN MALER" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Ballerup. Indendørs maling, facademaling, renovering og erhvervsmaling. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-ballerup" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler i Ballerup | MAN MALER" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Ballerup. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Ballerup
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til villaer, rækkehuse, lejligheder og erhverv i
              Ballerup Kommune — indendørs og udendørs maling, renovering og
              erhvervsmaling.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Ballerup Kommune
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

      {/* INTRO / LOCAL RELEVANCE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-card-foreground">
              Malerfirma til Ballerup og omegn
            </h2>
            <p className="text-muted-foreground mb-4">
              Ballerup i den vestlige del af Storkøbenhavn har en bred vifte
              af boligtyper — fra villakvarterer og rækkehuse til nyere
              etageejendomme og erhvervsområder. Som maler i Ballerup møder vi
              derfor både opgaver med facademaling af villaer og indendørs
              maling i lejligheder.
            </p>
            <p className="text-muted-foreground mb-4">
              Uanset om du har brug for en enkelt renoveret stue, en hel
              facade malet, eller en løbende aftale om vedligeholdelse af
              erhvervslokaler, tilpasser vi løsningen efter opgaven og giver
              altid et gratis og uforpligtende tilbud, før arbejdet går i
              gang.
            </p>
            <p className="text-muted-foreground">
              Vi dækker <strong>Ballerup by</strong> samt de omkringliggende
              områder som <strong>Skovlunde</strong>, <strong>Måløv</strong>{" "}
              og <strong>Smørum</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Ballerup Kommune
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
                alt="Renovering og malerarbejde"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Renovering og klargøring af overflader
            </h2>
            <p className="text-muted-foreground mb-4">
              Mange af vores opgaver i Ballerup-området starter med grundig
              klargøring — spartling, reparation af overflader og korrekt
              grundbehandling — inden selve malerarbejdet går i gang. Det
              sikrer et resultat, der holder i mange år.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi arbejder med både private boliger og erhvervsejendomme, og
              planlægger altid opgaven, så den passer ind i din hverdag.
            </p>
            <Link
              to="/referencer"
              className="text-primary font-medium hover:underline"
            >
              Se eksempler på vores arbejde →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES RECAP */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-foreground text-center">
              Vores ydelser i Ballerup
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Indendørs maling af lejligheder, villaer og rækkehuse",
                "Facademaling og udendørs vedligeholdelse",
                "Renovering, spartling og klargøring af overflader",
                "Erhvervsmaling til kontorer og butikker",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 flex flex-col items-center gap-2">
              <Link to="/ydelser" className="text-primary font-medium hover:underline">
                Se alle vores malerydelser →
              </Link>
              <Link to="/omraader" className="text-sm text-muted-foreground hover:underline">
                Se alle de områder, vi dækker →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-10 text-center text-card-foreground">
              Ofte stillede spørgsmål — Maler i Ballerup
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
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden bg-primary">
        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
              Klar til at få malet i Ballerup?
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
