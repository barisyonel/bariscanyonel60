"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { dismissWelcomePromo, readWelcomePromoDismissed } from "@/lib/welcome-promo";
import { easeOut } from "@/lib/motion";
import { defaultWa } from "@/lib/site";

const BLUR_AFTER_MS = 1000;
const AUTO_CLOSE_MS = 5000;

export function WelcomePromo() {
  const titleId = useId();
  const descId = useId();
  const reduce = useReducedMotion();
  const closedRef = useRef(false);
  const [open, setOpen] = useState(true);
  const [siteBlurred, setSiteBlurred] = useState(false);

  function closePromo() {
    if (closedRef.current) return;
    closedRef.current = true;
    dismissWelcomePromo();
    setOpen(false);
  }

  useEffect(() => {
    if (readWelcomePromoDismissed()) {
      closedRef.current = true;
      setOpen(false);
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const blurTimer = window.setTimeout(() => {
      if (closedRef.current) return;
      setSiteBlurred(true);
    }, BLUR_AFTER_MS);

    const closeTimer = window.setTimeout(() => {
      closePromo();
    }, AUTO_CLOSE_MS);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePromo();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(blurTimer);
      window.clearTimeout(closeTimer);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className={`fixed inset-0 z-[90] flex items-center justify-center p-4 transition-[background,backdrop-filter] duration-500 sm:p-6 ${
            siteBlurred
              ? "bg-[#05070d]/50 backdrop-blur-md"
              : "bg-base backdrop-blur-none"
          }`}
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
        >
          {!siteBlurred ? (
            <>
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
              <div
                className="pointer-events-none absolute left-1/2 top-1/3 size-[22rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]"
                aria-hidden
              />
            </>
          ) : null}

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            initial={false}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.28, ease: easeOut }}
            className="relative z-10 w-full max-w-[28rem] overflow-hidden rounded-[1.25rem] border border-line bg-elevated shadow-[0_32px_80px_-24px_rgba(0,0,0,0.85)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-subtle">
              <Image
                src="/projects/dalyan-palmiye-resort.jpg"
                alt="BCY Dijital referans sitesi örnek görseli"
                fill
                sizes="448px"
                className="object-cover object-center opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-elevated via-elevated/40 to-transparent" />
              <p className="absolute left-4 top-4 rounded-btn border border-accent/40 bg-base/80 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent backdrop-blur-sm">
                Ücretsiz keşif
              </p>
            </div>

            <div className="relative px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
              <button
                type="button"
                onClick={closePromo}
                className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="Kapat"
              >
                <span aria-hidden className="text-lg leading-none">
                  ×
                </span>
              </button>

              <p className="eyebrow">BCY Dijital</p>
              <h2
                id={titleId}
                className="mt-2 max-w-[16ch] font-display text-2xl font-bold uppercase leading-[1.05] tracking-tight text-ink sm:text-3xl"
              >
                Web sitenizi
                <span className="mt-1 block text-accent">birlikte planlayalım</span>
              </h2>
              <p id={descId} className="mt-3 text-sm leading-relaxed text-muted">
                Kurumsal kimlik, web site, SEO ve Google’da işletme tanıtımı için ücretsiz keşif
                görüşmesi. Kapsam yazılı teklifle gelir.
              </p>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href="/#teklif"
                  onClick={closePromo}
                  className="inline-flex min-h-11 flex-1 items-center justify-center rounded-btn bg-accent px-5 text-sm font-semibold text-[#090b12] transition-colors hover:bg-accent-deep"
                >
                  Ücretsiz teklif al
                </Link>
                <a
                  href={defaultWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closePromo}
                  className="inline-flex min-h-11 flex-1 items-center justify-center rounded-btn border border-line px-5 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:text-accent"
                >
                  WhatsApp’tan yaz
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
