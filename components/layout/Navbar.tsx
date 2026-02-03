"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && setIsMobileMenuOpen(false);
      window.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEscape);
      };
    }
    document.body.style.overflow = "";
  }, [isMobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const behavior = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    if (targetId === "top") {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: behavior as ScrollBehavior });
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      el.scrollIntoView({ behavior: behavior as ScrollBehavior, block: "start" });
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      scrollToSection(e, "top");
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToSection(e, "contact");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] md:h-[88px] flex items-center justify-center transition-shadow duration-200 bg-[#0d2137] w-full max-w-full pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] ${
        isScrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <nav className="w-full h-full flex items-center px-4 sm:px-6 md:px-8 max-w-[1200px] mx-auto min-w-0">
        <div className="flex items-center justify-between h-full w-full min-w-0 gap-2">
          <Link href="/" className="flex items-center shrink-0 h-full min-w-0 py-2" aria-label="Mazuri Energy home">
            <Image
              src="/logo.png"
              alt="Mazuri Energy"
              width={320}
              height={96}
              className="h-[52px] md:h-[68px] w-auto max-w-[280px] object-contain object-left [filter:drop-shadow(0_0_1px_rgba(255,255,255,0.8))]"
              priority
              unoptimized
            />
          </Link>

          <div className="flex items-center gap-6 md:gap-10 ml-auto">
            <div className="hidden md:flex items-center gap-10">
              <Link
                href="/"
                onClick={handleHomeClick}
                className="text-white/90 font-medium text-[15px] hover:text-[#e5a00d] transition-colors"
              >
                Home
              </Link>
              <Link
                href="#contact"
                onClick={handleContactClick}
                className="bg-[#e5a00d] text-[#0d2137] px-5 py-2.5 text-sm font-semibold hover:bg-[#f0c14b] transition-colors rounded"
              >
                Contact
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-white touch-manipulation"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-white/10 mt-2 pt-4 pb-4"
            >
              <div className="flex flex-col gap-1">
                <Link
                  href="/"
                  onClick={handleHomeClick}
                  className="text-white font-medium min-h-[48px] flex items-center py-3 px-4 hover:bg-white/5 active:bg-white/10 rounded touch-manipulation"
                >
                  Home
                </Link>
                <Link
                  href="#contact"
                  onClick={handleContactClick}
                  className="bg-[#e5a00d] text-[#0d2137] min-h-[48px] flex items-center justify-center py-3 px-4 rounded text-center font-semibold touch-manipulation active:bg-[#f0c14b]"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
