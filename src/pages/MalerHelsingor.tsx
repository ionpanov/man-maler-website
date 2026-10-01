import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import renovationImg from "@/assets/renovation.webp";

const AREAS = ["Helsingør Bymidte", "Snekkersten", "Espergærde", "Nordre Strandvej"];

const KEY_TAKEAWAYS = [
  "Helsingørs status som turistby betyder, at mange boliger bruges til korttidsudlejning, hvor hurtig klargøring er vigtig.",
  "Facademaling og større opgaver planlægges med fordel uden for højsæsonen.",
  "Kystklimaet slider ekstra på vinduer og facader, så vejrbestandige materialer er vigtige.",
  "Slidstærke, vaskbare overflader gør det lettere at holde en udlejningsbolig præsentabel mellem gæster.",
];

const RENTAL_TOURISM_TABLE = [
  {
    p: "Gæsteværelser og udlejningsbolig",
    d: "Slidstærk, vaskbar maling der holder præsentabel mellem skiftende gæster.",
    h: "Hurtig tørretid er vigtig, så boligen kan tages i brug kort efter malingen.",
  },
  {
    p: "Facade (synlig for gæster)",
    d: "Vejrbestandig facademaling, der giver et indbydende førstehåndsindtryk.",
    h: "Planlægges med fordel uden for højsæsonen, hvor der er færre gæster.",
  },
  {
    p: "Vinduer og udvendige døre",
    d: "Slidstærk træmaling, der kan modstå kystens vind og saltholdige luft.",
    h: "Kystklimaet øger behovet for hyppigere vedligeholdelse.",
  },
  {
    p: "Trappeopgang (udlejningsejendom)",
    d: "Robust, rengøringsvenlig maling, der kan tåle høj trafik af gæster.",
    h: "Planlægges ofte i stille perioder for at undgå at forstyrre gæster.",
  },
  {
    p: "Historisk facade (bykernen)",
    d: "Materialer der respekterer husets alder og det historiske gadebillede.",
    h: "Grundig afrensning og reparation af puds er ofte nødvendigt før maling.",
  },
];

const FAQS = [
  {
    q: "Har I erfaring med ældre huse i Helsingørs historiske bykerne?",
    a: "Ja. Helsingør har en historisk bykerne med mange ældre huse, og facademaling her kræver ofte ekstra forberedelse af gamle overflader — det har vi erfaring med.",
  },
  {
    q: "Maler I også villaer langs kysten?",
    a: "Ja, vi udfører facademaling og indendørs maling af villaer i kystnære områder som Snekkersten og Espergærde, med materialer tilpasset det kystnære klima.",
  },
  {
    q: "Dækker I hele Helsingør Kommune?",
    a: "Ja, vi dækker hele Helsingør Kommune, inklusiv Snekkersten, Espergærde og området omkring Nordre Strandvej.",
  },
  {
    q: "Hvad koster det at få malet et hus i Helsingør?",
    a: "Prisen afhænger af husets størrelse, alder og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
  {
    q: "Kan I male en udlejningsbolig hurtigt mellem to gæster?",
    a: "Ja, vi udfører gerne maling af korttidsudlejede boliger og værelser, hvor hurtig gennemførelse er vigtig, så boligen kan tages i brug igen uden unødig ventetid.",
  },
  {
    q: "Er der et bedste tidspunkt at male en udlejningsbolig i en turistby?",
    a: "Ja, det giver ofte bedst mening at planlægge facademaling og større opgaver uden for højsæsonen, hvor efterspørgslen på udlejning typisk er lavere.",
  },
];

export default function MalerHelsingor() {
  return (
    <>
      <Helmet>
        <title>Maler Helsingør | Malerfirma, udlejning & historisk bykerne</title>
        <meta
          name="description"
          content="Maler i Helsingør til udlejningsboliger, historiske huse og kystvillaer. Indvendig maling, hurtig klargøring og facademaling. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler helsingør, malerfirma helsingør, indvendig maling helsingør, facademaling helsingør, maler snekkersten, maler espergærde"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-helsingor" />

        <meta property="og:title" content="Maler Helsingør | Malerfirma, udlejning & historisk bykerne" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Helsingør. Facademaling, indendørs maling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-helsingor" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Helsingør | Malerfirma, udlejning & historisk bykerne" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Helsingør. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Helsingør
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til historiske huse og kystvillaer i Helsingør —
              facademaling, indendørs maling og renovering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Helsingør Kommune
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
              Malerfirma med erfaring fra Helsingør
            </h2>
            <p className="text-muted-foreground mb-4">
              Helsingør er en kystby med en historisk bykerne og mange
              ældre huse. Som maler i Helsingør møder vi ofte opgaver, der
              kræver grundig forberedelse af gamle overflader, samt villaer
              langs kysten, hvor vind og saltvand slider ekstra på
              facaderne.
            </p>
            <p className="text-muted-foreground mb-4">
              Vi tilpasser altid materialevalget efter husets beliggenhed og
              de forhold, det er udsat for.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Helsingør Kommune, herunder{" "}
              <strong>Snekkersten</strong> og <strong>Espergærde</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Helsingør
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

      {/* ARTICLE — UDLEJNINGSBOLIGER I EN TURISTBY */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Maling af udlejningsboliger i Helsingør
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Helsingørs status som turistby, med Kronborg og
                færgeforbindelsen til Sverige som nogle af byens kendetegn,
                betyder, at mange boliger i og omkring bykernen bruges til
                korttidsudlejning. Det stiller andre krav til malerarbejdet
                end en almindelig bolig: overfladerne skal kunne tåle hyppig
                brug og rengøring, og arbejdet skal ofte udføres hurtigt, så
                boligen hurtigst muligt kan tages i brug igen.
              </p>
              <p>
                Vi anbefaler typisk slidstærke, vaskbare overflader i
                gæsteværelser og fællesarealer, samt hurtigtørrende maling,
                der minimerer den tid, boligen er ude af drift. Større
                opgaver som facademaling planlægger vi gerne uden for
                højsæsonen, hvor der er færre gæster og mindre pres på
                udlejningen.
              </p>
              <p>
                Udover udlejningsboliger har Helsingør også en historisk
                bykerne med mange ældre huse, hvor facademaling kræver
                grundig forberedelse af gamle overflader, samt kystnære
                villaer, hvor vind og saltvand stiller krav til
                vejrbestandige materialer.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: maling til udlejning og historisk bykerne
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {RENTAL_TOURISM_TABLE.map((row) => (
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
                  {RENTAL_TOURISM_TABLE.map((row) => (
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
                "Fortæl os, om boligen bruges til korttidsudlejning, så vi kan planlægge en hurtig løsning.",
                "Vælg slidstærke, vaskbare overflader til gæsteværelser og fællesarealer.",
                "Planlæg facademaling uden for højsæsonen, hvis muligt.",
                "Afsæt ekstra tid til historiske facader, der kræver grundig forberedelse.",
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
                src={renovationImg}
                alt="Renovering af ældre hus"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Renovering af ældre huse
            </h2>
            <p className="text-muted-foreground mb-4">
              Mange huse i Helsingørs bykerne kræver grundig renovering af
              overfladerne, før de kan males — reparation af puds,
              vinduesrammer og gamle malinglag skal fjernes korrekt.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi tager altid en grundig gennemgang, før vi giver et tilbud,
              så du ved præcis, hvad opgaven indebærer.
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

      {/* ARTICLE — MAN MALER I HELSINGØR */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal udlejningsboligen klargøres hurtigt til næste gæst, eller
              trænger det historiske hus i bykernen til facademaling? MAN
              MALER er din lokale maler i Helsingør, med erfaring i både
              korttidsudlejning og ældre bygninger. Vi giver altid et
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
              MAN MALER: erfaring med Helsingørs turistbolig og bykerne
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Vi kender de praktiske krav, der følger med at drive
                udlejningsboliger i en turistby — hurtig gennemførelse,
                holdbare overflader og planlægning, der tager hensyn til
                sæsonen. Samtidig har vi erfaring med Helsingørs historiske
                bykerne, hvor ældre facader kræver en helt anden tilgang end
                en nyere udlejningsbolig.
              </p>
              <p>
                Uanset om opgaven er et enkelt gæsteværelse, en hel
                udlejningsejendom eller en historisk facade, besigtiger vi
                altid grundigt, før vi giver et tilbud, så du ved præcis,
                hvad opgaven indebærer og hvor lang tid den tager.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af din opgave i Helsingør-området — uanset om det
                er en udlejningsbolig, der skal klargøres hurtigt, eller et
                ældre hus, der trænger til renovering.
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
              Vores ydelser i Helsingør
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling af historiske og kystnære huse",
                "Indendørs maling af villaer og lejligheder",
                "Renovering, spartling og klargøring af overflader",
                "Træbeskyttelse tilpasset kystklimaet",
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
              Malerarbejde i nærheden af Helsingør
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-hillerod"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Hillerød
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
              Ofte stillede spørgsmål — Maler i Helsingør
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
              Klar til at få malet i Helsingør?
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
