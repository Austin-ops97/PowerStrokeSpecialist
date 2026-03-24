"use client";

import { TRUST_BADGES } from "@/lib/constants";
import { iconMap } from "@/lib/icon-map";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function TrustBadges() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="wrap">
        <div className="grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {TRUST_BADGES.map((badge, i) => {
            const Icon = iconMap[badge.icon] ?? ShieldCheck;
            return (
              <motion.article
                key={badge.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease }}
                className="group flex items-center gap-4 py-6 sm:px-8 lg:py-8"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <p className="text-sm font-bold text-slate-700">{badge.label}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
