
export default function BusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://mountain-bike-morocco.com/#business",
    name: "Mountain Bike Morocco",
    url: "https://mountain-bike-morocco.com/",
    description:
      "Discover guided mountain bike, electric mountain bike, gravel and road cycling tours in Morocco. Explore the Atlas Mountains and beyond with a local cycling team.",
    telephone: "+212707222426",
    email: "info@mountain-bike-morocco.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Centre Imlil, Asni",
      addressLocality: "Imlil",
      addressRegion: "Marrakech-Safi",
      postalCode: "42152",
      addressCountry: "MA",
    },
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    knowsAbout: [
      "Mountain biking in Morocco",
      "Electric mountain bike tours",
      "Gravel cycling tours",
      "Road cycling tours",
      "Atlas Mountains cycling",
      "Morocco cycling holidays",
      "Guided cycling adventures",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
