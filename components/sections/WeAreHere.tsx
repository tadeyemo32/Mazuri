"use client";

import { MapPin, Mail, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations";

export default function WeAreHere() {
  return (
    <section className="py-8 md:py-10 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#0d2137] mb-6">
            We are here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#e5a00d] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#0d2137]">Address</p>
                <p className="text-[#4a5568] text-sm mt-0.5">
                  15 Marina Road, Lagos Island, Lagos, Nigeria
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#e5a00d] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#0d2137]">Email</p>
                <p className="text-[#4a5568] text-sm mt-0.5">info@mazurienergy.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#e5a00d] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#0d2137]">Opening hours</p>
                <p className="text-[#4a5568] text-sm mt-0.5">Monday to Friday, 8:00 am — 6:00 pm</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
