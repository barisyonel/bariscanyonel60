"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const steps = [
  {
    id: "surec-tanisma",
    t: "Keşif",
    tag: "Ücretsiz görüşme",
    points: [
      "Ne sattığınızı ve müşterinizin sizi nerede aradığını netleştiririz",
      "Sitenin hangi işi üstleneceğini birlikte yazarız",
      "Kapsam dışı kalan istekleri baştan ayırırız",
    ],
  },
  {
    id: "surec-strateji",
    t: "Strateji",
    tag: "Yazılı teklif",
    points: [
      "Sayfa listesi, teslim süresi ve ücret kalem kalem gelir",
      "Onaylamadığınız bir iş başlamaz",
      "Revizyon hakkı teklifte açıkça yazar",
    ],
  },
  {
    id: "surec-tasarim",
    t: "Tasarım",
    tag: "Görsel yön",
    points: [
      "Ana sayfa yönünü birlikte seçeriz",
      "Onaydan sonra iç sayfalar aynı dilde ilerler",
      "Hazır tema üzerine logo konmaz",
    ],
  },
  {
    id: "surec-gelistirme",
    t: "Geliştirme",
    tag: "Canlı önizleme",
    points: [
      "Sayfalar yayına yakın bir adreste açılır",
      "Metin, form ve mobil düzeni birlikte kontrol ederiz",
      "Eksik veya yanlış kalan noktaları bu aşamada düzeltiriz",
    ],
  },
  {
    id: "surec-yayin",
    t: "Yayın",
    tag: "Teslim & sahiplik",
    points: [
      "Başlık, açıklama ve schema ile site yayına alınır",
      "Alan adı ve kod sizin üzerinize geçer",
      "Yayın sonrası destek yazılı kapsamda kalır",
    ],
  },
] as const;

export function ProcessTimeline() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = refs.current.filter(Boolean) as HTMLLIElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = nodes.findIndex((node) => node === visible.target);
        if (index >= 0) setActive(index);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.25, 0.55, 0.8] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="surec" className="section-pad bg-elevated" aria-labelledby="surec-heading">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Süreç</p>
          <h2
            id="surec-heading"
            className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink md:text-5xl"
          >
            Nasıl çalışıyoruz
          </h2>
          <p className="mt-4 text-muted">
            {site.name}, {site.person} tarafından yönetilen butik bir stüdyodur. Yazılı kapsam ve yayın
            sonrası destek standarttır.{" "}
            <Link href="/hakkimda" className="text-accent underline underline-offset-4 hover:text-ink">
              Hakkımızda
            </Link>
          </p>
          <p className="mt-3 text-muted">
            Önce işi dinleriz, sonra kapsamı yazılı teklife dökeriz. Tasarım onayından sonra sayfalar
            gelişir; her adımın çıktısı nettir.
          </p>
        </div>

        <ol className="relative mt-12 max-w-3xl md:mt-16">
          <span
            className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-line md:left-[1.4rem]"
            aria-hidden
          />

          {steps.map((step, index) => {
            const on = index === active;
            return (
              <li
                id={step.id}
                key={step.id}
                ref={(node) => {
                  refs.current[index] = node;
                }}
                className="relative scroll-mt-28 grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-8 last:border-b-0 md:grid-cols-[3.25rem_1fr] md:gap-7 md:py-10"
              >
                <span
                  className={`relative z-10 mt-0.5 flex size-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors md:size-11 md:text-base ${
                    on
                      ? "border-accent bg-accent text-[#090b12] shadow-[0_0_0_6px_rgba(184,255,53,0.18)]"
                      : "border-line bg-base text-muted"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3
                      className={`font-display text-2xl font-bold uppercase tracking-tight md:text-3xl ${
                        on ? "text-accent" : "text-ink"
                      }`}
                    >
                      {step.t}
                    </h3>
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                        on ? "text-accent/80" : "text-muted"
                      }`}
                    >
                      {step.tag}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {step.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[0.95rem] leading-relaxed">
                        <span
                          className={`mt-2 size-1.5 shrink-0 rounded-full ${
                            on ? "bg-accent" : "bg-muted"
                          }`}
                          aria-hidden
                        />
                        <span className={on ? "text-ink" : "text-muted"}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
