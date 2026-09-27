import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

const AREAS = ["Brøndby Strand", "Brøndbyøster", "Brøndbyvester", "Priorparken"];

const FAQS = [
  {
    q: "Maler I både villaer, rækkehuse og erhvervslokaler i Brøndby?",
    a: "Ja. Brøndby har en kombination af rækkehuse, villaer og erhvervsområder, og vi løser opgaver fra facademaling af boliger til kontormaling for virksomheder.",
  },
  {
    q: "Kan I hjælpe med erhvervsmaling til virksomheder tæt på erhvervsområderne?",
    a: "Ja, vi udfører erhvervsmaling til kontorer, lagerbygninger og butikker i Brøndbys erhvervsområder, og planlægger gerne arbejdet omkring virksomhedens åbningstider.",
  },
  {
    q: "Dækker I også Brøndby Strand og Priorparken?",
    a: "Ja, vi dækker hele Brøndby Kommune, inklusiv Brøndby Strand, Brøndbyøster, Brøndbyvester og Priorparken.",
  },
  {
    q: "Hvad koster det at få malet et rækkehus i Brøndby?",
    a: "Prisen afhænger af husets størrelse og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
];

export default function MalerBrondby() {
  return (
    <>
      <Helmet>
        <title>Maler i Brøndby | Bolig & Erhvervsmaling – MAN MALER</title>
        <meta
          name="description"
          content="Søger du en maler i Brøndby? MAN MALER udfører facademaling, indendørs maling og erhvervsmaling til boliger og virksomheder. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler brøndby, malerfirma brøndby, erhvervsmaling brøndby, maler brøndby strand"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-brondby" />

        <meta property="og:title" content="Maler i Brøndby | MAN MALER" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Brøndby. Facademaling, indendørs maling og erhvervsmaling. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-brondby" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler i Brøndby | MAN MALER" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Brøndby. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Brøndby
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til rækkehuse, villaer og erhverv i Brøndby —
              facademaling, indendørs maling og erhvervsmaling.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Brøndby Kommune
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
              Malerfirma med erfaring fra Brøndby
            </h2>
            <p className="text-muted-foreground mb-4">
              Brøndby har en kombination af rækkehuse, villaer og større
              erhvervsområder. Som maler i Brøndby udfører vi derfor både
              boligmaling for private og erhvervsmaling til virksomheder,
              lagerbygninger og kontorer.
            </p>
            <p className="text-muted-foreground mb-4">
              Ved erhvervsopgaver planlægger vi arbejdet, så det passer ind i
              virksomhedens hverdag og forstyrrer driften mindst muligt.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Brøndby Kommune, herunder{" "}
              <strong>Brøndby Strand</strong>, <strong>Brøndbyøster</strong>{" "}
              og <strong>Brøndbyvester</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Brøndby
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
                alt="Facademaling af rækkehus"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Facademaling og erhvervsmaling
            </h2>
            <p className="text-muted-foreground mb-4">
              Vi udfører både facademaling af boliger og erhvervsmaling til
              virksomheder i Brøndby — to opgavetyper, der ofte går hånd i
              hånd i et område med både boliger og erhverv tæt på hinanden.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi giver altid et konkret tilbud, tilpasset opgavens omfang og
              tidsplan.
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
              Vores ydelser i Brøndby
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling og udendørs vedligeholdelse",
                "Indendørs maling af rækkehuse og villaer",
                "Erhvervsmaling til kontorer og lagerbygninger",
                "Renovering, spartling og klargøring af overflader",
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
              Ofte stillede spørgsmål — Maler i Brøndby
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
              Klar til at få malet i Brøndby?
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
