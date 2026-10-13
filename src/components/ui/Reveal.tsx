"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { easeOut } from "@/lib/motion";

const viewOpts = { once: true, amount: 0.08, margin: "80px 0px" } as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "fade" | "left" | "right" | "scale";
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, viewOpts);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (inView) setOn(true);
  }, [inView]);

  // IntersectionObserver kaçırırsa içerik yine de görünür kalsın
  useEffect(() => {
    const t = window.setTimeout(() => setOn(true), 900);
    return () => clearTimeout(t);
  }, []);

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={on ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.45, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
