import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import interiorImg from "@/assets/interior.webp";

const AREAS = ["Frederiksberg Allé", "Solbjerg", "Flintholm", "Fasanvej"];

const FAQS = [
  {
    q: "Har I erfaring med ældre etageejendomme på Frederiksberg?",
    a: "Ja. Frederiksberg har mange ældre etageejendomme med stuklofter og karakteristiske detaljer, og vi tilpasser vores arbejde efter det — både ved indvendig maling og ved facadearbejde.",
  },
  {
    q: "Kan I male en lejlighed, mens jeg bor der?",
    a: "I mange tilfælde ja, især ved enkelte rum. Ved større opgaver anbefaler vi ofte at flytte ud af de berørte rum midlertidigt. Vi finder altid en løsning, der passer til din situation.",
  },
  {
    q: "Udfører I også facademaling på Frederiksberg?",
    a: "Ja, vi udfører facademaling og udvendig vedligeholdelse på ejendomme på Frederiksberg, herunder klargøring af ældre overflader før maling.",
  },
  {
    q: "Hvad koster det at få malet en lejlighed?",
    a: "Prisen afhænger af lejlighedens størrelse og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven eller fået den beskrevet.",
  },
];

export default function MalerFrederiksberg() {
  return (
    <>
      <Helmet>
        <title>Maler i Frederiksberg | Indendørs & Facademaling – MAN MALER</title>
        <meta
          name="description"
          content="Søger du en maler på Frederiksberg? MAN MALER udfører indendørs maling, facademaling og renovering af lejligheder og ejendomme. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler frederiksberg, malerfirma frederiksberg, facademaling frederiksberg, maler solbjerg, maler flintholm"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-frederiksberg" />

        <meta property="og:title" content="Maler i Frederiksberg | MAN MALER" />
        <meta
          property="og:description"
          content="Professionelt malerfirma på Frederiksberg. Indendørs maling, facademaling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-frederiksberg" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler i Frederiksberg | MAN MALER" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma på Frederiksberg. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Frederiksberg
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til lejligheder og ejendomme på Frederiksberg —
              indendørs maling, facademaling og renovering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Frederiksberg
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
              Malerfirma med kendskab til Frederiksberg
            </h2>
            <p className="text-muted-foreground mb-4">
              Frederiksberg er tæt bebygget og kendetegnet ved mange ældre
              etageejendomme med stuklofter, høje paneler og karakteristiske
              facader. Som maler på Frederiksberg møder vi ofte opgaver, der
              kræver både præcision ved detaljerne og erfaring med ældre
              overflader.
            </p>
            <p className="text-muted-foreground mb-4">
              Vi kender også de praktiske forhold ved at arbejde i tæt
              bebyggede områder — adgang via opgange og trapper, hensyn til
              naboer, og begrænset parkering. Det tager vi højde for, når vi
              planlægger en opgave på Frederiksberg.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Frederiksberg, herunder områder omkring{" "}
              <strong>Frederiksberg Allé</strong>, <strong>Solbjerg</strong>,{" "}
              <strong>Flintholm</strong> og <strong>Fasanvej</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Frederiksberg
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
                alt="Indendørs maling af lejlighed"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Indendørs maling af lejligheder
            </h2>
            <p className="text-muted-foreground mb-4">
              Mange af vores opgaver på Frederiksberg handler om indendørs
              maling af lejligheder — vægge, lofter, træværk og paneler, ofte
              med respekt for ældre bygningsdetaljer som stuklofter og
              gerichter.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi klargør altid overfladerne grundigt før maling, så
              resultatet bliver holdbart og professionelt.
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
              Vores ydelser på Frederiksberg
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Indendørs maling af lejligheder og ejendomme",
                "Facademaling og udvendig vedligeholdelse",
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

      {/* FAQ */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-10 text-center text-card-foreground">
              Ofte stillede spørgsmål — Maler på Frederiksberg
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
              Klar til at få malet på Frederiksberg?
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
