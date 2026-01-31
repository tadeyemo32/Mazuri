"use client";

import { MapPin, Mail, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations";

export default function WeAreHere() {
  return (
    <section className="py-8 md:py-10 bg-[var(--color-bg-elevated)] border-y border-white/10">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)] mb-6">
            We are here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[var(--color-text)]">Address</p>
                <p className="text-[var(--color-text-muted)] text-sm mt-0.5">
                  7A, Floor 71, Cooper Road, Off Bourdillon, Ikoyi, Lagos, Nigeria
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[var(--color-text)]">Email</p>
                <p className="text-[var(--color-text-muted)] text-sm mt-0.5">info@mazurienergy.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[var(--color-text)]">Opening hours</p>
                <p className="text-[var(--color-text-muted)] text-sm mt-0.5">Monday to Friday, 8:00 am to 6:00 pm</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
