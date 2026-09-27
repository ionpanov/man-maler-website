import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";

interface CityLink {
  name: string;
  href: string;
}

interface Group {
  title: string;
  cities: CityLink[];
}

const GROUPS: Group[] = [
  {
    title: "København og Vestegnen",
    cities: [
      { name: "København", href: "/maler-koebenhavn" },
      { name: "Frederiksberg", href: "/maler-frederiksberg" },
      { name: "Hvidovre", href: "/maler-hvidovre" },
      { name: "Rødovre", href: "/maler-rodovre" },
      { name: "Herlev", href: "/maler-herlev" },
      { name: "Glostrup", href: "/maler-glostrup" },
      { name: "Ballerup", href: "/maler-ballerup" },
      { name: "Taastrup", href: "/maler-taastrup" },
      { name: "Albertslund", href: "/maler-albertslund" },
      { name: "Ishøj", href: "/maler-ishoj" },
      { name: "Brøndby", href: "/maler-brondby" },
    ],
  },
  {
    title: "Nordsjælland",
    cities: [
      { name: "Lyngby", href: "/maler-lyngby" },
      { name: "Gentofte", href: "/maler-gentofte" },
      { name: "Hillerød", href: "/maler-hillerod" },
      { name: "Helsingør", href: "/maler-helsingor" },
    ],
  },
  {
    title: "Roskilde og Sydsjælland",
    cities: [
      { name: "Roskilde", href: "/maler-roskilde" },
      { name: "Hedehusene", href: "/maler-hedehusene" },
      { name: "Greve", href: "/maler-greve" },
      { name: "Køge", href: "/maler-koge" },
      { name: "Næstved", href: "/maler-naestved" },
    ],
  },
];

export default function Omraader() {
  return (
    <>
      <Helmet>
        <title>Malerfirma på Sjælland | Se Alle Vores Områder – MAN MALER</title>
        <meta
          name="description"
          content="MAN MALER dækker hele Sjælland — se hvilke byer og områder vi udfører malerarbejde i, fra Ballerup og Greve til Køge og Helsingør."
        />
        <meta
          name="keywords"
          content="malerfirma sjælland, maler ballerup, maler køge, maler hillerød, maler helsingør, maler greve, maler gentofte"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://manmaler.dk/omraader" />

        <meta property="og:title" content="Malerfirma på Sjælland | MAN MALER" />
        <meta
          property="og:description"
          content="Se alle de byer og områder på Sjælland, hvor MAN MALER udfører professionelt malerarbejde."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manmaler.dk/omraader" />
        <meta property="og:image" content="https://manmaler.dk/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Malerfirma på Sjælland | MAN MALER" />
        <meta
          name="twitter:description"
          content="Se alle de byer og områder, hvor MAN MALER udfører malerarbejde."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-warm" />
        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Vores Områder på Sjælland
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              MAN MALER udfører professionelt malerarbejde i mange byer og
              kommuner på Sjælland. Vælg din by nedenfor for at se, hvad vi
              tilbyder netop dér.
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Få et gratis tilbud
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
                    key={city.href}
                    to={city.href}
                    className="flex items-center gap-2 p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-sm font-medium text-foreground"
                  >
                    <MapPin size={16} className="text-primary flex-shrink-0" />
                    Maler i {city.name}
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden bg-primary">
        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary-foreground">
              Ser du ikke dit område på listen?
            </h2>
            <p className="text-lg mb-10 text-primary-foreground/90">
              Kontakt os alligevel — vi dækker hele Sjælland og giver altid et
              gratis og uforpligtende tilbud.
            </p>
            <Link
              to="/kontakt"
              className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Få et gratis tilbud
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
