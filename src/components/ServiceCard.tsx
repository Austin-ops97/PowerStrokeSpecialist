"use client";

import { iconMap } from "@/lib/icon-map";
import { motion } from "framer-motion";
import { ArrowUpRight, Wrench } from "lucide-react";

type Props = { name: string; shortDescription: string; icon: string };

export default function ServiceCard({ name, shortDescription, icon }: Props) {
  const Icon = iconMap[icon] ?? Wrench;

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-hover"
    >
      {/* Navy left-border accent on hover */}
      <span className="absolute inset-y-0 left-0 w-0.5 origin-bottom scale-y-0 bg-navy transition-transform duration-300 group-hover:scale-y-100" />

      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center bg-navy-50 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
          <Icon size={20} strokeWidth={2} />
        </span>
        <ArrowUpRight
          size={16}
          strokeWidth={2}
          className="mt-1 shrink-0 text-slate-300 transition-colors group-hover:text-navy"
        />
      </div>

      <h3 className="mt-5 text-base font-black tracking-tight text-slate-900">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{shortDescription}</p>

      <div className="mt-5 border-t border-slate-100 pt-4">
        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-action">
          Call for Quote
        </span>
      </div>
    </motion.article>
  );
}
