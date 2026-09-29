import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import projectImg from "@/assets/projects/proj53.webp";

const NEIGHBORHOODS = [
  "Indre By", "Nørrebro", "Østerbro", "Vesterbro", "Amager",
  "Frederiksberg", "Valby", "Sydhavn", "Nordvest", "Brønshøj",
];

const CHECKLIST = [
  {
    p: "Flader og arbejdsomfang",
    d: "Hvilke vægge, lofter og træværk der behandles, samt hvilke rum arbejdet omfatter.",
    h: "Gør det muligt at sammenligne tilbud på samme opgave frem for kun på pris.",
  },
  {
    p: "Forarbejde og reparationer",
    d: "Om spartling, tapetnedtagning, reparation af revner og håndtering af løs maling, nikotin, fugtspor eller småskader er inkluderet.",
    h: "God klargøring har stor betydning for jævne flader og et holdbart resultat.",
  },
  {
    p: "Maling og antal lag",
    d: "Type maling, glans, slidstyrke, vaskbarhed og hvor mange lag der påføres.",
    h: "Malingens egenskaber skal passe til rummet og underlaget, særligt i eksempelvis køkken, entré og børneværelse.",
  },
  {
    p: "Adgangsforhold",
    d: "Hvordan forhold som fjerde sal uden elevator, begrænset parkering eller arbejde i en beboet ejendom håndteres.",
    h: "Adgangsforhold kan påvirke både pris, planlægning og behovet for koordinering.",
  },
  {
    p: "Afdækning og beskyttelse",
    d: "Hvordan gulve og inventar beskyttes under arbejdet.",
    h: "Reducerer risikoen for skader og gør forløbet mere smidigt, især hvis boligen er i brug.",
  },
  {
    p: "Oprydning og slutrengøring",
    d: "Om afdækning fjernes, og om oprydning og slutrengøring er en del af prisen.",
    h: "Forhindrer uklarhed om, hvad der skal ordnes, når malerarbejdet er afsluttet.",
  },
  {
    p: "Tidsplan",
    d: "Hvornår arbejdet kan begynde, hvor længe det forventes at vare, og hvordan arbejdet tilrettelægges, hvis du bliver boende undervejs.",
    h: "Gør det lettere at vurdere, hvordan projektet påvirker hverdagen.",
  },
];

const FAQS = [
  {
    q: "Hvad koster en maler i København?",
    a: "Prisen afhænger af opgavens størrelse, underlag, forarbejde, materialer og adgangsforhold. En besigtigelse eller en detaljeret beskrivelse med mål og billeder giver det bedste grundlag for et præcist, skriftligt tilbud.",
  },
  {
    q: "Hvad skal være med i et tilbud på malerarbejde?",
    a: "Tilbuddet bør beskrive fladerne, forarbejdet, antal lag, malingstype, materialer, afdækning, oprydning og tidsplan. Det gør det lettere at sammenligne malertilbud og undgå uventede ekstraudgifter.",
  },
  {
    q: "Kan jeg blive boende, mens maleren arbejder?",
    a: "Ja, ofte. Aftal på forhånd hvordan rum opdeles, møbler dækkes af, og hvornår arbejdet udføres. God planlægning er særligt vigtig i københavnerlejligheder med begrænset plads, parkering eller adgang uden elevator.",
  },
  {
    q: "Hvor lang tid tager det at få malet en lejlighed i København?",
    a: "Det afhænger af lejlighedens størrelse og omfanget af arbejdet — om der f.eks. også skal spartles eller klargøres overflader først. Vi giver altid en tidsplan sammen med tilbuddet, så du ved præcis, hvad du kan forvente.",
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
            <p className="text-muted-foreground mb-4">
              Leder du efter en maler i København, der kan løfte hjemmet,
              kontoret eller ejendommen med et flot og holdbart resultat? Det
              rette malerarbejde handler ikke kun om farver, men også om
              grundig forberedelse, skarpe detaljer og materialer, der passer
              til rummene.
            </p>
            <p className="text-muted-foreground mb-8">
              Her får du hjælp til at finde en lokal maler i København og
              blive klogere på, hvad du bør overveje, før du indhenter et
              gratis, uforpligtende tilbud.
            </p>

            <div className="p-6 rounded-2xl bg-warm-surface border border-border">
              <h2 className="text-lg font-display font-semibold mb-4 text-foreground">
                ⚡ Kort fortalt
              </h2>
              <ul className="space-y-2">
                {[
                  "Beskriv opgaven præcist for at få realistiske tilbud og sammenligne priser, materialer og tidsplaner.",
                  "Vælg maler efter kvalitet, forarbejde og erfaring – ikke kun den laveste pris.",
                  "Tag højde for adgang, parkering og afdækning i københavnske boliger og ejendomme.",
                  "Få en skriftlig aftale om flader, maling, behandlinger, materialer og slutrengøring.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE — FINDE EN MALER */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Finde en maler i København til det rette malerarbejde
            </h2>
            <p className="text-muted-foreground mb-4">
              At finde en maler i København handler ikke kun om at få den
              laveste pris. Det handler om at vælge en fagperson, der forstår
              boligens stand, lyset i rummene og de praktiske vilkår, som ofte
              følger med i byens lejligheder, villaer og erhvervslokaler. Et
              veludført malerarbejde kan løfte et slidt rum markant, mens
              dårligt forarbejde hurtigt viser sig som ujævne flader, synlige
              overgange eller maling, der ikke holder.
            </p>
            <p className="text-muted-foreground mb-4">
              Start med at afklare opgaven så konkret som muligt. Skal der
              blot males vægge i et enkelt rum, eller omfatter arbejdet også
              lofter, træværk, spartling, tapetnedtagning eller reparation af
              revner? Jo tydeligere opgaven er beskrevet, desto lettere er det
              for en maler at give et realistisk tilbud. Det giver også et
              bedre grundlag for at sammenligne priser, materialer og
              tidsplaner på tværs af tilbud.
            </p>
            <p className="text-muted-foreground mb-4">
              I København kan adgangsforhold have betydning for både
              planlægning og pris. En lejlighed på fjerde sal uden elevator,
              begrænset parkering eller arbejde i en beboet ejendom kræver
              ofte ekstra koordinering. Spørg derfor ind til, hvordan maleren
              beskytter gulve og inventar, håndterer afdækning og oprydning
              samt tilrettelægger arbejdet, hvis du bliver boende undervejs.
              Det er detaljerne, der adskiller et smidigt forløb fra et
              projekt, der fylder unødigt i hverdagen.
            </p>
            <p className="text-muted-foreground mb-4">
              Den rigtige maling vælges heller ikke alene ud fra farven.
              Glans, slidstyrke, vaskbarhed og underlag skal passe til rummet.
              Køkken, entré og børneværelse stiller andre krav end
              soveværelset, og ældre vægge kan have behov for grundig
              klargøring, før den endelige farve kommer på. Vores malere
              vurderer typisk underlaget først, så løs maling, nikotin,
              fugtspor eller småskader bliver håndteret korrekt frem for blot
              at blive dækket over.
            </p>
            <p className="text-muted-foreground mb-10">
              Bed gerne om en skriftlig aftale, hvor omfanget er tydeligt
              beskrevet: hvilke flader der behandles, hvor mange lag der
              påføres, hvilken type maling der bruges, og om materialer,
              afdækning og slutrengøring er inkluderet. Referencer og billeder
              af lignende opgaver kan også sige mere end et generelt løfte om
              kvalitet. Når forventningerne er afstemt fra begyndelsen, bliver
              det lettere at vælge en maler, der både passer til opgaven,
              boligen og det ønskede resultat.
            </p>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Tjekliste til tilbud fra malere i København
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {CHECKLIST.map((row) => (
                <div key={row.p} className="p-4 rounded-xl bg-warm-surface border border-border">
                  <p className="font-semibold text-foreground mb-2">{row.p}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-foreground">Skal med i tilbuddet: </span>
                    {row.d}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Hvorfor: </span>
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Punkt at afklare</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Hvad du bør få beskrevet i tilbuddet</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Hvorfor det er relevant</th>
                  </tr>
                </thead>
                <tbody>
                  {CHECKLIST.map((row) => (
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
              Vælg den rette maler
            </h3>
            <ul className="space-y-2">
              {[
                "Beskriv opgaven præcist, inklusive vægge, lofter, træværk og nødvendige reparationer.",
                "Indhent skriftlige tilbud med materialer, antal lag, afdækning og slutrengøring.",
                "Afklar adgang, parkering og koordinering ved arbejde i beboede københavnerlejligheder.",
                "Vælg maling efter rummets slid, vaskbarhed, glans og væggenes tilstand.",
                "Se referencer og billeder af lignende opgaver, før du vælger.",
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

      {/* ARTICLE — KLAR TIL TILBUD */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-card-foreground">
              Maler København: Klar til gratis, uforpligtende tilbud fra vores maler?
            </h2>
            <p className="text-muted-foreground mb-8">
              Når du skal vælge maler i København, bør det være let at få et
              klart billede af både opgaven, processen og prisen. Et godt
              malerarbejde begynder ikke med en standardløsning, men med en
              grundig vurdering af boligens stand, lysforhold, materialer og
              dine ønsker til finish. Derfor tager vores maler udgangspunkt i
              netop dine rum – uanset om det gælder en enkelt væg, en klassisk
              københavnerlejlighed, en istandsættelse ved fraflytning eller en
              større renovering af hus eller erhvervslokaler. Du kan få et
              gratis tilbud, der beskriver arbejdets omfang og de vigtigste
              forudsætninger, så du ved, hvad der er inkluderet, før arbejdet
              går i gang. Et uforpligtende tilbud giver dig samtidig ro til at
              sammenligne løsninger og stille de spørgsmål, der har betydning:
              Skal væggene spartles helt op? Er der behov for grunder? Hvilken
              maling passer til køkken, soveværelse eller facade? Og hvordan
              planlægges arbejdet, så hverdagen påvirkes mindst muligt? Vi
              mener, at et maler tilbud skal være gennemskueligt frem for blot
              lavt sat. Derfor kan en fast pris aftales, når opgaven er
              besigtiget og afgrænset, så der er en fælles forståelse af
              materialer, forarbejde, antal behandlinger og det ønskede
              resultat. Det mindsker risikoen for overraskelser undervejs og
              gør det lettere at træffe en sikker beslutning. Kontakt os, når
              du har brug for professionel sparring om farver, overflader
              eller praktisk planlægning i København og omegn. Med billeder,
              mål eller en kort beskrivelse af opgaven kan vi ofte give en
              indledende vurdering hurtigt; ved mere omfattende arbejde er en
              besigtigelse den bedste vej til en præcis løsning. Målet er
              enkelt: veludført malerarbejde, ordentlig dialog og et tilbud,
              der er lige så klart som den færdige overflade.
            </p>

            <h3 className="text-lg font-display font-semibold mb-4 text-card-foreground">
              Sådan får du et klart tilbud
            </h3>
            <ul className="space-y-2">
              {[
                "Send billeder, mål og en kort beskrivelse af opgaven.",
                "Få vurderet overflader, lysforhold og behov for forarbejde.",
                "Afklar malingtype, farver og ønsket finish i hvert rum.",
                "Modtag et gennemskueligt tilbud med omfang, materialer og behandlinger.",
                "Aftal besigtigelse ved større renoveringer eller komplekse opgaver.",
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
            <div className="text-center mt-8 flex flex-col items-center gap-2">
              <Link to="/ydelser" className="text-primary font-medium hover:underline">
                Se alle vores malerydelser →
              </Link>
              <Link to="/maler-roskilde" className="text-sm text-muted-foreground hover:underline">
                Bor du i Roskilde-området? Se vores side om maler i Roskilde →
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
              Malerarbejde i nærheden af København
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
                  to="/maler-hvidovre"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Hvidovre
                </Link>
                <Link
                  to="/maler-gentofte"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Gentofte
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
