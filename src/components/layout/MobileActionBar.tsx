"use client";

import Link from "next/link";
import { trackMetaContact } from "@/lib/gtag";
import { defaultWa, site } from "@/lib/site";

const item = "flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[0.72rem] font-medium";

export function MobileActionBar() {
  return (
    <nav
      aria-label="Hızlı iletişim"
      className="fixed inset-x-0 bottom-0 z-50 flex border-t border-line bg-base pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <a href={`tel:+${site.phoneRaw}`} onClick={trackMetaContact} className={`${item} text-ink`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
        </svg>
        Hemen Ara
      </a>
      <a
        href={defaultWa}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackMetaContact}
        className={`${item} border-x border-line text-[#0f7a40]`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.96L2 22l5.18-1.5A9.9 9.9 0 1 0 12.04 2Zm5.77 14.06c-.24.68-1.4 1.3-1.94 1.35-.5.05-1.13.24-3.8-.8-3.2-1.26-5.23-4.53-5.39-4.74-.16-.21-1.29-1.71-1.29-3.27 0-1.55.82-2.31 1.1-2.63.29-.32.63-.4.84-.4h.6c.2 0 .46-.07.71.55.26.63.88 2.18.96 2.34.08.16.13.35.02.56-.1.21-.16.34-.31.53-.16.18-.33.41-.47.55-.16.16-.32.33-.14.64.18.32.8 1.33 1.73 2.15 1.19 1.06 2.19 1.39 2.5 1.55.32.16.5.13.68-.08.19-.21.79-.92 1-1.24.21-.32.42-.26.7-.16.29.11 1.84.87 2.15 1.03.32.16.53.24.6.37.08.13.08.79-.15 1.5Z" />
        </svg>
        WhatsApp
      </a>
      <Link href="/iletisim" className={`${item} bg-ink text-white`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 4h16v12H5.2L4 17.2V4Z" />
          <path d="M8 9h8M8 12h5" />
        </svg>
        Teklif Al
      </Link>
    </nav>
  );
}
