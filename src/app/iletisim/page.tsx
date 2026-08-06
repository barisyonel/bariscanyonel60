import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { meta } from "@/lib/seo";
import { site, defaultWa } from "@/lib/site";

export const metadata = meta({
  title: "İletişim ve Ücretsiz Keşif Görüşmesi",
  description:
    "BCY Dijital ile iletişime geçin: 15 dakikalık ücretsiz keşif görüşmesi, WhatsApp hattı ve iletişim formu. Tokat, Çanakkale, İzmir ve İstanbul'da yüz yüze veya çevrim içi görüşme.",
  path: "/iletisim",
});

export default function IletisimPage() {
  return (
    <div className="container-x section-pad">
      <JsonLd data={breadcrumb([{ name: "Ana Sayfa", path: "/" }, { name: "İletişim", path: "/iletisim" }])} />
      <Reveal>
        <p className="eyebrow">İletişim</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
          İletişim: ücretsiz keşif görüşmesiyle başlayalım
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Formu doldurun ya da doğrudan WhatsApp'tan yazın. Görüşmede ihtiyacınızı dinler,
          size yazılı bir yol haritası çıkarırız — satın alma zorunluluğu yoktur.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_340px]">
        <Reveal>
          <div className="rounded-card border border-line bg-elevated p-7 md:p-9">
            <ContactForm />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-5">
            <a
              href={defaultWa}
              target="_blank"
              rel="noopener noreferrer"
              className="motion-card block rounded-card border border-accent/40 bg-accent-soft p-6 hover:border-accent"
            >
              <p className="font-semibold text-accent">WhatsApp — en hızlı yol</p>
              <p className="mt-1.5 text-sm text-muted">Mesajınız hazır gelir, tek dokunuşla gönderin. Genellikle aynı gün dönüş.</p>
            </a>
            <div className="rounded-card border border-line bg-elevated p-6 text-[0.95rem]">
              <p className="eyebrow mb-3">Doğrudan ulaşın</p>
              <a className="block py-1 text-muted hover:text-accent" href={`tel:+${site.phoneRaw}`}>{site.phone}</a>
              <a className="block py-1 text-muted hover:text-accent" href={`mailto:${site.email}`}>{site.email}</a>
              <p className="py-1 text-muted">Tokat, Türkiye · Pzt–Cmt 09.00–19.00</p>
            </div>
            <div className="rounded-card border border-line bg-elevated p-6 text-sm text-muted">
              Formla ilettiğiniz bilgiler yalnızca size dönüş yapmak için kullanılır;
              detaylar <a href="/kvkk" className="text-accent underline underline-offset-4">KVKK sayfasında</a>.
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
