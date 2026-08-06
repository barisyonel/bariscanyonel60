"use client";

import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

type ComparisonRow = {
  feature: string;
  others: string;
  ours: string;
};

const ROWS: readonly ComparisonRow[] = [
  {
    feature: "Tasarım",
    others: "Hazır tema / şablon",
    ours: "İşletmeye özel tasarım",
  },
  {
    feature: "Altyapı",
    others: "Ağır WordPress / eski stack",
    ours: "Next.js — hızlı ve modern",
  },
  {
    feature: "SEO",
    others: "Temel ayarlar, düşük görünürlük",
    ours: "Teknik + yerel SEO iskeleti",
  },
  {
    feature: "AI / GEO",
    others: "Genelde yok",
    ours: "AI Ready · GEO uyumlu içerik",
  },
  {
    feature: "Performans",
    others: "Yavaş açılış, düşük Lighthouse",
    ours: "Core Web Vitals odaklı teslim",
  },
  {
    feature: "Mobil",
    others: "Kırık veya sonradan uyum",
    ours: "%100 mobil öncelikli",
  },
  {
    feature: "Destek",
    others: "Teslim sonrası sessizlik",
    ours: "Uzun vadeli bakım & iletişim",
  },
  {
    feature: "Teklif",
    others: "Belirsiz paket / sürpriz maliyet",
    ours: "Şeffaf, kalem kalem yazılı teklif",
  },
] as const;

/**
 * Premium karşılaştırma tablosu — Diğer Ajanslar vs BCY Dijital.
 */
export function WhyUsSection() {
  return (
    <section
      id="neden-biz"
      className="hairline section-pad"
      aria-labelledby="neden-biz-heading"
    >
      <div className="container-x">
        <p className="eyebrow">Karşılaştırma</p>
        <h2
          id="neden-biz-heading"
          className="mt-3 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-ink md:text-4xl"
        >
          Neden {site.name}?
        </h2>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-xl text-muted">
            Hazır tema ve belirsiz teslim değil — ölçülebilir performans, özel tasarım ve net
            süreç.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 overflow-hidden rounded-card border border-line bg-elevated/40 shadow-(--shadow-md)">
            <div className="overflow-x-auto">
              <table className="w-full min-w-xl border-collapse text-left">
                <caption className="sr-only">
                  Diğer ajanslar ile {site.name} karşılaştırması
                </caption>
                <thead>
                  <tr className="border-b border-line bg-base/60">
                    <th
                      scope="col"
                      className="px-4 py-4 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted sm:px-6 md:px-8"
                    >
                      Özellik
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-4 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted sm:px-6"
                    >
                      Diğer Ajanslar
                    </th>
                    <th
                      scope="col"
                      className="relative px-4 py-4 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-accent sm:px-6 md:px-8"
                    >
                      <span className="absolute inset-0 bg-accent/6" aria-hidden />
                      <span className="relative">{site.name}</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-line/80 last:border-b-0 transition-colors duration-300 hover:bg-subtle/40 ${
                        i % 2 === 0 ? "bg-transparent" : "bg-base/25"
                      }`}
                    >
                      <th
                        scope="row"
                        className="px-4 py-4 text-[0.95rem] font-semibold text-ink sm:px-6 md:px-8"
                      >
                        {row.feature}
                      </th>
                      <td className="px-4 py-4 sm:px-6">
                        <span className="inline-flex items-start gap-2.5 text-[0.92rem] leading-snug text-muted">
                          <span
                            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line text-xs text-muted"
                            aria-hidden
                          >
                            ×
                          </span>
                          {row.others}
                        </span>
                      </td>
                      <td className="relative px-4 py-4 sm:px-6 md:px-8">
                        <span className="absolute inset-0 bg-accent/4" aria-hidden />
                        <span className="relative inline-flex items-start gap-2.5 text-[0.92rem] leading-snug text-ink">
                          <span
                            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[0.65rem] font-bold text-base"
                            aria-hidden
                          >
                            ✓
                          </span>
                          {row.ours}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
