"use client";

import { defaultWa } from "@/lib/site";
import { trackMetaContact } from "@/lib/gtag";

export function WhatsAppFAB() {
  return (
    <a
      href={defaultWa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
      onClick={trackMetaContact}
      className="fixed bottom-5 right-5 z-40 hidden h-[52px] md:flex w-[52px] items-center justify-center rounded-full bg-[#25D366] shadow-(--shadow-lg) transition-transform hover:-translate-y-0.5"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff" aria-hidden>
        <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.96L2 22l5.18-1.5A9.9 9.9 0 1 0 12.04 2Zm5.77 14.06c-.24.68-1.4 1.3-1.94 1.35-.5.05-1.13.24-3.8-.8-3.2-1.26-5.23-4.53-5.39-4.74-.16-.21-1.29-1.71-1.29-3.27 0-1.55.82-2.31 1.1-2.63.29-.32.63-.4.84-.4h.6c.2 0 .46-.07.71.55.26.63.88 2.18.96 2.34.08.16.13.35.02.56-.1.21-.16.34-.31.53-.16.18-.33.41-.47.55-.16.16-.32.33-.14.64.18.32.8 1.33 1.73 2.15 1.19 1.06 2.19 1.39 2.5 1.55.32.16.5.13.68-.08.19-.21.79-.92 1-1.24.21-.32.42-.26.7-.16.29.11 1.84.87 2.15 1.03.32.16.53.24.6.37.08.13.08.79-.15 1.5Z" />
      </svg>
    </a>
  );
}
