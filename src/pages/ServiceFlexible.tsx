import { Link } from "react-router-dom";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import flexibleImg from "@/assets/b2b-gallery-5-f.webp";

const link = "text-primary hover:underline";

const data: ServicePageData = {
  path: "/ydelser/maler-aften-weekend",
  name: "Fleksibel maler",
  serviceType: "Malerarbejde om aftenen og i weekenden efter aftale",
  title: "Maler aften & weekend | Fleksibel maler – MAN MALER",
  description:
    "Maler om aftenen og i weekenden i København og på Sjælland. Vi tilpasser vores program efter dit. Gratis og uforpligtende tilbud fra MAN MALER.",
  keywords:
    "maler aften, maler weekend, fleksibel maler, maler uden for almindelig arbejdstid, maler efter arbejde, maler lørdag, maler søndag, maler aftale tidspunkt, maler København",
  h1: "Maler om aftenen og i weekenden i København og på Sjælland",
  lead:
    "Ikke alle kan være hjemme klokken ti en tirsdag. Derfor tilpasser vi vores program efter dit, så malerarbejdet passer ind i din hverdag og ikke omvendt.",
  heroPoints: ["Program tilpasset dit", "Gratis og uforpligtende tilbud", "Dækker København og hele Sjælland"],
  image: {
    src: flexibleImg,
    alt: "Maler på stige glitter væg ved stuklister, arbejde tilrettelagt efter kundens program",
  },
  imageHeading: "Et malerprogram, der tager udgangspunkt i dig",
  imageParagraphs: [
    "Vores faste tider er hverdage fra 07:00 til 20:00, men vi arbejder også efter 20:00 og i weekenden, når det passer dig bedre. Det handler om at finde et tidspunkt, hvor du som kunde er tryg og kan passe dit eget arbejde og din familie.",
    "Du fortæller, hvornår der er adgang, og hvornår du helst vil have ro, så lægger vi en plan, der kan holde. Du får et skriftligt tilbud med tidsplan, så der ikke er nogen overraskelser.",
  ],
  intro: {
    heading: "Hvornår kan vi male? Det afgør du",
    paragraphs: [
      "Mange privatkunder arbejder i dagtimerne og har svært ved at være hjemme, mens håndværkerne er der. Andre bor i en lejlighed med naboer, hvor stille perioder er vigtige, eller har børn, der skal i skole og børnehave. Derfor aftaler vi altid tidspunkterne med dig, før arbejdet går i gang.",
      <>
        For virksomheder gælder det samme. En butik kan ikke lukke midt på dagen, og et kontor skal være klar til mandag
        morgen. Her lægger vi gerne arbejdet om aftenen eller i weekenden, så driften kan fortsætte. Du kan læse mere om
        vores tilgang til virksomheder under <Link to="/ydelser/erhvervsmaling" className={link}>erhvervsmaling</Link> og
        vores <Link to="/b2b" className={link}>B2B-samarbejde</Link>.
      </>,
      "Fleksibilitet betyder ikke, at vi går på kompromis med kvaliteten. Forarbejde, afdækning og aflevering er de samme, uanset hvornår på ugen vi arbejder.",
    ],
  },
  steps: {
    heading: "Sådan aftaler vi tidspunktet",
    items: [
      {
        title: "Du fortæller, hvad der passer",
        text: "Skriv i kontaktformularen eller ring, og fortæl, hvornår du er hjemme, og hvornår der skal være ro. Det kan være aftener, weekender eller bestemte dage.",
      },
      {
        title: "Besigtigelse på et tidspunkt, der passer",
        text: "Vi kigger på opgaven og aftaler et tidspunkt for besigtigelsen, der passer ind i dit program.",
      },
      {
        title: "Tidsplan i tilbuddet",
        text: "Du får et skriftligt og gratis tilbud med omfang, materialer og en tidsplan, hvor arbejdstiderne er skrevet ind.",
      },
      {
        title: "Udførelse efter aftale",
        text: "Vi arbejder på de aftalte tidspunkter, dækker af og holder dig opdateret undervejs. Ændrer din hverdag sig, taler vi om det i god tid.",
      },
      {
        title: "Aflevering",
        text: "Vi rydder op, gennemgår resultatet med dig og afleverer rummene på det tidspunkt, vi har aftalt.",
      },
    ],
  },
  table: {
    heading: "Hvornår passer fleksible tider bedst?",
    intro:
      "Her er eksempler på situationer, hvor kunder typisk ønsker et program, der afviger fra de normale dagtimer.",
    columns: ["Situation", "Typisk ønske", "Vær opmærksom på"],
    rows: [
      {
        p: "Du arbejder hele dagen",
        d: "Aftaler og besigtigelse om aftenen, og adgang til boligen på aftalte tidspunkter.",
        h: "Aftal, hvordan vi får adgang, og hvornår du er hjemme til at se resultatet.",
      },
      {
        p: "Lejlighed med naboer",
        d: "Støjende forarbejde på tidspunkter, hvor det generer mindst, og maling på andre.",
        h: (
          <>
            Se mere om{" "}
            <Link to="/ydelser/indendoers-maling" className={link}>indvendig maling</Link> og forarbejdet.
          </>
        ),
      },
      {
        p: "Børnefamilie",
        d: "Arbejde, mens børnene er i skole og institution, eller i weekenden, hvis det passer bedre.",
        h: "Vi tager hensyn til søvn, lege og rutiner, når vi planlægger rummene.",
      },
      {
        p: "Butik eller kontor",
        d: "Malerarbejde om aftenen eller i weekenden, så driften kan fortsætte.",
        h: (
          <>
            Læs om{" "}
            <Link to="/ydelser/erhvervsmaling" className={link}>erhvervsmaling</Link> og{" "}
            <Link to="/b2b" className={link}>B2B-samarbejde</Link>.
          </>
        ),
      },
      {
        p: "Udlejning og flytning",
        d: "Hurtig istandsættelse mellem to lejere, også i weekenden, hvis fristen er stram.",
        h: (
          <>
            Se vores{" "}
            <Link to="/ydelser/renovering" className={link}>renovering</Link> af lejligheder og lofter.
          </>
        ),
      },
    ],
  },
  price: {
    heading: "Koster det mere at male om aftenen og i weekenden?",
    paragraphs: [
      "Det afhænger af opgaven. Prisen bestemmes først og fremmest af areal, forarbejde, materialer og tid. Tidspunktet for arbejdet kan også have betydning, og det skriver vi tydeligt i tilbuddet.",
      "Derfor besigtiger vi altid og giver et skriftligt tilbud. Disse forhold påvirker typisk prisen:",
    ],
    items: [
      "Areal, antal rum og højde til loft.",
      "Underlagets stand og behovet for spartling og reparation.",
      "Valg af maling og farver.",
      "Om arbejdet skal ske uden for normal arbejdstid.",
      "Adgangsforhold og afdækning.",
    ],
    closing: (
      <>
        Skriv til os via <Link to="/kontakt" className={link}>kontaktformularen</Link> og fortæl, hvilke tidspunkter der
        passer dig, så vender vi tilbage inden for 24 timer.
      </>
    ),
  },
  context: {
    heading: "Fleksibel maler i hele København og på Sjælland",
    paragraphs: [
      <>
        Vi dækker hele København og Sjælland, og tidspunkterne tilpasser vi lokalt. Bor du i{" "}
        <Link to="/maler-koebenhavn" className={link}>København</Link>,{" "}
        <Link to="/maler-frederiksberg" className={link}>Frederiksberg</Link> eller{" "}
        <Link to="/maler-lyngby" className={link}>Lyngby</Link>, kan opgaven ofte planlægges, så den passer til en travl
        hverdag. Samme fleksibilitet tilbyder vi i{" "}
        <Link to="/maler-roskilde" className={link}>Roskilde</Link>,{" "}
        <Link to="/maler-hedehusene" className={link}>Hedehusene</Link> og{" "}
        <Link to="/maler-naestved" className={link}>Næstved</Link>.
      </>,
      <>
        Vil du vide mere om de øvrige ydelser, kan du læse om{" "}
        <Link to="/ydelser/facademaling" className={link}>facademaling</Link>, og du kan se vores{" "}
        <Link to="/referencer" className={link}>referencer</Link>. Svar på de mest almindelige spørgsmål finder du under{" "}
        <Link to="/ofte-stillede-spoergsmaal" className={link}>ofte stillede spørgsmål</Link>.
      </>,
    ],
  },
  faqs: [
    {
      q: "Kan I male om aftenen?",
      a: "Ja. Vores faste tider er hverdage 07:00–20:00, men vi tilpasser vores program efter dit, også efter 20:00, hvis det passer bedre.",
    },
    {
      q: "Kan I male i weekenden?",
      a: "Ja. Vi arbejder også lørdag og søndag efter aftale. Skriv i kontaktformularen, hvilke tidspunkter der passer dig.",
    },
    {
      q: "Hvordan aftaler vi tidspunktet?",
      a: "Du fortæller, hvornår der er adgang, og hvornår du vil have ro. Tidspunkterne skrives ind i det skriftlige tilbud, så vi begge ved, hvad der er aftalt.",
    },
    {
      q: "Kan I male uden for åbningstid til butikker og kontorer?",
      a: "Ja. Vi planlægger gerne arbejdet om aftenen eller i weekenden, så virksomheden kan fortsætte driften. Læs mere under erhvervsmaling.",
    },
    {
      q: "Skal jeg være hjemme, mens I maler?",
      a: "Det aftaler vi. Mange kunder giver os adgang på bestemte tidspunkter og ser resultatet, når vi afleverer. Det bestemmer du.",
    },
    {
      q: "Er kvaliteten den samme, uanset hvornår I arbejder?",
      a: "Ja. Forarbejde, afdækning, maling og aflevering er de samme, uanset tidspunktet.",
    },
    {
      q: "Hvad koster det?",
      a: "Prisen afhænger af areal, forarbejde, materialer og tidspunkt. Vi besigtiger og giver et gratis og uforpligtende tilbud.",
    },
  ],
  ctaTitle: "Fortæl os, hvornår det passer dig",
};

export default function ServiceFlexible() {
  return <ServicePageTemplate data={data} />;
}
