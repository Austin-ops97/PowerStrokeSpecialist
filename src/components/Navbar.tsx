"use client";

import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";
import QuoteButton from "@/components/QuoteButton";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LOGO = "https://2pbqjgxycewduhvh.public.blob.vercel-storage.com/PowerStroke/Untitled_Artwork.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm transition-all duration-300 ${
          scrolled ? "border-slate-200 shadow-md" : "border-transparent"
        }`}
      >
        <div className="wrap flex h-[76px] items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-3">
            <span className="relative h-14 w-14 shrink-0">
              <Image src={LOGO} alt="Power Stroke Specialist" fill className="object-contain" sizes="56px" priority />
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="text-[16px] font-black tracking-tight text-slate-900">POWER STROKE</span>
              <span className="mt-0.5 text-[9px] font-black tracking-[0.38em] text-navy">SPECIALIST</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-black uppercase tracking-[0.15em] text-slate-500 transition-colors hover:text-navy after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-navy after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <QuoteButton className="btn-navy min-h-[40px] px-5 text-[10px]" />
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-action min-h-[40px] px-5 text-[10px]">
              <Phone size={12} strokeWidth={2.5} />
              {BUSINESS_INFO.phoneFormatted}
            </a>
          </div>

          {/* Mobile: phone icon + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-action min-h-[36px] px-4 text-[10px]">
              <Phone size={12} strokeWidth={2.5} />
              Call
            </a>
            <button
              type="button"
              onClick={() => setOpen((p) => !p)}
              className="flex h-9 w-9 items-center justify-center text-slate-700"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>
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
            <div className="flex h-[68px] items-center justify-between border-b border-slate-200 px-5">
              <span className="text-[14px] font-black tracking-tight text-slate-900">
                POWER STROKE <span className="text-navy">SPECIALIST</span>
              </span>
              <button type="button" onClick={() => setOpen(false)} className="flex h-9 w-9 items-center justify-center text-slate-500">
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.22 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-slate-100 py-5 text-3xl font-black tracking-tight text-slate-800 transition-colors hover:text-navy"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </nav>

            <div className="space-y-3 border-t border-slate-100 px-8 py-6">
              <a href={`tel:${BUSINESS_INFO.phone}`} onClick={() => setOpen(false)} className="btn-action w-full justify-center">
                <Phone size={16} strokeWidth={2.5} />
                {BUSINESS_INFO.phoneFormatted}
              </a>
              <QuoteButton className="btn-outline w-full justify-center" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
