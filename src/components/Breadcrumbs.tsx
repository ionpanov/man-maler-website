import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight } from "lucide-react";

const ORIGIN = "https://manmaler.dk";

export interface Crumb {
  name: string;
  to?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const last = items.length - 1;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${ORIGIN}${item.to ?? ""}`,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <nav aria-label="Brødkrumme" className="mb-8 flex justify-center">
        <ol className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground">
          {items.map((item, index) =>
            index === last ? (
              <li key={item.name} aria-current="page" className="text-foreground font-medium">
                {item.name}
              </li>
            ) : (
              <li key={item.name} className="flex items-center gap-1">
                <Link to={item.to!} className="hover:text-primary hover:underline">
                  {item.name}
                </Link>
                <ChevronRight size={14} aria-hidden="true" />
              </li>
            ),
          )}
        </ol>
      </nav>
    </>
  );
}
