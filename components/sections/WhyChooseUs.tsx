"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
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
    <section className="py-0 bg-[#f7f8fa]">
      {/* Philosophy image - fade + slide up on scroll */}
      <FadeIn direction="up" distance={16} duration={0.5} className="relative h-64 md:h-80 lg:h-96 w-full">
        <Image
          src={PHILOSOPHY_IMAGE}
          alt="Energy sector teamwork and operations"
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-[#0d2137]/30" aria-hidden />
      </FadeIn>
      <div className="container mx-auto px-6 py-16 md:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e5a00d] mb-2">
            03. Our corporate philosophy
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d2137] mb-12 max-w-2xl">
            Our workforce is our greatest resource. We operate with unwavering dedication, consistent excellence, and timely results.
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {philosophy.map((item) => (
            <StaggerItem key={item.number}>
              <Card>
                <p className="text-2xl font-bold text-[#e5a00d] mb-3">{item.number}</p>
                <h3 className="font-semibold text-[#0d2137] text-lg mb-3">{item.title}</h3>
                <p className="text-[#4a5568] text-sm leading-relaxed">{item.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
