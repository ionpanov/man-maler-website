import { PriceRow } from "@/lib/prices";

const LABELS = {
  da: { perHour: "Pr. time", work: "Arbejde", price: "Pris inkl. moms", hourly: "Pris pr. time inkl. moms" },
  en: { perHour: "Per hour", work: "Work", price: "Price incl. VAT", hourly: "Hourly price incl. VAT" },
};

export default function PriceTable({ rows, lang = "da" }: { rows: PriceRow[]; lang?: "da" | "en" }) {
  const L = LABELS[lang];
  const view = (row: PriceRow) => (lang === "en" ? row.en : row);
  return (
    <>
      {/* Mobile: compact list */}
      <div className="md:hidden rounded-2xl border border-border bg-warm-surface divide-y divide-border">
        {rows.map((raw) => {
          const row = view(raw);
          return (
          <div key={raw.work} className="flex items-start justify-between gap-4 px-4 py-3">
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground leading-snug">{row.work}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{L.perHour}: {row.hour}</p>
            </div>
            <p className="text-sm font-semibold text-foreground text-right shrink-0 max-w-[45%]">{row.unit}</p>
          </div>
          );
        })}
      </div>

      {/* Tablet/desktop: table */}
      <div className="hidden md:block">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="py-3 pr-4 font-semibold text-foreground">{L.work}</th>
              <th className="py-3 pr-4 font-semibold text-foreground">{L.price}</th>
              <th className="py-3 font-semibold text-foreground">{L.hourly}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((raw) => {
              const row = view(raw);
              return (
              <tr key={raw.work} className="border-b border-border align-top">
                <td className="py-3 pr-4 font-medium text-foreground">{row.work}</td>
                <td className="py-3 pr-4 text-muted-foreground">{row.unit}</td>
                <td className="py-3 text-muted-foreground">{row.hour}</td>
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
