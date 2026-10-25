import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PricingSection } from "@/components/sections/PricingSection";
import { tokatDistricts } from "@/lib/cities";
import { projects } from "@/lib/projects";
import { faqSchema, tokatPageSchema } from "@/lib/schema";
import { waLink } from "@/lib/site";
import {
  tokatFaq,
  tokatH1,
  tokatMeta,
  tokatOfferings,
  tokatProjectOrder,
  tokatSectors,
  tokatWhy,
} from "@/lib/tokat-landing";

const projectBySlug = new Map(projects.map((project) => [project.slug, project]));

export function TokatLanding() {
  const tokatProjects = tokatProjectOrder.flatMap((slug) => {
    const project = projectBySlug.get(slug);
    return project ? [project] : [];
  });

  return (
    <>
      <JsonLd data={[...tokatPageSchema(tokatMeta), faqSchema([...tokatFaq])]} />
      <article>
        <header className="container-x section-pad pb-0">
          <Breadcrumbs
            items={[
              { name: "Ana Sayfa", path: "/" },
              { name: "Tokat Web Tasarım", path: "/tokat-web-tasarim" },
            ]}
          />
          <p className="eyebrow mt-8">BCY Dijital · Tokat</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">{tokatH1}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            BCY Dijital, Tokat merkezli bir stüdyodur. Tokat’taki işletmelere kurumsal web sitesi,
            e-ticaret ve SEO hizmeti verir. Keşif Tokat’ta yüz yüze ya da görüntülü yapılabilir;
            teklif yazılıdır.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="/iletisim"
              analyticsEvent="proposal_cta"
              analyticsParams={{ cta_location: "tokat_hero" }}
            >
              Tokat Web Sitesi İçin Ücretsiz Teklif Al
            </ButtonLink>
            <ButtonLink
              href={waLink("Merhaba, Tokat’taki işletmem için web sitesi yaptırmak istiyorum.")}
              variant="ghost"
              external
            >
              WhatsApp’tan yazın
            </ButtonLink>
          </div>
        </header>

        <section className="container-x section-pad" aria-labelledby="tokat-ozel-tasarim">
          <h2 id="tokat-ozel-tasarim" className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Tokat’ta İşletmenize Özel Web Tasarım
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-[1.02rem] leading-relaxed text-muted">
            <p>
              Hazır tema üzerine logo yapıştırmıyoruz. Sektörünüz, müşteriniz ve teklif süreciniz
              tasarımın çıkış noktasıdır. Sayfa önce telefona göre kurulur; Tokat’ta arama yapan
              kişinin büyük kısmı mobil ekrandandır.
            </p>
            <p>
              Hız, dönüşümün parçasıdır. Yavaş açılan sayfa hem ziyaretçiyi hem tarama bütçesini
              kaybettirir. WhatsApp ve teklif formu, hizmeti anlatan metnin yanında durur; ziyaretçi
              kimi arayacağını aramaz.
            </p>
            <p>
              SEO burada anahtar kelime yığmak değildir. Başlık sırası, anlaşılır sayfa yapısı ve
              işletmenizin gerçekten verdiği hizmetin yazılması gerekir. Ayrıntı{" "}
              <Link href="/hizmetler/web-tasarim" className="text-accent underline underline-offset-4">
                kurumsal web tasarım
              </Link>{" "}
              ve{" "}
              <Link href="/hizmetler/seo" className="text-accent underline underline-offset-4">
                SEO hizmeti
              </Link>{" "}
              sayfalarında.
            </p>
          </div>
        </section>

        <section className="hairline section-pad" aria-labelledby="tokat-hizmetler">
          <div className="container-x">
            <h2 id="tokat-hizmetler" className="max-w-3xl text-3xl font-semibold md:text-4xl">
              Tokat Web Tasarım Hizmetlerimiz
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {tokatOfferings.map((item) => (
                <section key={item.title} className="rounded-card border border-line bg-elevated p-6">
                  <h3 className="text-lg font-semibold">
                    <Link href={item.href} className="hover:text-accent">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="container-x section-pad" aria-labelledby="tokat-projeler">
          <h2 id="tokat-projeler" className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Tokat’ta Yaptığımız Web Tasarım Projeleri
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Aşağıdakiler canlı Tokat işleridir. Her birinin kendi problemi vardır; aynı paragrafı
            kopyalamıyoruz. Tamamı{" "}
            <Link href="/projeler" className="text-accent underline underline-offset-4">
              projeler
            </Link>{" "}
            sayfasında.
          </p>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {tokatProjects.map((project) => (
              <article key={project.slug} className="grid gap-6 py-8 md:grid-cols-[minmax(0,280px)_1fr] md:py-10">
                {project.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-line bg-elevated">
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? `${project.name} web sitesi`}
                      fill
                      sizes="(max-width: 768px) 100vw, 280px"
                      className="object-cover object-top"
                    />
                  </div>
                ) : null}
                <div>
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {project.sector} · {project.city}
                  </p>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/80">
                    <span className="font-medium text-ink">Problem. </span>
                    {project.problem}
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80">
                    <span className="font-medium text-ink">Çözüm. </span>
                    {project.solution}
                  </p>
                  {project.tech && project.tech.length > 0 ? (
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80">
                      <span className="font-medium text-ink">Teknoloji. </span>
                      {project.tech.join(", ")}
                    </p>
                  ) : null}
                  {project.caseStudy ? (
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80">
                      <span className="font-medium text-ink">SEO. </span>
                      {project.caseStudy.seo}
                    </p>
                  ) : null}
                  <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline underline-offset-4"
                    >
                      Canlı proje
                    </a>
                    <Link
                      href={`/projeler/${project.slug}`}
                      className="text-ink underline underline-offset-4"
                    >
                      Vaka çalışması
                    </Link>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="hairline section-pad" aria-labelledby="tokat-fiyat">
          <div className="container-x">
            <h2 id="tokat-fiyat" className="max-w-3xl text-3xl font-semibold md:text-4xl">
              Tokat Web Tasarım Fiyatları
            </h2>
            <div className="mt-5 max-w-2xl space-y-4 text-[1.02rem] leading-relaxed text-muted">
              <p>
                Burada sabit bir Tokat fiyat listesi yok. Keşif yapılmadan söylenen rakam ya eksik
                kalır ya da iş bitince sürpriz çıkar. Tutar şu başlıklara göre değişir: sayfa sayısı,
                özel tasarım, e-ticaret, yönetim paneli, özel yazılım, SEO, içerik ve entegrasyonlar.
              </p>
              <p>
                Aşağıdaki çerçeveler kapsamı anlatır. Nihai tutar yazılı teklifte kalem kalem durur.
                2026 için maliyetin nasıl okunacağını{" "}
                <Link
                  href="/blog/tokatta-web-sitesi-kac-tl"
                  className="text-accent underline underline-offset-4"
                >
                  fiyat rehberinde
                </Link>{" "}
                anlattık.
              </p>
            </div>
            <div className="mt-10">
              <PricingSection
                embedded
                ctaHref="/iletisim"
                ctaLocation="tokat_pricing"
              />
            </div>
            <div className="mt-8">
              <ButtonLink
                href="/iletisim"
                analyticsEvent="proposal_cta"
                analyticsParams={{ cta_location: "tokat_pricing" }}
              >
                Tokat Web Sitesi İçin Ücretsiz Teklif Al
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="container-x section-pad" aria-labelledby="tokat-neden">
          <h2 id="tokat-neden" className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Neden Tokat’ta BCY Dijital?
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {tokatWhy.map((item) => (
              <li key={item} className="rounded-card border border-line bg-elevated p-5 text-[0.95rem] text-ink/80">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-muted">
            Çalışma şeklimiz ve kurucu için{" "}
            <Link href="/hakkimda" className="text-accent underline underline-offset-4">
              hakkımızda
            </Link>{" "}
            sayfasına bakabilirsiniz. “Şehrin en iyi ajansı” demiyoruz; karar için canlı işlere ve
            yazılı teklife bakın.
          </p>
        </section>

        <section className="hairline section-pad" aria-labelledby="tokat-sektor">
          <div className="container-x">
            <h2 id="tokat-sektor" className="max-w-3xl text-3xl font-semibold md:text-4xl">
              Tokat’ta Hangi İşletmelere Web Sitesi Yapıyoruz?
            </h2>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
              {tokatSectors.join(", ")}. Her sektör için ayrı şehir sayfası açmıyoruz. Menü, portföy,
              ürün kataloğu veya randevu ihtiyacı sizin sitenizin içinde çözülür. Tokat’ta
              yayınlanmış işler özellikle asansör, hukuk, sanayi, mermer, otomotiv, mühendislik ve
              inşaat tarafında.
            </p>
          </div>
        </section>

        <section className="container-x section-pad" aria-labelledby="tokat-ilce">
          <h2 id="tokat-ilce" className="max-w-3xl text-3xl font-semibold md:text-4xl">
            Tokat ve İlçelerinde Web Tasarım Hizmeti
          </h2>
          <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
            Görüşme ve üretimin merkezi Tokat Merkez. Erbaa, Turhal, Niksar, Zile, Reşadiye, Almus,
            Pazar, Artova, Sulusaray, Yeşilyurt ve Başçiftlik’teki işletmelerle de çalışırız; Turhal
            için Mufat İnşaat bunun örneğidir. İlçe adıyla kopyalanmış sayfalar açmıyoruz. Bir ilçede
            anlatılacak gerçek iş biriktiğinde o sayfa ayrıca yazılır.
          </p>
          <p className="mt-3 text-sm text-muted">{tokatDistricts.join(" · ")}</p>
        </section>

        <section className="hairline section-pad" aria-labelledby="tokat-sss">
          <div className="container-x max-w-3xl">
            <h2 id="tokat-sss" className="text-3xl font-semibold md:text-4xl">
              Tokat web sitesi hakkında sorular
            </h2>
            <div className="mt-8">
              <FaqAccordion items={tokatFaq} />
            </div>
            <p className="mt-8 text-muted">
              Başka bir sorunuz varsa{" "}
              <Link href="/iletisim" className="text-accent underline underline-offset-4">
                iletişim
              </Link>{" "}
              formundan yazın veya{" "}
              <Link href="/blog" className="text-accent underline underline-offset-4">
                blogdaki rehberlere
              </Link>{" "}
              bakın.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
