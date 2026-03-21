"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

type CounterStatProps = {
  to: number;
  label: string;
};

export default function CounterStat({ to, label }: CounterStatProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 90, damping: 20 });

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [inView, motionValue, to]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    return springValue.on("change", (latest) => {
      element.textContent = `${Math.round(latest)}+ ${label}`;
    });
  }, [label, springValue]);

  return (
    <p ref={ref} className="border border-border-subtle px-4 py-2 text-sm text-text-muted" aria-label={`${to}+ ${label}`}>
      0+ {label}
    </p>
  );
}
