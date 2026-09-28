"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds. Stagger siblings by ~0.05–0.08. */
  delay?: number;
};

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/**
 * Entrance animation: fade + small rise + blur, once, when scrolled into view.
 * Never animates from scale(0) or a large offset, and drops the movement entirely
 * under prefers-reduced-motion (opacity only).
 */
export const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduce ? { opacity: 0 } : { opacity: 0, y: 10, filter: "blur(4px)" }
      }
      whileInView={
        reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.45, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
