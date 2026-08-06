"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

type NumericStat = {
  kind: "numeric";
  value: number;
  suffix: string;
  label: string;
};

type BadgeStat = {
  kind: "badge";
  label: string;
  detail: string;
};

const stats: readonly (NumericStat | BadgeStat)[] = [
  { kind: "numeric", value: 25, suffix: "+", label: "Tamamlanan Proje" },
  { kind: "numeric", value: 5, suffix: "+", label: "Yıllık Deneyim" },
  { kind: "numeric", value: 100, suffix: "%", label: "Mobil Uyum" },
  { kind: "badge", label: "SEO Ready", detail: "Arama iskeleti hazır" },
  { kind: "badge", label: "AI Ready", detail: "GEO & AI görünürlük" },
  { kind: "badge", label: "Google Friendly", detail: "Core Web Vitals odaklı" },
];

function TrustCard({
  children,
  delay,
}: {
  children: ReactNode;
  delay: number;
}) {
  return (
    <Reveal delay={delay} variant="scale">
      <li className="group flex h-full flex-col justify-between rounded-card border border-line bg-elevated/40 p-5 backdrop-blur-sm transition-[border-color,box-shadow,background-color] duration-400 hover:border-accent/40 hover:bg-elevated/70 hover:shadow-[var(--shadow-glow)] md:p-6">
        {children}
      </li>
    </Reveal>
  );
}

/**
 * Hero altı güven şeridi — sayaç + yetenek etiketleri.
 * 8px grid spacing; dark premium dil korunur.
 */
export function StatsSection() {
  return (
    <section
      id="basarilar"
      className="hairline relative overflow-hidden py-16 md:py-20"
      aria-labelledby="basarilar-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(33,154,203,0.07),transparent_65%)]"
        aria-hidden
      />
      <div className="container-x relative z-[1]">
        <div className="max-w-2xl">
          <p className="eyebrow">Güven</p>
          <h2
            id="basarilar-heading"
            className="mt-3 text-3xl font-semibold leading-[1.15] tracking-tight text-ink md:text-4xl"
          >
            Kanıtlanmış teslimat, ölçülebilir kalite
          </h2>
          <Reveal delay={0.08}>
            <p className="mt-4 max-w-xl text-muted">
              Her proje mobil uyum, SEO iskeleti ve performans hedefiyle çıkar — vaat değil, teslim
              standardı.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
          {stats.map((s, i) => {
            switch (s.kind) {
              case "numeric":
                return (
                  <TrustCard key={s.label} delay={i * 0.05}>
                    <AnimatedCounter
                      value={s.value}
                      suffix={s.suffix}
                      className="display text-[2rem] font-semibold leading-none tracking-tight text-ink tabular-nums md:text-[2.35rem]"
                    />
                    <span className="mt-4 text-sm leading-snug text-muted">{s.label}</span>
                  </TrustCard>
                );
              case "badge":
                return (
                  <TrustCard key={s.label} delay={i * 0.05}>
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[0.65rem] font-bold text-accent"
                        aria-hidden
                      >
                        ✓
                      </span>
                      <div>
                        <p className="display text-[1.05rem] font-semibold tracking-[0.04em] text-ink">
                          {s.label}
                        </p>
                        <p className="mt-2 text-sm leading-snug text-muted">{s.detail}</p>
                      </div>
                    </div>
                  </TrustCard>
                );
              default: {
                const _exhaustive: never = s;
                return _exhaustive;
              }
            }
          })}
        </ul>
      </div>
    </section>
  );
}
