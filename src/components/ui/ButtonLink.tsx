"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { isWhatsAppHref, trackAnalyticsEvent, trackMetaContact } from "@/lib/gtag";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-btn px-6 py-2.5 text-[0.95rem] font-medium transition-colors duration-200";

const variants = {
  primary: "bg-ink text-white hover:bg-accent",
  ghost: "border border-line bg-base text-ink hover:border-ink",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
}) {
  const cls = `${base} ${variants[variant]}${className ? ` ${className}` : ""}`;

  if (external)
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        onClick={
          isWhatsAppHref(href)
            ? () => {
                trackMetaContact();
                trackAnalyticsEvent("whatsapp_click");
              }
            : undefined
        }
      >
        {children}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
