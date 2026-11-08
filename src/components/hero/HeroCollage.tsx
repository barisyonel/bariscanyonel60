"use client";

import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const hand = Caveat({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const slides = [
  {
    slug: "prime-dizayn",
    name: "Prime Dizayn",
    label: "Prime Dizayn — kurumsal web",
    sector: "Mimari · İstanbul",
    src: "/projects/prime-dizayn.jpg",
    alt: "Prime Dizayn kurumsal web sitesi",
  },
  {
    slug: "dalyan-palmiye-resort",
    name: "Dalyan Palmiye",
    label: "Dalyan Palmiye — konaklama sitesi",
    sector: "Konaklama · Muğla",
    src: "/projects/dalyan-palmiye-resort.jpg",
    alt: "Dalyan Palmiye Resort web sitesi",
  },
  {
    slug: "samlioglu-hukuk",
    name: "Şamlıoğlu Hukuk",
    label: "Şamlıoğlu Hukuk — kurumsal site",
    sector: "Hukuk · Tokat",
    src: "/projects/samlioglu-hukuk.jpg",
    alt: "Şamlıoğlu Hukuk web sitesi",
  },
  {
    slug: "guzubey-asansor",
    name: "Guzubey Asansör",
    label: "Guzubey Asansör — yerel SEO",
    sector: "Asansör · Tokat",
    src: "/projects/guzubey-asansor.jpg",
    alt: "Guzubey Asansör web sitesi",
  },
] as const;

const INTERVAL_MS = 4800;

export function HeroCollage() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = slides[index];

  useEffect(() => {
    if (reduce || paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduce, index]);

  function goTo(next: number) {
    setIndex((next + slides.length) % slides.length);
    setPaused(true);
  }

  function goPrev() {
    goTo(index - 1);
  }

  function goNext() {
    goTo(index + 1);
  }

  return (
    <div className="relative mx-auto w-full max-w-[34rem] overflow-hidden lg:max-w-none">
      <div className="relative aspect-[1/1.02] w-full overflow-hidden">
        <div
          className="pointer-events-none absolute left-[4%] top-[12%] h-[52%] w-[58%] rounded-[45%_55%_60%_40%/50%_40%_60%_50%] bg-electric/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-[8%] right-[4%] h-[42%] w-[50%] rounded-[55%_45%_40%_60%/45%_55%_45%_55%] bg-accent/18"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-[30%] top-[44%] h-[26%] w-[30%] rounded-full bg-violet/20 blur-xl"
          aria-hidden
        />

        <Link
          href={`/projeler/${active.slug}`}
          className="absolute left-[4%] top-[12%] z-20 w-[72%] -rotate-[6deg] overflow-hidden rounded-xl border border-line bg-elevated shadow-[0_28px_60px_-24px_rgba(0,0,0,0.85)] transition-[border-color] duration-500 hover:border-accent/40"
          aria-label={`${active.name} projesini incele`}
        >
          <div className="flex items-center gap-1.5 border-b border-line bg-subtle px-2.5 py-2">
            <span className="size-2 rounded-full bg-[#ff5f57]" aria-hidden />
            <span className="size-2 rounded-full bg-[#febc2e]" aria-hidden />
            <span className="size-2 rounded-full bg-[#28c840]" aria-hidden />
            <span className="ml-2 truncate text-[0.65rem] text-muted">{active.label}</span>
          </div>
          <div className="relative aspect-[16/10]">
            {slides.map((item, itemIndex) => (
              <Image
                key={item.slug}
                src={item.src}
                alt={item.alt}
                fill
                priority={itemIndex === 0}
                sizes="(max-width: 1024px) 70vw, 420px"
                className={`object-cover object-top transition-opacity duration-700 ${
                  itemIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </Link>

        <div className="absolute left-[6%] top-[6%] z-30 max-w-[68%] -rotate-2 rounded-md bg-accent px-3 py-1.5 text-[0.72rem] font-bold text-[#090b12] shadow-md">
          {active.label}
        </div>

        <div className="absolute bottom-[16%] right-[6%] z-30 w-[32%] rotate-[7deg]">
          <div className="overflow-hidden rounded-[1.35rem] border-[3px] border-[#1a1f2b] bg-[#0c0f16] shadow-[0_22px_40px_-18px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
            <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-white/15" aria-hidden />
            <div className="relative m-1.5 aspect-[9/16] overflow-hidden rounded-[0.9rem]">
              <Image
                src={active.src}
                alt=""
                fill
                sizes="140px"
                className="object-cover object-top"
                aria-hidden
              />
            </div>
          </div>
        </div>

        <p
          className={`${hand.className} absolute right-[4%] top-[20%] z-40 max-w-[7.5rem] rotate-[8deg] text-[clamp(1.05rem,3.2vw,1.3rem)] leading-tight text-accent`}
          aria-hidden
        >
          kod da bizim,
          <br />
          ekip de
          <span className="mt-1 block text-electric">↗</span>
        </p>

        <p
          className={`${hand.className} absolute bottom-[10%] left-[5%] z-40 max-w-[9rem] -rotate-[6deg] text-[clamp(1.1rem,3.4vw,1.35rem)] leading-tight text-ink`}
          aria-hidden
        >
          web site
          <br />
          özel
          <span className="ml-1 text-accent">★</span>
        </p>

        <div
          className="absolute bottom-[30%] left-[38%] z-40 w-[6.75rem] -rotate-[4deg] bg-[#e8ff9a] p-2.5 text-[#1a2208] shadow-[4px_6px_0_rgba(0,0,0,0.35)] sm:left-[42%] sm:w-[7.25rem]"
          aria-hidden
        >
          <p className="text-[0.65rem] font-extrabold leading-snug tracking-wide sm:text-[0.68rem]">
            İYİ FİKİR,
            <br />
            SAĞLAM
            <br />
            SİTE
          </p>
        </div>

        <div
          className="absolute left-[56%] top-[56%] z-40 flex size-11 -rotate-12 items-center justify-center rounded-2xl border border-line bg-elevated text-sm font-bold text-electric shadow-lg sm:size-12"
          aria-hidden
        >
          {"</>"}
        </div>

        <div
          className="absolute bottom-[4%] left-[26%] z-20 hidden w-[26%] -rotate-[3deg] overflow-hidden rounded-lg border-2 border-ink/10 bg-elevated shadow-lg sm:block"
          aria-hidden
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={slides[(index + 2) % slides.length].src}
              alt=""
              fill
              sizes="120px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">
          <span className="font-semibold text-ink">{active.name}</span>
          <span className="mx-1.5 text-line">·</span>
          {active.sector}
        </p>

        <div className="flex items-center gap-1.5 rounded-full border border-line bg-elevated/90 p-1">
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-subtle hover:text-accent"
            aria-label="Önceki proje"
            onClick={goPrev}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M10 3.5 5.5 8 10 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-1 px-1" role="tablist" aria-label="Öne çıkan projeler">
            {slides.map((item, itemIndex) => (
              <button
                key={item.slug}
                type="button"
                role="tab"
                aria-selected={itemIndex === index}
                aria-label={item.name}
                className="inline-flex size-9 items-center justify-center rounded-full"
                onClick={() => goTo(itemIndex)}
              >
                <span
                  className={`block rounded-full transition-all ${
                    itemIndex === index ? "h-2 w-5 bg-accent" : "size-2 bg-line hover:bg-muted"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-subtle hover:text-accent"
            aria-label="Sonraki proje"
            onClick={goNext}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            className="ml-0.5 inline-flex size-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-accent"
            aria-label={paused ? "Otomatik geçişi başlat" : "Otomatik geçişi duraklat"}
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden>
                <path d="M2 1.2 8.5 5 2 8.8V1.2Z" />
              </svg>
            ) : (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden>
                <rect x="2" y="1.5" width="2" height="7" rx="0.5" />
                <rect x="6" y="1.5" width="2" height="7" rx="0.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <p className="sr-only">
        Öne çıkan proje: {active.name}, {active.sector}
      </p>
    </div>
  );
}
