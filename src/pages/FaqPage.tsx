import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Clock, MapPin, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { CITIES, SERVICE_PAGES } from "@/lib/cities";
import interiorImg from "@/assets/interior.webp";

const ORIGIN = "https://manmaler.dk";
const PATH = "/ofte-stillede-spoergsmaal";

interface Faq {
  q: string;
  a: string;
  more?: { to: string; label: string };
}

const GROUPS: { id: string; title: string; faqs: Faq[] }[] = [
  {
    id: "tilbud-og-pris",
    title: "Tilbud og pris",
    faqs: [
      {
        q: "Er et tilbud fra MAN MALER gratis?",
        a: "Ja. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set eller fået beskrevet opgaven. Du betaler ikke for besigtigelse eller tilbud.",
        more: { to: "/kontakt", label: "Få et gratis tilbud" },
      },
      {
        q: "Hvordan får jeg et tilbud?",
        a: "Send billeder, mål og en kort beskrivelse af opgaven via kontaktformularen, eller ring til os. Ved større opgaver kommer vi ud og besigtiger. Du får et skriftligt tilbud med omfang, antal strøg og materialer.",
        more: { to: "/kontakt", label: "Gå til kontaktformularen" },
      },
      {
        q: "Hvad koster en maler?",
        a: "Prisen afhænger af opgavens omfang, underlagets stand, antal strøg, adgangsforhold og materialer. To rum af samme størrelse kan have forskellig pris, fordi forarbejdet fylder mest. Derfor giver vi et skriftligt tilbud frem for et løst prisoverslag.",
        more: { to: "/ydelser/indendoers-maling", label: "Se, hvad der påvirker prisen på indvendig maling" },
      },
      {
        q: "Hvorfor kan I ikke give en pris pr. kvadratmeter i telefonen?",
        a: "Fordi en kvadratmeterpris sjældent siger noget om den rigtige pris. Huller, revner, tapet, nikotinpletter, loftshøjde og adgangsforhold kan ændre opgaven meget. Med billeder eller en besigtigelse kan vi give et tilbud, du kan stole på.",
      },
      {
        q: "Hvor hurtigt svarer I på en henvendelse?",
        a: "Vi svarer som udgangspunkt inden for 24 timer.",
      },
    ],
  },
  {
    id: "forloeb-og-praktik",
    title: "Forløb og praktiske spørgsmål",
    faqs: [
      {
        q: "Hvor lang tid i forvejen skal jeg booke en maler?",
        a: "Jo tidligere, jo bedre. Facademaling er sæsonbetonet og bookes bedst i god tid før foråret, mens indvendig maling ofte kan planlægges med kortere varsel. Kontakt os, så fortæller vi, hvornår vi kan starte.",
        more: { to: "/ydelser/facademaling", label: "Læs om facademaling og det rette tidspunkt" },
      },
      {
        q: "Skal jeg selv flytte møblerne?",
        a: "Mindre møbler flytter og afdækker vi. Ønsker du, at vi også håndterer tungere møbler, aftaler vi det på forhånd, så det fremgår af tilbuddet.",
      },
      {
        q: "Kan jeg blive boende, mens I maler?",
        a: "I mange tilfælde ja, især ved enkelte rum. Ved større opgaver og renoveringer anbefaler vi, at de berørte rum midlertidigt ikke bruges. Det giver et bedre resultat og et kortere forløb.",
        more: { to: "/ydelser/renovering", label: "Læs om renovering og istandsættelse" },
      },
      {
        q: "Hvad sker der med afdækning og oprydning?",
        a: "Gulve, møbler og installationer dækkes af, før vi begynder. Når arbejdet er færdigt, fjerner vi afdækningen, rydder op og gennemgår resultatet sammen med dig.",
      },
      {
        q: "Hvad hvis jeg ikke er tilfreds med resultatet?",
        a: "Vi gennemgår altid resultatet sammen med dig ved afleveringen. Mangler noget, eller lever noget ikke op til aftalen, så kontakt os, og vi finder en løsning.",
      },
    ],
  },
  {
    id: "ydelser",
    title: "Ydelser",
    faqs: [
      {
        q: "Hvilke ydelser tilbyder MAN MALER?",
        a: "Vi udfører indvendig maling, facademaling, renovering og istandsættelse samt erhvervsmaling for private boligejere og virksomheder.",
        more: { to: "/ydelser", label: "Se alle vores ydelser" },
      },
      {
        q: "Hvad er forskellen på indvendig maling og renovering?",
        a: "Indvendig maling er maling af vægge, lofter og træværk på et underlag, der er i rimelig stand. Renovering er, når overfladerne først skal bringes tilbage i stand, for eksempel efter fugt- eller skimmelskader, med omfattende spartling eller sammen med andre håndværkere.",
        more: { to: "/ydelser/renovering", label: "Læs mere om renovering" },
      },
      {
        q: "Maler I både for private og for virksomheder?",
        a: "Ja. Vi maler lejligheder, villaer og rækkehuse, og kontorer, butikker, institutioner og lagerlokaler. Erhvervsopgaver planlægger vi efter virksomhedens drift.",
        more: { to: "/ydelser/erhvervsmaling", label: "Læs mere om erhvervsmaling" },
      },
      {
        q: "Kan I hjælpe med at vælge farve?",
        a: "Ja. Vi rådgiver gerne om kulører, glans og materialer ud fra rummets lys, brug og stil, og for facader ud fra husets alder og omgivelser.",
      },
    ],
  },
  {
    id: "omraader",
    title: "Områder",
    faqs: [
      {
        q: "Hvilke områder dækker I?",
        a: "Vi dækker København og hele Sjælland, blandt andet Frederiksberg, Gentofte, Lyngby, Herlev, Ballerup, Glostrup, Rødovre, Hvidovre, Brøndby, Ishøj, Albertslund, Taastrup, Hedehusene, Greve, Roskilde, Køge, Hillerød, Helsingør og Næstved.",
        more: { to: "/omraader", label: "Se alle områder" },
      },
      {
        q: "Kommer I også ud til opgaver uden for byerne?",
        a: "Ja. Ligger opgaven på Sjælland, men uden for de byer, vi har sider om, så kontakt os, og vi vurderer opgaven.",
        more: { to: "/kontakt", label: "Kontakt os om din opgave" },
      },
      {
        q: "Kommer I ud og besigtiger, før I giver et tilbud?",
        a: "Ved større opgaver og ældre huse besigtiger vi altid. Ved mindre opgaver kan vi ofte give et tilbud ud fra billeder, mål og en beskrivelse.",
      },
    ],
  },
];

const ALL_FAQS = GROUPS.flatMap((group) => group.faqs);

export default function FaqPage() {
  const url = `${ORIGIN}${PATH}`;
  const title = "Ofte stillede spørgsmål om maler | MAN MALER";
  const description =
    "Svar på de mest stillede spørgsmål om malerarbejde: tilbud og pris, forløb, indvendig maling, facademaling, renovering og områder. Få et gratis tilbud.";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Forside", item: `${ORIGIN}/` },
      { "@type": "ListItem", position: 2, name: "Ofte stillede spørgsmål", item: url },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="ofte stillede spørgsmål maler, maler pris, malerfirma spørgsmål, tilbud maler, indvendig maling, facademaling, renovering"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${ORIGIN}/og-image.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative pt-12 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <nav aria-label="Brødkrumme" className="mb-8 flex justify-center">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground">
              <li className="flex items-center gap-1">
                <Link to="/" className="hover:text-primary hover:underline">Forside</Link>
                <ChevronRight size={14} aria-hidden="true" />
              </li>
              <li aria-current="page" className="text-foreground font-medium">Ofte stillede spørgsmål</li>
            </ol>
          </nav>
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Ofte stillede spørgsmål om maler og malerarbejde
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Her finder du svar på det, vores kunder oftest spørger om: tilbud og pris, hvordan et forløb foregår, og
              hvad vi kan hjælpe med i København og på Sjælland.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" />
                Gratis og uforpligtende tilbud
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                Svar inden for 24 timer
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Dækker København og hele Sjælland
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

      {/* IMAGE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={interiorImg}
                alt="Maler i gang med indvendigt malerarbejde"
                width={800}
                height={600}
                loading="eager"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Få svar, før du beslutter dig
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                De fleste spørgsmål handler om det samme: hvad det koster, hvor lang tid det tager, og hvad der skal
                være klart, før vi starter. Svarene her gælder for alle vores ydelser.
              </p>
              <p>
                Mangler du et svar, eller har din opgave særlige forhold, så skriv til os via{" "}
                <Link to="/kontakt" className="text-primary hover:underline">kontaktformularen</Link>.
              </p>
            </div>
            <nav aria-label="Spring til emne" className="mt-6 flex flex-wrap gap-2">
              {GROUPS.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="px-4 py-2 rounded-full bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  {group.title}
                </a>
              ))}
            </nav>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ GROUPS */}
      {GROUPS.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          className={`py-20 px-6 scroll-mt-24 ${index % 2 === 0 ? "" : "bg-card"}`}
        >
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-10 text-foreground">
                {group.title}
              </h2>
              <div className="space-y-8">
                {group.faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    {faq.more && (
                      <Link to={faq.more.to} className="inline-block mt-2 text-primary font-medium hover:underline">
                        {faq.more.label} →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* SERVICES + CITIES */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-card-foreground text-center">
              Læs mere om vores ydelser
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-14">
              {SERVICE_PAGES.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block p-5 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition border border-border"
                >
                  <span className="font-semibold text-foreground block mb-1">{service.name} →</span>
                  <span className="text-sm text-muted-foreground">{service.blurb}</span>
                </Link>
              ))}
            </div>

            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-card-foreground text-center">
              Maler i dit område
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {CITIES.map((city) => (
                <Link
                  key={city.path}
                  to={city.path}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
                >
                  <MapPin size={14} className="text-primary flex-shrink-0" />
                  Maler i {city.name}
                </Link>
              ))}
            </div>
            <div className="text-center flex flex-col items-center gap-2">
              <Link to="/ydelser" className="text-primary font-medium hover:underline">
                Se alle vores malerydelser →
              </Link>
              <Link to="/referencer" className="text-sm text-muted-foreground hover:underline">
                Se vores referencer →
              </Link>
              <Link to="/om-os" className="text-sm text-muted-foreground hover:underline">
                Læs mere om MAN MALER →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden bg-primary">
        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
              Fandt du ikke svar på dit spørgsmål?
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
