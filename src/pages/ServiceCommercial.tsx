import { Link } from "react-router-dom";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import commercialImg from "@/assets/commercial.webp";

const link = "text-primary hover:underline";

const data: ServicePageData = {
  path: "/ydelser/erhvervsmaling",
  name: "Erhvervsmaling",
  serviceType: "Erhvervsmaling og malerarbejde til virksomheder",
  title: "Erhvervsmaling | Maler til kontor & butik – MAN MALER",
  description:
    "Erhvervsmaling til kontorer, butikker, institutioner og lagerlokaler i København og på Sjælland. Planlagt uden driftsforstyrrelser. Gratis tilbud.",
  keywords:
    "erhvervsmaling, maler kontor, butiksmaling, maling af lager, malerfirma erhverv, ejendomsvedligeholdelse, maler institution, malerarbejde virksomhed",
  h1: "Erhvervsmaling i København og på Sjælland",
  lead:
    "Vi maler kontorer, butikker, institutioner, lagerlokaler og ejendomme, planlagt så driften forstyrres mindst muligt. Fast kontaktperson, klar tidsplan og et tilbud, der er til at forstå.",
  heroPoints: ["Gratis og uforpligtende tilbud", "Svar inden for 24 timer", "Dækker København og hele Sjælland"],
  image: {
    src: commercialImg,
    alt: "Erhvervsmaling af kontor og erhvervslokaler",
  },
  imageHeading: "Malerarbejde, der passer ind i din virksomheds hverdag",
  imageParagraphs: [
    "I en virksomhed koster stilstand penge. Derfor handler erhvervsmaling lige så meget om planlægning som om maling: hvornår kan lokalet tages ud af drift, hvordan beskytter vi inventar og IT, og hvornår skal det være klart igen?",
    "Hos MAN MALER planlægger vi arbejdet efter din drift, ofte om aftenen, i weekenden eller i etaper. Du får et skriftligt tilbud med omfang, tidsplan og materialer, så du ved, hvad der sker, og hvornår.",
  ],
  intro: {
    heading: "Hvad omfatter erhvervsmaling?",
    paragraphs: [
      "Erhvervsmaling dækker malerarbejde i alle former for erhvervslokaler: kontorer og mødelokaler, butikker og showrooms, kantiner og personalerum, lagerhaller og produktionslokaler, institutioner som skoler og plejehjem, samt fællesarealer i ejendomme, for eksempel opgange og kældergange.",
      "Kravene varierer meget. I et kontor handler det om et roligt arbejdsmiljø og ofte om at matche virksomhedens brandfarver. I en butik skal facade og lokale understøtte brandet, mens arbejdet helst foregår uden for åbningstid. I institutioner kræves ofte lavemitterende maling og planlægning uden for brugstid, og i industrilokaler stilles der krav til slidstyrke og rengøring.",
      "Mange virksomheder har desuden behov for løbende vedligeholdelse frem for enkeltstående opgaver. Her kan vi aftale et fast forløb, så lokalerne holdes i stand, uden at du skal finde en ny maler hver gang.",
    ],
  },
  steps: {
    heading: "Sådan foregår et erhvervsforløb",
    items: [
      {
        title: "Behovsafklaring og besigtigelse",
        text: "Vi gennemgår lokalerne, afklarer krav til farver, materialer og driftstider, og aftaler, hvem der er din kontaktperson hos os.",
      },
      {
        title: "Tidsplan uden driftsforstyrrelser",
        text: "Arbejdet lægges uden for åbningstid, i weekenden eller i etaper, så virksomheden kan fortsætte.",
      },
      {
        title: "Afdækning og beskyttelse",
        text: "Inventar, IT-udstyr, varer og gulve dækkes af, og færdselsarealer afskærmes, så hverdagen kan fortsætte omkring arbejdet.",
      },
      {
        title: "Udførelse",
        text: "Forarbejde, spartling og maling udføres efter planen. Ved flere lokaler arbejder vi etapevis, så kun en del er ude af drift ad gangen.",
      },
      {
        title: "Aflevering",
        text: "Afdækning fjernes, lokalerne rengøres for malerrester, og vi gennemgår resultatet med dig, så virksomheden er klar til næste arbejdsdag.",
      },
    ],
  },
  table: {
    heading: "Erhvervsmaling efter lokaletype",
    intro:
      "Et kontor, en butik og en lagerhal stiller forskellige krav til maling og planlægning. Her er et overblik over, hvad vi typisk tager højde for.",
    columns: ["Lokaletype", "Typisk løsning", "Vær opmærksom på"],
    rows: [
      {
        p: "Kontor og mødelokaler",
        d: "Rolige farver og slidstærk vægmaling, ofte matchet til virksomhedens brandfarver.",
        h: (
          <>
            Males ofte uden for arbejdstid eller i etaper. Se erfaringerne for kontorvirksomheder i{" "}
            <Link to="/maler-ballerup" className={link}>Ballerup</Link>.
          </>
        ),
      },
      {
        p: "Butik og showroom",
        d: "Facade og butikslokale i kædens eller brandets farver, med skarpe kanter omkring glas og skilte.",
        h: (
          <>
            Planlægges efter åbningstid eller i weekenden. Læs om kædebutikker i{" "}
            <Link to="/maler-herlev" className={link}>Herlev</Link>.
          </>
        ),
      },
      {
        p: "Skole, plejehjem og institution",
        d: "Rengøringsvenlig, lavemitterende maling i lokaler med høj brug.",
        h: (
          <>
            Arbejdet planlægges uden for brugstid. Se mere under{" "}
            <Link to="/maler-naestved" className={link}>Næstved</Link>.
          </>
        ),
      },
      {
        p: "Klinik og sundhedsfacilitet",
        d: "Hygiejnevenlige overflader, der tåler hyppig rengøring.",
        h: (
          <>
            Koordineres med driften, så patienter ikke forstyrres. Læs om sundhedssektoren i{" "}
            <Link to="/maler-glostrup" className={link}>Glostrup</Link>.
          </>
        ),
      },
      {
        p: "Lager og industri",
        d: "Slidstærk, ofte rengørings- og kemikaliebestandig maling tilpasset produktionsmiljøet.",
        h: (
          <>
            Krav til underlag og brandsikring afklares først. Se erhvervsområderne i{" "}
            <Link to="/maler-albertslund" className={link}>Albertslund</Link> og{" "}
            <Link to="/maler-taastrup" className={link}>Taastrup</Link>.
          </>
        ),
      },
      {
        p: "Laboratorier og forskningsmiljøer",
        d: "Overflader, der tåler kemikalier og hyppig rengøring.",
        h: (
          <>
            Planlægges uden for forsknings- og driftstid. Se{" "}
            <Link to="/maler-lyngby" className={link}>Lyngby</Link> for erhverv nær DTU.
          </>
        ),
      },
      {
        p: "Fællesarealer i ejendomme",
        d: "Opgange, trapper og kældergange med robust, rengøringsvenlig maling.",
        h: (
          <>
            Planlægges i etaper, så beboere og lejere generes mindst muligt. Se{" "}
            <Link to="/maler-brondby" className={link}>Brøndby</Link> for større ejendomsprojekter.
          </>
        ),
      },
    ],
  },
  price: {
    heading: "Hvad påvirker prisen på erhvervsmaling?",
    paragraphs: [
      "Prisen på erhvervsmaling afhænger af mere end kvadratmeterne. Planlægning omkring driften og kravene til materialer fylder ofte mere end selve malingen.",
      "Disse forhold har størst betydning for prisen:",
    ],
    items: [
      "Areal, antal lokaler og antal etager.",
      "Om arbejdet skal ske uden for åbningstid, om aftenen eller i weekenden.",
      "Opdeling i etaper, så driften kan fortsætte.",
      "Krav til materialer, for eksempel lavemission, rengørbarhed eller brandsikring.",
      "Underlagets stand og behovet for reparation og spartling.",
      "Antal lokationer, hvis flere butikker eller kontorer males ens.",
      "Tidspres og adgangsforhold, for eksempel nøglehåndtering og parkering.",
    ],
    closing: (
      <>
        Derfor giver vi et skriftligt tilbud med omfang, tidsplan og materialer. Har du flere lokationer, giver vi gerne
        et samlet tilbud. Kontakt os via <Link to="/kontakt" className={link}>kontaktformularen</Link>, så vender vi
        tilbage inden for 24 timer.
      </>
    ),
  },
  context: {
    heading: "Erhvervsmaling på tværs af Sjælland",
    paragraphs: [
      <>
        Vi løser erhvervsopgaver i hele København og på Sjælland, og opgaverne varierer fra område til område. Du kan
        læse om vores erfaringer med butikker og brandfarver i <Link to="/maler-herlev" className={link}>Herlev</Link> og{" "}
        <Link to="/maler-ballerup" className={link}>Ballerup</Link>, med institutioner og industri i{" "}
        <Link to="/maler-naestved" className={link}>Næstved</Link>, og med erhvervsområder i{" "}
        <Link to="/maler-taastrup" className={link}>Taastrup</Link>,{" "}
        <Link to="/maler-albertslund" className={link}>Albertslund</Link> og{" "}
        <Link to="/maler-brondby" className={link}>Brøndby</Link>.
      </>,
      <>
        Til sundhedssektoren og forskningsmiljøer stiller vi skarpt på hygiejne og planlægning, som beskrevet for{" "}
        <Link to="/maler-glostrup" className={link}>Glostrup</Link> og <Link to="/maler-lyngby" className={link}>Lyngby</Link>.
        Er du virksomhedsejer i <Link to="/maler-koebenhavn" className={link}>København</Link> eller{" "}
        <Link to="/maler-roskilde" className={link}>Roskilde</Link>, dækker vi også dig.
      </>,
      <>
        Har virksomheden også brug for at få renoveret efter en skade, kan du læse om vores{" "}
        <Link to="/ydelser/renovering" className={link}>renovering</Link>. Til ejendommens ydre kan du se vores{" "}
        <Link to="/ydelser/facademaling" className={link}>facademaling</Link>, og til lokalerne indvendigt vores{" "}
        <Link to="/ydelser/indendoers-maling" className={link}>indvendige maling</Link>.
      </>,
    ],
  },
  faqs: [
    {
      q: "Kan I male uden for åbningstid?",
      a: "Ja. Vi planlægger gerne arbejdet om aftenen, i weekenden eller i etaper, så virksomheden kan holde åbent og fortsætte driften.",
    },
    {
      q: "Hvordan undgår I at forstyrre driften?",
      a: "Vi aftaler tidsplan og adgang på forhånd, dækker inventar og IT-udstyr af, afskærmer færdselsarealer og arbejder etapevis, så kun en del af lokalerne er ude af drift ad gangen.",
    },
    {
      q: "Kan I matche vores brandfarver?",
      a: "Ja. Oplys kulørkoder eller en farveprøve, så matcher vi farverne præcist, også på tværs af flere lokationer, så kædens butikker og kontorer fremstår ensartede.",
    },
    {
      q: "Maler I flere lokationer ad gangen?",
      a: "Ja. Har du flere butikker, kontorer eller afdelinger, giver vi gerne et samlet tilbud og planlægger forløbet, så alle lokationer får ens resultat.",
    },
    {
      q: "Bruger I lavemitterende maling?",
      a: "Ja, hvor det er relevant. Det anbefaler vi især i skoler, institutioner, plejehjem og klinikker, hvor mange opholder sig i lokalerne.",
    },
    {
      q: "Kan I tilbyde løbende vedligeholdelse af erhvervsejendomme?",
      a: "Ja. Mange virksomheder og ejendomme har glæde af en fast aftale om løbende vedligeholdelse, så lokalerne holdes i stand. Kontakt os, så finder vi en model, der passer til jer.",
    },
    {
      q: "Hvad koster erhvervsmaling?",
      a: "Prisen afhænger af areal, antal lokaler, tidspunkt for arbejdet, krav til materialer og underlagets stand. Vi besigtiger og giver et gratis og uforpligtende tilbud.",
    },
  ],
  ctaTitle: "Klar til at få malet virksomheden?",
};

export default function ServiceCommercial() {
  return <ServicePageTemplate data={data} />;
}
