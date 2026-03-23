"use client";

import { iconMap } from "@/lib/icon-map";
import { motion } from "framer-motion";
import { ArrowUpRight, Wrench } from "lucide-react";

type ServiceCardProps = {
  name: string;
  shortDescription: string;
  icon: string;
};

export default function ServiceCard({ name, shortDescription, icon }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Wrench;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col bg-chalk-card p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Icon (Texas blue) + arrow row */}
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
          <Icon size={22} strokeWidth={2} />
        </span>
        <ArrowUpRight
          size={18}
          strokeWidth={2}
          className="mt-0.5 shrink-0 text-zinc-300 transition-colors group-hover:text-brand"
        />
      </div>

      {/* Text */}
      <h3 className="mt-5 text-lg font-black tracking-tight text-ink">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">{shortDescription}</p>

      {/* Bottom CTA — Texas red */}
      <div className="mt-6 border-t border-zinc-100 pt-5">
        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand">
          Call for Quote
        </span>
      </div>
    </motion.article>
  );
}
