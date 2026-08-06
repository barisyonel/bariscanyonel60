"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { Testimonial } from "@/lib/testimonials";

const STAR_COUNT = 5;
const DEFAULT_RATING = 5;

type TestimonialsSectionProps = {
  items: readonly Testimonial[];
};

function initialsFrom(company: string): string {
  const parts = company.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "BC";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
}

function StarRating({ value }: { value: number }) {
  const clamped = Math.min(STAR_COUNT, Math.max(0, Math.round(value)));

  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`${clamped} üzerinden ${STAR_COUNT} yıldız`}
    >
      {Array.from({ length: STAR_COUNT }, (_, i) => {
        const filled = i < clamped;
        return (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            aria-hidden
            className={filled ? "text-accent" : "text-line"}
          >
            <path
              fill="currentColor"
              d="M12 3.2 14.9 9l6.4.9-4.6 4.5 1.1 6.4L12 17.8 6.2 20.8l1.1-6.4L2.7 9.9 9.1 9 12 3.2z"
            />
          </svg>
        );
      })}
    </div>
  );
}

function TestimonialCard({ t, delay }: { t: Testimonial; delay: number }) {
  const rating = t.rating ?? DEFAULT_RATING;
  const initials = initialsFrom(t.company);

  return (
    <Reveal delay={delay} variant="scale">
      <article className="group h-full">
        <figure className="glass-card flex h-full flex-col overflow-hidden rounded-card border border-white/10 p-6 shadow-(--shadow-sm) transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-accent/35 hover:shadow-(--shadow-glow) md:p-7">
          <div className="flex items-start justify-between gap-4">
            <StarRating value={rating} />
            <span
              className="display text-3xl leading-none text-accent/25 transition-colors duration-500 group-hover:text-accent/40"
              aria-hidden
            >
              “
            </span>
          </div>

          <blockquote className="mt-5 flex-1 text-[0.98rem] leading-relaxed text-[#c2cedd]">
            {t.quote}
          </blockquote>

          <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/15 text-sm font-semibold tracking-wide text-accent"
              aria-hidden
            >
              {initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-ink">{t.name}</p>
              <p className="truncate text-sm text-muted">
                {t.company}
                <span className="text-muted/70"> · {t.role}</span>
              </p>
              <Link
                href={`/projeler/${t.projectSlug}`}
                className="link-underline mt-1.5 inline-block text-sm text-accent"
              >
                Projeyi gör →
              </Link>
            </div>
          </figcaption>
        </figure>
      </article>
    </Reveal>
  );
}

/**
 * Premium glassmorphism müşteri yorumları.
 */
export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  return (
    <section
      id="yorumlar"
      className="hairline section-pad relative overflow-hidden"
      aria-labelledby="yorumlar-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(33,154,203,0.08),transparent_55%)]"
        aria-hidden
      />
      <div className="container-x relative z-[1]">
        <p className="eyebrow">Müşteri yorumları</p>
        <h2
          id="yorumlar-heading"
          className="mt-3 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-ink md:text-4xl"
        >
          Birlikte çalıştığımız işletmeler ne diyor?
        </h2>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-xl text-muted">
            Gerçek projeler, gerçek işletmeler — süreç şeffaflığı ve teslim kalitesi üzerine
            geri bildirimler.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {items.map((t, i) => (
            <TestimonialCard key={t.projectSlug} t={t} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
