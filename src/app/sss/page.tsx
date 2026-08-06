import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, faqSchema } from "@/lib/schema";
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
      <JsonLd
        data={[
          faqSchema(faq),
          breadcrumb([{ name: "Ana Sayfa", path: "/" }, { name: "SSS", path: "/sss" }]),
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
      <div className="mt-12 max-w-2xl space-y-3">
        {faq.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.04}>
            <details className="rounded-card border border-line bg-elevated p-5" open={i === 0}>
              <summary className="cursor-pointer list-none text-lg font-medium marker:content-none">{f.q}</summary>
              <p className="mt-3 text-muted">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-14 max-w-2xl rounded-card border border-accent/30 bg-accent-soft p-8">
          <h2 className="text-2xl font-semibold">Sorunuz burada yok mu?</h2>
          <p className="mt-2 text-muted">WhatsApp'tan yazın; genellikle aynı gün içinde cevaplıyoruz.</p>
          <div className="mt-5">
            <MagneticButton href={defaultWa} external>WhatsApp'tan sorun</MagneticButton>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
