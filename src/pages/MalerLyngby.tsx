import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

const AREAS = ["Kongens Lyngby", "Virum", "Sorgenfri", "Lundtofte"];

const KEY_TAKEAWAYS = [
  "Store ejendomme med haver og flere bygninger kræver mere planlægning af adgang, stillads og logistik.",
  "Poolhuse, orangerier og udestuer males ofte som en del af en samlet opgave sammen med hovedhuset.",
  "Erhvervsområdet omkring DTU rummer kontorer og laboratorier med særlige krav til overflader.",
  "God planlægning af adgangsveje gennem haven sparer tid og minimerer risikoen for skader på beplantning.",
];

const ESTATE_TABLE = [
  {
    p: "Facade (stor ejendom)",
    d: "Vejrbestandig facademaling, der kan påføres effektivt på store sammenhængende flader.",
    h: "Stillads og adgang gennem haven bør planlægges, så beplantning og indkørsel ikke beskadiges.",
  },
  {
    p: "Poolhus og orangeri",
    d: "Materialer tilpasset høj luftfugtighed og temperaturudsving i glas- og poolområder.",
    h: "Kan ofte males i samme forløb som hovedhuset for at spare opstilling af stillads.",
  },
  {
    p: "Garage og carport",
    d: "Robust udendørs maling, der matcher hovedhusets farve og stil.",
    h: "Enkel at kombinere med facademaling for et ensartet helhedsindtryk.",
  },
  {
    p: "Kontor og laboratorium (erhverv)",
    d: "Kemikalie- og rengøringsbestandig maling tilpasset laboratoriers og kontorers krav.",
    h: "Planlægges ofte uden for arbejdstid for at undgå at forstyrre forskning eller drift.",
  },
  {
    p: "Indendørs i hovedhuset",
    d: "Høj finish med rolige farver, der understøtter husets arkitektur og størrelse.",
    h: "Grundig afdækning af store rum og møbler er en vigtig del af forarbejdet.",
  },
];

const FAQS = [
  {
    q: "Har I erfaring med større villaer og herskabelige huse i Lyngby?",
    a: "Ja. Kongens Lyngby og omegn har mange store villaer, og vi lægger vægt på præcision og et højt finish-niveau, både ved facademaling og indendørs opgaver.",
  },
  {
    q: "Hvor lang tid tager facademaling af en større villa?",
    a: "Det afhænger af husets størrelse og facadens stand. Vi kommer altid ud og ser opgaven, før vi giver en konkret tidsplan og et tilbud.",
  },
  {
    q: "Dækker I også Virum og Sorgenfri?",
    a: "Ja, vi dækker hele Lyngby-Taarbæk Kommune, inklusiv Virum, Sorgenfri og Lundtofte.",
  },
  {
    q: "Hvad koster det at få malet en villa i Lyngby?",
    a: "Prisen afhænger af husets størrelse, stand og materialevalg. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
  {
    q: "Kan I male poolhuse, orangerier og andre bygninger i haven?",
    a: "Ja, mange af de store ejendomme i Lyngby har poolhuse, orangerier eller udestuer, som vi gerne maler som en del af en samlet opgave eller separat.",
  },
  {
    q: "Udfører I erhvervsmaling til kontorer og laboratorier nær DTU?",
    a: "Ja, vi maler gerne kontorer og laboratorier i erhvervsmiljøet omkring DTU, tilpasset de krav der kan være til kemikaliebestandighed og rengøringsvenlige overflader.",
  },
];

export default function MalerLyngby() {
  return (
    <>
      <Helmet>
        <title>Maler Lyngby | Malerfirma, store ejendomme & erhverv</title>
        <meta
          name="description"
          content="Maler i Kongens Lyngby til store villaer, poolhuse og erhvervslokaler nær DTU. Indvendig maling, facademaling og erhvervsmaling. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler lyngby, malerfirma lyngby, indvendig maling lyngby, facademaling lyngby, maler virum, maler sorgenfri, erhvervsmaling dtu"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-lyngby" />

        <meta property="og:title" content="Maler Lyngby | Malerfirma, store ejendomme & erhverv" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Kongens Lyngby. Facademaling, indendørs maling og renovering af villaer. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-lyngby" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Lyngby | Malerfirma, store ejendomme & erhverv" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Kongens Lyngby. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Lyngby
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til villaer og huse i Kongens Lyngby — facademaling,
              indendørs maling og renovering med præcision.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Lyngby-Taarbæk
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
              Malerfirma med erfaring fra Lyngby
            </h2>
            <p className="text-muted-foreground mb-4">
              Kongens Lyngby i det nordlige Storkøbenhavn har mange store
              villaer og herskabelige huse. Som maler i Lyngby lægger vi
              derfor særlig vægt på præcision, rene linjer og et
              professionelt finish — både ved facademaling og indendørs
              opgaver.
            </p>
            <p className="text-muted-foreground mb-4">
              Vi udfører ofte omfattende renoveringsopgaver, hvor både
              udvendige og indvendige overflader skal klargøres grundigt
              før maling.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Lyngby-Taarbæk Kommune, herunder{" "}
              <strong>Virum</strong>, <strong>Sorgenfri</strong> og{" "}
              <strong>Lundtofte</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Lyngby-Taarbæk
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

      {/* ARTICLE — STORE EJENDOMME OG ERHVERV NÆR DTU */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Maling af store ejendomme og erhverv i Lyngby
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Kongens Lyngby og omegn har mange ejendomme med store haver
                og flere bygninger — hovedhus, garage, og ofte også poolhus
                eller orangeri. Det stiller andre krav til planlægningen end
                et almindeligt rækkehus: adgang gennem haven, placering af
                stillads og beskyttelse af beplantning skal tænkes ind, før
                arbejdet går i gang.
              </p>
              <p>
                Poolhuse og orangerier er ofte udsat for høj luftfugtighed og
                store temperaturudsving, hvilket kræver materialer, der kan
                klare det miljø. Når flere bygninger på samme grund skal
                males, giver det god mening at samle opgaverne i ét forløb,
                så stillads og opstilling kun skal ske én gang.
              </p>
              <p>
                Lyngby er desuden hjemsted for DTU og et stort erhvervsområde
                med kontorer og laboratorier. Her stiller opgaverne andre
                krav end private boliger — ofte skal overflader kunne tåle
                kemikalier og hyppig rengøring, og arbejdet planlægges
                typisk uden for arbejdstid for ikke at forstyrre forskning
                eller daglig drift.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: maling af ejendom og erhverv
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {ESTATE_TABLE.map((row) => (
                <div key={row.p} className="p-4 rounded-xl bg-warm-surface border border-border">
                  <p className="font-semibold text-foreground mb-2">{row.p}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-foreground">Vigtige egenskaber: </span>
                    {row.d}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Planlægning: </span>
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Bygning eller lokale</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Vigtige egenskaber</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Planlægning og opmærksomhedspunkter</th>
                  </tr>
                </thead>
                <tbody>
                  {ESTATE_TABLE.map((row) => (
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
              Sådan planlægger du den store opgave
            </h3>
            <ul className="space-y-2">
              {[
                "Fortæl os, hvor mange bygninger på grunden der skal males, så vi kan give et samlet tilbud.",
                "Afklar adgangsveje gennem haven, så beplantning og indkørsel ikke bliver skadet.",
                "Nævn særlige krav til kemikaliebestandighed, hvis opgaven er et kontor eller laboratorium.",
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

      {/* SERVICE HIGHLIGHT */}
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
              Facademaling med præcision
            </h2>
            <p className="text-muted-foreground mb-4">
              Større villaer i Lyngby-området kræver ofte en mere omfattende
              proces — stillads, grundig afrensning og flere lag maling for
              et holdbart og flot resultat.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi rådgiver gerne om farvevalg og materialer, der passer til
              husets stil og arkitektur.
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

      {/* ARTICLE — MAN MALER I LYNGBY */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal hovedhuset, poolhuset og garagen males i samme forløb,
              eller trænger kontoret nær DTU til nye vægge? MAN MALER er din
              lokale maler i Lyngby, med erfaring i både store private
              ejendomme og det erhvervsliv, der følger med DTU og
              omegnens virksomheder. Vi giver altid et gratis, uforpligtende
              tilbud, efter vi har set opgaven.
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
              MAN MALER: logistik til store ejendomme og erhverv
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Når en ejendom i Lyngby har flere bygninger og en stor have,
                handler opgaven lige så meget om planlægning som om selve
                malingen. Vi vurderer altid adgangsforhold, placering af
                stillads og rækkefølgen af bygninger, før vi giver et tilbud,
                så arbejdet kan udføres effektivt og uden unødige skader på
                have og beplantning.
              </p>
              <p>
                I erhvervsområdet omkring DTU løser vi opgaver, der kræver en
                anden tilgang end private boliger — kontorer og laboratorier
                har ofte specifikke krav til overfladernes modstandsdygtighed,
                og arbejdet skal typisk planlægges uden for almindelig
                arbejdstid for ikke at forstyrre driften.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af din opgave i Lyngby-området — uanset om det er
                en stor ejendom med flere bygninger, eller et erhvervslokale,
                der skal planlægges omhyggeligt.
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
              Vores ydelser i Lyngby
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling af villaer og større huse",
                "Indendørs maling med fokus på finish",
                "Renovering, spartling og klargøring af overflader",
                "Erhvervsmaling til kontorer og institutioner",
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
              Malerarbejde i nærheden af Lyngby
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-gentofte"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Gentofte
                </Link>
                <Link
                  to="/maler-koebenhavn"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i København
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
              Ofte stillede spørgsmål — Maler i Lyngby
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
              Klar til at få malet i Lyngby?
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
