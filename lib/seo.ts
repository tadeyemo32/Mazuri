import type { Metadata } from "next";

/**
 * Shared SEO constants for metadata, Open Graph, and canonical URLs.
 * Use absolute URLs for OG/Twitter images (required by spec).
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mazurienergy.com";

export const defaultOgImage = {
  url: `${siteUrl}/logo.png`,
  width: 512,
  height: 512,
  alt: "Mazuri Energy",
} as const;

export const siteName = "Mazuri Energy";

export const defaultDescription =
  "Oil and gas exploration and production focused on Africa, particularly Nigeria. We find funding and provide technical services to asset owners, helping unlock value from oil and gas assets.";

/** Build full per-page metadata with Open Graph and Twitter (absolute image URLs). */
export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const ogTitle = path === "/" ? `${siteName} | Oil & Gas E&P | Nigeria & Africa` : `${title} | ${siteName}`;
  const ogDescription =
    path === "/"
      ? "Oil and gas exploration and production. Funding and technical services to unlock value from assets. Focused on Africa, particularly Nigeria."
      : description;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName,
      title: ogTitle,
      description: ogDescription,
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
      title: ogTitle,
      description: ogDescription,
      images: [defaultOgImage.url],
    },
  };
}
