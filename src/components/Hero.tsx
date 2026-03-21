"use client";

import { BUSINESS_INFO } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero-diesel.svg"
          alt="Lifted diesel truck and engine bay at Power Stroke Specialist in Baytown"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

      <div className="section-container relative z-10">
        <p className="text-sm uppercase tracking-[0.22em] text-accent">Baytown&apos;s Premier Diesel Specialists</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-none text-white sm:text-6xl lg:text-7xl">
          Power Stroke Specialist
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-text-muted">
          Ford Power Stroke Bulletproofing - Full-Service Auto Repair - Aftermarket Upgrades
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary">
            Call {BUSINESS_INFO.phoneFormatted}
          </a>
          <Link href="/services" className="btn-secondary">
            View Our Services
          </Link>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm uppercase tracking-[0.2em] text-text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
      >
        Scroll
      </motion.div>
    </section>
  );
}
