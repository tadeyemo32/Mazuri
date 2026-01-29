import { Section, SectionHeader } from "@/components/layout/Section";
import { CTABanner } from "@/components/sections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations | Mazuri Energy",
  description: "Upstream, midstream, and downstream operations across West Africa.",
};

/**
 * Operations pillar page template.
 * CMS: page content (hero, intro, pillars) + optional featured projects.
 */
export default function OperationsPage() {
  return (
    <>
      <Section variant="off-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader
            overline="Operations"
            title="Upstream, midstream, and downstream capabilities."
            description="Mazuri Energy operates across the full oil and gas value chain—exploration and production, logistics and storage, refining and distribution—with a focus on safety, efficiency, and regional impact."
          />
          {/* TODO: CMS blocks – 3 pillars (Upstream, Midstream, Downstream) with capability bullets */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="font-semibold text-[var(--color-navy)] text-lg mb-2">Upstream</h3>
              <p className="text-[var(--color-text-muted)] text-sm">Exploration & Production</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-navy)] text-lg mb-2">Midstream</h3>
              <p className="text-[var(--color-text-muted)] text-sm">Logistics, storage, pipelines</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-navy)] text-lg mb-2">Downstream</h3>
              <p className="text-[var(--color-text-muted)] text-sm">Refining & distribution</p>
            </div>
          </div>
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
