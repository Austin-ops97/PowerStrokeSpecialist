"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
};

const variants = {
  up:    { hidden: { opacity: 0, y: 24 },  visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 30 },  visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
};

export default function ScrollReveal({ children, className, delay = 0, direction = "up" }: Props) {
  const v = variants[direction];
  return (
    <motion.div
      initial={v.hidden}
      whileInView={v.visible}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
