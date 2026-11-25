import { Link } from "react-router-dom";
import ServicePageTemplate, { ServicePageData, ServicePageLabels } from "@/components/ServicePageTemplate";
import { EN_ROUTES, hreflangAlternates, langPath } from "@/lib/enRoutes";
import exteriorImg from "@/assets/exterior.webp";

const DA_PATH = "/ydelser/facademaling";
const link = "text-primary hover:underline";
const p = (daPath: string) => langPath(daPath, "en");

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
  faqHeading: () => "Frequently asked questions about facade painting",
  citiesHeading: () => "Facade painting in your area",
};

const data: ServicePageData = {
  lang: "en",
  labels: enLabels,
  alternates: hreflangAlternates(DA_PATH),
  path: EN_ROUTES[DA_PATH],
  name: "Facade painting",
  serviceType: "Facade painting and exterior painting",
  title: "Facade painting | Villa & terraced house – MAN MALER",
  description:
    "Facade painting of villas, terraced houses and buildings in Zealand. Cleaning, repairs and weatherproof paint. Free, non-binding quote from MAN MALER.",
  keywords:
    "facade painting, painting a facade, facade renovation, painting company facade, facade painting price, house painter, exterior house painting, scaffolding",
  breadcrumb: [{ name: "Home", to: "/" }, { name: "Facade painting" }],
  h1: "Facade painting in Copenhagen and Zealand",
  lead:
    "We paint facades on villas, terraced houses and buildings. Thorough cleaning, repair of render, joints and woodwork, and weatherproof paint that protects the house for many years.",
  heroPoints: ["Free, non-binding quote", "Reply within 24 hours", "Covering Copenhagen and all of Zealand"],
  image: {
    src: exteriorImg,
    alt: "Facade painting of a villa",
  },
  imageHeading: "The facade is the first impression of the house and its most important protection",
  imageParagraphs: [
    "A well-kept facade lifts the look of the whole property, but paint is first of all protection. It keeps moisture out of render, brickwork and wood, and prevents damage that is expensive to repair.",
    "At MAN MALER we do facade painting with a focus on the preparation. You get a written quote that describes the cleaning, repairs, scaffolding or lift, and number of coats, so you know exactly what is included.",
  ],
  intro: {
    heading: "When should the facade be painted?",
    paragraphs: [
      "Most houses give clear signals before the damage really sets in. Flaking paint, crazing and cracks, discolouration, algae and moss, and paint that rubs off like chalk when you run a hand over the wall are all signs that the protection is wearing away.",
      "How often a facade needs painting depends on the material, the weather and the paint that is on it today. As a rule of thumb, wood cladding typically needs painting more often than rendered or brick facades, which often last around ten years or more. Near the coast and on west-facing facades the paint wears faster.",
      "Facade painting is best done from late spring to late summer, when the weather is dry and the temperature is typically above 5 degrees. That gives paint and primer the best conditions to bond. We recommend booking in good time, as demand is highest when the season starts.",
    ],
  },
  steps: {
    heading: "How we carry out facade painting",
    items: [
      {
        title: "Inspection and quote",
        text: "We assess the material and condition of the facade, access, and the need for scaffolding or a lift. Then you get a written quote.",
      },
      {
        title: "Scaffolding, lift and covering",
        text: "Windows, doors, terrace and plants are covered or protected. On houses with several floors, scaffolding or a lift ensures a safe and even result.",
      },
      {
        title: "Cleaning",
        text: "Algae, moss, dirt and loose paint are removed so the new paint can adhere. The cleaning is adapted to the material of the facade.",
      },
      {
        title: "Repairs",
        text: "Cracks in render, leaking joints and poor woodwork are repaired before painting. Damage is fixed here instead of being painted over.",
      },
      {
        title: "Priming",
        text: "Where the surface is absorbent, freshly rendered or bare wood, we prime so the paint gets the right grip and covers evenly.",
      },
      {
        title: "Painting and handover",
        text: "The facade is normally painted in two coats with weatherproof paint. At the end the covering and scaffolding are removed, and we go through the result with you.",
      },
    ],
  },
  table: {
    heading: "Facade painting by material",
    intro:
      "Render, brick, wood and concrete behave differently and each needs its own treatment. Here is an overview of what we typically do.",
    columns: ["Facade type", "Typical treatment", "Keep in mind"],
    rows: [
      {
        p: "Rendered facade",
        d: "Cleaning and priming if needed, then vapour-permeable facade paint, often mineral or acrylic based.",
        h: (
          <>
            Cracks in render are repaired first. New render must cure before it is painted, as described for{" "}
            <Link to={p("/maler-hillerod")} className={link}>new builds in Hillerød</Link>.
          </>
        ),
      },
      {
        p: "Brick and clay tile",
        d: "Cleaning, repair of joints and painting with a vapour-permeable facade paint.",
        h: "Moisture must not be sealed into the brickwork. Leaking joints are repaired before painting.",
      },
      {
        p: "Wood cladding",
        d: "Cleaning or sanding, priming and two coats of wood-protecting paint.",
        h: "Needs painting more often than brick. End grain and joints are the most exposed.",
      },
      {
        p: "Concrete",
        d: "Repair of spalling, treatment of exposed reinforcement and then concrete paint.",
        h: (
          <>
            Damage must be fixed before painting. Read more under{" "}
            <Link to={p("/maler-albertslund")} className={link}>Albertslund</Link>.
          </>
        ),
      },
      {
        p: "Eternit and fibre cement (older)",
        d: "Assessment before work starts, as older sheets may contain asbestos.",
        h: (
          <>
            No sanding or aggressive cleaning without an assessment. Read more under{" "}
            <Link to={p("/maler-rodovre")} className={link}>Rødovre</Link>.
          </>
        ),
      },
      {
        p: "Windows and exterior doors",
        d: "Cleaning, priming and hard-wearing wood paint with good adhesion.",
        h: (
          <>
            Coastal locations wear faster, as described for{" "}
            <Link to={p("/maler-greve")} className={link}>Greve</Link>.
          </>
        ),
      },
    ],
  },
  price: {
    heading: "What affects the price of facade painting?",
    paragraphs: [
      "The price of facade painting cannot be read from the size of the house alone. Scaffolding and preparation often make up a large part of the job, and they vary a lot from house to house.",
      "These factors matter most for the price:",
    ],
    items: [
      "The area and height of the facade, and with it the need for scaffolding or a lift.",
      "The condition of the facade: how much needs cleaning and repair.",
      "The material: render, brick, wood or concrete each have different requirements.",
      "Details such as plinth, eaves, gables, windows and doors.",
      "Access around the house, for example dense housing or limited space.",
      "Whether several buildings, for example garage and shed, are painted in the same job.",
    ],
    closing: (
      <>
        That is why we always inspect the facade before giving a quote. Many customers combine the facade with windows,
        garage and shed in one job, so the scaffolding only has to go up once. Send photos via the{" "}
        <Link to="/kontakt" className={link}>contact form</Link>, and we will reply within 24 hours.
      </>
    ),
  },
  context: {
    heading: "Facade painting across Zealand",
    paragraphs: [
      <>
        Facades have different needs depending on where the house is. Close to the coast, as in{" "}
        <Link to={p("/maler-greve")} className={link}>Greve</Link> and <Link to={p("/maler-helsingor")} className={link}>Helsingør</Link>,
        wind and salty air put extra demands on cleaning and paint. In{" "}
        <Link to={p("/maler-koge")} className={link}>Køge</Link> and <Link to={p("/maler-gentofte")} className={link}>Gentofte</Link> there are
        many listed or heritage-worthy houses, where colour and materials should be settled before the work is planned.
      </>,
      <>
        Villas in areas like <Link to={p("/maler-hedehusene")} className={link}>Hedehusene</Link> and{" "}
        <Link to={p("/maler-roskilde")} className={link}>Roskilde</Link> are often painted together with windows, garage and woodwork.
        On larger apartment blocks, as in <Link to={p("/maler-brondby")} className={link}>Brøndby</Link>, facade projects are
        typically decided jointly, and here we help with a quote that is clear enough to use in the decision.
      </>,
      <>
        If you also need painting indoors, you can read about our{" "}
        <Link to={p("/ydelser/indendoers-maling")} className={link}>interior painting</Link>. And if you are unsure whether your facade
        needs repair or just paint, contact us for a non-binding assessment. If the facade of a commercial property is to be painted, you can read about <Link to={p("/ydelser/erhvervsmaling")} className={link}>commercial painting</Link>, and if the facade has damage that needs more than paint, see <Link to={p("/ydelser/renovering")} className={link}>renovation</Link>.
      </>,
    ],
  },
  faqs: [
    {
      q: "How often does a facade need painting?",
      a: "It depends on the material and the weather. Wood cladding typically needs painting more often than rendered and brick facades, which often last around ten years or more. Signs that it is time are flaking, cracks, discolouration, algae and paint that rubs off.",
    },
    {
      q: "When in the year can the facade be painted?",
      a: "Best from late spring to late summer, when the weather is dry and the temperature is typically above 5 degrees. Dry conditions are essential for the paint to bond and the result to last.",
    },
    {
      q: "Does scaffolding have to go up?",
      a: "On houses with several floors or tall gables, scaffolding or a lift is normally used. On lower houses we assess at the inspection what is necessary. Scaffolding or a lift is included in the quote.",
    },
    {
      q: "Can the facade be painted if there is algae and moss?",
      a: "Yes, but the facade must be cleaned first, so algae, moss and loose paint are removed. If you paint over them, the paint will not adhere and the problem comes back quickly.",
    },
    {
      q: "Do I need permission to paint the facade?",
      a: "Ordinary maintenance painting does not normally require a building permit. If the house is listed or heritage-worthy, or you are a member of an association, there may be rules on facade colour that you should settle beforehand.",
    },
    {
      q: "What does facade painting cost?",
      a: "The price depends on the area and height of the facade, the need for scaffolding, the condition of the facade and the material. We always inspect the facade and give a free, non-binding quote.",
    },
    {
      q: "Can you paint windows, doors and the garage at the same time?",
      a: "Yes. It is often an advantage to combine the jobs, so the scaffolding only has to go up once and the whole house looks uniform.",
    },
  ],
  ctaTitle: "Ready to have the facade painted?",
};

export default function ServiceFacadeEn() {
  return <ServicePageTemplate data={data} />;
}
