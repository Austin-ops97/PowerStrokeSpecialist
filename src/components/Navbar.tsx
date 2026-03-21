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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background,box-shadow,border-color] duration-300 ${
        scrolled ? "border-border-subtle bg-bg-dark/95 shadow-lift backdrop-blur-xl" : "border-border-subtle/80 bg-bg-dark/85 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-[5rem] lg:px-12">
        <Link href="/" className="group flex shrink-0 items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark">
          <Image
            src="/images/logo.png"
            alt="Power Stroke Specialist"
            width={160}
            height={56}
            className="h-11 w-auto object-contain object-left transition-opacity duration-200 group-hover:opacity-90 sm:h-12"
            priority
          />
          <span className="hidden min-w-0 flex-col border-l border-border-strong pl-3.5 sm:flex">
            <span className="font-display text-[1.05rem] font-normal leading-tight tracking-wide text-text-white lg:text-[1.15rem]">
              Power Stroke Specialist
            </span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-brand text-text-muted">Baytown, Texas</span>
          </span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative pb-1 text-[11px] font-semibold uppercase tracking-brand transition-colors ${
                  active ? "text-text-white" : "text-text-muted hover:text-text-white"
                }`}
              >
                {link.label}
                <span
                  className={`nav-link-underline ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  aria-hidden
                />
              </Link>
            );
          })}
          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary gap-2 px-6 py-3">
            <Phone size={15} strokeWidth={2.25} />
            Call
          </a>
        </div>

        <button
          type="button"
          className="rounded-sm p-2 text-text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={26} strokeWidth={1.75} /> : <Menu size={26} strokeWidth={1.75} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-dark/60 backdrop-blur-sm lg:hidden"
            aria-hidden
            onClick={() => setMenuOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col border-l border-border-subtle bg-bg-dark px-6 pt-6 shadow-lift lg:hidden"
          >
            <div className="mb-10 flex items-center justify-between gap-3">
              <Image src="/images/logo.png" alt="" width={120} height={42} className="h-9 w-auto object-contain" />
              <button
                type="button"
                className="rounded-sm p-2 text-text-muted hover:text-text-white"
                aria-label="Close navigation menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={22} />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`border-b border-border-subtle py-4 font-display text-xl font-normal tracking-wide ${
                      active ? "text-accent-blue" : "text-text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="btn-primary mt-auto mb-10 w-full gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={16} strokeWidth={2.25} />
              {BUSINESS_INFO.phoneFormatted}
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
