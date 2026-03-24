"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Props = { name: string; text: string; rating: number };

export default function ReviewCard({ name, text, rating }: Props) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-7 transition-shadow duration-300 hover:shadow-hover"
    >
      {/* Decorative quote mark */}
      <span className="pointer-events-none absolute -right-2 -top-4 select-none text-[120px] font-black leading-none text-slate-100">
        &ldquo;
      </span>

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-navy via-navy-light to-action" />

      {/* Stars */}
      <div className="relative flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            strokeWidth={0}
            fill={i < rating ? "#DC2626" : "#E2E8F0"}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="relative mt-5 flex-1 text-[15px] leading-relaxed text-slate-600">{text}</p>

      {/* Author */}
      <div className="relative mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-navy text-sm font-black text-white">
          {name.charAt(0).toUpperCase()}
        </span>
        <div>
          <p className="text-sm font-bold text-slate-900">{name}</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
            Verified Customer
          </p>
        </div>
      </div>
    </motion.article>
  );
}
