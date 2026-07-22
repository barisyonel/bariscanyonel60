"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { easeOut } from "@/lib/motion";

/** İmlece tepki veren atölye nokta grid'i */
function GridCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const mouse = { x: -9999, y: -9999 };
    const GAP = 34;

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
          const a = 0.1 + glow * 0.75;
          const r = 1 + glow * 1.8;
          ctx!.beginPath();
          ctx!.arc(x, y, r, 0, Math.PI * 2);
          ctx!.fillStyle =
            glow > 0.03 ? `rgba(33,154,203,${a})` : `rgba(139,156,179,${a * 0.5})`;
          ctx!.fill();
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    }

    function onMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      if (reduce) draw();
    }

    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
      if (reduce) draw();
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full" />;
}

const badges = [
  "SEO Ready",
  "AI Ready",
  "Mobil Uyumlu",
  "Ultra Hızlı",
  "Next.js",
  "Google Friendly",
] as const;

const floatCards = [
  { label: "SEO", x: "0%", y: "6%", delay: 0 },
  { label: "Google", x: "78%", y: "10%", delay: 0.12 },
  { label: "ChatGPT", x: "82%", y: "48%", delay: 0.28 },
  { label: "Next.js", x: "-4%", y: "52%", delay: 0.18 },
  { label: "React", x: "6%", y: "84%", delay: 0.32 },
  { label: "Performance", x: "58%", y: "88%", delay: 0.08 },
] as const;

function BrowserChrome({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="relative overflow-hidden rounded-[14px] border border-line/90 bg-[#07111f] text-[#eef3f9] shadow-[0_40px_80px_-32px_rgba(0,0,0,0.85),0_0_0_1px_rgba(33,154,203,0.08)]">
      {/* Window bar */}
      <div className="flex items-center gap-3 border-b border-line/70 bg-[#0a1628] px-3.5 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#2a4568]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2a4568]" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-md border border-line/60 bg-base/80 px-2.5 py-1">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80 shadow-[0_0_6px_rgba(33,154,203,0.7)]" />
          <span className="truncate font-body text-[0.65rem] tracking-wide text-[#c2cedd]">
            bariscanyonel.com
          </span>
        </div>
      </div>

      {/* App shell */}
      <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[88px_1fr]">
        {/* Sidebar */}
        <aside className="border-r border-line/60 bg-[#08131f] p-2.5 sm:p-3">
          <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-md bg-accent/15 text-[0.65rem] font-semibold text-accent sm:h-8 sm:w-8 sm:text-xs">
            BCY
          </div>
          <div className="space-y-2">
            {[1, 0.55, 0.4, 0.35].map((o, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full bg-line"
                style={{ opacity: o, width: i === 0 ? "100%" : `${70 - i * 8}%` }}
              />
            ))}
          </div>
          <div className="mt-5 space-y-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-6 rounded-md border ${
                  i === 0 ? "border-accent/35 bg-accent-soft" : "border-transparent bg-subtle/40"
                }`}
              />
            ))}
          </div>
        </aside>

        {/* Main */}
        <div className="relative min-h-[220px] p-3 sm:min-h-[260px] sm:p-4">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(33,154,203,0.12),transparent_55%)]" />

          <div className="relative flex items-start justify-between gap-3">
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.16em] text-accent sm:text-[0.65rem]">
                Dashboard
              </p>
              <p className="mt-1 text-sm font-semibold text-white sm:text-[1rem]">Site Performansı</p>
            </div>
            <span className="rounded-full border border-accent/30 bg-accent-soft px-2 py-0.5 text-[0.6rem] text-accent sm:text-[0.65rem]">
              Canlı
            </span>
          </div>

          {/* Metric row */}
          <div className="relative mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-2.5">
            {[
              { k: "Yönetici Paneli", v: "Aktif", accent: true },
              { k: "SEO", v: "100", accent: false },
              { k: "Mobil", v: "100", accent: false },
            ].map((m) => (
              <div
                key={m.k}
                className="rounded-lg border border-line/70 bg-elevated/80 px-2 py-2 sm:px-2.5 sm:py-2.5"
              >
                <p className="truncate text-[0.55rem] text-[#a8b8cc] sm:text-[0.6rem]">{m.k}</p>
                <p
                  className={`mt-0.5 display font-semibold ${
                    m.accent
                      ? "text-xs text-accent sm:text-sm"
                      : "text-sm text-white sm:text-[1rem]"
                  }`}
                >
                  {m.v}
                </p>
              </div>
            ))}
          </div>

          {/* Chart + list */}
          <div className="relative mt-3 grid gap-2 sm:mt-4 sm:grid-cols-[1.2fr_0.8fr] sm:gap-2.5">
            <div className="rounded-lg border border-line/70 bg-elevated/60 p-2.5 sm:p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[0.6rem] text-[#c2cedd]">Organik trafik</span>
                <span className="text-[0.6rem] font-medium text-accent">+38%</span>
              </div>
              <svg viewBox="0 0 160 48" className="h-12 w-full sm:h-14" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="hero-chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#219acb" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#219acb" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 40 C20 36 28 28 42 26 C58 24 66 32 80 22 C96 10 108 14 124 12 C140 10 148 18 160 8 L160 48 L0 48 Z"
                  fill="url(#hero-chart-fill)"
                />
                <path
                  d="M0 40 C20 36 28 28 42 26 C58 24 66 32 80 22 C96 10 108 14 124 12 C140 10 148 18 160 8"
                  fill="none"
                  stroke="#219acb"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                {!reduce && (
                  <motion.circle
                    r="2.5"
                    fill="#219acb"
                    initial={{ cx: 0, cy: 40 }}
                    animate={{ cx: [0, 42, 80, 124, 160], cy: [40, 26, 22, 12, 8] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </svg>
            </div>

            <div className="hidden space-y-1.5 rounded-lg border border-line/70 bg-elevated/60 p-2.5 sm:block sm:p-3">
              <p className="mb-1.5 text-[0.6rem] text-[#a8b8cc]">Stack</p>
              {["Next.js 15", "React 19", "MySQL", "Vercel"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  <span className="text-[0.65rem] text-white">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA strip */}
          <div className="relative mt-3 flex items-center justify-between gap-2 rounded-lg border border-accent/25 bg-accent-soft/40 px-2.5 py-2 sm:mt-4 sm:px-3">
            <div>
              <p className="text-[0.65rem] font-medium text-white sm:text-xs">GEO görünürlük</p>
              <p className="text-[0.55rem] text-[#c2cedd] sm:text-[0.6rem]">
                ChatGPT · Gemini · Perplexity
              </p>
            </div>
            <span className="shrink-0 rounded-md bg-accent px-2 py-1 text-[0.6rem] font-medium text-[#050c18] sm:text-[0.65rem]">
              Aktif
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhonePreview() {
  return (
    <div className="w-[4.75rem] overflow-hidden rounded-[1.15rem] border border-line bg-[#07111f] p-1 text-[#eef3f9] shadow-[0_24px_48px_-20px_rgba(0,0,0,0.8)] sm:w-[5.75rem] sm:rounded-[1.35rem] sm:p-1.5">
      <div className="mx-auto mb-1 h-1 w-7 rounded-full bg-[#1a2d48] sm:mb-1.5 sm:h-1.5 sm:w-9" />
      <div className="relative aspect-[9/17] overflow-hidden rounded-[0.85rem] bg-[#0a1628]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(33,154,203,0.2),transparent_50%)]" />
        <div className="relative flex h-full flex-col p-2 sm:p-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[0.45rem] font-semibold text-accent sm:text-[0.5rem]">BCY</span>
            <span className="h-1 w-4 rounded-full bg-line" />
          </div>
          <p className="mt-2 text-[0.5rem] font-semibold leading-tight text-white sm:mt-2.5 sm:text-[0.55rem]">
            Kurumsal
            <br />
            Web Site
          </p>
          <div className="mt-2 space-y-1">
            <div className="h-1 w-full rounded-full bg-line/80" />
            <div className="h-1 w-4/5 rounded-full bg-line/50" />
          </div>
          <div className="mt-auto space-y-1.5">
            <div className="rounded-md border border-line/60 bg-elevated/80 p-1.5">
              <div className="flex justify-between text-[0.4rem] text-[#c2cedd] sm:text-[0.45rem]">
                <span>SEO</span>
                <span className="font-semibold text-accent">100</span>
              </div>
            </div>
            <div className="rounded-md bg-accent py-1.5 text-center text-[0.45rem] font-medium text-[#050c18] sm:text-[0.5rem]">
              Teklif Al
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-1 h-0.5 w-5 rounded-full bg-[#1a2d48] sm:mt-1.5 sm:h-1 sm:w-7" />
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden" id="anasayfa" aria-labelledby="home-h1">
      <GridCanvas />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-1/4 top-0 h-[60%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(33,154,203,0.1),transparent_65%)] blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[50%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(26,122,158,0.08),transparent_60%)] blur-3xl" />
      </div>

      <div className="container-x relative grid min-h-[calc(100svh-4rem)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-20">
        <motion.div
          className="pointer-events-none"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <p className="eyebrow mb-6">Tokat · Çanakkale · İzmir — Butik dijital atölye</p>

          <h1
            id="home-h1"
            className="max-w-[14ch] text-[clamp(2.35rem,5.6vw,4.15rem)] font-semibold leading-[1.05] tracking-tight"
          >
            {(
              [
                { t: "Tokat'ın", accent: false },
                { t: "Modern", accent: false },
                { t: "Web", accent: true },
                { t: "Tasarım", accent: true },
                { t: "ve", accent: false },
                { t: "Yazılım", accent: false },
                { t: "Stüdyosu", accent: false },
              ] as const
            ).map((w, i) => (
              <span key={`${w.t}-${i}`} className="mr-[0.28em] inline-block overflow-hidden align-bottom">
                <motion.span
                  className={`inline-block ${w.accent ? "text-accent" : ""}`}
                  initial={reduce ? false : { y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.12 + i * 0.045, ease: easeOut }}
                >
                  {w.t}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-[1.15rem]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35, ease: easeOut }}
          >
            Kurumsal web siteleri, SEO, GEO (AI SEO), performans optimizasyonu ve modern yazılım
            çözümleri ile işletmenizi dijitalde büyütüyoruz.
          </motion.p>

          <motion.ul
            className="mt-8 flex flex-wrap gap-2"
            aria-label="Öne çıkan özellikler"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: easeOut }}
          >
            {badges.map((b) => (
              <li
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated/70 px-3 py-1.5 text-xs text-[#c2cedd] backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-ink"
              >
                <span className="text-accent" aria-hidden>
                  ✓
                </span>
                {b}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="pointer-events-auto mt-10 flex flex-wrap gap-4"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: easeOut }}
          >
            <MagneticButton href="/iletisim">Ücretsiz Teklif Al</MagneticButton>
            <MagneticButton href="/projeler" variant="ghost">
              Projeleri İncele
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right — premium product preview */}
        <motion.div
          className="pointer-events-none relative mx-auto w-full max-w-lg lg:max-w-none"
          aria-hidden
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.18, ease: easeOut }}
        >
          <div className="relative">
            {floatCards.map((c) => (
              <motion.span
                key={c.label}
                className="absolute z-20 hidden rounded-full border border-line/70 bg-elevated/95 px-2.5 py-1 text-[0.68rem] font-medium tracking-wide text-ink shadow-[0_10px_28px_-14px_rgba(33,154,203,0.5)] backdrop-blur-md sm:inline-flex"
                style={{ left: c.x, top: c.y }}
                animate={reduce ? undefined : { y: [0, -5, 0] }}
                transition={{
                  duration: 5 + c.delay * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: c.delay,
                }}
              >
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(33,154,203,0.9)]" />
                {c.label}
              </motion.span>
            ))}

            <motion.div
              className="relative z-[1] pr-6 sm:pr-10"
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <BrowserChrome reduce={reduce} />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 right-0 z-10 sm:bottom-2 sm:right-1"
              animate={reduce ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <PhonePreview />
            </motion.div>

            <div className="absolute -bottom-4 left-1/2 h-20 w-[70%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(33,154,203,0.2),transparent_70%)] blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
