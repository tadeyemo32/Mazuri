import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { ComingSoon } from "@/components/sections";
import { createPageMetadata, siteUrl } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Operations",
  description: "Mazuri Energy – coming soon.",
  path: "/operations",
});

export default function OperationsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteUrl },
          { name: "Operations", url: `${siteUrl}/operations` },
        ]}
      />
      <ComingSoon />
    </>
  );
}
