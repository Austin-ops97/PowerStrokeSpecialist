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
    <div className="space-y-2">
      {items.map((service) => {
        const Icon = iconMap[service.icon] ?? Wrench;
        const expanded = openId === service.id;

        return (
          <article
            key={service.id}
            className="overflow-hidden rounded-sm border border-border-subtle bg-bg-dark-card transition-colors hover:border-border-strong"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              onClick={() => setOpenId(expanded ? "" : service.id)}
              aria-expanded={expanded}
              aria-label={`Toggle ${service.name} details`}
            >
              <span className="flex min-w-0 items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border-strong bg-bg-dark text-accent">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <span className="font-display text-lg font-normal text-text-white">{service.name}</span>
              </span>
              <ChevronDown
                className={`shrink-0 text-accent-blue transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                size={20}
                strokeWidth={1.75}
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
                  <div className="border-t border-border-subtle px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                    <p className="text-sm leading-relaxed text-text-muted">{service.longDescription}</p>
                    <Link href="/contact" className="btn-primary mt-5 inline-flex px-6 py-3">
                      Request appointment
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
