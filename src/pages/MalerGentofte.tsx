import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import renovationImg from "@/assets/renovation.webp";

const AREAS = ["Hellerup", "Charlottenlund", "Ordrup", "Vangede"];

const KEY_TAKEAWAYS = [
  "Gentoftes store villaer har ofte mange detaljer — lister, paneler og stuk — der kræver præcision frem for hurtige løsninger.",
  "Dekorative teknikker som kalkmaling og strukturmaling kan fremhæve en villas arkitektoniske stil.",
  "Mange villaer er bevaringsværdige, hvilket kan betyde retningslinjer for facadefarver og materialer.",
  "Kvalitetsmaterialer og god tid til hvert lag er afgørende for et resultat, der holder i mange år.",
];

const FINISH_TABLE = [
  {
    p: "Lister, paneler og gerichter",
    d: "Præcisionsarbejde med skarpe kanter og jævne overgange mellem flader og farver.",
    h: "Kræver grundig afdækning og tålmodighed — det er her, det professionelle resultat ses tydeligst.",
  },
  {
    p: "Stuk og klassiske detaljer",
    d: "Forsigtig maling, der bevarer detaljernes skarphed uden at fylde profilerne.",
    h: "Ældre stuk kan være skrøbelig og bør behandles varsomt under hele processen.",
  },
  {
    p: "Facade (bevaringsværdig villa)",
    d: "Materialer og farver, der respekterer villaens oprindelige arkitektoniske stil.",
    h: "Tjek eventuelle kommunale retningslinjer for farvevalg, før arbejdet igangsættes.",
  },
  {
    p: "Dekorative vægge (kalkmaling m.m.)",
    d: "Levende, naturlig overflade med dybde, der adskiller sig fra almindelig vægmaling.",
    h: "Kræver erfaring med teknikken, da resultatet er svært at rette, når det først er påført.",
  },
  {
    p: "Udvendigt træværk og vinduer",
    d: "Slidstærk, vejrbestandig træmaling, der matcher husets høje finish-niveau.",
    h: "Grundig afrensning og flere tynde lag giver det mest holdbare og pæne resultat.",
  },
];

const FAQS = [
  {
    q: "Arbejder I med de store villaer, Gentofte er kendt for?",
    a: "Ja. Gentofte har mange store, velholdte villaer, og vi lægger vægt på et højt finish-niveau og præcision i alt vores arbejde her.",
  },
  {
    q: "Kan I hjælpe med totalrenovering af ældre villaer?",
    a: "Ja, vi udfører gerne omfattende renoveringsopgaver, hvor både facade og indendørs overflader klargøres og males i én sammenhængende proces.",
  },
  {
    q: "Dækker I også Hellerup og Charlottenlund?",
    a: "Ja, vi dækker hele Gentofte Kommune, inklusiv Hellerup, Charlottenlund, Ordrup og Vangede.",
  },
  {
    q: "Hvad koster det at få malet en villa i Gentofte?",
    a: "Prisen afhænger af husets størrelse, stand og materialevalg. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
  {
    q: "Tilbyder I dekorative malerteknikker som kalkmaling?",
    a: "Ja, vi udfører gerne kalkmaling, strukturmaling og andre dekorative teknikker, der passer til villaens arkitektur og det ønskede udtryk.",
  },
  {
    q: "Er der særlige hensyn ved bevaringsværdige villaer?",
    a: "Mange villaer i Gentofte er bevaringsværdige, og her kan der være retningslinjer for facadefarver og materialer. Vi hjælper gerne med at afklare dette, før vi anbefaler en løsning.",
  },
];

export default function MalerGentofte() {
  return (
    <>
      <Helmet>
        <title>Maler Gentofte | Malerfirma, villamaling & høj finish</title>
        <meta
          name="description"
          content="Maler i Gentofte til store villaer. Indvendig maling med høj finish, dekorative teknikker og facademaling af bevaringsværdige huse. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler gentofte, malerfirma gentofte, indvendig maling gentofte, facademaling gentofte, maler hellerup, maler charlottenlund"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-gentofte" />

        <meta property="og:title" content="Maler Gentofte | Malerfirma, villamaling & høj finish" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Gentofte. Facademaling, indendørs maling og renovering af villaer. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-gentofte" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Gentofte | Malerfirma, villamaling & høj finish" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Gentofte. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Gentofte
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til villaer i Gentofte — facademaling, indendørs
              maling og renovering med fokus på præcision og finish.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Gentofte Kommune
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
              Malerfirma med erfaring fra Gentofte
            </h2>
            <p className="text-muted-foreground mb-4">
              Gentofte er kendt for sine store villaer og velholdte
              boligområder. Som maler i Gentofte lægger vi vægt på
              præcision og et højt finish-niveau i alt, hvad vi laver — fra
              facademaling til indendørs opgaver.
            </p>
            <p className="text-muted-foreground mb-4">
              Vi tager os god tid til forberedelse og klargøring af
              overfladerne, så resultatet lever op til de høje standarder,
              mange boligejere i området forventer.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Gentofte Kommune, herunder{" "}
              <strong>Hellerup</strong>, <strong>Charlottenlund</strong> og{" "}
              <strong>Ordrup</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Gentofte
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

      {/* ARTICLE — HØJ FINISH OG DEKORATIVE TEKNIKKER */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Villamaling med høj finish i Gentofte
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Gentofte er kendt for store, velholdte villaer, hvor
                detaljerne ofte betyder lige så meget som de store flader.
                Lister, paneler, gerichter og stuk kræver en anden tilgang
                end en almindelig vægflade — her handler det om
                præcisionsarbejde, skarpe kanter og jævne overgange mellem
                farver, snarere end at komme hurtigt videre.
              </p>
              <p>
                Mange af villaerne i kommunen er desuden bevaringsværdige,
                hvilket betyder, at facadefarver og materialer bør
                respektere husets oprindelige arkitektoniske stil. Vi
                afklarer gerne eventuelle kommunale retningslinjer, før vi
                anbefaler en løsning, så resultatet både ser godt ud og
                overholder de gældende regler.
              </p>
              <p>
                For boligejere, der ønsker noget ud over almindelig
                vægmaling, tilbyder vi også dekorative teknikker som
                kalkmaling og strukturmaling. Disse teknikker giver en
                levende, naturlig overflade med dybde, men kræver erfaring —
                resultatet er svært at rette, når det først er påført, så
                forberedelse og præcision er afgørende.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: finish og teknikker til villaen
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {FINISH_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Flade eller detalje</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Vigtige egenskaber</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Forarbejde og opmærksomhedspunkter</th>
                  </tr>
                </thead>
                <tbody>
                  {FINISH_TABLE.map((row) => (
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
              Sådan sikrer du det bedste resultat
            </h3>
            <ul className="space-y-2">
              {[
                "Afsæt tid til en besigtigelse, så alle detaljer og ønsker bliver afklaret på forhånd.",
                "Afklar om huset er bevaringsværdigt, før facadefarve vælges.",
                "Overvej en dekorativ teknik som kalkmaling, hvis du ønsker et unikt udtryk.",
                "Vælg kvalitetsmaterialer, der matcher villaens niveau og holder i mange år.",
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
                src={renovationImg}
                alt="Renovering af villa"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Renovering med høj finish
            </h2>
            <p className="text-muted-foreground mb-4">
              Mange af vores opgaver i Gentofte handler om renovering af
              ældre villaer, hvor detaljerne betyder meget — lister, paneler
              og overgange skal males med præcision.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi bruger kvalitetsmaterialer og tager os den nødvendige tid
              til hvert lag, så resultatet holder i mange år.
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

      {/* ARTICLE — MAN MALER I GENTOFTE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal villaen i Gentofte have ny facade, eller ønsker du et
              unikt udtryk indendørs med en dekorativ teknik? MAN MALER er
              din lokale maler i Gentofte, med erfaring i det høje
              finish-niveau, mange boligejere i området forventer. Vi giver
              altid et gratis, uforpligtende tilbud, efter vi har set
              opgaven.
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
              MAN MALER: præcision til Gentoftes villaer
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Vores opgaver i Gentofte handler sjældent om blot at få
                malet en flade — de handler om at ramme et resultat, der
                lever op til villaens niveau og boligejerens forventninger.
                Det gælder, uanset om opgaven er en klassisk facademaling, en
                totalrenovering af en ældre villa, eller en dekorativ
                vægbehandling, der skal give rummet et særligt udtryk.
              </p>
              <p>
                Vi tager os altid god tid til forberedelse og klargøring, da
                det er her, grundlaget for et holdbart og flot resultat
                lægges. Ved større opgaver kombinerer vi ofte facadearbejde
                og indendørs renovering i én sammenhængende proces, så
                villaen fremstår ensartet, både udvendigt og indvendigt.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af din villa i Gentofte. Ved opgaver af denne
                karakter anbefaler vi altid en besigtigelse, så vi kan give
                et tilbud, der tager højde for alle detaljer, ønsker og
                eventuelle bevaringshensyn.
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
              Vores ydelser i Gentofte
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling af villaer med høj finish",
                "Indendørs maling og dekorative teknikker",
                "Renovering, spartling og klargøring af overflader",
                "Farverådgivning tilpasset husets stil",
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
              Malerarbejde i nærheden af Gentofte
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-lyngby"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Lyngby
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
              Ofte stillede spørgsmål — Maler i Gentofte
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
              Klar til at få malet i Gentofte?
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
