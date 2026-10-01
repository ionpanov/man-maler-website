import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import commercialImg from "@/assets/commercial.webp";

const AREAS = ["Herlev Bygade", "Hjortespring", "Kildegård", "Herlev Hospital-området"];

const KEY_TAKEAWAYS = [
  "Kædebutikker ønsker ofte ensartede brandfarver på tværs af flere lokationer.",
  "Butiksfacader kan som regel males om aftenen eller i weekenden, uden at butikken skal lukke.",
  "Displayvinduer og skiltefelter kræver præcisionsarbejde, så varer og skilte forbliver synlige.",
  "Et samlet tilbud på flere butikker i samme kæde giver ofte den mest effektive planlægning.",
];

const RETAIL_TABLE = [
  {
    p: "Butiksfacade og indgangsparti",
    d: "Professionel facademaling, der matcher kædens brandfarver og skaber et indbydende indtryk.",
    h: "Planlægges typisk om aftenen eller i weekenden, så butikken kan holde åbent.",
  },
  {
    p: "Displayvinduer og skiltefelter",
    d: "Præcisionsarbejde, der holder kanter skarpe omkring glas og skilte.",
    h: "Grundig afdækning er nødvendig for at undgå malingsstænk på glas og inventar.",
  },
  {
    p: "Butikslokale (indvendigt)",
    d: "Farver der understøtter kædens brand og skaber en indbydende atmosfære for kunder.",
    h: "Udføres ofte uden for åbningstid eller i etaper for at undgå at forstyrre handlen.",
  },
  {
    p: "Kontor bag butikken",
    d: "Rolig, professionel farvesætning til administrative opgaver.",
    h: "Kan ofte males samtidig med butikslokalet for en samlet proces.",
  },
  {
    p: "Lager og bagrum",
    d: "Robust, rengøringsvenlig maling tilpasset daglig brug og transport af varer.",
    h: "Mindre krav til finish end kundevendte arealer, men stadig behov for holdbarhed.",
  },
];

const FAQS = [
  {
    q: "Udfører I både bolig- og erhvervsmaling i Herlev?",
    a: "Ja. Herlev har en blanding af boligblokke, villakvarterer og erhvervsområder, og vi udfører både indendørs maling for private og erhvervsmaling til virksomheder i kommunen.",
  },
  {
    q: "Kan I male udenfor normal arbejdstid ved erhvervsopgaver?",
    a: "Ja, vi planlægger gerne erhvervsmaling om aftenen eller i weekenden, så det ikke forstyrrer den daglige drift.",
  },
  {
    q: "Dækker I også Hjortespring og Kildegård?",
    a: "Ja, vi dækker hele Herlev Kommune, inklusiv Hjortespring, Kildegård og området omkring Herlev Hospital.",
  },
  {
    q: "Hvad koster malerarbejde i Herlev?",
    a: "Prisen afhænger af opgavens omfang og overfladernes stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set eller fået beskrevet opgaven.",
  },
  {
    q: "Kan I male flere butikslokationer med samme brandfarve?",
    a: "Ja, vi matcher gerne brandfarver på tværs af flere lokationer, så kædens butikker fremstår ensartet, uanset hvor de ligger.",
  },
  {
    q: "Kan butiksfacaden males, uden at butikken skal lukke?",
    a: "I mange tilfælde ja. Vi planlægger gerne arbejdet om aftenen eller i weekenden, så butikken kan holde åbent i den normale åbningstid.",
  },
];

export default function MalerHerlev() {
  return (
    <>
      <Helmet>
        <title>Maler Herlev | Malerfirma, butikker & erhverv</title>
        <meta
          name="description"
          content="Maler i Herlev til butikker, kæder og boliger. Indvendig maling med brandfarver, facademaling og erhvervsmaling uden lukketid. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler herlev, malerfirma herlev, erhvervsmaling herlev, indvendig maling herlev, maler hjortespring, maler kildegård, facademaling butik"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-herlev" />

        <meta property="og:title" content="Maler Herlev | Malerfirma, butikker & erhverv" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Herlev. Indendørs maling, facademaling og erhvervsmaling. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-herlev" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Herlev | Malerfirma, butikker & erhverv" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Herlev. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Herlev
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til boliger og virksomheder i Herlev — indendørs og
              udendørs maling, renovering og erhvervsmaling.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Herlev Kommune
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
              Malerfirma med erfaring fra Herlev
            </h2>
            <p className="text-muted-foreground mb-4">
              Herlev har en blanding af boligblokke, villakvarterer og store
              erhvervsområder. Som maler i Herlev udfører vi derfor både
              indendørs maling for private boligejere og erhvervsmaling til
              virksomheder, kontorer og institutioner i området.
            </p>
            <p className="text-muted-foreground mb-4">
              Ved erhvervsopgaver planlægger vi gerne arbejdet uden for
              normal arbejdstid, så det ikke forstyrrer den daglige drift.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Herlev Kommune, herunder{" "}
              <strong>Hjortespring</strong>, <strong>Kildegård</strong> og
              området omkring <strong>Herlev Hospital</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Herlev
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
                src={commercialImg}
                alt="Erhvervsmaling af kontor"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Erhvervsmaling i Herlev
            </h2>
            <p className="text-muted-foreground mb-4">
              Herlev har mange virksomheder og erhvervsejendomme, og
              erhvervsmaling er en fast del af vores arbejde i området — fra
              kontorer og butikker til større institutioner.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi tilpasser altid tidsplanen efter virksomhedens behov, så
              driften kan fortsætte uforstyrret.
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

      {/* ARTICLE — BUTIKS- OG KÆDEMALING I HERLEV */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Butiks- og kædemaling i Herlev
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Herlev har et stort handelsliv, og mange af vores
                erhvervsopgaver her handler om butikker og kæder, der skal
                fremstå ensartede på tværs af flere lokationer. Det gælder
                både facaden og butikslokalet indvendigt: brandfarver skal
                matches præcist, så kunden oplever den samme visuelle
                identitet, uanset hvilken butik i kæden de besøger.
              </p>
              <p>
                Et af de praktiske spørgsmål, der ofte går igen, er, hvordan
                man maler en butiksfacade uden at skulle lukke. Vi planlægger
                derfor gerne arbejdet om aftenen eller i weekenden, så
                butikken kan holde åbent i den normale åbningstid. Det
                kræver grundig planlægning, men betyder, at omsætningen ikke
                påvirkes af malerarbejdet.
              </p>
              <p>
                Displayvinduer og skiltefelter kræver desuden
                præcisionsarbejde — kanter omkring glas og skilte skal være
                skarpe, og grundig afdækning er nødvendig for at undgå
                malingsstænk på varer og inventar.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: maling af butik og erhverv
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {RETAIL_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Flade eller lokale</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Vigtige egenskaber</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Planlægning og opmærksomhedspunkter</th>
                  </tr>
                </thead>
                <tbody>
                  {RETAIL_TABLE.map((row) => (
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
              Sådan planlægger du butiksopgaven
            </h3>
            <ul className="space-y-2">
              {[
                "Oplys kædens brandfarver, så vi kan matche dem præcist på tværs af lokationer.",
                "Fortæl os, om butikken skal holde åbent under arbejdet, så vi kan planlægge aften eller weekend.",
                "Afdæk displayvinduer og skiltefelter grundigt for et skarpt resultat.",
                "Få et samlet tilbud, hvis flere butikker i kæden skal males.",
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

      {/* ARTICLE — MAN MALER I HERLEV */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal butikskæden have ensartede brandfarver på tværs af flere
              lokationer, eller trænger boligen til et nyt lag maling? MAN
              MALER er din lokale maler i Herlev, med erfaring i både
              detailhandel og private boliger i kommunen. Vi giver altid et
              gratis, uforpligtende tilbud, efter vi har set eller fået
              beskrevet opgaven.
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
              MAN MALER: ensartet brand på tværs af butikslokationer
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Vi har erfaring med at matche brandfarver præcist, så en
                kædes butikker fremstår ensartede, uanset hvor i Herlev —
                eller i resten af Storkøbenhavn — de ligger. Det gælder
                både facaden, der møder kunden udefra, og butikslokalet
                indvendigt.
              </p>
              <p>
                Vi planlægger altid arbejdet, så det passer ind i butikkens
                åbningstider og drift — ofte ved at male om aftenen eller i
                weekenden, så omsætningen ikke påvirkes. Ved siden af
                erhvervsopgaverne udfører vi også indendørs maling,
                facademaling og renovering for private boligejere i hele
                Herlev Kommune.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af din opgave i Herlev — uanset om det er en
                butik, der skal matche en kædes brand, eller en bolig, der
                trænger til et nyt udtryk.
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
              Vores ydelser i Herlev
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Erhvervsmaling til kontorer og butikker",
                "Indendørs maling af lejligheder og villaer",
                "Facademaling og udendørs vedligeholdelse",
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
              Malerarbejde i nærheden af Herlev
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-ballerup"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Ballerup
                </Link>
                <Link
                  to="/maler-glostrup"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Glostrup
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
              Ofte stillede spørgsmål — Maler i Herlev
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
              Klar til at få malet i Herlev?
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
