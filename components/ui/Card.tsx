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
        "bg-white border border-gray-200 rounded-lg p-6",
        hover && "hover:border-[#0d2137]/20 hover:shadow-md transition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
