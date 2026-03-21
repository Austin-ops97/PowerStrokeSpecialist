"use client";

import { BUSINESS_INFO } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero-diesel.svg"
          alt="Power Stroke Specialist diesel truck and performance garage lifestyle scene"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45" />

      <div className="section-container relative z-10">
        <p className="section-eyebrow">Baytown&apos;s Trusted Diesel & Full-Service Mechanic Shop</p>
        <div className="accent-divider" />
        <h1 className="mt-5 max-w-4xl font-display text-6xl uppercase leading-none text-text-white sm:text-7xl lg:text-8xl">
          Built For Power.
          <br />
          Trusted For Repairs.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-text-muted">
          Ford Power Stroke bulletproofing, full-service automotive repair, and aftermarket upgrades done right by an
          experienced Baytown crew.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary">
            Call {BUSINESS_INFO.phoneFormatted}
          </a>
          <Link href="/services" className="btn-secondary">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
