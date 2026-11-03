export const CITIES = [
  { name: "København", path: "/maler-koebenhavn" },
  { name: "Frederiksberg", path: "/maler-frederiksberg" },
  { name: "Gentofte", path: "/maler-gentofte" },
  { name: "Lyngby", path: "/maler-lyngby" },
  { name: "Herlev", path: "/maler-herlev" },
  { name: "Ballerup", path: "/maler-ballerup" },
  { name: "Glostrup", path: "/maler-glostrup" },
  { name: "Rødovre", path: "/maler-rodovre" },
  { name: "Hvidovre", path: "/maler-hvidovre" },
  { name: "Brøndby", path: "/maler-brondby" },
  { name: "Ishøj", path: "/maler-ishoj" },
  { name: "Albertslund", path: "/maler-albertslund" },
  { name: "Taastrup", path: "/maler-taastrup" },
  { name: "Hedehusene", path: "/maler-hedehusene" },
  { name: "Greve", path: "/maler-greve" },
  { name: "Roskilde", path: "/maler-roskilde" },
  { name: "Køge", path: "/maler-koge" },
  { name: "Hillerød", path: "/maler-hillerod" },
  { name: "Helsingør", path: "/maler-helsingor" },
  { name: "Næstved", path: "/maler-naestved" },
] as const;

export const SERVICE_PAGES = [
  {
    name: "Indvendig maling",
    nameEn: "Interior painting",
    path: "/ydelser/indendoers-maling",
    blurb: "Vægge, lofter og træværk, med grundigt forarbejde og ren aflevering.",
    blurbEn: "Walls, ceilings and woodwork, with thorough preparation and a clean handover.",
  },
  {
    name: "Facademaling",
    nameEn: "Facade painting",
    path: "/ydelser/facademaling",
    blurb: "Afrensning, reparation og vejrbestandig maling til villaer, rækkehuse og ejendomme.",
    blurbEn: "Cleaning, repairs and weather-resistant paint for houses, terraced homes and properties.",
  },
  {
    name: "Renovering",
    nameEn: "Renovation",
    path: "/ydelser/renovering",
    blurb: "Istandsættelse af overflader, fugt- og skimmelskader, lofter og komplet maling.",
    blurbEn: "Refurbishing surfaces, moisture and mould damage, ceilings and complete repainting.",
  },
  {
    name: "Erhvervsmaling",
    nameEn: "Commercial painting",
    path: "/ydelser/erhvervsmaling",
    blurb: "Kontorer, butikker, institutioner og lagerlokaler, planlagt uden driftsforstyrrelser.",
    blurbEn: "Offices, shops, institutions and warehouses, planned around your operations.",
  },
] as const;

export const FAQ_PATH = "/ofte-stillede-spoergsmaal";

export const REGIONS = [
  {
    title: "København og Vestegnen",
    paths: [
      "/maler-koebenhavn", "/maler-frederiksberg", "/maler-hvidovre", "/maler-rodovre", "/maler-herlev",
      "/maler-glostrup", "/maler-ballerup", "/maler-taastrup", "/maler-albertslund", "/maler-ishoj", "/maler-brondby",
    ],
  },
  {
    title: "Nordsjælland",
    paths: ["/maler-lyngby", "/maler-gentofte", "/maler-hillerod", "/maler-helsingor"],
  },
  {
    title: "Roskilde og Sydsjælland",
    paths: ["/maler-roskilde", "/maler-hedehusene", "/maler-greve", "/maler-koge", "/maler-naestved"],
  },
] as const;

export function cityByPath(path: string) {
  return CITIES.find((city) => city.path === path);
}

const NEARBY_EDGES: [string, string][] = [
  ["/maler-koebenhavn", "/maler-frederiksberg"],
  ["/maler-koebenhavn", "/maler-hvidovre"],
  ["/maler-koebenhavn", "/maler-gentofte"],
  ["/maler-koebenhavn", "/maler-rodovre"],
  ["/maler-koebenhavn", "/maler-brondby"],
  ["/maler-frederiksberg", "/maler-rodovre"],
  ["/maler-frederiksberg", "/maler-hvidovre"],
  ["/maler-frederiksberg", "/maler-herlev"],
  ["/maler-gentofte", "/maler-lyngby"],
  ["/maler-gentofte", "/maler-herlev"],
  ["/maler-lyngby", "/maler-herlev"],
  ["/maler-lyngby", "/maler-ballerup"],
  ["/maler-lyngby", "/maler-hillerod"],
  ["/maler-herlev", "/maler-rodovre"],
  ["/maler-herlev", "/maler-ballerup"],
  ["/maler-herlev", "/maler-glostrup"],
  ["/maler-ballerup", "/maler-glostrup"],
  ["/maler-ballerup", "/maler-taastrup"],
  ["/maler-glostrup", "/maler-brondby"],
  ["/maler-glostrup", "/maler-albertslund"],
  ["/maler-glostrup", "/maler-rodovre"],
  ["/maler-rodovre", "/maler-hvidovre"],
  ["/maler-rodovre", "/maler-brondby"],
  ["/maler-hvidovre", "/maler-brondby"],
  ["/maler-brondby", "/maler-ishoj"],
  ["/maler-ishoj", "/maler-albertslund"],
  ["/maler-ishoj", "/maler-greve"],
  ["/maler-albertslund", "/maler-taastrup"],
  ["/maler-taastrup", "/maler-hedehusene"],
  ["/maler-hedehusene", "/maler-roskilde"],
  ["/maler-hedehusene", "/maler-greve"],
  ["/maler-greve", "/maler-koge"],
  ["/maler-greve", "/maler-roskilde"],
  ["/maler-roskilde", "/maler-koge"],
  ["/maler-roskilde", "/maler-taastrup"],
  ["/maler-koge", "/maler-naestved"],
  ["/maler-roskilde", "/maler-naestved"],
  ["/maler-hillerod", "/maler-helsingor"],
  ["/maler-hillerod", "/maler-ballerup"],
  ["/maler-helsingor", "/maler-lyngby"],
];

// Symmetric by construction: every edge is listed once and applied in both directions.
export const NEARBY: Record<string, string[]> = {};
for (const [a, b] of NEARBY_EDGES) {
  (NEARBY[a] ??= []).push(b);
  (NEARBY[b] ??= []).push(a);
}

export const B2B_PAGE_PATH = "/b2b";
export const B2B_PAGE_PATH_EN = "/en/b2b";

export function b2bPath(lang: "da" | "en") {
  return lang === "en" ? B2B_PAGE_PATH_EN : B2B_PAGE_PATH;
}
