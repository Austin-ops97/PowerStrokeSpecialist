"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: string;
  label: string;
};

export default function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const numericMatch = value.match(/\d+/);
  const numberTarget = numericMatch ? Number(numericMatch[0]) : null;
  const suffix = numberTarget === null ? "" : value.replace(String(numberTarget), "");
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || numberTarget === null) return;

    const controls = animate(0, numberTarget, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(`${Math.round(latest)}${suffix}`),
    });

    return () => controls.stop();
  }, [inView, numberTarget, suffix]);

  return (
    <div ref={ref} className="rounded-lg border border-border-subtle bg-bg-dark px-5 py-4 text-center">
      <p className="font-display text-4xl uppercase text-accent">{display}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">{label}</p>
    </div>
  );
}
