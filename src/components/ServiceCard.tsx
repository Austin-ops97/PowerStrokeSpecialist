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
    <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="card-base">
      <div className="mb-4 inline-flex rounded-full bg-accent/10 p-3 text-accent">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-text-white">{name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-muted">{shortDescription}</p>
      <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-accent">Call for Quote</p>
    </motion.article>
  );
}
