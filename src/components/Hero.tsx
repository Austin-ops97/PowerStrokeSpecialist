"use client";

import { BUSINESS_INFO } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const credentials = [
  "100+ Bulletproofed Engines",
  "10+ Years Experience",
  "Power Stroke Specialists",
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 130]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0.2]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero-diesel.svg"
          alt="Power Stroke Specialist diesel truck and performance garage"
          fill
          priority
          className="object-cover object-center scale-105"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-mesh-hero" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/95 to-bg-dark/40" />
      <div className="absolute inset-0 bg-line-grid bg-grid opacity-30" />

      {/* Bottom fade */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-bg-dark to-transparent"
      />

      {/* Content */}
      <div className="section-container relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-36 sm:pb-24 lg:justify-center lg:pb-28 lg:pt-20">
        <div className="max-w-3xl lg:max-w-4xl">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="section-eyebrow"
          >
            Baytown, Texas — Diesel &amp; Full-Service Repair
          </motion.p>

          {/* Red accent bar */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left"
          >
            <div className="accent-divider" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-display text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-[96px]"
          >
            Precision Work.
            <span className="block text-white/85">Built to Last.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg"
          >
            Ford Power Stroke bulletproofing, advanced diagnostics, and complete
            automotive service — the shop you trust when it matters.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary">
              Call to Schedule &mdash; {BUSINESS_INFO.phoneFormatted}
            </a>
            <Link href="/services" className="btn-secondary">
              Our Services
            </Link>
          </motion.div>

          {/* Credential strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {credentials.map((cred) => (
              <span key={cred} className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/55">
                <CheckCircle2 size={14} className="shrink-0 text-accent" strokeWidth={2} />
                {cred}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
