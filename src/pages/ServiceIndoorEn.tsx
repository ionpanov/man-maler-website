import { Link } from "react-router-dom";
import { PRICES } from "@/lib/prices";
import ServicePageTemplate, { ServicePageData, ServicePageLabels } from "@/components/ServicePageTemplate";
import { hreflangAlternates, langPath } from "@/lib/enRoutes";
import interiorImg from "@/assets/interior.webp";

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
  faqHeading: () => "Frequently asked questions about interior painting",
  citiesHeading: () => "Interior painting in your area",
};

const data: ServicePageData = {
  lang: "en",
  labels: enLabels,
  alternates: hreflangAlternates("/ydelser/indendoers-maling"),
  path: "/en/services/interior-painting",
  name: "Interior painting",
  serviceType: "Interior painting and decorating",
  title: "Interior painting | Prices from 65 DKK/m² – MAN MALER",
  description:
    "Interior painting of walls, ceilings and woodwork in Copenhagen and Zealand. See prices, e.g. walls from 65 DKK/m² incl. VAT, and get a free quote.",
  keywords:
    "interior painting, painter walls and ceilings, apartment painting, painting company Copenhagen, painter price, move-out painting, filling and sanding",
  breadcrumb: [{ name: "Home", to: "/" }, { name: "Interior painting" }],
  h1: "Interior painting in Copenhagen and Zealand",
  lead:
    "We paint walls, ceilings, woodwork and kitchens in apartments, houses, terraced houses and business premises. Thorough preparation, clean edges and a quote that is easy to understand.",
  heroPoints: ["Free, non-binding quote", "Reply within 24 hours", "Covering Copenhagen and all of Zealand"],
  image: {
    src: interiorImg,
    alt: "Painting of walls and ceilings in a home",
  },
  imageHeading: "A professional painter makes the difference in the details",
  imageParagraphs: [
    "A good paint job shows in the transitions: sharp edges at ceilings and trim, an even sheen across the wall and no visible roller marks in daylight. That takes time for the preparation and experience with both materials and surfaces.",
    "At MAN MALER we do interior painting for private homes and business premises. You get a written quote that describes the surfaces, number of coats and materials, so you know exactly what is included.",
  ],
  intro: {
    heading: "What does interior painting include?",
    paragraphs: [
      "Interior painting usually means painting walls and ceilings, but also trim, skirting boards, doors, door frames, window frames and panels. In many homes it also includes repairing holes and cracks, filling uneven surfaces and removing old wallpaper, so the paint gets a flat, stable base.",
      "We take on anything from a single room to a whole home, and offices, shops and other business premises. Many people have the whole apartment or house painted in one go, because it gives an even result and puts covering, drying time and cleaning into one period.",
      "The job always starts with an assessment of the surface. Nicotine stains, water damage, dark colours and older paint layers each call for their own preparation, and it is the preparation that decides how long the result lasts.",
    ],
  },
  steps: {
    heading: "How a painting job works with us",
    items: [
      {
        title: "Inspection and quote",
        text: "You send photos, measurements and a short description, or we come by. Then you get a written quote with scope, number of coats and materials.",
      },
      {
        title: "Covering and protection",
        text: "Floors, furniture, windows and sockets are covered, so dust and paint do not end up where they should not.",
      },
      {
        title: "Preparation",
        text: "We wash, sand, fill and repair, and prime where the surface needs it, for example on newly filled areas, nicotine stains or when going from a dark to a light colour.",
      },
      {
        title: "Painting",
        text: "The ceiling is painted first, then the walls and finally the woodwork. Normally two coats are applied for an even, fully covering finish.",
      },
      {
        title: "Handover",
        text: "The covering is removed, the room is cleared, and we go through the result with you before the job is finished.",
      },
    ],
  },
  table: {
    heading: "The right paint for each room and surface",
    intro:
      "Walls, ceilings and woodwork have different requirements for sheen, durability and preparation. Here is an overview of the choices we typically make together with you.",
    columns: ["Room or surface", "Typical solution", "Keep in mind"],
    rows: [
      {
        p: "Ceilings",
        d: "Very matt ceiling paint (low sheen) that reduces glare and hides small imperfections.",
        h: "Painted first. Ceilings with stains or a previous dark colour often need priming and two coats.",
      },
      {
        p: "Walls in living room and bedroom",
        d: "Matt or slightly matt wall paint in a uniform colour.",
        h: "Filling and sanding holes and joints is essential for an even look in the light.",
      },
      {
        p: "Kitchen and hallway",
        d: "Washable wall paint with high durability.",
        h: "Grease, splashes and touch wear the surface most. Choose a paint that can be wiped without going dull or streaky.",
      },
      {
        p: "Bathroom and wet rooms",
        d: "Moisture-resistant paint suited to wet rooms.",
        h: "The surface must be dry and the ventilation in order. Mould is treated before painting.",
      },
      {
        p: "Woodwork, doors and trim",
        d: "Durable wood paint in a satin to semi-gloss finish.",
        h: "Previously painted surfaces are washed and sanded, and bare wood is primed.",
      },
      {
        p: "Walls with wallpaper",
        d: "Paint over suitable glass fibre wallpaper, or paint after the wallpaper is removed.",
        h: "Loose wallpaper is removed and the wall is filled. We assess at the inspection whether the wallpaper can be painted over.",
      },
    ],
  },
  price: {
    heading: "Interior painting prices and what affects them",
    paragraphs: [
      "Here you can see our prices for the most common jobs. They are in Danish kroner (DKK) incl. 25% VAT. They are indicative, because preparation and details often take more time than the painting itself, so two rooms of the same size can have different prices.",
      "These factors matter most for the price:",
    ],
    priceList: PRICES,
    priceListAfter: 1,
    items: [
      "Area and ceiling height, and the number of rooms to be painted.",
      "Number of coats, and whether the colour changes from dark to light.",
      "Condition of the surface: holes, cracks, filling, nicotine and water damage.",
      "Wallpaper that has to be removed before the walls can be painted.",
      "Woodwork, trim, doors and windows, because detail work takes time.",
      "Access, for example a floor without a lift or limited parking.",
      "Whether the rooms are furnished or empty.",
    ],
    closing: (
      <>
        That is why we give a written quote that describes the scope, instead of a loose price estimate.
        You can send photos and measurements via the <Link to="/kontakt" className={link}>contact form</Link>,
        and get a reply within 24 hours.
      </>
    ),
  },
  context: {
    heading: "Interior painting of apartments, houses and businesses",
    paragraphs: [
      <>
        In older apartment buildings, where we often work in <Link to={p("/maler-frederiksberg")} className={link}>Frederiksberg</Link> and
        in <Link to={p("/maler-koebenhavn")} className={link}>Copenhagen</Link>, stucco ceilings, panels and old wallpaper need extra care.
        For houses with several rooms and buildings on the plot, we plan the work as a whole, as described for <Link to={langPath("/maler-lyngby", "en")} className={link}>Lyngby</Link> and <Link to={langPath("/maler-gentofte", "en")} className={link}>Gentofte</Link>.
      </>,
      <>
        If the home is being made ready for sale, it can pay to prioritise the hallway, living room and kitchen. Read more under <Link to={langPath("/maler-taastrup", "en")} className={link}>Taastrup</Link>.
        At move-out, fast and even painting matters, both in private rentals (see <Link to={langPath("/maler-roskilde", "en")} className={link}>Roskilde</Link>) and in social housing, as in <Link to={langPath("/maler-ishoj", "en")} className={link}>Ishøj</Link>.
      </>,
      <>
        In offices and shops we plan the work outside opening hours, so operations are not disturbed. You can read about business jobs and brand colours on the pages for <Link to={langPath("/maler-ballerup", "en")} className={link}>Ballerup</Link>, <Link to={langPath("/maler-herlev", "en")} className={link}>Herlev</Link> and <Link to={langPath("/maler-naestved", "en")} className={link}>Næstved</Link>.
        If you also need the outside of the house painted, read about our <Link to={langPath("/ydelser/facademaling", "en")} className={link}>facade painting</Link>. If the walls or ceiling are damaged by damp or mould, you will find more under <Link to={langPath("/ydelser/renovering", "en")} className={link}>renovation</Link>, and for offices and shops see <Link to={langPath("/ydelser/erhvervsmaling", "en")} className={link}>commercial painting</Link>.
      </>,
    ],
  },
  faqs: [
    {
      q: "How long does it take to paint an apartment?",
      a: "It depends on the size and the condition of the surfaces. An apartment of 70-80 m² can often be painted in a few days if there is no extensive filling or wallpaper removal. For larger homes or many repairs, we plan a longer period, which is stated in the quote.",
    },
    {
      q: "Can I stay at home while you paint?",
      a: "In many cases yes, especially if it is only a few rooms. For larger jobs we recommend emptying the affected rooms or not using them for a while. It gives a better result and a shorter job.",
    },
    {
      q: "Do I have to move the furniture myself?",
      a: "We move and cover smaller furniture. If you want us to handle heavier furniture too, we agree on it in advance so it is stated in the quote.",
    },
    {
      q: "How many coats of paint do the walls need?",
      a: "Normally two coats for a fully covering, even result. When going from a dark to a light colour, or on surfaces with stains, priming or an extra coat may be needed.",
    },
    {
      q: "Can you remove wallpaper before painting?",
      a: "Yes. The wallpaper is removed, the walls are repaired and filled, and only then are they painted. If the wallpaper is firmly attached and suitable, it can in some cases be painted over. We assess that at the inspection.",
    },
    {
      q: "How much does interior painting cost?",
      a: "The price depends on area, number of rooms, condition of the surfaces, number of coats and access. We always give a free, non-binding quote after we have seen or been given a description of the job.",
    },
    {
      q: "Do you also paint inside business premises?",
      a: "Yes, we paint offices, shops and other business premises. The work is often planned outside opening hours or in stages, so operations can continue.",
    },
  ],
  ctaTitle: "Ready to have your interior painted?",
};

export default function ServiceIndoorEn() {
  return <ServicePageTemplate data={data} />;
}
