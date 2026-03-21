"use client";

import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border-subtle bg-bg-dark/95 shadow-2xl backdrop-blur-lg"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-2xl uppercase tracking-[0.06em] text-text-white sm:text-3xl">
          Power Stroke Specialist
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-semibold uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-accent" : "text-text-white hover:text-accent"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary gap-2 px-5">
            <Phone size={16} />
            Call Now
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-bg-dark px-8 pt-28 lg:hidden"
          >
            <div className="flex flex-col gap-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl uppercase tracking-[0.12em] text-text-white"
                >
                  {link.label}
                </Link>
              ))}

              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary mt-2 w-full gap-2">
                <Phone size={16} />
                Call {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
