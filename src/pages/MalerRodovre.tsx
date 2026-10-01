import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import renovationImg from "@/assets/renovation.webp";

const AREAS = ["Rødovre Centrum", "Islev", "Hendriksholm", "Broparken"];

const KEY_TAKEAWAYS = [
  "Mange huse i Rødovre er fra midten af 1900-tallet og kræver mere forarbejde end nyere byggeri.",
  "Eternitfacader fra før ca. 1988 bør altid vurderes for asbest, før der slibes eller renses.",
  "Gamle pudslag og tidligere malingstyper kan skjule fugt eller skader, der bør udbedres først.",
  "Et grundigt forarbejde er den vigtigste faktor for, hvor længe den nye maling holder.",
];

const RENOVATION_TABLE = [
  {
    p: "Eternitfacade (før ca. 1988)",
    d: "Kan indeholde asbest — må ikke slibes eller renses aggressivt uden forudgående vurdering.",
    h: "Vi vurderer altid pladerne først og følger gældende regler for sikker håndtering.",
  },
  {
    p: "Pudset mursten facade",
    d: "Vejrbestandig facademaling, der passer til den oprindelige puds.",
    h: "Revner og løs puds bør repareres, før der males, for at undgå at fugt trænger ind.",
  },
  {
    p: "Vinduer og træværk fra perioden",
    d: "Slidstærk træmaling med god hæftning til ældre, ofte flere gange tidligere malet træ.",
    h: "Afrensning af gamle malingslag er ofte nødvendigt for et jævnt resultat.",
  },
  {
    p: "Indvendige vægge med ældre puds",
    d: "Maling tilpasset ujævnheder og tidligere reparationer i underlaget.",
    h: "Gamle pudslag kan skjule revner eller fugtspor, der bør vurderes før maling.",
  },
  {
    p: "Kælder",
    d: "Fugtspærrende maling eller behandling, afhængigt af fugtniveau.",
    h: "Særligt relevant i ældre huse, hvor kælderen ofte har naturlig fugt.",
  },
];

const FAQS = [
  {
    q: "Maler I både villaer og rækkehuse i Rødovre?",
    a: "Ja. Rødovre består primært af villakvarterer og rækkehusbebyggelser, og vi udfører både facademaling og indendørs maling tilpasset boligtypen.",
  },
  {
    q: "Kan I hjælpe med renovering, ikke kun maling?",
    a: "Ja, vi udfører også spartling, reparation af overflader og klargøring før maling — særligt relevant ved ældre huse, hvor overfladerne kræver mere forarbejde.",
  },
  {
    q: "Dækker I også Islev og Hendriksholm?",
    a: "Ja, vi dækker hele Rødovre Kommune, inklusiv Islev, Hendriksholm og Broparken.",
  },
  {
    q: "Hvad koster det at få malet et hus i Rødovre?",
    a: "Prisen afhænger af husets størrelse, stand og omfanget af forarbejde. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
  {
    q: "Kan I male eternitfacader fra 1950'erne og 60'erne?",
    a: "Ja, men vi vurderer altid facaden først. Eternitplader fra før ca. 1988 kan indeholde asbest, og her må der ikke slibes eller rengøres aggressivt. Er der tegn på asbest, følger vi de gældende regler for sikker håndtering, eller henviser til en specialist, hvis pladerne skal skiftes.",
  },
  {
    q: "Hvor meget forarbejde kræver et hus fra midten af 1900-tallet?",
    a: "Typisk mere end et nyere hus. Gamle pudslag, tidligere malingstyper og eventuel fugt skal vurderes, før vi anbefaler den rette løsning — det tager vi altid med i tilbuddet.",
  },
];

export default function MalerRodovre() {
  return (
    <>
      <Helmet>
        <title>Maler Rødovre | Malerfirma, indvendig maling & facade</title>
        <meta
          name="description"
          content="Maler i Rødovre til villaer og rækkehuse fra midten af 1900-tallet. Indvendig maling, renovering og facademaling. Gratis og uforpligtende tilbud."
        />
        <meta
          name="keywords"
          content="maler rødovre, malerfirma rødovre, indvendig maling rødovre, facademaling rødovre, maler islev, maler hendriksholm"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-rodovre" />

        <meta property="og:title" content="Maler Rødovre | Malerfirma, indvendig maling & facade" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Rødovre. Indendørs maling, facademaling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-rodovre" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Rødovre | Malerfirma, indvendig maling & facade" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Rødovre. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Rødovre
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til villaer, rækkehuse og erhverv i Rødovre —
              facademaling, indendørs maling og renovering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Rødovre Kommune
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
              Malerfirma med erfaring fra Rødovre
            </h2>
            <p className="text-muted-foreground mb-4">
              Rødovre består primært af villakvarterer og
              rækkehusbebyggelser tæt på København. Som maler i Rødovre
              udfører vi ofte facademaling, træbeskyttelse og udvendig
              vedligeholdelse, ud over almindelig indendørs maling.
            </p>
            <p className="text-muted-foreground mb-4">
              Mange af boligerne i området er fra midten af 1900-tallet, hvor
              overfladerne ofte kræver ekstra klargøring før maling for at
              opnå et holdbart resultat.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Rødovre Kommune, herunder{" "}
              <strong>Islev</strong>, <strong>Hendriksholm</strong> og{" "}
              <strong>Broparken</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Rødovre
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
                alt="Renovering og klargøring af overflader"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Renovering og klargøring
            </h2>
            <p className="text-muted-foreground mb-4">
              Mange af vores opgaver i Rødovre starter med grundig
              klargøring — spartling, reparation af overflader og korrekt
              grundbehandling — inden selve malerarbejdet går i gang.
            </p>
            <p className="text-muted-foreground mb-6">
              Det gælder både ved facademaling og indendørs renovering, så
              resultatet holder i mange år fremover.
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

      {/* ARTICLE — RENOVERING AF HUSE FRA MIDTEN AF 1900-TALLET */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Maling og renovering af Rødovres ældre villaer
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Mange af villaerne og rækkehusene i Rødovre er opført i
                midten af 1900-tallet, og det betyder, at overfladerne ofte
                kræver mere forarbejde end på et nyere hus. Facader kan være
                pudset mursten eller eternitplader, vinduerne er ofte malet
                flere gange gennem årene, og indvendige vægge kan skjule
                ældre pudslag eller tidligere reparationer.
              </p>
              <p>
                Et særligt opmærksomhedspunkt er eternitfacader fra før ca.
                1988, som kan indeholde asbest. Her må der ikke slibes eller
                renses aggressivt, uden at facaden først er vurderet. Vi
                tager altid stilling til dette, inden vi anbefaler en
                løsning, og følger de gældende regler for sikker håndtering,
                eller henviser til en specialist, hvis pladerne skal
                udskiftes.
              </p>
              <p>
                Udover facaden er det ofte kælderen, der kræver en særlig
                vurdering i ældre huse — naturlig fugt er almindeligt, og her
                vælger vi fugtspærrende maling eller en anden behandling,
                afhængigt af fugtniveauet. Et grundigt forarbejde er den
                vigtigste faktor for, om resultatet holder i mange år
                fremover, uanset om opgaven er indvendig eller udvendig.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: maling af det ældre hus
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {RENOVATION_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Flade</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Vigtige egenskaber</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Forarbejde og opmærksomhedspunkter</th>
                  </tr>
                </thead>
                <tbody>
                  {RENOVATION_TABLE.map((row) => (
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
              Sådan planlægger du renoveringen
            </h3>
            <ul className="space-y-2">
              {[
                "Fortæl os husets byggeår, så vi kan vurdere, om facaden kræver særlig opmærksomhed.",
                "Lad os vurdere eternitfacader, før der slibes eller renses.",
                "Nævn eventuel fugt i kælderen, så vi kan anbefale den rette maling.",
                "Afsæt tid til grundigt forarbejde — det er det, der afgør holdbarheden.",
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

      {/* ARTICLE — MAN MALER I RØDOVRE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal villaen eller rækkehuset i Rødovre have renoveret facaden,
              eller trænger stuen og kælderen til indvendig maling? MAN
              MALER er din lokale maler i Rødovre, med erfaring i det
              grundige forarbejde, som husene fra midten af 1900-tallet ofte
              kræver. Vi giver altid et gratis, uforpligtende tilbud, efter
              vi har set opgaven.
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
              MAN MALER: erfaring med Rødovres ældre boligmasse
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Rødovre er et af de ældre forstadsområder tæt på København,
                og det betyder, at mange af vores opgaver her starter med en
                grundig vurdering, før vi giver et tilbud. Facadens
                materiale, husets byggeår og eventuel fugt i kælderen har
                alle betydning for, hvilken løsning vi anbefaler — og for
                hvor meget forarbejde der skal til, før selve malingen går
                i gang.
              </p>
              <p>
                Vi lægger særlig vægt på sikkerhed ved ældre eternitfacader,
                hvor der kan være asbest involveret. Her vurderer vi altid
                facaden grundigt, før vi anbefaler næste skridt, så opgaven
                håndteres korrekt og sikkert for alle parter.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af dit hus i Rødovre-området. Med billeder eller en
                kort beskrivelse kan vi ofte give en indledende vurdering
                hurtigt; ved ældre huse anbefaler vi dog altid en
                besigtigelse, så alle forhold bliver taget med i tilbuddet.
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
              Vores ydelser i Rødovre
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling og udendørs vedligeholdelse",
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
              Malerarbejde i nærheden af Rødovre
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
                  to="/maler-brondby"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Brøndby
                </Link>
                <Link
                  to="/maler-herlev"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Herlev
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
              Ofte stillede spørgsmål — Maler i Rødovre
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
              Klar til at få malet i Rødovre?
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
