"use client";

import { SERVICES } from "@/lib/constants";
import { iconMap } from "@/lib/icon-map";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Wrench } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type ServiceAccordionProps = { limit?: number };

export default function ServiceAccordion({ limit = 6 }: ServiceAccordionProps) {
  const items = SERVICES.slice(0, limit);
  const [openId, setOpenId] = useState(items[0]?.id ?? "");

  return (
    <div className="divide-y divide-zinc-100 border-y border-zinc-100">
      {items.map((service) => {
        const Icon = iconMap[service.icon] ?? Wrench;
        const expanded = openId === service.id;

        return (
          <div key={service.id} className="bg-chalk-card">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-zinc-50"
              onClick={() => setOpenId(expanded ? "" : service.id)}
              aria-expanded={expanded}
            >
              <span className="flex items-center gap-4">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center transition-all ${expanded ? "bg-brand text-white" : "bg-brand/10 text-brand"}`}>
                  <Icon size={16} strokeWidth={2} />
                </span>
                <span className="font-bold text-ink">{service.name}</span>
              </span>
              <ChevronRight
                size={18}
                strokeWidth={2.5}
                className={`shrink-0 text-zinc-300 transition-transform duration-300 ${expanded ? "rotate-90 text-brand" : ""}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-zinc-100 px-6 pb-6 pt-4 pl-[calc(1.5rem+36px+1rem)]">
                    <p className="text-sm leading-relaxed text-zinc-500">{service.longDescription}</p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-brand hover:text-brand-dark"
                    >
                      Request Appointment
                      <ChevronRight size={13} strokeWidth={3} />
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
