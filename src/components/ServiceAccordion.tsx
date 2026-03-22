"use client";

import { iconMap } from "@/lib/icon-map";
import { SERVICES } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Wrench } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type ServiceAccordionProps = {
  limit?: number;
};

export default function ServiceAccordion({ limit = 6 }: ServiceAccordionProps) {
  const items = SERVICES.slice(0, limit);
  const [openId, setOpenId] = useState(items[0]?.id ?? "");

  return (
    <div className="divide-y divide-white/[0.06] border border-border-subtle">
      {items.map((service) => {
        const Icon = iconMap[service.icon] ?? Wrench;
        const expanded = openId === service.id;

        return (
          <article key={service.id} className="bg-bg-dark-card transition-colors hover:bg-bg-dark-lighter">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
              onClick={() => setOpenId(expanded ? "" : service.id)}
              aria-expanded={expanded}
              aria-label={`Toggle ${service.name} details`}
            >
              <span className="flex items-center gap-4">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center transition-colors ${expanded ? "bg-accent text-white" : "bg-accent/10 text-accent"}`}>
                  <Icon size={17} strokeWidth={2} />
                </span>
                <span className="font-bold text-white">{service.name}</span>
              </span>
              <ChevronDown
                className={`shrink-0 transition-all duration-300 ${expanded ? "rotate-180 text-accent" : "text-white/30"}`}
                size={20}
                strokeWidth={2}
              />
            </button>

            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/[0.06] px-6 pb-6 pt-4 sm:px-7">
                    <p className="text-sm leading-relaxed text-text-muted">{service.longDescription}</p>
                    <Link href="/contact" className="btn-primary mt-5 inline-flex px-7 py-3 text-[10px]">
                      Request Appointment
                    </Link>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
