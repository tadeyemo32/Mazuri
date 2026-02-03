import { siteUrl, defaultDescription, siteName } from "@/lib/seo";

const organizationId = `${siteUrl}/#organization`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: siteName,
  alternateName: "Mazuri Energy Limited",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: defaultDescription,
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
    areaServed: [
      { "@type": "Country", name: "Nigeria", sameAs: "https://en.wikipedia.org/wiki/Nigeria" },
      { "@type": "Place", name: "Africa" },
    ],
    availableLanguage: "English",
    availableChannel: { "@type": "ServiceChannel", serviceUrl: siteUrl },
  },
  sameAs: [],
  inLanguage: "en",
  areaServed: [
    { "@type": "Country", name: "Nigeria" },
    { "@type": "Place", name: "Africa" },
  ],
  knowsAbout: [
    "Oil and gas exploration",
    "Oil and gas production",
    "E&P",
    "Energy sector funding",
    "Technical services for asset owners",
    "Nigeria energy",
    "Africa energy",
  ],
};

const websiteId = `${siteUrl}/#website`;
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  inLanguage: "en",
  publisher: { "@id": organizationId },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
