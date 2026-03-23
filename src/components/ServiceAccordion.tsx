"use client";

import { SERVICES } from "@/lib/constants";
import { iconMap } from "@/lib/icon-map";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Wrench } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ServiceAccordion({ limit = 6 }: { limit?: number }) {
  const items = SERVICES.slice(0, limit);
  const [openId, setOpenId] = useState(items[0]?.id ?? "");

  return (
    <div className="divide-y divide-slate-100 border border-slate-200 bg-white">
      {items.map((service) => {
        const Icon = iconMap[service.icon] ?? Wrench;
        const expanded = openId === service.id;

        return (
          <div key={service.id}>
            <button
              type="button"
              onClick={() => setOpenId(expanded ? "" : service.id)}
              aria-expanded={expanded}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50"
            >
              <span className="flex items-center gap-3">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center transition-all ${expanded ? "bg-navy text-white" : "bg-navy-50 text-navy"}`}>
                  <Icon size={15} strokeWidth={2} />
                </span>
                <span className="text-sm font-bold text-slate-900">{service.name}</span>
              </span>
              <ChevronDown
                size={16}
                strokeWidth={2.5}
                className={`shrink-0 text-slate-400 transition-transform duration-300 ${expanded ? "rotate-180 text-navy" : ""}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-slate-100 bg-slate-50 px-5 pb-5 pt-4 pl-[calc(1.25rem+32px+0.75rem)]">
                    <p className="text-sm leading-relaxed text-slate-500">{service.longDescription}</p>
                    <Link
                      href="/contact"
                      className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-navy hover:text-navy-dark"
                    >
                      Request Appointment <ChevronDown size={12} strokeWidth={3} className="-rotate-90" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
