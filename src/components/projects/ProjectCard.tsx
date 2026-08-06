"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { duration, easeOut } from "@/lib/motion";

const IMAGE_ASPECT = "aspect-[16/10]";
const TECH_LIMIT = 4;

type ProjectCardProps = {
  p: Project;
};

/**
 * Premium referans kartı — büyük görsel, sektör, tech, çift CTA.
 * Dark midnight + accent dilinde Linear/Vercel hissi.
 */
export function ProjectCard({ p }: ProjectCardProps) {
  const reduce = useReducedMotion();
  const tech = (p.tech ?? p.tags).slice(0, TECH_LIMIT);
  const caseHref = `/projeler/${p.slug}`;

  return (
    <article className="group h-full">
      <motion.div
        whileHover={reduce ? undefined : { y: -8 }}
        transition={{ duration: duration.hover, ease: easeOut }}
        className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-elevated transition-[border-color,box-shadow] duration-500 group-hover:border-accent/45 group-hover:shadow-[var(--shadow-glow)]"
      >
        <div
          className={`relative overflow-hidden ${IMAGE_ASPECT}`}
          style={
            p.image
              ? { backgroundColor: "#0a1220" }
              : { background: `linear-gradient(145deg, ${p.tone}22, #0a1528 55%)` }
          }
        >
          {p.image ? (
            <Image
              src={p.image}
              alt={`${p.name} — proje görseli`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col justify-end p-6" aria-hidden>
              <div className="h-2 w-1/3 rounded-sm" style={{ background: p.tone }} />
              <div className="mt-3 h-1.5 w-3/4 rounded-sm bg-line" />
              <div className="mt-2 h-1.5 w-1/2 rounded-sm bg-line" />
            </div>
          )}

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/90 via-base/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
            aria-hidden
          />

          <div className="absolute left-3 top-3 z-[1] flex flex-wrap gap-2 sm:left-4 sm:top-4">
            <span className="rounded-btn border border-white/10 bg-base/70 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-ink backdrop-blur-md">
              {p.sector}
            </span>
          </div>

          <span className="absolute right-3 top-3 z-[1] rounded-btn border border-white/10 bg-base/55 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-muted backdrop-blur-md sm:right-4 sm:top-4">
            {p.city}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
          <div>
            <h3 className="display text-xl font-semibold leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
              <Link href={caseHref} className="focus-visible:outline-offset-2">
                {p.name}
              </Link>
            </h3>
            <p className="mt-2 line-clamp-2 text-[0.95rem] leading-relaxed text-muted">
              {p.summary}
            </p>
          </div>

          <ul
            className="flex flex-wrap gap-2"
            aria-label={`${p.name} teknolojileri`}
          >
            {tech.map((t) => (
              <li
                key={t}
                className="rounded-btn border border-line bg-base/40 px-2.5 py-1 text-xs text-muted transition-colors duration-300 group-hover:border-accent/25 group-hover:text-ink/80"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-2 border-t border-line pt-4 sm:flex-row sm:items-center">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-btn bg-accent px-4 py-2.5 text-sm font-medium text-base transition-[background-color,transform] duration-300 hover:bg-accent-deep"
            >
              Canlı Site
              <span aria-hidden className="text-xs opacity-80">
                ↗
              </span>
            </a>
            <Link
              href={caseHref}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-btn border border-line px-4 py-2.5 text-sm font-medium text-ink transition-[border-color,color,background-color] duration-300 hover:border-accent/50 hover:bg-accent-soft/30 hover:text-accent"
            >
              Case Study
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
