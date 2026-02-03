"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation";

  const variants = {
    primary: "bg-[#0d2137] text-white hover:bg-[#1a365d]",
    secondary: "bg-[#e5a00d] text-[#0d2137] hover:bg-[#d4940a]",
    outline: "border-2 border-[#0d2137] text-[#0d2137] hover:bg-[#0d2137] hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2.5 text-sm min-h-[40px] min-w-[44px]",
    md: "px-5 py-2.5 text-[15px] min-h-[44px] min-w-[44px]",
    lg: "px-6 py-3 text-base min-h-[48px] min-w-[44px]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}
