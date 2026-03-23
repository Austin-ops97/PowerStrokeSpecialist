"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = { value: string; label: string; light?: boolean };

export default function StatCounter({ value, label, light = false }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const match = value.match(/\d+/);
  const target = match ? Number(match[0]) : null;
  const suffix = target === null ? "" : value.replace(String(target), "");
  const [display, setDisplay] = useState(target === null ? value : `0${suffix}`);

  useEffect(() => {
    if (!inView || target === null) return;
    const c = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });
    return () => c.stop();
  }, [inView, target, suffix]);

  return (
    <div ref={ref} className="border-l-4 border-action py-3 pl-5">
      <p className={`text-4xl font-black tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
        {display}
      </p>
      <p className={`mt-1.5 text-[10px] font-black uppercase tracking-[0.22em] ${light ? "text-white/50" : "text-slate-400"}`}>
        {label}
      </p>
    </div>
  );
}
