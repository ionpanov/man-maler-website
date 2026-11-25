import { Link } from "react-router-dom";
import ServicePageTemplate, { ServicePageData, ServicePageLabels } from "@/components/ServicePageTemplate";
import { EN_ROUTES, hreflangAlternates, langPath } from "@/lib/enRoutes";
import commercialImg from "@/assets/commercial.webp";

const link = "text-primary hover:underline";
const DA_PATH = "/ydelser/erhvervsmaling";
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
  faqHeading: () => "Frequently asked questions about commercial painting",
  citiesHeading: () => "Commercial painting in your area",
};

const data: ServicePageData = {
  lang: "en",
  labels: enLabels,
  alternates: hreflangAlternates(DA_PATH),
  path: EN_ROUTES[DA_PATH],
  name: "Commercial painting",
  serviceType: "Commercial painting and decorating for businesses",
  title: "Commercial painting | Office & shop painter – MAN MALER",
  description:
    "Commercial painting for offices, shops, institutions and warehouses in Copenhagen and Zealand. Planned without disrupting operations. Free quote.",
  keywords:
    "commercial painting, office painter, shop painting, warehouse painting, commercial painting company, property maintenance, institution painter, painting work for businesses",
  breadcrumb: [{ name: "Home", to: "/" }, { name: "Commercial painting" }],
  h1: "Commercial painting in Copenhagen and Zealand",
  lead:
    "We paint offices, shops, institutions, warehouses and properties, planned so that operations are disturbed as little as possible. A fixed contact person, a clear schedule and a quote that is easy to understand.",
  heroPoints: ["Free, non-binding quote", "Reply within 24 hours", "Covering Copenhagen and all of Zealand"],
  image: {
    src: commercialImg,
    alt: "Commercial painting of an office and business premises",
  },
  imageHeading: "Painting work that fits into your company's day",
  imageParagraphs: [
    "In a business, downtime costs money. That is why commercial painting is as much about planning as about paint: when can the room be taken out of use, how do we protect furniture and IT, and when does it need to be ready again?",
    "At MAN MALER we plan the work around your operations, often in the evening, at weekends or in stages. You get a written quote with scope, schedule and materials, so you know what happens and when.",
  ],
  intro: {
    heading: "What does commercial painting include?",
    paragraphs: [
      "Commercial painting covers painting work in all kinds of business premises: offices and meeting rooms, shops and showrooms, canteens and staff rooms, warehouses and production halls, institutions such as schools and care homes, and common areas in properties, for example stairwells and basement corridors.",
      "The requirements vary a lot. In an office it is about a calm working environment and often about matching the company's brand colours. In a shop, the facade and the interior need to support the brand, and the work is best done outside opening hours. Institutions often require low-emission paint and planning outside the hours of use, and industrial premises have requirements for durability and cleaning.",
      "Many businesses also need ongoing maintenance rather than one-off jobs. Here we can agree a regular arrangement, so the premises are kept in good condition without you having to find a new painter each time.",
    ],
  },
  steps: {
    heading: "How a commercial job works",
    items: [
      {
        title: "Needs and inspection",
        text: "We go through the premises, clarify requirements for colours, materials and operating hours, and agree who your contact person is with us.",
      },
      {
        title: "Schedule without disruption",
        text: "The work is placed outside opening hours, at weekends or in stages, so the business can carry on.",
      },
      {
        title: "Covering and protection",
        text: "Furniture, IT equipment, goods and floors are covered, and walkways are screened off, so daily work can continue around the job.",
      },
      {
        title: "Execution",
        text: "Preparation, filling and painting are carried out according to the plan. With several rooms we work in stages, so only part of the premises is out of use at a time.",
      },
      {
        title: "Handover",
        text: "The covering is removed, the premises are cleaned of paint residue, and we go through the result with you, so the business is ready for the next working day.",
      },
    ],
  },
  table: {
    heading: "Commercial painting by type of premises",
    intro:
      "An office, a shop and a warehouse have different requirements for paint and planning. Here is an overview of what we typically take into account.",
    columns: ["Type of premises", "Typical solution", "Keep in mind"],
    rows: [
      {
        p: "Offices and meeting rooms",
        d: "Calm colours and durable wall paint, often matched to the company's brand colours.",
        h: (
          <>
            Often painted outside working hours or in stages. See our experience with office companies in{" "}
            <Link to={p("/maler-ballerup")} className={link}>Ballerup</Link>.
          </>
        ),
      },
      {
        p: "Shops and showrooms",
        d: "Facade and shop interior in the chain's or brand's colours, with sharp edges around glass and signs.",
        h: (
          <>
            Planned after closing time or at weekends. Read about chain stores in{" "}
            <Link to={p("/maler-herlev")} className={link}>Herlev</Link>.
          </>
        ),
      },
      {
        p: "Schools, care homes and institutions",
        d: "Easy-to-clean, low-emission paint in heavily used rooms.",
        h: (
          <>
            The work is planned outside the hours of use. Read more under{" "}
            <Link to={p("/maler-naestved")} className={link}>Næstved</Link>.
          </>
        ),
      },
      {
        p: "Clinics and healthcare facilities",
        d: "Hygienic surfaces that withstand frequent cleaning.",
        h: (
          <>
            Coordinated with operations, so patients are not disturbed. Read about the healthcare sector in{" "}
            <Link to={p("/maler-glostrup")} className={link}>Glostrup</Link>.
          </>
        ),
      },
      {
        p: "Warehouses and industry",
        d: "Durable paint, often resistant to cleaning and chemicals, suited to the production environment.",
        h: (
          <>
            Requirements for the surface and fire protection are clarified first. See the business areas in{" "}
            <Link to={p("/maler-albertslund")} className={link}>Albertslund</Link> and{" "}
            <Link to={p("/maler-taastrup")} className={link}>Taastrup</Link>.
          </>
        ),
      },
      {
        p: "Laboratories and research environments",
        d: "Surfaces that withstand chemicals and frequent cleaning.",
        h: (
          <>
            Planned outside research and operating hours. See{" "}
            <Link to={p("/maler-lyngby")} className={link}>Lyngby</Link> for businesses near DTU.
          </>
        ),
      },
      {
        p: "Common areas in properties",
        d: "Stairwells, stairs and basement corridors with robust, easy-to-clean paint.",
        h: (
          <>
            Planned in stages, so residents and tenants are disturbed as little as possible. See{" "}
            <Link to={p("/maler-brondby")} className={link}>Brøndby</Link> for larger property projects.
          </>
        ),
      },
    ],
  },
  price: {
    heading: "What affects the price of commercial painting?",
    paragraphs: [
      "The price of commercial painting depends on more than the square metres. Planning around operations and requirements for materials often take up more than the paint itself.",
      "These factors matter most for the price:",
    ],
    items: [
      "Area, number of rooms and number of floors.",
      "Whether the work has to be done outside opening hours, in the evening or at weekends.",
      "Splitting into stages, so operations can continue.",
      "Requirements for materials, for example low emissions, cleanability or fire protection.",
      "Condition of the surface and the need for repairs and filling.",
      "Number of locations, if several shops or offices are painted alike.",
      "Time pressure and access, for example key handling and parking.",
    ],
    closing: (
      <>
        That is why we give a written quote with scope, schedule and materials. If you have several locations, we are
        happy to give one joint quote. Contact us via the <Link to="/kontakt" className={link}>contact form</Link>, and
        we will reply within 24 hours.
      </>
    ),
  },
  context: {
    heading: "Commercial painting across Zealand",
    paragraphs: [
      <>
        We take on commercial jobs across Copenhagen and Zealand, and the jobs vary from area to area. You can read
        about our experience with shops and brand colours in <Link to={p("/maler-herlev")} className={link}>Herlev</Link> and{" "}
        <Link to={p("/maler-ballerup")} className={link}>Ballerup</Link>, with institutions and industry in{" "}
        <Link to={p("/maler-naestved")} className={link}>Næstved</Link>, and with business areas in{" "}
        <Link to={p("/maler-taastrup")} className={link}>Taastrup</Link>,{" "}
        <Link to={p("/maler-albertslund")} className={link}>Albertslund</Link> and{" "}
        <Link to={p("/maler-brondby")} className={link}>Brøndby</Link>.
      </>,
      <>
        For the healthcare sector and research environments we focus closely on hygiene and planning, as described for{" "}
        <Link to={p("/maler-glostrup")} className={link}>Glostrup</Link> and <Link to={p("/maler-lyngby")} className={link}>Lyngby</Link>.
        If you run a business in <Link to={p("/maler-koebenhavn")} className={link}>Copenhagen</Link> or{" "}
        <Link to={p("/maler-roskilde")} className={link}>Roskilde</Link>, we cover you too.
      </>,
      <>
        If you want an ongoing partnership, or you are a company looking for a painter for larger projects, you can read about our{" "}
        <Link to={p("/b2b")} className={link}>B2B partnership</Link>. If the business also needs renovation after damage, you can read about our{" "}
        <Link to={p("/ydelser/renovering")} className={link}>renovation</Link>. For the outside of the property, see our{" "}
        <Link to={p("/ydelser/facademaling")} className={link}>facade painting</Link>, and for the premises inside our{" "}
        <Link to={p("/ydelser/indendoers-maling")} className={link}>interior painting</Link>.
      </>,
    ],
  },
  faqs: [
    {
      q: "Can you paint outside opening hours?",
      a: "Yes. We are happy to plan the work in the evening, at weekends or in stages, so the business can stay open and carry on operating.",
    },
    {
      q: "How do you avoid disturbing operations?",
      a: "We agree the schedule and access in advance, cover furniture and IT equipment, screen off walkways and work in stages, so only part of the premises is out of use at a time.",
    },
    {
      q: "Can you match our brand colours?",
      a: "Yes. Give us the colour codes or a colour sample, and we match the colours exactly, also across several locations, so the chain's shops and offices look uniform.",
    },
    {
      q: "Do you paint several locations at a time?",
      a: "Yes. If you have several shops, offices or departments, we are happy to give one joint quote and plan the job so that all locations get the same result.",
    },
    {
      q: "Do you use low-emission paint?",
      a: "Yes, where relevant. We especially recommend it in schools, institutions, care homes and clinics, where many people spend time in the rooms.",
    },
    {
      q: "Can you offer ongoing maintenance of commercial properties?",
      a: "Yes. Many businesses and properties benefit from a fixed agreement on ongoing maintenance, so the premises are kept in good condition. Contact us and we will find a model that suits you.",
    },
    {
      q: "How much does commercial painting cost?",
      a: "The price depends on area, number of rooms, timing of the work, requirements for materials and the condition of the surface. We inspect and give a free, non-binding quote.",
    },
  ],
  ctaTitle: "Ready to have your business painted?",
};

export default function ServiceCommercialEn() {
  return <ServicePageTemplate data={data} />;
}
