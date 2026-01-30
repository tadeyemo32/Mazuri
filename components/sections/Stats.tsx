"use client";

import { useRef } from "react";
import Image from "next/image";
import { FadeIn, SlideIn, ParallaxSection, Counter } from "@/components/animations";
import { Section, SectionHeader } from "@/components/layout/Section";

const GOAL_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop";

const stats = [
  { value: 21, suffix: "", label: "Projects completed in 5 years" },
  { value: 105, suffix: "", label: "Communities that rely on us" },
  { value: 25, suffix: "+", label: "Years in operation" },
  { value: 15, suffix: "+", label: "Countries" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <Section variant="off-white" noPadding className="overflow-hidden">
      <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:min-h-[420px]">
        <SlideIn direction="left" distance={140} className="order-2 lg:order-1 block w-full m-0 overflow-hidden min-h-[240px] lg:min-h-[420px]">
          <ParallaxSection containerRef={sectionRef} intensity={40} className="block w-full h-full m-0">
            <div className="relative w-full h-full min-h-[240px] lg:min-h-[420px]">
              <Image
                src={GOAL_IMAGE}
                alt="Oil and gas infrastructure"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </ParallaxSection>
        </SlideIn>

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
