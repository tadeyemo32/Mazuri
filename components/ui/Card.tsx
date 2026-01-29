"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-[var(--color-bg-card)] border border-white/10 rounded-lg p-6 text-[var(--color-text)]",
        hover && "hover:border-white/20 hover:shadow-lg hover:shadow-black/10 transition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
