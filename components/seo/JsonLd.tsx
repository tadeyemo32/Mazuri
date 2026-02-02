const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mazurienergy.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mazuri Energy",
  alternateName: "Mazuri Energy Limited",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Oil and gas exploration and production company focused on Africa, particularly Nigeria. We find funding and provide technical services to asset owners, helping unlock value from oil and gas assets.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7A, Floor 71, Cooper Road, Off Bourdillon",
    addressLocality: "Ikoyi",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-908-290-0450",
    email: "info@mazurienergy.com",
    contactType: "customer service",
    areaServed: "NG",
    availableLanguage: "English",
  },
  sameAs: [],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
