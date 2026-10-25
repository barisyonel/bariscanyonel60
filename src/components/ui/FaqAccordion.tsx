"use client";

type FaqItem = {
  q: string;
  a: string;
};

type FaqAccordionProps = {
  items: readonly FaqItem[];
  /** İlk madde açık mı (ör. /sss) */
  defaultOpenFirst?: boolean;
  className?: string;
};

/**
 * Modern SSS accordion — chevron, hover, open state.
 * Native details/summary: erişilebilir + JS’siz açılır.
 */
export function FaqAccordion({
  items,
  defaultOpenFirst = false,
  className = "",
}: FaqAccordionProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((f, i) => (
        <details
          key={f.q}
          className="group rounded-card border border-line bg-elevated/50 transition-[border-color,background-color,box-shadow] duration-300 open:border-accent/35 open:bg-elevated open:shadow-(--shadow-sm) hover:border-accent/25"
          open={defaultOpenFirst && i === 0 ? true : undefined}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 marker:content-none md:px-6 md:py-5 [&::-webkit-details-marker]:hidden">
            <span className="text-[0.98rem] font-medium leading-snug text-ink md:text-lg">
              {f.q}
            </span>
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-btn border border-line text-accent transition-transform duration-300 group-open:rotate-45 group-open:border-accent/40 group-open:bg-accent/10"
              aria-hidden
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1v10M1 6h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </summary>
          <div className="border-t border-line/80 px-5 pb-5 pt-3 md:px-6 md:pb-6">
            <p className="text-[0.95rem] leading-relaxed text-muted">{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
