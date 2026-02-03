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
    areaServed: "NG",
    availableLanguage: "English",
  },
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
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
