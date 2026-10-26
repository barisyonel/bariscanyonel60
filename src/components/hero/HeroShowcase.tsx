"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const slides = [
  {
    slug: "prime-dizayn",
    name: "Prime Dizayn",
    sector: "Mimari",
    src: "/projects/prime-dizayn.jpg",
    alt: "Prime Dizayn kurumsal web sitesi",
  },
  {
    slug: "dalyan-palmiye-resort",
    name: "Dalyan Palmiye Resort",
    sector: "Butik otel",
    src: "/projects/dalyan-palmiye-resort.jpg",
    alt: "Dalyan Palmiye Resort web sitesi",
  },
  {
    slug: "samlioglu-hukuk",
    name: "Şamlıoğlu Hukuk",
    sector: "Hukuk",
    src: "/projects/samlioglu-hukuk.jpg",
    alt: "Şamlıoğlu Hukuk web sitesi",
  },
  {
    slug: "aevum-troia",
    name: "Aevum Troia",
    sector: "Gayrimenkul",
    src: "/projects/aevum-troia.jpg",
    alt: "Aevum Troia Real Estate web sitesi",
  },
  {
    slug: "guzubey-asansor",
    name: "Guzubey Asansör",
    sector: "Asansör",
    src: "/projects/guzubey-asansor.jpg",
    alt: "Guzubey Asansör web sitesi",
  },
] as const;

const INTERVAL_MS = 4500;

export function HeroShowcase() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  useEffect(() => {
    if (reduce || paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduce]);

  return (
    <div
      className="mx-auto w-full max-w-[540px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-elevated shadow-(--shadow-lg) ring-1 ring-black/5">
        {slides.map((item, itemIndex) => {
          const active = itemIndex === index;
          return (
            <Image
              key={item.slug}
              src={item.src}
              alt={item.alt}
              fill
              priority={itemIndex === 0}
              sizes="(max-width: 1024px) 90vw, 520px"
              className={`object-cover object-top transition-opacity duration-700 ${
                active ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!active}
            />
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <Link href={`/projeler/${slide.slug}`} className="min-w-0">
          <span className="block truncate text-sm font-semibold text-ink">{slide.name}</span>
          <span className="block text-xs text-muted">{slide.sector}</span>
        </Link>
        <div className="flex shrink-0 items-center gap-2">
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Proje görselleri">
            {slides.map((item, itemIndex) => {
              const active = itemIndex === index;
              return (
                <button
                  key={item.slug}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={item.name}
                  className={`h-2 rounded-full transition-[width,background-color] duration-300 ${
                    active ? "w-6 bg-accent" : "w-2 bg-line hover:bg-accent/40"
                  }`}
                  onClick={() => setIndex(itemIndex)}
                />
              );
            })}
          </div>
          {reduce ? null : (
            <button
              type="button"
              className="rounded-full px-2 py-1 text-xs font-semibold text-muted hover:text-accent"
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? "Oynat" : "Durdur"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
