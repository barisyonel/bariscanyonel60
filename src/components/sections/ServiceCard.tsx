"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { SpotlightCard } from "@/components/motion/Story";

type ServiceCardProps = {
  href: string;
  title: string;
  short: string;
  icon?: ReactNode;
};

export function ServiceCard({ href, title, short, icon }: ServiceCardProps) {
  return (
    <SpotlightCard className="h-full bg-base transition-colors duration-500 hover:bg-elevated">
      <Link href={href} className="group gradient-border relative block h-full overflow-hidden p-7">
        <div className="relative z-[1] flex h-full flex-col">
          <div className="mb-4 flex items-start justify-between gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-btn border border-line bg-subtle/50 text-accent transition-transform duration-400 group-hover:rotate-6 group-hover:border-accent/50 group-hover:shadow-[0_0_24px_-6px_rgba(33,154,203,0.55)]"
              aria-hidden
            >
              {icon ?? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M4 7h16M4 12h10M4 17h14" strokeLinecap="round" />
                </svg>
              )}
            </span>
            <span
              className="translate-x-0 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
              aria-hidden
            >
              →
            </span>
          </div>
          <h3 className="text-xl font-semibold transition-colors group-hover:text-accent">{title}</h3>
          <p className="mt-2.5 flex-1 text-[0.95rem] text-muted">{short}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
            Detaylı bilgi
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </div>
      </Link>
    </SpotlightCard>
  );
}
