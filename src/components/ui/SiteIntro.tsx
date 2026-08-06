"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOut, easeSoft } from "@/lib/motion";

const SESSION_KEY = "bcy-intro-done";
const INTRO_MS = 2400;

/**
 * Premium marka girişi.
 * SSR / LCP’yi bloklamaz; yalnızca ilk oturumda, hydrate sonrası oynar.
 */
export function SiteIntro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (seen || reduce) return;

    // Kısa gecikme: LCP metni önce boyansın, sonra perde gelsin
    const id = window.setTimeout(() => setShow(true), 80);
    return () => window.clearTimeout(id);
  }, [reduce]);

  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const id = window.setTimeout(() => finish(), INTRO_MS);
    return () => {
      window.clearTimeout(id);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  function finish() {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
    document.body.style.overflow = "";
  }

  const letters = ["B", "C", "Y"] as const;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="presentation"
          aria-hidden
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.85, ease: easeOut },
          }}
          onClick={finish}
        >
          {/* Atmosphere */}
          <div className="absolute inset-0 bg-[#030912]" />
          <motion.div
            className="pointer-events-none absolute left-1/2 top-[42%] h-[42vmin] w-[42vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(33,154,203,0.22) 0%, rgba(33,154,203,0.06) 42%, transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1.15 }}
            transition={{ duration: 1.6, ease: easeSoft }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(33,154,203,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(33,154,203,0.04) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(ellipse at center, black 20%, transparent 72%)",
            }}
          />

          {/* Corner marks */}
          <div className="pointer-events-none absolute inset-8 sm:inset-12">
            <span className="absolute left-0 top-0 h-8 w-8 border-l border-t border-accent/35" />
            <span className="absolute right-0 top-0 h-8 w-8 border-r border-t border-accent/35" />
            <span className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-accent/35" />
            <span className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-accent/35" />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.p
              className="mb-8 text-[0.68rem] font-medium uppercase tracking-[0.42em] text-accent/90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              BCY Dijital
            </motion.p>

            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.88, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.12, ease: easeOut }}
            >
              <div className="absolute inset-0 scale-150 rounded-full bg-accent/20 blur-2xl" />
              <Image
                src="/logo-mark.png"
                alt=""
                width={72}
                height={72}
                priority={false}
                className="relative h-[4.25rem] w-[4.25rem] object-contain"
              />
            </motion.div>

            <div
              className="flex items-baseline justify-center gap-[0.12em] font-display text-[clamp(3rem,10vw,5.5rem)] font-semibold leading-none tracking-[0.18em] text-ink"
              aria-hidden
            >
              {letters.map((l, i) => (
                <span key={l} className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.7, delay: 0.28 + i * 0.09, ease: easeOut }}
                  >
                    {l}
                  </motion.span>
                </span>
              ))}
            </div>

            <motion.div
              className="mt-5 h-px w-16 origin-center bg-gradient-to-r from-transparent via-accent to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65, ease: easeOut }}
            />

            <motion.p
              className="mt-5 max-w-xs text-[0.78rem] leading-relaxed tracking-[0.08em] text-muted"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.78, ease: easeOut }}
            >
              Tokat · Çanakkale · İzmir · İstanbul
            </motion.p>

            {/* Progress rail */}
            <motion.div
              className="mt-10 h-[1.5px] w-40 overflow-hidden rounded-full bg-line/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full origin-left bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: INTRO_MS / 1000 - 0.35, ease: "linear", delay: 0.15 }}
              />
            </motion.div>

            <motion.p
              className="mt-4 text-[0.62rem] uppercase tracking-[0.28em] text-muted/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05 }}
            >
              Atlamak için tıklayın
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
