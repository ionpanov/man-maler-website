import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { NEARBY, cityByPath } from "@/lib/cities";
import { cityNameEn, langPath } from "@/lib/enRoutes";

export default function NearbyAreas({ current, lang = "da" }: { current: string; lang?: "da" | "en" }) {
  const en = lang === "en";
  const name = (n: string) => (en ? cityNameEn(n) : n);
  const here = cityByPath(current);
  const nearby = (NEARBY[current] ?? []).map(cityByPath).filter(Boolean);
  if (!here || nearby.length === 0) return null;

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-xl md:text-2xl font-display font-semibold mb-6 text-foreground text-center">
            {en ? `Painting work near ${name(here.name)}` : `Malerarbejde i nærheden af ${here.name}`}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nearby.map((city) => (
              <Link
                key={city!.path}
                to={langPath(city!.path, lang)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-warm-surface hover:bg-warm-surface-hover transition text-sm font-medium text-foreground border border-border"
              >
                <MapPin size={16} className="text-primary flex-shrink-0" />
                {en ? `Painter in ${name(city!.name)}` : `Maler i ${city!.name}`}
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
