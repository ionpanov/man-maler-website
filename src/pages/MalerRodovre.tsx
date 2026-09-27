import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import renovationImg from "@/assets/renovation.webp";

const AREAS = ["Rødovre Centrum", "Islev", "Hendriksholm", "Broparken"];

const FAQS = [
  {
    q: "Maler I både villaer og rækkehuse i Rødovre?",
    a: "Ja. Rødovre består primært af villakvarterer og rækkehusbebyggelser, og vi udfører både facademaling og indendørs maling tilpasset boligtypen.",
  },
  {
    q: "Kan I hjælpe med renovering, ikke kun maling?",
    a: "Ja, vi udfører også spartling, reparation af overflader og klargøring før maling — særligt relevant ved ældre huse, hvor overfladerne kræver mere forarbejde.",
  },
  {
    q: "Dækker I også Islev og Hendriksholm?",
    a: "Ja, vi dækker hele Rødovre Kommune, inklusiv Islev, Hendriksholm og Broparken.",
  },
  {
    q: "Hvad koster det at få malet et hus i Rødovre?",
    a: "Prisen afhænger af husets størrelse, stand og omfanget af forarbejde. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
];

export default function MalerRodovre() {
  return (
    <>
      <Helmet>
        <title>Maler i Rødovre | Facademaling & Renovering – MAN MALER</title>
        <meta
          name="description"
          content="Søger du en maler i Rødovre? MAN MALER udfører facademaling, indendørs maling og renovering af villaer og rækkehuse. Gratis og uforpligtende tilbud."
        />
        <meta
          name="keywords"
          content="maler rødovre, malerfirma rødovre, facademaling rødovre, maler islev, maler hendriksholm"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-rodovre" />

        <meta property="og:title" content="Maler i Rødovre | MAN MALER" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Rødovre. Facademaling, indendørs maling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-rodovre" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler i Rødovre | MAN MALER" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Rødovre. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Rødovre
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til villaer, rækkehuse og erhverv i Rødovre —
              facademaling, indendørs maling og renovering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Rødovre Kommune
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
              Malerfirma med erfaring fra Rødovre
            </h2>
            <p className="text-muted-foreground mb-4">
              Rødovre består primært af villakvarterer og
              rækkehusbebyggelser tæt på København. Som maler i Rødovre
              udfører vi ofte facademaling, træbeskyttelse og udvendig
              vedligeholdelse, ud over almindelig indendørs maling.
            </p>
            <p className="text-muted-foreground mb-4">
              Mange af boligerne i området er fra midten af 1900-tallet, hvor
              overfladerne ofte kræver ekstra klargøring før maling for at
              opnå et holdbart resultat.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Rødovre Kommune, herunder{" "}
              <strong>Islev</strong>, <strong>Hendriksholm</strong> og{" "}
              <strong>Broparken</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Rødovre
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
                alt="Renovering og klargøring af overflader"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Renovering og klargøring
            </h2>
            <p className="text-muted-foreground mb-4">
              Mange af vores opgaver i Rødovre starter med grundig
              klargøring — spartling, reparation af overflader og korrekt
              grundbehandling — inden selve malerarbejdet går i gang.
            </p>
            <p className="text-muted-foreground mb-6">
              Det gælder både ved facademaling og indendørs renovering, så
              resultatet holder i mange år fremover.
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
              Vores ydelser i Rødovre
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling og udendørs vedligeholdelse",
                "Indendørs maling af villaer og rækkehuse",
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

      {/* NEARBY AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Malerarbejde i nærheden af Rødovre
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-hvidovre"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Hvidovre
                </Link>
                <Link
                  to="/maler-brondby"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Brøndby
                </Link>
                <Link
                  to="/maler-herlev"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Herlev
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
              Ofte stillede spørgsmål — Maler i Rødovre
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
              Klar til at få malet i Rødovre?
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
