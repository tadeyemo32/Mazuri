"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-[#0d2137] text-sm font-medium mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full bg-white border border-gray-200 rounded px-4 py-2.5 text-[#0d2137] placeholder:text-gray-400 text-[15px] transition-colors",
            "focus:outline-none focus:border-[#0d2137] focus:ring-1 focus:ring-[#0d2137]",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-red-600 text-sm">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-[#0d2137] text-sm font-medium mb-1.5">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full bg-white border border-gray-200 rounded px-4 py-2.5 text-[#0d2137] placeholder:text-gray-400 text-[15px] resize-none transition-colors",
            "focus:outline-none focus:border-[#0d2137] focus:ring-1 focus:ring-[#0d2137]",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-red-600 text-sm">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
