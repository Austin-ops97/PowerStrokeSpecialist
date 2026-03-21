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
    <div className="space-y-3">
      {items.map((service) => {
        const Icon = iconMap[service.icon] ?? Wrench;
        const expanded = openId === service.id;

        return (
          <article key={service.id} className="overflow-hidden rounded-lg border border-border-subtle bg-bg-dark-card">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenId(expanded ? "" : service.id)}
              aria-expanded={expanded}
              aria-label={`Toggle ${service.name} details`}
            >
              <span className="flex items-center gap-3">
                <span className="rounded-full bg-accent/10 p-2 text-accent">
                  <Icon size={18} />
                </span>
                <span className="font-semibold text-text-white">{service.name}</span>
              </span>
              <ChevronDown className={`text-accent transition-transform ${expanded ? "rotate-180" : ""}`} size={20} />
            </button>

            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-border-subtle px-5 pb-5 pt-4">
                    <p className="text-sm leading-relaxed text-text-muted">{service.longDescription}</p>
                    <Link href="/contact" className="btn-primary mt-4 inline-flex px-5 py-3">
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
