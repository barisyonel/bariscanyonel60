import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumb, faqSchema, imageObjectSchema } from "@/lib/schema";
import { meta } from "@/lib/seo";
import { posts, getPost, getPostsSorted } from "@/lib/posts";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import { postReadingTime } from "@/lib/reading-time";
import { slugifyHeading } from "@/lib/slugify";
import { defaultWa, site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return meta({
    title: p.title,
    description: p.description,
    path: `/blog/${p.slug}`,
    image: p.coverImage,
    type: "article",
    publishedTime: p.date,
    modifiedTime: p.updated,
    keywords: [
      ...(p.tags || []),
      p.region,
      "Tokat web tasarım",
      "BCY Dijital",
      "SEO",
      "GEO",
    ],
  });
}

const fmt = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" });

function ctaByRegion(region: string) {
  if (region === "Çanakkale") {
    return {
      title: "Çanakkale işletmeniz için konuşalım mı?",
      cityHref: "/canakkale-web-tasarim",
      cityLabel: "Çanakkale Web Tasarım",
    };
  }
  if (region === "İzmir") {
    return {
      title: "İzmir işletmeniz için konuşalım mı?",
      cityHref: "/izmir-web-tasarim",
      cityLabel: "İzmir Web Tasarım",
    };
  }
  if (region === "İstanbul") {
    return {
      title: "İstanbul işletmeniz için konuşalım mı?",
      cityHref: "/istanbul-web-tasarim",
      cityLabel: "İstanbul Web Tasarım",
    };
  }
  return {
    title: "Tokat’taki işletmeniz için konuşalım mı?",
    cityHref: "/tokat-web-tasarim",
    cityLabel: "Tokat Web Tasarım",
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const related = getPostsSorted()
    .filter((x) => x.slug !== p.slug)
    .slice(0, 3);

  const cta = ctaByRegion(p.region);
  const minutes = postReadingTime(p);
  const toc = p.sections.map((s) => ({ id: slugifyHeading(s.h), text: s.h }));
  const coverUrl = p.coverImage.startsWith("http")
    ? p.coverImage
    : `${site.domain}${p.coverImage}`;

  return (
    <article className="container-x section-pad">
      <JsonLd
        data={[
          articleSchema(p),
          faqSchema(p.faq.length > 0 ? p.faq : [{ q: p.title, a: p.directAnswer }]),
          breadcrumb([
            { name: "Ana Sayfa", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: p.title, path: `/blog/${p.slug}` },
          ]),
          imageObjectSchema({
            url: coverUrl,
            caption: p.coverAlt,
          }),
        ]}
      />

      <div className="mx-auto grid max-w-5xl gap-10 xl:grid-cols-[minmax(0,1fr)_14rem]">
        <Reveal>
          <div className="mx-auto max-w-2xl xl:mx-0">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-accent">
                {p.region}
              </span>
              {p.tags?.slice(0, 2).map((t) => (
                <span key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs">
                  {t}
                </span>
              ))}
              <span className="rounded-full border border-line px-2.5 py-0.5 text-xs">
                {minutes} dk okuma
              </span>
              <time dateTime={p.updated}>Güncellendi: {fmt.format(new Date(p.updated))}</time>
            </div>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">{p.title}</h1>
            <p className="mt-3 text-sm text-muted">
              Yazar: <span className="text-ink">{site.person}</span>
              {" · "}
              Yayın: <time dateTime={p.date}>{fmt.format(new Date(p.date))}</time>
            </p>

            <div className="relative mt-8 aspect-[21/9] overflow-hidden rounded-card border border-line bg-elevated sm:aspect-[2/1]">
              <Image
                src={p.coverImage}
                alt={p.coverAlt}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 672px) 100vw, 672px"
              />
            </div>

            <p className="mt-8 rounded-card border-l-2 border-accent bg-elevated p-5 text-lg text-[#c2cedd]">
              {p.directAnswer}
            </p>

            {p.highlights.length > 0 && (
              <div className="mt-8 rounded-card border border-line bg-elevated p-5">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Öne çıkanlar
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mobile TOC */}
            {toc.length > 1 && (
              <nav
                aria-label="İçindekiler"
                className="mt-8 rounded-card border border-line bg-elevated/60 p-5 xl:hidden"
              >
                <p className="eyebrow mb-3">İçindekiler</p>
                <ol className="space-y-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="link-underline text-sm text-muted hover:text-accent">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="prose-bcy mt-10 space-y-10">
              {p.sections.map((s) => {
                const id = slugifyHeading(s.h);
                return (
                  <section key={s.h} id={id}>
                    <h2>{s.h}</h2>
                    {s.paragraphs.map((par, i) => (
                      <p key={i}>{par}</p>
                    ))}
                    {s.bullets && s.bullets.length > 0 && (
                      <ul className="my-4 list-disc space-y-1.5 pl-5 text-muted">
                        {s.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                    {s.link && (
                      <p>
                        İlgili okuma:{" "}
                        <a
                          href={s.link.href}
                          target="_blank"
                          rel="noopener"
                          className="link-underline text-accent"
                        >
                          {s.link.label}
                        </a>
                        {s.link.note && <> — {s.link.note}</>}
                      </p>
                    )}
                    {s.image && (
                      <div className="relative mt-6 aspect-16/10 overflow-hidden rounded-card border border-line bg-elevated">
                        <Image
                          src={s.image}
                          alt={s.imageAlt || s.h}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 672px) 100vw, 672px"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            {p.faq.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-semibold">Sık sorulanlar</h2>
                <div className="mt-5 space-y-3">
                  {p.faq.map((f) => (
                    <details
                      key={f.q}
                      className="rounded-card border border-line bg-elevated p-5"
                    >
                      <summary className="cursor-pointer list-none font-semibold">{f.q}</summary>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 rounded-card border border-line bg-elevated p-7">
              <h2 className="text-xl font-semibold">{cta.title}</h2>
              <p className="mt-2 text-muted">
                15 dakikalık ücretsiz keşif görüşmesinde durumunuza özel yol haritası çıkarıyoruz.{" "}
                <Link href="/sss" className="link-underline text-accent">
                  Önce SSS&apos;ye
                </Link>{" "}
                veya{" "}
                <Link href={cta.cityHref} className="link-underline text-accent">
                  {cta.cityLabel}
                </Link>{" "}
                sayfasına bakabilirsiniz.
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                <MagneticButton href="/iletisim">Ücretsiz Keşif Görüşmesi</MagneticButton>
                <MagneticButton href={defaultWa} variant="ghost" external>
                  WhatsApp
                </MagneticButton>
              </div>
            </div>

            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="text-lg font-semibold">İlgili yazılar</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group motion-card overflow-hidden rounded-card border border-line bg-elevated hover:border-accent/50"
                    >
                      <div className="relative aspect-16/10 bg-elevated">
                        <Image
                          src={r.coverImage}
                          alt={r.coverAlt}
                          fill
                          className="motion-media object-cover object-top"
                          sizes="200px"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3">
                        <p className="text-xs text-muted">{postReadingTime(r)} dk</p>
                        <p className="mt-1 text-sm font-semibold group-hover:text-accent">{r.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Reveal>

        <aside className="hidden xl:block">
          <BlogTableOfContents items={toc} />
        </aside>
      </div>
    </article>
  );
}
