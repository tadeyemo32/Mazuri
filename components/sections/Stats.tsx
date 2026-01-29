"use client";

import Image from "next/image";
import { FadeIn, Counter, StaggerContainer, StaggerItem } from "@/components/animations";

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
    <section className="py-0 bg-[#f7f8fa]">
      <div className="grid lg:grid-cols-2 min-h-[420px] lg:min-h-[520px]">
        {/* Image - fade + slide up on scroll */}
        <FadeIn direction="up" distance={16} duration={0.5} className="relative order-2 lg:order-1 h-64 lg:h-auto min-h-[280px] lg:min-h-0">
          <Image
            src={GOAL_IMAGE}
            alt="Oil and gas infrastructure"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={85}
          />
        </FadeIn>

        <div className="order-1 lg:order-2 flex flex-col justify-center py-16 md:py-24 px-6 lg:pl-16 lg:pr-12">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e5a00d] mb-2">
              01. Our goal
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0d2137] mb-6 max-w-xl">
              Advancing Oil & Gas Development to Deliver Positive Impact on Africa&apos;s Energy Economy.
            </h2>
            <p className="text-[#4a5568] max-w-xl mb-10">
              At Mazuri Energy, our specialty lies in unlocking value in Africa&apos;s oil and gas resources—revitalizing assets with solutions that secure longevity, enhance operational efficiency, produced water management, improved evacuation logistics, gas development, and infrastructure.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-[#0d2137] mb-0.5">
                    <Counter target={stat.value} suffix={stat.suffix} delay={index * 0.05} />
                  </div>
                  <p className="text-[#4a5568] text-sm font-medium">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
