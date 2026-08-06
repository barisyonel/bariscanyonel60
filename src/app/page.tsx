import Link from "next/link";
import dynamic from "next/dynamic";
import { Hero } from "@/components/hero/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { serviceIconId } from "@/lib/serviceIcons";
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

const StatsSection = dynamic(() =>
  import("@/components/sections/StatsSection").then((m) => m.StatsSection)
);
const TestimonialsSection = dynamic(() =>
  import("@/components/sections/TestimonialsSection").then((m) => m.TestimonialsSection)
);
const TechStackSection = dynamic(() =>
  import("@/components/sections/TechStackSection").then((m) => m.TechStackSection)
);
const WhyUsSection = dynamic(() =>
  import("@/components/sections/WhyUsSection").then((m) => m.WhyUsSection)
);
const PricingSection = dynamic(() =>
  import("@/components/sections/PricingSection").then((m) => m.PricingSection)
);
const AmbientField = dynamic(() =>
  import("@/components/motion/Story").then((m) => m.AmbientField)
);
const KineticTitle = dynamic(() =>
  import("@/components/motion/Story").then((m) => m.KineticTitle)
);
const ProcessScrolly = dynamic(() =>
  import("@/components/motion/Story").then((m) => m.ProcessScrolly)
);
const ScrollDrawLine = dynamic(() =>
  import("@/components/motion/Story").then((m) => m.ScrollDrawLine)
);
const SpotlightCard = dynamic(() =>
  import("@/components/motion/Story").then((m) => m.SpotlightCard)
);

const homeTitle = "Tokat Web Tasarım ile Daha Fazla Müşteri Kazanın | BCY Dijital";
const homeDescription =
  "Tokat web tasarım ile daha fazla müşteri kazanın. BCY Dijital: kurumsal site, SEO, GEO ve Meta reklam — şeffaf teklif, ölçülebilir sonuç. Tokat, Çanakkale, İzmir ve İstanbul.";

export const metadata = meta({
  title: homeTitle,
  description: homeDescription,
  path: "/",
  absoluteTitle: true,
  keywords: [
    "Tokat web tasarım",
    "Tokat web sitesi",
    "kurumsal web tasarım",
    "SEO",
    "GEO",
    "Meta reklam",
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

      <Hero />

      <ScrollDrawLine className="container-x -mt-2 mb-2 opacity-80" />

      <StatsSection />

      {/* Projeler — erken sosyal kanıt */}
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
          <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
            {homeServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.07} variant="scale">
                <ServiceCard
                  href={s.href}
                  title={s.title}
                  short={s.short}
                  benefits={s.benefits}
                  iconId={serviceIconId(s.slug)}
                />
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
            text="Tokat merkezli; Çanakkale, İzmir ve İstanbul'da aktif"
            className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl"
          />
          <p className="mt-4 max-w-2xl text-muted">
            Yerel aramalarda görünürlük için her şehre özel sayfalarımız var. Yüz yüze veya
            görüntülü keşif; Türkiye geneline uzaktan hizmet.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      <PricingSection />

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

      {/* Yorumlar */}
      <TestimonialsSection items={testimonials} />

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
            <div className="mt-8">
              <FaqAccordion items={homeFaq} />
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
