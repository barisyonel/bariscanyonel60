import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { serviceIconId } from "@/lib/serviceIcons";
import { CampaignBand } from "@/components/sections/CampaignBand";
import { DesktopEntrance } from "@/components/sections/DesktopEntrance";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TrustBar } from "@/components/sections/TrustBar";
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
import { cities, upcomingCities } from "@/lib/cities";
import { testimonials } from "@/lib/testimonials";
import { site } from "@/lib/site";

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
    t: "İhtiyacınızı dinliyoruz",
    p: "Ücretsiz görüşmede işinizi, müşterinizi ve hedefinizi öğreniyoruz. Ardından kalem kalem yazılı teklif alıyorsunuz.",
  },
  {
    t: "Tasarım ve geliştirme",
    p: "Markanıza özel web sitesini hazırlıyoruz. Önce tasarım yönünü onaylıyorsunuz, sonra sayfa sayfa ilerliyoruz.",
  },
  {
    t: "Kontrol ve revizyon",
    p: "Siteyi birlikte kontrol ediyoruz. Tasarım onayına kadar makul revizyon turları süreçte tanımlıdır.",
  },
  {
    t: "Yayına alma",
    p: "Onaylanan site; SEO altyapısı ve schema işaretlemesiyle yayına alınır. Alan adı ve site sizin üzerinizedir.",
  },
  {
    t: "Destek",
    p: "Küçük düzeltmeler ve sorularınız için teslim sonrası destek her projeye dahildir.",
  },
];

const featuredSlugs = [
  "prime-dizayn",
  "dalyan-palmiye-resort",
  "samlioglu-hukuk",
  "aevum-troia",
  "guzubey-asansor",
  "polat-mermer",
] as const;

const featuredProjects = featuredSlugs.flatMap((slug) => {
  const project = projects.find((item) => item.slug === slug);
  return project ? [project] : [];
});

const regionList = [cities.tokat, cities.canakkale, cities.izmir, cities.istanbul];

const homeQuestions = [
  "Site ne kadar sürede teslim edilir?",
  "Web sitesi fiyatları neye göre belirleniyor?",
  "Alan adı ve sunucu kimin üzerine kayıtlı olur?",
  "Mobil uyumlu ve hızlı bir site mi alıyorum?",
  "Sitem Google'da çıkar mı?",
  "GEO hizmeti tam olarak ne işe yarıyor?",
  "Revizyon hakkı var mı? Beğenmezsem ne olur?",
  "Teslimden sonra destek veriyor musunuz?",
] as const;

const homeFaq = homeQuestions.flatMap((question) => {
  const item = faq.find((entry) => entry.q === question);
  return item ? [item] : [];
});

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

      <CampaignBand />
      <DesktopEntrance />
      <Hero />
      <TrustBar />

      <section id="referanslar" className="section-pad scroll-mt-24" aria-labelledby="referanslar-heading">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="referanslar-heading" className="text-3xl font-semibold md:text-4xl">
                Gerçek İşletmeler İçin Gerçek Projeler
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                Farklı sektörlerde işletmeler için geliştirdiğimiz web sitelerinden bazılarını inceleyin.
              </p>
            </div>
            <Link href="/projeler" className="link-underline text-sm font-medium text-ink">
              Tüm projeler →
            </Link>
          </div>
          <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyUsSection />
      <PricingSection />
      <QuoteSection />
      <TestimonialsSection items={testimonials} title="İşletmeler Neden Bizi Tercih Ediyor?" />

      <section id="geo" className="hairline section-pad" aria-labelledby="geo-heading">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 id="geo-heading" className="text-3xl font-semibold md:text-4xl">
              Sadece Güzel Değil, Bulunabilir Bir Web Sitesi
            </h2>
            <p className="mt-5 text-muted">
              Müşteriniz sizi önce arama sonucunda görür. Bu yüzden her siteyi hızlı, mobil uyumlu ve
              arama motorlarının okuyabildiği bir teknik iskeletle teslim ediyoruz. GEO, aynı bilgilerin
              ChatGPT, Gemini ve Perplexity gibi yapay zekâ asistanlarında da tutarlı durmasına yardım
              eden içerik ve işaretleme düzenidir. Sıra garantisi vermiyoruz. Rekabetçi kelimelerde üst
              sıralar, ayrıca sürdürülen bir SEO çalışması ister.
            </p>
            <div className="mt-7">
              <ButtonLink href="/hizmetler/geo" variant="ghost">
                SEO + GEO Hakkında Bilgi Al
              </ButtonLink>
            </div>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {[
              "Google'ın sayfayı doğru anlaması için teknik SEO iskeleti",
              "Schema.org işaretleme ve tutarlı işletme bilgisi",
              "Soru-cevap formatında, doğrulanabilir içerik",
              "Yapay zekâ asistanlarının alıntılayabileceği net tanımlar",
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

      <section id="surec" className="surface-ink section-pad" aria-labelledby="surec-heading">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 id="surec-heading" className="text-3xl font-semibold text-white md:text-5xl">
              Beş adımda yayına
            </h2>
            <p className="mt-4 text-white/65">
              {site.name}, {site.person} tarafından yönetilen butik bir stüdyodur. Yazılı kapsam ve yayın
              sonrası destek standarttır.{" "}
              <Link href="/hakkimda" className="text-white underline underline-offset-4 hover:text-white/80">
                Hakkımızda
              </Link>
            </p>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li
                key={s.t}
                className="flex h-full flex-col rounded-card border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="text-3xl font-semibold tracking-tight text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.p}</p>
              </li>
            ))}
          </ol>
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

      <TechStackSection />

      <section id="bolgeler" className="hairline section-pad" aria-labelledby="bolgeler-heading">
        <div className="container-x">
          <h2 id="bolgeler-heading" className="max-w-2xl text-3xl font-semibold md:text-4xl">
            Tokat merkezli; Çanakkale, İzmir ve İstanbul’da aktif
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Her şehir için ayrı yerel sayfamız var. {upcomingCities.map((city) => city.name).join(", ")}{" "}
            tarafında da uzaktan çalışıyoruz. Yüz yüze veya görüntülü keşif; Türkiye geneline hizmet.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {regionList.map((city) => (
              <Link
                key={city.path}
                href={city.path}
                className="group flex h-full flex-col bg-base p-6 transition-colors hover:bg-elevated"
              >
                <h3 className="text-lg font-semibold">{city.name} Web Tasarım</h3>
                <p className="mt-2 flex-1 text-[0.95rem] text-muted">{city.intro}</p>
                <span className="mt-4 text-sm font-medium text-ink group-hover:text-accent">
                  Şehir sayfası →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="sss" className="hairline section-pad" aria-labelledby="sss-heading">
        <div className="container-x">
          <div className="max-w-3xl">
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
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
