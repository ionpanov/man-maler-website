import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ServicePageTemplate, { ServicePageData, ServicePageLabels } from "@/components/ServicePageTemplate";
import { useI18n } from "@/lib/i18n";
import { B2B_PAGE_PATH, B2B_PAGE_PATH_EN } from "@/lib/cities";
import hallwayImg from "@/assets/b2b-team-hallway.webp";
import paintedWallImg from "@/assets/b2b-painted-wall.webp";

import g1t from "@/assets/b2b-gallery-1-t.webp";
import g1f from "@/assets/b2b-gallery-1-f.webp";
import g2t from "@/assets/b2b-gallery-2-t.webp";
import g2f from "@/assets/b2b-gallery-2-f.webp";
import g3t from "@/assets/b2b-gallery-3-t.webp";
import g3f from "@/assets/b2b-gallery-3-f.webp";
import g4t from "@/assets/b2b-gallery-4-t.webp";
import g4f from "@/assets/b2b-gallery-4-f.webp";
import g5t from "@/assets/b2b-gallery-5-t.webp";
import g5f from "@/assets/b2b-gallery-5-f.webp";
import g6t from "@/assets/b2b-gallery-6-t.webp";
import g6f from "@/assets/b2b-gallery-6-f.webp";
import g7t from "@/assets/b2b-gallery-7-t.webp";
import g7f from "@/assets/b2b-gallery-7-f.webp";

const link = "text-primary hover:underline";

const ORIGIN = "https://manmaler.dk";
const alternates = [
  { hreflang: "da", href: `${ORIGIN}${B2B_PAGE_PATH}` },
  { hreflang: "en", href: `${ORIGIN}${B2B_PAGE_PATH_EN}` },
  { hreflang: "x-default", href: `${ORIGIN}${B2B_PAGE_PATH}` },
];

const daData: ServicePageData = {
  lang: "da",
  alternates,
  path: "/b2b",
  name: "B2B-samarbejde",
  serviceType: "Malerarbejde for virksomheder og samarbejde med andre firmaer",
  title: "Malerfirma til virksomheder | B2B-samarbejde – MAN MALER",
  description:
    "MAN MALER samarbejder med virksomheder, entreprenører og ejendomsadministratorer om malerarbejde. Fast kontaktperson, klar tidsplan og gratis tilbud.",
  keywords:
    "b2b maler, malerfirma til virksomheder, underentreprenør maler, rammeaftale maler, maler til erhverv, ejendomsadministrator maler, malerarbejde entreprenør",
  breadcrumb: [{ name: "Forside", to: "/" }, { name: "B2B" }],
  h1: "Malerfirma til virksomheder og samarbejdspartnere",
  lead:
    "Vi maler for virksomheder og samarbejder med entreprenører, ejendomsadministratorer og andre fagfolk. Fast kontaktperson, klar tidsplan og et tilbud, der er til at forstå.",
  heroPoints: ["Gratis og uforpligtende tilbud", "Svar inden for 24 timer", "Dækker København og hele Sjælland"],
  image: {
    src: hallwayImg,
    alt: "To malere i en entré, klar til at gå i gang med istandsættelsen",
  },
  images: [
    { src: hallwayImg, alt: "To malere i en entré, klar til at gå i gang med istandsættelsen" },
    { src: paintedWallImg, alt: "Maler ved en nymalet væg med stuklister i en lejlighed" },
  ],
  imageHeading: "Malerarbejde, der passer ind i jeres forretning",
  imageParagraphs: [
    "For en virksomhed handler et malerprojekt om mere end maling. Lokalerne skal kunne bruges, kunder og medarbejdere må ikke forstyrres, og tidsplanen skal holde.",
    "Derfor arbejder vi struktureret: en fast kontaktperson hos os, et skriftligt tilbud med omfang og tidsplan, og en aflevering, hvor vi gennemgår resultatet sammen med jer.",
  ],
  summary: {
    heading: "Kort fortalt",
    items: [
      "Vi arbejder både direkte for virksomheder og som samarbejdspartner for andre firmaer.",
      "I får en fast kontaktperson og en skriftlig tidsplan.",
      "Arbejdet planlægges efter jeres drift, også uden for åbningstid.",
      "Enkeltopgave, flere lokationer eller løbende vedligeholdelse: vi tilpasser aftalen.",
    ],
  },
  intro: {
    heading: "Hvem samarbejder vi med?",
    paragraphs: [
      <>
        Vi har to slags samarbejder. Det ene er direkte for virksomheder, der har brug for malerarbejde i egne lokaler:
        kontorer, butikker, institutioner, lagerlokaler og ejendomme. Her kan du se, hvordan vi griber det an, på siden
        om <Link to="/ydelser/erhvervsmaling" className={link}>erhvervsmaling</Link>.
      </>,
      "Det andet er samarbejde med andre firmaer. Vi kan indgå som underentreprenør eller specialist i større projekter, for eksempel for entreprenører og byggefirmaer, ejendomsadministratorer og boligforeninger, rådgivere og arkitekter, eller virksomheder med flere lokationer.",
      "Fælles for begge er, at I har brug for en maler, der leverer til tiden, kommunikerer klart og kan tilpasse sig jeres drift og jeres øvrige håndværkere.",
    ],
  },
  steps: {
    heading: "Sådan starter et samarbejde",
    items: [
      {
        title: "Henvendelse",
        text: "Fortæl os kort om opgaven eller samarbejdet: hvad der skal males, hvor, og hvornår. Billeder, tegninger og mål hjælper.",
      },
      {
        title: "Afklaring",
        text: "Vi aftaler en besigtigelse eller et kort møde, afklarer krav til materialer, driftstider og adgang, og udpeger jeres faste kontaktperson.",
      },
      {
        title: "Tilbud og plan",
        text: "I får et skriftligt tilbud med omfang, tidsplan og materialer. Ved flere lokationer eller løbende arbejde laver vi et samlet forslag.",
      },
      {
        title: "Udførelse",
        text: "Vi udfører arbejdet efter planen, etapevis eller uden for åbningstid, hvis det er aftalt, og holder jer opdateret undervejs.",
      },
      {
        title: "Aflevering og opfølgning",
        text: "Vi gennemgår resultatet sammen med jer. Ved løbende aftaler aftaler vi, hvornår næste opgave eller eftersyn skal ligge.",
      },
    ],
  },
  table: {
    heading: "Samarbejdsmodeller",
    intro: "Ikke to virksomheder har samme behov. Her er de modeller, vi oftest aftaler, og hvem de passer til.",
    columns: ["Model", "Sådan fungerer det", "Passer til"],
    rows: [
      {
        p: "Enkeltopgave",
        d: "Ét projekt med tilbud, tidsplan og aflevering.",
        h: "Kontor eller butik, der skal males én gang.",
      },
      {
        p: "Flere lokationer",
        d: "Samlet tilbud og samme farver og kvalitet på alle adresser.",
        h: "Kæder, filialer og virksomheder med flere afdelinger.",
      },
      {
        p: "Løbende vedligeholdelse",
        d: "Fast aftale om løbende malerarbejde, så lokalerne holdes i stand.",
        h: "Ejendomme, institutioner og virksomheder med slid i lokalerne.",
      },
      {
        p: "Underentreprise",
        d: "Vi leverer malerarbejdet som del af et større projekt og koordinerer med jeres øvrige fag.",
        h: "Entreprenører, byggefirmaer og rådgivere.",
      },
      {
        p: "Ejendomme og foreninger",
        d: "Tilbud, der kan bruges i beslutningsprocessen, og planlægning med hensyn til beboere og lejere.",
        h: "Ejendomsadministratorer, boligforeninger og ejerforeninger.",
      },
    ],
  },
  price: {
    heading: "Det skal vi bruge for at give et godt tilbud",
    paragraphs: [
      "Jo mere vi ved, jo mere præcist bliver tilbuddet. I behøver ikke have alt klar, men disse oplysninger hjælper:",
    ],
    items: [
      "Adresse eller adresser, og typen af lokale: kontor, butik, lager eller andet.",
      "Omtrentligt areal og antal rum eller etager.",
      "Ønsket periode, og om arbejdet skal ske uden for åbningstid.",
      "Særlige krav, for eksempel lavemitterende maling, brandfarver eller adgangsregler.",
      "Billeder, tegninger eller en kort beskrivelse af opgaven.",
      "Navn og telefonnummer på en kontaktperson hos jer.",
    ],
    closing: (
      <>
        Send det via <Link to="/kontakt" className={link}>kontaktformularen</Link>, så vender vi tilbage inden for
        24 timer. Tilbuddet er altid gratis og uforpligtende.
      </>
    ),
  },
  context: {
    heading: "Erfaring på tværs af brancher og områder",
    paragraphs: [
      <>
        Vi har skrevet om, hvordan vi løser erhvervsopgaver lokalt: kontorer og brandfarver i{" "}
        <Link to="/maler-ballerup" className={link}>Ballerup</Link>, butikker og kæder i{" "}
        <Link to="/maler-herlev" className={link}>Herlev</Link>, institutioner og industri i{" "}
        <Link to="/maler-naestved" className={link}>Næstved</Link>, sundhedssektoren i{" "}
        <Link to="/maler-glostrup" className={link}>Glostrup</Link> og erhverv nær DTU i{" "}
        <Link to="/maler-lyngby" className={link}>Lyngby</Link>.
      </>,
      <>
        Til større ejendomme og foreninger kan du læse om forløbet i{" "}
        <Link to="/maler-brondby" className={link}>Brøndby</Link>, og om erhvervsområderne i{" "}
        <Link to="/maler-taastrup" className={link}>Taastrup</Link> og{" "}
        <Link to="/maler-albertslund" className={link}>Albertslund</Link>.
      </>,
      <>
        Udover malerarbejde i selve lokalerne udfører vi også <Link to="/ydelser/facademaling" className={link}>facademaling</Link>,{" "}
        <Link to="/ydelser/indendoers-maling" className={link}>indvendig maling</Link> og{" "}
        <Link to="/ydelser/renovering" className={link}>renovering</Link>, så I kan samle opgaverne hos én maler.
      </>,
    ],
  },
  faqs: [
    {
      q: "Arbejder I som underentreprenør for andre firmaer?",
      a: "Ja. Vi indgår gerne som underentreprenør eller specialist i større projekter og koordinerer med jeres øvrige fag. Fortæl os om omfang og tidsplan, så vender vi tilbage.",
    },
    {
      q: "Kan vi få en fast kontaktperson?",
      a: "Ja. I får en fast kontaktperson hos os fra tilbud til aflevering, så I ikke skal forklare opgaven flere gange.",
    },
    {
      q: "Tilbyder I løbende vedligeholdelse eller rammeaftaler?",
      a: "Ja, mange virksomheder og ejendomme har glæde af en fast aftale om løbende malerarbejde. Kontakt os, så finder vi en model, der passer til jeres behov.",
    },
    {
      q: "Kan I male flere lokationer med ens resultat?",
      a: "Ja. I får et samlet tilbud, og vi planlægger forløbet, så alle adresser får de samme farver og samme kvalitet.",
    },
    {
      q: "Kan arbejdet foregå uden for åbningstid?",
      a: "Ja. Vi planlægger gerne arbejdet om aftenen, i weekenden eller i etaper, så driften kan fortsætte.",
    },
    {
      q: "Hvordan får vi et tilbud?",
      a: "Send adresse, type af lokale og ønsket periode via kontaktformularen, eller ring til os. Ved større opgaver besigtiger vi først. Tilbuddet er gratis og uforpligtende.",
    },
    {
      q: "Hvilke områder dækker I?",
      a: "Vi dækker København og hele Sjælland.",
    },
  ],
  gallery: {
    heading: "Fra vores projekter: arbejdet bag et flot resultat",
    intro: "Billeder fra rigtige opgaver, hvor vi fjerner tapet, spartler og glitter vægge og lofter, før der males. Klik på et billede for at se det i stor størrelse.",
    photos: [
    { thumb: g1t, full: g1f, alt: "Maler spartler væg over dør i entré med rød glittebrætte", caption: "Maler på stige spartler væg i entré" },
    { thumb: g2t, full: g2f, alt: "Maler fjerner gammel tapet i entré i en lejlighed", caption: "Maler fjerner gammel tapet i entré" },
    { thumb: g3t, full: g3f, alt: "Maler river tapetbaner af væggen i en entré med afdækket gulv", caption: "Tapetfjernelse med afdækket gulv" },
    { thumb: g4t, full: g4f, alt: "Maler trækker gammel tapet af væggen før maling og spartling", caption: "Gammel tapet fjernes før spartling" },
    { thumb: g5t, full: g5f, alt: "Maler på stige glitter væg ved stuklister og franske døre i en lejlighed", caption: "Glitning af væg ved stuklister" },
    { thumb: g6t, full: g6f, alt: "Maler glitter væg med rød glittebrætte i en lejlighed", caption: "Finspartling med glittebrætte" },
    { thumb: g7t, full: g7f, alt: "Maler spartler langs stuklisten i loftet i en lejlighed i København", caption: "Spartling langs stuklisten i loftet" },
  ],
    labels: {
    open: (alt) => `Åbn billede: ${alt}`,
    close: "Luk",
    prev: "Forrige billede",
    next: "Næste billede",
    counter: (current, total) => `${current} / ${total}`,
  },
  },
  ctaTitle: "Skal vi tale om jeres opgave?",
};

const enLabels: ServicePageLabels = {
  ctaButton: "Get a free quote",
  seeAlso: "See also",
  references: {
    title: "See our references",
    text: "Examples of painting work we have carried out for private clients and businesses.",
  },
  faqCard: { title: "Frequently asked questions", text: "Answers about quotes, price, process and areas." },
  cityPrefix: "Painters in",
  allServices: "See all our painting services",
  allAreas: "See all areas we cover",
  about: "Read more about MAN MALER",
  ctaText: "Contact us today for a free, non-binding quote.",
  breadcrumbAria: "Breadcrumb",
  faqHeading: () => "Frequently asked questions about B2B partnerships",
  citiesHeading: () => "B2B partnerships in your area",
};

const enData: ServicePageData = {
  lang: "en",
  labels: enLabels,
  alternates,
  path: "/en/b2b",
  name: "B2B partnerships",
  serviceType: "Painting for businesses and partnerships with other companies",
  title: "Painting company for businesses | B2B – MAN MALER",
  description:
    "MAN MALER works with businesses, contractors and property administrators on painting projects. One contact person, a clear schedule and a free quote.",
  keywords:
    "b2b painter, painting company for businesses, painting subcontractor, framework agreement painter, commercial painter Copenhagen, property administrator painter, painter Zealand",
  breadcrumb: [{ name: "Home", to: "/" }, { name: "B2B" }],
  h1: "A painting company for businesses and partners",
  lead:
    "We paint for businesses and work with contractors, property administrators and other professionals. One contact person, a clear schedule and a quote that is easy to understand.",
  heroPoints: ["Free, non-binding quote", "Reply within 24 hours", "Covering Copenhagen and all of Zealand"],
  image: {
    src: hallwayImg,
    alt: "Two painters in a hallway, ready to start the refurbishment",
  },
  images: [
    { src: hallwayImg, alt: "Two painters in a hallway, ready to start the refurbishment" },
    { src: paintedWallImg, alt: "Painter next to a freshly painted wall with a decorative cornice in an apartment" },
  ],
  imageHeading: "Painting that fits into your business",
  imageParagraphs: [
    "For a business, a painting project is about more than paint. The premises must stay usable, customers and staff must not be disturbed, and the schedule has to hold.",
    "That is why we work in a structured way: one contact person on our side, a written quote with scope and schedule, and a handover where we walk through the result together.",
  ],
  summary: {
    heading: "In short",
    items: [
      "We work directly for businesses and as a partner for other companies.",
      "You get one contact person and a written schedule.",
      "Work is planned around your operations, including outside opening hours.",
      "Single job, multiple locations or ongoing maintenance: we adapt the agreement.",
    ],
  },
  intro: {
    heading: "Who do we work with?",
    paragraphs: [
      "We have two kinds of collaboration. The first is directly for businesses that need painting in their own premises: offices, shops, institutions, warehouses and properties.",
      "The second is working with other companies. We can join as a subcontractor or specialist on larger projects, for example for contractors and building companies, property administrators and housing associations, advisers and architects, or companies with several locations.",
      "What both have in common is that you need a painter who delivers on time, communicates clearly and adapts to your operations and your other trades.",
    ],
  },
  steps: {
    heading: "How a partnership starts",
    items: [
      {
        title: "Enquiry",
        text: "Tell us briefly about the job or the collaboration: what needs painting, where and when. Photos, drawings and measurements help.",
      },
      {
        title: "Clarification",
        text: "We arrange a site visit or a short meeting, clarify requirements for materials, operating hours and access, and appoint your permanent contact person.",
      },
      {
        title: "Quote and plan",
        text: "You receive a written quote with scope, schedule and materials. For several locations or ongoing work we prepare a joint proposal.",
      },
      {
        title: "Execution",
        text: "We carry out the work according to the plan, in phases or outside opening hours if agreed, and keep you updated along the way.",
      },
      {
        title: "Handover and follow-up",
        text: "We review the result with you. For ongoing agreements we agree when the next job or inspection should take place.",
      },
    ],
  },
  table: {
    heading: "Collaboration models",
    intro: "No two businesses have the same needs. These are the models we agree most often, and who they suit.",
    columns: ["Model", "How it works", "Suits"],
    rows: [
      {
        p: "Single job",
        d: "One project with a quote, a schedule and a handover.",
        h: "An office or shop that needs painting once.",
      },
      {
        p: "Multiple locations",
        d: "One joint quote and the same colours and quality at every address.",
        h: "Chains, branches and companies with several departments.",
      },
      {
        p: "Ongoing maintenance",
        d: "A standing agreement for recurring painting work so the premises stay in good condition.",
        h: "Properties, institutions and businesses with wear in their premises.",
      },
      {
        p: "Subcontracting",
        d: "We deliver the painting as part of a larger project and coordinate with your other trades.",
        h: "Contractors, building companies and advisers.",
      },
      {
        p: "Properties and associations",
        d: "Quotes that can be used in the decision process, and planning that takes residents and tenants into account.",
        h: "Property administrators, housing associations and owners' associations.",
      },
    ],
  },
  price: {
    heading: "What we need to give you a good quote",
    paragraphs: [
      "The more we know, the more precise the quote. You do not need to have everything ready, but this information helps:",
    ],
    items: [
      "The address or addresses, and the type of premises: office, shop, warehouse or other.",
      "Approximate area and number of rooms or floors.",
      "Preferred period, and whether the work must take place outside opening hours.",
      "Special requirements, for example low-emission paint, brand colours or access rules.",
      "Photos, drawings or a short description of the job.",
      "The name and phone number of a contact person at your company.",
    ],
    closing: (
      <>
        Send it through the <Link to="/kontakt" className={link}>contact form</Link> and we will reply within
        24 hours. The quote is always free and non-binding.
      </>
    ),
  },
  context: {
    heading: "Experience across industries and areas",
    paragraphs: [
      <>
        We have written about how we handle commercial jobs locally: offices and brand colours in{" "}
        <Link to="/maler-ballerup" className={link}>Ballerup</Link>, shops and chains in{" "}
        <Link to="/maler-herlev" className={link}>Herlev</Link>, institutions and industry in{" "}
        <Link to="/maler-naestved" className={link}>Næstved</Link>, the healthcare sector in{" "}
        <Link to="/maler-glostrup" className={link}>Glostrup</Link> and business near DTU in{" "}
        <Link to="/maler-lyngby" className={link}>Lyngby</Link>. These pages are in Danish.
      </>,
      <>
        For larger properties and associations, read about the process in{" "}
        <Link to="/maler-brondby" className={link}>Brøndby</Link>, and about the business areas in{" "}
        <Link to="/maler-taastrup" className={link}>Taastrup</Link> and{" "}
        <Link to="/maler-albertslund" className={link}>Albertslund</Link>.
      </>,
      <>
        Besides painting inside the premises we also do <Link to="/ydelser/facademaling" className={link}>facade painting</Link>,{" "}
        <Link to="/ydelser/indendoers-maling" className={link}>interior painting</Link> and{" "}
        <Link to="/ydelser/renovering" className={link}>renovation</Link>, so you can keep everything with one painter.
      </>,
    ],
  },
  faqs: [
    {
      q: "Do you work as a subcontractor for other companies?",
      a: "Yes. We are happy to join larger projects as a subcontractor or specialist and coordinate with your other trades. Tell us the scope and schedule and we will get back to you.",
    },
    {
      q: "Can we have a permanent contact person?",
      a: "Yes. You get one contact person on our side from quote to handover, so you do not have to explain the job more than once.",
    },
    {
      q: "Do you offer ongoing maintenance or framework agreements?",
      a: "Yes, many businesses and properties benefit from a standing agreement for recurring painting work. Contact us and we will find a model that fits your needs.",
    },
    {
      q: "Can you paint several locations with the same result?",
      a: "Yes. You receive one joint quote and we plan the project so every address gets the same colours and the same quality.",
    },
    {
      q: "Can the work take place outside opening hours?",
      a: "Yes. We are happy to plan the work in the evening, at weekends or in phases so your operations can continue.",
    },
    {
      q: "How do we get a quote?",
      a: "Send the address, type of premises and preferred period through the contact form, or call us. For larger jobs we visit first. The quote is free and non-binding.",
    },
    {
      q: "Which areas do you cover?",
      a: "We cover Copenhagen and all of Zealand.",
    },
  ],
  gallery: {
    heading: "From our projects: the work behind a great result",
    intro: "Photos from real jobs where we remove wallpaper, fill and smooth walls and ceilings before painting. Click a photo to view it full size.",
    photos: [
    { thumb: g1t, full: g1f, alt: "Painter skim-coating a wall above a door in a hallway with a red float", caption: "Painter on a ladder filling a hallway wall" },
    { thumb: g2t, full: g2f, alt: "Painter removing old wallpaper in an apartment hallway", caption: "Removing old wallpaper in a hallway" },
    { thumb: g3t, full: g3f, alt: "Painter pulling strips of wallpaper off a hallway wall with the floor protected", caption: "Wallpaper removal with the floor protected" },
    { thumb: g4t, full: g4f, alt: "Painter peeling old wallpaper off the wall before skim-coating and painting", caption: "Old wallpaper removed before filling" },
    { thumb: g5t, full: g5f, alt: "Painter on a ladder smoothing a wall next to a decorative cornice and French doors", caption: "Smoothing a wall by the cornice" },
    { thumb: g6t, full: g6f, alt: "Painter smoothing a wall with a red float in an apartment", caption: "Fine filling with a float" },
    { thumb: g7t, full: g7f, alt: "Painter filling along the cornice at the ceiling of a Copenhagen apartment", caption: "Filling along the ceiling cornice" },
  ],
    labels: {
    open: (alt) => `Open photo: ${alt}`,
    close: "Close",
    prev: "Previous photo",
    next: "Next photo",
    counter: (current, total) => `${current} / ${total}`,
  },
  },
  ctaTitle: "Shall we talk about your project?",
};

export default function PageB2B() {
  const { lang } = useI18n();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const englishRoute = pathname.startsWith("/en/");

  useEffect(() => {
    if (lang === "en" && !englishRoute) navigate(B2B_PAGE_PATH_EN, { replace: true });
    if (lang === "da" && englishRoute) navigate(B2B_PAGE_PATH, { replace: true });
  }, [lang, englishRoute, navigate]);

  return <ServicePageTemplate data={englishRoute ? enData : daData} />;
}
