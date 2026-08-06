"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { pricingPackages, type PricingPackage } from "@/lib/pricing";
import { site } from "@/lib/site";

function PackageCard({ pkg, delay }: { pkg: PricingPackage; delay: number }) {
  const popular = Boolean(pkg.popular);

  return (
    <Reveal delay={delay} variant="scale">
      <article
        className={`relative flex h-full flex-col overflow-hidden rounded-card border p-6 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 md:p-8 ${
          popular
            ? "border-accent/50 bg-elevated shadow-(--shadow-glow)"
            : "border-line bg-elevated/40 hover:border-accent/35 hover:shadow-(--shadow-md)"
        }`}
      >
        {popular ? (
          <span className="absolute right-4 top-4 rounded-btn bg-accent px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-base">
            En popüler
          </span>
        ) : null}

        <p className="eyebrow mb-0!">{pkg.name}</p>
        <h3 className="mt-3 display text-2xl font-semibold tracking-tight text-ink">
          {pkg.tagline}
        </h3>

        <div className="mt-6 border-b border-line pb-6">
          <p className="display text-xl font-semibold text-accent">{pkg.priceLabel}</p>
          <p className="mt-1 text-sm text-muted">{pkg.priceNote}</p>
        </div>

        <ul className="mt-6 flex-1 space-y-3" aria-label={`${pkg.name} özellikleri`}>
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-[0.92rem] leading-snug text-muted">
              <span
                className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[0.55rem] font-bold text-accent"
                aria-hidden
              >
                ✓
              </span>
              {f}
            </li>
          ))}
        </ul>

        <Link
          href={pkg.href}
          className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-btn px-5 py-3 text-sm font-medium transition-[background-color,border-color,color] duration-300 ${
            popular
              ? "bg-accent text-base hover:bg-accent-deep"
              : "border border-line text-ink hover:border-accent/50 hover:text-accent"
          }`}
        >
          {pkg.ctaLabel}
          <span aria-hidden>→</span>
        </Link>
      </article>
    </Reveal>
  );
}

/**
 * Premium fiyatlandırma — 3 paket, popüler vurgulu.
 */
export function PricingSection() {
  return (
    <section
      id="fiyatlandirma"
      className="hairline section-pad relative overflow-hidden"
      aria-labelledby="fiyatlandirma-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(33,154,203,0.07),transparent_55%)]"
        aria-hidden
      />
      <div className="container-x relative z-1">
        <p className="eyebrow">Fiyatlandırma</p>
        <h2
          id="fiyatlandirma-heading"
          className="mt-3 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-ink md:text-4xl"
        >
          Şeffaf çerçeve, yazılı teklif
        </h2>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-xl text-muted">
            Sabit “paket fiyat” yerine ihtiyacınıza göre kalem kalem teklif veriyoruz. Aşağıdaki
            çerçeveler kapsamı netleştirir — {site.name} ile ücretsiz keşifte tutarı birlikte
            kilitleyiz.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {pricingPackages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
