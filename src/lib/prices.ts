export interface PriceRow {
  work: string;
  unit: string;
  hour: string;
  min?: number;
  max?: number;
  unitText?: string;
  en: { work: string; unit: string; hour: string };
}

export const PRICE_PATH = "/priser";

export const PRICES: PriceRow[] = [
  { work: "Maling af vægge, 2 strøg", unit: "65–150 kr./m²", hour: "625 kr.", min: 65, max: 150, unitText: "m²", en: { work: "Painting walls, 2 coats", unit: "65–150 DKK/m²", hour: "625 DKK" } },
  { work: "Maling af lofter", unit: "115 kr./m²", hour: "656,25 kr.", min: 115, max: 115, unitText: "m²", en: { work: "Painting ceilings", unit: "115 DKK/m²", hour: "656.25 DKK" } },
  { work: "Spartling af vægge, 2 lag", unit: "Fra 85 kr./m²", hour: "687,50 kr.", min: 85, unitText: "m²", en: { work: "Filling walls, 2 coats", unit: "From 85 DKK/m²", hour: "687.50 DKK" } },
  { work: "Spartling af lofter", unit: "Efter opgaven", hour: "718,75 kr.", en: { work: "Filling ceilings", unit: "Depends on the job", hour: "718.75 DKK" } },
  { work: "Slibning af vægge", unit: "Efter opgaven", hour: "593,75 kr.", en: { work: "Sanding walls", unit: "Depends on the job", hour: "593.75 DKK" } },
  { work: "Opsætning af glasfilt", unit: "Fra 75 kr./m²", hour: "687,50 kr.", min: 75, unitText: "m²", en: { work: "Fitting glass-fibre fleece (glasfilt)", unit: "From 75 DKK/m²", hour: "687.50 DKK" } },
  { work: "Tapetsering, almindeligt tapet", unit: "Efter opgaven", hour: "687,50 kr.", en: { work: "Hanging wallpaper, standard", unit: "Depends on the job", hour: "687.50 DKK" } },
  { work: "Tapetsering, tapet med mønster og pasning", unit: "Efter opgaven", hour: "750 kr.", en: { work: "Hanging patterned wallpaper with pattern matching", unit: "Depends on the job", hour: "750 DKK" } },
  { work: "Fjernelse af almindeligt tapet", unit: "155 kr./m²", hour: "656,25 kr.", min: 155, max: 155, unitText: "m²", en: { work: "Removing standard wallpaper", unit: "155 DKK/m²", hour: "656.25 DKK" } },
  { work: "Fjernelse af tapet med træspåner", unit: "165 kr./m²", hour: "656,25 kr.", min: 165, max: 165, unitText: "m²", en: { work: "Removing woodchip wallpaper", unit: "165 DKK/m²", hour: "656.25 DKK" } },
  { work: "Afrensning af gammel, flossende maling", unit: "Efter opgaven", hour: "718,75 kr.", en: { work: "Stripping old, flaking paint", unit: "Depends on the job", hour: "718.75 DKK" } },
  { work: "Komplet finish af vægge: spartling, grunder, glasfilt og maling", unit: "Fra 350 kr./m²", hour: "Efter etape", min: 350, unitText: "m²", en: { work: "Complete wall finish: filling, priming, glass-fibre fleece and painting", unit: "From 350 DKK/m²", hour: "By stage" } },
  { work: "Maling af fodlister", unit: "100 kr./lbm", hour: "687,50 kr.", min: 100, max: 100, unitText: "lbm", en: { work: "Painting skirting boards", unit: "100 DKK/linear m", hour: "687.50 DKK" } },
  { work: "Maling af dør og karm, hvid", unit: "700 kr./stk.", hour: "718,75 kr.", min: 700, max: 700, unitText: "stk.", en: { work: "Painting door and frame, white", unit: "700 DKK/pc.", hour: "718.75 DKK" } },
  { work: "Maling af dør og karm, farveskift", unit: "1.200 kr./stk.", hour: "718,75 kr.", min: 1200, max: 1200, unitText: "stk.", en: { work: "Painting door and frame, colour change", unit: "1,200 DKK/pc.", hour: "718.75 DKK" } },
  { work: "Reparation af huller og revner", unit: "Efter opgaven", hour: "750 kr.", en: { work: "Repairing holes and cracks", unit: "Depends on the job", hour: "750 DKK" } },
  { work: "Fuger med acryl og silikone", unit: "Efter opgaven", hour: "750 kr.", en: { work: "Acrylic and silicone sealing", unit: "Depends on the job", hour: "750 DKK" } },
  { work: "Mindre rettelser", unit: "Efter opgaven", hour: "812,50 kr.", en: { work: "Minor touch-ups", unit: "Depends on the job", hour: "812.50 DKK" } },
];

/** The rows most people search for; used where the full table would be too long. */
export const PRICES_COMMON: PriceRow[] = [0, 1, 2, 5, 8, 11, 12, 13].map((index) => PRICES[index]);

export function priceOfferCatalog(rows: PriceRow[] = PRICES, lang: "da" | "en" = "da") {
  return {
    "@type": "OfferCatalog",
    name: lang === "en" ? "Painting prices (incl. 25% VAT)" : "Priser på malerarbejde (inkl. 25 % moms)",
    itemListElement: rows
      .filter((row) => row.min)
      .map((row) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: lang === "en" ? row.en.work : row.work },
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
