import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const TECH_LIMIT = 4;

export function ProjectCard({ p }: { p: Project }) {
  const tech = (p.tech ?? p.tags).slice(0, TECH_LIMIT);
  const caseHref = `/projeler/${p.slug}`;
  const host = new URL(p.url).hostname.replace(/^www\./, "");

  return (
    <article className="group flex h-full flex-col">
      <Link
        href={caseHref}
        className="relative block aspect-[16/10] overflow-hidden rounded-card border border-line bg-elevated"
        tabIndex={-1}
        aria-hidden
      >
        {p.image ? (
          <Image
            src={p.image}
            alt={`${p.name} web sitesi tasarımı`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="motion-media object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="h-2 w-1/3 rounded-sm" style={{ background: p.tone }} />
            <div className="mt-3 h-1.5 w-3/4 rounded-sm bg-line" />
            <div className="mt-2 h-1.5 w-1/2 rounded-sm bg-line" />
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col pt-5">
        <p className="text-sm text-muted">
          {p.sector} · {p.city}
        </p>
        <h3 className="mt-1.5 text-xl font-semibold leading-snug text-ink">
          <Link href={caseHref} className="hover:text-accent">
            {p.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-[0.95rem] leading-relaxed text-muted">{p.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${p.name} teknolojileri`}>
          {tech.map((t) => (
            <li key={t} className="rounded-btn bg-elevated px-2.5 py-1 text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-5 pt-5 text-sm font-medium">
          <Link href={caseHref} className="link-underline text-ink">
            Vaka çalışması →
          </Link>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-muted hover:text-ink"
          >
            {host} ↗
          </a>
        </div>
      </div>
    </article>
  );
}
