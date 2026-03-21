"use client";

import { BUSINESS_INFO } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.35]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-105">
        <Image
          src="/images/hero-diesel.svg"
          alt="Power Stroke Specialist diesel truck and performance garage"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-hero-vignette" />
      <div className="absolute inset-0 bg-mesh-dark" />
      <div className="absolute inset-0 bg-line-grid bg-grid opacity-[0.35]" />

      <motion.div style={{ opacity }} className="section-container relative z-10 flex min-h-[100svh] flex-col justify-end pb-20 pt-32 sm:pb-24 lg:justify-center lg:pb-28 lg:pt-0">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Baytown diesel & full-service repair</p>
          <div className="accent-rule mt-1" />
          <h1 className="mt-8 font-display text-[2.65rem] font-normal leading-[1.02] tracking-tight text-text-white sm:text-6xl lg:text-[4.5rem]">
            Built for power.
            <br />
            <span className="text-text-white/90">Trusted for repairs.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            Ford Power Stroke bulletproofing, precision diagnostics, and complete automotive service—executed with the
            discipline you expect from a flagship shop.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary">
              Call {BUSINESS_INFO.phoneFormatted}
            </a>
            <Link href="/services" className="btn-secondary">
              Explore services
            </Link>
          </div>
        </div>

        <div className="mt-16 hidden items-end justify-between border-t border-border-subtle pt-8 lg:flex lg:max-w-5xl">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-brand text-accent-blue">Specialty</p>
            <p className="mt-1 font-display text-lg text-text-white">Power Stroke bulletproofing</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-semibold uppercase tracking-brand text-accent-blue">Coverage</p>
            <p className="mt-1 text-sm text-text-muted">Drivers & fleets across Texas</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
