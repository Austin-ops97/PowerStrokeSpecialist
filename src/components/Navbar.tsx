"use client";

import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-bg-dark shadow-card backdrop-blur-xl"
          : "border-b border-transparent bg-bg-dark/50 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11">
            <Image
              src="/images/logo-power-stroke-specialist.png"
              alt="Power Stroke Specialist"
              fill
              className="object-contain object-left"
              sizes="44px"
              priority
            />
          </span>
          <span className="hidden min-[380px]:flex flex-col leading-none">
            <span className="font-display text-[17px] font-bold tracking-tight text-white sm:text-[18px]">
              Power Stroke
            </span>
            <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.32em] text-accent">Specialist</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-underline pb-1 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                  active ? "text-white after:scale-x-100" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="btn-primary gap-2 px-6 py-3 text-[10px]"
          >
            <Phone size={14} strokeWidth={2.5} />
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="rounded p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={26} strokeWidth={1.75} /> : <Menu size={26} strokeWidth={1.75} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-dark lg:hidden"
          >
            {/* Red accent top strip */}
            <div className="h-1 w-full bg-accent" />

            <div className="flex h-full flex-col px-8 pb-12 pt-20">
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between border-b border-white/[0.06] py-5 font-display text-4xl font-bold tracking-tight transition-colors ${
                          active ? "text-accent" : "text-white hover:text-accent"
                        }`}
                      >
                        {link.label}
                        {active && <span className="h-2 w-2 rounded-full bg-accent" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.a
                href={`tel:${BUSINESS_INFO.phone}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="btn-primary mt-auto w-full justify-center gap-3 text-base"
              >
                <Phone size={18} strokeWidth={2} />
                {BUSINESS_INFO.phoneFormatted}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
