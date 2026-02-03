"use client";

import { useRef } from "react";
import Image from "next/image";
import { FadeIn, SlideIn, ParallaxSection } from "@/components/animations";
import { Section, SectionHeader } from "@/components/layout/Section";
import Card from "@/components/ui/Card";

const PHILOSOPHY_IMAGE = "/philosophy.jpg";

const philosophy = [
  {
    number: "01",
    title: "Our Focus",
    description:
      "Oil and gas exploration and production company focused on Africa, particularly Nigeria. We help unlock value from assets through funding and technical services.",
  },
  {
    number: "02",
    title: "Short-term Vision",
    description:
      "Find funding and provide technical services to asset owners, helping them unlock value from their oil and gas assets.",
  },
  {
    number: "03",
    title: "Our Core Values",
    description: "Accountability · Execution competence · Curiosity · Integrity · Collaboration.",
  },
  {
    number: "04",
    title: "Strategic Consulting",
    description:
      "Strategic consultants with industry-successful seniors and extensive experience across oil and gas.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <Section variant="off-white" noPadding className="overflow-hidden">
      <div ref={sectionRef} className="block w-full m-0 p-0">
        <SlideIn direction="left" distance={140} className="block w-full m-0 h-64 md:h-80 overflow-hidden">
          <ParallaxSection containerRef={sectionRef} intensity={40} className="block w-full h-full m-0">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={PHILOSOPHY_IMAGE}
                alt="Energy sector teamwork and operations"
                fill
                className="object-cover object-bottom"
                sizes="100vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-[var(--color-navy)]/30" aria-hidden />
            </div>
          </ParallaxSection>
        </SlideIn>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-16 md:py-24">
        <FadeIn>
          <SectionHeader
            overline="03. Our philosophy"
            title="We operate with unwavering dedication, consistent excellence, and timely results."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {philosophy.map((item) => (
            <Card key={item.number}>
              <p className="text-2xl font-bold text-[var(--color-gold)] mb-3">{item.number}</p>
              <h3 className="font-semibold text-[var(--color-text)] text-lg mb-3">{item.title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </Section>
  );
}
