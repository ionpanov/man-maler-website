import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import projectImg from "@/assets/projects/proj53.webp";

const NEIGHBORHOODS = [
  "Indre By", "Nørrebro", "Østerbro", "Vesterbro", "Amager",
  "Frederiksberg", "Valby", "Sydhavn", "Nordvest", "Brønshøj",
];

const FAQS = [
  {
    q: "Arbejder I i hele København, inklusiv Indre By?",
    a: "Ja. Vi udfører malerarbejde i alle bydele i København — fra Indre By og Nørrebro til Amager og Frederiksberg. Har du en lejlighed midt i byen, tager vi højde for parkering og adgangsforhold, når vi planlægger opgaven.",
  },
  {
    q: "Hvor lang tid tager det at få malet en lejlighed i København?",
    a: "Det afhænger af lejlighedens størrelse og omfanget af arbejdet — om der f.eks. også skal spartles eller klargøres overflader først. Vi giver altid en tidsplan sammen med tilbuddet, så du ved præcis, hvad du kan forvente.",
  },
  {
    q: "Kan I male, mens jeg bor i lejligheden?",
    a: "I mange tilfælde ja, især ved mindre opgaver som enkelte rum. Ved større renoveringer anbefaler vi ofte at flytte ud af de berørte rum midlertidigt for det bedste resultat. Vi finder altid en løsning, der passer til din situation.",
  },
  {
    q: "Hvad koster det at få malet en lejlighed eller villa i København?",
    a: "Prisen afhænger af størrelse, stand og hvilke overflader der skal behandles. Vi giver et gratis og uforpligtende tilbud, efter vi har set opgaven eller fået beskrevet omfanget — så du kender prisen, før arbejdet går i gang.",
  },
  {
    q: "Udfører I også erhvervsmaling i København?",
    a: "Ja, vi maler kontorer, butikker og erhvervslokaler i hele København og omegn, ofte uden for normal arbejdstid for at undgå at forstyrre driften.",
  },
];

export default function MalerKobenhavn() {
  return (
    <>
      <Helmet>
        <title>Maler i København | Professionelt Malerfirma – MAN MALER</title>
        <meta
          name="description"
          content="Søger du en pålidelig maler i København? MAN MALER udfører indendørs og udendørs maling, renovering og erhvervsmaling i hele København. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler københavn, malerfirma københavn, maler indre by, maler nørrebro, maler østerbro, maler frederiksberg"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-koebenhavn" />

        <meta property="og:title" content="Maler i København | MAN MALER" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i København. Indendørs maling, facademaling, renovering og erhvervsmaling. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-koebenhavn" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler i København | MAN MALER" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i København. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i København
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Dit lokale malerfirma i København — indendørs og udendørs maling,
              renovering og erhvervsmaling til boliger og virksomheder i hele byen.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele København
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
              Malerfirma med kendskab til København
            </h2>
            <p className="text-muted-foreground mb-4">
              København er en by med mange forskellige boligtyper — fra ældre
              lejligheder i Indre By og på Nørrebro med højt til loftet og
              stuklofter, til nyere byggeri på Amager og Frederiksberg. Som
              maler i København møder vi ofte opgaver, der kræver både
              erfaring med ældre overflader og præcision i nyere boliger.
            </p>
            <p className="text-muted-foreground mb-4">
              Vi kender også de praktiske udfordringer ved at arbejde midt i
              byen — begrænset parkering, adgang via opgange og trapper, og
              hensyn til naboer i etageejendomme. Det tager vi højde for, når
              vi planlægger en opgave i København.
            </p>
            <p className="text-muted-foreground">
              Uanset om du bor i <strong>Indre By</strong>,{" "}
              <strong>Nørrebro</strong>, <strong>Østerbro</strong>,{" "}
              <strong>Vesterbro</strong>, <strong>Amager</strong> eller{" "}
              <strong>Frederiksberg</strong>, kan du kontakte os for et gratis
              tilbud på malerarbejde.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi maler i alle bydele i København
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {NEIGHBORHOODS.map((n) => (
                <span
                  key={n}
                  className="px-4 py-2 rounded-full bg-warm-surface text-sm text-foreground border border-border"
                >
                  {n}
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
                src={projectImg}
                alt="Malerarbejde i lejlighed i København"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Malerarbejde i København
            </h2>
            <p className="text-muted-foreground mb-4">
              Indvendig maling af lejlighed i København med maling af vægge,
              lofter og træværk samt spartling og klargøring af overflader —
              en af de opgavetyper, vi ofte udfører for boligejere i byen.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground mb-2">
              "Vi fik udført malerarbejde i vores lejlighed, og resultatet var
              fantastisk. Meget professionelt arbejde, grundigt udført og til
              tiden. Kan varmt anbefales."
            </blockquote>
            <p className="text-sm text-muted-foreground mb-6">— Mette H., København</p>
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
              Vores ydelser i København
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Indendørs maling af lejligheder og huse",
                "Facademaling og udendørs maling",
                "Renovering, spartling og klargøring af overflader",
                "Erhvervsmaling til kontorer og butikker",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/ydelser" className="text-primary font-medium hover:underline">
                Se alle vores malerydelser →
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
              Ofte stillede spørgsmål — Maler i København
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
              Klar til at få malet i København?
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
