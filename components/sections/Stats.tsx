"use client";

import { useRef } from "react";
import Image from "next/image";
import { FadeIn, SlideIn, ParallaxSection, Counter } from "@/components/animations";
import { Section, SectionHeader } from "@/components/layout/Section";

const GOAL_IMAGE = "/stats.jpg";

const stats = [
  { value: 25, suffix: "+", label: "Years of oil & gas experience" },
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

        <div className="order-1 lg:order-2 flex flex-col justify-center py-12 md:py-24 px-4 sm:px-6 lg:pl-16 lg:pr-12 max-w-7xl mx-auto w-full">
          <FadeIn>
            <SectionHeader
              overline="01. What we do"
              title="Unlocking value from oil and gas assets."
              description="We secure funding and deliver technical services for asset owners, focused on Africa, particularly Nigeria, to help maximize the value of their exploration and production assets."
            />
          </FadeIn>

          <div className="flex flex-wrap gap-10 lg:gap-12">
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
