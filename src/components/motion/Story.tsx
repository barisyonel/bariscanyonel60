"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { easeOut } from "@/lib/motion";

const viewOpts = { once: true, amount: 0.08, margin: "80px 0px" } as const;

/** InView + zaman aşımı: animasyon tetiklenmezse içerik yine görünür */
function useRevealGate(delayMs = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, viewOpts);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = window.setTimeout(() => setOn(true), delayMs);
      return () => clearTimeout(t);
    }
  }, [inView, delayMs]);

  useEffect(() => {
    // Failsafe — IntersectionObserver kaçırırsa içerik kaybolmasın
    const t = window.setTimeout(() => setOn(true), 900 + delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);

  return { ref, on };
}

/**
 * Soft lift reveal — asla opacity:0 / ağır clip ile gizlemez.
 */
export function ClipReveal({
  children,
  delay = 0,
  className,
  mode = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  mode?: "up" | "left" | "right" | "scale";
}) {
  const reduce = useReducedMotion();
  const { ref, on } = useRevealGate(Math.round(delay * 1000));

  if (reduce) return <div className={className}>{children}</div>;

  const from =
    mode === "left"
      ? { x: -18, y: 0, scale: 1 }
      : mode === "right"
        ? { x: 18, y: 0, scale: 1 }
        : mode === "scale"
          ? { x: 0, y: 12, scale: 0.98 }
          : { x: 0, y: 22, scale: 1 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ ...from, opacity: 1 }}
      animate={on ? { x: 0, y: 0, scale: 1, opacity: 1 } : { ...from, opacity: 1 }}
      transition={{ duration: 0.55, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

/** Kinetic title — kelimeler her zaman DOM’da; sadece yumuşak lift */
export function KineticTitle({
  text,
  as: Tag = "h2",
  className,
  id,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, viewOpts);
  const [on, setOn] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    if (inView) setOn(true);
  }, [inView]);
  useEffect(() => {
    const t = window.setTimeout(() => setOn(true), 700);
    return () => clearTimeout(t);
  }, []);

  const Comp = Tag;

  if (reduce) {
    return (
      <Comp id={id} className={className}>
        {text}
      </Comp>
    );
  }

  return (
    <Comp id={id} ref={ref} className={className}>
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className="mr-[0.28em] inline-block"
          initial={{ y: 14, opacity: 0.35 }}
          animate={on ? { y: 0, opacity: 1 } : { y: 14, opacity: 0.35 }}
          transition={{ duration: 0.45, delay: Math.min(i * 0.035, 0.28), ease: easeOut }}
        >
          {w}
        </motion.span>
      ))}
    </Comp>
  );
}

export function ScrollDrawLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 40%"],
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <div ref={ref} className={className ?? "pointer-events-none my-2 w-full"} aria-hidden>
      <svg viewBox="0 0 1200 24" className="h-6 w-full overflow-visible" preserveAspectRatio="none">
        <motion.path
          d="M0 12 Q300 0 600 12 T1200 12"
          fill="none"
          stroke="url(#bcy-draw)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ pathLength: reduce ? 1 : pathLength }}
        />
        <defs>
          <linearGradient id="bcy-draw" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a7a9e" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#219acb" />
            <stop offset="100%" stopColor="#6ec8eb" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function AmbientField({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      <motion.div
        className="absolute -left-1/4 top-0 h-[55%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(33,154,203,0.18),transparent_65%)] blur-3xl"
        animate={
          reduce
            ? undefined
            : { x: [0, 40, -20, 0], y: [0, 30, 10, 0], scale: [1, 1.08, 0.96, 1] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/5 bottom-0 h-[50%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(26,122,158,0.14),transparent_60%)] blur-3xl"
        animate={
          reduce
            ? undefined
            : { x: [0, -35, 15, 0], y: [0, -25, 5, 0], scale: [1, 0.94, 1.06, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}

export function SpotlightCard({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const bg = useMotionTemplate`radial-gradient(420px circle at ${x}% ${y}%, rgba(33,154,203,0.14), transparent 45%)`;

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width) * 100);
    y.set(((e.clientY - r.top) / r.height) * 100);
  }

  return (
    <motion.div
      id={id}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(50);
        y.set(50);
      }}
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{ backgroundImage: reduce ? undefined : bg }}
    >
      {children}
    </motion.div>
  );
}

/** Basit süreç listesi — scroll opacity ile içeriği boğmaz */
export function ProcessScrolly({ steps }: { steps: { t: string; p: string }[] }) {
  return (
    <ol className="mt-12 grid gap-6 md:grid-cols-3">
      {steps.map((s, i) => (
        <ClipReveal key={s.t} delay={i * 0.08} mode="scale">
          <li className="liquid-border h-full rounded-card border border-line bg-elevated p-6">
            <span className="display text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
            <p className="mt-2.5 text-[0.95rem] text-muted">{s.p}</p>
          </li>
        </ClipReveal>
      ))}
    </ol>
  );
}

export function ParallaxShift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  // Parallax gizleme riski yüzünden sade wrapper
  return <div className={className}>{children}</div>;
}
