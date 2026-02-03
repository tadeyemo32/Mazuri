import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { ComingSoon } from "@/components/sections";
import { defaultOgImage, siteName, siteUrl } from "@/lib/seo";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `${siteUrl}/projects/${slug}`;
  const title = `${slug} | Projects`;
  const description = "Mazuri Energy – coming soon.";
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      siteName,
      title: `${title} | ${siteName}`,
      description,
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
      title: `${title} | ${siteName}`,
      description,
      images: [defaultOgImage.url],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Projects", url: `${siteUrl}/projects` },
    { name: slug, url: `${siteUrl}/projects/${slug}` },
  ];
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ComingSoon />
    </>
  );
}
