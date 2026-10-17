import { Link } from "react-router-dom";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import interiorImg from "@/assets/interior.webp";

const data: ServicePageData = {
  path: "/ydelser/indendoers-maling",
  name: "Indvendig maling",
  serviceType: "Indvendig maling og malerarbejde",
  title: "Indvendig maling | Maler til vægge & lofter – MAN MALER",
  description:
    "Professionel indvendig maling af vægge, lofter og træværk i København og på Sjælland. Grundigt forarbejde, ren aflevering og gratis, uforpligtende tilbud.",
  keywords:
    "indvendig maling, indendørs maling, maler vægge og lofter, maling af lejlighed, malerfirma københavn, maler pris, fraflytningsmaling, spartling",
  h1: "Indvendig maling i København og på Sjælland",
  lead:
    "Vi maler vægge, lofter, træværk og køkkener i lejligheder, villaer, rækkehuse og erhvervslokaler. Grundigt forarbejde, rene kanter og et tilbud, der er til at forstå.",
  heroPoints: ["Gratis og uforpligtende tilbud", "Svar inden for 24 timer", "Dækker København og hele Sjælland"],
  image: {
    src: interiorImg,
    alt: "Malerarbejde af vægge og lofter i en bolig",
  },
  imageHeading: "En professionel maler gør forskellen i detaljerne",
  imageParagraphs: [
    "Et godt malerresultat ses i overgangene: skarpe kanter ved lofter og lister, ensartet glans på tværs af væggen og ingen synlige rullespor i dagslys. Det kræver tid til forarbejdet og erfaring med både materialer og underlag.",
    "Hos MAN MALER arbejder vi med indvendig maling af private boliger og erhvervslokaler. Du får et skriftligt tilbud, hvor flader, antal strøg og materialer er beskrevet, så du ved præcis, hvad der er med.",
  ],
  intro: {
    heading: "Hvad omfatter indvendig maling?",
    paragraphs: [
      "Indvendig maling dækker typisk maling af vægge og lofter, men også lister, fodpaneler, døre, karme, vinduesrammer og paneler. I mange boliger indgår desuden reparation af huller og revner, spartling af ujævne flader og fjernelse af gammelt tapet, så malingen får et plant og stabilt underlag.",
      "Vi udfører opgaven i alt fra ét enkelt rum til hele boligen, og i kontorer, butikker og andre erhvervslokaler. Mange vælger at få hele lejligheden eller huset malet i ét forløb, fordi det giver et ensartet resultat og samler afdækning, tørretid og oprydning i én periode.",
      "Opgaven starter altid med en vurdering af underlaget. Nikotinpletter, vandskader, mørke farver og ældre malingslag stiller hver især krav til forbehandlingen, og det er forarbejdet, der afgør, hvor længe resultatet holder.",
    ],
  },
  steps: {
    heading: "Sådan foregår et malerforløb hos os",
    items: [
      {
        title: "Besigtigelse og tilbud",
        text: "Du sender billeder, mål og en kort beskrivelse, eller vi kommer forbi. Derefter får du et skriftligt tilbud med omfang, antal strøg og materialer.",
      },
      {
        title: "Afdækning og beskyttelse",
        text: "Gulve, møbler, vinduer og stikkontakter dækkes af, så støv og maling ikke havner, hvor det ikke skal.",
      },
      {
        title: "Forarbejde",
        text: "Vi vasker, sliber, spartler og reparerer, og grunder, hvor underlaget kræver det, for eksempel på nyspartlede flader, nikotinpletter eller ved skift fra mørk til lys farve.",
      },
      {
        title: "Maling",
        text: "Loftet males først, derefter væggene og til sidst træværket. Normalt påføres to strøg for en dækkende og ensartet finish.",
      },
      {
        title: "Aflevering",
        text: "Afdækningen fjernes, rummet ryddes, og vi gennemgår resultatet sammen med dig, før opgaven er afsluttet.",
      },
    ],
  },
  table: {
    heading: "Den rigtige maling til hvert rum og hver flade",
    intro:
      "Vægge, lofter og træværk stiller forskellige krav til glans, slidstyrke og forarbejde. Her er et overblik over de valg, vi typisk træffer sammen med dig.",
    columns: ["Rum eller flade", "Typisk løsning", "Vær opmærksom på"],
    rows: [
      {
        p: "Lofter",
        d: "Meget mat loftmaling (lav glans), der dæmper genskin og skjuler små ujævnheder.",
        h: "Males først. Lofter med pletter eller tidligere mørk farve kræver ofte grunder og to strøg.",
      },
      {
        p: "Vægge i stue og soveværelse",
        d: "Mat eller let mat vægmaling i en ensartet kulør.",
        h: "Spartling og slibning af huller og samlinger er afgørende for et jævnt lys på væggen.",
      },
      {
        p: "Køkken og entré",
        d: "Vaskbar vægmaling med høj slidstyrke.",
        h: "Fedt, stænk og berøring slider mest. Vælg en maling, der kan tørres af uden at blive mat eller skjoldet.",
      },
      {
        p: "Badeværelse og vådrum",
        d: "Fugtbestandig maling tilpasset vådrum.",
        h: "Underlaget skal være tørt og ventilationen i orden. Skimmel behandles, før der males.",
      },
      {
        p: "Træværk, døre og lister",
        d: "Slidstærk træmaling i silkemat til halvblank finish.",
        h: "Tidligere malede flader afvaskes og slibes, og ubehandlet træ grundes.",
      },
      {
        p: "Vægge med tapet",
        d: "Maling over egnet glasvæv, eller maling efter nedtagning af tapet.",
        h: "Løst tapet fjernes, og væggen spartles. Vi vurderer, om tapetet kan males over, ved besigtigelsen.",
      },
    ],
  },
  price: {
    heading: "Hvad påvirker prisen på indvendig maling?",
    paragraphs: [
      "Mange søger efter en pris pr. kvadratmeter, men to rum af samme størrelse kan have vidt forskellig pris. Det skyldes, at det er forarbejdet og detaljerne, der fylder mest, ikke selve malingen.",
      "Disse forhold har størst betydning for prisen:",
    ],
    items: [
      "Areal og loftshøjde, samt antal rum der skal males.",
      "Antal strøg, og om der skal skiftes fra mørk til lys farve.",
      "Underlagets stand: huller, revner, spartling, nikotin- og vandskader.",
      "Tapet, der skal fjernes, før væggene kan males.",
      "Træværk, lister, døre og vinduer, fordi detaljearbejde tager tid.",
      "Adgangsforhold, for eksempel etage uden elevator eller begrænset parkering.",
      "Om rummene er møblerede eller tomme.",
    ],
    closing: (
      <>
        Derfor giver vi et skriftligt tilbud, hvor omfanget er beskrevet, i stedet for et løst prisoverslag.
        Du kan sende billeder og mål via <Link to="/kontakt" className="text-primary hover:underline">kontaktformularen</Link>,
        og få svar inden for 24 timer.
      </>
    ),
  },
  context: {
    heading: "Indvendig maling af lejligheder, huse og erhverv",
    paragraphs: [
      <>
        I ældre etageejendomme, som vi ofte arbejder i på <Link to="/maler-frederiksberg" className="text-primary hover:underline">Frederiksberg</Link> og
        i <Link to="/maler-koebenhavn" className="text-primary hover:underline">København</Link>, kræver stuklofter, paneler og gammelt tapet ekstra omhu.
        Til villaer med flere rum og bygninger på grunden planlægger vi arbejdet samlet, som beskrevet for <Link to="/maler-lyngby" className="text-primary hover:underline">Lyngby</Link> og <Link to="/maler-gentofte" className="text-primary hover:underline">Gentofte</Link>.
      </>,
      <>
        Skal boligen gøres klar til salg, kan det betale sig at prioritere entré, stue og køkken. Læs mere om det under <Link to="/maler-taastrup" className="text-primary hover:underline">Taastrup</Link>.
        Ved fraflytning er hurtig og ensartet maling vigtig, både i private lejemål (se <Link to="/maler-roskilde" className="text-primary hover:underline">Roskilde</Link>) og i almene boliger, som i <Link to="/maler-ishoj" className="text-primary hover:underline">Ishøj</Link>.
      </>,
      <>
        I kontorer og butikker planlægger vi arbejdet uden for åbningstid, så driften ikke forstyrres. Du kan læse om erhvervsopgaver og brandfarver på siderne for <Link to="/maler-ballerup" className="text-primary hover:underline">Ballerup</Link>, <Link to="/maler-herlev" className="text-primary hover:underline">Herlev</Link> og <Link to="/maler-naestved" className="text-primary hover:underline">Næstved</Link>.
        Har du også brug for at få malet huset udvendigt, kan du læse om vores <Link to="/ydelser/facademaling" className="text-primary hover:underline">facademaling</Link>.
      </>,
    ],
  },
  faqs: [
    {
      q: "Hvor lang tid tager det at male en lejlighed?",
      a: "Det afhænger af størrelsen og underlagets stand. En lejlighed på 70-80 m² kan ofte males på få dage, hvis der ikke skal laves omfattende spartling eller fjernes tapet. Ved større boliger eller mange reparationer planlægger vi en længere periode, som fremgår af tilbuddet.",
    },
    {
      q: "Kan jeg blive boende, mens I maler?",
      a: "I mange tilfælde ja, især hvis det kun er enkelte rum. Ved større opgaver anbefaler vi, at de berørte rum tømmes eller midlertidigt ikke bruges. Det giver et bedre resultat og et kortere forløb.",
    },
    {
      q: "Skal jeg selv flytte møblerne?",
      a: "Mindre møbler flytter og afdækker vi. Ønsker du, at vi også håndterer tungere møbler, aftaler vi det på forhånd, så det fremgår af tilbuddet.",
    },
    {
      q: "Hvor mange strøg maling skal der på væggene?",
      a: "Normalt to strøg for et dækkende og ensartet resultat. Ved skift fra mørk til lys farve, eller på flader med pletter, kan der være behov for grunder eller et ekstra strøg.",
    },
    {
      q: "Kan I fjerne tapet, før I maler?",
      a: "Ja. Tapetet fjernes, væggene repareres og spartles, og først derefter males der. Sidder tapetet fast og egner sig til det, kan det i nogle tilfælde males over. Det vurderer vi ved besigtigelsen.",
    },
    {
      q: "Hvad koster indvendig maling?",
      a: "Prisen afhænger af areal, antal rum, underlagets stand, antal strøg og adgangsforhold. Vi giver altid et gratis og uforpligtende tilbud, efter vi har set eller fået beskrevet opgaven.",
    },
    {
      q: "Maler I også indvendigt i erhvervslokaler?",
      a: "Ja, vi maler kontorer, butikker og andre erhvervslokaler. Arbejdet planlægges ofte uden for åbningstid eller i etaper, så driften kan fortsætte.",
    },
  ],
  related: {
    to: "/ydelser/facademaling",
    title: "Facademaling",
    text: "Afrensning, reparation og vejrbestandig maling til villaer, rækkehuse og ejendomme.",
  },
  ctaTitle: "Klar til at få malet indvendigt?",
};

export default function ServiceIndoor() {
  return <ServicePageTemplate data={data} />;
}
