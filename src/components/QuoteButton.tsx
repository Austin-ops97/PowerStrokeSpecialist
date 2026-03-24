"use client";

import { X } from "lucide-react";
import { useState } from "react";

type Props = { className?: string };

export default function QuoteButton({ className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className ?? "btn-navy"}>
        Get Quote Estimate
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="relative w-full max-w-md border border-slate-200 bg-white p-10 text-center shadow-xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-slate-400 hover:text-slate-700"
              aria-label="Close"
            >
              <X size={18} strokeWidth={2} />
            </button>

            {/* Accent bar */}
            <div className="mx-auto mb-6 h-1 w-12 bg-action" />

            <h2 className="text-3xl font-black tracking-tight text-slate-900">Coming Soon</h2>
            <p className="mt-3 text-base font-medium leading-relaxed text-slate-500">
              Our online quote tool is on the way. For now, give us a call and we&apos;ll get
              you a fast, honest estimate.
            </p>

            <a
              href="tel:8325976986"
              className="btn-action mx-auto mt-7 w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Call (832) 597-6986
            </a>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-3 w-full py-2 text-sm font-semibold text-slate-400 hover:text-slate-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
