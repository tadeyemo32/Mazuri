"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn, Parallax } from "@/components/animations";
import Button from "@/components/ui/Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#0d2137] text-white pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      {/* Parallax background – scroll motion for depth */}
      <Parallax speed={0.25} className="absolute left-0 right-0 top-0 w-full min-h-[120%] -translate-y-[5%]">
        <div className="absolute inset-0 h-full w-full">
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
      </Parallax>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <FadeIn duration={0.6} delay={0.05}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Integrated upstream, midstream, and downstream operations across West Africa.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15} duration={0.5}>
            <p className="text-lg text-white/90 mb-10 max-w-2xl leading-relaxed">
              Mazuri Energy develops and operates across the oil and gas value chain—exploration, production, logistics, and refining—with a focus on safety, sustainability, and long-term value for the regions we serve.
            </p>
          </FadeIn>
          <FadeIn delay={0.25} duration={0.5}>
            <div className="flex flex-wrap gap-4">
              <Link href="/services">
                <Button variant="secondary" size="lg">
                  Operations
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[var(--color-navy)]">
                  Contact
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
