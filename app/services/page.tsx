import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { ComingSoon } from "@/components/sections";
import { createPageMetadata, siteUrl } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services",
  description: "Mazuri Energy – coming soon.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteUrl },
          { name: "Services", url: `${siteUrl}/services` },
        ]}
      />
      <ComingSoon />
    </>
  );
}
