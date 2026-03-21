"use client";

import { iconMap } from "@/lib/icon-map";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

type ServiceCardProps = {
  name: string;
  shortDescription: string;
  icon: string;
};

export default function ServiceCard({ name, shortDescription, icon }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Wrench;

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-sm border border-border-subtle bg-bg-dark-card p-6 shadow-card transition-colors duration-300 hover:border-accent/35 md:p-7"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-blue-dim/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-5 inline-flex rounded-sm border border-border-strong bg-bg-dark p-3 text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent-blue">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <h3 className="font-display text-xl font-normal tracking-tight text-text-white">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">{shortDescription}</p>
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-brand text-accent">Request a quote</p>
      </div>
    </motion.article>
  );
}
