"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Factory, Truck, MessageSquare } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { Section, SectionHeader } from "@/components/layout/Section";
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
    <Section variant="white" noPadding>
      <div className="relative h-56 md:h-72 lg:h-80 w-full">
        <Image
          src={OPERATIONS_IMAGE}
          alt="Oil and gas refining and operations"
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
          priority={false}
        />
        <div className="absolute inset-0 bg-[var(--color-navy)]/40" aria-hidden />
      </div>
      <div className="container mx-auto px-6 max-w-7xl py-16 md:py-24">
        <FadeIn>
          <SectionHeader
            overline="02. Our operations"
            title="Advancing ambitions and driving innovation and impact."
            description="To establish an enterprise strategically positioned to invest across the oil and gas value chain, optimizing value and influencing the energy landscape in the regions we operate."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link key={service.title} href={service.href}>
              <Card>
                <div className="w-10 h-10 text-[var(--color-gold)] mb-4 shrink-0">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-[var(--color-text)] mb-2">{service.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">{service.description}</p>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="text-[var(--color-text)] font-semibold text-sm hover:text-[var(--color-gold)] transition-colors inline-flex items-center gap-1"
          >
            View all services
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
