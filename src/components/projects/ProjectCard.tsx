"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { easeOut } from "@/lib/motion";

function ScorePill({ label, value }: { label: string; value: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-base/60 px-2 py-0.5 text-[0.65rem] text-muted backdrop-blur-sm">
      <span className="font-medium text-accent tabular-nums">{value}</span>
      {label}
    </span>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  const reduce = useReducedMotion();
  const seo = p.seoScore ?? 98;
  const perf = p.performance ?? 97;
  const tech = p.tech ?? p.tags.slice(0, 3);

  return (
    <article className="group h-full">
      <motion.div
        whileHover={reduce ? undefined : { y: -6 }}
        transition={{ duration: 0.35, ease: easeOut }}
        className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-elevated transition-[border-color,box-shadow] duration-400 group-hover:border-accent/50 group-hover:shadow-[0_24px_56px_-22px_rgba(33,154,203,0.38)]"
      >
        {/* Mockup stage */}
        <div
          className={`relative overflow-hidden ${p.image ? "aspect-[4/3] bg-[#0a1220]" : "h-48"}`}
          style={
            p.image
              ? undefined
              : { background: `linear-gradient(140deg, ${p.tone}18, transparent 60%)` }
          }
        >
          {p.image ? (
            <>
              {/* Laptop-ish frame */}
              <div className="absolute inset-x-[8%] top-[10%] bottom-[18%] overflow-hidden rounded-t-[6px] border border-line/80 bg-[#0d1829] p-1 shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
                <div className="relative h-full overflow-hidden rounded-[3px]">
                  <Image
                    src={p.image}
                    alt={`${p.name} — laptop mockup`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              {/* Phone overlay */}
              <div className="absolute bottom-[6%] right-[6%] z-10 w-[22%] overflow-hidden rounded-[10px] border border-line bg-[#0d1829] p-0.5 shadow-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:-translate-y-1">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[8px]">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                    aria-hidden
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="absolute inset-x-6 top-6 space-y-2.5">
              <div
                className="h-2.5 w-1/3 rounded-sm transition-all duration-500 group-hover:w-1/2"
                style={{ background: p.tone }}
              />
              <div className="h-2 w-3/4 rounded-sm bg-line" />
              <div className="h-2 w-2/3 rounded-sm bg-line" />
            </div>
          )}

          <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-1.5">
            <ScorePill label="SEO" value={seo} />
            <ScorePill label="Perf" value={perf} />
            <ScorePill label="Mobile" value={100} />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-1.5 flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-accent">
              <Link href={`/projeler/${p.slug}`} className="focus-visible:outline-offset-2">
                {p.name}
              </Link>
            </h3>
            <span className="shrink-0 text-xs text-muted">{p.city}</span>
          </div>
          <p className="text-[0.93rem] text-muted">{p.summary}</p>

          <div className="mt-3 flex flex-wrap gap-2" aria-label="Kullanılan teknolojiler">
            <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
              {p.sector}
            </span>
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted"
              >
                {t}
              </span>
            ))}
            <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 text-xs text-accent">
              Responsive
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 border-t border-line pt-4">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm font-medium text-accent"
              onClick={(e) => e.stopPropagation()}
            >
              Canlı Site
            </a>
            <Link
              href={`/projeler/${p.slug}`}
              className="link-underline text-sm text-muted hover:text-accent"
            >
              Case Study →
            </Link>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
