import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import exteriorImg from "@/assets/exterior.webp";

import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import HreflangLinks from "@/components/HreflangLinks";
import { EN_ROUTES, ORIGIN, langPath } from "@/lib/enRoutes";

const DA_PATH = "/maler-roskilde";
const L = (daPath: string) => langPath(daPath, "en");
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;
const TITLE = "Painter Roskilde | Interior Painting & Free Quote";

const AREAS = [
  "Roskilde by", "Viby Sjælland", "Vindinge", "Svogerslev",
  "Himmelev", "Gundsømagle", "Trekroner", "Jyllinge",
];

const FAQS = [
  {
    q: "Do you paint both detached houses and terraced houses in Roskilde?",
    a: "Yes. The Roskilde area has many detached houses, terraced houses and older homes, and they make up a large part of our work here — from facade painting and wood protection to interior renovation.",
  },
  {
    q: "How long does it take to paint a facade?",
    a: "It depends on the size and condition of the house and how much preparation is needed (for example cleaning off old paint or repairing plaster and woodwork before painting). We always come and see the job before we give a schedule and a quote.",
  },
  {
    q: "Do you also cover Vindinge, Viby and Jyllinge?",
    a: "Yes, we cover all of Roskilde Municipality and the surrounding areas — including Viby Sjælland, Vindinge, Svogerslev, Himmelev and Jyllinge.",
  },
  {
    q: "What does it cost to have a house painted in Roskilde?",
    a: "The price depends on the size of the house, the condition of the surfaces and how much preparation is needed. We always give a free, no-obligation quote once we have seen the job.",
  },
  {
    q: "Can you do outdoor and indoor jobs at the same time?",
    a: "Yes, many of our customers in the Roskilde area get several jobs done at once — for example facade painting outside and renovation of a few rooms inside. We are happy to plan it all as one continuous process.",
  },
  {
    q: "Can walls and ceilings be painted when moving out?",
    a: "Yes, if your lease or the condition of the home requires it. Check the move-in report and your agreement with the landlord. Holes, stains and colour changes should be repaired so the result looks even at the move-out inspection.",
  },
  {
    q: "Which paint is best for kitchens and woodwork?",
    a: "Kitchen walls need a tough, easy-to-clean paint that can handle grease and splashes. For doors, frames, panels and windows we use hard-wearing wood paint. Thorough washing, sanding and priming where needed are essential.",
  },
];

const KEY_TAKEAWAYS = [
  "Thorough preparation with filling, sanding and priming is essential for a durable, even result.",
  "Choose paint by room and surface: kitchens need washable finishes, while ceilings are often best in a very matt paint.",
  "For a move-out, the quote should clearly include masking, repairs, number of coats and cleaning up.",
  "Book painting work in good time, and keep written records of the agreement, the price and the work done.",
];

const MALING_TABLE = [
  {
    p: "Walls",
    d: "A tough surface that can be wiped clean and keeps its look.",
    h: "Choose paint by surface, how the room is used and the finish you want.",
  },
  {
    p: "Ceilings",
    d: "Very matt paint reduces glare and hides minor unevenness.",
    h: "A freshly painted ceiling can bring more light and lift the whole room.",
  },
  {
    p: "Kitchen walls",
    d: "Must withstand grease, splashes and frequent cleaning without going dull or patchy.",
    h: "Pay particular attention to walls near work areas, the dining area and built-in cupboards.",
  },
  {
    p: "Woodwork and windows",
    d: "Hard-wearing paint with good adhesion that can handle light, temperature changes and handling.",
    h: "Wash, sand and use the right primer, especially on surfaces that have been painted before.",
  },
  {
    p: "Wallpaper",
    d: "The wallpaper must have a texture that suits painting.",
    h: "Check that the wallpaper is firmly attached and clean before painting.",
  },
  {
    p: "Spray-painted surfaces",
    d: "Can give a very even, elegant finish on larger, continuous surfaces.",
    h: "Requires careful masking and safe handling around edges, windows and furniture.",
  },
];

export default function MalerRoskildeEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Get help choosing a painter in Roskilde, defining the scope of work and judging quotes for interior painting, move-out painting and facades."
        />
        <meta
          name="keywords"
          content="painter roskilde, painting company roskilde, interior painting roskilde, facade painting roskilde, painter viby sjælland, painter vindinge"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Professional painting company in Roskilde. Interior painting, facade painting, renovation and commercial painting. Free, no-obligation quote."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Professional painting company in Roskilde. Free, no-obligation quote."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Home", to: "/" }, { name: "Areas", to: langPath("/omraader", "en") }, { name: "Painter in Roskilde" }]}
            ariaLabel="Breadcrumb"
          />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Painter in Roskilde
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Painting company for detached houses, terraced houses and businesses in Roskilde and the surrounding area —
              facade painting, interior painting and renovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                We cover the whole Roskilde area
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                Reply within 24 hours
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" />
                Free, no-obligation quote
              </div>
            </div>
            <Link
              to="/kontakt"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Get a free quote
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO / LOCAL RELEVANCE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-card-foreground">
              A painting company with experience in the Roskilde area
            </h2>
            <p className="text-muted-foreground mb-4">
              Roskilde and the surrounding area are known for many detached
              houses, terraced houses and freestanding homes — often with
              larger facade areas, woodwork and gardens than you see in
              apartment buildings. As a painter in Roskilde, we therefore often
              get jobs involving facade painting, wood protection and exterior
              maintenance, on top of ordinary interior painting.
            </p>
            <p className="text-muted-foreground mb-4">
              Many of the houses in and around Roskilde are older properties
              where the surfaces need thorough preparation before painting —
              cleaning off old paint, repairing plaster or woodwork, and the
              right primer, so the result lasts for many years.
            </p>
            <p className="text-muted-foreground">
              We cover <strong>Roskilde by</strong> and the surrounding
              areas such as <strong>Viby Sjælland</strong>,{" "}
              <strong>Vindinge</strong>, <strong>Svogerslev</strong> and{" "}
              <strong>Jyllinge</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
              We cover the whole Roskilde area
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {AREAS.map((a) => (
                <span
                  key={a}
                  className="px-4 py-2 rounded-full bg-warm-surface text-sm text-foreground border border-border"
                >
                  {a}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CASE HIGHLIGHT */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={exteriorImg}
                alt="Facade painting of a house"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-card-foreground">
              Facade painting in Roskilde
            </h2>
            <p className="text-muted-foreground mb-4">
              Facade painting of houses is one of the jobs we often do for
              homeowners in the Roskilde area — with a focus on thorough
              preparation of the surfaces and durable, weatherproof
              materials.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground mb-2">
              "We had the whole facade of our house painted, and the result is
              really beautiful. The work was done professionally, and
              communication was easy all the way through. Highly
              recommended."
            </blockquote>
            <p className="text-sm text-muted-foreground mb-6">— Lars P., Roskilde</p>
            <Link
              to="/referencer"
              className="inline-block py-1 text-primary font-medium hover:underline"
            >
              See more of our projects →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE — PAINTING WALLS, CEILINGS, KITCHEN AND WOODWORK */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
              Painting walls, ceilings, kitchens and woodwork
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-10">
              <p>
                A good paint job starts with choosing the right paint for the
                room and the surface. Walls, ceilings, kitchens and woodwork
                make different demands on gloss, durability and preparation,
                and you can see it in the finished result. A calm, even wall
                colour can make a room feel larger and more finished, while a
                freshly painted ceiling brings light and lifts the whole
                interior. For ceilings a very matt paint is often chosen, which
                reduces glare and hides minor unevenness, while walls
                typically benefit from a tougher surface that can be wiped
                clean without losing its look.
              </p>
              <p>
                In rooms with a lot of activity or moisture, kitchen paint is a
                discipline of its own. The surface has to withstand grease,
                splashes and frequent cleaning without the colour going dull or
                patchy. This also applies around the dining area, by built-in
                cupboards and on walls close to work areas. The right paint
                makes everyday upkeep easier and keeps the room looking good
                over time.
              </p>
              <p>
                Woodwork such as panels, doors, frames and windows needs
                different treatment from plastered walls. The paint must be
                hard-wearing, adhere well and cope with changing light,
                temperature and handling. Thorough preparation with washing,
                sanding and the right primer is essential, especially on
                surfaces that have been painted before. The same applies if
                wallpaper is to be painted: it must be firmly attached, clean
                and have a texture that suits painting before you start.
              </p>
              <p>
                For larger, continuous surfaces, spray painting can give a very
                even and elegant finish, but the method requires careful
                masking and safe handling of edges, windows and furniture.
                Whatever the technique, the best solution is the one that suits
                the surface, how the room is used and the finish you want to
                live with for many years.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Quick overview: paint by surface and use
            </h3>

            {/* Mobile: stacked cards, no horizontal scroll */}
            <div className="grid gap-4 mb-10 md:hidden">
              {MALING_TABLE.map((row) => (
                <div key={row.p} className="p-4 rounded-xl bg-warm-surface border border-border">
                  <p className="font-semibold text-foreground mb-2">{row.p}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-foreground">Key features: </span>
                    {row.d}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Preparation: </span>
                    {row.h}
                  </p>
                </div>
              ))}
            </div>

            {/* Tablet/desktop: full table, no scroll needed */}
            <div className="hidden md:block mb-10">
              <table className="w-full text-sm border-collapse table-fixed">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="py-3 pr-4 font-semibold text-foreground w-1/5">Surface or area</th>
                    <th className="py-3 pr-4 font-semibold text-foreground w-2/5">Key features</th>
                    <th className="py-3 font-semibold text-foreground w-2/5">Preparation and points to watch</th>
                  </tr>
                </thead>
                <tbody>
                  {MALING_TABLE.map((row) => (
                    <tr key={row.p} className="border-b border-border align-top">
                      <td className="py-3 pr-4 font-medium text-foreground">{row.p}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.d}</td>
                      <td className="py-3 text-muted-foreground">{row.h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-foreground">
              Choosing paint for the room
            </h3>
            <ul className="space-y-2">
              {[
                "Use matt ceiling paint that reduces glare and hides small unevenness.",
                "Choose tough wall paint that can be wiped clean in rooms with a lot of activity.",
                "Use washable kitchen paint near work areas where grease and splashes occur.",
                "Wash, sand and prime woodwork thoroughly before painting doors, frames and windows.",
                "Mask carefully when spray painting for even surfaces and clean edges.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE — MAN MALER IN ROSKILDE */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Does your home need new colours, or are you moving out and need
              the walls and woodwork to look sharp? MAN MALER is your local
              painter in Roskilde, with a sense for thorough preparation, neat
              details and durable solutions. We help with interior painting of
              walls, ceilings, kitchens and woodwork – and are happy to give a
              free, no-obligation quote.
            </p>

            <div className="p-6 rounded-xl bg-warm-surface border border-border mb-10">
              <h4 className="font-display font-semibold mb-3 text-foreground">
                ⚡ In short
              </h4>
              <ul className="space-y-2">
                {KEY_TAKEAWAYS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-card-foreground">
              MAN MALER: your experienced and thorough painter in Roskilde
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
              <p>
                When your home, business or property in Roskilde needs a new
                look, it is the details that decide the result. A good wall is
                not only about the colour you choose, but also careful
                preparation, sharp edges and a surface that stays good-looking
                day to day. MAN MALER is your experienced and thorough painter
                in Roskilde, when the job needs to be done with skill,
                decency and an eye for the room as a whole.
              </p>
              <p>
                Good painting begins long before the brush touches the wall.
                The surface has to be assessed, cracks and unevenness repaired,
                and the right treatment chosen for the woodwork, walls,
                ceilings or facades in question. This is where a professional
                painter makes a noticeable difference: not by rushing the
                process, but by making sure each coat gets the best possible
                starting point. Professional painting gives a more uniform look
                and can also help protect surfaces against daily wear.
              </p>
              <p>
                As a local painter in Roskilde, MAN MALER knows the value of a
                simple and secure process. You should get honest advice on
                colours, gloss levels and materials – and know what the work
                includes before it starts. Whether you are looking for classic
                white paint for an apartment, a warm colour palette for the
                house or a hard-wearing solution for business premises, the
                choice should be based on light, use and architecture.
              </p>
              <p>
                A well-done paint job can transform a room without changing its
                character. It can highlight original details, create
                continuity between rooms and give the home a well-kept feel.
                That is why it is worth choosing a professional who works
                systematically from masking to the final finish. Contact MAN
                MALER and get a quote for your job, so you have a clear basis
                for choosing the solution that suits your home and your
                expectations.
              </p>
            </div>

            <h3 className="text-lg font-display font-semibold mb-4 text-card-foreground">
              Benefits of professional painting
            </h3>
            <ul className="space-y-2 mb-10">
              {[
                "Thorough preparation gives even, durable surfaces.",
                "Honest advice on colours, gloss and materials.",
                "Sharp edges and careful masking protect your home.",
                "Solutions adapted to light, use and the architecture of the room.",
                "A clear quote gives peace of mind before the work begins.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-card-foreground">
              Painting when moving out: quotes and quality
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                When moving out, painting is often one of the last jobs to fall
                into place – and one of the most visible when the home is
                handed back. The lease, the move-in report and the move-out
                inspection are the best starting points for clarifying what is
                expected. If walls, ceilings or woodwork are discoloured,
                stained or marked by many holes and repairs, painting will
                typically be relevant.
              </p>
              <p>
                When you collect quotes, do not compare the total price alone.
                Ask for a clear description of the preparation: are masking,
                filling holes, sanding, priming and cleaning up included? The
                number of coats and the type of paint matter a lot for both
                result and durability. A cheap solution can turn out expensive
                if the surface is not prepared properly.
              </p>
              <p>
                An experienced painter in Roskilde can normally inspect the
                home, assess the surfaces and give a quote that takes into
                account the condition of the home, access and your deadline.
                So book in good time, especially around the turn of the
                month, and always keep written records of the agreement, the
                price and the work done.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES RECAP */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-foreground text-center">
              Our services in Roskilde
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Facade painting and exterior maintenance",
                "Wood protection for windows, doors and fences",
                "Interior painting of houses and terraced houses",
                "Renovation, filling and preparation of surfaces",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 flex flex-col items-center gap-2">
              <Link to={L("/ydelser")} className="inline-block py-1 text-primary font-medium hover:underline">
                See all our painting services →
              </Link>
              <Link to={L("/ydelser/indendoers-maling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Interior painting in Roskilde →
              </Link>
              <Link to={L("/ydelser/facademaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Facade painting in Roskilde →
              </Link>
              <Link to={L("/ydelser/renovering")} className="inline-block py-1 text-primary font-medium hover:underline">
                Renovation in Roskilde →
              </Link>
              <Link to={L("/ydelser/erhvervsmaling")} className="inline-block py-1 text-primary font-medium hover:underline">
                Commercial painting in Roskilde →
              </Link>
              <Link to={L("/maler-koebenhavn")} className="inline-block py-1.5 text-sm text-muted-foreground hover:underline">
                Live in Copenhagen? See our page about painters in Copenhagen →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <NearbyAreas current={DA_PATH} lang="en" />

      {/* FAQ */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-10 text-center text-card-foreground">
              Frequently asked questions — Painter in Roskilde
            </h2>
            <div className="space-y-8">
              {FAQS.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-semibold text-lg text-card-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to={L("/ofte-stillede-spoergsmaal")} className="inline-block py-1 text-primary font-medium hover:underline">
                See all frequently asked questions about painting →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden bg-primary">
        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
              Ready to get your place painted in Roskilde?
            </h2>
            <p className="text-lg mb-10 text-primary-foreground/90">
              Contact us today for a free, no-obligation quote.
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Get a free quote
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
