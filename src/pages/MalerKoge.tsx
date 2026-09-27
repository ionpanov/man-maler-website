import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

const AREAS = ["Køge Bymidte", "Ølby", "Ll. Skensved", "Herfølge"];

const FAQS = [
  {
    q: "Har I erfaring med de historiske bygninger i Køges bykerne?",
    a: "Ja. Køges ældre bykerne har mange historiske bygninger med karakteristiske facader, og vi tager særligt hensyn til det ved forberedelse og valg af materialer.",
  },
  {
    q: "Maler I også nyere boligområder som Ølby?",
    a: "Ja, vi udfører malerarbejde i både den historiske bykerne og de nyere boligområder omkring Køge, som Ølby og Ll. Skensved.",
  },
  {
    q: "Dækker I også Herfølge?",
    a: "Ja, vi dækker hele Køge Kommune, inklusiv Herfølge og de omkringliggende landsbyer.",
  },
  {
    q: "Hvad koster det at få malet et hus i Køge?",
    a: "Prisen afhænger af husets størrelse, alder og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
];

export default function MalerKoge() {
  return (
    <>
      <Helmet>
        <title>Maler i Køge | Facademaling & Renovering – MAN MALER</title>
        <meta
          name="description"
          content="Søger du en maler i Køge? MAN MALER udfører facademaling, indendørs maling og renovering af huse i den historiske bykerne og omegn. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler køge, malerfirma køge, facademaling køge, maler ølby, maler herfølge"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-koge" />

        <meta property="og:title" content="Maler i Køge | MAN MALER" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Køge. Facademaling, indendørs maling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-koge" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler i Køge | MAN MALER" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Køge. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Køge
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til historiske huse og nyere boliger i Køge —
              facademaling, indendørs maling og renovering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Køge Kommune
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
              Malerfirma med erfaring fra Køge
            </h2>
            <p className="text-muted-foreground mb-4">
              Køge er en købstad med en ældre bykerne og nyere boligområder
              udenfor. Som maler i Køge tilpasser vi vores arbejde efter
              begge dele — fra historiske bygninger med bindingsværk og
              gamle facader til moderne rækkehuse og villaer.
            </p>
            <p className="text-muted-foreground mb-4">
              Ved arbejde i den historiske bykerne tager vi særligt hensyn
              til bygningernes karakter og bruger materialer, der passer til
              facadens alder og stil.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Køge Kommune, herunder <strong>Ølby</strong>,{" "}
              <strong>Ll. Skensved</strong> og <strong>Herfølge</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Køge
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
                alt="Facademaling af hus i Køge"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Facademaling af historiske huse
            </h2>
            <p className="text-muted-foreground mb-4">
              Huse i Køges ældre bykerne kræver ofte ekstra omhu ved
              facademaling — korrekt afrensning, reparation af puds og
              træværk, samt materialer, der respekterer bygningens
              oprindelige udtryk.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi rådgiver gerne om farvevalg, der passer til husets alder og
              det omkringliggende gadebillede.
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
              Vores ydelser i Køge
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling af historiske og nyere huse",
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
              Malerarbejde i nærheden af Køge
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-greve"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Greve
                </Link>
                <Link
                  to="/maler-roskilde"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Roskilde
                </Link>
                <Link
                  to="/maler-naestved"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Næstved
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
              Ofte stillede spørgsmål — Maler i Køge
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
              Klar til at få malet i Køge?
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
