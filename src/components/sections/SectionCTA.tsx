"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { SpotlightCard } from "@/components/motion/Story";
import { defaultWa } from "@/lib/site";

type SectionCTAProps = {
  title?: string;
  description?: string;
  id?: string;
};

export function SectionCTA({
  title = "İşinizi Dijitale Taşımaya Hazır mısınız?",
  description = "15 dakikalık ücretsiz keşif görüşmesinde ihtiyacınızı dinleyelim; yazılı yol haritası alın. Satın alma zorunluluğu yok.",
  id,
}: SectionCTAProps) {
  return (
    <section
      id={id}
      className="hairline section-pad"
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="container-x">
        <SpotlightCard className="gradient-border relative overflow-hidden rounded-card p-8 md:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(33,154,203,0.25),transparent_70%)] blur-2xl"
            aria-hidden
          />
          <div className="relative z-[1] mx-auto max-w-2xl text-center">
            <h2
              id={id ? `${id}-heading` : undefined}
              className="text-2xl font-semibold md:text-3xl lg:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-4 text-muted md:text-lg">{description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href="/iletisim">Ücretsiz Keşif Görüşmesi</MagneticButton>
              <MagneticButton href="/iletisim" variant="ghost">
                Teklif Al
              </MagneticButton>
              <MagneticButton href={defaultWa} variant="ghost" external>
                WhatsApp
              </MagneticButton>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
