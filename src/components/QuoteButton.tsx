"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ClipboardList, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const LOGO =
  "https://2pbqjgxycewduhvh.public.blob.vercel-storage.com/PowerStroke/Untitled_Artwork.png";

type Props = { className?: string };

export default function QuoteButton({ className }: Props) {
  const [open, setOpen] = useState(false);
  // Portal requires document — wait for mount before rendering
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll while modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const modal = (
    <AnimatePresence>
      {open && (
        /* Backdrop — portalled to document.body so fixed positioning
           is always relative to the true viewport, not the navbar's
           backdrop-filter stacking context */
        <motion.div
          key="quote-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-5"
          style={{ backgroundColor: "rgba(15,23,42,0.65)" }}
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          {/* Modal card */}
          <motion.div
            key="quote-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md overflow-hidden bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Navy header ── */}
            <div className="relative bg-navy px-8 pb-8 pt-10 text-center">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-white/40 transition-colors hover:text-white"
                aria-label="Close"
              >
                <X size={18} strokeWidth={2} />
              </button>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO}
                alt="Power Stroke Specialist"
                className="mx-auto h-16 w-16 object-contain"
              />

              <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-action" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70">
                  Coming Soon
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-black tracking-tight text-white">
                Online Quotes<br />Are on the Way
              </h2>
            </div>

            {/* ── White content ── */}
            <div className="px-8 pb-8 pt-6">
              <p className="text-center text-sm font-medium leading-relaxed text-slate-500">
                Our online quote tool is coming soon. In the meantime, give us a
                call and we&apos;ll get you a fast, honest estimate — no runaround.
              </p>

              <div className="my-6 flex items-center gap-4">
                <div className="flex-1 border-t border-slate-100" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                  Call Us Now
                </span>
                <div className="flex-1 border-t border-slate-100" />
              </div>

              {/* Big phone number */}
              <a
                href="tel:8325976986"
                className="group flex items-center justify-center gap-3"
                onClick={() => setOpen(false)}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-action text-white shadow-md">
                  <Phone size={18} strokeWidth={2.5} />
                </span>
                <span className="text-3xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-action">
                  (832) 597-6986
                </span>
              </a>

              <p className="mt-2 text-center text-xs font-semibold text-slate-400">
                Mon – Fri &nbsp;·&nbsp; 8:00 AM – 6:00 PM
              </p>

              <a
                href="tel:8325976986"
                className="btn-action mt-6 w-full justify-center"
                onClick={() => setOpen(false)}
              >
                <Phone size={15} strokeWidth={2.5} />
                Call for a Free Estimate
              </a>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-3 w-full py-2 text-xs font-semibold text-slate-400 transition-colors hover:text-slate-600"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className ?? "btn-navy"}
      >
        <ClipboardList size={15} strokeWidth={2} />
        Get Quote Estimate
      </button>

      {/* Render modal directly into document.body — bypasses any
          stacking context created by the navbar's backdrop-filter */}
      {mounted && createPortal(modal, document.body)}
    </>
  );
}
