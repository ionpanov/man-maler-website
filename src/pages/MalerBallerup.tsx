import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import renovationImg from "@/assets/renovation.webp";

const AREAS = [
  "Ballerup by", "Skovlunde", "Måløv", "Smørum", "Tapeten", "Egebjerg",
];

const KEY_TAKEAWAYS = [
  "Ballerup har mange kontorvirksomheder, og brandfarver i reception og mødelokaler bør matches præcist.",
  "Reception og kundearealer kan ofte males i etaper, så virksomheden holder åbent under arbejdet.",
  "Kontorlandskaber og mødelokaler stiller forskellige krav til farve, akustik og slidstyrke.",
  "Et samlet tilbud på flere lokaler i samme bygning giver ofte den mest effektive planlægning.",
];

const OFFICE_TABLE = [
  {
    p: "Reception og kundeareal",
    d: "Professionel farvesætning, der matcher virksomhedens brand og skaber et godt førstehåndsindtryk.",
    h: "Planlægges ofte i etaper eller uden for travle tidspunkter, så kunder ikke generes.",
  },
  {
    p: "Mødelokaler",
    d: "Rolige, professionelle farver der understøtter koncentration og møder.",
    h: "Kan ofte males på en enkelt dag, hvis lokalet ikke er i brug.",
  },
  {
    p: "Kontorlandskab (åbent kontor)",
    d: "Lyse, neutrale farver der understøtter et godt arbejdsmiljø i store, åbne rum.",
    h: "Planlægges typisk uden for arbejdstid eller i etaper for at undgå driftsforstyrrelser.",
  },
  {
    p: "Kantine og personalerum",
    d: "Rengøringsvenlig, vaskbar maling der tåler daglig brug og rengøring.",
    h: "God ventilation under arbejdet er vigtig i rum, der bruges til mad og ophold.",
  },
  {
    p: "Facade (erhvervsbygning)",
    d: "Vejrbestandig facademaling, der giver et professionelt udtryk udefra.",
    h: "Afrensning og eventuel reparation af facaden bør vurderes før maling.",
  },
];

const FAQS = [
  {
    q: "Udfører I malerarbejde i både villaer og etageejendomme i Ballerup?",
    a: "Ja. Ballerup har en blanding af villakvarterer, rækkehuse og etageejendomme, og vi tilpasser løsningen efter boligtypen — fra facademaling på en villa til indendørs maling i en lejlighed.",
  },
  {
    q: "Hvor lang tid tager det at få malet et hus i Ballerup?",
    a: "Det afhænger af opgavens omfang og husets stand. Vi kommer altid ud og ser opgaven, før vi giver en tidsplan og et konkret tilbud.",
  },
  {
    q: "Dækker I også Skovlunde og Måløv?",
    a: "Ja, vi dækker hele Ballerup Kommune, inklusiv Skovlunde, Måløv, Smørum og de omkringliggende områder.",
  },
  {
    q: "Kan I hjælpe med erhvervsmaling til virksomheder i Ballerup?",
    a: "Ja, vi udfører erhvervsmaling til kontorer, butikker og erhvervslokaler i Ballerup, ofte planlagt uden for normal arbejdstid for at undgå at forstyrre driften.",
  },
  {
    q: "Hvad koster malerarbejde i Ballerup?",
    a: "Prisen afhænger af opgavens omfang, overfladernes stand og materialevalg. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set eller fået beskrevet opgaven.",
  },
  {
    q: "Kan I male efter virksomhedens brandfarver?",
    a: "Ja, vi matcher gerne specifikke brandfarver til reception, mødelokaler og kontorlandskaber, så virksomhedens visuelle identitet bliver ensartet i hele lokalet.",
  },
  {
    q: "Kan reception og kundeareal males, mens virksomheden har åbent?",
    a: "I mange tilfælde ja, hvis arbejdet planlægges i etaper eller uden for travle tidspunkter. Vi aftaler altid en løsning, der generer kunder og medarbejdere mindst muligt.",
  },
];

export default function MalerBallerup() {
  return (
    <>
      <Helmet>
        <title>Maler Ballerup | Malerfirma, kontorer & erhverv</title>
        <meta
          name="description"
          content="Maler i Ballerup til kontorvirksomheder, villaer og rækkehuse. Indvendig maling med brandfarver, facademaling og erhvervsmaling. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler ballerup, malerfirma ballerup, indvendig maling ballerup, facademaling ballerup, maler skovlunde, maler måløv, erhvervsmaling kontor"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-ballerup" />

        <meta property="og:title" content="Maler Ballerup | Malerfirma, kontorer & erhverv" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Ballerup. Indendørs maling, facademaling, renovering og erhvervsmaling. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-ballerup" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Ballerup | Malerfirma, kontorer & erhverv" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Ballerup. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Ballerup
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til villaer, rækkehuse, lejligheder og erhverv i
              Ballerup Kommune — indendørs og udendørs maling, renovering og
              erhvervsmaling.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Ballerup Kommune
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
              Malerfirma til Ballerup og omegn
            </h2>
            <p className="text-muted-foreground mb-4">
              Ballerup i den vestlige del af Storkøbenhavn har en bred vifte
              af boligtyper — fra villakvarterer og rækkehuse til nyere
              etageejendomme og erhvervsområder. Som maler i Ballerup møder vi
              derfor både opgaver med facademaling af villaer og indendørs
              maling i lejligheder.
            </p>
            <p className="text-muted-foreground mb-4">
              Uanset om du har brug for en enkelt renoveret stue, en hel
              facade malet, eller en løbende aftale om vedligeholdelse af
              erhvervslokaler, tilpasser vi løsningen efter opgaven og giver
              altid et gratis og uforpligtende tilbud, før arbejdet går i
              gang.
            </p>
            <p className="text-muted-foreground">
              Vi dækker <strong>Ballerup by</strong> samt de omkringliggende
              områder som <strong>Skovlunde</strong>, <strong>Måløv</strong>{" "}
              og <strong>Smørum</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Ballerup Kommune
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
                alt="Renovering og malerarbejde"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Renovering og klargøring af overflader
            </h2>
            <p className="text-muted-foreground mb-4">
              Mange af vores opgaver i Ballerup-området starter med grundig
              klargøring — spartling, reparation af overflader og korrekt
              grundbehandling — inden selve malerarbejdet går i gang. Det
              sikrer et resultat, der holder i mange år.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi arbejder med både private boliger og erhvervsejendomme, og
              planlægger altid opgaven, så den passer ind i din hverdag.
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

      {/* ARTICLE — KONTORMALING OG BRANDFARVER */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Kontormaling og brandfarver til virksomheder i Ballerup
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Ballerup rummer et stort antal kontorvirksomheder, og her
                handler malerarbejde ofte om mere end blot at vælge en pæn
                farve. Reception og kundearealer er virksomhedens ansigt
                udadtil, og mange ønsker at matche malingen til deres
                brandfarver, så det visuelle udtryk er ensartet, uanset om
                en besøgende sidder i receptionen eller i et mødelokale.
              </p>
              <p>
                Et af de praktiske spørgsmål, der ofte kommer op, er,
                hvordan man maler, uden at virksomheden skal lukke. Vi
                planlægger derfor gerne arbejdet i etaper, eller uden for
                de tidspunkter, hvor der er flest kunder eller møder, så
                driften kan fortsætte så normalt som muligt under
                malerarbejdet.
              </p>
              <p>
                Kontorlandskaber, mødelokaler og kantiner stiller alle
                forskellige krav til maling — fra lyse, neutrale farver i
                åbne kontorer til rengøringsvenlige overflader i rum, hvor
                der spises. Vi rådgiver gerne om, hvilken løsning der passer
                bedst til det enkelte lokale.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: maling af kontor- og erhvervslokaler
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {OFFICE_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Lokale</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Vigtige egenskaber</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Planlægning og opmærksomhedspunkter</th>
                  </tr>
                </thead>
                <tbody>
                  {OFFICE_TABLE.map((row) => (
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
              Sådan planlægger du kontoropgaven
            </h3>
            <ul className="space-y-2">
              {[
                "Oplys eventuelle brandfarver, så vi kan matche dem præcist.",
                "Fortæl os, om virksomheden skal holde åbent under arbejdet, så vi kan planlægge i etaper.",
                "Vælg rengøringsvenlig maling til kantine og personalerum.",
                "Få et samlet tilbud, hvis flere lokaler i bygningen skal males.",
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

      {/* ARTICLE — MAN MALER I BALLERUP */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal kontoret have nye brandfarver i receptionen, eller
              trænger villaen til facademaling? MAN MALER er din lokale
              maler i Ballerup, med erfaring i både kontorvirksomheder og
              private boliger i kommunen. Vi giver altid et gratis,
              uforpligtende tilbud, efter vi har set eller fået beskrevet
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
              MAN MALER: fra kontormaling til private boliger
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Vi løser løbende opgaver for kontorvirksomheder i Ballerup,
                hvor vi matcher brandfarver præcist og planlægger arbejdet,
                så det forstyrrer driften mindst muligt. Samtidig har vi
                stor erfaring med private boliger — fra villaer og
                rækkehuse til lejligheder, hvor opgaven kan være alt fra en
                enkelt stue til en hel facade.
              </p>
              <p>
                Uanset opgavens type starter vi altid med en vurdering af,
                hvad der skal males, og hvilke krav der er til farve,
                finish og tidsplan. Det giver et tilbud, der er til at
                forstå, og en proces, der passer til både virksomheder og
                private boligejere.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af din opgave i Ballerup — uanset om det er et
                kontor, der skal matche virksomhedens brand, eller en
                bolig, der trænger til et nyt udtryk.
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
              Vores ydelser i Ballerup
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Indendørs maling af lejligheder, villaer og rækkehuse",
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
              Malerarbejde i nærheden af Ballerup
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-herlev"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Herlev
                </Link>
                <Link
                  to="/maler-glostrup"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Glostrup
                </Link>
                <Link
                  to="/maler-taastrup"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Taastrup
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
              Ofte stillede spørgsmål — Maler i Ballerup
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
              Klar til at få malet i Ballerup?
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
