"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode, MouseEvent } from "react";

export function MagneticButton({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 20 });
  const sy = useSpring(y, { stiffness: 260, damping: 20 });
  const reduce = useReducedMotion();

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.28);
    y.set((e.clientY - r.top - r.height / 2) * 0.38);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const cls =
    variant === "primary"
      ? "bg-accent text-base hover:bg-[#3eb0db] shadow-[0_0_0_0_rgba(33,154,203,0)] hover:shadow-[0_10px_28px_-8px_rgba(33,154,203,0.55)]"
      : "border border-line text-ink hover:border-accent hover:text-accent";

  const inner = (
    <motion.div
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      className="inline-block"
    >
      <span
        className={`btn-ripple inline-flex items-center gap-2 rounded-btn px-6 py-3 font-medium display text-[0.95rem] transition-[colors,box-shadow,transform] duration-300 ${cls}`}
      >
        {children}
      </span>
    </motion.div>
  );

  if (external)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {inner}
      </a>
    );
  return (
    <Link href={href} className="inline-block">
      {inner}
    </Link>
  );
}
