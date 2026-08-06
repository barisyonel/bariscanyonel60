"use client";

import Link from "next/link";
import type { ServiceIconId } from "@/lib/serviceIcons";

const BENEFIT_LIMIT = 3;

export type ServiceCardProps = {
  href: string;
  title: string;
  short: string;
  benefits?: readonly string[];
  iconId?: ServiceIconId;
};

function ServiceIcon({ id }: { id: ServiceIconId }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "web-tasarim":
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18M8 18h8" />
        </svg>
      );
    case "e-ticaret":
      return (
        <svg {...common} aria-hidden>
          <path d="M6 7h15l-1.5 9h-12z" />
          <path d="M6 7 5 3H2" />
          <circle cx="9" cy="20" r="1" />
          <circle cx="17" cy="20" r="1" />
        </svg>
      );
    case "seo":
      return (
        <svg {...common} aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case "geo":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 8a8 8 0 0 1 4 6.9" />
        </svg>
      );
    case "meta-reklam":
      return (
        <svg {...common} aria-hidden>
          <path d="M4 19V5M4 19h16" />
          <path d="M8 15v-4M12 15V8M16 15v-6" />
        </svg>
      );
    case "mobil-uyumluluk":
      return (
        <svg {...common} aria-hidden>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case "default":
      return (
        <svg {...common} aria-hidden>
          <path d="M4 7h16M4 12h10M4 17h14" />
        </svg>
      );
    default: {
      const _exhaustive: never = id;
      return _exhaustive;
    }
  }
}

/**
 * Premium hizmet kartı — icon, başlık, açıklama, avantajlar, CTA.
 */
export function ServiceCard({
  href,
  title,
  short,
  benefits = [],
  iconId = "default",
}: ServiceCardProps) {
  const visibleBenefits = benefits.slice(0, BENEFIT_LIMIT);

  return (
    <article className="group h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-elevated/50 p-6 transition-[border-color,box-shadow,background-color,transform] duration-500 hover:-translate-y-1 hover:border-accent/45 hover:bg-elevated hover:shadow-[var(--shadow-glow)] md:p-7">
        <div className="flex items-start justify-between gap-4">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-btn border border-line bg-base/60 text-accent transition-[border-color,box-shadow,transform] duration-500 group-hover:rotate-3 group-hover:border-accent/50 group-hover:shadow-[0_0_28px_-8px_rgba(33,154,203,0.55)]"
            aria-hidden
          >
            <ServiceIcon id={iconId} />
          </span>
        </div>

        <h3 className="mt-5 display text-xl font-semibold leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
          <Link href={href} className="focus-visible:outline-offset-2">
            {title}
          </Link>
        </h3>

        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{short}</p>

        {visibleBenefits.length > 0 ? (
          <ul className="mt-5 space-y-2.5" aria-label={`${title} avantajları`}>
            {visibleBenefits.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[0.88rem] leading-snug text-muted"
              >
                <span
                  className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[0.55rem] font-bold text-accent"
                  aria-hidden
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto pt-6">
          <Link
            href={href}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-btn border border-line px-4 py-2.5 text-sm font-medium text-ink transition-[border-color,color,background-color] duration-300 hover:border-accent/50 hover:bg-accent-soft/40 hover:text-accent group-hover:border-accent/40"
          >
            Hizmeti İncele
            <span
              aria-hidden
              className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
