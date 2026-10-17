import { Link } from "react-router-dom";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import exteriorImg from "@/assets/exterior.webp";

const link = "text-primary hover:underline";

const data: ServicePageData = {
  path: "/ydelser/facademaling",
  name: "Facademaling",
  serviceType: "Facademaling og udvendig maling",
  title: "Facademaling | Maler til villa & rækkehus – MAN MALER",
  description:
    "Facademaling af villaer, rækkehuse og ejendomme på Sjælland. Afrensning, reparation og vejrbestandig maling. Gratis og uforpligtende tilbud fra MAN MALER.",
  keywords:
    "facademaling, maling af facade, facaderenovering, malerfirma facade, facademaling pris, maler villa, maling af hus udvendigt, stillads",
  h1: "Facademaling i København og på Sjælland",
  lead:
    "Vi maler facader på villaer, rækkehuse og ejendomme. Grundig afrensning, reparation af puds, fuger og træværk, og vejrbestandig maling, der beskytter huset i mange år.",
  heroPoints: ["Gratis og uforpligtende tilbud", "Svar inden for 24 timer", "Dækker København og hele Sjælland"],
  image: {
    src: exteriorImg,
    alt: "Facademaling af en villa",
  },
  imageHeading: "Facaden er husets første indtryk og dets vigtigste beskyttelse",
  imageParagraphs: [
    "En velholdt facade løfter hele ejendommens udtryk, men maling er først og fremmest beskyttelse. Den holder fugt ude af puds, murværk og træ, og forebygger skader, der er dyre at reparere.",
    "Hos MAN MALER udfører vi facademaling med fokus på forarbejdet. Du får et skriftligt tilbud, hvor afrensning, reparationer, stillads eller lift, og antal strøg er beskrevet, så du ved præcis, hvad der indgår.",
  ],
  intro: {
    heading: "Hvornår skal facaden males?",
    paragraphs: [
      "De fleste huse giver tydelige signaler, før skaderne for alvor opstår. Afskallende maling, krakeleringer og revner, misfarvning, alger og mos, og maling der smitter af som kridt, når du stryger hånden over væggen, er alle tegn på, at beskyttelsen er ved at forsvinde.",
      "Hvor ofte en facade skal males, afhænger af materiale, vejrforhold og den maling, der sidder på i dag. Som tommelfingerregel skal træbeklædning typisk males hyppigere end pudsede eller murede facader, som ofte holder i omkring ti år eller mere. Nær kysten og på facader mod vest slides malingen hurtigere.",
      "Facademaling udføres bedst fra sen forår til sensommer, når vejret er tørt, og temperaturen typisk ligger over 5 grader. Det giver maling og grunder de bedste betingelser for at binde. Vi anbefaler at booke i god tid, da efterspørgslen er størst, når sæsonen starter.",
    ],
  },
  steps: {
    heading: "Sådan udfører vi facademaling",
    items: [
      {
        title: "Besigtigelse og tilbud",
        text: "Vi vurderer facadens materiale og stand, adgangsforhold og behovet for stillads eller lift. Derefter får du et skriftligt tilbud.",
      },
      {
        title: "Stillads, lift og afdækning",
        text: "Vinduer, døre, terrasse og beplantning afdækkes eller beskyttes. På huse med flere etager sikrer stillads eller lift et sikkert og jævnt resultat.",
      },
      {
        title: "Afrensning",
        text: "Alger, mos, snavs og løs maling fjernes, så den nye maling kan hæfte. Afrensningen tilpasses facadens materiale.",
      },
      {
        title: "Reparation",
        text: "Revner i puds, utætte fuger og dårligt træværk repareres, før der males. Her bliver skader udbedret, i stedet for at blive malet over.",
      },
      {
        title: "Grunding",
        text: "Hvor underlaget er sugende, nypudset eller bart træ, grunder vi, så malingen får det rette fæste og dækker ensartet.",
      },
      {
        title: "Maling og aflevering",
        text: "Facaden males normalt i to strøg med vejrbestandig maling. Til sidst fjernes afdækning og stillads, og vi gennemgår resultatet sammen med dig.",
      },
    ],
  },
  table: {
    heading: "Facademaling efter materiale",
    intro:
      "Puds, mursten, træ og beton opfører sig forskelligt og kræver hver sin behandling. Her er et overblik over, hvad vi typisk gør.",
    columns: ["Facadetype", "Typisk behandling", "Vær opmærksom på"],
    rows: [
      {
        p: "Pudset facade",
        d: "Afrensning og eventuel grunding, derefter diffusionsåben facademaling, ofte mineralsk eller akrylbaseret.",
        h: (
          <>
            Revner i puds repareres først. Ny puds skal afbinde, før den males, som beskrevet for{" "}
            <Link to="/maler-hillerod" className={link}>nybyggeri i Hillerød</Link>.
          </>
        ),
      },
      {
        p: "Mursten og tegl",
        d: "Afrensning, reparation af fuger og maling med en diffusionsåben facademaling.",
        h: "Fugt må ikke lukkes inde i murværket. Utætte fuger repareres før maling.",
      },
      {
        p: "Træbeklædning",
        d: "Afrensning eller afslibning, grunding og to strøg træbeskyttende maling.",
        h: "Skal males oftere end mursten. Endetræ og samlinger er mest udsatte.",
      },
      {
        p: "Beton",
        d: "Reparation af afskalninger, behandling af frilagt armering og derefter betonmaling.",
        h: (
          <>
            Skader skal udbedres, før der males. Se mere under{" "}
            <Link to="/maler-albertslund" className={link}>Albertslund</Link>.
          </>
        ),
      },
      {
        p: "Eternit og fibercement (ældre)",
        d: "Vurdering før arbejdet påbegyndes, da ældre plader kan indeholde asbest.",
        h: (
          <>
            Der må ikke slibes eller rengøres aggressivt uden vurdering. Læs mere under{" "}
            <Link to="/maler-rodovre" className={link}>Rødovre</Link>.
          </>
        ),
      },
      {
        p: "Vinduer og udvendige døre",
        d: "Afrensning, grunding og slidstærk træmaling med god hæftning.",
        h: (
          <>
            Kystnær beliggenhed slider hurtigere, som beskrevet for{" "}
            <Link to="/maler-greve" className={link}>Greve</Link>.
          </>
        ),
      },
    ],
  },
  price: {
    heading: "Hvad påvirker prisen på facademaling?",
    paragraphs: [
      "Prisen på facademaling kan ikke aflæses af husets størrelse alene. Stillads og forarbejde udgør ofte en stor del af opgaven, og de varierer meget fra hus til hus.",
      "Disse forhold har størst betydning for prisen:",
    ],
    items: [
      "Facadens areal og højde, og dermed behovet for stillads eller lift.",
      "Facadens stand: hvor meget der skal afrenses og repareres.",
      "Materialet: puds, mursten, træ eller beton stiller forskellige krav.",
      "Detaljer som sokkel, udhæng, gavle, vinduer og døre.",
      "Adgangsforhold omkring huset, for eksempel tæt bebyggelse eller begrænset plads.",
      "Om flere bygninger, for eksempel garage og udhus, males i samme forløb.",
    ],
    closing: (
      <>
        Derfor besigtiger vi altid facaden, før vi giver et tilbud. Mange kunder samler facaden med vinduer,
        garage og udhus i ét forløb, så stillads kun skal opstilles én gang. Send billeder via{" "}
        <Link to="/kontakt" className={link}>kontaktformularen</Link>, så vender vi tilbage inden for 24 timer.
      </>
    ),
  },
  context: {
    heading: "Facademaling på tværs af Sjælland",
    paragraphs: [
      <>
        Facader har forskellige behov afhængigt af, hvor huset ligger. Tæt på kysten, som i{" "}
        <Link to="/maler-greve" className={link}>Greve</Link> og <Link to="/maler-helsingor" className={link}>Helsingør</Link>,
        stiller vind og saltholdig luft ekstra krav til afrensning og maling. I{" "}
        <Link to="/maler-koge" className={link}>Køge</Link> og <Link to="/maler-gentofte" className={link}>Gentofte</Link> findes
        mange bevaringsværdige huse, hvor farve og materialer bør afklares, før arbejdet planlægges.
      </>,
      <>
        Villaer i områder som <Link to="/maler-hedehusene" className={link}>Hedehusene</Link> og{" "}
        <Link to="/maler-roskilde" className={link}>Roskilde</Link> males ofte sammen med vinduer, garage og træværk.
        På større etagebyggerier, som i <Link to="/maler-brondby" className={link}>Brøndby</Link>, besluttes facadeprojekter
        typisk i fællesskab, og her hjælper vi med et tilbud, der er klart nok til at blive brugt i beslutningen.
      </>,
      <>
        Har du også brug for at få malet indvendigt, kan du læse om vores{" "}
        <Link to="/ydelser/indendoers-maling" className={link}>indvendige maling</Link>. Og er du i tvivl om, om din facade
        kræver reparation eller blot maling, så kontakt os for en uforpligtende vurdering. Skal facaden på en erhvervsejendom males, kan du læse om <Link to="/ydelser/erhvervsmaling" className={link}>erhvervsmaling</Link>, og er der skader på facaden, der kræver mere end maling, se <Link to="/ydelser/renovering" className={link}>renovering</Link>.
      </>,
    ],
  },
  faqs: [
    {
      q: "Hvor ofte skal en facade males?",
      a: "Det afhænger af materialet og vejrforholdene. Træbeklædning skal typisk males hyppigere end pudsede og murede facader, som ofte holder i omkring ti år eller mere. Tegn på, at det er tid, er afskalning, revner, misfarvning, alger og maling, der smitter af.",
    },
    {
      q: "Hvornår på året kan facaden males?",
      a: "Bedst fra sen forår til sensommer, når vejret er tørt, og temperaturen typisk ligger over 5 grader. Tørre forhold er afgørende for, at malingen binder og resultatet holder.",
    },
    {
      q: "Skal der stillads på?",
      a: "På huse med flere etager eller høje gavle bruges normalt stillads eller lift. På lavere huse vurderer vi ved besigtigelsen, hvad der er nødvendigt. Stillads eller lift indgår i tilbuddet.",
    },
    {
      q: "Kan facaden males, selvom der er alger og mos?",
      a: "Ja, men facaden skal først afrenses, så alger, mos og løs maling er fjernet. Males der over, vil malingen ikke hæfte, og problemet kommer hurtigt tilbage.",
    },
    {
      q: "Skal jeg søge tilladelse for at male facaden?",
      a: "Almindelig vedligeholdelsesmaling kræver normalt ikke byggetilladelse. Er huset bevaringsværdigt, eller er du medlem af en forening, kan der gælde retningslinjer for facadefarve, som du bør afklare på forhånd.",
    },
    {
      q: "Hvad koster facademaling?",
      a: "Prisen afhænger af facadens areal og højde, behovet for stillads, facadens stand og materiale. Vi besigtiger altid facaden og giver et gratis og uforpligtende tilbud.",
    },
    {
      q: "Kan I male vinduer, døre og garage samtidig?",
      a: "Ja. Det er ofte en fordel at samle opgaverne, så stillads kun skal opstilles én gang, og hele huset fremstår ensartet.",
    },
  ],
  ctaTitle: "Klar til at få malet facaden?",
};

export default function ServiceFacade() {
  return <ServicePageTemplate data={data} />;
}
