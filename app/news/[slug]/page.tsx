import { Section, SectionHeader } from "@/components/layout/Section";
import { CTABanner } from "@/components/sections";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

/**
 * News / press post template.
 * CMS: NewsPost (title, slug, date, category, excerpt, body, heroImage, attachments).
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} | News | Mazuri Energy`,
    description: "Press release or news article.",
  };
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  // TODO: fetch post by slug from CMS
  const title = slug.replace(/-/g, " ");

  return (
    <>
      <Section variant="off-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] mb-6 inline-block">
            ← News
          </Link>
          <SectionHeader
            overline="News"
            title={title}
            description="(CMS-driven: date, category, body, attachments.)"
          />
          {/* TODO: CMS – date, category, body content, attachments */}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
