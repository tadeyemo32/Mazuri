import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  /** Background: white | off-white | navy */
  variant?: "white" | "off-white" | "navy";
  className?: string;
  /** Skip default padding (e.g. for full-bleed image) */
  noPadding?: boolean;
}

const variantClass = {
  white: "bg-[var(--color-bg-card)] text-[var(--color-text)]",
  "off-white": "bg-[var(--color-bg-elevated)] text-[var(--color-text)]",
  navy: "bg-[var(--color-navy)] text-white",
};

function Section({
  children,
  variant = "off-white",
  className = "",
  noPadding = false,
}: SectionProps) {
  return (
    <section
      className={`${variantClass[variant]} ${noPadding ? "py-0" : "py-16 md:py-24"} ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
export { Section };

interface SectionHeaderProps {
  overline?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  /** Use gold overline */
  overlineAccent?: boolean;
  /** Inverted (e.g. on navy background): white text */
  inverted?: boolean;
}

export function SectionHeader({
  overline,
  title,
  description,
  className = "",
  overlineAccent = true,
  inverted = false,
}: SectionHeaderProps) {
  const titleClass = inverted ? "text-white" : "text-[var(--color-text)]";
  const descClass = inverted ? "text-white/80" : "text-[var(--color-text-muted)]";
  return (
    <header className={`mb-10 md:mb-12 max-w-3xl ${className}`}>
      {overline && (
        <p
          className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
            overlineAccent ? "text-[var(--color-gold)]" : inverted ? "text-white/70" : "text-[var(--color-text-muted)]"
          }`}
        >
          {overline}
        </p>
      )}
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 ${titleClass}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed max-w-2xl ${descClass}`}>
          {description}
        </p>
      )}
    </header>
  );
}
