import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import commercialImg from "@/assets/commercial.webp";

const AREAS = ["Herlev Bygade", "Hjortespring", "Kildegård", "Herlev Hospital-området"];

const FAQS = [
  {
    q: "Udfører I både bolig- og erhvervsmaling i Herlev?",
    a: "Ja. Herlev har en blanding af boligblokke, villakvarterer og erhvervsområder, og vi udfører både indendørs maling for private og erhvervsmaling til virksomheder i kommunen.",
  },
  {
    q: "Kan I male udenfor normal arbejdstid ved erhvervsopgaver?",
    a: "Ja, vi planlægger gerne erhvervsmaling om aftenen eller i weekenden, så det ikke forstyrrer den daglige drift.",
  },
  {
    q: "Dækker I også Hjortespring og Kildegård?",
    a: "Ja, vi dækker hele Herlev Kommune, inklusiv Hjortespring, Kildegård og området omkring Herlev Hospital.",
  },
  {
    q: "Hvad koster malerarbejde i Herlev?",
    a: "Prisen afhænger af opgavens omfang og overfladernes stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set eller fået beskrevet opgaven.",
  },
];

export default function MalerHerlev() {
  return (
    <>
      <Helmet>
        <title>Maler i Herlev | Bolig & Erhvervsmaling – MAN MALER</title>
        <meta
          name="description"
          content="Søger du en maler i Herlev? MAN MALER udfører indendørs maling, facademaling, renovering og erhvervsmaling i hele Herlev Kommune. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler herlev, malerfirma herlev, erhvervsmaling herlev, maler hjortespring, maler kildegård"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-herlev" />

        <meta property="og:title" content="Maler i Herlev | MAN MALER" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Herlev. Indendørs maling, facademaling og erhvervsmaling. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-herlev" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler i Herlev | MAN MALER" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Herlev. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Herlev
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til boliger og virksomheder i Herlev — indendørs og
              udendørs maling, renovering og erhvervsmaling.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Herlev Kommune
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
              Malerfirma med erfaring fra Herlev
            </h2>
            <p className="text-muted-foreground mb-4">
              Herlev har en blanding af boligblokke, villakvarterer og store
              erhvervsområder. Som maler i Herlev udfører vi derfor både
              indendørs maling for private boligejere og erhvervsmaling til
              virksomheder, kontorer og institutioner i området.
            </p>
            <p className="text-muted-foreground mb-4">
              Ved erhvervsopgaver planlægger vi gerne arbejdet uden for
              normal arbejdstid, så det ikke forstyrrer den daglige drift.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Herlev Kommune, herunder{" "}
              <strong>Hjortespring</strong>, <strong>Kildegård</strong> og
              området omkring <strong>Herlev Hospital</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Herlev
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
                src={commercialImg}
                alt="Erhvervsmaling af kontor"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Erhvervsmaling i Herlev
            </h2>
            <p className="text-muted-foreground mb-4">
              Herlev har mange virksomheder og erhvervsejendomme, og
              erhvervsmaling er en fast del af vores arbejde i området — fra
              kontorer og butikker til større institutioner.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi tilpasser altid tidsplanen efter virksomhedens behov, så
              driften kan fortsætte uforstyrret.
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
              Vores ydelser i Herlev
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Erhvervsmaling til kontorer og butikker",
                "Indendørs maling af lejligheder og villaer",
                "Facademaling og udendørs vedligeholdelse",
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
              Malerarbejde i nærheden af Herlev
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
                  to="/maler-glostrup"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Glostrup
                </Link>
                <Link
                  to="/maler-rodovre"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Rødovre
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
              Ofte stillede spørgsmål — Maler i Herlev
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
              Klar til at få malet i Herlev?
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
