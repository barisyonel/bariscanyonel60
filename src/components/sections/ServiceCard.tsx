import Link from "next/link";
import type { ServiceIconId } from "@/lib/serviceIcons";

const BENEFIT_LIMIT = 3;

type ServiceCardProps = {
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

export function ServiceCard({
  href,
  title,
  short,
  benefits = [],
  iconId = "default",
  featured = false,
}: ServiceCardProps & { featured?: boolean }) {
  const visibleBenefits = benefits.slice(0, BENEFIT_LIMIT);

  return (
    <article
      className={`motion-card group relative flex h-full flex-col rounded-card border p-7 transition-colors hover:border-accent/40 ${
        featured ? "border-accent/25 bg-accent-mist md:p-9" : "border-line bg-base"
      }`}
    >
      <span
        className="flex size-11 items-center justify-center rounded-xl bg-accent text-[#090b12] shadow-sm"
        aria-hidden
      >
        <ServiceIcon id={iconId} />
      </span>
      <h3 className={`mt-6 font-semibold leading-snug text-ink ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
        <Link href={href} className="after:absolute after:inset-0 after:content-['']">
          {title}
        </Link>
      </h3>

      <p className={`mt-3 leading-relaxed text-muted ${featured ? "max-w-xl text-[1.02rem]" : "text-[0.97rem]"}`}>
        {short}
      </p>

      {visibleBenefits.length > 0 ? (
        <ul
          className={`mt-5 space-y-2 ${featured ? "md:grid md:grid-cols-3 md:gap-4 md:space-y-0" : ""}`}
          aria-label={`${title} avantajları`}
        >
          {visibleBenefits.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[0.93rem] leading-snug text-ink/80">
              <span className="mt-[0.1rem] text-accent" aria-hidden>
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      <span
        className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent"
        aria-hidden
      >
        Hizmeti incele
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </span>
    </article>
  );
}
