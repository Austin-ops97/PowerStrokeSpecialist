"use client";

import { iconMap } from "@/lib/icon-map";
import { motion } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";

type ServiceCardProps = {
  name: string;
  shortDescription: string;
  icon: string;
};

export default function ServiceCard({ name, shortDescription, icon }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Wrench;

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden border border-border-subtle bg-bg-dark-card p-7 transition-all duration-500 hover:border-accent/30 hover:shadow-lift md:p-8"
    >
      {/* Top accent bar animates in on hover */}
      <div className="absolute left-0 top-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />

      {/* Icon */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
        <Icon size={22} strokeWidth={2} />
      </div>

      {/* Text */}
      <h3 className="font-display text-xl font-bold tracking-tight text-white">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{shortDescription}</p>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-accent transition-all group-hover:gap-3">
        <span>Call for Quote</span>
        <ArrowRight size={13} strokeWidth={2.5} />
      </div>
    </motion.article>
  );
}
