"use client";

import { BUSINESS_INFO, STATS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const SHOP_IMG = "https://2pbqjgxycewduhvh.public.blob.vercel-storage.com/PowerStroke/Screenshot%202026-03-23%20at%2010.19.10%E2%80%AFAM.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-dot-light bg-dot-md" />

      <div className="wrap relative">
        {/* 5-7 column split: text left, wide photo right */}
        <div className="grid min-h-[calc(100svh-68px)] items-center gap-10 py-20 lg:grid-cols-[5fr_7fr] lg:gap-12 lg:py-16">

          {/* ── Left — text ── */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="label inline-flex"
            >
              <span className="h-px w-5 bg-navy" />
              Baytown, Texas · Diesel Specialists
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease }}
              className="mt-6 text-[clamp(38px,5.5vw,76px)] font-black leading-[0.93] tracking-tighter text-slate-900"
            >
              The Diesel Shop<br />
              <span className="bg-gradient-to-r from-navy via-navy-light to-navy bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                Baytown Trusts.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease }}
              className="mt-5 max-w-md text-base font-medium leading-relaxed text-slate-500"
            >
              Ford Power Stroke bulletproofing, advanced diagnostics, and complete
              automotive repair — done honestly, done right.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28, ease }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-action animate-glow-pulse">
                <Phone size={15} strokeWidth={2.5} />
                {BUSINESS_INFO.phoneFormatted}
              </a>
              <Link href="/services" className="btn-outline">
                View Services
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </motion.div>

            {/* Stats — full-width grid, evenly spaced */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="mt-12 grid w-full grid-cols-2 border-t border-slate-200 pt-8 sm:grid-cols-3"
            >
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex-col gap-2 py-2 ${
                    i === 0
                      ? "hidden pr-6 sm:flex sm:pr-8"
                      : i === 1
                        ? "flex pr-4 sm:border-l sm:border-slate-200 sm:pl-8 sm:pr-0"
                        : "flex border-l border-slate-200 pl-4 sm:pl-8"
                  }`}
                >
                  <p className="text-2xl font-black leading-none tracking-tight text-slate-900 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.18em] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — wide shop photo with rounded corners ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.14, ease }}
            className="relative hidden lg:block"
          >
            {/* Subtle shadow offset behind */}
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-navy/8" />

            {/* Photo — wide landscape aspect ratio to show full building */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
              style={{ aspectRatio: "16/10" }}
            >
              <Image
                src={SHOP_IMG}
                alt="Power Stroke Specialist shop in Baytown, Texas"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1280px) 55vw, 700px"
                priority
              />

              {/* Bottom gradient for badge legibility */}
              <div className="absolute inset-x-0 bottom-0 h-28 rounded-b-2xl bg-gradient-to-t from-black/55 to-transparent" />

              {/* Navy stat badge — bottom left — floating */}
              <div className="absolute bottom-4 left-4 animate-float rounded-xl bg-navy px-5 py-3.5 text-white shadow-lg">
                <p className="text-2xl font-black leading-none">100+</p>
                <p className="mt-1 text-[9px] font-black uppercase tracking-[0.22em] text-white/65">
                  Bulletproofed Engines
                </p>
              </div>

              {/* Red stat badge — bottom right — floating delayed */}
              <div className="absolute bottom-4 right-4 animate-float-delayed rounded-xl bg-action px-4 py-3.5 text-white shadow-lg">
                <p className="text-xl font-black leading-none">10+</p>
                <p className="mt-1 text-[9px] font-black uppercase tracking-[0.2em] text-white/75">
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
