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
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="wrap flex h-[68px] items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-3">
            <span className="relative h-10 w-10 shrink-0">
              <Image
                src="https://2pbqjgxycewduhvh.public.blob.vercel-storage.com/PowerStroke/Untitled_Artwork.png"
                alt="Power Stroke Specialist"
                fill
                className="object-contain"
                sizes="40px"
                priority
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[14px] font-black tracking-tight text-slate-900">POWER STROKE</span>
              <span className="mt-0.5 text-[8px] font-black tracking-[0.35em] text-navy">SPECIALIST</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] font-black uppercase tracking-[0.2em] transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-navy after:transition-transform after:duration-300 ${
                    active
                      ? "text-navy after:scale-x-100"
                      : "text-slate-500 hover:text-slate-900 after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/services" className="btn-outline px-5 text-[10px] min-h-[40px]">
              Services
            </Link>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-action px-5 text-[10px] min-h-[40px]">
              <Phone size={12} strokeWidth={2.5} />
              {BUSINESS_INFO.phoneFormatted}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((p) => !p)}
            className="flex h-10 w-10 items-center justify-center text-slate-700 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 flex flex-col bg-white lg:hidden"
          >
            {/* Top bar */}
            <div className="flex h-[68px] items-center justify-between border-b border-slate-200 px-5">
              <span className="text-[14px] font-black tracking-tight text-slate-900">
                POWER STROKE <span className="text-navy">SPECIALIST</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center text-slate-500"
                aria-label="Close menu"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-8">
              {NAV_LINKS.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between border-b border-slate-100 py-5 text-3xl font-black tracking-tight transition-colors ${
                        active ? "text-navy" : "text-slate-800 hover:text-navy"
                      }`}
                    >
                      {link.label}
                      {active && <span className="h-2 w-2 rounded-full bg-navy" />}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="border-t border-slate-100 px-8 py-6">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                onClick={() => setOpen(false)}
                className="btn-action w-full justify-center"
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
