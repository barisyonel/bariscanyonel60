import Link from "next/link";
import type { Testimonial } from "@/lib/testimonials";

const STAR_COUNT = 5;
const DEFAULT_RATING = 5;

function StarRating({ value }: { value: number }) {
  const clamped = Math.min(STAR_COUNT, Math.max(0, Math.round(value)));

  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${clamped} üzerinden ${STAR_COUNT} yıldız`}
    >
      {Array.from({ length: STAR_COUNT }, (_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          aria-hidden
          className={i < clamped ? "text-[#f5a623]" : "text-line"}
        >
          <path
            fill="currentColor"
            d="M12 3.2 14.9 9l6.4.9-4.6 4.5 1.1 6.4L12 17.8 6.2 20.8l1.1-6.4L2.7 9.9 9.1 9 12 3.2z"
          />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-card bg-elevated p-6 md:p-7">
      <StarRating value={t.rating ?? DEFAULT_RATING} />
      <blockquote className="mt-4 flex-1 text-[1rem] leading-relaxed text-ink/85">{t.quote}</blockquote>
      <figcaption className="mt-6 text-sm">
        <p className="font-semibold text-ink">{t.name}</p>
        <p className="text-muted">
          {t.role}, {t.company}
        </p>
        <Link href={`/projeler/${t.projectSlug}`} className="link-underline mt-2 inline-block text-accent">
          Projeyi gör →
        </Link>
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection({ items }: { items: readonly Testimonial[] }) {
  return (
    <section id="yorumlar" className="hairline section-pad" aria-labelledby="yorumlar-heading">
      <div className="container-x">
        <h2 id="yorumlar-heading" className="max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
          Birlikte çalıştığımız işletmeler ne diyor?
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {items.map((t) => (
            <TestimonialCard key={t.projectSlug} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
