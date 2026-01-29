import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "People", href: "/about#team" },
  { label: "Services", href: "/services" },
  { label: "Newsroom", href: "/newsroom" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d2137] text-white">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 bg-white rounded px-3 py-2 w-fit">
              <Image
                src="/mazuri-logo.jpg"
                alt="Mazuri Energy"
                width={130}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-[260px]">
              Harnessing value in oil and gas. Building infrastructure for Africa&apos;s energy economy.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-4 text-white/80 hover:text-[#e5a00d] text-sm transition-colors"
            >
              <Linkedin size={18} />
              Follow us
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
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
                15 Marina Road, Lagos Island<br />
                Lagos, Nigeria
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-[#e5a00d]" />
                info@mazurienergy.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-[#e5a00d]" />
                +234 800 123 4567
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Mazuri Energy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-white/50 hover:text-white/80 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-white/80 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
