import { Link } from "react-router-dom";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import renovationImg from "@/assets/renovation.webp";

const link = "text-primary hover:underline";

const data: ServicePageData = {
  path: "/ydelser/renovering",
  name: "Renovering",
  serviceType: "Renovering og istandsættelse med malerarbejde",
  title: "Renovering af bolig | Maler & istandsættelse – MAN MALER",
  description:
    "Renovering og istandsættelse af boliger i København og på Sjælland: spartling, vandskade, skimmel, lofter og komplet maling. Gratis og uforpligtende tilbud.",
  keywords:
    "renovering, istandsættelse, boligrenovering, malerfirma renovering, vandskade maling, skimmelbehandling, loftsrenovering, renovering af lejlighed",
  h1: "Renovering og istandsættelse i København og på Sjælland",
  lead:
    "Fra enkelte rum til hele boligen. Vi står for malerarbejdet og istandsættelsen af overflader: reparation, spartling, behandling af fugt- og skimmelskader og en finish, der holder.",
  heroPoints: ["Gratis og uforpligtende tilbud", "Svar inden for 24 timer", "Dækker København og hele Sjælland"],
  image: {
    src: renovationImg,
    alt: "Renovering og istandsættelse af overflader i en bolig",
  },
  imageHeading: "Renovering starter med det, man ikke kan se",
  imageParagraphs: [
    "En renovering lykkes sjældent på selve malingen. Det er underlaget, der afgør resultatet: er væggene plane, er loftet tørt, og er årsagen til en eventuel fugtskade fundet og stoppet? Derfor begynder vi altid med en grundig besigtigelse.",
    "Hos MAN MALER varetager vi malerarbejdet og klargøringen af overflader. Kræver opgaven autoriserede fagfolk, for eksempel til el, VVS eller tætning af vådrum, koordinerer vi med dem, så rækkefølgen bliver rigtig, og du ikke skal styre det hele selv.",
  ],
  intro: {
    heading: "Hvad omfatter renovering og istandsættelse?",
    paragraphs: [
      "Renovering dækker over alt fra en gennemgribende istandsættelse af en hel bolig til en enkelt opgave, der er løbet løbsk, som et loft med fugtpletter eller en væg med skimmel. Fælles for opgaverne er, at overfladerne er i dårlig stand, og at de skal bringes tilbage til et plant, rent og holdbart underlag, før der males.",
      "Typiske opgaver er reparation af huller, revner og samlinger, spartling og slibning, fjernelse af gammelt tapet, behandling af skimmel og afrensning efter vandskade, renovering af lofter, maling af vådrum og behandling af gulve. Efter udskiftning af vinduer eller efterisolering står der desuden ofte spartling og maling tilbage, som skal laves, før boligen er færdig.",
      "Når mange håndværkere er i spil, er rækkefølgen afgørende. Gulve og vådrum laves typisk før malingen, mens loft og vægge males sidst, så resultatet ikke ødelægges af det efterfølgende arbejde. Vi planlægger vores del, så den passer ind i det samlede forløb.",
    ],
  },
  steps: {
    heading: "Sådan forløber en renovering hos os",
    items: [
      {
        title: "Besigtigelse og afklaring",
        text: "Vi gennemgår boligen, vurderer underlaget og finder ud af, hvad der er årsag, og hvad der er symptom, for eksempel ved fugt og skimmel.",
      },
      {
        title: "Plan og rækkefølge",
        text: "Du får et skriftligt tilbud og en plan, hvor vores del er sat ind i forhold til andre håndværkere og eventuelle forsikringssager.",
      },
      {
        title: "Afdækning og nedtagning",
        text: "Gulve, møbler og installationer beskyttes. Løst tapet, afskallet maling og defekte overflader fjernes.",
      },
      {
        title: "Reparation og forarbejde",
        text: "Revner og huller repareres, flader spartles og slibes, og vi grunder, hvor underlaget kræver det. Skimmelramte flader behandles, når årsagen er afhjulpet.",
      },
      {
        title: "Maling og finish",
        text: "Loft først, derefter vægge og til sidst træværk. Normalt to strøg for en dækkende og ensartet overflade.",
      },
      {
        title: "Aflevering",
        text: "Afdækningen fjernes, boligen ryddes, og vi gennemgår resultatet sammen med dig.",
      },
    ],
  },
  table: {
    heading: "Typiske renoveringsopgaver og hvad de kræver",
    intro:
      "Mange renoveringer handler om mere end maling. Her er et overblik over de opgaver, vi oftest løser, og hvad du skal være opmærksom på.",
    columns: ["Opgave", "Det indebærer", "Vær opmærksom på"],
    rows: [
      {
        p: "Komplet istandsættelse",
        d: "Afdækning, reparation, spartling og maling af vægge, lofter og træværk i hele boligen.",
        h: "Aftal rækkefølgen med øvrige håndværkere, så maling ikke ødelægges af efterfølgende arbejde.",
      },
      {
        p: "Vandskade",
        d: "Afrensning og maling af de berørte flader, når skaden er afhjulpet og underlaget er tørt.",
        h: "Kilden skal findes og stoppes, og tørring udføres af fagfolk. Kontakt forsikringen, før arbejdet går i gang.",
      },
      {
        p: "Skimmel",
        d: "Behandling af overfladen, afrensning og maling med en skimmelhæmmende maling.",
        h: "Årsagen, ofte fugt eller manglende udluftning, skal løses, ellers kommer skimmelen tilbage. Omfattende skimmel bør vurderes af en specialist.",
      },
      {
        p: "Lofter",
        d: "Reparation af revner og samlinger, spartling og maling. Eventuelt nedtagning af gammelt tapet.",
        h: "Fugtpletter fra tag eller etagen ovenover skal afklares, før der males.",
      },
      {
        p: "Gulve",
        d: "Afslibning og behandling af træ- og plankegulve med lak, olie eller maling.",
        h: "Gulvarbejde planlægges før væggene males, og gulvet beskyttes under det øvrige arbejde.",
      },
      {
        p: "Vådrum",
        d: "Maling med vådrumsegnet maling på de flader, der ikke er flisebeklædte.",
        h: "Tætning med membran kræver autoriserede fagfolk. Vi koordinerer, så maling kommer til sidst.",
      },
      {
        p: "Efter energirenovering",
        d: "Spartling, reparation og maling efter nye vinduer, efterisolering eller nye lofter.",
        h: "Maling bør vente, til sparkel og puds er tørre og afbundne.",
      },
    ],
  },
  price: {
    heading: "Hvad påvirker prisen på renovering?",
    paragraphs: [
      "Renovering kan ikke prissættes ud fra kvadratmeter alene. Underlagets stand, og hvad der gemmer sig bag overfladen, har langt større betydning end selve malingen.",
      "Disse forhold har størst betydning for prisen:",
    ],
    items: [
      "Omfanget: ét rum, flere rum eller hele boligen.",
      "Underlagets stand: revner, huller, afskalning og gammelt tapet.",
      "Fugt- og skimmelskader, og om årsagen er afhjulpet.",
      "Antal flader og detaljer: lofter, lister, døre og træværk.",
      "Koordinering med andre håndværkere og rækkefølgen i forløbet.",
      "Adgangsforhold, for eksempel etage uden elevator eller begrænset parkering.",
    ],
    closing: (
      <>
        Fordi renovering kan afsløre forhold, som først ses, når overfladerne er åbnet, besigtiger vi altid
        først og tager forbehold for uforudsete skader i tilbuddet. Send billeder via{" "}
        <Link to="/kontakt" className={link}>kontaktformularen</Link>, så vender vi tilbage inden for 24 timer.
      </>
    ),
  },
  context: {
    heading: "Renovering af lejligheder, huse og kældre",
    paragraphs: [
      <>
        Ældre huse stiller de største krav til forarbejdet. Villaer og rækkehuse fra midten af 1900-tallet, som vi
        ofte ser i <Link to="/maler-rodovre" className={link}>Rødovre</Link> og{" "}
        <Link to="/maler-hvidovre" className={link}>Hvidovre</Link>, har ofte flere lag maling, gamle pudslag og
        fugt i kælderen. I etageejendomme på <Link to="/maler-frederiksberg" className={link}>Frederiksberg</Link> er
        det stuklofter, paneler og tapet, der kræver omhu.
      </>,
      <>
        Fugt i kælder og bryggers er et tilbagevendende tema, som du kan læse mere om under{" "}
        <Link to="/maler-hedehusene" className={link}>Hedehusene</Link>. Tæt på kysten, som i{" "}
        <Link to="/maler-greve" className={link}>Greve</Link>, er luftfugtigheden højere, og det stiller ekstra krav til
        maling i køkken og bad.
      </>,
      <>
        Skal boligen gøres klar til salg eller udlejning, kan en målrettet istandsættelse gøre en stor forskel. Læs
        mere om salgsklargøring under <Link to="/maler-taastrup" className={link}>Taastrup</Link> og om fraflytning
        under <Link to="/maler-roskilde" className={link}>Roskilde</Link>. Når renoveringen er færdig, kan huset også
        få en ny <Link to="/ydelser/facademaling" className={link}>facade</Link>, eller du kan se, hvordan vi arbejder
        med <Link to="/ydelser/indendoers-maling" className={link}>indvendig maling</Link>.
      </>,
    ],
  },
  faqs: [
    {
      q: "Kan I stå for en hel renovering?",
      a: "Vi står for malerarbejdet og istandsættelsen af overflader: reparation, spartling, tapet og maling. Kræver opgaven autoriserede fagfolk, for eksempel el, VVS eller tætning af vådrum, koordinerer vi med dem, så rækkefølgen bliver rigtig.",
    },
    {
      q: "Hvad gør I ved en vandskade?",
      a: "Vi udfører malerarbejdet, når skaden er afhjulpet og underlaget er tørt: afrensning, spartling og maling. Kilden til skaden skal findes og stoppes først, og tørring udføres af fagfolk. Kontakt altid forsikringen, før arbejdet går i gang.",
    },
    {
      q: "Kan skimmel males over?",
      a: "Nej. Skimmel skal behandles, og årsagen, typisk fugt eller manglende udluftning, skal løses først. Derefter afrenses fladen, og vi maler med en skimmelhæmmende maling. Omfattende skimmel bør vurderes af en specialist.",
    },
    {
      q: "Skal jeg flytte ud, mens boligen renoveres?",
      a: "Ved mindre opgaver kan du ofte blive boende. Ved større renoveringer, hvor flere rum er berørt, og der støves og spartles, anbefaler vi at flytte ud af de berørte rum i perioden. Det giver et bedre resultat og et kortere forløb.",
    },
    {
      q: "Hvor lang tid tager en renovering?",
      a: "Det afhænger af omfanget. Et enkelt loft kan klares på få dage, mens en komplet istandsættelse af en bolig tager længere tid, ikke mindst på grund af tørretid på spartel og maling. Tidsplanen fremgår af tilbuddet.",
    },
    {
      q: "Hvad koster en renovering?",
      a: "Prisen afhænger af omfang, underlagets stand, eventuelle fugt- og skimmelskader og koordinering med andre håndværkere. Vi besigtiger og giver et gratis og uforpligtende tilbud, med forbehold for uforudsete skader.",
    },
    {
      q: "Kan I male efter en energirenovering?",
      a: "Ja. Efter nye vinduer, efterisolering eller nye lofter står der ofte spartling og maling tilbage. Vi udfører det, når underlaget er tørt og afbundet.",
    },
  ],
  ctaTitle: "Klar til at få renoveret?",
};

export default function ServiceRenovation() {
  return <ServicePageTemplate data={data} />;
}
