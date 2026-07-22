"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { easeOut } from "@/lib/motion";

/**
 * Panel wipe geçiş — parent'ta filter/blur YOK
 * (filter, çocuk whileInView hesaplarını bozup kartları görünmez bırakabiliyordu)
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <div className="relative">
      <motion.div
        key={`wipe-${pathname}`}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[90] bg-[#040a14]"
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
        transition={{ duration: 0.5, ease: easeOut }}
      />
      <motion.div
        key={`line-${pathname}`}
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-[91] h-[2px] origin-left bg-gradient-to-r from-transparent via-accent to-transparent"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: [1, 1, 0] }}
        transition={{ duration: 0.65, ease: easeOut }}
      />
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut, delay: 0.06 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
