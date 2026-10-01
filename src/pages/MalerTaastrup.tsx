import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import interiorImg from "@/assets/interior.webp";

const AREAS = ["Taastrup Torv", "Nykær", "Reerslev", "Sengeløse"];

const KEY_TAKEAWAYS = [
  "Entré, stue, køkken og facade er de flader, der betyder mest for førstehåndsindtrykket ved boligsalg.",
  "Neutrale, lyse farver gør det typisk lettere for en potentiel køber at se sig selv i boligen.",
  "Erhvervslokaler i Høje-Taastrup erhvervsområde males ofte uden for normal åbningstid for at undgå driftsforstyrrelser.",
  "Et samlet tilbud på flere rum eller hele boligen giver ofte den mest effektive planlægning før en fremvisning.",
];

const SALE_PREP_TABLE = [
  {
    p: "Entré og forstue",
    d: "Rent, indbydende udtryk, der sætter tonen for resten af boligen.",
    h: "Mindre ridser og skræmmer ses tydeligt her — ofte det første, en køber lægger mærke til.",
  },
  {
    p: "Stue og opholdsrum",
    d: "Neutrale, lyse farver der gør rummet lettere at indrette sig i for en ny ejer.",
    h: "Udbedring af huller efter billeder og møbler bør indgå i forarbejdet.",
  },
  {
    p: "Køkken",
    d: "Ren, vaskbar overflade uden fedtpletter eller misfarvninger.",
    h: "Et af de rum, der vægtes højest ved fremvisninger — slidte vægge skiller sig hurtigt ud.",
  },
  {
    p: "Badeværelse",
    d: "Fugtbestandig maling uden skimmelpletter eller afskalning.",
    h: "Fugtskader bør udbedres, før der males, ellers kommer problemet hurtigt tilbage.",
  },
  {
    p: "Facade (villa/rækkehus)",
    d: "Vejrbestandig facademaling, der giver et velholdt førstehåndsindtryk udefra.",
    h: "Afrensning af skimmel, alger og løs maling er ofte nødvendigt før ny behandling.",
  },
  {
    p: "Erhvervslokaler og lager",
    d: "Robust, hurtigtørrende maling tilpasset drift, trafik og eventuel brandsikring.",
    h: "Planlægges ofte uden for åbningstid for at undgå at forstyrre den daglige drift.",
  },
];

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
  {
    q: "Hvilke rum betyder mest at male, før boligen vises frem?",
    a: "Entré, stue og køkken er de rum, en køber typisk lægger mest mærke til. Facaden har også stor betydning for førstehåndsindtrykket, hvis du sælger en villa eller et rækkehus.",
  },
  {
    q: "Udfører I erhvervsmaling i Høje-Taastrup erhvervsområde?",
    a: "Ja, vi maler gerne kontorer, showrooms og lagerlokaler i erhvervsområderne omkring Taastrup, tilpasset virksomhedens åbningstider og drift.",
  },
];

export default function MalerTaastrup() {
  return (
    <>
      <Helmet>
        <title>Maler Taastrup | Malerfirma, indvendig maling & facade</title>
        <meta
          name="description"
          content="Maler i Taastrup til villaer, rækkehuse og erhverv. Indvendig maling, klargøring før boligsalg og facademaling. Gratis og uforpligtende tilbud."
        />
        <meta
          name="keywords"
          content="maler taastrup, malerfirma taastrup, indvendig maling taastrup, facademaling taastrup, maler sengeløse, maler høje-taastrup"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-taastrup" />

        <meta property="og:title" content="Maler Taastrup | Malerfirma, indvendig maling & facade" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Taastrup. Indendørs maling, facademaling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-taastrup" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Taastrup | Malerfirma, indvendig maling & facade" />
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

      {/* ARTICLE — KLARGØRING FØR BOLIGSALG OG ERHVERV */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Maling før boligsalg og i erhvervslokaler i Taastrup
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Taastrup og Høje-Taastrup Kommune har en bred vifte af
                opgaver — fra villaer og rækkehuse, der skal klargøres før et
                boligsalg, til kontorer, showrooms og lagerlokaler i
                kommunens store erhvervsområder. Begge dele kræver en maler,
                der forstår, hvad opgaven reelt handler om: ikke blot at
                påføre maling, men at skabe det rette indtryk, uanset om det
                er for en køber eller en kunde.
              </p>
              <p>
                Når en bolig skal sælges, er det ofte entré, stue, køkken og
                facade, der betyder mest for førstehåndsindtrykket. Neutrale,
                lyse farver gør det typisk lettere for en potentiel køber at
                forestille sig boligen som sin egen, og en nymalet facade kan
                løfte hele ejendommens udtryk, allerede inden man går
                indenfor. Vi rådgiver gerne om, hvilke rum der giver størst
                effekt for pengene, hvis budgettet er begrænset.
              </p>
              <p>
                I erhvervsområderne omkring Taastrup udfører vi malerarbejde
                i kontorer, showrooms og lagerlokaler — ofte planlagt uden
                for normal åbningstid, så den daglige drift ikke bliver
                forstyrret. Her vælger vi robuste, hurtigtørrende produkter,
                der kan tåle både trafik og den brug, lokalerne er udsat for.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: maling før salg og i erhvervslokaler
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {SALE_PREP_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Rum eller lokale</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Vigtige egenskaber</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Forarbejde og opmærksomhedspunkter</th>
                  </tr>
                </thead>
                <tbody>
                  {SALE_PREP_TABLE.map((row) => (
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
              Sådan prioriterer du opgaven
            </h3>
            <ul className="space-y-2">
              {[
                "Fortæl os, om boligen skal males før salg, så vi kan rådgive om prioritering.",
                "Vælg neutrale, lyse farver i stue og opholdsrum for bredest mulig appel.",
                "Udbedre fugtskader i badeværelset, før der males, så problemet ikke vender tilbage.",
                "Aftal tidspunkt for erhvervsopgaver, så driften forstyrres mindst muligt.",
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

      {/* ARTICLE — MAN MALER I TAASTRUP */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal boligen gøres klar til salg, eller trænger kontoret eller
              lagerlokalet i Høje-Taastrup erhvervsområde til et nyt lag
              maling? MAN MALER er din lokale maler i Taastrup, med erfaring
              i både private boliger og erhvervslokaler. Vi giver altid et
              gratis, uforpligtende tilbud, efter vi har set eller fået
              beskrevet opgaven.
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
              MAN MALER: fra boligklargøring til erhvervslokaler
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Høje-Taastrup Kommune er kendt for sin brede sammensætning af
                boliger og virksomheder — fra ældre villaer i den centrale
                del af Taastrup til et af hovedstadsområdets største
                erhvervsområder. Vi tilpasser altid vores tilgang efter
                opgavens karakter: en bolig, der skal sælges, kræver en
                anden prioritering end et kontor, der skal males uden for
                åbningstid.
              </p>
              <p>
                Ved boligklargøring rådgiver vi om, hvilke rum der giver mest
                værdi at male, hvis budgettet er begrænset, og hvilke farver
                der appellerer bredest til potentielle købere. Ved
                erhvervsopgaver lægger vi vægt på planlægning, der minimerer
                driftsforstyrrelser, samt materialer, der kan tåle den
                daglige brug af lokalerne.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af din opgave i Taastrup-området — uanset om det
                er en bolig, der skal klargøres til salg, eller et
                erhvervslokale, der trænger til vedligeholdelse.
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
