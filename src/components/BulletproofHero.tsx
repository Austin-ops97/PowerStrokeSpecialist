"use client";

import { BUSINESS_INFO, STATS } from "@/lib/constants";
import StatCounter from "@/components/StatCounter";
import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const checklist = [
  "ARP head stud installation",
  "Oil cooler flush & replacement",
  "EGR system service",
  "FICM support",
  "Cooling system inspection",
  "Water pump service",
];

export default function BulletproofHero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-dot-navy bg-dot-md" />

      <div className="wrap section-pad relative">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left — text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease }}
              className="inline-flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-white/50"
            >
              <span className="h-px w-5 bg-white/30" />
              Signature Service
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06, ease }}
              className="mt-5 text-5xl font-black tracking-tighter text-white sm:text-6xl"
            >
              Power Stroke<br />Bulletproofing.
            </motion.h2>

            {/* Animated accent line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="mt-4 h-1 bg-action"
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="mt-5 max-w-md text-base font-medium leading-relaxed text-white/60"
            >
              The work we&apos;re known for across Texas. Every known Ford Power Stroke failure
              point addressed — so your engine outlasts everything else on the road.
            </motion.p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {checklist.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.06, ease }}
                  className="flex items-center gap-2.5 text-sm font-medium text-white/70"
                >
                  <CheckCircle2 size={15} className="shrink-0 text-white/80" strokeWidth={2.5} />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.a
              href={`tel:${BUSINESS_INFO.phone}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.55, ease }}
              className="btn-action mt-10 inline-flex"
            >
              <Phone size={15} strokeWidth={2.5} />
              Discuss Your Build
            </motion.a>
          </div>

          {/* Right — stats + callout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="space-y-5"
          >
            {STATS.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} light />
            ))}

            <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-bold text-white">
                Specializing in Ford 6.0L and 7.3L Power Stroke engines.
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-white/50">
                Every job starts with a conversation. Call before you bring it in.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
