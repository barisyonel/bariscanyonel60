import { ButtonLink } from "@/components/ui/ButtonLink";
import { pricingPackages } from "@/lib/pricing";

export function PricingSection({
  embedded = false,
  ctaHref,
  ctaLocation = "home_pricing",
}: {
  embedded?: boolean;
  ctaHref?: string;
  ctaLocation?: string;
} = {}) {
  const grid = (
        <div className={embedded ? "grid items-stretch gap-4 lg:grid-cols-3" : "mt-10 grid items-stretch gap-4 lg:grid-cols-3"}>
          {pricingPackages.map((pack) => (
            <article
              key={pack.id}
              className={`flex h-full flex-col rounded-card border p-6 md:p-7 ${
                pack.popular
                  ? "border-accent bg-base shadow-(--shadow-lg) lg:-translate-y-2"
                  : "border-line bg-base"
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
                <ButtonLink
                  href={ctaHref ?? pack.href}
                  variant={pack.popular ? "primary" : "ghost"}
                  className="w-full"
                  analyticsEvent="proposal_cta"
                  analyticsParams={{ cta_location: ctaLocation, package_id: pack.id }}
                >
                  {pack.ctaLabel}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
  );

  if (embedded) return grid;

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
        <p className="mt-3 max-w-2xl text-muted">
          Başlangıç, az sayfalı bir kurumsal site içindir. Kurumsal paket daha geniş bölüm, yerel arama
          iskeleti ve tanımlı revizyon turu ister. Premium paket e-ticaret, yapay zekâ aramalarında
          görünürlük veya reklam kurulumunu aynı teslimata ekler. Hangisinin uyduğunu görüşmede seçeriz.
        </p>
        {grid}
      </div>
    </section>
  );
}
