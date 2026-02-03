import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import {
  Hero,
  WeAreHere,
  Stats,
  CertificationsPartners,
  ServicesPreview,
  WhyChooseUs,
  CTABanner,
} from "@/components/sections";
import { siteUrl, defaultOgImage, siteName, defaultDescription } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteName,
  description: defaultDescription,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} | Oil & Gas E&P | Nigeria & Africa`,
    description:
      "Oil and gas exploration and production. Funding and technical services to unlock value from assets. Focused on Africa, particularly Nigeria.",
    images: [
      {
        url: defaultOgImage.url,
        width: defaultOgImage.width,
        height: defaultOgImage.height,
        alt: defaultOgImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Oil & Gas E&P | Nigeria & Africa`,
    description:
      "Oil and gas exploration and production. Funding and technical services. Focused on Nigeria & Africa.",
    images: [defaultOgImage.url],
  },
  alternates: { canonical: siteUrl },
};

export default function Home() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: siteUrl }]} />
      <Hero />
      <CertificationsPartners />
      <Stats />
      <ServicesPreview />
      <WhyChooseUs />
      <CTABanner />
      <WeAreHere />
    </>
  );
}
