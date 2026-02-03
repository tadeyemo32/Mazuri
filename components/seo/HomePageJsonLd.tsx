/**
 * Home-page-only JSON-LD for AI search: WebPage + FAQPage.
 * Helps AI Overviews, Perplexity, Bing Copilot, etc. cite and summarize the site.
 */
import { siteUrl, siteName, defaultDescription } from "@/lib/seo";

const webPageId = `${siteUrl}/#webpage`;
const organizationId = `${siteUrl}/#organization`;

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": webPageId,
  name: `${siteName} | Oil & Gas E&P | Nigeria & Africa`,
  url: siteUrl,
  description: defaultDescription,
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": organizationId },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.png`,
    width: 512,
    height: 512,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }],
  },
  inLanguage: "en",
  potentialAction: {
    "@type": "ReadAction",
    target: siteUrl,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Mazuri Energy do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mazuri Energy is an oil and gas exploration and production company focused on Africa, particularly Nigeria. We find funding and provide technical services to asset owners, helping unlock value from oil and gas assets.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Mazuri Energy based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mazuri Energy is based in Ikoyi, Lagos, Nigeria. Address: 7A, Floor 71, Cooper Road, Off Bourdillon, Ikoyi, Lagos, Nigeria.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Mazuri Energy offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mazuri Energy offers funding solutions and technical services for oil and gas asset owners, including exploration and production, refining and processing, distribution and logistics, and consulting and advisory services, with a focus on Nigeria and Africa.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Mazuri Energy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Mazuri Energy by email at info@mazurienergy.com or by phone at +234 908 290 0450. Office hours are Monday to Friday, 8:00 am to 6:00 pm.",
      },
    },
  ],
};

export default function HomePageJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
