import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0d2137] text-white scroll-mt-20 overflow-x-hidden pb-[env(safe-area-inset-bottom)]">
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-14 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 w-fit">
              <Image
                src="/logo.png"
                alt="Mazuri Energy"
                width={360}
                height={108}
                className="h-24 md:h-28 w-auto object-contain [filter:drop-shadow(0_0_1px_rgba(255,255,255,0.5))]"
                unoptimized
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-[260px]">
              Oil and gas exploration and production. Finding funding and providing technical services to unlock value from assets, focused on Africa, particularly Nigeria.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors min-h-[44px] inline-flex items-center touch-manipulation">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <address className="not-italic text-sm text-white/70 space-y-3">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-[#e5a00d]" />
                Mazuri Energy Limited<br />
                7A, Floor 71, Cooper Road, Off Bourdillon<br />
                Ikoyi, Lagos, Nigeria
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-[#e5a00d]" />
                info@mazurienergy.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-[#e5a00d]" />
                +234 908 290 0450
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Mazuri Energy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-white/50 hover:text-white/80 transition-colors min-h-[44px] min-w-[44px] inline-flex items-center justify-center touch-manipulation">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-white/80 transition-colors min-h-[44px] min-w-[44px] inline-flex items-center justify-center touch-manipulation">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
