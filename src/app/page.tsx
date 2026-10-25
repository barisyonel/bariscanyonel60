import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { serviceIconId } from "@/lib/serviceIcons";
import { CampaignBand } from "@/components/sections/CampaignBand";
import { ClientLogoStrip } from "@/components/sections/ClientLogoStrip";
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

const homeTitle = "BCY Dijital | Kurumsal Web Sitesi, SEO ve E-Ticaret";
const homeDescription =
  "Barış Can Yönel’in Tokat merkezli stüdyosu. Kurumsal web sitesi, e-ticaret, SEO ve reklam. Yazılı teklif; alan adı ve kod size ait.";

export const metadata = meta({
  title: homeTitle,
  description: homeDescription,
  path: "/",
  absoluteTitle: true,
});

const steps = [
  {
    id: "surec-tanisma",
    t: "Tanışma",
    p: "Ücretsiz görüşmede ne sattığınızı, müşterinizin sizi nerede aradığını ve sitenin hangi işi üstleneceğini konuşuruz. Bu turda kapsam vaadi vermeyiz; ihtiyacı yerinde anlarız.",
  },
  {
    id: "surec-strateji",
    t: "Strateji",
    p: "Sayfa listesi, teslim süresi ve ücret kalem kalem yazılı teklife döner. Onaylamadığınız bir iş başlamaz. Fiyat, keşiften sonra netleşir.",
  },
  {
    id: "surec-tasarim",
    t: "Tasarım",
    p: "Ana sayfa yönünü birlikte seçeriz. Onaydan sonra iç sayfalar aynı dilde ilerler. Hazır tema üzerine logo konmaz.",
  },
  {
    id: "surec-gelistirme",
    t: "Geliştirme",
    p: "Sayfalar yayına yakın bir adreste açılır. Metin, form ve mobil düzeni birlikte kontrol ederiz. Revizyon turu teklifte yazılıdır.",
  },
  {
    id: "surec-yayin",
    t: "Yayın",
    p: "Başlık, açıklama ve schema işaretlemesiyle site yayına alınır. Alan adı ve kod sizin üzerinize geçer. Küçük düzeltmeler teslim sonrası desteğin içindedir.",
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
          imageObjectSchema({
            url: `${site.domain}/logo-og.jpg`,
            caption: "BCY Dijital kurumsal web tasarım stüdyosu",
          }),
        ]}
      />

      <CampaignBand />
      <DesktopEntrance />
      <ClientLogoStrip />
      <TrustBar />
      <Hero />

      <section id="referanslar" className="section-pad scroll-mt-24" aria-labelledby="referanslar-heading">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-accent">PORTFÖY</p>
              <h2 id="referanslar-heading" className="mt-3 max-w-xl text-3xl font-semibold tracking-tight md:text-5xl">
                Gerçek İşletmeler İçin Gerçek Projeler
              </h2>
              <p className="mt-4 max-w-xl text-muted">
                Farklı sektörlerde işletmeler için tasarladığımız modern ve performans odaklı web projelerini keşfedin.
              </p>
              <p className="mt-3 max-w-xl text-muted">
                Kartlarda canlı sitenin ekranı, sektör ve teslimden sonra neyin değiştiği durur. Amaç galeri
                göstermek değil; teklif, randevu veya arama akışının o işletmede nasıl kurulduğunu
                göstermektir. Her proje kendi alanında anlatılır, hazır tema üzerine logo konmaz.
              </p>
            </div>
            <Link href="/projeler" className="link-underline text-sm font-semibold text-accent">
              Tüm projeler →
            </Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {featuredProjects.slice(0, 2).map((p) => (
              <Reveal key={p.slug}>
                <ProjectCard p={p} featured />
              </Reveal>
            ))}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.slice(2).map((p, i) => (
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

      <section id="geo" className="section-pad" aria-labelledby="geo-heading">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-accent">SEO VE GEO</p>
            <h2 id="geo-heading" className="mt-3 text-3xl font-semibold md:text-4xl">
              Sadece Güzel Değil, Bulunabilir Bir Web Sitesi
            </h2>
            <p className="mt-5 text-muted">
              Müşteriniz sizi önce arama sonucunda görür. Bu yüzden her siteyi hızlı, mobil uyumlu ve
              arama motorlarının okuyabildiği bir teknik iskeletle teslim ediyoruz. GEO, aynı bilgilerin
              ChatGPT, Gemini ve Perplexity gibi yapay zekâ asistanlarında da tutarlı durmasına yardım
              eden içerik ve işaretleme düzenidir. Sıra garantisi vermiyoruz. Rekabetçi kelimelerde üst
              sıralar, ayrıca sürdürülen bir SEO çalışması ister.
            </p>
            <p className="mt-4 text-muted">
              İskelet; başlık düzeni, sayfa açıklaması, işletme bilgisi ve schema işaretlemesinden oluşur.
              Ziyaretçi sayfayı açtığında ne iş yaptığınız, hangi şehirde olduğunuz ve nasıl ulaşacağı
              tek bakışta anlaşılır. Bu düzen yayın gününde kurulur, sonradan eklenen bir eklenti olarak
              bırakılmaz.
            </p>
            <div className="mt-7">
              <ButtonLink href="/hizmetler/geo" variant="ghost">
                SEO + GEO Hakkında Bilgi Al
              </ButtonLink>
            </div>
          </div>
          <ul className="grid gap-3">
            {[
              "Google'ın sayfayı doğru anlaması için teknik SEO iskeleti",
              "Schema.org işaretleme ve tutarlı işletme bilgisi",
              "Soru-cevap formatında, doğrulanabilir içerik",
              "Yapay zekâ asistanlarının alıntılayabileceği net tanımlar",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-card border border-accent/15 bg-accent-mist px-4 py-4 text-[0.97rem]">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden>
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="surec" className="section-pad bg-navy" aria-labelledby="surec-heading">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-cyan">SÜREÇ</p>
            <h2 id="surec-heading" className="mt-3 text-3xl font-semibold text-white md:text-5xl">
              Nasıl çalışıyoruz
            </h2>
            <p className="mt-4 text-white/65">
              {site.name}, {site.person} tarafından yönetilen butik bir stüdyodur. Yazılı kapsam ve yayın
              sonrası destek standarttır.{" "}
              <Link href="/hakkimda" className="text-white underline underline-offset-4 hover:text-white/80">
                Hakkımızda
              </Link>
            </p>
            <p className="mt-3 text-white/65">
              Önce işi ve müşteriyi dinleriz, sonra kapsamı yazılı teklife dökeriz. Tasarım onayından
              sonra sayfalar gelişir; kontrol ve revizyon turu tanımlıdır. Yayın gününde alan adı ve site
              sizin üzerinize alınır, küçük düzeltmeler teslim sonrası desteğin içindedir.
            </p>
          </div>
          <ol className="relative mt-14 grid gap-8 lg:grid-cols-5 lg:gap-5">
            <span className="absolute left-[1.15rem] top-3 hidden h-[calc(100%-1.5rem)] w-px bg-white/15 lg:left-0 lg:top-5 lg:block lg:h-px lg:w-full" aria-hidden />
            {steps.map((s, i) => (
              <li id={s.id} key={s.id} className="relative scroll-mt-28 pl-12 lg:pl-0">
                <span className="absolute left-0 top-0 flex size-9 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white shadow-[0_0_0_6px_rgba(8,126,164,0.25)] lg:relative">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-0 text-lg font-semibold text-white lg:mt-5">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="hizmetler" className="hairline section-pad" aria-labelledby="hizmetler-heading">
        <div className="container-x">
          <p className="text-xs font-semibold tracking-[0.16em] text-accent">HİZMETLER</p>
          <h2 id="hizmetler-heading" className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl">
            Web tasarım, SEO ve reklam hizmetleri
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Her hizmeti ölçülebilir bir hedefe bağlıyoruz: daha çok arama, daha çok teklif talebi.
            Detaylar ilgili sayfada.
          </p>
          <p className="mt-3 max-w-2xl text-muted">
            Kurumsal site, arama görünürlüğü, e-ticaret ve reklam aynı stüdyoda yürür. Böylece tasarım
            ile teknik iskelet birbirinden kopmaz. Hangi hizmetin size uyduğunu keşif görüşmesinde
            netleştiririz; burada yalnızca kapsamın yönünü görürsünüz.
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
          <h2 id="bolgeler-heading" className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Tokat’tan Türkiye’nin her yerine profesyonel web tasarım
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Her şehir için ayrı yerel sayfamız var. {upcomingCities.map((city) => city.name).join(", ")}{" "}
            tarafında da uzaktan çalışıyoruz. Yüz yüze veya görüntülü keşif; Türkiye geneline hizmet.
          </p>
          <p className="mt-3 max-w-2xl text-muted">
            Şehir sayfaları ince kapı sayfası değildir. O bölgedeki işletmenin sitesinde hangi ihtiyacın
            öne çıktığını, nasıl görüşüleceğini ve ilgili projeleri anlatır. Keşif Tokat’ta yüz yüze,
            diğer şehirlerde yerinde ya da görüntülü planlanır.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {regionList.map((city) => (
              <Link
                key={city.path}
                href={city.path}
                className="group flex h-full flex-col rounded-card border border-accent/15 bg-accent-mist p-6 transition-colors hover:border-accent hover:bg-white"
              >
                <h3 className="text-lg font-semibold text-accent">{city.name} Web Tasarım</h3>
                <p className="mt-2 flex-1 text-[0.95rem] text-muted">{city.intro}</p>
                <span className="mt-4 text-sm font-semibold text-ink group-hover:text-accent">
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
          <p className="mt-4 text-muted">
            Süre, fiyatın neye göre yazıldığı, alan adının kime ait olduğu ve yayından sonraki destek
            en çok sorulan konulardır. Kısa yanıtlar aşağıda. Aklınıza takılan başka bir şey varsa
            teklif formundan veya telefondan doğrudan sorun; kapsam yazılı teklifte ayrıca açılır.
          </p>
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
