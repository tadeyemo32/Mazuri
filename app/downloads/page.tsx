import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { ComingSoon } from "@/components/sections";
import { createPageMetadata, siteUrl } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Document Center",
  description: "Mazuri Energy – coming soon.",
  path: "/downloads",
});

export default function DownloadsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteUrl },
          { name: "Document Center", url: `${siteUrl}/downloads` },
        ]}
      />
      <ComingSoon />
    </>
  );
}
