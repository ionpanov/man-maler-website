import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

const AREAS = ["Brøndby Strand", "Brøndbyøster", "Brøndbyvester", "Priorparken"];

const KEY_TAKEAWAYS = [
  "Større etagebyggerier og højhuse kræver lift eller stillads og tæt koordinering med boligafdelingen.",
  "Facadeprojekter i almene boligafdelinger besluttes typisk på et afdelingsmøde, før arbejdet kan igangsættes.",
  "Et gennemskueligt tilbud med tydeligt omfang gør det lettere for en afdelingsbestyrelse at træffe beslutning.",
  "Erhvervsområderne i Brøndby stiller andre krav end boliger, især til planlægning omkring driftstider.",
];

const BLOCK_TABLE = [
  {
    p: "Facade (etagebyggeri/højhus)",
    d: "Vejrbestandig facademaling, der kan påføres effektivt på store, sammenhængende flader.",
    h: "Kræver lift eller stillads samt grundig afrensning af den eksisterende facade.",
  },
  {
    p: "Altaner og altangange",
    d: "Slidstærk maling, der tåler vejr, trafik og daglig brug.",
    h: "Afgrænsning mellem fælles- og privatareal bør afklares med boligafdelingen.",
  },
  {
    p: "Opgange og trapper",
    d: "Robust, rengøringsvenlig maling, der kan modstå høj trafik.",
    h: "Planlægges ofte i etaper, så beboerne generes mindst muligt under arbejdet.",
  },
  {
    p: "Rækkehus og villa (privat)",
    d: "Vejrbestandig facademaling tilpasset husets materiale og stil.",
    h: "Enklere proces end etagebyggeri, men stadig behov for grundig klargøring.",
  },
  {
    p: "Erhvervslokale og lager",
    d: "Robust, hurtigtørrende maling tilpasset drift og trafik.",
    h: "Planlægges ofte uden for åbningstid for at undgå at forstyrre driften.",
  },
];

const FAQS = [
  {
    q: "Maler I både villaer, rækkehuse og erhvervslokaler i Brøndby?",
    a: "Ja. Brøndby har en kombination af rækkehuse, villaer og erhvervsområder, og vi løser opgaver fra facademaling af boliger til kontormaling for virksomheder.",
  },
  {
    q: "Kan I hjælpe med erhvervsmaling til virksomheder tæt på erhvervsområderne?",
    a: "Ja, vi udfører erhvervsmaling til kontorer, lagerbygninger og butikker i Brøndbys erhvervsområder, og planlægger gerne arbejdet omkring virksomhedens åbningstider.",
  },
  {
    q: "Dækker I også Brøndby Strand og Priorparken?",
    a: "Ja, vi dækker hele Brøndby Kommune, inklusiv Brøndby Strand, Brøndbyøster, Brøndbyvester og Priorparken.",
  },
  {
    q: "Hvad koster det at få malet et rækkehus i Brøndby?",
    a: "Prisen afhænger af husets størrelse og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
  {
    q: "Kan I male facader på større etagebyggerier, f.eks. i Brøndby Strand?",
    a: "Ja, vi udfører facademaling på etagebyggerier og højhuse, herunder opgange, altangange og facader. Den slags opgaver kræver typisk lift eller stillads, og vi planlægger altid i samarbejde med boligafdelingen.",
  },
  {
    q: "Hvordan foregår en maleropgave, når den skal godkendes af en boligafdeling?",
    a: "Større facadeprojekter i almene boligafdelinger besluttes typisk på et afdelingsmøde. Vi hjælper gerne med at udarbejde et konkret og gennemskueligt tilbud, som afdelingsbestyrelsen kan bruge i beslutningsprocessen.",
  },
];

export default function MalerBrondby() {
  return (
    <>
      <Helmet>
        <title>Maler Brøndby | Malerfirma, etagebyggeri & erhverv</title>
        <meta
          name="description"
          content="Maler i Brøndby til etagebyggeri, rækkehuse og erhverv. Facademaling af højhuse, indvendig maling og erhvervsmaling. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler brøndby, malerfirma brøndby, erhvervsmaling brøndby, maler brøndby strand, facademaling etagebyggeri"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-brondby" />

        <meta property="og:title" content="Maler Brøndby | Malerfirma, etagebyggeri & erhverv" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Brøndby. Facademaling, indendørs maling og erhvervsmaling. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-brondby" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Brøndby | Malerfirma, etagebyggeri & erhverv" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Brøndby. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Brøndby
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til rækkehuse, villaer og erhverv i Brøndby —
              facademaling, indendørs maling og erhvervsmaling.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Brøndby Kommune
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
              Malerfirma med erfaring fra Brøndby
            </h2>
            <p className="text-muted-foreground mb-4">
              Brøndby har en kombination af rækkehuse, villaer og større
              erhvervsområder. Som maler i Brøndby udfører vi derfor både
              boligmaling for private og erhvervsmaling til virksomheder,
              lagerbygninger og kontorer.
            </p>
            <p className="text-muted-foreground mb-4">
              Ved erhvervsopgaver planlægger vi arbejdet, så det passer ind i
              virksomhedens hverdag og forstyrrer driften mindst muligt.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Brøndby Kommune, herunder{" "}
              <strong>Brøndby Strand</strong>, <strong>Brøndbyøster</strong>{" "}
              og <strong>Brøndbyvester</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Brøndby
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

      {/* ARTICLE — ETAGEBYGGERI OG BOLIGAFDELINGER */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Facademaling af etagebyggeri i Brøndby Strand og omegn
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Brøndby Strand er kendt for sine store etagebyggerier og
                højhuse, og det stiller andre krav til malerarbejdet end et
                almindeligt rækkehus. Facader på denne skala kræver typisk
                lift eller stillads, en grundig plan for afrensning af den
                eksisterende overflade, og en proces, der tager hensyn til
                de mange beboere, der bor i bygningen under arbejdet.
              </p>
              <p>
                I almene boligafdelinger er facademaling sjældent en
                beslutning, der tages af den enkelte beboer. Større
                facadeprojekter besluttes typisk på et afdelingsmøde, hvor
                beboerne stemmer om projektet, ofte på baggrund af et
                konkret og gennemskueligt tilbud. Vi udarbejder gerne
                materiale, som en afdelingsbestyrelse kan bruge i den
                proces, så beslutningsgrundlaget er klart.
              </p>
              <p>
                Ud over selve facaden handler mange opgaver også om altaner,
                altangange, opgange og trapper — flader, der er udsat for
                høj trafik og slid, og som derfor kræver robuste,
                rengøringsvenlige materialer. Arbejdet planlægges ofte i
                etaper, så beboerne generes mindst muligt undervejs.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: maling af etagebyggeri og boliger
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {BLOCK_TABLE.map((row) => (
                <div key={row.p} className="p-4 rounded-xl bg-warm-surface border border-border">
                  <p className="font-semibold text-foreground mb-2">{row.p}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-foreground">Vigtige egenskaber: </span>
                    {row.d}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Forarbejde: </span>
                    {row.h}
                  </p>
                </div>
              ))}
            </div>

            {/* Tablet/desktop: full table, no scroll needed */}
            <div className="hidden md:block mb-10">
              <table className="w-full text-sm border-collapse table-fixed">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Flade eller bygningsdel</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Vigtige egenskaber</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Forarbejde og opmærksomhedspunkter</th>
                  </tr>
                </thead>
                <tbody>
                  {BLOCK_TABLE.map((row) => (
                    <tr key={row.p} className="border-b border-border align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">{row.p}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.d}</td>
                      <td className="py-3 text-muted-foreground">{row.h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Sådan planlægger du facadeprojektet
            </h3>
            <ul className="space-y-2">
              {[
                "Få et konkret tilbud, afdelingsbestyrelsen kan bruge på et afdelingsmøde.",
                "Afklar adgang til lift eller stillads, før arbejdet planlægges.",
                "Beslut, om altaner og altangange skal indgå i samme projekt som facaden.",
                "Planlæg arbejdet i etaper, så beboerne generes mindst muligt.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
              Facademaling og erhvervsmaling
            </h2>
            <p className="text-muted-foreground mb-4">
              Vi udfører både facademaling af boliger og erhvervsmaling til
              virksomheder i Brøndby — to opgavetyper, der ofte går hånd i
              hånd i et område med både boliger og erhverv tæt på hinanden.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi giver altid et konkret tilbud, tilpasset opgavens omfang og
              tidsplan.
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

      {/* ARTICLE — MAN MALER I BRØNDBY */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal boligafdelingens facade males, eller trænger kontoret i
              et af Brøndbys erhvervsområder til et nyt lag? MAN MALER er
              din lokale maler i Brøndby, med erfaring i både store
              facadeprojekter på etagebyggeri og de praktiske forhold, der
              følger med erhvervsmaling. Vi giver altid et gratis,
              uforpligtende tilbud, efter vi har set opgaven.
            </p>

            <div className="p-6 rounded-xl bg-warm-surface border border-border mb-10">
              <h4 className="font-display font-semibold mb-3 text-foreground">
                ⚡ Kort opsummeret
              </h4>
              <ul className="space-y-2">
                {KEY_TAKEAWAYS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-card-foreground">
              MAN MALER: fra boligafdelinger til erhvervsområder
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Brøndby har en bred sammensætning af boligtyper og
                erhvervsområder, og det afspejles i de opgaver, vi løser
                her — fra store facadeprojekter i almene boligafdelinger til
                mindre, private rækkehuse og erhvervsmaling i kontorer og
                lagerbygninger. Vi tilpasser altid vores tilgang efter
                opgavens skala og de beslutningsprocesser, der er involveret.
              </p>
              <p>
                Ved større projekter i boligafdelinger lægger vi vægt på at
                levere et tilbud, der er let at forstå og bruge i en
                beslutningsproces, uanset om det skal godkendes af en
                bestyrelse eller besluttes på et afdelingsmøde. Ved
                erhvervsopgaver planlægger vi altid arbejdet, så det passer
                ind i virksomhedens drift.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af din opgave i Brøndby — uanset om det er et
                stort facadeprojekt, et rækkehus eller en erhvervsopgave.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES RECAP */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-foreground text-center">
              Vores ydelser i Brøndby
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling og udendørs vedligeholdelse",
                "Indendørs maling af rækkehuse og villaer",
                "Erhvervsmaling til kontorer og lagerbygninger",
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
              Malerarbejde i nærheden af Brøndby
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
                  to="/maler-rodovre"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Rødovre
                </Link>
                <Link
                  to="/maler-glostrup"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Glostrup
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
              Ofte stillede spørgsmål — Maler i Brøndby
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
              Klar til at få malet i Brøndby?
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
