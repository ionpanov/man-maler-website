import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import interiorImg from "@/assets/interior.webp";

const AREAS = ["Ishøj Strand", "Vejleåparken", "Torslunde", "Ishøj Landsby"];

const KEY_TAKEAWAYS = [
  "I almene boliger afgør A- eller B-ordningen, hvem der betaler for maling ved fraflytning.",
  "Hurtig maling mellem fraflytning og indflytning er vigtigt, så lejligheden kan udlejes videre uden unødigt tomgang.",
  "Standardfarver og vaskbare overflader gør det lettere at klargøre boligen til ny lejer.",
  "Et samlet tilbud på flere lejligheder i samme boligafdeling giver ofte den mest effektive planlægning.",
];

const RENTAL_TABLE = [
  {
    p: "Stue og værelser",
    d: "Neutral, standardfarve der passer til de fleste lejere og er let at vedligeholde.",
    h: "Huller efter billeder og møbler bør udbedres, før der males.",
  },
  {
    p: "Entré",
    d: "Slidstærk maling, der kan tåle hyppig berøring og rengøring.",
    h: "Ofte den flade, der viser mest slid ved fraflytning.",
  },
  {
    p: "Køkken",
    d: "Vaskbar maling, der kan modstå fedt og hyppig rengøring.",
    h: "Fedtpletter og misfarvninger bør afrenses grundigt før maling.",
  },
  {
    p: "Badeværelse",
    d: "Fugtbestandig maling uden skimmelpletter eller afskalning.",
    h: "Fugtskader bør udbedres, før der males, så problemet ikke vender tilbage.",
  },
  {
    p: "Vinduer og karme",
    d: "Slidstærk træmaling, der kan tåle kystens vind og vejr.",
    h: "Afrensning af gammel maling giver det mest holdbare resultat.",
  },
];

const FAQS = [
  {
    q: "Maler I både lejligheder og villaer i Ishøj?",
    a: "Ja. Ishøj har blandet boligbyggeri tæt på kysten, fra etageejendomme til villaer, og vi tilpasser løsningen efter boligtypen.",
  },
  {
    q: "Kan I hjælpe med opgaver tæt på kysten, hvor vind og vejr slider mere?",
    a: "Ja, vi bruger vejrbestandige materialer, der er tilpasset kystnære forhold, og rådgiver gerne om det rigtige valg til din bolig.",
  },
  {
    q: "Dækker I også Torslunde og Ishøj Landsby?",
    a: "Ja, vi dækker hele Ishøj Kommune, inklusiv Torslunde, Ishøj Landsby og Vejleåparken.",
  },
  {
    q: "Hvad koster malerarbejde i Ishøj?",
    a: "Prisen afhænger af opgavens omfang og boligens stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set eller fået beskrevet opgaven.",
  },
  {
    q: "Hvem betaler for maling ved fraflytning i en almen bolig?",
    a: "Det afhænger af, om boligafdelingen bruger A-ordning eller B-ordning. Under B-ordningen betales der løbende ind via huslejen, og boligorganisationen sørger typisk for maling ved fraflytning. Under A-ordningen vedligeholder beboeren selv boligen i lejeperioden. Vi hjælper gerne med at afklare, hvad der gælder for netop din bolig.",
  },
  {
    q: "Kan I male en lejlighed hurtigt mellem to lejere?",
    a: "Ja, vi udfører gerne maling mellem fraflytning og indflytning i almene boliger, og tilpasser tidsplanen, så lejligheden kan udlejes videre så hurtigt som muligt.",
  },
];

export default function MalerIshoj() {
  return (
    <>
      <Helmet>
        <title>Maler Ishøj | Malerfirma, almene boliger & villaer</title>
        <meta
          name="description"
          content="Maler i Ishøj til almene boliger, lejligheder og villaer. Indvendig maling ved fraflytning, facademaling og renovering. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler ishøj, malerfirma ishøj, indvendig maling ishøj, facademaling ishøj, maler vejleåparken, maler torslunde"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-ishoj" />

        <meta property="og:title" content="Maler Ishøj | Malerfirma, almene boliger & villaer" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Ishøj. Indendørs maling, facademaling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-ishoj" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Ishøj | Malerfirma, almene boliger & villaer" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Ishøj. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Ishøj
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til boliger og erhverv i Ishøj — indendørs og
              udendørs maling, renovering og erhvervsmaling.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Ishøj Kommune
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
              Malerfirma med erfaring fra Ishøj
            </h2>
            <p className="text-muted-foreground mb-4">
              Ishøj i den sydvestlige del af Storkøbenhavn har blandet
              boligbyggeri tæt på kysten — fra etageejendomme til villaer og
              rækkehuse. Som maler i Ishøj tilpasser vi løsningen efter
              boligtypen og de forhold, den kystnære beliggenhed giver.
            </p>
            <p className="text-muted-foreground mb-4">
              Vind og vejr fra kysten kan slide mere på facader, så vi
              lægger ekstra vægt på vejrbestandige materialer og korrekt
              forbehandling.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Ishøj Kommune, herunder{" "}
              <strong>Vejleåparken</strong>, <strong>Torslunde</strong> og{" "}
              <strong>Ishøj Landsby</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Ishøj
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

      {/* ARTICLE — MALING I ALMENE BOLIGER VED FRAFLYTNING */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Maling af almene boliger i Ishøj ved fraflytning
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Ishøj har mange almene boliger, blandt andet i Vejleåparken,
                og her gælder andre regler for maling end i en privat
                udlejningsbolig. Boligafdelingen bruger enten A-ordning eller
                B-ordning: under B-ordningen betales der løbende ind via
                huslejen, og boligorganisationen sørger typisk for maling
                ved fraflytning, mens beboeren under A-ordningen selv
                vedligeholder boligen i lejeperioden.
              </p>
              <p>
                Uanset ordning er det vigtigt, at malerarbejdet udføres
                hurtigt og ensartet mellem fraflytning og indflytning, så
                lejligheden kan udlejes videre uden unødig tomgang. Vi
                arbejder derfor ofte med standardfarver og vaskbare
                overflader, der både er lette at vedligeholde og hurtige at
                påføre i et stramt tidsforløb.
              </p>
              <p>
                Ishøj ligger desuden tæt på kysten, hvilket betyder, at
                vinduer, karme og eventuelle facader er mere udsat for vind
                og vejr end længere inde i landet. Det tager vi med i
                vurderingen, når vi anbefaler materialer til både almene
                boliger og private villaer i området.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: maling ved fraflytning i almen bolig
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {RENTAL_TABLE.map((row) => (
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
                  {RENTAL_TABLE.map((row) => (
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
              Sådan planlægger du fraflytningsmalingen
            </h3>
            <ul className="space-y-2">
              {[
                "Afklar, om boligafdelingen bruger A-ordning eller B-ordning, før arbejdet aftales.",
                "Vælg standardfarver og vaskbare overflader, der passer til de fleste kommende lejere.",
                "Få et samlet tilbud, hvis flere lejligheder skal males i samme boligafdeling.",
                "Planlæg tidspunktet stramt, så lejligheden kan udlejes videre hurtigst muligt.",
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
                alt="Indendørs maling af lejlighed"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Indendørs maling i Ishøj
            </h2>
            <p className="text-muted-foreground mb-4">
              Vi udfører indendørs maling af lejligheder og huse i Ishøj —
              vægge, lofter og træværk, altid med grundig afdækning og
              forberedelse af overfladerne.
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

      {/* ARTICLE — MAN MALER I ISHØJ */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal lejligheden i Vejleåparken males før ny lejer flytter ind,
              eller trænger villaen tæt på kysten til facademaling? MAN
              MALER er din lokale maler i Ishøj, med erfaring i både almene
              boliger og private huse i kommunen. Vi giver altid et gratis,
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
              MAN MALER: erfaring med Ishøjs almene boliger
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Vi har stor erfaring med den praktiske proces omkring
                fraflytning i almene boliger — fra at afklare, hvilken
                vedligeholdelsesordning der gælder, til at levere et tilbud,
                der passer til boligorganisationens krav og tidsplan. Det
                gør processen enklere for både boligafdeling og
                beboerservice.
              </p>
              <p>
                For private boligejere i Ishøj, især tæt på kysten, lægger vi
                vægt på vejrbestandige materialer, der kan modstå vind og
                salt fra havet. Uanset om opgaven er en enkelt lejlighed
                eller en hel boligafdeling, giver vi altid et tilbud, der er
                til at forstå.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af din opgave i Ishøj — uanset om det er en almen
                bolig, der skal klargøres til ny lejer, eller en privat
                villa, der trænger til vedligeholdelse.
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
              Vores ydelser i Ishøj
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Indendørs maling af lejligheder og villaer",
                "Facademaling med vejrbestandige materialer",
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
              Malerarbejde i nærheden af Ishøj
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-albertslund"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Albertslund
                </Link>
                <Link
                  to="/maler-brondby"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Brøndby
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
              Ofte stillede spørgsmål — Maler i Ishøj
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
              Klar til at få malet i Ishøj?
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
