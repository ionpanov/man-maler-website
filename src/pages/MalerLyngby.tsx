import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

const AREAS = ["Kongens Lyngby", "Virum", "Sorgenfri", "Lundtofte"];

const FAQS = [
  {
    q: "Har I erfaring med større villaer og herskabelige huse i Lyngby?",
    a: "Ja. Kongens Lyngby og omegn har mange store villaer, og vi lægger vægt på præcision og et højt finish-niveau, både ved facademaling og indendørs opgaver.",
  },
  {
    q: "Hvor lang tid tager facademaling af en større villa?",
    a: "Det afhænger af husets størrelse og facadens stand. Vi kommer altid ud og ser opgaven, før vi giver en konkret tidsplan og et tilbud.",
  },
  {
    q: "Dækker I også Virum og Sorgenfri?",
    a: "Ja, vi dækker hele Lyngby-Taarbæk Kommune, inklusiv Virum, Sorgenfri og Lundtofte.",
  },
  {
    q: "Hvad koster det at få malet en villa i Lyngby?",
    a: "Prisen afhænger af husets størrelse, stand og materialevalg. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
];

export default function MalerLyngby() {
  return (
    <>
      <Helmet>
        <title>Maler i Lyngby | Villamaling & Facademaling – MAN MALER</title>
        <meta
          name="description"
          content="Søger du en maler i Kongens Lyngby? MAN MALER udfører facademaling, indendørs maling og renovering af villaer med præcision. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler lyngby, malerfirma lyngby, facademaling lyngby, maler virum, maler sorgenfri"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-lyngby" />

        <meta property="og:title" content="Maler i Lyngby | MAN MALER" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Kongens Lyngby. Facademaling, indendørs maling og renovering af villaer. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-lyngby" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler i Lyngby | MAN MALER" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Kongens Lyngby. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Lyngby
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til villaer og huse i Kongens Lyngby — facademaling,
              indendørs maling og renovering med præcision.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Lyngby-Taarbæk
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
              Malerfirma med erfaring fra Lyngby
            </h2>
            <p className="text-muted-foreground mb-4">
              Kongens Lyngby i det nordlige Storkøbenhavn har mange store
              villaer og herskabelige huse. Som maler i Lyngby lægger vi
              derfor særlig vægt på præcision, rene linjer og et
              professionelt finish — både ved facademaling og indendørs
              opgaver.
            </p>
            <p className="text-muted-foreground mb-4">
              Vi udfører ofte omfattende renoveringsopgaver, hvor både
              udvendige og indvendige overflader skal klargøres grundigt
              før maling.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Lyngby-Taarbæk Kommune, herunder{" "}
              <strong>Virum</strong>, <strong>Sorgenfri</strong> og{" "}
              <strong>Lundtofte</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Lyngby-Taarbæk
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
                alt="Facademaling af villa"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Facademaling med præcision
            </h2>
            <p className="text-muted-foreground mb-4">
              Større villaer i Lyngby-området kræver ofte en mere omfattende
              proces — stillads, grundig afrensning og flere lag maling for
              et holdbart og flot resultat.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi rådgiver gerne om farvevalg og materialer, der passer til
              husets stil og arkitektur.
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
              Vores ydelser i Lyngby
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling af villaer og større huse",
                "Indendørs maling med fokus på finish",
                "Renovering, spartling og klargøring af overflader",
                "Erhvervsmaling til kontorer og institutioner",
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

      {/* NEARBY AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Malerarbejde i nærheden af Lyngby
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-gentofte"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Gentofte
                </Link>
                <Link
                  to="/maler-koebenhavn"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i København
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
              Ofte stillede spørgsmål — Maler i Lyngby
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
              Klar til at få malet i Lyngby?
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
