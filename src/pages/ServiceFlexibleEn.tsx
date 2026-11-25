import { Link } from "react-router-dom";
import ServicePageTemplate, { ServicePageData, ServicePageLabels } from "@/components/ServicePageTemplate";
import { EN_ROUTES, hreflangAlternates, langPath } from "@/lib/enRoutes";
import flexibleImg from "@/assets/b2b-gallery-5-f.webp";

const link = "text-primary hover:underline";
const DA_PATH = "/ydelser/maler-aften-weekend";
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
  faqHeading: () => "Frequently asked questions about evening and weekend painting",
  citiesHeading: () => "Flexible painters in your area",
};

const data: ServicePageData = {
  lang: "en",
  labels: enLabels,
  alternates: hreflangAlternates(DA_PATH),
  path: EN_ROUTES[DA_PATH],
  name: "Flexible painter",
  serviceType: "Painting work in the evening and at weekends by arrangement",
  title: "Evening & weekend painter | Flexible – MAN MALER",
  description:
    "Painter in the evening and at weekends in Copenhagen and Zealand. We fit our schedule to yours. Free, non-binding quote from MAN MALER.",
  keywords:
    "evening painter, weekend painter, flexible painter, painter outside normal working hours, painter after work, painter Saturday, painter Sunday, painter by appointment, painter Copenhagen",
  breadcrumb: [{ name: "Home", to: "/" }, { name: "Evenings and weekends" }],
  h1: "Painter in the evening and at weekends in Copenhagen and Zealand",
  lead:
    "Not everyone can be home at ten o'clock on a Tuesday. That is why we fit our schedule to yours, so the painting work suits your day and not the other way around.",
  heroPoints: ["Schedule that fits yours", "Free, non-binding quote", "Covering Copenhagen and all of Zealand"],
  image: {
    src: flexibleImg,
    alt: "Painter on a ladder painting a wall by the cornice, work planned around the customer's schedule",
  },
  imageHeading: "A painting schedule that starts with you",
  imageParagraphs: [
    "Our regular hours are weekdays from 07:00 to 20:00, but we also work after 20:00 and at weekends when that suits you better. It is about finding a time when you as the customer feel comfortable and can keep up with your own work and your family.",
    "You tell us when there is access and when you would like peace and quiet, and we make a plan that holds. You get a written quote with a schedule, so there are no surprises.",
  ],
  intro: {
    heading: "When can we paint? You decide",
    paragraphs: [
      "Many private customers work during the day and find it hard to be at home while the tradespeople are there. Others live in an apartment with neighbours, where quiet periods matter, or have children who need to get to school and kindergarten. That is why we always agree the times with you before the work starts.",
      <>
        The same goes for businesses. A shop cannot close in the middle of the day, and an office has to be ready for Monday
        morning. Here we are happy to place the work in the evening or at weekends, so operations can continue. You can read more about
        our approach to businesses under <Link to={p("/ydelser/erhvervsmaling")} className={link}>commercial painting</Link> and
        our <Link to={p("/b2b")} className={link}>B2B partnership</Link>.
      </>,
      "Being flexible does not mean we compromise on quality. Preparation, covering and handover are the same, no matter when in the week we work.",
    ],
  },
  steps: {
    heading: "How we agree the timing",
    items: [
      {
        title: "You tell us what suits you",
        text: "Write in the contact form or call, and tell us when you are home and when it needs to be quiet. It can be evenings, weekends or particular days.",
      },
      {
        title: "Inspection at a time that suits you",
        text: "We look at the job and agree a time for the inspection that fits your schedule.",
      },
      {
        title: "Schedule in the quote",
        text: "You get a written, free quote with scope, materials and a schedule where the working hours are written in.",
      },
      {
        title: "Work as agreed",
        text: "We work at the agreed times, cover up and keep you updated along the way. If your day changes, we talk about it in good time.",
      },
      {
        title: "Handover",
        text: "We tidy up, go through the result with you and hand over the rooms at the time we agreed.",
      },
    ],
  },
  table: {
    heading: "When do flexible hours work best?",
    intro:
      "Here are examples of situations where customers typically want a schedule that differs from normal daytime hours.",
    columns: ["Situation", "Typical wish", "Keep in mind"],
    rows: [
      {
        p: "You work all day",
        d: "Meetings and inspection in the evening, and access to the home at agreed times.",
        h: "Agree how we get access and when you are home to see the result.",
      },
      {
        p: "Apartment with neighbours",
        d: "Noisy preparation at times when it disturbs least, and painting at other times.",
        h: (
          <>
            Read more about{" "}
            <Link to={p("/ydelser/indendoers-maling")} className={link}>interior painting</Link> and the preparation.
          </>
        ),
      },
      {
        p: "Family with children",
        d: "Work while the children are at school and nursery, or at weekends if that suits better.",
        h: "We take sleep, play and routines into account when we plan the rooms.",
      },
      {
        p: "Shop or office",
        d: "Painting work in the evening or at weekends, so operations can continue.",
        h: (
          <>
            Read about{" "}
            <Link to={p("/ydelser/erhvervsmaling")} className={link}>commercial painting</Link> and{" "}
            <Link to={p("/b2b")} className={link}>B2B partnership</Link>.
          </>
        ),
      },
      {
        p: "Letting and moving",
        d: "Quick refurbishment between two tenants, also at weekends if the deadline is tight.",
        h: (
          <>
            See our{" "}
            <Link to={p("/ydelser/renovering")} className={link}>renovation</Link> of apartments and ceilings.
          </>
        ),
      },
    ],
  },
  price: {
    heading: "Does it cost more to paint in the evening and at weekends?",
    paragraphs: [
      "It depends on the job. The price is determined first and foremost by area, preparation, materials and time. The time of the work can also matter, and we state that clearly in the quote.",
      "That is why we always inspect and give a written quote. These factors typically affect the price:",
    ],
    items: [
      "Area, number of rooms and ceiling height.",
      "Condition of the surface and the need for filling and repair.",
      "Choice of paint and colours.",
      "Whether the work has to be done outside normal working hours.",
      "Access and covering.",
    ],
    closing: (
      <>
        Write to us via the <Link to="/kontakt" className={link}>contact form</Link> and tell us which times
        suit you, and we will reply within 24 hours.
      </>
    ),
  },
  context: {
    heading: "Flexible painter across Copenhagen and Zealand",
    paragraphs: [
      <>
        We cover all of Copenhagen and Zealand, and we adapt the times locally. If you live in{" "}
        <Link to={p("/maler-koebenhavn")} className={link}>Copenhagen</Link>,{" "}
        <Link to={p("/maler-frederiksberg")} className={link}>Frederiksberg</Link> or{" "}
        <Link to={p("/maler-lyngby")} className={link}>Lyngby</Link>, the job can often be planned to fit a busy
        day. We offer the same flexibility in{" "}
        <Link to={p("/maler-roskilde")} className={link}>Roskilde</Link>,{" "}
        <Link to={p("/maler-hedehusene")} className={link}>Hedehusene</Link> and{" "}
        <Link to={p("/maler-naestved")} className={link}>Næstved</Link>.
      </>,
      <>
        If you want to know more about our other services, you can read about{" "}
        <Link to={p("/ydelser/facademaling")} className={link}>facade painting</Link>, and you can see our{" "}
        <Link to="/referencer" className={link}>references</Link>. You will find answers to the most common questions under{" "}
        <Link to={p("/ofte-stillede-spoergsmaal")} className={link}>frequently asked questions</Link>.
      </>,
    ],
  },
  faqs: [
    {
      q: "Can you paint in the evening?",
      a: "Yes. Our regular hours are weekdays 07:00–20:00, but we fit our schedule to yours, also after 20:00 if that suits better.",
    },
    {
      q: "Can you paint at weekends?",
      a: "Yes. We also work on Saturdays and Sundays by arrangement. Write in the contact form which times suit you.",
    },
    {
      q: "How do we agree the timing?",
      a: "You tell us when there is access and when you want peace and quiet. The times are written into the written quote, so we both know what has been agreed.",
    },
    {
      q: "Can you paint outside opening hours for shops and offices?",
      a: "Yes. We are happy to plan the work in the evening or at weekends, so the business can continue operating. Read more under commercial painting.",
    },
    {
      q: "Do I have to be home while you paint?",
      a: "We agree that together. Many customers give us access at certain times and see the result at handover. It is up to you.",
    },
    {
      q: "Is the quality the same, no matter when you work?",
      a: "Yes. Preparation, covering, painting and handover are the same, regardless of the time.",
    },
    {
      q: "How much does it cost?",
      a: "The price depends on area, preparation, materials and timing. We inspect and give a free, non-binding quote.",
    },
  ],
  ctaTitle: "Tell us when it suits you",
};

export default function ServiceFlexibleEn() {
  return <ServicePageTemplate data={data} />;
}
