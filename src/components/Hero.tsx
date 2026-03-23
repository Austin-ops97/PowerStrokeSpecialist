"use client";

import { BUSINESS_INFO, STATS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot-md" />

      {/* Texas blue glow — top left */}
      <div
        className="pointer-events-none absolute -left-64 -top-64 h-[700px] w-[700px] rounded-full bg-accent/8 blur-3xl"
        aria-hidden
      />
      {/* Texas red glow — bottom right */}
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand/5 blur-3xl"
        aria-hidden
      />

      <div className="wrap relative z-10 flex min-h-[100svh] flex-col justify-center py-28">
        <div className="max-w-4xl">

          {/* Label — Texas blue */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="label">
              <span className="h-px w-6 bg-accent" />
              Baytown, Texas &nbsp;·&nbsp; Diesel Specialists
            </span>
          </motion.div>

          {/* Headline — white + Texas red accent */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="mt-8 text-[clamp(52px,8vw,96px)] font-black leading-[0.92] tracking-tighter text-white"
          >
            Diesel Repair<br />
            <span className="text-brand">Done Right.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
            className="mt-8 max-w-lg text-base font-medium leading-relaxed text-white/50 sm:text-lg"
          >
            Ford Power Stroke bulletproofing, advanced diagnostics, and complete
            automotive service — the shop Baytown trusts.
          </motion.p>

          {/* CTAs — red primary, outline secondary */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-red">
              <Phone size={15} strokeWidth={2.5} />
              {BUSINESS_INFO.phoneFormatted}
            </a>
            <Link href="/services" className="btn-outline-light">
              Our Services
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-20 grid max-w-xl grid-cols-3 border-t border-ink-border pt-10"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="pr-8">
              <p className="text-4xl font-black text-white">{stat.value}</p>
              <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative vertical text */}
      <div
        className="pointer-events-none absolute bottom-12 right-8 hidden origin-bottom-right rotate-90 lg:block"
        aria-hidden
      >
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10">
          Power Stroke Specialist &nbsp;·&nbsp; Baytown TX
        </p>
      </div>
    </section>
  );
}
