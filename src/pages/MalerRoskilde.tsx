import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

const AREAS = [
  "Roskilde by", "Viby Sjælland", "Vindinge", "Svogerslev",
  "Himmelev", "Gundsømagle", "Trekroner", "Jyllinge",
];

const FAQS = [
  {
    q: "Maler I både villaer og rækkehuse i Roskilde?",
    a: "Ja. Roskilde-området har mange villaer, rækkehuse og ældre huse, og det er en stor del af vores opgaver her — fra facademaling og træbeskyttelse til indendørs renovering.",
  },
  {
    q: "Hvor lang tid tager det at male en facade?",
    a: "Det afhænger af husets størrelse, stand og hvor meget forberedelse der kræves (f.eks. afrensning eller reparation af puds/træværk før maling). Vi kommer altid ud og ser opgaven, før vi giver en tidsplan og et tilbud.",
  },
  {
    q: "Dækker I også Vindinge, Viby og Jyllinge?",
    a: "Ja, vi dækker hele Roskilde Kommune og de nærliggende områder — inklusiv Viby Sjælland, Vindinge, Svogerslev, Himmelev og Jyllinge.",
  },
  {
    q: "Hvad koster det at få malet en villa i Roskilde?",
    a: "Prisen afhænger af husets størrelse, overfladernes stand og omfanget af forarbejde. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
  {
    q: "Kan I hjælpe med både udendørs og indendørs opgaver samtidig?",
    a: "Ja, mange af vores kunder i Roskilde-området får løst flere opgaver ad gangen — for eksempel facademaling udenfor og renovering af enkelte rum indenfor. Vi planlægger gerne det hele i én sammenhængende proces.",
  },
  {
    q: "Kan vægge og lofter males ved fraflytning?",
    a: "Ja, hvis det følger af lejekontrakt eller boligens stand kræver det. Tjek indflytningsrapport og aftalen med udlejer. Huller, pletter og farveændringer bør udbedres, så resultatet fremstår ensartet ved fraflytningssynet.",
  },
  {
    q: "Hvilken maling passer bedst til køkken og træværk?",
    a: "Køkkenvægge kræver en robust, rengøringsvenlig maling, der tåler fedt og stænk. Til døre, karme, paneler og vinduer vælges slidstærk træmaling. Grundig afvaskning, slibning og eventuel grunder er afgørende.",
  },
];

const KEY_TAKEAWAYS = [
  "Grundigt forarbejde med spartling, slibning og grunder er afgørende for et holdbart, ensartet resultat.",
  "Vælg maling efter rum og underlag: køkkener kræver vaskbare overflader, mens lofter ofte bør være meget matte.",
  "Ved fraflytning bør tilbud tydeligt inkludere afdækning, reparationer, antal behandlinger og oprydning.",
  "Book malerarbejde i god tid, og gem skriftlig dokumentation for aftale, pris og udført arbejde.",
];

const MALING_TABLE = [
  {
    p: "Vægge",
    d: "Robust overflade, der kan tørres af og bevarer sit udtryk.",
    h: "Vælg maling efter underlag, rummets brug og ønsket finish.",
  },
  {
    p: "Lofter",
    d: "Meget mat maling dæmper genskin og skjuler mindre ujævnheder.",
    h: "Et nymalet loft kan give mere lys og løfte indretningen.",
  },
  {
    p: "Køkkenvægge",
    d: "Skal modstå fedt, stænk og hyppig rengøring uden at blive mat eller skjoldet.",
    h: "Vær særligt opmærksom på vægge ved arbejdszoner, spiseplads og indbyggede skabe.",
  },
  {
    p: "Træværk og vinduer",
    d: "Slidstærk maling med god hæftning, der tåler lys, temperaturskift og berøring.",
    h: "Afvask, slib og brug korrekt grunder, især på tidligere malede flader.",
  },
  {
    p: "Tapet",
    d: "Tapetet skal have en struktur, der egner sig til maling.",
    h: "Kontrollér, at tapetet sidder fast og er rent før maling.",
  },
  {
    p: "Sprøjtemalede flader",
    d: "Kan give en meget jævn og elegant overflade på større, sammenhængende flader.",
    h: "Kræver omhyggelig afdækning samt sikker håndtering omkring kanter, vinduer og inventar.",
  },
];

export default function MalerRoskilde() {
  return (
    <>
      <Helmet>
        <title>Maler Roskilde | Malerfirma, indvendig maling & gratis tilbud</title>
        <meta
          name="description"
          content="Få hjælp til at vælge maler i Roskilde, afklare arbejdsomfang og vurdere tilbud til indvendig maling, fraflytning og facade."
        />
        <meta
          name="keywords"
          content="maler roskilde, malerfirma roskilde, indvendig maling roskilde, facademaling roskilde, maler viby sjælland, maler vindinge"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-roskilde" />

        <meta property="og:title" content="Maler Roskilde | Malerfirma, indvendig maling & gratis tilbud" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Roskilde. Indvendig maling, facademaling, renovering og erhvervsmaling. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-roskilde" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Roskilde | Malerfirma, indvendig maling & gratis tilbud" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Roskilde. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Roskilde
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til villaer, rækkehuse og erhverv i Roskilde og omegn —
              facademaling, indendørs maling og renovering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Roskilde-området
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
              Malerfirma med erfaring fra Roskilde-området
            </h2>
            <p className="text-muted-foreground mb-4">
              Roskilde og omegn er kendetegnet ved mange villaer, rækkehuse og
              fritliggende huse — ofte med større facadearealer, træværk og
              haver end man ser i lejlighedsbyggeri. Som maler i Roskilde
              møder vi derfor ofte opgaver med facademaling, træbeskyttelse og
              udvendig vedligeholdelse, ud over almindelig indendørs maling.
            </p>
            <p className="text-muted-foreground mb-4">
              Mange af husene i og omkring Roskilde er ældre ejendomme, hvor
              overfladerne kræver grundig klargøring før maling — afrensning,
              reparation af puds eller træværk, og korrekt grundbehandling, så
              resultatet holder i mange år.
            </p>
            <p className="text-muted-foreground">
              Vi dækker <strong>Roskilde by</strong> samt de omkringliggende
              områder som <strong>Viby Sjælland</strong>,{" "}
              <strong>Vindinge</strong>, <strong>Svogerslev</strong> og{" "}
              <strong>Jyllinge</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Roskilde-området
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

      {/* CASE HIGHLIGHT */}
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
              Facademaling i Roskilde
            </h2>
            <p className="text-muted-foreground mb-4">
              Facademaling af villaer er en af de opgaver, vi ofte udfører for
              boligejere i Roskilde-området — med fokus på grundig
              forberedelse af overfladerne og holdbare, vejrbestandige
              materialer.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground mb-2">
              "Vi fik malet hele facaden på vores villa, og resultatet er
              virkelig flot. Arbejdet blev udført professionelt, og
              kommunikationen var nem hele vejen igennem. Kan varmt
              anbefales."
            </blockquote>
            <p className="text-sm text-muted-foreground mb-6">— Lars P., Roskilde</p>
            <Link
              to="/referencer"
              className="text-primary font-medium hover:underline"
            >
              Se flere af vores projekter →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE — MALING AF VÆGGE, LOFTER, KØKKEN OG TRÆVÆRK */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Maling af vægge, lofter, køkken og træværk
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Et flot malerarbejde begynder med at vælge den rigtige maling
                til rummet og underlaget. Vægge, lofter, køkkener og træværk
                stiller forskellige krav til både glans, slidstyrke og
                forarbejde, og det kan ses på det færdige resultat. En rolig,
                ensartet vægfarve kan få et rum til at virke større og mere
                gennemført, mens et nymalet loft giver lys og løfter hele
                indretningen. Til lofter vælges ofte en meget mat maling, som
                dæmper genskin og skjuler mindre ujævnheder, mens vægge
                typisk har godt af en mere robust overflade, der kan tørres
                af uden at miste sit udtryk.
              </p>
              <p>
                I rum med høj aktivitet eller fugt er køkkenmaling en særlig
                disciplin. Her skal overfladen kunne modstå fedt, stænk og
                hyppig rengøring, uden at farven bliver mat eller skjoldet.
                Det gælder også omkring spisepladsen, ved indbyggede skabe og
                på vægge tæt ved arbejdszoner. Den rette maling gør
                hverdagsvedligeholdelsen nemmere og bevarer rummets pæne
                finish over tid.
              </p>
              <p>
                Træværk som paneler, døre, karme og vinduer kræver en anden
                behandling end pudsede vægge. Malingen skal være slidstærk,
                hæfte godt og kunne klare skiftende lys, temperatur og
                berøring. Et grundigt forarbejde med afvaskning, slibning og
                korrekt grunder er afgørende, særligt på tidligere malede
                flader. Det samme gælder, hvis tapet skal males: Tapetet skal
                sidde fast, være rent og have en struktur, der egner sig til
                at blive malet, før man går i gang.
              </p>
              <p>
                Til større, sammenhængende flader kan sprøjtemaling give en
                meget jævn og elegant overflade, men metoden kræver
                omhyggelig afdækning og sikker håndtering af kanter, vinduer
                og inventar. Uanset teknik er den bedste løsning den, der
                passer til underlaget, rummets brug og den finish, man ønsker
                at leve med i mange år.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Hurtigt overblik: maling efter flade og brug
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {MALING_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Flade eller område</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Vigtige egenskaber</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Forarbejde og opmærksomhedspunkter</th>
                  </tr>
                </thead>
                <tbody>
                  {MALING_TABLE.map((row) => (
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
              Vælg maling til rummet
            </h3>
            <ul className="space-y-2">
              {[
                "Brug mat loftmaling, der dæmper genskin og skjuler små ujævnheder.",
                "Vælg robust vægmaling, som tåler aftørring i rum med høj aktivitet.",
                "Anvend vaskbar køkkenmaling nær arbejdszoner, hvor fedt og stænk forekommer.",
                "Vask, slib og grund træværk grundigt før maling af døre, karme og vinduer.",
                "Afdæk omhyggeligt ved sprøjtemaling for ensartede flader og rene kanter.",
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

      {/* ARTICLE — MAN MALER I ROSKILDE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal hjemmet have nye farver, eller står du med en fraflytning,
              hvor vægge og træværk skal stå skarpt? MAN MALER er din lokale
              maler i Roskilde med sans for grundigt forarbejde, pæne
              detaljer og holdbare løsninger. Vi hjælper med indvendig
              maling af vægge, lofter, køkkener og træværk – og giver gerne
              et gratis, uforpligtende tilbud.
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
              MAN MALER: din erfarne og grundige maler i Roskilde
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
              <p>
                Når hjemmet, virksomheden eller ejendommen i Roskilde trænger
                til et nyt udtryk, er det detaljerne, der afgør resultatet.
                En flot væg handler ikke kun om den valgte farve, men også om
                et omhyggeligt forarbejde, skarpe kanter og en overflade, der
                holder sig pæn i hverdagen. MAN MALER er din erfarne og
                grundige maler i Roskilde, når opgaven skal løses med
                faglighed, ordentlighed og blik for rummets helhed.
              </p>
              <p>
                God maling begynder længe før penslen rammer væggen.
                Underlaget skal vurderes, revner og ujævnheder skal
                udbedres, og den rette behandling skal vælges til netop
                træværk, vægge, lofter eller facader. Det er her, en
                professionel maler gør en mærkbar forskel: ikke ved at
                skynde processen, men ved at sikre, at hvert lag får de
                bedste forudsætninger. Professionel maling giver et mere
                ensartet udtryk og kan samtidig være med til at beskytte
                overflader mod daglig slitage.
              </p>
              <p>
                Som lokal maler i Roskilde kender MAN MALER værdien af en
                enkel og tryg proces. Du skal kunne få ærlig vejledning om
                farver, glansgrader og materialer – og vide, hvad arbejdet
                omfatter, før det går i gang. Uanset om du søger klassisk
                hvid maling til en lejlighed, en varm farvepalet til villaen
                eller en slidstærk løsning til erhvervslokaler, bør valget
                tage udgangspunkt i både lys, brug og arkitektur.
              </p>
              <p>
                Et veludført malerarbejde kan forandre et rum uden at ændre
                dets karakter. Det kan fremhæve originale detaljer, skabe
                sammenhæng mellem rum og give boligen et velplejet præg.
                Derfor er det værd at vælge en fagperson, der arbejder
                systematisk fra afdækning til sidste finish. Kontakt MAN
                MALER og indhent tilbud på din opgave, så du får et klart
                grundlag for at vælge den løsning, der passer til dit hjem
                og dine forventninger.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-card-foreground">
              Fordele ved professionelt malerarbejde
            </h3>
            <ul className="space-y-2 mb-10">
              {[
                "Grundigt forarbejde sikrer ensartede, holdbare overflader.",
                "Ærlig vejledning om farver, glans og materialer.",
                "Skarpe kanter og omhyggelig afdækning beskytter hjemmet.",
                "Løsninger tilpasses lys, brug og rummets arkitektur.",
                "Et klart tilbud giver tryghed før arbejdet begynder.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-card-foreground">
              Maling ved fraflytning: tilbud og kvalitet
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Ved fraflytning er maling ofte en af de sidste opgaver, der
                skal falde på plads – og en af de mest synlige, når boligen
                afleveres. Lejekontrakt, indflytningsrapport og
                fraflytningssyn er de bedste udgangspunkter for at afklare,
                hvad der forventes. Er vægge, lofter eller træværk
                misfarvede, plettede eller præget af mange huller og
                reparationer, vil maling typisk være relevant.
              </p>
              <p>
                Når du skal indhente tilbud, bør du ikke alene sammenligne
                den samlede pris. Bed om en tydelig beskrivelse af
                forarbejdet: Er afdækning, spartling af huller, slibning,
                grunding og oprydning medregnet? Antallet af
                malebehandlinger og typen af maling har stor betydning for
                både resultat og holdbarhed. En billig løsning kan blive dyr,
                hvis underlaget ikke klargøres ordentligt.
              </p>
              <p>
                En erfaren maler i Roskilde vil normalt kunne besigtige
                boligen, vurdere overfladerne og give et tilbud, der tager
                højde for boligens stand, adgangsforhold og tidsfrist. Book
                derfor i god tid, særligt ved månedsskifter, og gem altid
                skriftlig dokumentation for aftale, pris og det udførte
                arbejde.
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
              Vores ydelser i Roskilde
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling og udendørs vedligeholdelse",
                "Træbeskyttelse af vinduer, døre og hegn",
                "Indendørs maling af villaer og rækkehuse",
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
              <Link to="/maler-koebenhavn" className="text-sm text-muted-foreground hover:underline">
                Bor du i København? Se vores side om maler i København →
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
              Malerarbejde i nærheden af Roskilde
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-hedehusene"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Hedehusene
                </Link>
                <Link
                  to="/maler-greve"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Greve
                </Link>
                <Link
                  to="/maler-koge"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Køge
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
              Ofte stillede spørgsmål — Maler i Roskilde
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
              Klar til at få malet i Roskilde?
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
