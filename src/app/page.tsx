import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { StatsSection } from "@/components/sections/StatsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { SectionCTA } from "@/components/sections/SectionCTA";
import { JsonLd } from "@/components/JsonLd";
import {
  faqSchema,
  webPageSchema,
  reviewsSchema,
  organizationSchema,
  imageObjectSchema,
} from "@/lib/schema";
import { meta } from "@/lib/seo";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { faq } from "@/lib/faq";
import { cities } from "@/lib/cities";
import { testimonials } from "@/lib/testimonials";
import { defaultWa, site } from "@/lib/site";
import {
  AmbientField,
  KineticTitle,
  ProcessScrolly,
  ScrollDrawLine,
  SpotlightCard,
} from "@/components/motion/Story";

const homeTitle = "Tokat Web Tasarım | Kurumsal Site, SEO, GEO";
const homeDescription =
  "Tokat web tasarım stüdyosu BCY Dijital: kurumsal web sitesi, e-ticaret, yerel SEO ve GEO. 5 iş günü teslim, ücretsiz keşif.";

export const metadata = meta({
  title: homeTitle,
  description: homeDescription,
  path: "/",
});

const steps = [
  {
    t: "Keşif",
    p: "Ücretsiz görüşmede işinizi, müşterinizi ve rakiplerinizi dinliyoruz. Sonrasında kalem kalem yazılı teklif alıyorsunuz.",
  },
  {
    t: "Tasarım ve inşa",
    p: "Önce tasarım yönünü onaylıyorsunuz, sonra sayfa sayfa inşa ediyoruz. Süreç boyunca canlı önizleme linkiyle her adımı görüyorsunuz.",
  },
  {
    t: "Yayın ve ölçüm",
    p: "Site; SEO altyapısı, schema işaretlemesi ve analitikle yayına alınır. Neyin çalıştığını veriyle takip eder, birlikte iyileştiririz.",
  },
];

const regionList = [cities.tokat, cities.canakkale, cities.izmir];
const homeFaq = faq.slice(0, 3);

const homeServices = [
  ...services
    .filter((s) => s.slug !== "e-ticaret")
    .map((s) => ({
      slug: s.slug,
      title: s.title,
      short: s.short,
      href: `/hizmetler/${s.slug}`,
    })),
  {
    slug: "mobil-uyumluluk",
    title: "Mobil Uyumluluk",
    short:
      "Telefon ve tablette kusursuz açılan, hızlı ve dokunmatik uyumlu siteler. Google'ın mobil öncelikli indeksine hazır.",
    href: "/hizmetler/web-tasarim",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: homeTitle, description: homeDescription }),
          organizationSchema(),
          faqSchema(homeFaq),
          reviewsSchema(testimonials),
          imageObjectSchema({
            url: `${site.domain}/logo-og.jpg`,
            caption: "BCY Dijital — Tokat web tasarım stüdyosu",
          }),
        ]}
      />

      <Hero />

      <ScrollDrawLine className="container-x -mt-2 mb-2 opacity-80" />

      <StatsSection />

      {/* Hizmetler */}
      <section id="hizmetler" className="hairline section-pad relative" aria-labelledby="hizmetler-heading">
        <div className="container-x">
          <p className="eyebrow">Ne yapıyoruz</p>
          <KineticTitle
            id="hizmetler-heading"
            text="Tokat'ta sunduğumuz web tasarım hizmetleri"
            className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl"
          />
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-2xl text-muted">
              Site kurmuyoruz; telefonu çaldıran bir sistem kuruyoruz. Her hizmet ölçülebilir bir
              hedefe bağlanır — detaylar ilgili sayfada.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2">
            {homeServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.07} variant="scale">
                <ServiceCard href={s.href} title={s.title} short={s.short} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        id="cta-hizmetler"
        title="İşinizi Dijitale Taşımaya Hazır mısınız?"
        description="Ücretsiz keşif görüşmesiyle ihtiyacınızı netleştirelim; yazılı teklif alın."
      />

      {/* Bölgeler */}
      <section
        id="bolgeler"
        className="hairline section-pad relative bg-elevated/40"
        aria-labelledby="bolgeler-heading"
      >
        <AmbientField />
        <div className="container-x relative z-[1]">
          <p className="eyebrow">Hizmet bölgelerimiz</p>
          <KineticTitle
            id="bolgeler-heading"
            text="Tokat merkezli; Çanakkale ve İzmir'de aktif"
            className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl"
          />
          <p className="mt-4 max-w-2xl text-muted">
            Yerel aramalarda görünürlük için her şehre özel sayfalarımız var. Yüz yüze veya
            görüntülü keşif; Türkiye geneline uzaktan hizmet.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {regionList.map((city) => (
              <Link
                key={city.path}
                href={city.path}
                className="liquid-border group flex h-full flex-col rounded-card border border-line bg-base p-6"
              >
                <h3 className="text-xl font-semibold transition-colors group-hover:text-accent">
                  {city.name} Web Tasarım
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] text-muted">{city.intro}</p>
                <span className="mt-5 text-sm text-accent">Şehir sayfasını aç →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyUsSection />

      {/* GEO */}
      <section id="geo" className="hairline section-pad relative" aria-labelledby="geo-heading">
        <AmbientField className="opacity-70" />
        <div className="container-x relative z-[1] grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Farkımız — GEO</p>
            <KineticTitle
              id="geo-heading"
              text="Yapay zekâ aramalarında da sizi bulduralım"
              className="mt-3 text-3xl font-semibold md:text-4xl"
            />
            <p className="mt-5 text-muted">
              GEO (Generative Engine Optimization), işletmenizin ChatGPT, Gemini ve Perplexity gibi
              asistanların cevaplarında görünmesini sağlar. Bu siteyi de aynı yöntemle kurduk —{" "}
              <Link href="/hakkimda" className="link-underline text-accent">
                hakkımızda
              </Link>{" "}
              ve{" "}
              <Link href="/blog" className="link-underline text-accent">
                blog
              </Link>{" "}
              içerikleri aynı mantıkla yazılır.
            </p>
            <div className="mt-7">
              <MagneticButton href="/hizmetler/geo">GEO hizmetini inceleyin</MagneticButton>
            </div>
          </div>
          <ul className="space-y-4">
            {[
              "Alıntılanabilir, varlık-tanımlayıcı içerik yapısı",
              "Schema.org işaretleme ve llms.txt ile AI crawler uyumu",
              "Soru-cevap formatlı, doğrulanabilir içerik",
              "Marka, kişi, konum ve hizmet bilgisinde tam tutarlılık",
            ].map((t) => (
              <li
                key={t}
                className="liquid-border flex items-start gap-3 rounded-card border border-line bg-elevated p-4"
              >
                <span
                  aria-hidden
                  className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(33,154,203,0.8)]"
                />
                <span className="text-[0.97rem]">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TechStackSection />

      <ScrollDrawLine className="container-x opacity-70" />

      {/* Projeler */}
      <section
        id="referanslar"
        className="hairline section-pad bg-elevated/40"
        aria-labelledby="referanslar-heading"
      >
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Referanslar</p>
              <KineticTitle
                id="referanslar-heading"
                text="Tokat'tan Türkiye'ye web tasarım işleri"
                className="mt-3 text-3xl font-semibold md:text-4xl"
              />
              <Reveal delay={0.1}>
                <p className="mt-3 max-w-xl text-muted">
                  Canlı URL&apos;li projeler; asansörden gayrimenkule, otelden keresteye.
                </p>
              </Reveal>
            </div>
            <Link href="/projeler" className="link-underline text-sm text-accent">
              Tüm projeler →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08} variant="scale">
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        id="cta-projeler"
        title="Sizin projeniz bir sonraki referans olsun"
        description="Ücretsiz keşif görüşmesiyle kapsamı netleştirelim; 5 iş günü hedefiyle yol haritası çıkarın."
      />

      {/* Yorumlar */}
      <section id="yorumlar" className="hairline section-pad" aria-labelledby="yorumlar-heading">
        <div className="container-x">
          <p className="eyebrow">Müşteri yorumları</p>
          <KineticTitle
            id="yorumlar-heading"
            text="Birlikte çalıştığımız işletmeler ne diyor?"
            className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {testimonials.map((t) => (
              <SpotlightCard
                key={t.projectSlug}
                className="flex h-full flex-col rounded-card border border-line bg-elevated p-6 md:p-7"
              >
                <figure className="flex h-full flex-col">
                  <blockquote className="flex-1 text-[0.98rem] leading-relaxed text-[#c2cedd]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-4">
                    <p className="font-semibold text-ink">{t.company}</p>
                    <p className="mt-0.5 text-sm text-muted">
                      {t.name} · {t.role}
                    </p>
                    <Link
                      href={`/projeler/${t.projectSlug}`}
                      className="link-underline mt-2 inline-block text-sm text-accent"
                    >
                      Projeyi gör →
                    </Link>
                  </figcaption>
                </figure>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section
        id="surec"
        className="hairline section-pad relative bg-elevated/40"
        aria-labelledby="surec-heading"
      >
        <AmbientField className="opacity-50" />
        <div className="container-x relative z-[1]">
          <p className="eyebrow">Nasıl çalışıyoruz</p>
          <KineticTitle
            id="surec-heading"
            text="Üç adım, sıfır sürpriz"
            className="mt-3 text-3xl font-semibold md:text-4xl"
          />
          <p className="mt-4 max-w-2xl text-muted">
            {site.name}, {site.person} tarafından yönetilen butik bir stüdyodur. Şeffaf teklif,
            yazılı kapsam ve yayın sonrası destek standarttır.{" "}
            <Link href="/hakkimda" className="link-underline text-accent">
              Neden biz?
            </Link>
          </p>
          <ProcessScrolly steps={steps} />
        </div>
      </section>

      {/* SSS + CTA */}
      <section id="sss" className="hairline section-pad" aria-labelledby="sss-heading">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Merak edilenler</p>
            <KineticTitle
              id="sss-heading"
              text="Tokat web sitesi hakkında sık sorulanlar"
              className="mt-3 text-3xl font-semibold md:text-4xl"
            />
            <div className="mt-8 space-y-3">
              {homeFaq.map((f) => (
                <details
                  key={f.q}
                  className="liquid-border group rounded-card border border-line bg-base p-5"
                >
                  <summary className="cursor-pointer list-none font-medium marker:content-none">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-[0.95rem] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
            <Link href="/sss" className="link-underline mt-6 inline-block text-sm text-accent">
              Tüm sorular →
            </Link>
          </div>
          <SpotlightCard
            id="iletisim-cta"
            className="flex h-full flex-col justify-center rounded-card border border-accent/30 bg-accent-soft p-8 md:p-10"
          >
            <h2 className="text-2xl font-semibold md:text-3xl">
              Ücretsiz keşif görüşmesiyle başlayalım
            </h2>
            <p className="mt-4 text-muted">
              15 dakikada ihtiyacınızı dinleyelim; yazılı yol haritası alın. Satın alma zorunluluğu
              yok. Tokat&apos;ta yüz yüze veya online.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <MagneticButton href="/iletisim">Ücretsiz Keşif Görüşmesi</MagneticButton>
              <MagneticButton href={defaultWa} variant="ghost" external>
                WhatsApp&apos;tan yazın
              </MagneticButton>
            </div>
          </SpotlightCard>
        </div>
      </section>
    </>
  );
}
