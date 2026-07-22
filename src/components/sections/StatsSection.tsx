"use client";

import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { KineticTitle } from "@/components/motion/Story";

const stats = [
  { value: 120, suffix: "+", label: "Tamamlanan Proje" },
  { value: 99, suffix: "+", label: "Lighthouse" },
  { value: 100, suffix: "%", label: "Mobil Uyum" },
  { value: 5, suffix: "+", label: "Yıllık Deneyim" },
  { value: 15, suffix: "+", label: "Sektör" },
] as const;

export function StatsSection() {
  return (
    <section
      id="basarilar"
      className="hairline section-pad relative overflow-hidden"
      aria-labelledby="basarilar-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(33,154,203,0.08),transparent_65%)]"
        aria-hidden
      />
      <div className="container-x relative z-[1]">
        <p className="eyebrow">Rakamlarla</p>
        <KineticTitle
          id="basarilar-heading"
          text="Ölçülebilir sonuçlar, tutarlı kalite"
          className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl"
        />
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-muted">
            Her proje Lighthouse, mobil uyumluluk ve SEO iskeletiyle teslim edilir — tahmin değil,
            ölçüm.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} variant="scale">
              <li className="glass-card group flex h-full flex-col items-start rounded-card border border-line p-5 transition-[border-color,box-shadow] duration-400 hover:border-accent/40 hover:shadow-[0_20px_48px_-24px_rgba(33,154,203,0.35)] md:p-6">
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  className="display text-3xl font-semibold text-ink tabular-nums md:text-4xl"
                />
                <span className="mt-2 text-sm text-muted">{s.label}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
