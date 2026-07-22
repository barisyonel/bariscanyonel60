"use client";

import { Reveal } from "@/components/ui/Reveal";
import { KineticTitle } from "@/components/motion/Story";

const others = [
  "Hazır Tema",
  "Düşük SEO",
  "Yavaş",
  "Destek Yok",
] as const;

const ours = [
  "Özel Tasarım",
  "Next.js",
  "SEO",
  "AI SEO",
  "Performans",
  "Destek",
] as const;

export function WhyUsSection() {
  return (
    <section id="neden-biz" className="hairline section-pad" aria-labelledby="neden-biz-heading">
      <div className="container-x">
        <p className="eyebrow">Karşılaştırma</p>
        <KineticTitle
          id="neden-biz-heading"
          text="Neden biz?"
          className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl"
        />
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-muted">
            Hazır tema + düşük SEO değil; ölçülebilir performans, özel tasarım ve uzun vadeli
            destek.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal variant="left">
            <div className="h-full rounded-card border border-line bg-base p-6 md:p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-muted">
                Diğer Ajanslar
              </p>
              <ul className="mt-6 space-y-3">
                {others.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-btn border border-line/70 bg-elevated/40 px-4 py-3 text-[0.95rem] text-muted"
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line text-xs text-muted"
                      aria-hidden
                    >
                      ×
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal variant="right" delay={0.08}>
            <div className="gradient-border h-full rounded-card p-6 md:p-8">
              <div className="relative z-[1]">
                <p className="text-sm font-medium uppercase tracking-wider text-accent">Biz</p>
                <ul className="mt-6 space-y-3">
                  {ours.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-btn border border-accent/25 bg-accent-soft/40 px-4 py-3 text-[0.95rem] text-ink transition-colors hover:border-accent/50"
                    >
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[0.65rem] font-bold text-base"
                        aria-hidden
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
