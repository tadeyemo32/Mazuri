import { Section, SectionHeader } from "@/components/layout/Section";
import { CTABanner } from "@/components/sections";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

/**
 * Project detail page template.
 * CMS: Project (title, region, serviceLine, status, dates, summary, metrics, gallery, HSE notes).
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} | Projects | Mazuri Energy`,
    description: "Project overview and key metrics.",
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  // TODO: fetch project by slug from CMS
  const title = slug.replace(/-/g, " ");

  return (
    <>
      <Section variant="off-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <Link href="/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] mb-6 inline-block">
            ← Back to home
          </Link>
          <SectionHeader
            overline="Project"
            title={title}
            description="Project scope, timeline, and key metrics. (CMS-driven content.)"
          />
          {/* TODO: CMS – scope, timeline, metrics, gallery, HSE notes, contact CTA */}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
