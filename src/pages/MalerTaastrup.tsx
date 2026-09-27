import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import interiorImg from "@/assets/interior.webp";

const AREAS = ["Taastrup Torv", "Nykær", "Reerslev", "Sengeløse"];

const FAQS = [
  {
    q: "Maler I både ældre villaer og nyere rækkehuse i Taastrup?",
    a: "Ja. Taastrup på Vestegnen har blandet boligbyggeri, fra ældre villaer til nyere rækkehuse, og vi tilpasser løsningen efter husets alder og stand.",
  },
  {
    q: "Kan I hjælpe med renovering før salg af bolig?",
    a: "Ja, vi udfører gerne maling og mindre renovering i forbindelse med boligsalg, så boligen fremstår i bedst mulig stand.",
  },
  {
    q: "Dækker I også Sengeløse og Reerslev?",
    a: "Ja, vi dækker hele Høje-Taastrup Kommune, inklusiv Sengeløse, Reerslev og Nykær.",
  },
  {
    q: "Hvad koster det at få malet en bolig i Taastrup?",
    a: "Prisen afhænger af boligens størrelse og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set eller fået beskrevet opgaven.",
  },
];

export default function MalerTaastrup() {
  return (
    <>
      <Helmet>
        <title>Maler i Taastrup | Bolig & Erhvervsmaling – MAN MALER</title>
        <meta
          name="description"
          content="Søger du en maler i Taastrup? MAN MALER udfører indendørs maling, facademaling og renovering af villaer og rækkehuse. Gratis og uforpligtende tilbud."
        />
        <meta
          name="keywords"
          content="maler taastrup, malerfirma taastrup, facademaling taastrup, maler sengeløse, maler høje-taastrup"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-taastrup" />

        <meta property="og:title" content="Maler i Taastrup | MAN MALER" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Taastrup. Indendørs maling, facademaling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-taastrup" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler i Taastrup | MAN MALER" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Taastrup. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Taastrup
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til villaer, rækkehuse og erhverv i Taastrup —
              indendørs og udendørs maling, renovering og erhvervsmaling.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Høje-Taastrup Kommune
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
              Malerfirma med erfaring fra Taastrup
            </h2>
            <p className="text-muted-foreground mb-4">
              Taastrup på Vestegnen har blandet boligbyggeri — fra ældre
              villaer i de centrale dele af byen til nyere rækkehuse i
              udkanten. Som maler i Taastrup tilpasser vi altid løsningen
              efter husets alder, stand og de overflader, der skal
              behandles.
            </p>
            <p className="text-muted-foreground mb-4">
              Vi udfører også gerne maling i forbindelse med boligsalg eller
              -køb, hvor et frisk lag maling kan gøre en stor forskel for
              boligens fremtoning.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Høje-Taastrup Kommune, herunder{" "}
              <strong>Sengeløse</strong>, <strong>Reerslev</strong> og{" "}
              <strong>Nykær</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Taastrup
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
                src={interiorImg}
                alt="Indendørs maling af bolig"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Indendørs maling og klargøring
            </h2>
            <p className="text-muted-foreground mb-4">
              Mange af vores opgaver i Taastrup handler om indendørs maling
              af stuer, værelser og fællesarealer — ofte i forbindelse med
              renovering eller klargøring før salg.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi sørger altid for grundig afdækning og forberedelse, så
              arbejdet foregår rent og professionelt.
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
              Vores ydelser i Taastrup
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Indendørs maling af villaer og rækkehuse",
                "Facademaling og udendørs vedligeholdelse",
                "Renovering og klargøring før boligsalg",
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
              Malerarbejde i nærheden af Taastrup
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-ballerup"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Ballerup
                </Link>
                <Link
                  to="/maler-albertslund"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Albertslund
                </Link>
                <Link
                  to="/maler-hedehusene"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Hedehusene
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
              Ofte stillede spørgsmål — Maler i Taastrup
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
              Klar til at få malet i Taastrup?
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
