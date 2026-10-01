import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import commercialImg from "@/assets/commercial.webp";

const AREAS = ["Næstved Bymidte", "Karrebæksminde", "Fensmark", "Herlufsholm"];

const KEY_TAKEAWAYS = [
  "Næstved har et bredt erhvervsliv, og opgaverne spænder fra kontorer og butikker til institutioner og industrihaller.",
  "Arbejde på skoler og plejehjem planlægges altid uden for brugstid og med lavemitterende maling, hvor det er relevant.",
  "Industrihaller og produktionslokaler stiller særlige krav til slidstyrke og rengøringsvenlighed.",
  "Et samlet tilbud på flere lokaler eller bygninger giver ofte den mest effektive planlægning for erhvervskunder.",
];

const COMMERCIAL_TABLE = [
  {
    p: "Kontor",
    d: "Rolig, professionel farvesætning der understøtter et godt arbejdsmiljø.",
    h: "Planlægges ofte uden for arbejdstid eller i etaper, så driften ikke forstyrres.",
  },
  {
    p: "Butik og showroom",
    d: "Farver og finish, der understøtter brandet og skaber et indbydende rum for kunder.",
    h: "Udføres ofte uden for åbningstid eller i forbindelse med en planlagt lukkeperiode.",
  },
  {
    p: "Skole og institution",
    d: "Robust, rengøringsvenlig maling, der kan tåle høj brug og hyppig rengøring.",
    h: "Lavemitterende maling anbefales, og arbejdet planlægges uden for brugstid af hensyn til brugerne.",
  },
  {
    p: "Plejehjem og sundhedsinstitution",
    d: "Lavemitterende, hygiejnevenlig maling tilpasset beboernes og personalets behov.",
    h: "Kræver tæt koordinering med institutionen om tidspunkt og adgang til lokalerne.",
  },
  {
    p: "Industrihal og produktion",
    d: "Slidstærk, ofte kemikalie- og rengøringsbestandig maling tilpasset produktionsmiljøet.",
    h: "Krav til brandsikring og underlag bør afklares, før materialevalget fastlægges.",
  },
];

const FAQS = [
  {
    q: "Udfører I både bolig- og erhvervsmaling i Næstved?",
    a: "Ja. Næstved er en af Sydsjællands større byer med både boliger og virksomheder, og vi udfører malerarbejde til begge dele.",
  },
  {
    q: "Kan I hjælpe med større erhvervsopgaver?",
    a: "Ja, vi udfører gerne større erhvervsmalingsopgaver til kontorer, butikker og institutioner i Næstved og omegn.",
  },
  {
    q: "Dækker I også Fensmark og Karrebæksminde?",
    a: "Ja, vi dækker hele Næstved Kommune, inklusiv Fensmark, Karrebæksminde og Herlufsholm.",
  },
  {
    q: "Hvad koster det at få malet en bolig i Næstved?",
    a: "Prisen afhænger af boligens størrelse og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set eller fået beskrevet opgaven.",
  },
  {
    q: "Kan I male på skoler, plejehjem eller andre institutioner?",
    a: "Ja, vi udfører gerne malerarbejde på institutioner. Her planlægger vi altid opgaven uden for brugstid, og vi bruger lavemitterende maling, hvor det er relevant af hensyn til brugerne.",
  },
  {
    q: "Udfører I maling af industrihaller og produktionslokaler?",
    a: "Ja, vi maler gerne industrihaller og produktionslokaler, tilpasset de krav der er til slidstyrke, rengøring og eventuel brandsikring i det enkelte lokale.",
  },
];

export default function MalerNaestved() {
  return (
    <>
      <Helmet>
        <title>Maler Næstved | Malerfirma, indvendig maling & erhverv</title>
        <meta
          name="description"
          content="Maler i Næstved til boliger, institutioner og erhverv. Indvendig maling, facademaling og erhvervsmaling til kontorer og industrihaller. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler næstved, malerfirma næstved, indvendig maling næstved, facademaling næstved, maler fensmark, erhvervsmaling næstved"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-naestved" />

        <meta property="og:title" content="Maler Næstved | Malerfirma, indvendig maling & erhverv" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Næstved. Indendørs maling, facademaling og erhvervsmaling. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-naestved" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Næstved | Malerfirma, indvendig maling & erhverv" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Næstved. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Næstved
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til boliger og virksomheder i Næstved — indendørs
              og udendørs maling, renovering og erhvervsmaling.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Næstved Kommune
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
              Malerfirma med erfaring fra Næstved
            </h2>
            <p className="text-muted-foreground mb-4">
              Næstved på Sydsjælland er en af regionens større byer med
              både ældre og nyere boligområder samt et bredt erhvervsliv.
              Som maler i Næstved udfører vi derfor både boligmaling for
              private og erhvervsmaling til virksomheder og institutioner.
            </p>
            <p className="text-muted-foreground mb-4">
              Vi tilpasser altid tilbuddet efter opgavens omfang, uanset om
              det er en enkelt lejlighed eller en større erhvervsejendom.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Næstved Kommune, herunder{" "}
              <strong>Fensmark</strong>, <strong>Karrebæksminde</strong> og{" "}
              <strong>Herlufsholm</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Næstved
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
              Erhvervsmaling i Næstved
            </h2>
            <p className="text-muted-foreground mb-4">
              Næstved har et bredt erhvervsliv, og erhvervsmaling er en
              fast del af vores arbejde her — fra kontorer og butikker til
              større institutioner.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi planlægger altid arbejdet, så det passer ind i
              virksomhedens hverdag og forstyrrer driften mindst muligt.
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

      {/* ARTICLE — ERHVERVSMALING I NÆSTVED */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Erhvervsmaling til Næstveds virksomheder og institutioner
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Næstved er en af Sydsjællands største byer, og det
                afspejles i bredden af erhvervsopgaver, vi løser her —
                kontorer, butikker, skoler, plejehjem og industrihaller har
                hver især deres egne krav til maling, planlægning og
                materialevalg. Som maler i Næstved tilpasser vi altid
                tilgangen efter lokalets brug og de mennesker, der færdes
                der til daglig.
              </p>
              <p>
                På skoler og plejehjem lægger vi særlig vægt på at planlægge
                arbejdet uden for brugstid og at bruge lavemitterende
                maling, så beboere, elever og personale generes mindst
                muligt. I butikker og showrooms handler det ofte om at
                ramme den rigtige farve og finish til brandet, mens
                arbejdet typisk udføres uden for åbningstid eller i en
                planlagt lukkeperiode.
              </p>
              <p>
                I industrihaller og produktionslokaler stiller opgaven
                andre krav: her skal malingen ofte kunne tåle kemikalier,
                hyppig rengøring og slid fra daglig drift, og eventuelle
                krav til brandsikring skal afklares, før materialevalget
                fastlægges.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: erhvervsmaling efter lokaletype
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {COMMERCIAL_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Lokaletype</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Vigtige egenskaber</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Planlægning og opmærksomhedspunkter</th>
                  </tr>
                </thead>
                <tbody>
                  {COMMERCIAL_TABLE.map((row) => (
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
              Sådan planlægger du erhvervsopgaven
            </h3>
            <ul className="space-y-2">
              {[
                "Fortæl os, om lokalet er i brug under arbejdet, så vi kan planlægge tidspunktet rigtigt.",
                "Nævn, om der er særlige krav til lavemission, hygiejne eller brandsikring.",
                "Få et samlet tilbud, hvis flere lokaler eller bygninger skal males i samme forløb.",
                "Afklar adgangsforhold og eventuelle driftstider, før arbejdet planlægges endeligt.",
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

      {/* ARTICLE — MAN MALER I NÆSTVED */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal kontoret, skolen eller boligen i Næstved have et nyt lag
              maling? MAN MALER er din lokale maler i Næstved, med erfaring i
              både private boliger og det brede erhvervsliv, byen og omegn
              rummer. Vi giver altid et gratis, uforpligtende tilbud, efter
              vi har set eller fået beskrevet opgaven.
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
              MAN MALER: fra boligmaling til store erhvervsopgaver
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Næstved er en by i vækst, med både ældre og nyere
                boligområder samt et bredt erhvervsliv, der spænder fra
                mindre kontorer til store produktionsvirksomheder. Den
                variation betyder, at vi løbende tilpasser vores
                tilgang — en privat lejlighed kræver en anden planlægning end
                en skole eller en produktionshal, hvor driften ikke må
                forstyrres unødigt.
              </p>
              <p>
                Ved større erhvervsopgaver lægger vi vægt på at give et
                tilbud, der er til at forstå, uanset om det drejer sig om
                en enkelt bygning eller flere lokaler, der skal males i
                samme forløb. Vi koordinerer altid tidspunkt og adgang med
                kunden, så arbejdet passer ind i den daglige drift, hvad
                enten det er en virksomhed, en institution eller en privat
                bolig.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af din opgave i Næstved-området — uanset om det er
                en bolig, der skal males, eller en erhvervsopgave, der
                kræver særlig planlægning.
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
              Vores ydelser i Næstved
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Erhvervsmaling til kontorer og institutioner",
                "Indendørs maling af boliger",
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
              Malerarbejde i nærheden af Næstved
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
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
              Ofte stillede spørgsmål — Maler i Næstved
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
              Klar til at få malet i Næstved?
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
