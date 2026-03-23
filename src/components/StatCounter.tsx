"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: string;
  label: string;
};

export default function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const numericMatch = value.match(/\d+/);
  const numberTarget = numericMatch ? Number(numericMatch[0]) : null;
  const suffix = numberTarget === null ? "" : value.replace(String(numberTarget), "");
  const [display, setDisplay] = useState(numberTarget === null ? value : `0${suffix}`);

  useEffect(() => {
    if (!inView || numberTarget === null) return;
    const controls = animate(0, numberTarget, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, numberTarget, suffix]);

  return (
    <div ref={ref} className="border-l-4 border-accent py-4 pl-6">
      <p className="text-5xl font-black tracking-tighter text-white">{display}</p>
      <p className="mt-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/40">{label}</p>
    </div>
  );
}
