import { Helmet } from "react-helmet-async";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://manmaler.dk/#organization",
    name: "MAN MALER",
    legalName: "MAN Maler ApS",
    alternateName: "MANMALER",
    url: "https://manmaler.dk",
    telephone: "+4571316499",
    email: "info@manmaler.dk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sporstræde 39",
      addressLocality: "Nærheden",
      addressCountry: "DK",
    },
    areaServed: [
      "København", "Frederiksberg", "Ballerup", "Herlev", "Glostrup",
      "Hvidovre", "Rødovre", "Taastrup", "Albertslund", "Lyngby",
      "Gentofte", "Roskilde", "Greve", "Køge", "Hillerød",
      "Helsingør", "Næstved", "Hedehusene", "Brøndby", "Ishøj",
    ].map((city) => ({ "@type": "City", name: city })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/manmaler.dk/",
      "https://www.facebook.com/profile.php?id=61579050129336",
      "https://www.tiktok.com/@malerhusetdk",
    ],
    priceRange: "$$",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
