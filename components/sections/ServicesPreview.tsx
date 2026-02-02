"use client";

import Link from "next/link";
import { Search, Factory, Truck, MessageSquare } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { Section, SectionHeader } from "@/components/layout/Section";
import Card from "@/components/ui/Card";

const services = [
  {
    icon: Search,
    title: "Exploration & Production",
    description: "Geological surveys and extraction across the value chain.",
    href: "#services",
  },
  {
    icon: Factory,
    title: "Refining & Processing",
    description: "Refining and product streams.",
    href: "#services",
  },
  {
    icon: Truck,
    title: "Distribution & Logistics",
    description: "Storage, pipelines and delivery.",
    href: "#services",
  },
  {
    icon: MessageSquare,
    title: "Consulting & Advisory",
    description: "Strategic consulting from industry-successful seniors with extensive experience.",
    href: "#services",
  },
];

export default function ServicesPreview() {
  return (
    <Section id="services" variant="white" className="scroll-mt-20 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <FadeIn>
          <SectionHeader
            overline="02. Our services"
            title="Technical services and funding for asset owners."
            description="We provide technical expertise and help secure funding so asset owners can unlock value from their oil and gas assets, with a focus on exploration and production in Nigeria and across Africa."
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
      </div>
    </Section>
  );
}
