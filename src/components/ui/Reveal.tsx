"use client";

import type { ReactNode } from "react";
import { ClipReveal } from "@/components/motion/Story";

/**
 * Site geneli scroll reveal — clip-path mask (klasik fade-up değil).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "fade" | "left" | "right" | "scale";
}) {
  const mode =
    variant === "left"
      ? "left"
      : variant === "right"
        ? "right"
        : variant === "scale" || variant === "fade"
          ? "scale"
          : "up";

  return (
    <ClipReveal delay={delay} className={className} mode={mode}>
      {children}
    </ClipReveal>
  );
}
