import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

const AREAS = ["Køge Bymidte", "Ølby", "Ll. Skensved", "Herfølge"];

const KEY_TAKEAWAYS = [
  "Køges gamle bykerne har mange bevaringsværdige huse, hvor farvevalg og materialer bør respektere bygningens oprindelige udtryk.",
  "Bindingsværk kræver en anden teknik end pudsede facader, så træet kan ånde korrekt.",
  "Nyere boligområder som Ølby og Ll. Skensved stiller mere almindelige krav til facade- og indvendig maling.",
  "Tjek altid eventuelle kommunale retningslinjer for farver, før du vælger facadefarve i den historiske bykerne.",
];

const SURFACE_TABLE = [
  {
    p: "Bindingsværk",
    d: "Åndbar maling, der følger træets naturlige bevægelser og ikke lukker fugt inde.",
    h: "Kræver vurdering af træets stand og ofte reparation af udtørrede eller rådne dele før maling.",
  },
  {
    p: "Pudsede facader (ældre huse)",
    d: "Materialer der passer til den oprindelige puds og respekterer husets alder og stil.",
    h: "Farvevalg bør tjekkes op mod eventuelle kommunale retningslinjer for bevaringsværdige bygninger.",
  },
  {
    p: "Facader på nyere huse",
    d: "Almindelig vejrbestandig facademaling tilpasset husets materiale (tegl, puds eller træ).",
    h: "Færre restriktioner end i bykernen, men stadig behov for grundig afrensning før maling.",
  },
  {
    p: "Gamle vinduer med sprosser",
    d: "Slidstærk træmaling, der kan påføres præcist omkring små glasfelter og sprosser.",
    h: "Tidskrævende arbejde — afsæt ekstra tid til afrensning og flere tynde lag.",
  },
  {
    p: "Indvendigt i ældre huse",
    d: "Maling tilpasset høje lofter, stukkatur og ældre vægge, der kan være ujævne.",
    h: "Grundig vurdering af underlaget er vigtig, da ældre vægge ofte skjuler tidligere reparationer.",
  },
];

const FAQS = [
  {
    q: "Har I erfaring med de historiske bygninger i Køges bykerne?",
    a: "Ja. Køges ældre bykerne har mange historiske bygninger med karakteristiske facader, og vi tager særligt hensyn til det ved forberedelse og valg af materialer.",
  },
  {
    q: "Maler I også nyere boligområder som Ølby?",
    a: "Ja, vi udfører malerarbejde i både den historiske bykerne og de nyere boligområder omkring Køge, som Ølby og Ll. Skensved.",
  },
  {
    q: "Dækker I også Herfølge?",
    a: "Ja, vi dækker hele Køge Kommune, inklusiv Herfølge og de omkringliggende landsbyer.",
  },
  {
    q: "Hvad koster det at få malet et hus i Køge?",
    a: "Prisen afhænger af husets størrelse, alder og stand. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set opgaven.",
  },
  {
    q: "Er der særlige regler for farver på huse i den gamle bykerne?",
    a: "Mange bevaringsværdige bygninger i Køges bykerne har retningslinjer for facadefarver fra kommunen eller en lokal bevaringsplan. Vi hjælper gerne med at afklare, hvad der gælder for netop dit hus, før vi vælger farve.",
  },
  {
    q: "Kan I male bindingsværk?",
    a: "Ja, bindingsværk kræver en anden teknik og type maling end en almindelig pudset facade. Vi vurderer træets stand og bruger materialer, der lader træet ånde korrekt.",
  },
];

export default function MalerKoge() {
  return (
    <>
      <Helmet>
        <title>Maler Køge | Malerfirma, indvendig maling & facade</title>
        <meta
          name="description"
          content="Maler i Køge til historiske huse og nyere boliger. Indvendig maling, bindingsværk og facademaling i den gamle bykerne og omegn. Gratis tilbud."
        />
        <meta
          name="keywords"
          content="maler køge, malerfirma køge, indvendig maling køge, facademaling køge, maler ølby, maler herfølge"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/maler-koge" />

        <meta property="og:title" content="Maler Køge | Malerfirma, indvendig maling & facade" />
        <meta
          property="og:description"
          content="Professionelt malerfirma i Køge. Indvendig maling, facademaling og renovering. Gratis og uforpligtende tilbud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/maler-koge" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maler Køge | Malerfirma, indvendig maling & facade" />
        <meta
          name="twitter:description"
          content="Professionelt malerfirma i Køge. Gratis og uforpligtende tilbud."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Maler i Køge
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Malerfirma til historiske huse og nyere boliger i Køge —
              facademaling, indendørs maling og renovering.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker hele Køge Kommune
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
              Malerfirma med erfaring fra Køge
            </h2>
            <p className="text-muted-foreground mb-4">
              Køge er en købstad med en ældre bykerne og nyere boligområder
              udenfor. Som maler i Køge tilpasser vi vores arbejde efter
              begge dele — fra historiske bygninger med bindingsværk og
              gamle facader til moderne rækkehuse og villaer.
            </p>
            <p className="text-muted-foreground mb-4">
              Ved arbejde i den historiske bykerne tager vi særligt hensyn
              til bygningernes karakter og bruger materialer, der passer til
              facadens alder og stil.
            </p>
            <p className="text-muted-foreground">
              Vi dækker hele Køge Kommune, herunder <strong>Ølby</strong>,{" "}
              <strong>Ll. Skensved</strong> og <strong>Herfølge</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              Vi dækker hele Køge
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
                alt="Facademaling af hus i Køge"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Facademaling af historiske huse
            </h2>
            <p className="text-muted-foreground mb-4">
              Huse i Køges ældre bykerne kræver ofte ekstra omhu ved
              facademaling — korrekt afrensning, reparation af puds og
              træværk, samt materialer, der respekterer bygningens
              oprindelige udtryk.
            </p>
            <p className="text-muted-foreground mb-6">
              Vi rådgiver gerne om farvevalg, der passer til husets alder og
              det omkringliggende gadebillede.
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

      {/* ARTICLE — MALING I BYKERNEN OG NYERE OMRÅDER */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Maling af historiske huse og nyere boliger i Køge
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                Køge er en af de ældre købstæder på Sjælland, og det ses
                tydeligt i bykernen med bindingsværkshuse, pudsede facader og
                gamle vinduer med sprosser. Samtidig har kommunen nyere
                boligområder som Ølby og Ll. Skensved, hvor husene er bygget
                efter helt andre principper. Som maler i Køge arbejder vi
                derfor med to meget forskellige tilgange, alt efter hvor
                huset ligger og hvor gammelt det er.
              </p>
              <p>
                I den historiske bykerne handler det først og fremmest om at
                respektere bygningens oprindelige udtryk. Bindingsværk skal
                behandles med åndbar maling, der følger træets bevægelser,
                mens pudsede facader ofte kræver materialer, der passer til
                den oprindelige puds. Mange af disse huse er desuden
                bevaringsværdige, hvilket kan betyde, at kommunen har
                retningslinjer for, hvilke facadefarver der er tilladt —
                noget vi altid anbefaler at afklare, inden arbejdet
                planlægges.
              </p>
              <p>
                I de nyere boligområder omkring Køge er kravene mere
                almindelige: vejrbestandig facademaling tilpasset husets
                materiale, samt indendørs maling af nyere vægge og lofter,
                der sjældent kræver samme grad af specialbehandling som de
                gamle huse i bykernen.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Overblik: maling efter husets alder og type
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {SURFACE_TABLE.map((row) => (
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
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Flade eller bygningstype</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Vigtige egenskaber</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Forarbejde og opmærksomhedspunkter</th>
                  </tr>
                </thead>
                <tbody>
                  {SURFACE_TABLE.map((row) => (
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
              Sådan planlægger du malerarbejdet rigtigt
            </h3>
            <ul className="space-y-2">
              {[
                "Afklar om huset er bevaringsværdigt og om der gælder regler for facadefarver.",
                "Vælg åndbar maling til bindingsværk, så træet ikke lukkes inde.",
                "Få vurderet pudsede facaders stand, før farve og materiale vælges.",
                "Afsæt ekstra tid til gamle vinduer med sprosser, da arbejdet er mere detaljeret.",
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

      {/* ARTICLE — MAN MALER I KØGE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skal det bindingsværkshus i Køges bykerne have nyt liv, eller
              trænger villaen i Ølby til indvendig maling? MAN MALER er din
              lokale maler i Køge, med erfaring i både den historiske
              bykerne og de nyere boligområder i kommunen. Vi giver altid
              et gratis, uforpligtende tilbud, efter vi har set opgaven.
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
              MAN MALER: erfaring med Køges historiske bykerne
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                At male et hus i Køges bykerne er en anden opgave end at male
                et nyere rækkehus i udkanten af kommunen. Vi besigtiger altid
                huset, før vi giver et tilbud, så vi kan vurdere facadens
                materiale, husets alder og eventuelle bevaringshensyn, der
                skal tages. Det gælder især bindingsværk og ældre pudsede
                facader, hvor forkert maling kan gøre mere skade end gavn.
              </p>
              <p>
                Vi hjælper også gerne med at afklare, om et hus er omfattet
                af kommunale retningslinjer for facadefarver, så du undgår
                at vælge en farve, der senere skal laves om. I de nyere
                boligområder som Ølby, Ll. Skensved og Herfølge er processen
                mere ligetil, men vi lægger stadig vægt på grundigt
                forarbejde og et tilbud, der er til at forstå.
              </p>
              <p>
                Kontakt MAN MALER, hvis du vil have en uforpligtende
                vurdering af dit hus i Køge-området — uanset om det er et
                gammelt hus i bykernen eller en nyere bolig i omegnen.
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
              Vores ydelser i Køge
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facademaling af historiske og nyere huse",
                "Indendørs maling af villaer og rækkehuse",
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
              Malerarbejde i nærheden af Køge
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/maler-greve"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Greve
                </Link>
                <Link
                  to="/maler-roskilde"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Roskilde
                </Link>
                <Link
                  to="/maler-naestved"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  Maler i Næstved
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
              Ofte stillede spørgsmål — Maler i Køge
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
              Klar til at få malet i Køge?
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
