import { CITIES } from "@/lib/cities";

export const ORIGIN = "https://manmaler.dk";

/** Danish path -> English path for pages that exist in both languages. */
export const EN_ROUTES: Record<string, string> = {
  "/priser": "/en/prices",
  "/ydelser/indendoers-maling": "/en/services/interior-painting",
  "/maler-koebenhavn": "/en/painter-copenhagen",
  "/maler-frederiksberg": "/en/painter-frederiksberg",
  "/ofte-stillede-spoergsmaal": "/en/faq",
  "/b2b": "/en/b2b",
  "/ydelser/facademaling": "/en/services/facade-painting",
  "/ydelser/renovering": "/en/services/renovation",
  "/ydelser/erhvervsmaling": "/en/services/commercial-painting",
  "/ydelser/maler-aften-weekend": "/en/services/evenings-weekends",
  "/omraader": "/en/areas",
};

/** Every city page has an English twin at /en/painter-<slug> (Copenhagen is /en/painter-copenhagen). */
for (const city of CITIES) {
  if (!EN_ROUTES[city.path]) EN_ROUTES[city.path] = city.path.replace("/maler-", "/en/painter-");
}

/** English display name for a city. */
export function cityNameEn(name: string) {
  return name === "København" ? "Copenhagen" : name;
}


/** Path to link to in the given language; falls back to the Danish page when there is no English one. */
export function langPath(daPath: string, lang: "da" | "en") {
  return lang === "en" ? EN_ROUTES[daPath] ?? daPath : daPath;
}

export function hreflangAlternates(daPath: string) {
  return [
    { hreflang: "da", href: `${ORIGIN}${daPath}` },
    { hreflang: "en", href: `${ORIGIN}${EN_ROUTES[daPath]}` },
    { hreflang: "x-default", href: `${ORIGIN}${daPath}` },
  ];
}

export const DA_ROUTES: Record<string, string> = Object.fromEntries(
  Object.entries(EN_ROUTES).map(([da, en]) => [en, da]),
);
