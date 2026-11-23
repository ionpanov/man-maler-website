import { Helmet } from "react-helmet-async";
import { hreflangAlternates } from "@/lib/enRoutes";

/** Sets <html lang> and the DA/EN alternate links for a page that exists in both languages. */
export default function HreflangLinks({ daPath, lang }: { daPath: string; lang: "da" | "en" }) {
  return (
    <Helmet>
      <html lang={lang} />
      {hreflangAlternates(daPath).map((alternate) => (
        <link key={alternate.hreflang} rel="alternate" hrefLang={alternate.hreflang} href={alternate.href} />
      ))}
    </Helmet>
  );
}
