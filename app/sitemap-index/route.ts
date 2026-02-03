import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/seo";

const lastmod = new Date().toISOString().split("T")[0];

/**
 * Sitemap index (sitemaps.org) listing all child sitemaps.
 * Served at /sitemap_index.xml via next.config rewrite for crawler compatibility.
 */
export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
