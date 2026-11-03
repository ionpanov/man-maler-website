import { Link } from "react-router-dom";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import commercialImg from "@/assets/commercial.webp";

const link = "text-primary hover:underline";

const data: ServicePageData = {
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
    src: commercialImg,
    alt: "Malerarbejde i erhvervslokaler",
  },
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
  ctaTitle: "Skal vi tale om jeres opgave?",
};

export default function PageB2B() {
  return <ServicePageTemplate data={data} />;
}
