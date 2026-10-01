import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

const AREAS = ["Hvidovre by", "Avedøre", "Friheden", "Rebæk"];

const KEY_TAKEAWAYS = [
  "Mange huse i Hvidovre er bygget i funkis- eller 1950'er-stil, hvor periodekorrekte farver giver det mest autentiske udtryk.",
  "En gennemgående farvepalet på hus, garage og hegn giver ofte det mest harmoniske helhedsindtryk.",
  "Enkle, rene linjer er typisk for funkisarkitektur og bør respekteres i farvevalget.",
  "Grundig afrensning af ældre facader er afgørende for et jævnt og holdbart resultat.",
];

const PERIOD_TABLE = [
  {
    p: "Facade (funkis/1950'er-stil)",
    d: "Periodekorrekte nuancer, der respekterer husets oprindelige arkitektoniske udtryk.",
    h: "Afrensning af gammel maling og reparation af puds bør vurderes først.",
  },
  {
    p: "Vinduer og vinduesrammer",
    d: "Slidstærk træmaling i en nuance, der matcher facadens periode og stil.",
    h: "Ældre vinduesrammer kræver ofte grundig afrensning før ny maling.",
  },
  {
    p: "Hegn og havelåge",
    d: "Samme eller matchende farve som hovedhuset for et samlet udtryk.",
    h: "Kan med fordel males i samme forløb som facaden.",
  },
  {
    p: "Garage og udhus",
    d: "Farve der matcher hovedhuset, så hele grunden fremstår ensartet.",
    h: "Simpelt at kombinere med facademaling for at spare tid og omkostninger.",
  },
  {
    p: "Indvendige lister og paneler",
    d: "Enkle, rene farver der passer til funkisstilens karakteristiske enkelhed.",
    h: "Præcisionsarbejde omkring kanter giver det mest professionelle resultat.",
  },
];

const FAQS = [
  {
    q: "Maler I rækkehuse fra 1950'erne og 60'erne i Hvidovre?",
    a: "Ja. Hvidovre har mange rækkehuse og parcelhuse fra midten af 1900-tallet, og vi har erfaring med den type overflader — herunder afrensning og reparation før maling.",
  },
  {
    q: "Hvor lang tid tager facademaling af et rækkehus?",
    a: "Det afhænger af husets stand og hvor meget forberedelse der kræves. Vi kommer altid ud og ser opgaven, før vi giver en tidsplan og et tilbud.",
  },
  {
    q: "Dækker I også Avedøre og Friheden?",
    a: "Ja, vi dækker hele Hvidovre Kommune, inklusiv Avedøre, Friheden og Rebæk.",
  },
  {
    q: "Hvad koster det at få malet et rækkehus i Hvidovre?",
    a: "Prisen afhænger af husets størrelse og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
  {
    q: "Kan I rådgive om periodekorrekte farver til et funkishus?",
    a: "Ja, vi rådgiver gerne om nuancer, der passer til husets byggeår og arkitektoniske stil, så facaden fremstår autentisk frem for tilfældig.",
  },
  {
    q: "Bør garage og hegn males i samme farve som huset?",
    a: "Det giver ofte det mest harmoniske helhedsindtryk, især i funkis- og 1950'er-kvarterer, hvor husene oprindeligt er tegnet med en gennemgående farvepalet.",
  },
];

export default function MalerHvidovre() {
  return (
    <>
      <Helmet>
        <title>Maler Hvidovre | Malerfirma, funkishuse & facade</title>
        <meta
          name="description"
          content="Maler i Hvidovre til funkishuse og rækkehuse fra 1950'erne. Periodekorrekte farver, indvendig maling og facademaling. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler hvidovre, malerfirma hvidovre, facademaling hvidovre, indvendig maling hvidovre, maler avedøre, maler friheden, funkis farver"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-hvidovre" />

        <meta property="og:title" content="Maler Hvidovre | Malerfirma, funkishuse & facade" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Hvidovre. Facademaling, indendørs maling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-hvidovre" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Hvidovre | Malerfirma, funkishuse & facade" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Hvidovre. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Hvidovre
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til rækkehuse, villaer og erhverv i Hvidovre —
              facademaling, indendørs maling og renovering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Hvidovre Kommune
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
              Malerfirma med erfaring fra Hvidovre
            </h2>
            <p className="text-muted-foreground mb-4">
              Hvidovre har mange rækkehuse og parcelhuse fra midten af
              1900-tallet, tæt på København. Som maler i Hvidovre møder vi
              derfor ofte opgaver med facademaling, træbeskyttelse og
              udvendig vedligeholdelse af ældre bebyggelser.
            </p>
            <p className="text-muted-foreground mb-4">
              Mange af husene kræver grundig klargøring før maling —
              afrensning af gammel maling, reparation af puds eller
              træværk, og korrekt grundbehandling, så resultatet holder.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Hvidovre Kommune, herunder{" "}
              <strong>Avedøre</strong>, <strong>Friheden</strong> og{" "}
              <strong>Rebæk</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Hvidovre
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

      {/* ARTICLE — PERIODEKORREKTE FARVER TIL FUNKISHUSE */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Periodekorrekte farver til Hvidovres funkishuse
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Hvidovre har flere karakteristiske boligområder opført i
                funkis- eller 1950'er-stil, kendetegnet ved enkle, rene
                linjer og en klar arkitektonisk idé. Når disse huse skal
                males, handler valget af farve om mere end personlig smag —
                en nuance, der passer til husets byggeår og stil, giver et
                langt mere autentisk og harmonisk resultat end et tilfældigt
                farvevalg.
              </p>
              <p>
                Mange af husene er oprindeligt tegnet med en gennemgående
                farvepalet, hvor hovedhus, garage, hegn og havelåge spiller
                sammen. Vi rådgiver gerne om, hvordan man genskaber eller
                respekterer dette helhedsindtryk, samtidig med at huset
                fremstår nutidigt og velholdt.
              </p>
              <p>
                Som med andet ældre byggeri kræver facader fra 1950'erne og
                60'erne grundig afrensning og eventuel reparation af puds
                eller træværk, før den nye maling påføres. Det gælder både
                for facaden og for vinduer og vinduesrammer, der ofte har
                flere lag tidligere maling, som bør fjernes for et jævnt
                resultat.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: farver og flader på funkishuset
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {PERIOD_TABLE.map((row) => (
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
                  {PERIOD_TABLE.map((row) => (
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
              Sådan vælger du den rette farve
            </h3>
            <ul className="space-y-2">
              {[
                "Overvej husets byggeår og stil, før den endelige facadefarve vælges.",
                "Lad garage, hegn og havelåge følge samme farvepalet som hovedhuset.",
                "Få afrenset gammel maling grundigt for et jævnt resultat på ældre facader.",
                "Spørg os om periodekorrekte nuancer, hvis du ønsker et autentisk udtryk.",
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
              Facademaling af rækkehuse
            </h2>
            <p className="text-muted-foreground mb-4">
              Facademaling af rækkehuse og villaer er en af de opgaver, vi
              ofte udfører i Hvidovre — med fokus på grundig forberedelse og
              holdbare, vejrbestandige materialer.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi rådgiver også gerne om farvevalg og materialer, der passer
              til husets alder og stil.
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

      {/* ARTICLE — MAN MALER I HVIDOVRE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal funkishuset have en facadefarve, der passer til dets
              arkitektoniske stil, eller trænger rækkehuset til indvendig
              maling? MAN MALER er din lokale maler i Hvidovre, med
              erfaring i kommunens karakteristiske boligområder fra midten
              af 1900-tallet. Vi giver altid et gratis, uforpligtende
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
              MAN MALER: farverådgivning til Hvidovres arkitektur
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Vi lægger vægt på, at farvevalget respekterer husets
                oprindelige stil, uanset om opgaven er et enkelt rækkehus
                eller en hel gruppe huse i samme kvarter. Det giver et
                resultat, der ikke blot ser pænt ud i dag, men som også
                passer naturligt ind i det samlede gadebillede.
              </p>
              <p>
                Vi tager altid en grundig vurdering af facadens stand, før
                vi anbefaler en løsning — ældre overflader kræver ofte mere
                forarbejde end nyere byggeri, og det tager vi med i
                tilbuddet, så der ikke opstår overraskelser undervejs.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af dit hus i Hvidovre — uanset om det er en
                facade, der skal have periodekorrekt farve, eller en
                indvendig opgave, der trænger til et nyt udtryk.
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
              Vores ydelser i Hvidovre
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling og udendørs vedligeholdelse",
                "Træbeskyttelse af vinduer, døre og hegn",
                "Indendørs maling af rækkehuse og villaer",
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
              Malerarbejde i nærheden af Hvidovre
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-frederiksberg"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Frederiksberg
                </Link>
                <Link
                  to="/maler-rodovre"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Rødovre
                </Link>
                <Link
                  to="/maler-brondby"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Brøndby
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
              Ofte stillede spørgsmål — Maler i Hvidovre
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
              Klar til at få malet i Hvidovre?
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
