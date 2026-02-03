import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { ComingSoon } from "@/components/sections";
import { createPageMetadata, siteUrl } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "News",
  description: "Mazuri Energy – coming soon.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteUrl },
          { name: "News", url: `${siteUrl}/news` },
        ]}
      />
      <ComingSoon />
    </>
  );
}
