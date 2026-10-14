import Link from "next/link";
import { pricingPackages, type PricingPackage } from "@/lib/pricing";

function PackageCard({ pkg }: { pkg: PricingPackage }) {
  const popular = Boolean(pkg.popular);

  return (
    <article
      className={`flex h-full flex-col rounded-card border p-6 md:p-8 ${
        popular ? "border-ink" : "border-line"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-medium text-ink">{pkg.name}</p>
        {popular ? (
          <span className="rounded-btn bg-elevated px-2.5 py-1 text-xs text-muted">Önerilen</span>
        ) : null}
      </div>
      <p className="mt-3 text-xl font-semibold text-ink">{pkg.tagline}</p>

      <div className="mt-6 border-b border-line pb-6">
        <p className="text-2xl font-semibold tracking-tight text-ink">{pkg.priceLabel}</p>
        <p className="mt-1 text-sm text-muted">{pkg.priceNote}</p>
      </div>

      <ul className="mt-6 flex-1 space-y-2.5" aria-label={`${pkg.name} özellikleri`}>
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[0.93rem] leading-snug text-ink/80">
            <span className="mt-[0.1rem] text-accent" aria-hidden>
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={pkg.href}
        className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-btn px-5 py-2.5 text-sm font-medium transition-colors ${
          popular
            ? "bg-ink text-white hover:bg-accent"
            : "border border-line text-ink hover:border-ink"
        }`}
      >
        {pkg.ctaLabel}
      </Link>
    </article>
  );
}

export function PricingSection() {
  return (
    <section id="fiyatlandirma" className="hairline section-pad" aria-labelledby="fiyatlandirma-heading">
      <div className="container-x">
        <h2
          id="fiyatlandirma-heading"
          className="max-w-2xl text-3xl font-semibold text-ink md:text-4xl"
        >
          Şeffaf çerçeve, yazılı teklif
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Sabit paket fiyatı yerine ihtiyacınıza göre kalem kalem teklif veriyoruz. Aşağıdaki
          çerçeveler kapsamı netleştirmek için; tutarı ücretsiz keşifte birlikte belirliyoruz.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pricingPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
