import type { ReactNode } from "react";

export function Marquee({ items, label }: { items: ReactNode[]; label: string }) {
  return (
    <div className="marquee" aria-label={label} role="region">
      <ul className="marquee-track">
        {items.map((item, i) => (
          <li key={i} className="shrink-0">
            {item}
          </li>
        ))}
      </ul>
      <ul className="marquee-track" aria-hidden>
        {items.map((item, i) => (
          <li key={i} className="shrink-0" inert>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
