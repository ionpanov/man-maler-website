import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

const AREAS = ["Hvidovre by", "Avedøre", "Friheden", "Rebæk"];

const FAQS = [
  {
    q: "Maler I rækkehuse fra 1950'erne og 60'erne i Hvidovre?",
    a: "Ja. Hvidovre har mange rækkehuse og parcelhuse fra midten af 1900-tallet, og vi har erfaring med den type overflader — herunder afrensning og reparation før maling.",
  },
  {
    q: "Hvor lang tid tager facademaling af et rækkehus?",
    a: "Det afhænger af husets stand og hvor meget forberedelse der kræves. Vi kommer altid ud og ser opgaven, før vi giver en tidsplan og et tilbud.",
  },
  {
    q: "Dækker I også Avedøre og Friheden?",
    a: "Ja, vi dækker hele Hvidovre Kommune, inklusiv Avedøre, Friheden og Rebæk.",
  },
  {
    q: "Hvad koster det at få malet et rækkehus i Hvidovre?",
    a: "Prisen afhænger af husets størrelse og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
];

export default function MalerHvidovre() {
  return (
    <>
      <Helmet>
        <title>Maler i Hvidovre | Facademaling & Renovering – MAN MALER</title>
        <meta
          name="description"
          content="Søger du en maler i Hvidovre? MAN MALER udfører facademaling, indendørs maling og renovering af rækkehuse og villaer. Gratis og uforpligtende tilbud."
        />
        <meta
          name="keywords"
          content="maler hvidovre, malerfirma hvidovre, facademaling hvidovre, maler avedøre, maler friheden"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-hvidovre" />

        <meta property="og:title" content="Maler i Hvidovre | MAN MALER" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Hvidovre. Facademaling, indendørs maling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-hvidovre" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler i Hvidovre | MAN MALER" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Hvidovre. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Hvidovre
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til rækkehuse, villaer og erhverv i Hvidovre —
              facademaling, indendørs maling og renovering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Hvidovre Kommune
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
              Malerfirma med erfaring fra Hvidovre
            </h2>
            <p className="text-muted-foreground mb-4">
              Hvidovre har mange rækkehuse og parcelhuse fra midten af
              1900-tallet, tæt på København. Som maler i Hvidovre møder vi
              derfor ofte opgaver med facademaling, træbeskyttelse og
              udvendig vedligeholdelse af ældre bebyggelser.
            </p>
            <p className="text-muted-foreground mb-4">
              Mange af husene kræver grundig klargøring før maling —
              afrensning af gammel maling, reparation af puds eller
              træværk, og korrekt grundbehandling, så resultatet holder.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Hvidovre Kommune, herunder{" "}
              <strong>Avedøre</strong>, <strong>Friheden</strong> og{" "}
              <strong>Rebæk</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Hvidovre
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
              Facademaling af rækkehuse
            </h2>
            <p className="text-muted-foreground mb-4">
              Facademaling af rækkehuse og villaer er en af de opgaver, vi
              ofte udfører i Hvidovre — med fokus på grundig forberedelse og
              holdbare, vejrbestandige materialer.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi rådgiver også gerne om farvevalg og materialer, der passer
              til husets alder og stil.
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
              Vores ydelser i Hvidovre
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling og udendørs vedligeholdelse",
                "Træbeskyttelse af vinduer, døre og hegn",
                "Indendørs maling af rækkehuse og villaer",
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

      {/* NEARBY AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Malerarbejde i nærheden af Hvidovre
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-frederiksberg"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Frederiksberg
                </Link>
                <Link
                  to="/maler-rodovre"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Rødovre
                </Link>
                <Link
                  to="/maler-brondby"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Brøndby
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
              Ofte stillede spørgsmål — Maler i Hvidovre
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
              Klar til at få malet i Hvidovre?
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
