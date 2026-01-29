import { Section, SectionHeader } from "@/components/layout/Section";
import { CTABanner } from "@/components/sections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document Center | Mazuri Energy",
  description: "Company profile, ESG reports, policies, and publications.",
};

/**
 * Downloads / document center index.
 * CMS: Download (title, type, year, category, file, related pages). Search + filter.
 */
export default function DownloadsPage() {
  return (
    <>
      <Section variant="off-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader
            overline="Document center"
            title="Company profile, reports, and policies."
            description="Download our company profile, ESG and sustainability reports, and key policies. (CMS-driven list with search and filter.)"
          />
          {/* TODO: CMS – list of downloads with category filter, search */}
          <ul className="mt-12 space-y-4 text-[var(--color-navy)]">
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-text-muted)] text-sm">PDF</span>
              Company profile (placeholder)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-text-muted)] text-sm">PDF</span>
              ESG report (placeholder)
            </li>
          </ul>
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
