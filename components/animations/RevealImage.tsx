"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface RevealImageProps {
  children: ReactNode;
  className?: string;
  /** Slight scale from this value to 1 when in view */
  initialScale?: number;
  duration?: number;
  ease?: number[];
}

const defaultEase = [0.22, 1, 0.36, 1];

export default function RevealImage({
  children,
  className = "",
  initialScale = 0.97,
  duration = 0.9,
  ease = defaultEase,
}: RevealImageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: initialScale }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: initialScale }}
      transition={{ duration, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
