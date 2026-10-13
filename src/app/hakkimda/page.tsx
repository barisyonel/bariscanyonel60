import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, person, aboutPageSchema } from "@/lib/schema";
import { meta } from "@/lib/seo";
import { site, defaultWa } from "@/lib/site";
import { projects } from "@/lib/projects";

export const metadata = meta({
  title: "Hakkımızda — Tokat Web Tasarım Stüdyosu",
  description:
    "BCY Dijital, Tokat merkezli web tasarım stüdyosudur. Barış Can Yönel ile kurumsal web sitesi, e-ticaret, SEO ve GEO. 5 iş günü teslim, şeffaf teklif, yerel referanslar.",
  path: "/hakkimda",
});

const values = [
  {
    title: "Şeffaflık",
    text: "Teklif, süre ve kapsam baştan yazılıdır; sürpriz maliyet yoktur.",
  },
  {
    title: "Yerel odak",
    text: "Tokat pazarını ve yerel arama rekabetini bilerek tasarlarız.",
  },
  {
    title: "Performans",
    text: "Mobil hız, Core Web Vitals ve Lighthouse hedefleri her projede standarttır.",
  },
  {
    title: "Destek",
    text: "Yayın sonrası küçük düzeltmeler dahildir; bakım isteğe bağlıdır.",
  },
];

const steps = [
  {
    n: "01",
    title: "Keşif & Analiz",
    text: "Hedef kitleniz, rakipleriniz ve mevcut dijital varlığınız değerlendirilir; yazılı yol haritası çıkarılır.",
  },
  {
    n: "02",
    title: "Tasarım & Onay",
    text: "Markanıza özel düzen, renk ve tipografi; onayınız olmadan kodlamaya geçilmez.",
  },
  {
    n: "03",
    title: "Geliştirme & SEO",
    text: "Next.js ile hızlı site; schema, hız optimizasyonu, Search Console ve gerektiğinde Harita kurulumu.",
  },
  {
    n: "04",
    title: "Yayın & Ölçüm",
    text: "Canlıya alma, indekslenme takibi ve sonraki iyileştirmeler birlikte planlanır.",
  },
];

const tokatProjects = projects.filter((p) => p.city.includes("Tokat")).slice(0, 4);

export default function HakkimdaPage() {
  return (
    <>
      <JsonLd
        data={[
          person(),
          aboutPageSchema(),
          breadcrumb([
            { name: "Ana Sayfa", path: "/" },
            { name: "Hakkımızda", path: "/hakkimda" },
          ]),
        ]}
      />

      <section className="container-x section-pad">
        <Reveal>
          <p className="eyebrow">Hakkımızda · Tokat</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
            Hakkımızda: Tokat&apos;ta web tasarım yapan stüdyo
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/80">
            {site.name}, {site.person} tarafından yönetilen Tokat merkezli bir web tasarım
            stüdyosudur. Kurumsal web sitesi, e-ticaret, SEO ve yapay zekâ aramalarında görünürlük
            (GEO) ile işletmelerin telefonunu çaldıran dijital kanallar kuruyoruz.
          </p>
          <p className="mt-4 max-w-2xl text-[0.98rem] text-muted">
            “Tokat web tasarım” veya “Tokat web sitesi” arayan işletmeler için uzaktan kopya tema
            değil; yüz yüze veya görüntülü keşif, yazılı teklif ve ölçülebilir teslim sunuyoruz.
            Ayrıca Çanakkale, İzmir ve İstanbul&apos;da da aktif çalışıyoruz.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/iletisim">Ücretsiz Keşif Görüşmesi</ButtonLink>
            <ButtonLink href="/tokat-web-tasarim" variant="ghost">
              Tokat Web Tasarım
            </ButtonLink>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Merkez", v: "Tokat, Türkiye" },
            { k: "Teslim", v: "Kurumsal site · 5 iş günü" },
            { k: "İletişim", v: site.phone },
          ].map((item) => (
            <Reveal key={item.k}>
              <div className="rounded-card border border-line bg-elevated px-5 py-4">
                <p className="text-sm text-muted">{item.k}</p>
                <p className="mt-1 font-medium text-ink">{item.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="hairline section-pad bg-elevated/40">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow">Kurucu</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{site.person}</h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-ink/80">
              Perakende ve hizmet sektöründeki saha deneyimini yazılım ve web projelerine taşıyan bir
              geliştirici-tasarımcı olarak çalışıyorum. Amaç \"güzel ekran\" değil; Tokat&apos;taki
              işletmenin teklif süreçlerinde güven veren, Google&apos;da bulunan ve WhatsApp/form ile
              talep toplayan bir sistem kurmak.
            </p>
            <p className="mt-4 text-[0.98rem] text-muted">
              Referanslarımız asansör, mermer, otomotiv yedek parça, mühendislik, gayrimenkul ve gıda
              gibi sektörlerde canlı sitelerle duruyor. Her projede sahiplik sizde kalır; alan adı ve
              hosting müşteri adına yönetilir.
            </p>
            <ul className="mt-6 space-y-2 text-[0.95rem] text-muted">
              <li>
                E-posta:{" "}
                <a className="text-accent underline underline-offset-4" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                Telefon / WhatsApp:{" "}
                <a className="text-accent underline underline-offset-4" href={`tel:+${site.phoneRaw}`}>
                  {site.phone}
                </a>
              </li>
              <li>
                Bölgeler: {site.regions.join(" · ")} — Türkiye geneline uzaktan hizmet
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-card border border-line bg-base p-7 md:p-8">
              <p className="eyebrow">Neden yerel stüdyo?</p>
              <ul className="mt-5 space-y-4 text-[0.95rem] text-ink/80">
                <li>
                  <strong className="text-ink">Tokat pazarını biliriz.</strong> Büyük şehir ajanslarının
                  es geçtiği \"Tokat + sektör\" aramalarına odaklanırız.
                </li>
                <li>
                  <strong className="text-ink">Yüz yüze keşif.</strong> Masada, net kapsam ve yazılı
                  teklifle ilerleriz; dilerseniz süreç tamamen online da yürür.
                </li>
                <li>
                  <strong className="text-ink">Teknik standart.</strong> Next.js, mobil öncelik, schema
                  ve hız — ucuz temanın üstüne logo yapıştırmayız.
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted">
                Detaylı yerel sayfa:{" "}
                <Link href="/tokat-web-tasarim" className="text-accent underline underline-offset-4">
                  Tokat Web Tasarım
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hairline section-pad">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-card border border-line bg-elevated p-7 md:p-8">
              <p className="eyebrow">Misyonumuz</p>
              <p className="mt-4 text-lg text-ink/80">
                Tokat ve Türkiye genelindeki işletmelerin dijital vitrinlerini hızlı, güvenli ve arama
                motorlarında bulunabilir kılarak sürdürülebilir satış kanalları kurmak.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-card border border-line bg-elevated p-7 md:p-8">
              <p className="eyebrow">Vizyonumuz</p>
              <p className="mt-4 text-lg text-ink/80">
                Bölgesel işletmelerin ulusal ölçekte rekabet edebileceği; performans, SEO ve GEO
                standartlarında örnek gösterilen web projeleri üretmek.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="hairline section-pad bg-elevated/40">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Tokat referanslarından</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Bu şehirde iş yaptık</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Google&apos;da \"Tokat web tasarım\" arayanlar için en güçlü kanıt; canlı URL&apos;li yerel
              referanslardır.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {tokatProjects.map((p) => (
              <Reveal key={p.slug}>
                <Link
                  href={`/projeler/${p.slug}`}
                  className="motion-card block rounded-card border border-line bg-base p-5 hover:border-accent/50"
                >
                  <p className="font-semibold text-ink">{p.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {p.sector} · {p.city}
                  </p>
                  <p className="mt-2 text-[0.92rem] text-ink/80">{p.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-6">
            <Link href="/projeler" className="text-sm text-accent underline underline-offset-4">
              Tüm projeleri gör →
            </Link>
          </p>
        </div>
      </section>

      <section className="hairline section-pad">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Değerlerimiz</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Neye öncelik veriyoruz</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-card border border-line bg-elevated p-6">
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline section-pad bg-elevated/40">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Çalışma sürecimiz</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Dört adım, net teslim</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="h-full rounded-card border border-line bg-base p-6">
                  <span className="text-sm font-medium text-muted">{s.n}</span>
                  <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] text-muted">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline section-pad">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col justify-center rounded-card bg-elevated p-8 md:max-w-2xl md:p-10">
              <h2 className="text-2xl font-semibold md:text-3xl">
                Tokat&apos;ta web sitenizi birlikte planlayalım.
              </h2>
              <p className="mt-4 text-muted">
                15 dakikalık ücretsiz keşif görüşmesinde ihtiyacınızı dinleyelim; size özel yol
                haritasını yazalım. Satın alma zorunluluğu yoktur.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <ButtonLink href="/iletisim">Ücretsiz Keşif Görüşmesi</ButtonLink>
                <ButtonLink href={defaultWa} variant="ghost" external>
                  WhatsApp
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
