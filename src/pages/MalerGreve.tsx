import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import interiorImg from "@/assets/interior.webp";

const AREAS = ["Greve Strand", "Karlslunde", "Hundige", "Tune"];

const KEY_TAKEAWAYS = [
  "Den kystnære beliggenhed i Greve betyder mere slid fra vind, sol og saltholdig luft på facader og træværk.",
  "Vejrbestandige produkter og grundig afrensning er særligt vigtige tæt på kysten.",
  "Terrasse, hegn og udendørs træværk bør behandles jævnligt for at holde i mange år.",
  "Et samlet tilbud på facade og udendørs træværk giver ofte den mest effektive planlægning.",
];

const SURFACE_TABLE = [
  {
    p: "Facade",
    d: "Vejrbestandig facademaling, der kan modstå vind, slagregn og saltholdig luft fra kysten.",
    h: "Afrensning af alger, saltpåvirkning og løs maling er ofte nødvendigt før ny behandling.",
  },
  {
    p: "Vinduer og udvendige døre",
    d: "Slidstærk træmaling med god hæftning, der tåler temperaturudsving og fugt.",
    h: "Kystklimaet øger behovet for hyppigere vedligeholdelse end længere inde i landet.",
  },
  {
    p: "Terrassedæk og hegn",
    d: "Træbeskyttelse eller olie, der beskytter mod UV, fugt og slid fra vejret.",
    h: "Bør behandles jævnligt — særligt udsatte flader mod syd og vest.",
  },
  {
    p: "Stue og opholdsrum",
    d: "Rolig vægfarve, der fremhæver lyset fra store vinduespartier mod haven eller stranden.",
    h: "Vælg nuance efter lysindfald — mange huse i Greve har åbne planløsninger med meget dagslys.",
  },
  {
    p: "Køkken og bad",
    d: "Vaskbar, fugtbestandig maling, der tåler høj luftfugtighed og hyppig rengøring.",
    h: "Særligt vigtigt i badeværelser tæt på kysten, hvor luftfugtigheden generelt er højere.",
  },
];

const FAQS = [
  {
    q: "Maler I parcelhuse i Greve?",
    a: "Ja. Greve har mange parcelhuskvarterer, og vi udfører både facademaling, indendørs maling og renovering tilpasset den boligtype.",
  },
  {
    q: "Kan I hjælpe med træbeskyttelse af hegn og udhuse?",
    a: "Ja, vi udfører træbeskyttelse af hegn, carporte og udhuse som en del af vores udendørs ydelser i Greve.",
  },
  {
    q: "Dækker I også Karlslunde og Hundige?",
    a: "Ja, vi dækker hele Greve Kommune, inklusiv Karlslunde, Hundige og Tune.",
  },
  {
    q: "Hvad koster det at få malet et parcelhus i Greve?",
    a: "Prisen afhænger af husets størrelse og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
  {
    q: "Påvirker den kystnære beliggenhed valget af maling?",
    a: "Ja. Saltholdig luft, vind og fugt fra kysten slider hurtigere på facader, vinduer og træværk. Vi vælger derfor ofte mere vejrbestandige produkter og lægger ekstra vægt på afrensning og grunder, når vi maler tæt på kysten.",
  },
  {
    q: "Kan I male terrasse, hegn og udendørs møbler?",
    a: "Ja, vi udfører gerne træbeskyttelse og maling af terrassedæk, hegn og faste udendørs møbler som en del af en facade- eller haveopgave.",
  },
];

export default function MalerGreve() {
  return (
    <>
      <Helmet>
        <title>Maler Greve | Malerfirma, indvendig maling & facade</title>
        <meta
          name="description"
          content="Maler i Greve til parcelhuse ved kysten. Indvendig maling, vejrbestandig facademaling og træbeskyttelse. Gratis og uforpligtende tilbud."
        />
        <meta
          name="keywords"
          content="maler greve, malerfirma greve, indvendig maling greve, facademaling greve, maler karlslunde, maler hundige"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-greve" />

        <meta property="og:title" content="Maler Greve | Malerfirma, indvendig maling & facade" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Greve. Indvendig maling, facademaling og træbeskyttelse. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-greve" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Greve | Malerfirma, indvendig maling & facade" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Greve. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Greve
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til parcelhuse og villaer ved kysten i Greve —
              facademaling, indendørs maling og træbeskyttelse.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Greve Kommune
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
              Malerfirma med erfaring fra Greve
            </h2>
            <p className="text-muted-foreground mb-4">
              Greve ved kysten syd for København har mange
              parcelhuskvarterer. Som maler i Greve udfører vi ofte
              facademaling, træbeskyttelse og indendørs maling for
              boligejere i området.
            </p>
            <p className="text-muted-foreground mb-4">
              Den kystnære beliggenhed betyder, at facader og træværk kan
              have brug for ekstra beskyttelse mod vind og vejr — det tager
              vi højde for i vores materialevalg.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Greve Kommune, herunder{" "}
              <strong>Karlslunde</strong>, <strong>Hundige</strong> og{" "}
              <strong>Tune</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Greve
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

      {/* ARTICLE — MALING VED KYSTEN */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Maling tæt på kysten: det kræver Greve-klimaet
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                At bo tæt på kysten i Greve har sine fordele — men det stiller
                også særlige krav til facader, vinduer og træværk. Vind, sol
                og saltholdig luft slider hurtigere på overflader end
                længere inde i landet, og derfor er valget af maling og
                forarbejde endnu vigtigere her end i mange andre områder.
              </p>
              <p>
                Udvendigt betyder det, at facader ofte har brug for grundig
                afrensning, før de males igen — alger, saltpåvirkning og løs
                maling skal fjernes, så den nye behandling kan hæfte ordentligt.
                Vinduer, udvendige døre, terrassedæk og hegn bør desuden
                behandles jævnligt, da disse flader er særligt udsatte for
                vejret, især mod syd og vest.
              </p>
              <p>
                Indendørs er det typisk badeværelser og køkkener, der kræver
                ekstra opmærksomhed, da luftfugtigheden generelt er højere i
                kystnære boliger. Her vælger vi vaskbar, fugtbestandig
                maling, der kan klare både damp og hyppig rengøring, uden at
                miste sit udtryk.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: maling efter flade og klima
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {SURFACE_TABLE.map((row) => (
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
                  {SURFACE_TABLE.map((row) => (
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
              Sådan beskytter du boligen bedst
            </h3>
            <ul className="space-y-2">
              {[
                "Få afrenset facaden grundigt for alger og saltpåvirkning før ny maling.",
                "Vælg vejrbestandige produkter til facade, vinduer og udvendige døre.",
                "Behandl terrassedæk og hegn jævnligt, især på sider udsat for sol og vind.",
                "Brug fugtbestandig maling i køkken og bad på grund af den højere luftfugtighed.",
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
                src={interiorImg}
                alt="Indendørs maling af parcelhus"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Indendørs maling af parcelhuse
            </h2>
            <p className="text-muted-foreground mb-4">
              Vi udfører indendørs maling af stuer, værelser og
              fællesarealer i parcelhuse i Greve — altid med grundig
              afdækning og forberedelse af overfladerne.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi rådgiver også gerne om farvevalg, der passer til boligens
              lys og indretning.
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

      {/* ARTICLE — MAN MALER I GREVE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal parcelhuset i Greve have ny facademaling før sommeren, eller
              trænger stuen, køkkenet eller badeværelset til et friskt lag
              indvendigt? MAN MALER er din lokale maler i Greve, med erfaring
              i det særlige kystklima fra Greve Strand til Karlslunde,
              Hundige og Tune. Vi giver altid et gratis, uforpligtende tilbud,
              efter vi har set opgaven.
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
              MAN MALER: erfaring med kystnære boliger i Greve
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Greve Kommune strækker sig fra parcelhuskvartererne omkring
                Tune til de kystnære områder ved Greve Strand og Hundige, og
                boligerne stiller derfor forskellige krav afhængigt af,
                hvor tæt de ligger på vandet. Vi vurderer altid husets
                placering og eksponering for vejr, før vi anbefaler
                materialer og antal behandlinger — det gælder både facade,
                vinduer og udendørs træværk.
              </p>
              <p>
                Mange af vores opgaver i Greve kombinerer udvendig
                vedligeholdelse med indendørs maling i samme forløb — for
                eksempel facademaling om foråret og renovering af stue eller
                badeværelse i samme periode. Det giver en mere effektiv
                planlægning, både for os og for dig som boligejer.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af dit hus i Greve-området. Med billeder eller en
                kort beskrivelse kan vi ofte give en indledende vurdering
                hurtigt; ved større opgaver, især udvendige, er en
                besigtigelse altid den bedste vej til et præcist tilbud.
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
              Vores ydelser i Greve
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling og udendørs vedligeholdelse",
                "Træbeskyttelse af hegn, carporte og udhuse",
                "Indendørs maling af parcelhuse og villaer",
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
              Malerarbejde i nærheden af Greve
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-ishoj"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Ishøj
                </Link>
                <Link
                  to="/maler-koge"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Køge
                </Link>
                <Link
                  to="/maler-roskilde"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Roskilde
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
              Ofte stillede spørgsmål — Maler i Greve
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
              Klar til at få malet i Greve?
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
