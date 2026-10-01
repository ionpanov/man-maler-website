import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

const AREAS = ["Glostrup by", "Hvissinge", "Ejby", "Stadion-området"];

const KEY_TAKEAWAYS = [
  "Mange rækkehuse i Glostrup ligger i andelsboligforeninger, hvor facadefarve skal godkendes af bestyrelsen.",
  "Et samlet tilbud til flere rækkehuse i samme forening kan ofte give en mere effektiv planlægning.",
  "Klinikker og sundhedsfaciliteter kræver hygiejnevenlige overflader og planlægning uden for patienttid.",
  "Grundig klargøring af vinduer og træværk er afgørende for et holdbart resultat på ældre rækkehuse.",
];

const HOUSING_TABLE = [
  {
    p: "Facade (andelsbolig/ejerforening)",
    d: "Farve og materiale skal ofte matche foreningens godkendte facadeplan.",
    h: "Afklar godkendelse hos bestyrelsen, før farve vælges endeligt.",
  },
  {
    p: "Facade (privat villa)",
    d: "Vejrbestandig facademaling tilpasset husets materiale og stil.",
    h: "Afrensning og reparation af puds eller træværk bør vurderes først.",
  },
  {
    p: "Vinduer og træværk",
    d: "Slidstærk træmaling med god hæftning til ældre, ofte tidligere malet træ.",
    h: "Afrensning af gamle malingslag giver det mest holdbare resultat.",
  },
  {
    p: "Venteværelse og klinik",
    d: "Rengøringsvenlig, hygiejnisk maling, der tåler hyppig afrensning.",
    h: "Planlægges typisk uden for åbningstid, så patienter ikke forstyrres.",
  },
  {
    p: "Personalefaciliteter (sundhedssektor)",
    d: "Robust, neutral maling der understøtter et roligt arbejdsmiljø.",
    h: "Koordineres med klinikkens drift for mindst mulig forstyrrelse.",
  },
];

const FAQS = [
  {
    q: "Maler I villaer og rækkehuse i Glostrup?",
    a: "Ja. Glostrup har mange rækkehuse og villaer, og vi udfører både facademaling og indendørs maling tilpasset boligtypen.",
  },
  {
    q: "Hvor lang tid tager en typisk maleropgave i Glostrup?",
    a: "Det afhænger af opgavens omfang. Vi kommer altid ud og ser opgaven, før vi giver en konkret tidsplan og et tilbud.",
  },
  {
    q: "Dækker I også Hvissinge og Ejby?",
    a: "Ja, vi dækker hele Glostrup Kommune, inklusiv Hvissinge, Ejby og området omkring Glostrup Stadion.",
  },
  {
    q: "Hvad koster det at få malet et rækkehus i Glostrup?",
    a: "Prisen afhænger af husets størrelse og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
  {
    q: "Skal facaden godkendes af andelsboligforeningen, før den males?",
    a: "I mange af Glostrups andelsboligforeninger og ejerforeninger skal facadefarve og materialer godkendes af bestyrelsen, før arbejdet går i gang. Vi hjælper gerne med at afklare dette og tilpasser tilbuddet til foreningens retningslinjer.",
  },
  {
    q: "Udfører I malerarbejde i sundhedssektoren, f.eks. klinikker?",
    a: "Ja, vi maler gerne venteværelser, kontorer og personalefaciliteter på klinikker og i sundhedssektoren, med fokus på hygiejnevenlige overflader og planlægning, der ikke forstyrrer patienter eller personale.",
  },
];

export default function MalerGlostrup() {
  return (
    <>
      <Helmet>
        <title>Maler Glostrup | Malerfirma, rækkehuse & sundhedssektor</title>
        <meta
          name="description"
          content="Maler i Glostrup til rækkehuse, andelsboliger og sundhedssektoren. Indvendig maling, facademaling og hygiejnevenlige overflader. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler glostrup, malerfirma glostrup, indvendig maling glostrup, facademaling glostrup, maler hvissinge, maler ejby"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-glostrup" />

        <meta property="og:title" content="Maler Glostrup | Malerfirma, rækkehuse & sundhedssektor" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Glostrup. Facademaling, indendørs maling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-glostrup" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Glostrup | Malerfirma, rækkehuse & sundhedssektor" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Glostrup. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Glostrup
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til villaer, rækkehuse og erhverv i Glostrup —
              facademaling, indendørs maling og renovering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Glostrup Kommune
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
              Malerfirma med erfaring fra Glostrup
            </h2>
            <p className="text-muted-foreground mb-4">
              Glostrup er en pendlerby tæt på København med mange rækkehuse
              og villaer. Som maler i Glostrup udfører vi ofte facademaling,
              vinduesmaling og indendørs renovering for boligejere i
              kommunen.
            </p>
            <p className="text-muted-foreground mb-4">
              Vi lægger altid vægt på grundig forberedelse af overfladerne
              før maling, så resultatet holder i mange år.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Glostrup Kommune, herunder{" "}
              <strong>Hvissinge</strong> og <strong>Ejby</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Glostrup
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
                src={exteriorImg}
                alt="Facademaling af villa"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Facademaling i Glostrup
            </h2>
            <p className="text-muted-foreground mb-4">
              Facademaling er en af de mest efterspurgte opgaver i
              Glostrup-området — ofte kombineret med vinduesmaling og
              mindre reparationer af puds eller træværk.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi bruger vejrbestandige materialer, der er tilpasset det
              danske klima, og rådgiver gerne om farvevalg.
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

      {/* ARTICLE — ANDELSBOLIGER OG SUNDHEDSSEKTOR */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Rækkehuse, andelsboliger og sundhedssektoren i Glostrup
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Glostrup er kendetegnet ved mange rækkehuse, hvoraf en stor
                del er organiseret i andelsboligforeninger eller
                ejerforeninger. Her er facademaling sjældent en individuel
                beslutning: farve og materialer skal typisk godkendes af
                bestyrelsen, så hele bebyggelsen fremstår ensartet. Vi
                hjælper gerne med at afklare foreningens retningslinjer, før
                vi giver et tilbud, så der ikke opstår overraskelser
                undervejs.
              </p>
              <p>
                Når flere rækkehuse i samme forening skal males samtidig,
                giver det ofte god mening at samle opgaven i ét forløb — det
                kan både give en mere effektiv planlægning og en mere
                ensartet pris for de involverede husstande.
              </p>
              <p>
                Glostrup har desuden en betydelig sundhedssektor, og vi
                udfører gerne malerarbejde i klinikker, venteværelser og
                personalefaciliteter. Her er kravene anderledes end i en
                privat bolig: overfladerne skal være hygiejnevenlige og
                nemme at rengøre, og arbejdet planlægges typisk uden for
                åbningstid, så patienter og personale ikke forstyrres.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: bolig og sundhedssektor i Glostrup
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {HOUSING_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Flade eller lokale</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Vigtige egenskaber</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Forarbejde og opmærksomhedspunkter</th>
                  </tr>
                </thead>
                <tbody>
                  {HOUSING_TABLE.map((row) => (
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
              Sådan planlægger du opgaven
            </h3>
            <ul className="space-y-2">
              {[
                "Afklar med bestyrelsen, om facadefarve og materialer skal godkendes først.",
                "Få et samlet tilbud, hvis flere rækkehuse i samme forening skal males.",
                "Nævn, om opgaven er en klinik eller sundhedsfacilitet, så vi kan planlægge uden for åbningstid.",
                "Vælg hygiejnevenlig maling i venteværelser og personalefaciliteter.",
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

      {/* ARTICLE — MAN MALER I GLOSTRUP */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal rækkehuset have ny facade efter godkendelse fra
              andelsboligforeningen, eller skal klinikken have malet
              venteværelset? MAN MALER er din lokale maler i Glostrup, med
              erfaring i både boligforeningers krav og sundhedssektorens
              behov for hygiejnevenlige overflader. Vi giver altid et
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
              MAN MALER: boligforeninger og sundhedssektor i Glostrup
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Vi har erfaring med den praktiske proces omkring
                andelsboligforeninger og ejerforeninger i Glostrup — fra at
                afklare, hvad der skal godkendes af bestyrelsen, til at give
                et tilbud, der dækker flere rækkehuse i samme forening.
                Det gør processen enklere for alle parter og sikrer et
                ensartet resultat på tværs af bebyggelsen.
              </p>
              <p>
                I sundhedssektoren stiller vi skarpt på hygiejne og
                planlægning. Overflader i klinikker og venteværelser skal
                kunne tåle hyppig rengøring, og arbejdet koordineres altid
                med klinikkens drift, så patienter og personale forstyrres
                mindst muligt.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af din opgave i Glostrup — uanset om det er et
                rækkehus, der skal godkendes af en forening, eller en
                sundhedsfacilitet, der kræver særlig planlægning.
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
              Vores ydelser i Glostrup
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling og udendørs vedligeholdelse",
                "Vinduesmaling og træbeskyttelse",
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
              Malerarbejde i nærheden af Glostrup
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
                  to="/maler-herlev"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Herlev
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
              Ofte stillede spørgsmål — Maler i Glostrup
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
              Klar til at få malet i Glostrup?
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
