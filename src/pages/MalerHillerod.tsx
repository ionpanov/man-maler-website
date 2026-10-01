import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import interiorImg from "@/assets/interior.webp";

const AREAS = ["Hillerød Bymidte", "Ålholm", "Sophienborg", "Favrholm"];

const KEY_TAKEAWAYS = [
  "Ny puds skal typisk afbinde i flere uger til måneder, før facaden kan males.",
  "Materialevalg i et nybygget hus bør være forenelige med byggeriets garantibestemmelser.",
  "Nye gipsvægge og lofter kræver en anden grunder end ældre, tidligere malede overflader.",
  "Et samlet tilbud på hele huset giver ofte den mest effektive planlægning for nybyggeri.",
];

const NEWBUILD_TABLE = [
  {
    p: "Nypudset facade",
    d: "Vejrbestandig facademaling, der først påføres, når pudsen er fuldt afbundet.",
    h: "Afbindingstid afhænger af pudstype — tjek altid med byggeriets anvisninger.",
  },
  {
    p: "Nye indvendige vægge og lofter",
    d: "Grunder tilpasset nyt gips, så den efterfølgende maling hæfter korrekt.",
    h: "Nye overflader kræver typisk en anden forbehandling end ældre, tidligere malede vægge.",
  },
  {
    p: "Nyt træværk, lister og fodpaneler",
    d: "Slidstærk maling med jævn finish på helt nyt, ubehandlet træ.",
    h: "Grundig afdækning og præcision giver det mest professionelle resultat fra start.",
  },
  {
    p: "Køkken og bad i nybygget hus",
    d: "Vaskbar, fugtbestandig maling tilpasset nye overflader.",
    h: "Mindre forarbejde end i ældre huse, da underlaget er nyt og uden tidligere skader.",
  },
  {
    p: "Garage og carport (nybygget)",
    d: "Robust udendørs maling, der matcher hovedhusets farve og stil.",
    h: "Kan med fordel udføres i samme forløb som facademalingen af huset.",
  },
];

const FAQS = [
  {
    q: "Maler I både ældre og nyere boliger i Hillerød?",
    a: "Ja. Hillerød har en blanding af ældre villaer og nyere boligområder som Favrholm og Sophienborg, og vi tilpasser løsningen efter boligens alder og stand.",
  },
  {
    q: "Kan I hjælpe med renovering af en ældre villa?",
    a: "Ja, vi udfører gerne renovering af ældre villaer i Hillerød — spartling, reparation af overflader og korrekt grundbehandling før maling.",
  },
  {
    q: "Dækker I også Ålholm og Favrholm?",
    a: "Ja, vi dækker hele Hillerød Kommune, inklusiv Ålholm, Sophienborg og det nyere byområde Favrholm.",
  },
  {
    q: "Hvad koster det at få malet en bolig i Hillerød?",
    a: "Prisen afhænger af boligens størrelse og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set eller fået beskrevet opgaven.",
  },
  {
    q: "Hvor længe skal en nypudset facade tørre, før den kan males?",
    a: "Det afhænger af pudstypen, men ny puds skal typisk have flere uger til måneder til at afbinde, før den males. Vi vurderer altid facadens stand og rådgiver om det rette tidspunkt.",
  },
  {
    q: "Kan I male et nybygget hus i Favrholm, uden at det går ud over byggegarantien?",
    a: "Ja, vi bruger produkter og metoder, der er forenelige med byggeriets garantibestemmelser. Vi anbefaler altid at tjekke byggegarantien, før der vælges materialer, som afviger fra byggeriets anbefalinger.",
  },
];

export default function MalerHillerod() {
  return (
    <>
      <Helmet>
        <title>Maler Hillerød | Malerfirma, nybyggeri & villaer</title>
        <meta
          name="description"
          content="Maler i Hillerød til nybyggeri i Favrholm og ældre villaer. Indvendig maling, nypudset facade og renovering. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler hillerød, malerfirma hillerød, indvendig maling hillerød, facademaling hillerød, maler favrholm, maler sophienborg"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-hillerod" />

        <meta property="og:title" content="Maler Hillerød | Malerfirma, nybyggeri & villaer" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Hillerød. Indendørs maling, facademaling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-hillerod" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Hillerød | Malerfirma, nybyggeri & villaer" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Hillerød. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Hillerød
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til villaer og nyere boliger i Hillerød —
              indendørs og udendørs maling, renovering og erhvervsmaling.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Hillerød Kommune
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
              Malerfirma med erfaring fra Hillerød
            </h2>
            <p className="text-muted-foreground mb-4">
              Hillerød i Nordsjælland har en blanding af ældre villaer og
              nyere boligområder som Favrholm og Sophienborg. Som maler i
              Hillerød tilpasser vi altid løsningen efter boligens alder,
              stand og de overflader, der skal behandles.
            </p>
            <p className="text-muted-foreground mb-4">
              Vi udfører både malerarbejde til private boliger og
              erhvervsejendomme i og omkring Hillerød.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Hillerød Kommune, herunder{" "}
              <strong>Ålholm</strong>, <strong>Sophienborg</strong> og{" "}
              <strong>Favrholm</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Hillerød
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
                alt="Indendørs maling af villa"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Indendørs maling og renovering
            </h2>
            <p className="text-muted-foreground mb-4">
              Vi udfører indendørs maling og renovering af villaer i
              Hillerød — fra enkelte rum til hele boliger, altid med
              grundig forberedelse af overfladerne.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi rådgiver også gerne om farvevalg og materialer, der passer
              til boligens stil og indretning.
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

      {/* ARTICLE — MALING AF NYBYGGERI I FAVRHOLM */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Maling af nybyggeri i Favrholm og Hillerød
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Hillerød er en by i vækst, og særligt det nye byområde
                Favrholm betyder, at mange boligejere står med et helt nyt
                hus, der for første gang skal males. Det er en anden opgave
                end at male et ældre hus: der skal ikke fjernes gammel
                maling, men til gengæld stiller nye overflader deres egne
                krav til tidspunkt og materialevalg.
              </p>
              <p>
                En nypudset facade skal typisk afbinde i flere uger til
                måneder, afhængigt af pudstypen, før den kan males. Males
                facaden for tidligt, risikerer man, at fugt i pudsen
                beskadiger den nye maling. Vi rådgiver altid om det rette
                tidspunkt, baseret på byggeriets anvisninger og facadens
                stand.
              </p>
              <p>
                Det er også værd at være opmærksom på, at materialevalget i
                et nybygget hus bør være foreneligt med byggeriets
                garantibestemmelser. Vi bruger produkter, der ikke går ud
                over byggegarantien, og anbefaler altid at tjekke dette,
                hvis der ønskes materialer, som afviger fra byggeriets egne
                anbefalinger.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: maling af det nybyggede hus
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {NEWBUILD_TABLE.map((row) => (
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
                  {NEWBUILD_TABLE.map((row) => (
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
              Sådan planlægger du nybyggeriet
            </h3>
            <ul className="space-y-2">
              {[
                "Tjek byggeriets anvisninger for, hvornår facaden tidligst kan males.",
                "Vælg materialer, der er forenelige med byggegarantien.",
                "Brug grunder tilpasset nye gipsvægge, før den endelige farve påføres.",
                "Få et samlet tilbud på hele huset, hvis flere flader skal males første gang.",
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

      {/* ARTICLE — MAN MALER I HILLERØD */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal det nybyggede hus i Favrholm males for første gang, eller
              trænger den ældre villa til renovering? MAN MALER er din
              lokale maler i Hillerød, med erfaring i både nybyggeri og
              ældre boliger. Vi giver altid et gratis, uforpligtende
              tilbud, efter vi har set eller fået beskrevet opgaven.
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
              MAN MALER: fra nybyggeri til ældre villaer
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Hillerøds vækst betyder, at vi løser opgaver, der spænder
                bredt — fra et helt nyt hus i Favrholm, der skal males for
                første gang, til en ældre villa i bymidten eller omkring
                Ålholm og Sophienborg, der trænger til renovering. Vi
                tilpasser altid vores tilgang efter husets alder og stand.
              </p>
              <p>
                Ved nybyggeri rådgiver vi om det rette tidspunkt at male, så
                nye overflader som puds og gips har fået den nødvendige tid
                til at afbinde. Ved ældre huse lægger vi i stedet vægt på
                grundig klargøring, så den nye maling holder i mange år
                fremover.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af din opgave i Hillerød — uanset om det er et
                nybygget hus eller en ældre villa, der trænger til et nyt
                udtryk.
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
              Vores ydelser i Hillerød
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Indendørs maling af villaer og boliger",
                "Facademaling og udendørs vedligeholdelse",
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
              Malerarbejde i nærheden af Hillerød
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-helsingor"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Helsingør
                </Link>
                <Link
                  to="/maler-lyngby"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Lyngby
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
              Ofte stillede spørgsmål — Maler i Hillerød
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
              Klar til at få malet i Hillerød?
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
