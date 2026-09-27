import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";

interface Area {
  name: string;
  desc: string;
}

const AREAS: Area[] = [
  {
    name: "Lyngby",
    desc: "Kongens Lyngby i det nordlige Storkøbenhavn har mange store villaer og herskabelige huse. Her udfører vi ofte facademaling og omfattende renoveringsopgaver.",
  },
  {
    name: "Gentofte",
    desc: "Gentofte er kendt for store villaer og velholdte boligområder. Vi lægger vægt på præcision og et højt finish-niveau, når vi maler i kommunen.",
  },
  {
    name: "Greve",
    desc: "Greve ved kysten syd for København har mange parcelhuskvarterer. Vi udfører facademaling, træbeskyttelse og indendørs maling til boligejere i området.",
  },
  {
    name: "Køge",
    desc: "Køge er en købstad med en ældre bykerne og nyere boligområder udenfor. Vi tilpasser vores arbejde efter både historiske bygninger og moderne byggeri.",
  },
  {
    name: "Hillerød",
    desc: "Hillerød i Nordsjælland har en blanding af ældre og nyere boliger. Vi udfører malerarbejde til villaer, rækkehuse og erhvervsejendomme i området.",
  },
  {
    name: "Helsingør",
    desc: "Helsingør er en kystby med en historisk bykerne og mange ældre huse. Her kræver facademaling ofte ekstra forberedelse af gamle overflader, hvilket vi har erfaring med.",
  },
  {
    name: "Næstved",
    desc: "Næstved på Sydsjælland er en af regionens større byer med både ældre og nyere boligområder. Vi udfører malerarbejde til private og virksomheder i hele kommunen.",
  },
  {
    name: "Hedehusene",
    desc: "Hedehusene tæt på Roskilde har overvejende villakvarterer. Vi udfører facademaling og indendørs renovering for boligejere i og omkring byen.",
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
              kommuner på Sjælland. Se hvilke områder vi dækker, og hvad der
              typisk kendetegner malerarbejde hos os netop dér.
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

      {/* DEDICATED PAGES CALLOUT */}
      <section className="py-12 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-muted-foreground">
              Bor du i København, Roskilde eller Ballerup? Se vores dedikerede
              sider:{" "}
              <Link to="/maler-koebenhavn" className="text-primary font-medium hover:underline">
                Maler i København
              </Link>{" "}
              ·{" "}
              <Link to="/maler-roskilde" className="text-primary font-medium hover:underline">
                Maler i Roskilde
              </Link>{" "}
              ·{" "}
              <Link to="/maler-ballerup" className="text-primary font-medium hover:underline">
                Maler i Ballerup
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AREA GRID */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS.map((area, i) => (
            <AnimatedSection key={area.name} delay={(i % 6) * 0.05}>
              <div className="h-full p-6 rounded-2xl bg-card border border-border shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={18} className="text-primary flex-shrink-0" />
                  <h2 className="text-lg font-display font-semibold text-card-foreground">
                    {area.name}
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.desc}
                </p>
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
