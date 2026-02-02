"use client";

/**
 * Enterprise strip: certifications and partners.
 * Replaces template-y marquee with credible, static trust signals.
 */
const CERTIFICATIONS = [
  "HSE Certified",
  "ISO 14001",
  "ISO 45001",
];

const PARTNER_LABEL = "Focused on Africa, particularly Nigeria";

export default function CertificationsPartners() {
  return (
    <section className="border-y border-white/10 bg-[var(--color-bg-elevated)] py-4 md:py-5 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <div>
            <p className="text-[var(--color-text-muted)] text-xs font-semibold uppercase tracking-widest mb-2">
              Certifications
            </p>
            <ul className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-1 text-sm font-medium text-[var(--color-text)]">
              {CERTIFICATIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="sm:text-right">
            <p className="text-[var(--color-text-muted)] text-xs font-semibold uppercase tracking-widest mb-1">
              Footprint
            </p>
            <p className="text-sm font-medium text-[var(--color-text)]">
              {PARTNER_LABEL}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
