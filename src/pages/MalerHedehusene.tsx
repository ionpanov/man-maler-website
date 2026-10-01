import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

const AREAS = ["Hedehusene by", "Baldersbrønde", "Fløng", "Reerslev"];

const KEY_TAKEAWAYS = [
  "Villaerne i Hedehusene er ofte 40-60 år gamle, og facader, vinduer og træværk trænger typisk til afrensning og grunder før ny maling.",
  "Kælder og bryggers kræver ofte en anden type maling end resten af huset på grund af fugt.",
  "Et samlet tilbud på facade og indvendig maling sparer tid, hvis begge opgaver alligevel skal løses.",
  "Book i god tid i foråret og efteråret, hvor efterspørgslen på facademaling er størst.",
];

const ROOM_TABLE = [
  {
    p: "Stue og opholdsrum",
    d: "Rolig, ensartet vægfarve der holder i mange år uden at virke kedelig.",
    h: "Vælg nuance efter lysindfald — mange villastuer i Hedehusene har store vinduespartier mod have.",
  },
  {
    p: "Soveværelse",
    d: "Mat eller halvmat finish, der dæmper genskin og giver et roligt udtryk.",
    h: "Mindre slidstærk maling er oftest fint, da rummet bruges mindre intensivt end f.eks. køkken eller entré.",
  },
  {
    p: "Kælder og bryggers",
    d: "Fugtspærrende maling eller særlig kælderbehandling, afhængigt af fugtniveau.",
    h: "Mange af villaernes kældre har naturlig fugt — forarbejdet bør altid vurderes på stedet, før maling vælges.",
  },
  {
    p: "Træværk, døre og vinduer",
    d: "Slidstærk træmaling med god hæftning, der tåler vejrskift og berøring.",
    h: "Afrensning af gammel, afskallet maling og korrekt grunder er afgørende på ældre villaer.",
  },
  {
    p: "Facade",
    d: "Vejrbestandig facademaling, der passer til husets murværk, puds eller træbeklædning.",
    h: "Kræver grundig afrensning og eventuel reparation af puds eller revner før maling.",
  },
  {
    p: "Garage og udhus",
    d: "Robust udendørs maling, ofte med samme farve som hovedhuset for et ensartet udtryk.",
    h: "Kan med fordel kombineres med facademaling af hovedhuset for at spare stillads/opstilling.",
  },
];

const FAQS = [
  {
    q: "Maler I villaer i Hedehusene?",
    a: "Ja. Hedehusene tæt på Roskilde har overvejende villakvarterer, og vi udfører både facademaling og indendørs maling af villaer i området.",
  },
  {
    q: "Hvor langt dækker I fra Hedehusene?",
    a: "Vi dækker Hedehusene og de nærliggende områder som Baldersbrønde, Fløng og Reerslev, samt hele Roskilde-området.",
  },
  {
    q: "Kan I hjælpe med renovering før maling?",
    a: "Ja, vi udfører gerne spartling og klargøring af overflader, før vi maler, så resultatet holder i mange år.",
  },
  {
    q: "Hvad koster det at få malet en villa i Hedehusene?",
    a: "Prisen afhænger af husets størrelse og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
  {
    q: "Kan kælder og bryggers også males?",
    a: "Ja. Mange villaer i Hedehusene har kælder eller bryggers, hvor fugt kan være en udfordring. Vi vurderer underlaget og bruger fugtspærrende maling, hvis det er relevant, før vi anbefaler en løsning.",
  },
  {
    q: "Maler I også garager og udhuse?",
    a: "Ja, vi maler gerne garager, udhuse og carporte som en del af en større opgave, eller som en selvstændig mindre opgave ved siden af hovedhuset.",
  },
];

export default function MalerHedehusene() {
  return (
    <>
      <Helmet>
        <title>Maler Hedehusene | Malerfirma, indvendig maling & facade</title>
        <meta
          name="description"
          content="Maler i Hedehusene til villaer og rækkehuse. Indvendig maling, kælder/bryggers, facademaling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta
          name="keywords"
          content="maler hedehusene, malerfirma hedehusene, indvendig maling hedehusene, facademaling hedehusene, maler baldersbrønde"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-hedehusene" />

        <meta property="og:title" content="Maler Hedehusene | Malerfirma, indvendig maling & facade" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Hedehusene. Indvendig maling, facademaling, renovering og erhvervsmaling. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-hedehusene" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Hedehusene | Malerfirma, indvendig maling & facade" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Hedehusene. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Hedehusene
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til villaer i Hedehusene og omegn — facademaling,
              indendørs maling og renovering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker Hedehusene og omegn
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
              Malerfirma med erfaring fra Hedehusene
            </h2>
            <p className="text-muted-foreground mb-4">
              Hedehusene tæt på Roskilde har overvejende villakvarterer. Som
              maler i Hedehusene udfører vi ofte facademaling, træbeskyttelse
              og udvendig vedligeholdelse, ud over almindelig indendørs
              maling.
            </p>
            <p className="text-muted-foreground mb-4">
              Byens nærhed til Roskilde betyder, at vi hurtigt kan rykke ud
              til opgaver i både Hedehusene og de omkringliggende områder.
            </p>
            <p className="text-muted-foreground">
              Vi dækker Hedehusene og omegn, herunder{" "}
              <strong>Baldersbrønde</strong>, <strong>Fløng</strong> og{" "}
              <strong>Reerslev</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker Hedehusene og omegn
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

      {/* ARTICLE — MALING I VILLAEN RUM FOR RUM */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Sådan vælger du den rigtige maling i din villa i Hedehusene
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Villaerne i Hedehusene er typisk 40-60 år gamle, med en
                blanding af murstensfacader, pudsede flader og
                træbeklædning. Det betyder, at både det indvendige og det
                udvendige malerarbejde ofte kræver mere forarbejde end på en
                nyere bolig — gammel, afskallet maling skal fjernes, puds og
                træværk skal repareres, og underlaget skal grundes korrekt,
                før den nye maling kan give et holdbart resultat.
              </p>
              <p>
                Indvendigt er det især kælderen og bryggerset, der stiller
                særlige krav. Mange af husene har naturlig fugt i
                kælderetagen, og her er det vigtigt at vurdere, om der skal
                bruges en fugtspærrende maling, eller om fugtproblemet bør
                løses, før der males. Stue, soveværelser og øvrige
                opholdsrum kan derimod oftest males med almindelig
                vægmaling, blot tilpasset lysforhold og rummets brug.
              </p>
              <p>
                Udvendigt er facademaling den mest efterspurgte opgave i
                Hedehusene, ofte kombineret med maling af vinduer, døre og
                garage eller udhus. Her giver det god mening at samle
                opgaverne i ét tilbud, så stillads eller lift kun skal
                opstilles én gang, og hele husets ydre fremstår ensartet.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: maling efter rum og flade
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {ROOM_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Rum eller flade</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Vigtige egenskaber</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Forarbejde og opmærksomhedspunkter</th>
                  </tr>
                </thead>
                <tbody>
                  {ROOM_TABLE.map((row) => (
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
              Sådan kommer du godt i gang
            </h3>
            <ul className="space-y-2">
              {[
                "Beskriv hvilke rum og flader der skal males, både inde og ude.",
                "Nævn eventuel fugt i kælder eller bryggers, så vi kan vurdere behovet for fugtspærrende maling.",
                "Få et samlet tilbud, hvis facade, vinduer og garage/udhus skal males samtidig.",
                "Aftal besigtigelse, så forarbejde og antal behandlinger kan vurderes korrekt.",
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
              Facademaling af villaer
            </h2>
            <p className="text-muted-foreground mb-4">
              Facademaling er en af de mest efterspurgte opgaver i
              Hedehusene — ofte kombineret med vinduesmaling og mindre
              reparationer af puds eller træværk.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi bruger vejrbestandige materialer og rådgiver gerne om
              farvevalg, der passer til husets stil.
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

      {/* ARTICLE — MAN MALER I HEDEHUSENE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal villaen i Hedehusene have ny facademaling, eller trænger
              stuen, soveværelserne eller kælderen til et friskt lag indvendigt?
              MAN MALER er din lokale maler i Hedehusene-området, tæt på
              Roskilde, med erfaring i både ældre villaers facader og
              indvendig renovering. Vi giver altid et gratis, uforpligtende
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
              MAN MALER: villa-specialister tæt på Roskilde
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Hedehusene er kendetegnet ved rolige villakvarterer, og det
                betyder, at vi ofte arbejder med hele huset som helhed —
                facade, vinduer, garage og have på den ene side, og stue,
                soveværelser og kælder på den anden. Den kombination kræver
                en maler, der kan vurdere både udvendige og indvendige
                overflader samlet, så arbejdet planlægges mest muligt
                effektivt for dig som boligejer.
              </p>
              <p>
                Nærheden til Roskilde betyder, at vi hurtigt kan rykke ud til
                besigtigelse og opstart af opgaver i Hedehusene,
                Baldersbrønde, Fløng og Reerslev. Vi lægger vægt på at
                besigtige huset, før vi giver et tilbud, så du får et
                realistisk billede af forarbejde, tidsplan og pris — uanset
                om det drejer sig om en enkelt facade eller en større,
                samlet renovering.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende vurdering
                af dit hus i Hedehusene-området. Med billeder eller en kort
                beskrivelse kan vi ofte give en indledende vurdering hurtigt;
                ved større opgaver er en besigtigelse altid den bedste vej
                til et præcist tilbud.
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
              Vores ydelser i Hedehusene
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling og udendørs vedligeholdelse",
                "Indendørs maling af villaer",
                "Renovering, spartling og klargøring af overflader",
                "Træbeskyttelse af vinduer, døre og hegn",
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
              Malerarbejde i nærheden af Hedehusene
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-roskilde"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Roskilde
                </Link>
                <Link
                  to="/maler-taastrup"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Taastrup
                </Link>
                <Link
                  to="/maler-greve"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Greve
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
              Ofte stillede spørgsmål — Maler i Hedehusene
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
              Klar til at få malet i Hedehusene?
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
