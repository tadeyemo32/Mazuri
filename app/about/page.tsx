import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { ComingSoon } from "@/components/sections";
import { createPageMetadata, siteUrl } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description: "Mazuri Energy – coming soon.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteUrl },
          { name: "About Us", url: `${siteUrl}/about` },
        ]}
      />
      <ComingSoon />
    </>
  );
}
