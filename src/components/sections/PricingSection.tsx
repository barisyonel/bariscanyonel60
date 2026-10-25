import { ButtonLink } from "@/components/ui/ButtonLink";
import { pricingPackages } from "@/lib/pricing";

export function PricingSection() {
  return (
    <section id="fiyatlandirma" className="hairline section-pad scroll-mt-24" aria-labelledby="fiyatlandirma-heading">
      <div className="container-x">
        <h2 id="fiyatlandirma-heading" className="max-w-2xl text-3xl font-semibold md:text-4xl">
          İhtiyacınıza göre üç çerçeve
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Tutar, keşif sonrası kalem kalem yazılı teklifte netleşir. Paketler kapsamı anlatır; sürpriz
          fiyat yoktur.
        </p>
        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-3">
          {pricingPackages.map((pack) => (
            <article
              key={pack.id}
              className={`flex h-full flex-col rounded-card border p-6 md:p-7 ${
                pack.popular ? "border-ink bg-elevated" : "border-line bg-base"
              }`}
            >
              {pack.popular ? (
                <p className="text-xs font-semibold tracking-[0.14em] text-accent">EN ÇOK TERCİH EDİLEN</p>
              ) : null}
              <h3 className={`text-2xl font-semibold text-ink ${pack.popular ? "mt-3" : ""}`}>{pack.name}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{pack.tagline}</p>
              <p className="mt-4 text-sm font-medium text-ink">{pack.priceLabel}</p>
              <p className="text-sm text-muted">{pack.priceNote}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-[0.95rem] text-ink">
                    <span className="text-accent" aria-hidden>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <ButtonLink href={pack.href} variant={pack.popular ? "primary" : "ghost"} className="w-full">
                  {pack.ctaLabel}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
