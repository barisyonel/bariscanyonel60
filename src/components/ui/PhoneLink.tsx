"use client";

import type { ReactNode } from "react";
import { trackAnalyticsEvent, trackMetaContact } from "@/lib/gtag";
import { site } from "@/lib/site";

export function PhoneLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={`tel:+${site.phoneRaw}`}
      className={className}
      onClick={() => {
        trackMetaContact();
        trackAnalyticsEvent("phone_click");
      }}
    >
      {children}
    </a>
  );
}
