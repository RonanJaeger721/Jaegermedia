"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

const offsets: Record<RevealDirection, { x?: number; y?: number; scale?: number }> = {
  up: { y: 40 },
  down: { y: -30 },
  left: { x: 36 },
  right: { x: -36 },
  scale: { scale: 1.035 },
};

export function Reveal({ children, className = "", delay = 0, direction = "up" }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
}) {
  const reduce = useReducedMotion();
  return <motion.div
    className={className}
    initial={reduce ? false : { opacity: 0, ...offsets[direction] }}
    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.16, margin: "-48px 0px" }}
    transition={{ duration: direction === "scale" ? 0.82 : 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
  >{children}</motion.div>;
}
