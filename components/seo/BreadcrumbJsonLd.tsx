/**
 * Renders BreadcrumbList JSON-LD for search engines (SERP breadcrumbs).
 * Use on every page with a crumbs array: home = single item, inner pages = Home + page(s).
 */
export type BreadcrumbItem = { name: string; url: string };

type Props = { items: BreadcrumbItem[] };

function BreadcrumbJsonLd({ items }: Props) {
  if (!items.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default BreadcrumbJsonLd;
