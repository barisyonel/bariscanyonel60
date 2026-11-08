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
      className="fixed bottom-[calc(4.25rem+env(safe-area-inset-bottom))] left-4 right-4 z-[60] md:bottom-4 mx-auto max-w-lg rounded-card border border-line bg-base p-5 shadow-(--shadow-lg) md:right-auto md:left-6"
    >
      <p className="text-sm leading-relaxed text-muted">
        Deneyiminizi iyileştirmek için zorunlu çerezler kullanıyoruz. Analitik
        çerezler yalnızca onayınızla etkinleşir. Detaylar için{" "}
        <Link href="/gizlilik-politikasi" className="font-medium text-accent hover:underline">
          gizlilik politikamızı
        </Link>{" "}
        inceleyebilirsiniz.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={accept}
          className="rounded-btn bg-accent px-4 py-2 text-sm font-medium text-[#090b12] transition-colors hover:bg-accent-deep"
        >
          Kabul Et
        </button>
        <Link
          href="/gizlilik-politikasi"
          className="rounded-btn border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          Daha Fazla Bilgi
        </Link>
      </div>
    </motion.div>
  );
}
