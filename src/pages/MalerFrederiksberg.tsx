import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import interiorImg from "@/assets/interior.webp";

const AREAS = ["Frederiksberg Allé", "Solbjerg", "Flintholm", "Fasanvej"];

const KEY_TAKEAWAYS = [
  "Ældre etageejendomme på Frederiksberg har ofte stuklofter, gerichter og tapet, der kræver ekstra omhu ved maling.",
  "Adgang via opgange og trapper samt hensyn til naboer har betydning for planlægning af arbejdet.",
  "Ved mindre opgaver kan du ofte blive boende i lejligheden, mens vi maler enkelte rum.",
  "Tapetnedtagning og klargøring af ældre vægge bør altid indgå i tilbuddet, hvis det er relevant.",
];

const APARTMENT_TABLE = [
  {
    p: "Stuklofter og gerichter",
    d: "Præcisionsarbejde, hvor de omkringliggende flader males uden at skade detaljerne.",
    h: "Kræver tålmodighed og ofte afdækning med tape, før selve malingen går i gang.",
  },
  {
    p: "Vægge med gammelt tapet",
    d: "Tapetnedtagning og klargøring af underlaget, før ny maling kan påføres jævnt.",
    h: "Ældre lim og ujævnheder under tapetet skal ofte udbedres først.",
  },
  {
    p: "Træværk og paneler",
    d: "Slidstærk maling med god hæftning, tilpasset ældre træværks profiler og detaljer.",
    h: "Afrensning af tidligere malingslag er ofte nødvendigt på ældre ejendomme.",
  },
  {
    p: "Vinduer mod gaden",
    d: "Holdbar maling, der kan modstå støv, trafik og hyppig åbning/lukning.",
    h: "Byens miljø slider hurtigere på vinduer end i mere rolige områder.",
  },
  {
    p: "Køkken og bad i lejligheden",
    d: "Vaskbar, fugtbestandig maling, der tåler daglig brug og rengøring.",
    h: "Særligt vigtigt i mindre lejligheder, hvor rummene bruges intensivt.",
  },
];

const FAQS = [
  {
    q: "Har I erfaring med ældre etageejendomme på Frederiksberg?",
    a: "Ja. Frederiksberg har mange ældre etageejendomme med stuklofter og karakteristiske detaljer, og vi tilpasser vores arbejde efter det — både ved indvendig maling og ved facadearbejde.",
  },
  {
    q: "Kan I male en lejlighed, mens jeg bor der?",
    a: "I mange tilfælde ja, især ved enkelte rum. Ved større opgaver anbefaler vi ofte at flytte ud af de berørte rum midlertidigt. Vi finder altid en løsning, der passer til din situation.",
  },
  {
    q: "Udfører I også facademaling på Frederiksberg?",
    a: "Ja, vi udfører facademaling og udvendig vedligeholdelse på ejendomme på Frederiksberg, herunder klargøring af ældre overflader før maling.",
  },
  {
    q: "Hvad koster det at få malet en lejlighed?",
    a: "Prisen afhænger af lejlighedens størrelse og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven eller fået den beskrevet.",
  },
  {
    q: "Kan I male rundt om stuklofter uden at ødelægge dem?",
    a: "Ja, vi arbejder forsigtigt omkring stuklofter, gerichter og andre ældre detaljer, så de bevares intakte, mens de omkringliggende flader males.",
  },
  {
    q: "Kan I fjerne gammelt tapet før maling?",
    a: "Ja, tapetnedtagning er en almindelig del af vores opgaver i ældre lejligheder på Frederiksberg. Vi vurderer underlaget og klargør væggen korrekt, før den nye maling påføres.",
  },
];

export default function MalerFrederiksberg() {
  return (
    <>
      <Helmet>
        <title>Maler Frederiksberg | Malerfirma, indvendig maling & facade</title>
        <meta
          name="description"
          content="Maler på Frederiksberg til ældre etageejendomme og lejligheder. Indvendig maling, tapetnedtagning, stuklofter og facademaling. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler frederiksberg, malerfirma frederiksberg, indvendig maling frederiksberg, facademaling frederiksberg, maler solbjerg, maler flintholm"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-frederiksberg" />

        <meta property="og:title" content="Maler Frederiksberg | Malerfirma, indvendig maling & facade" />
        <meta
          property="og:description"
          content="Professionelt malerfirma på Frederiksberg. Indendørs maling, facademaling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-frederiksberg" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Frederiksberg | Malerfirma, indvendig maling & facade" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma på Frederiksberg. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Frederiksberg
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til lejligheder og ejendomme på Frederiksberg —
              indendørs maling, facademaling og renovering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Frederiksberg
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
              Malerfirma med kendskab til Frederiksberg
            </h2>
            <p className="text-muted-foreground mb-4">
              Frederiksberg er tæt bebygget og kendetegnet ved mange ældre
              etageejendomme med stuklofter, høje paneler og karakteristiske
              facader. Som maler på Frederiksberg møder vi ofte opgaver, der
              kræver både præcision ved detaljerne og erfaring med ældre
              overflader.
            </p>
            <p className="text-muted-foreground mb-4">
              Vi kender også de praktiske forhold ved at arbejde i tæt
              bebyggede områder — adgang via opgange og trapper, hensyn til
              naboer, og begrænset parkering. Det tager vi højde for, når vi
              planlægger en opgave på Frederiksberg.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Frederiksberg, herunder områder omkring{" "}
              <strong>Frederiksberg Allé</strong>, <strong>Solbjerg</strong>,{" "}
              <strong>Flintholm</strong> og <strong>Fasanvej</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Frederiksberg
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
                alt="Indendørs maling af lejlighed"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Indendørs maling af lejligheder
            </h2>
            <p className="text-muted-foreground mb-4">
              Mange af vores opgaver på Frederiksberg handler om indendørs
              maling af lejligheder — vægge, lofter, træværk og paneler, ofte
              med respekt for ældre bygningsdetaljer som stuklofter og
              gerichter.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi klargør altid overfladerne grundigt før maling, så
              resultatet bliver holdbart og professionelt.
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

      {/* ARTICLE — MALING I ÆLDRE LEJLIGHEDER */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Maling i ældre lejligheder på Frederiksberg
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Frederiksberg er en af de tættest bebyggede bydele i
                hovedstadsområdet, og det afspejler sig i boligmassen: mange
                etageejendomme er opført for 80-100 år siden, med stuklofter,
                høje paneler, gerichter og ofte flere lag tapet under den
                nuværende overflade. Det stiller andre krav til malerarbejdet,
                end man ser i nyere byggeri.
              </p>
              <p>
                Stuklofter og gerichter kræver præcisionsarbejde — de
                omkringliggende flader skal males uden at skade detaljerne,
                hvilket ofte betyder grundig afdækning og tålmodighed frem
                for hurtige løsninger. Vægge med ældre tapet skal som regel
                klargøres grundigt: tapetet fjernes, underlaget vurderes, og
                eventuelle ujævnheder eller gammel lim udbedres, før den nye
                maling kan give et jævnt resultat.
              </p>
              <p>
                Den tætte bebyggelse betyder også praktiske hensyn, som ikke
                findes i samme grad andre steder: adgang via opgange og
                trapper, hensyntagen til naboer, og ofte begrænset mulighed
                for at parkere tæt på ejendommen. Vi planlægger altid
                opgaver på Frederiksberg med det for øje, så arbejdet
                forløber så gnidningsfrit som muligt.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: maling i den ældre lejlighed
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {APARTMENT_TABLE.map((row) => (
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
                  {APARTMENT_TABLE.map((row) => (
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
              Sådan planlægger du opgaven bedst
            </h3>
            <ul className="space-y-2">
              {[
                "Fortæl os, om lejligheden har stuklofter eller andre detaljer, der skal beskyttes.",
                "Nævn, om der er gammelt tapet, der skal fjernes, før væggene males.",
                "Afklar adgangsforhold via opgang og trapper, især ved større opgaver.",
                "Aftal, om du bliver boende under arbejdet, eller om enkelte rum midlertidigt skal være tomme.",
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

      {/* ARTICLE — MAN MALER PÅ FREDERIKSBERG */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal lejligheden på Frederiksberg have nyt liv, eller trænger
              ejendommens facade til vedligeholdelse? MAN MALER er din
              lokale maler på Frederiksberg, med erfaring i ældre
              etageejendomme, stuklofter og de praktiske forhold, der følger
              med at arbejde i en tæt bebygget bydel. Vi giver altid et
              gratis, uforpligtende tilbud, efter vi har set opgaven.
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
              MAN MALER: erfaring med Frederiksbergs ældre ejendomme
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Mange af vores opgaver på Frederiksberg handler om at
                genskabe liv i lejligheder, der ikke er blevet malet i mange
                år — ofte med flere lag gammelt tapet, nedslidte paneler og
                stuklofter, der skal behandles med respekt for deres
                oprindelige udtryk. Vi vurderer altid underlaget grundigt,
                før vi anbefaler en løsning, så resultatet bliver holdbart og
                passer til lejlighedens karakter.
              </p>
              <p>
                Udover det indvendige arbejde udfører vi også facademaling og
                udvendig vedligeholdelse på ejendomme på Frederiksberg. Her
                spiller adgangsforhold en større rolle end mange andre
                steder — stillads, lift og materialetransport skal
                koordineres med beboere og eventuelt boligforening, hvilket
                vi altid planlægger i god tid.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af din lejlighed eller ejendom på Frederiksberg.
                Med billeder eller en kort beskrivelse kan vi ofte give en
                indledende vurdering hurtigt; ved større opgaver er en
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
              Vores ydelser på Frederiksberg
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Indendørs maling af lejligheder og ejendomme",
                "Facademaling og udvendig vedligeholdelse",
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
              Malerarbejde i nærheden af Frederiksberg
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-koebenhavn"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i København
                </Link>
                <Link
                  to="/maler-hvidovre"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Hvidovre
                </Link>
                <Link
                  to="/maler-rodovre"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Rødovre
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
              Ofte stillede spørgsmål — Maler på Frederiksberg
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
              Klar til at få malet på Frederiksberg?
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
