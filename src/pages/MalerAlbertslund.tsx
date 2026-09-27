import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import renovationImg from "@/assets/renovation.webp";

const AREAS = ["Albertslund Nord", "Albertslund Syd", "Herstedøster", "Hersted Industripark"];

const FAQS = [
  {
    q: "Har I erfaring med det murstensbyggeri, Albertslund er kendt for?",
    a: "Ja. Albertslund har mange rækkehuse og murstensbebyggelser fra 1960'erne og 70'erne, og vi har erfaring med den type facader — herunder afrensning og reparation af puds og murværk før maling.",
  },
  {
    q: "Kan I hjælpe med facaderenovering af ældre rækkehuse?",
    a: "Ja, facaderenovering er en fast del af vores arbejde i Albertslund. Vi klargør overfladerne grundigt, så det nye malerarbejde holder i mange år.",
  },
  {
    q: "Dækker I også Hersted Industripark?",
    a: "Ja, vi udfører både erhvervsmaling i Hersted Industripark og boligmaling i de omkringliggende kvarterer.",
  },
  {
    q: "Hvad koster facaderenovering i Albertslund?",
    a: "Prisen afhænger af facadens stand og omfanget af forarbejde. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
];

export default function MalerAlbertslund() {
  return (
    <>
      <Helmet>
        <title>Maler i Albertslund | Facaderenovering – MAN MALER</title>
        <meta
          name="description"
          content="Søger du en maler i Albertslund? MAN MALER udfører facademaling, facaderenovering og indendørs maling af rækkehuse og erhverv. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler albertslund, malerfirma albertslund, facaderenovering albertslund, maler herstedøster"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-albertslund" />

        <meta property="og:title" content="Maler i Albertslund | MAN MALER" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Albertslund. Facademaling, facaderenovering og indendørs maling. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-albertslund" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler i Albertslund | MAN MALER" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Albertslund. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Albertslund
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til rækkehuse, erhverv og facaderenovering i
              Albertslund — med erfaring i murstens- og betonbyggeri.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Albertslund Kommune
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
              Malerfirma med erfaring fra Albertslund
            </h2>
            <p className="text-muted-foreground mb-4">
              Albertslund er kendt for sit karakteristiske rækkehus- og
              murstensbyggeri fra 1960'erne og 70'erne. Som maler i
              Albertslund arbejder vi ofte med facaderenovering og
              træbeskyttelse på ældre bebyggelser, hvor overfladerne kræver
              grundig klargøring før maling.
            </p>
            <p className="text-muted-foreground mb-4">
              Vi udfører også erhvervsmaling til de mange virksomheder i og
              omkring Hersted Industripark.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Albertslund Kommune, herunder{" "}
              <strong>Albertslund Nord</strong>,{" "}
              <strong>Albertslund Syd</strong> og{" "}
              <strong>Herstedøster</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Albertslund
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
                alt="Facaderenovering af rækkehus"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Facaderenovering i Albertslund
            </h2>
            <p className="text-muted-foreground mb-4">
              Mange af rækkehusene i Albertslund har nu 50-60 år på bagen, og
              facaderne trænger ofte til grundig renovering før de kan
              males — reparation af murværk, fuger og træværk.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi tager altid en grundig gennemgang af facaden, før vi giver
              et tilbud, så du ved præcis, hvad opgaven indebærer.
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
              Vores ydelser i Albertslund
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facaderenovering og facademaling",
                "Træbeskyttelse af vinduer og døre",
                "Indendørs maling af rækkehuse",
                "Erhvervsmaling til virksomheder",
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
              Malerarbejde i nærheden af Albertslund
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-taastrup"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Taastrup
                </Link>
                <Link
                  to="/maler-glostrup"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Glostrup
                </Link>
                <Link
                  to="/maler-ishoj"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Ishøj
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
              Ofte stillede spørgsmål — Maler i Albertslund
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
              Klar til at få malet i Albertslund?
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
