import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mazurienergy.com";
const lastmod = new Date().toISOString().split("T")[0];

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/sitemap_index.xml") {
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

  return NextResponse.next();
}
