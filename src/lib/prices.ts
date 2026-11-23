export interface PriceRow {
  work: string;
  unit: string;
  hour: string;
  min?: number;
  max?: number;
  unitText?: string;
}

export const PRICE_PATH = "/priser";

export const PRICES: PriceRow[] = [
  { work: "Maling af vægge, 2 strøg", unit: "65–150 kr./m²", hour: "625 kr.", min: 65, max: 150, unitText: "m²" },
  { work: "Maling af lofter", unit: "115 kr./m²", hour: "656,25 kr.", min: 115, max: 115, unitText: "m²" },
  { work: "Spartling af vægge, 2 lag", unit: "Fra 85 kr./m²", hour: "687,50 kr.", min: 85, unitText: "m²" },
  { work: "Spartling af lofter", unit: "Efter opgaven", hour: "718,75 kr." },
  { work: "Slibning af vægge", unit: "Efter opgaven", hour: "593,75 kr." },
  { work: "Opsætning af glasfilt", unit: "Fra 75 kr./m²", hour: "687,50 kr.", min: 75, unitText: "m²" },
  { work: "Tapetsering, almindeligt tapet", unit: "Efter opgaven", hour: "687,50 kr." },
  { work: "Tapetsering, tapet med mønster og pasning", unit: "Efter opgaven", hour: "750 kr." },
  { work: "Fjernelse af almindeligt tapet", unit: "155 kr./m²", hour: "656,25 kr.", min: 155, max: 155, unitText: "m²" },
  { work: "Fjernelse af tapet med træspåner", unit: "165 kr./m²", hour: "656,25 kr.", min: 165, max: 165, unitText: "m²" },
  { work: "Afrensning af gammel, flossende maling", unit: "Efter opgaven", hour: "718,75 kr." },
  { work: "Komplet finish af vægge: spartling, grunder, glasfilt og maling", unit: "Fra 350 kr./m²", hour: "Efter etape", min: 350, unitText: "m²" },
  { work: "Maling af fodlister", unit: "100 kr./lbm", hour: "687,50 kr.", min: 100, max: 100, unitText: "lbm" },
  { work: "Maling af dør og karm, hvid", unit: "700 kr./stk.", hour: "718,75 kr.", min: 700, max: 700, unitText: "stk." },
  { work: "Maling af dør og karm, farveskift", unit: "1.200 kr./stk.", hour: "718,75 kr.", min: 1200, max: 1200, unitText: "stk." },
  { work: "Reparation af huller og revner", unit: "Efter opgaven", hour: "750 kr." },
  { work: "Fuger med acryl og silikone", unit: "Efter opgaven", hour: "750 kr." },
  { work: "Mindre rettelser", unit: "Efter opgaven", hour: "812,50 kr." },
];

/** The rows most people search for; used where the full table would be too long. */
export const PRICES_COMMON: PriceRow[] = [0, 1, 2, 5, 8, 11, 12, 13].map((index) => PRICES[index]);

export function priceOfferCatalog(rows: PriceRow[] = PRICES) {
  return {
    "@type": "OfferCatalog",
    name: "Priser på malerarbejde (inkl. 25 % moms)",
    itemListElement: rows
      .filter((row) => row.min)
      .map((row) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: row.work },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "DKK",
          valueAddedTaxIncluded: true,
          ...(row.max && row.max !== row.min ? { minPrice: row.min, maxPrice: row.max } : { price: row.min }),
          unitText: row.unitText,
        },
      })),
  };
}
