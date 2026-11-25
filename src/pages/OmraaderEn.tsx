import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";

import Breadcrumbs from "@/components/Breadcrumbs";
import ExploreLinks from "@/components/ExploreLinks";
import HreflangLinks from "@/components/HreflangLinks";
import { REGIONS, cityByPath } from "@/lib/cities";
import { EN_ROUTES, ORIGIN, langPath, cityNameEn } from "@/lib/enRoutes";

const DA_PATH = "/omraader";
const URL = `${ORIGIN}${EN_ROUTES[DA_PATH]}`;

const REGION_TITLES_EN: Record<string, string> = {
  "København og Vestegnen": "Copenhagen and the western suburbs",
  "Nordsjælland": "North Zealand",
  "Roskilde og Sydsjælland": "Roskilde and South Zealand",
};

const GROUPS = REGIONS.map((region) => ({
  title: REGION_TITLES_EN[region.title] ?? region.title,
  cities: region.paths.map((path) => cityByPath(path)!),
}));

export default function OmraaderEn() {
  return (
    <>
      <HreflangLinks daPath={DA_PATH} lang="en" />
      <Helmet>
        <title>Painting Company in Zealand | All Our Areas – MAN MALER</title>
        <meta
          name="description"
          content="MAN MALER covers all of Zealand. See which towns and areas we paint in, from Ballerup and Greve to Køge and Helsingør."
        />
        <meta
          name="keywords"
          content="painting company zealand, painter ballerup, painter køge, painter hillerød, painter helsingør, painter greve, painter gentofte"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />

        <meta property="og:title" content="Painting Company in Zealand | MAN MALER" />
        <meta
          property="og:description"
          content="See all the towns and areas in Zealand where MAN MALER does professional painting work."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Painting Company in Zealand | MAN MALER" />
        <meta
          name="twitter:description"
          content="See all the towns and areas where MAN MALER does painting work."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <Breadcrumbs ariaLabel="Breadcrumb" items={[{ name: "Home", to: "/" }, { name: "Areas" }]} />
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Our Areas in Zealand
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              MAN MALER does professional painting work in many towns and
              municipalities in Zealand. Choose your town below to see what we
              offer there.
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Get a free quote
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CITY DIRECTORY, GROUPED */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {GROUPS.map((group, gi) => (
            <AnimatedSection key={group.title} delay={gi * 0.1}>
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
                {group.title}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {group.cities.map((city) => (
                  <Link
                    key={city.path}
                    to={langPath(city.path, "en")}
                    className="flex items-center gap-2 p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-sm font-medium text-foreground"
                  >
                    <MapPin size={16} className="text-primary flex-shrink-0" />
                    Painter in {cityNameEn(city.name)}
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <ExploreLinks showAreas={false} />

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden bg-primary">
        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
              Don't see your area on the list?
            </h2>
            <p className="text-lg mb-10 text-primary-foreground/90">
              Contact us anyway. We cover all of Zealand and always give a free,
              no-obligation quote.
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
