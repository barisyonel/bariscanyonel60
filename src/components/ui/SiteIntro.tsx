"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOut } from "@/lib/motion";

const SESSION_KEY = "bcy-intro-done";

/**
 * Morphing signal + kinetic type intro (loading / animated logo dilinde).
 * Klasik logo fade değil: path draw → morph pulse → tipografi maskesi → wipe.
 */
export function SiteIntro() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* ignore */
    }
    setShow(!seen);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const ms = reduce ? 600 : 3200;
    const id = window.setTimeout(() => finish(), ms);
    return () => {
      window.clearTimeout(id);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, reduce]);

  function finish() {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
    document.body.style.overflow = "";
  }

  if (!ready) {
    return <div className="fixed inset-0 z-[100] bg-[#040a14]" aria-hidden />;
  }

  const letters = "BCY".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="presentation"
          aria-hidden
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#040a14]"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={
            reduce
              ? { opacity: 0, transition: { duration: 0.2 } }
              : {
                  clipPath: ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"],
                  transition: { duration: 0.75, times: [0, 0.35, 1], ease: easeOut },
                }
          }
          onClick={finish}
        >
          {/* Liquid morph blobs */}
          {!reduce && (
            <>
              <motion.div
                className="absolute left-[15%] top-[20%] h-64 w-64 rounded-full bg-accent/25 blur-[80px]"
                animate={{
                  x: [0, 60, -30, 0],
                  y: [0, 40, -20, 0],
                  borderRadius: ["40% 60% 55% 45%", "55% 45% 40% 60%", "40% 60% 55% 45%"],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-[15%] right-[12%] h-72 w-72 rounded-full bg-[#1a7a9e]/30 blur-[90px]"
                animate={{
                  x: [0, -50, 20, 0],
                  y: [0, -30, 25, 0],
                  borderRadius: ["60% 40% 45% 55%", "40% 60% 60% 40%", "60% 40% 45% 55%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
            </>
          )}

          <div className="relative z-10 flex flex-col items-center px-6">
            {/* Self-drawing signal ring morph */}
            <div className="relative mb-10 h-40 w-40">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
                <motion.circle
                  cx="50"
                  cy="50"
                  r="36"
                  fill="none"
                  stroke="rgba(33,154,203,0.35)"
                  strokeWidth="0.6"
                  initial={{ pathLength: 0, rotate: -90 }}
                  animate={{ pathLength: 1, rotate: 270 }}
                  transition={{ duration: reduce ? 0.2 : 1.4, ease: easeOut }}
                  style={{ transformOrigin: "50% 50%" }}
                />
                <motion.path
                  d="M28 52 C36 34, 64 34, 72 52 C64 70, 36 70, 28 52 Z"
                  fill="none"
                  stroke="#219acb"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                    scale: reduce ? 1 : [1, 1.06, 0.97, 1],
                    rotate: reduce ? 0 : [0, 3, -2, 0],
                  }}
                  transition={{
                    pathLength: { duration: 1.1, delay: 0.3, ease: easeOut },
                    opacity: { duration: 0.4, delay: 0.3 },
                    scale: { duration: 2.4, delay: 1.2, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 2.4, delay: 1.2, repeat: Infinity, ease: "easeInOut" },
                  }}
                  style={{ transformOrigin: "50% 50%" }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="3.5"
                  fill="#219acb"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.3, 1] }}
                  transition={{ delay: 0.9, duration: 0.55, ease: easeOut }}
                />
              </svg>

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: reduce ? 0 : 1.15, duration: 0.55, ease: easeOut }}
              >
                <div className="relative h-12 w-24">
                  <Image
                    src="/logo.png"
                    alt=""
                    fill
                    priority
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
              </motion.div>
            </div>

            {/* Kinetic lettering */}
            <div className="display flex gap-1 overflow-hidden text-4xl font-semibold tracking-[0.2em] sm:text-5xl">
              {letters.map((ch, i) => (
                <motion.span
                  key={ch}
                  className="inline-block text-ink"
                  initial={reduce ? false : { y: "120%", rotateX: -80 }}
                  animate={{ y: "0%", rotateX: 0 }}
                  transition={{ delay: reduce ? 0 : 1.35 + i * 0.1, duration: 0.55, ease: easeOut }}
                >
                  {ch}
                </motion.span>
              ))}
            </div>

            <motion.p
              className="mt-4 overflow-hidden text-[0.72rem] tracking-[0.32em] text-accent uppercase"
              initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ delay: reduce ? 0 : 1.8, duration: 0.7, ease: easeOut }}
            >
              Web · SEO · GEO
            </motion.p>

            {/* Glitch flicker accent line */}
            <motion.div
              className="mt-8 h-px w-48 bg-gradient-to-r from-transparent via-accent to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={
                reduce
                  ? { scaleX: 1, opacity: 1 }
                  : {
                      scaleX: 1,
                      opacity: [0, 1, 0.4, 1],
                    }
              }
              transition={{ delay: reduce ? 0 : 2.1, duration: 0.7, ease: easeOut }}
            />

            <motion.p
              className="mt-6 text-[0.65rem] text-muted/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduce ? 0 : 2.3 }}
            >
              Tıkla · atla
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
