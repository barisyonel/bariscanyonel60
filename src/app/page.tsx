import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { serviceIconId } from "@/lib/serviceIcons";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { PricingSection } from "@/components/sections/PricingSection";
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

const homeTitle = "Tokat Web Tasarım ve Kurumsal Web Sitesi | BCY Dijital";
const homeDescription =
  "Tokat’ta kurumsal web sitesi, e-ticaret ve yerel SEO. Yazılı teklif, 5 iş günü teslim; alan adı ve kod size ait. Çanakkale, İzmir ve İstanbul’a da hizmet.";

export const metadata = meta({
  title: homeTitle,
  description: homeDescription,
  path: "/",
  absoluteTitle: true,
  keywords: [
    "Tokat web tasarım",
    "Tokat web tasarım firması",
    "Tokat web sitesi yaptırma",
    "Tokat kurumsal web sitesi",
    "Tokat e-ticaret sitesi",
    "Tokat SEO",
    "web tasarım fiyatları",
    "BCY Dijital",
  ],
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

const regionList = [cities.tokat, cities.canakkale, cities.izmir, cities.istanbul];
const homeFaq = faq.slice(0, 6);

const homeServices = [
  ...services
    .filter((s) => s.slug !== "e-ticaret")
    .map((s) => ({
      slug: s.slug,
      title: s.title,
      short: s.short,
      href: `/hizmetler/${s.slug}`,
      benefits: s.bullets.slice(0, 3),
    })),
  {
    slug: "mobil-uyumluluk",
    title: "Mobil Uyumluluk",
    short:
      "Telefon ve tablette kusursuz açılan, hızlı ve dokunmatik uyumlu siteler. Google'ın mobil öncelikli indeksine hazır.",
    href: "/hizmetler/web-tasarim",
    benefits: [
      "390px'ten itibaren kusursuz düzen",
      "Dokunmatik CTA ve form akışları",
      "Mobil öncelikli Google indeksine hazır",
    ],
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

      <div className="container-x pt-6 md:pt-10">
        <Link
          href="/hizmetler"
          aria-label="Tüm dijital hizmetlerimiz"
          className="relative mx-auto block aspect-4/3 max-w-[1024px] overflow-hidden rounded-card border border-line bg-ink sm:aspect-video lg:aspect-[1024/409]"
        >
          <Image
            src="/dijital-hizmetler-banner.jpg"
            alt="BCY Dijital tüm dijital hizmetlerimiz: web tasarım, SEO, e-ticaret, dijital pazarlama ve teknik destek — markanızı dijitalde büyüten, sonuç odaklı çözümler"
            fill
            priority
            quality={90}
            sizes="(max-width: 1100px) 100vw, 1024px"
            className="object-cover object-left"
          />
        </Link>
      </div>

      <Hero />

      <section className="hairline section-pad" aria-label="Yaklaşımımız">
        <div className="container-x">
          <div className="max-w-4xl">
            <p className="text-[clamp(1.4rem,2.6vw,2rem)] font-medium leading-snug text-ink">
              İşletmenizi doğru anlatan bir web sitesi, müşterinizin aradığını kolayca bulmasını ve
              size ulaşmasını sağlar.
            </p>
            <p className="mt-6 text-[clamp(1.4rem,2.6vw,2rem)] font-medium leading-snug text-muted">
              Bu yüzden işe önce sizi, müşterinizi ve rakiplerinizi tanıyarak başlıyoruz. Kapsamı
              netleştirdikten sonra kalem kalem yazılı teklif veriyoruz.
            </p>
          </div>
        </div>
      </section>

      <section id="referanslar" className="hairline section-pad" aria-labelledby="referanslar-heading">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="referanslar-heading" className="text-3xl font-semibold md:text-4xl">
                Son projelerimiz
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                Yayında olan projeler; asansörden gayrimenkule, otelden keresteye.
              </p>
            </div>
            <Link href="/projeler" className="link-underline text-sm font-medium text-ink">
              Tüm projeler →
            </Link>
          </div>
          <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="hizmetler" className="hairline section-pad" aria-labelledby="hizmetler-heading">
        <div className="container-x">
          <h2 id="hizmetler-heading" className="max-w-2xl text-3xl font-semibold md:text-4xl">
            Web tasarım, SEO ve reklam hizmetleri
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Her hizmeti ölçülebilir bir hedefe bağlıyoruz: daha çok arama, daha çok teklif talebi.
            Detaylar ilgili sayfada.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06} className={i === 0 ? "md:col-span-2" : undefined}>
                <ServiceCard
                  href={s.href}
                  title={s.title}
                  short={s.short}
                  benefits={s.benefits}
                  iconId={serviceIconId(s.slug)}
                  featured={i === 0}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="surec" className="surface-ink section-pad" aria-labelledby="surec-heading">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <h2 id="surec-heading" className="text-3xl font-semibold text-white md:text-5xl">
              Üç adımda yayına
            </h2>
            <p className="max-w-xl text-white/65 lg:justify-self-end">
              {site.name}, {site.person} tarafından yönetilen butik bir stüdyodur. Yazılı kapsam ve
              yayın sonrası destek standarttır.{" "}
              <Link href="/hakkimda" className="text-white underline underline-offset-4 hover:text-white/80">
                Hakkımızda
              </Link>
            </p>
          </div>
          <ol className="mt-14 grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.t}
                className="reveal flex h-full flex-col rounded-card border border-white/10 bg-white/[0.03] p-7"
              >
                <span className="text-5xl font-semibold tracking-tight text-white/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-8 text-xl font-semibold text-white">{s.t}</p>
                <p className="mt-2.5 text-[0.97rem] text-white/65">{s.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <WhyUsSection />

      <PricingSection />

      <TestimonialsSection items={testimonials} />

      <section id="bolgeler" className="hairline section-pad" aria-labelledby="bolgeler-heading">
        <div className="container-x">
          <h2 id="bolgeler-heading" className="max-w-2xl text-3xl font-semibold md:text-4xl">
            Tokat merkezli; Çanakkale, İzmir ve İstanbul’da aktif
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Her şehir için ayrı yerel sayfamız var. Yüz yüze veya görüntülü keşif; Türkiye geneline
            uzaktan hizmet.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {regionList.map((city) => (
              <Link
                key={city.path}
                href={city.path}
                className="group flex h-full flex-col bg-base p-6 transition-colors hover:bg-elevated"
              >
                <p className="text-lg font-semibold">{city.name} Web Tasarım</p>
                <p className="mt-2 flex-1 text-[0.95rem] text-muted">{city.intro}</p>
                <span className="mt-4 text-sm font-medium text-ink group-hover:text-accent">
                  Şehir sayfası →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="geo" className="hairline section-pad" aria-labelledby="geo-heading">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 id="geo-heading" className="text-3xl font-semibold md:text-4xl">
              Yapay zekâ aramalarında da bulunun
            </h2>
            <p className="mt-5 text-muted">
              GEO (Generative Engine Optimization), işletmenizin ChatGPT, Gemini ve Perplexity gibi
              asistanların cevaplarında geçmesini hedefler. Bu siteyi de aynı yöntemle kurduk;{" "}
              <Link href="/blog" className="link-underline text-accent">
                blog
              </Link>{" "}
              yazılarımız aynı mantıkla hazırlanır.
            </p>
            <div className="mt-7">
              <ButtonLink href="/hizmetler/geo" variant="ghost">
                GEO hizmetini inceleyin
              </ButtonLink>
            </div>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {[
              "Alıntılanabilir, net tanımlı içerik yapısı",
              "Schema.org işaretleme ve llms.txt",
              "Soru-cevap formatında, doğrulanabilir içerik",
              "Marka, konum ve hizmet bilgisinde tutarlılık",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 py-4 text-[0.97rem]">
                <span className="text-accent" aria-hidden>
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TechStackSection />

      <section id="sss" className="hairline section-pad" aria-labelledby="sss-heading">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="sss-heading" className="text-3xl font-semibold md:text-4xl">
              Web sitesi yaptırmadan önce sık sorulanlar
            </h2>
            <div className="mt-8">
              <FaqAccordion items={homeFaq} />
            </div>
            <Link href="/sss" className="link-underline mt-6 inline-block text-sm font-medium text-ink">
              Tüm sorular →
            </Link>
          </div>
          <div
            id="iletisim-cta"
            className="flex h-fit flex-col rounded-card bg-elevated p-8 md:p-10 lg:sticky lg:top-28"
          >
            <h2 className="text-2xl font-semibold md:text-3xl">Ücretsiz keşif görüşmesiyle başlayalım</h2>
            <p className="mt-4 text-muted">
              15 dakikada ihtiyacınızı dinleyelim, yazılı yol haritası alın. Satın alma zorunluluğu
              yok. Tokat’ta yüz yüze veya online.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/iletisim">Ücretsiz Keşif Görüşmesi</ButtonLink>
              <ButtonLink href={defaultWa} variant="ghost" external>
                WhatsApp’tan yazın
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
