"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations";
import { Section, SectionHeader } from "@/components/layout/Section";
import Card from "@/components/ui/Card";

const PHILOSOPHY_IMAGE =
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop";

const philosophy = [
  {
    number: "01",
    title: "Our Vision",
    description:
      "Mazuri Energy is focused on becoming a driving force in transforming Africa's energy sector, through promoting sustainable and cost-efficient development of the continent's hydrocarbon resources to deliver shared value for our stakeholders.",
  },
  {
    number: "02",
    title: "Our Mission",
    description:
      "To build an upstream company that strategically invests across the whole oil and gas value chain to maximize the value of our upstream assets and deliver positive impact on Africa's energy economy.",
  },
  {
    number: "03",
    title: "Our Core Values",
    description: "Accountability · Execution competence · Curiosity · Integrity · Collaboration.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section variant="off-white" noPadding>
      <div className="relative h-64 md:h-80 lg:h-96 w-full">
        <Image
          src={PHILOSOPHY_IMAGE}
          alt="Energy sector teamwork and operations"
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-[var(--color-navy)]/30" aria-hidden />
      </div>
      <div className="container mx-auto px-6 max-w-7xl py-16 md:py-24">
        <FadeIn>
          <SectionHeader
            overline="03. Our corporate philosophy"
            title="Our workforce is our greatest resource. We operate with unwavering dedication, consistent excellence, and timely results."
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {philosophy.map((item) => (
            <Card key={item.number}>
              <p className="text-2xl font-bold text-[var(--color-gold)] mb-3">{item.number}</p>
              <h3 className="font-semibold text-[var(--color-text)] text-lg mb-3">{item.title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
