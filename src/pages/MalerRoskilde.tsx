import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

const AREAS = [
  "Roskilde by", "Viby Sjælland", "Vindinge", "Svogerslev",
  "Himmelev", "Gundsømagle", "Trekroner", "Jyllinge",
];

const FAQS = [
  {
    q: "Maler I både villaer og rækkehuse i Roskilde?",
    a: "Ja. Roskilde-området har mange villaer, rækkehuse og ældre huse, og det er en stor del af vores opgaver her — fra facademaling og træbeskyttelse til indendørs renovering.",
  },
  {
    q: "Hvor lang tid tager det at male en facade?",
    a: "Det afhænger af husets størrelse, stand og hvor meget forberedelse der kræves (f.eks. afrensning eller reparation af puds/træværk før maling). Vi kommer altid ud og ser opgaven, før vi giver en tidsplan og et tilbud.",
  },
  {
    q: "Dækker I også Vindinge, Viby og Jyllinge?",
    a: "Ja, vi dækker hele Roskilde Kommune og de nærliggende områder — inklusiv Viby Sjælland, Vindinge, Svogerslev, Himmelev og Jyllinge.",
  },
  {
    q: "Hvad koster det at få malet en villa i Roskilde?",
    a: "Prisen afhænger af husets størrelse, overfladernes stand og omfanget af forarbejde. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
  {
    q: "Kan I hjælpe med både udendørs og indendørs opgaver samtidig?",
    a: "Ja, mange af vores kunder i Roskilde-området får løst flere opgaver ad gangen — for eksempel facademaling udenfor og renovering af enkelte rum indenfor. Vi planlægger gerne det hele i én sammenhængende proces.",
  },
];

export default function MalerRoskilde() {
  return (
    <>
      <Helmet>
        <title>Maler i Roskilde | Facademaling & Renovering – MAN MALER</title>
        <meta
          name="description"
          content="Søger du en maler i Roskilde? MAN MALER udfører facademaling, indendørs maling og renovering af villaer og huse i hele Roskilde-området. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler roskilde, malerfirma roskilde, facademaling roskilde, maler viby sjælland, maler vindinge"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-roskilde" />

        <meta property="og:title" content="Maler i Roskilde | MAN MALER" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Roskilde. Facademaling, indendørs maling, renovering og erhvervsmaling. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-roskilde" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler i Roskilde | MAN MALER" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Roskilde. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Roskilde
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til villaer, rækkehuse og erhverv i Roskilde og omegn —
              facademaling, indendørs maling og renovering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Roskilde-området
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
              Malerfirma med erfaring fra Roskilde-området
            </h2>
            <p className="text-muted-foreground mb-4">
              Roskilde og omegn er kendetegnet ved mange villaer, rækkehuse og
              fritliggende huse — ofte med større facadearealer, træværk og
              haver end man ser i lejlighedsbyggeri. Som maler i Roskilde
              møder vi derfor ofte opgaver med facademaling, træbeskyttelse og
              udvendig vedligeholdelse, ud over almindelig indendørs maling.
            </p>
            <p className="text-muted-foreground mb-4">
              Mange af husene i og omkring Roskilde er ældre ejendomme, hvor
              overfladerne kræver grundig klargøring før maling — afrensning,
              reparation af puds eller træværk, og korrekt grundbehandling, så
              resultatet holder i mange år.
            </p>
            <p className="text-muted-foreground">
              Vi dækker <strong>Roskilde by</strong> samt de omkringliggende
              områder som <strong>Viby Sjælland</strong>,{" "}
              <strong>Vindinge</strong>, <strong>Svogerslev</strong> og{" "}
              <strong>Jyllinge</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Roskilde-området
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

      {/* CASE HIGHLIGHT */}
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
              Facademaling i Roskilde
            </h2>
            <p className="text-muted-foreground mb-4">
              Facademaling af villaer er en af de opgaver, vi ofte udfører for
              boligejere i Roskilde-området — med fokus på grundig
              forberedelse af overfladerne og holdbare, vejrbestandige
              materialer.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground mb-2">
              "Vi fik malet hele facaden på vores villa, og resultatet er
              virkelig flot. Arbejdet blev udført professionelt, og
              kommunikationen var nem hele vejen igennem. Kan varmt
              anbefales."
            </blockquote>
            <p className="text-sm text-muted-foreground mb-6">— Lars P., Roskilde</p>
            <Link
              to="/referencer"
              className="text-primary font-medium hover:underline"
            >
              Se flere af vores projekter →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES RECAP */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-foreground text-center">
              Vores ydelser i Roskilde
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling og udendørs vedligeholdelse",
                "Træbeskyttelse af vinduer, døre og hegn",
                "Indendørs maling af villaer og rækkehuse",
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
              <Link to="/maler-koebenhavn" className="text-sm text-muted-foreground hover:underline">
                Bor du i København? Se vores side om maler i København →
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
              Ofte stillede spørgsmål — Maler i Roskilde
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
              Klar til at få malet i Roskilde?
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
