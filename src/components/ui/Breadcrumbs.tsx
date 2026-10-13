import Link from "next/link";
import { Fragment } from "react";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";

type Crumb = { name: string; path: string };

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  const last = items.length - 1;
  return (
    <>
      <JsonLd data={breadcrumb(items)} />
      <nav aria-label="Sayfa yolu" className={className}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          {items.map((it, i) => (
            <Fragment key={it.path}>
              <li className={i === last ? "max-w-[22ch] truncate text-ink sm:max-w-none" : undefined}>
                {i === last ? (
                  <span aria-current="page">{it.name}</span>
                ) : (
                  <Link href={it.path} className="transition-colors hover:text-ink">
                    {it.name}
                  </Link>
                )}
              </li>
              {i < last ? (
                <li aria-hidden>›</li>
              ) : null}
            </Fragment>
          ))}
        </ol>
      </nav>
    </>
  );
}
