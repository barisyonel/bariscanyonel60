"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";
import {
  acceptCookieConsent,
  readCookieConsent,
  subscribeCookieConsent,
} from "@/lib/cookie-consent";
import { easeOut } from "@/lib/motion";

function getConsentSnapshot() {
  return readCookieConsent();
}

function getServerConsentSnapshot() {
  return false;
}

export function CookieBanner() {
  const reduce = useReducedMotion();
  const hasConsent = useSyncExternalStore(
    subscribeCookieConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  );

  function accept() {
    acceptCookieConsent();
  }

  if (hasConsent) return null;

  return (
    <motion.div
      role="dialog"
      aria-label="Çerez bildirimi"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.4, ease: easeOut }}
      className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-lg rounded-[var(--radius-card)] border border-line bg-elevated p-5 shadow-lg md:right-auto md:left-6"
    >
      <p className="text-sm leading-relaxed text-muted">
        Deneyiminizi iyileştirmek için zorunlu çerezler kullanıyoruz. Analitik
        çerezler yalnızca onayınızla etkinleşir. Detaylar için{" "}
        <Link href="/kvkk" className="font-medium text-accent hover:underline">
          KVKK metnini
        </Link>{" "}
        inceleyebilirsiniz.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={accept}
          className="rounded-btn bg-accent px-4 py-2 text-sm font-semibold text-base transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Kabul Et
        </button>
        <Link
          href="/kvkk"
          className="rounded-btn border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          Daha Fazla Bilgi
        </Link>
      </div>
    </motion.div>
  );
}
