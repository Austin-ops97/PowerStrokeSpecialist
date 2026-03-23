"use client";

import { BUSINESS_INFO, STATS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Very subtle dot grid on white */}
      <div className="pointer-events-none absolute inset-0 bg-dot-light bg-dot-md opacity-100" />

      <div className="wrap relative">
        <div className="grid min-h-[calc(100svh-68px)] items-center gap-12 py-20 lg:grid-cols-[1fr_auto] lg:gap-16 lg:py-0">

          {/* ── Left column — text content ── */}
          <div className="max-w-2xl">

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              <span className="label">
                <span className="h-px w-5 bg-navy" />
                Baytown, Texas · Diesel Specialists
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease }}
              className="mt-6 text-[clamp(42px,6.5vw,80px)] font-black leading-[0.93] tracking-tighter text-slate-900"
            >
              The Diesel Shop<br />
              <span className="text-navy">Baytown Trusts.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease }}
              className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-slate-500"
            >
              Ford Power Stroke bulletproofing, advanced diagnostics, and complete
              automotive repair — done honestly, done right.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-action">
                <Phone size={15} strokeWidth={2.5} />
                {BUSINESS_INFO.phoneFormatted}
              </a>
              <Link href="/services" className="btn-outline">
                View Services
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-14 flex divide-x divide-slate-200 border-t border-slate-200 pt-8"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="pr-10 first:pr-10">
                  <p className="text-3xl font-black tracking-tight text-slate-900">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column — shop photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease }}
            className="relative hidden w-[440px] xl:w-[520px] lg:block"
          >
            {/* Decorative offset layer — navy */}
            <div className="absolute -bottom-4 -right-4 h-full w-full bg-navy/8" />
            {/* Decorative offset layer — red */}
            <div className="absolute -top-4 -left-4 h-16 w-16 bg-action/10" />

            {/* Photo frame */}
            <div className="relative h-[480px] xl:h-[560px] overflow-hidden border border-slate-200 bg-navy-50">
              <Image
                src="/images/shop-exterior.jpg"
                alt="Power Stroke Specialist shop in Baytown, Texas"
                fill
                className="object-cover object-center"
                sizes="560px"
                priority
              />
              {/* Gradient at bottom for badge readability */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Floating stat badge — navy */}
              <div className="absolute bottom-5 left-5 bg-navy px-5 py-4 text-white shadow-navy">
                <p className="text-2xl font-black leading-none">100+</p>
                <p className="mt-1 text-[9px] font-black uppercase tracking-[0.25em] text-white/70">
                  Bulletproofed Engines
                </p>
              </div>

              {/* Floating years badge — action red */}
              <div className="absolute right-5 top-5 bg-action px-4 py-3 text-white shadow-action">
                <p className="text-xl font-black leading-none">10+</p>
                <p className="mt-0.5 text-[9px] font-black uppercase tracking-[0.2em] text-white/80">
                  Yrs Experience
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
