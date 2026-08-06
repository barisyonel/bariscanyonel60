"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

const HeroGlobe = dynamic(
  () => import("@/components/hero/HeroGlobe").then((m) => m.HeroGlobe),
  { ssr: false, loading: () => null }
);

const TRUST_BADGES = [
  { label: "25+ tamamlanan proje" },
  { label: "5+ yıllık deneyim" },
  { label: "SEO Ready" },
  { label: "AI Ready" },
  { label: "Google Friendly" },
] as const;

function GridCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(max-width: 1023px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    const start = () => {
      if (cancelled || !canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let raf = 0;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      let w = 0;
      let h = 0;
      const mouse = { x: -9999, y: -9999 };
      const GAP = 48;

      function resize() {
        if (!canvas) return;
        w = canvas.offsetWidth;
        h = canvas.offsetHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      function draw() {
        ctx!.clearRect(0, 0, w, h);
        for (let x = GAP / 2; x < w; x += GAP) {
          for (let y = GAP / 2; y < h; y += GAP) {
            const d = Math.hypot(mouse.x - x, mouse.y - y);
            const glow = Math.max(0, 1 - d / 160);
            const a = 0.04 + glow * 0.45;
            ctx!.beginPath();
            ctx!.arc(x, y, 0.9 + glow, 0, Math.PI * 2);
            ctx!.fillStyle =
              glow > 0.05 ? `rgba(33,154,203,${a})` : `rgba(139,156,179,${a * 0.35})`;
            ctx!.fill();
          }
        }
        raf = requestAnimationFrame(draw);
      }

      function onMove(e: PointerEvent) {
        const rect = canvas!.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      }

      function onLeave() {
        mouse.x = -9999;
        mouse.y = -9999;
      }

      resize();
      draw();
      window.addEventListener("resize", resize);
      canvas.addEventListener("pointermove", onMove);
      canvas.addEventListener("pointerleave", onLeave);

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", resize);
        canvas.removeEventListener("pointermove", onMove);
        canvas.removeEventListener("pointerleave", onLeave);
      };
    };

    const ric = window.requestIdleCallback?.(start, { timeout: 2000 });
    const t = ric == null ? window.setTimeout(start, 600) : undefined;

    return () => {
      cancelled = true;
      if (ric != null) window.cancelIdleCallback?.(ric);
      if (t != null) window.clearTimeout(t);
      cleanup?.();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 hidden h-full w-full opacity-25 lg:block"
    />
  );
}

function HeroCta({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const isPrimary = variant === "primary";
  const cls = isPrimary
    ? "bg-accent text-base shadow-[var(--shadow-glow)] hover:bg-accent-deep"
    : "border border-white/15 text-ink hover:border-accent/50 hover:text-accent";

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-btn px-8 py-3.5 font-medium display text-[0.95rem] tracking-[0.04em] transition-[color,background-color,border-color,transform] duration-300 ${cls}`}
    >
      {children}
      {isPrimary ? (
        <span
          aria-hidden
          className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      ) : null}
    </Link>
  );
}

/**
 * CRO-first hero: ne yapıyoruz / ne kazandırıyoruz / neden güven / şimdi ne.
 * Görsel dil: metin sol + dünya sağ — dark premium korundu.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const [loadFx, setLoadFx] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const start = () => setLoadFx(true);
    const ric = window.requestIdleCallback?.(start, { timeout: 1800 });
    const t = ric == null ? window.setTimeout(start, 500) : undefined;
    return () => {
      if (ric != null) window.cancelIdleCallback?.(ric);
      if (t != null) window.clearTimeout(t);
    };
  }, [reduce]);

  return (
    <section className="relative overflow-hidden" id="anasayfa" aria-labelledby="home-h1">
      {loadFx ? <HeroGlobe /> : null}
      {loadFx ? <GridCanvas /> : null}

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(33,154,203,0.12),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-base via-base/80 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-base via-base/85 to-transparent lg:w-[48%]" />
      </div>

      <div className="container-x relative z-[2] flex min-h-[calc(100svh-4.5rem)] flex-col justify-center py-20 sm:py-24 lg:max-w-[52%] lg:py-28">
        <div className={reduce ? "" : "hero-enter"}>
          <div
            className="hero-enter-item mb-8 flex items-center gap-4"
            style={{ ["--i" as string]: 0 }}
          >
            <span className="h-px w-10 shrink-0 bg-accent" aria-hidden />
            <p className="eyebrow !mb-0 tracking-[0.28em]">
              {site.name} · {site.city}
            </p>
          </div>

          <h1
            id="home-h1"
            className="max-w-[14ch] text-[clamp(2.5rem,6.2vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-ink sm:max-w-[16ch]"
          >
            <span className="block">Tokat Web Tasarım</span>
            <span className="mt-2 block text-accent">ile daha fazla</span>
            <span className="mt-1 block">müşteri kazanın</span>
          </h1>

          <p
            className="mt-8 max-w-[32rem] text-[1.05rem] leading-[1.7] text-muted sm:text-[1.125rem] sm:leading-[1.75] hero-enter-item"
            style={{ ["--i" as string]: 1 }}
          >
            Kurumsal web sitesi, SEO ve Meta reklam ile işletmenizi Google’da görünür, güvenilir
            ve ölçülebilir hale getiriyoruz — şeffaf teklif, net teslim planı.
          </p>

          <div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 hero-enter-item"
            style={{ ["--i" as string]: 2 }}
          >
            <HeroCta href="/iletisim">Ücretsiz Keşif Görüşmesi</HeroCta>
            <HeroCta href="/projeler" variant="ghost">
              Projeleri İncele
            </HeroCta>
          </div>

          <ul
            className="mt-12 flex flex-wrap gap-2 sm:gap-3 hero-enter-item"
            style={{ ["--i" as string]: 3 }}
            aria-label="Güven göstergeleri"
          >
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-btn border border-line/80 bg-elevated/50 px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted backdrop-blur-sm sm:px-3.5"
              >
                <span
                  className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[0.55rem] font-bold text-accent"
                  aria-hidden
                >
                  ✓
                </span>
                {badge.label}
              </li>
            ))}
          </ul>

          <p
            className="mt-8 text-[0.72rem] uppercase tracking-[0.2em] text-muted/65 hero-enter-item"
            style={{ ["--i" as string]: 4 }}
          >
            {site.regions.join(" · ")} · Türkiye geneli
          </p>
        </div>
      </div>
    </section>
  );
}
