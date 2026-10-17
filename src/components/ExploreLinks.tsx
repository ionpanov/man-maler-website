import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { useI18n } from "@/lib/i18n";
import { FAQ_PATH, SERVICE_PAGES } from "@/lib/cities";

const TEXT = {
  da: {
    title: "Udforsk mere",
    services: "Vores ydelser",
    faq: "Ofte stillede spørgsmål om malerarbejde",
    areas: "Se alle områder, vi dækker",
    names: ["Indvendig maling", "Facademaling", "Renovering", "Erhvervsmaling"],
  },
  en: {
    title: "Explore more",
    services: "Our services",
    faq: "Frequently asked questions about painting",
    areas: "See all areas we cover",
    names: ["Interior painting", "Facade painting", "Renovation", "Commercial painting"],
  },
} as const;

export default function ExploreLinks({ showAreas = true }: { showAreas?: boolean }) {
  const { lang } = useI18n();
  const text = TEXT[lang];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
            {text.title}
          </h2>
          <nav aria-label={text.services}>
            <ul className="grid sm:grid-cols-2 gap-3">
              {SERVICE_PAGES.map((service, index) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="block h-full p-4 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition border border-border"
                  >
                    <span className="font-semibold text-foreground block mb-1">{text.names[index]} →</span>
                    <span className="text-sm text-muted-foreground">{service.blurb}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 flex flex-col items-center gap-2 text-center">
            <Link to={FAQ_PATH} className="text-primary font-medium hover:underline">
              {text.faq} →
            </Link>
            {showAreas && (
              <Link to="/omraader" className="text-sm text-muted-foreground hover:underline">
                {text.areas} →
              </Link>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
