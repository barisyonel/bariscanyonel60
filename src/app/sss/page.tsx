import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { faqSchema } from "@/lib/schema";
import { meta } from "@/lib/seo";
import { faq } from "@/lib/faq";
import { defaultWa } from "@/lib/site";

export const metadata = meta({
  title: "Sık Sorulan Sorular: Fiyat, Süre ve Süreç",
  description:
    "Web sitesi fiyatları, 5 iş günü teslim süresi, alan adı sahipliği ve destek hakkında net cevaplar. BCY Dijital SSS.",
  path: "/sss",
});

export default function SSSPage() {
  return (
    <div className="container-x section-pad">
      <JsonLd data={faqSchema(faq)} />
      <Breadcrumbs
        className="mb-8"
        items={[
          { name: "Ana Sayfa", path: "/" },
          { name: "SSS", path: "/sss" },
        ]}
      />
      <Reveal>
        <p className="eyebrow">Sık sorulan sorular</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
          Sık sorulan sorular: fiyat, süre ve süreç
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Fiyat, süre, sahiplik, destek… Görüşmeden önce bilmek istediklerinizin tamamı burada.
        </p>
      </Reveal>

      <div className="mt-12 max-w-3xl">
        <FaqAccordion items={faq} defaultOpenFirst />
      </div>

      <Reveal>
        <div className="mt-14 max-w-3xl rounded-card bg-elevated p-8">
          <h2 className="text-2xl font-semibold">Sorunuz burada yok mu?</h2>
          <p className="mt-2 text-muted">
            WhatsApp&apos;tan yazın; genellikle aynı gün içinde cevaplıyoruz.
          </p>
          <div className="mt-5">
            <ButtonLink href={defaultWa} external>
              WhatsApp&apos;tan sorun
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
