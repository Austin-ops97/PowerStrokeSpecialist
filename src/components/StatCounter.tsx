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
  const [display, setDisplay] = useState(numberTarget === null ? value : `0${suffix}`);

  useEffect(() => {
    if (!inView || numberTarget === null) return;

    const controls = animate(0, numberTarget, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(`${Math.round(latest)}${suffix}`),
    });

    return () => controls.stop();
  }, [inView, numberTarget, suffix]);

  return (
    <div
      ref={ref}
      className="group border-l-4 border-accent bg-bg-dark-lighter px-6 py-6"
    >
      <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">{display}</p>
      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-text-muted">{label}</p>
    </div>
  );
}
