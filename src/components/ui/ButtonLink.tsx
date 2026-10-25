"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  isWhatsAppHref,
  trackAnalyticsEvent,
  trackMetaContact,
  type AnalyticsEventName,
} from "@/lib/gtag";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-btn px-6 py-2.5 text-[0.95rem] font-semibold transition duration-300 hover:-translate-y-0.5";

const variants = {
  primary:
    "bg-accent text-white shadow-sm hover:bg-accent-deep hover:shadow-[0_10px_28px_-12px_rgba(8,126,164,0.7)]",
  ghost: "border border-line bg-base text-ink hover:border-accent hover:text-accent",
  light: "bg-white text-ink hover:bg-accent hover:text-white",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className,
  analyticsEvent,
  analyticsParams,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
  analyticsEvent?: AnalyticsEventName;
  analyticsParams?: Record<string, string>;
}) {
  const cls = `${base} ${variants[variant]}${className ? ` ${className}` : ""}`;

  function trackClick() {
    if (isWhatsAppHref(href)) {
      trackMetaContact();
      trackAnalyticsEvent("whatsapp_click", analyticsParams);
    }
    if (analyticsEvent) trackAnalyticsEvent(analyticsEvent, analyticsParams);
  }

  if (external)
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        onClick={trackClick}
      >
        {children}
      </a>
    );
  return (
    <Link href={href} className={cls} onClick={trackClick}>
      {children}
    </Link>
  );
}
