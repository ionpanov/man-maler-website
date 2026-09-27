import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import renovationImg from "@/assets/renovation.webp";

const AREAS = ["Helsingør Bymidte", "Snekkersten", "Espergærde", "Nordre Strandvej"];

const FAQS = [
  {
    q: "Har I erfaring med ældre huse i Helsingørs historiske bykerne?",
    a: "Ja. Helsingør har en historisk bykerne med mange ældre huse, og facademaling her kræver ofte ekstra forberedelse af gamle overflader — det har vi erfaring med.",
  },
  {
    q: "Maler I også villaer langs kysten?",
    a: "Ja, vi udfører facademaling og indendørs maling af villaer i kystnære områder som Snekkersten og Espergærde, med materialer tilpasset det kystnære klima.",
  },
  {
    q: "Dækker I hele Helsingør Kommune?",
    a: "Ja, vi dækker hele Helsingør Kommune, inklusiv Snekkersten, Espergærde og området omkring Nordre Strandvej.",
  },
  {
    q: "Hvad koster det at få malet et hus i Helsingør?",
    a: "Prisen afhænger af husets størrelse, alder og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
];

export default function MalerHelsingor() {
  return (
    <>
      <Helmet>
        <title>Maler i Helsingør | Facademaling & Renovering – MAN MALER</title>
        <meta
          name="description"
          content="Søger du en maler i Helsingør? MAN MALER udfører facademaling, indendørs maling og renovering af huse i bykernen og kystnære villaer. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler helsingør, malerfirma helsingør, facademaling helsingør, maler snekkersten, maler espergærde"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-helsingor" />

        <meta property="og:title" content="Maler i Helsingør | MAN MALER" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Helsingør. Facademaling, indendørs maling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-helsingor" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler i Helsingør | MAN MALER" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Helsingør. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Helsingør
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til historiske huse og kystvillaer i Helsingør —
              facademaling, indendørs maling og renovering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Helsingør Kommune
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
              Malerfirma med erfaring fra Helsingør
            </h2>
            <p className="text-muted-foreground mb-4">
              Helsingør er en kystby med en historisk bykerne og mange
              ældre huse. Som maler i Helsingør møder vi ofte opgaver, der
              kræver grundig forberedelse af gamle overflader, samt villaer
              langs kysten, hvor vind og saltvand slider ekstra på
              facaderne.
            </p>
            <p className="text-muted-foreground mb-4">
              Vi tilpasser altid materialevalget efter husets beliggenhed og
              de forhold, det er udsat for.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Helsingør Kommune, herunder{" "}
              <strong>Snekkersten</strong> og <strong>Espergærde</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Helsingør
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
                alt="Renovering af ældre hus"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Renovering af ældre huse
            </h2>
            <p className="text-muted-foreground mb-4">
              Mange huse i Helsingørs bykerne kræver grundig renovering af
              overfladerne, før de kan males — reparation af puds,
              vinduesrammer og gamle malinglag skal fjernes korrekt.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi tager altid en grundig gennemgang, før vi giver et tilbud,
              så du ved præcis, hvad opgaven indebærer.
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
              Vores ydelser i Helsingør
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling af historiske og kystnære huse",
                "Indendørs maling af villaer og lejligheder",
                "Renovering, spartling og klargøring af overflader",
                "Træbeskyttelse tilpasset kystklimaet",
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
              Ofte stillede spørgsmål — Maler i Helsingør
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
              Klar til at få malet i Helsingør?
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
