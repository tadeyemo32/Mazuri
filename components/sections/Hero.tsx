"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/animations";
import Button from "@/components/ui/Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#0d2137] text-white pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      {/* Static background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-[#0d2137]/85" aria-hidden />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <FadeIn duration={0.7} delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Harnessing value in oil and gas. Building infrastructure for Africa&apos;s energy economy.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2} duration={0.6}>
            <p className="text-lg text-white/90 mb-10 max-w-2xl leading-relaxed">
              Mazuri Energy is focused on becoming a driving force in transforming Africa&apos;s energy sector, through promoting sustainable and cost-efficient development of the continent&apos;s hydrocarbon resources to deliver shared value for our stakeholders.
            </p>
          </FadeIn>
          <FadeIn delay={0.35} duration={0.6}>
            <div className="flex flex-wrap gap-4">
              <Link href="/services">
                <Button variant="secondary" size="lg">
                  Our services
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0d2137]">
                  About us
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
