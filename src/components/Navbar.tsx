"use client";

import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink-border bg-ink">
        <div className="wrap flex h-[68px] items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-3">
            <span className="relative h-9 w-9 shrink-0">
              <Image
                src="/images/logo-power-stroke-specialist.png"
                alt="Power Stroke Specialist"
                fill
                className="object-contain"
                sizes="36px"
                priority
              />
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="text-[15px] font-black tracking-tight text-white">POWER STROKE</span>
              <span className="mt-0.5 text-[9px] font-black tracking-[0.35em] text-brand">SPECIALIST</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] font-black uppercase tracking-[0.2em] transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-brand after:transition-transform after:duration-300 ${
                    active
                      ? "text-white after:scale-x-100"
                      : "text-white/50 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop phone CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-red gap-2 px-6 text-[10px]">
              <Phone size={13} strokeWidth={2.5} />
              {BUSINESS_INFO.phoneFormatted}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((p) => !p)}
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 flex flex-col bg-ink lg:hidden"
          >
            {/* Brand top bar */}
            <div className="flex h-[68px] items-center border-b border-ink-border px-5">
              <span className="text-[15px] font-black tracking-tight text-white">POWER STROKE <span className="text-brand">SPECIALIST</span></span>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-8">
              <div className="space-y-1">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between border-b border-white/[0.06] py-5 text-4xl font-black tracking-tight transition-colors ${
                          active ? "text-brand" : "text-white hover:text-brand"
                        }`}
                      >
                        {link.label}
                        {active && <span className="h-2 w-2 rounded-full bg-brand" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </nav>

            <div className="border-t border-ink-border px-8 py-6">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                onClick={() => setOpen(false)}
                className="btn-red w-full justify-center text-sm"
              >
                <Phone size={16} strokeWidth={2.5} />
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
