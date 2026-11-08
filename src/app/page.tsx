import Link from "next/link";
import { Hero } from "@/components/hero/Hero";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ClientLogoStrip } from "@/components/sections/ClientLogoStrip";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { CreativeShowcase } from "@/components/sections/CreativeShowcase";
import { InstagramReels } from "@/components/sections/InstagramReels";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ServicesExperience } from "@/components/sections/ServicesExperience";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CapabilitiesBoard } from "@/components/sections/CapabilitiesBoard";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { JsonLd } from "@/components/JsonLd";
import {
  faqSchema,
  webPageSchema,
  organizationSchema,
  imageObjectSchema,
} from "@/lib/schema";
import { meta } from "@/lib/seo";
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

const featuredSlugs = [
  "prime-dizayn",
  "turanlar-ticaret",
  "dalyan-palmiye-resort",
  "samlioglu-hukuk",
  "aevum-troia",
  "guzubey-asansor",
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

      <Hero />
      <CreativeShowcase />
      <ClientLogoStrip />
      <TrustBar />
      <SelectedWork projects={featuredProjects} />
      <ServicesExperience />
      <CapabilitiesBoard />
      <InstagramReels />
      <WhyUsSection />
      <ProcessTimeline />
      <TestimonialsSection items={testimonials} title="İşletmeler neden bizi seçiyor?" />
      <PricingSection />
      <QuoteSection />

      <section id="geo" className="section-pad" aria-labelledby="geo-heading">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">SEO ve GEO</p>
            <h2 id="geo-heading" className="mt-3 font-display text-3xl font-bold md:text-4xl">
              Güzel olsun, bulunabilir de olsun
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
              <li
                key={t}
                className="flex items-start gap-3 rounded-card border border-accent/20 bg-accent-mist px-4 py-4 text-[0.97rem]"
              >
                <span
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-[#090b12]"
                  aria-hidden
                >
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TechStackSection />

      <section id="bolgeler" className="hairline section-pad" aria-labelledby="bolgeler-heading">
        <div className="container-x">
          <h2
            id="bolgeler-heading"
            className="max-w-3xl font-display text-3xl font-bold tracking-tight md:text-5xl"
          >
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
                className="group flex h-full flex-col border border-line bg-elevated p-6 transition-colors hover:border-accent/40"
              >
                <h3 className="font-display text-lg font-bold text-accent">{city.name} Web Tasarım</h3>
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
            <h2 id="sss-heading" className="font-display text-3xl font-bold md:text-4xl">
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
