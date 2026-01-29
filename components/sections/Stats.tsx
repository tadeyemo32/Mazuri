"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Counter } from "@/components/animations";

const GOAL_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop";

const stats = [
  { value: 21, suffix: "", label: "Projects completed in 5 years" },
  { value: 105, suffix: "", label: "Communities that rely on us" },
  { value: 25, suffix: "+", label: "Years in operation" },
  { value: 15, suffix: "+", label: "Countries" },
];

export default function Stats() {
  return (
    <Section variant="off-white" noPadding>
      <div className="grid lg:grid-cols-2 min-h-[420px] lg:min-h-[520px]">
        <div className="relative order-2 lg:order-1 h-64 lg:h-auto min-h-[280px] lg:min-h-0">
          <Image
            src={GOAL_IMAGE}
            alt="Oil and gas infrastructure"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={85}
          />
        </div>

        <div className="order-1 lg:order-2 flex flex-col justify-center py-16 md:py-24 px-6 lg:pl-16 lg:pr-12 max-w-7xl mx-auto w-full">
          <FadeIn>
            <SectionHeader
              overline="01. Our goal"
              title="Advancing Oil & Gas Development to Deliver Positive Impact on Africa's Energy Economy."
              description="At Mazuri Energy, our specialty lies in unlocking value in Africa's oil and gas resources—revitalizing assets with solutions that secure longevity, enhance operational efficiency, produced water management, improved evacuation logistics, gas development, and infrastructure."
            />
          </FadeIn>

          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label}>
<div className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-0.5">
                    <Counter target={stat.value} suffix={stat.suffix} delay={index * 0.05} />
                  </div>
                  <p className="text-[var(--color-text-muted)] text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
