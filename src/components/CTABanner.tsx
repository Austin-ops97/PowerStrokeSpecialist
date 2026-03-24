"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";

type Props = {
  heading: string;
  subtext?: string;
  buttonText: string;
  buttonLink: string;
  variant?: "action" | "navy";
};

const ease = [0.22, 1, 0.36, 1];

export default function CTABanner({ heading, subtext, buttonText, buttonLink, variant = "navy" }: Props) {
  const isPhone = buttonLink.startsWith("tel:");
  const bg = variant === "action"
    ? "bg-gradient-to-br from-action via-action-dark to-action"
    : "bg-gradient-to-br from-navy via-navy-dark to-navy";

  return (
    <section className={`${bg} relative overflow-hidden py-14 sm:py-20`}>
      {/* Decorative radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />

      <div className="wrap relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-5xl"
        >
          {heading}
        </motion.h2>
        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease }}
            className="mx-auto mt-3 max-w-lg text-base font-bold text-white/75 sm:text-lg"
          >
            {subtext}
          </motion.p>
        )}

        {/* Big phone number / CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          className="mt-8"
        >
          {isPhone ? (
            <a
              href={buttonLink}
              className="group inline-flex items-center justify-center gap-3 transition-opacity hover:opacity-90"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25">
                <Phone size={22} strokeWidth={2.5} className="text-white" />
              </span>
              <span className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {buttonText}
              </span>
            </a>
          ) : (
            <Link href={buttonLink} className="btn-outline-white mx-auto">
              {buttonText}
            </Link>
          )}
        </motion.div>

        {isPhone && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-3 text-sm font-bold text-white/60"
          >
            Mon – Fri &nbsp;8:00 AM – 6:00 PM
          </motion.p>
        )}
      </div>
    </section>
  );
}
