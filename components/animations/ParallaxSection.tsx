"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { RefObject, ReactNode } from "react";

interface ParallaxSectionProps {
  containerRef: RefObject<HTMLElement | null>;
  children: ReactNode;
  className?: string;
  /** Vertical shift in px (default 40) */
  intensity?: number;
}

export default function ParallaxSection({
  containerRef,
  children,
  className = "",
  intensity = 40,
}: ParallaxSectionProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [intensity, 0, -intensity]);

  return (
    <motion.div
      style={{ y }}
      className={`relative overflow-hidden ${className}`.trim()}
    >
      <div
        className="absolute left-0 right-0 w-full h-full"
        style={{
          top: -intensity,
          height: `calc(100% + ${2 * intensity}px)`,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
