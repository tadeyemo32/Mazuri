"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="py-16 md:py-24 bg-[#0d2137] text-white">
      <div className="container mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get in touch
          </h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8">
            For enquiries, partnerships or general information, contact our team.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact us
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
