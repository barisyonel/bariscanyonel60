import { ButtonLink } from "@/components/ui/ButtonLink";
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
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2
              id={id ? `${id}-heading` : undefined}
              className="text-2xl font-semibold md:text-3xl lg:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-4 text-muted md:text-lg">{description}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <ButtonLink href="/iletisim">Ücretsiz Keşif Görüşmesi</ButtonLink>
            <ButtonLink href={defaultWa} variant="ghost" external>
              WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
