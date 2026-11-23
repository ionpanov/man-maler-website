import { PriceRow } from "@/lib/prices";

export default function PriceTable({ rows }: { rows: PriceRow[] }) {
  return (
    <>
      {/* Mobile: compact list */}
      <div className="md:hidden rounded-2xl border border-border bg-warm-surface divide-y divide-border">
        {rows.map((row) => (
          <div key={row.work} className="flex items-start justify-between gap-4 px-4 py-3">
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground leading-snug">{row.work}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Pr. time: {row.hour}</p>
            </div>
            <p className="text-sm font-semibold text-foreground text-right shrink-0 max-w-[45%]">{row.unit}</p>
          </div>
        ))}
      </div>

      {/* Tablet/desktop: table */}
      <div className="hidden md:block">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="py-3 pr-4 font-semibold text-foreground">Arbejde</th>
              <th className="py-3 pr-4 font-semibold text-foreground">Pris inkl. moms</th>
              <th className="py-3 font-semibold text-foreground">Pris pr. time inkl. moms</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.work} className="border-b border-border align-top">
                <td className="py-3 pr-4 font-medium text-foreground">{row.work}</td>
                <td className="py-3 pr-4 text-muted-foreground">{row.unit}</td>
                <td className="py-3 text-muted-foreground">{row.hour}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
