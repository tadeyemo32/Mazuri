"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Factory, Truck, MessageSquare } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import Card from "@/components/ui/Card";

const OPERATIONS_IMAGE =
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop";

const services = [
  {
    icon: Search,
    title: "Exploration & Production",
    description: "Geological surveys and extraction across the value chain.",
    href: "/services#exploration",
  },
  {
    icon: Factory,
    title: "Refining & Processing",
    description: "Refining and product streams.",
    href: "/services#refining",
  },
  {
    icon: Truck,
    title: "Distribution & Logistics",
    description: "Storage, pipelines and delivery.",
    href: "/services#distribution",
  },
  {
    icon: MessageSquare,
    title: "Consulting & Advisory",
    description: "Strategy and operational support.",
    href: "/services#consulting",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-0 bg-white">
      {/* Operations image - fade + slide up on scroll */}
      <FadeIn direction="up" distance={16} duration={0.5} className="relative h-56 md:h-72 lg:h-80 w-full">
        <Image
          src={OPERATIONS_IMAGE}
          alt="Oil and gas refining and operations"
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
          priority={false}
        />
        <div className="absolute inset-0 bg-[#0d2137]/40" aria-hidden />
      </FadeIn>
      <div className="container mx-auto px-6 py-16 md:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#e5a00d] mb-2">
            02. Our operations
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0d2137] mb-4 max-w-2xl">
            Advancing ambitions and driving innovation and impact.
          </h2>
          <p className="text-[#4a5568] max-w-xl mb-12">
            To establish an enterprise strategically positioned to invest across the oil and gas value chain, optimizing value and influencing the energy landscape in the regions we operate.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link href={service.href}>
                <Card>
                  <div className="w-10 h-10 text-[#e5a00d] mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-[#0d2137] mb-2">{service.title}</h3>
                  <p className="text-[#4a5568] text-sm">{service.description}</p>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-10">
          <Link
            href="/services"
            className="text-[#0d2137] font-semibold text-sm hover:text-[#e5a00d] transition-colors inline-flex items-center gap-1"
          >
            View all services
            <span aria-hidden>→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
