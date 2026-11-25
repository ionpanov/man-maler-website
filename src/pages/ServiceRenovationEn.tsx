import { Link } from "react-router-dom";
import ServicePageTemplate, { ServicePageData, ServicePageLabels } from "@/components/ServicePageTemplate";
import { EN_ROUTES, hreflangAlternates, langPath } from "@/lib/enRoutes";
import renovationImg from "@/assets/renovation.webp";

const DA_PATH = "/ydelser/renovering";
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
  faqHeading: () => "Frequently asked questions about renovation",
  citiesHeading: () => "Renovation in your area",
};

const data: ServicePageData = {
  lang: "en",
  labels: enLabels,
  alternates: hreflangAlternates(DA_PATH),
  path: EN_ROUTES[DA_PATH],
  name: "Renovation",
  serviceType: "Renovation and refurbishment with painting work",
  title: "Home renovation | Painter & refurbishment – MAN MALER",
  description:
    "Renovation and refurbishment of homes in Copenhagen and Zealand: filling, water damage, mould, ceilings and complete painting. Free, non-binding quote.",
  keywords:
    "renovation, refurbishment, home renovation, painting company renovation, water damage painting, mould treatment, ceiling renovation, apartment renovation",
  breadcrumb: [{ name: "Home", to: "/" }, { name: "Renovation" }],
  h1: "Renovation and refurbishment in Copenhagen and Zealand",
  lead:
    "From single rooms to the whole home. We handle the painting and the refurbishment of surfaces: repair, filling, treatment of damp and mould damage, and a finish that lasts.",
  heroPoints: ["Free, non-binding quote", "Reply within 24 hours", "Covering Copenhagen and all of Zealand"],
  image: {
    src: renovationImg,
    alt: "Renovation and refurbishment of surfaces in a home",
  },
  imageHeading: "Renovation starts with what you cannot see",
  imageParagraphs: [
    "A renovation rarely succeeds on the paint itself. It is the surface underneath that decides the result: are the walls flat, is the ceiling dry, and has the cause of any moisture damage been found and stopped? That is why we always begin with a thorough inspection.",
    "At MAN MALER we handle the painting and the preparation of surfaces. If the job needs authorised tradespeople, for example for electrics, plumbing or sealing of wet rooms, we coordinate with them so the order is right and you do not have to manage everything yourself.",
  ],
  intro: {
    heading: "What do renovation and refurbishment include?",
    paragraphs: [
      "Renovation covers everything from a full refurbishment of a whole home to a single job that has got out of hand, like a ceiling with damp stains or a wall with mould. What the jobs have in common is that the surfaces are in poor condition and must be brought back to a flat, clean and durable base before painting.",
      "Typical jobs are repair of holes, cracks and joints, filling and sanding, removal of old wallpaper, treatment of mould and cleaning after water damage, renovation of ceilings, painting of wet rooms and treatment of floors. After windows are replaced or extra insulation is added, there is also often filling and painting left to do before the home is finished.",
      "When many tradespeople are involved, the order is decisive. Floors and wet rooms are typically done before the painting, while the ceiling and walls are painted last, so the result is not spoiled by the work that follows. We plan our part so it fits into the overall schedule.",
    ],
  },
  steps: {
    heading: "How a renovation works with us",
    items: [
      {
        title: "Inspection and clarification",
        text: "We go through the home, assess the surfaces and work out what is the cause and what is the symptom, for example with damp and mould.",
      },
      {
        title: "Plan and order of work",
        text: "You get a written quote and a plan that places our part in relation to other tradespeople and any insurance cases.",
      },
      {
        title: "Covering and stripping",
        text: "Floors, furniture and fittings are protected. Loose wallpaper, flaking paint and defective surfaces are removed.",
      },
      {
        title: "Repair and preparation",
        text: "Cracks and holes are repaired, surfaces are filled and sanded, and we prime where the surface needs it. Surfaces with mould are treated once the cause has been fixed.",
      },
      {
        title: "Painting and finish",
        text: "Ceiling first, then walls and finally woodwork. Normally two coats for a covering, even surface.",
      },
      {
        title: "Handover",
        text: "The covering is removed, the home is cleared, and we go through the result with you.",
      },
    ],
  },
  table: {
    heading: "Typical renovation jobs and what they require",
    intro:
      "Many renovations are about more than paint. Here is an overview of the jobs we solve most often and what to keep in mind.",
    columns: ["Job", "What it involves", "Keep in mind"],
    rows: [
      {
        p: "Complete refurbishment",
        d: "Covering, repair, filling and painting of walls, ceilings and woodwork throughout the home.",
        h: "Agree the order with other tradespeople, so paint is not spoiled by the work that follows.",
      },
      {
        p: "Water damage",
        d: "Cleaning and painting of the affected surfaces once the damage has been fixed and the surface is dry.",
        h: "The source must be found and stopped, and drying is done by specialists. Contact the insurer before the work starts.",
      },
      {
        p: "Mould",
        d: "Treatment of the surface, cleaning and painting with a mould-inhibiting paint.",
        h: "The cause, often moisture or poor ventilation, must be solved, or the mould will come back. Extensive mould should be assessed by a specialist.",
      },
      {
        p: "Ceilings",
        d: "Repair of cracks and joints, filling and painting. Removal of old wallpaper if needed.",
        h: "Damp stains from the roof or the floor above must be clarified before painting.",
      },
      {
        p: "Floors",
        d: "Sanding and treatment of wood and plank floors with lacquer, oil or paint.",
        h: "Floor work is planned before the walls are painted, and the floor is protected during the other work.",
      },
      {
        p: "Wet rooms",
        d: "Painting with wet-room paint on the surfaces that are not tiled.",
        h: "Sealing with a membrane requires authorised tradespeople. We coordinate so the painting comes last.",
      },
      {
        p: "After energy renovation",
        d: "Filling, repair and painting after new windows, extra insulation or new ceilings.",
        h: "Painting should wait until filler and render are dry and cured.",
      },
    ],
  },
  price: {
    heading: "What affects the price of renovation?",
    paragraphs: [
      "Renovation cannot be priced by square metres alone. The condition of the surface, and what is hidden behind it, matters far more than the paint itself.",
      "These factors matter most for the price:",
    ],
    items: [
      "The scope: one room, several rooms or the whole home.",
      "The condition of the surface: cracks, holes, flaking and old wallpaper.",
      "Damp and mould damage, and whether the cause has been fixed.",
      "Number of surfaces and details: ceilings, trim, doors and woodwork.",
      "Coordination with other tradespeople and the order of work.",
      "Access, for example a floor without a lift or limited parking.",
    ],
    closing: (
      <>
        Because renovation can reveal problems that only show once the surfaces are opened up, we always inspect
        first and make an allowance in the quote for unforeseen damage. Send photos via the{" "}
        <Link to="/kontakt" className={link}>contact form</Link>, and we will reply within 24 hours.
      </>
    ),
  },
  context: {
    heading: "Renovation of apartments, houses and basements",
    paragraphs: [
      <>
        Older houses make the greatest demands on the preparation. Villas and terraced houses from the mid-1900s, which we
        often see in <Link to={p("/maler-rodovre")} className={link}>Rødovre</Link> and{" "}
        <Link to={p("/maler-hvidovre")} className={link}>Hvidovre</Link>, often have several layers of paint, old render and
        damp in the basement. In apartment buildings in <Link to={p("/maler-frederiksberg")} className={link}>Frederiksberg</Link> it
        is the stucco ceilings, panels and wallpaper that need care.
      </>,
      <>
        Damp in basements and utility rooms is a recurring theme, which you can read more about under{" "}
        <Link to={p("/maler-hedehusene")} className={link}>Hedehusene</Link>. Close to the coast, as in{" "}
        <Link to={p("/maler-greve")} className={link}>Greve</Link>, the humidity is higher, and that puts extra demands on
        paint in the kitchen and bathroom.
      </>,
      <>
        If the home is being made ready for sale or rental, a targeted refurbishment can make a big difference. Read
        more about getting a home ready for sale under <Link to={p("/maler-taastrup")} className={link}>Taastrup</Link> and about
        move-out under <Link to={p("/maler-roskilde")} className={link}>Roskilde</Link>. When the renovation is finished, the house can also
        get a new <Link to={p("/ydelser/facademaling")} className={link}>facade</Link>, or you can see how we work
        with <Link to={p("/ydelser/indendoers-maling")} className={link}>interior painting</Link>.
      </>,
    ],
  },
  faqs: [
    {
      q: "Can you handle a whole renovation?",
      a: "We handle the painting and the refurbishment of surfaces: repair, filling, wallpaper and painting. If the job needs authorised tradespeople, for example electrics, plumbing or sealing of wet rooms, we coordinate with them so the order is right.",
    },
    {
      q: "What do you do about water damage?",
      a: "We do the painting once the damage has been fixed and the surface is dry: cleaning, filling and painting. The source of the damage must be found and stopped first, and drying is done by specialists. Always contact the insurer before the work starts.",
    },
    {
      q: "Can mould be painted over?",
      a: "No. Mould must be treated, and the cause, typically moisture or poor ventilation, must be solved first. Then the surface is cleaned and we paint with a mould-inhibiting paint. Extensive mould should be assessed by a specialist.",
    },
    {
      q: "Do I have to move out while the home is renovated?",
      a: "For smaller jobs you can often stay. For larger renovations where several rooms are affected and there is dust and filling, we recommend moving out of the affected rooms for the period. It gives a better result and a shorter job.",
    },
    {
      q: "How long does a renovation take?",
      a: "It depends on the scope. A single ceiling can be done in a few days, while a complete refurbishment of a home takes longer, not least because of the drying time for filler and paint. The schedule is stated in the quote.",
    },
    {
      q: "What does a renovation cost?",
      a: "The price depends on the scope, the condition of the surfaces, any damp and mould damage and coordination with other tradespeople. We inspect and give a free, non-binding quote, allowing for unforeseen damage.",
    },
    {
      q: "Can you paint after an energy renovation?",
      a: "Yes. After new windows, extra insulation or new ceilings, there is often filling and painting left to do. We do it once the surface is dry and cured.",
    },
  ],
  ctaTitle: "Ready to have your home renovated?",
};

export default function ServiceRenovationEn() {
  return <ServicePageTemplate data={data} />;
}
