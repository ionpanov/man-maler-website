import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import renovationImg from "@/assets/renovation.webp";

const AREAS = ["Hellerup", "Charlottenlund", "Ordrup", "Vangede"];

const FAQS = [
  {
    q: "Arbejder I med de store villaer, Gentofte er kendt for?",
    a: "Ja. Gentofte har mange store, velholdte villaer, og vi lægger vægt på et højt finish-niveau og præcision i alt vores arbejde her.",
  },
  {
    q: "Kan I hjælpe med totalrenovering af ældre villaer?",
    a: "Ja, vi udfører gerne omfattende renoveringsopgaver, hvor både facade og indendørs overflader klargøres og males i én sammenhængende proces.",
  },
  {
    q: "Dækker I også Hellerup og Charlottenlund?",
    a: "Ja, vi dækker hele Gentofte Kommune, inklusiv Hellerup, Charlottenlund, Ordrup og Vangede.",
  },
  {
    q: "Hvad koster det at få malet en villa i Gentofte?",
    a: "Prisen afhænger af husets størrelse, stand og materialevalg. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
];

export default function MalerGentofte() {
  return (
    <>
      <Helmet>
        <title>Maler i Gentofte | Villamaling & Renovering – MAN MALER</title>
        <meta
          name="description"
          content="Søger du en maler i Gentofte? MAN MALER udfører facademaling, indendørs maling og renovering af villaer med præcision og høj finish. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler gentofte, malerfirma gentofte, facademaling gentofte, maler hellerup, maler charlottenlund"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-gentofte" />

        <meta property="og:title" content="Maler i Gentofte | MAN MALER" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Gentofte. Facademaling, indendørs maling og renovering af villaer. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-gentofte" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler i Gentofte | MAN MALER" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Gentofte. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Gentofte
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til villaer i Gentofte — facademaling, indendørs
              maling og renovering med fokus på præcision og finish.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Gentofte Kommune
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
              Malerfirma med erfaring fra Gentofte
            </h2>
            <p className="text-muted-foreground mb-4">
              Gentofte er kendt for sine store villaer og velholdte
              boligområder. Som maler i Gentofte lægger vi vægt på
              præcision og et højt finish-niveau i alt, hvad vi laver — fra
              facademaling til indendørs opgaver.
            </p>
            <p className="text-muted-foreground mb-4">
              Vi tager os god tid til forberedelse og klargøring af
              overfladerne, så resultatet lever op til de høje standarder,
              mange boligejere i området forventer.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Gentofte Kommune, herunder{" "}
              <strong>Hellerup</strong>, <strong>Charlottenlund</strong> og{" "}
              <strong>Ordrup</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Gentofte
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
                alt="Renovering af villa"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Renovering med høj finish
            </h2>
            <p className="text-muted-foreground mb-4">
              Mange af vores opgaver i Gentofte handler om renovering af
              ældre villaer, hvor detaljerne betyder meget — lister, paneler
              og overgange skal males med præcision.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi bruger kvalitetsmaterialer og tager os den nødvendige tid
              til hvert lag, så resultatet holder i mange år.
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
              Vores ydelser i Gentofte
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling af villaer med høj finish",
                "Indendørs maling og dekorative teknikker",
                "Renovering, spartling og klargøring af overflader",
                "Farverådgivning tilpasset husets stil",
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
              Ofte stillede spørgsmål — Maler i Gentofte
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
              Klar til at få malet i Gentofte?
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
