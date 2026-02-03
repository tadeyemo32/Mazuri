import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

/**
 * Allow search and AI crawlers for discoverability in search and AI answers
 * (Google, Bing, Yahoo, GPTBot, Claude, Perplexity, etc.).
 */
export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: "/", disallow: ["/api/"] };
  return {
    rules: [
      { userAgent: "*", ...allowAll },
      { userAgent: "Googlebot", ...allowAll },
      { userAgent: "Bingbot", ...allowAll },
      { userAgent: "Slurp", ...allowAll },
      { userAgent: "GPTBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "Claude-Web", ...allowAll },
      { userAgent: "PerplexityBot", ...allowAll },
      { userAgent: "Cohere-Ai", ...allowAll },
      { userAgent: "Anthropic-AI", ...allowAll },
    ],
    sitemap: [`${siteUrl}/sitemap_index.xml`, `${siteUrl}/sitemap.xml`],
  };
}
