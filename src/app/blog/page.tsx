import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { meta } from "@/lib/seo";
import { getPostsSorted } from "@/lib/posts";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata = meta({
  title: "Blog: Web Tasarım, SEO ve GEO Rehberleri",
  description:
    "Tokat, Çanakkale, İzmir ve İstanbul’da web tasarım / web sitesi yaptırmak isteyenler için fiyat, süre, ajans seçimi, SEO ve GEO rehberleri (2026). BCY Dijital blog.",
  path: "/blog",
  image: "/logo-og.jpg",
  keywords: [
    "Tokat web tasarım",
    "Tokat web sitesi",
    "Çanakkale web tasarım",
    "İzmir web tasarım",
    "İstanbul web tasarım",
    "SEO",
    "GEO",
    "BCY Dijital blog",
  ],
});

export default function BlogPage() {
  const posts = getPostsSorted();
  return (
    <div className="container-x section-pad">
      <JsonLd
        data={breadcrumb([
          { name: "Ana Sayfa", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <Reveal>
        <p className="eyebrow">Blog · Tokat · Çanakkale · İzmir · İstanbul</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
          Blog: Tokat, Çanakkale, İzmir ve İstanbul web tasarım rehberleri
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          “Tokat web tasarım”, “Çanakkale web sitesi”, “İzmir kurumsal site”, “İstanbul web tasarım”
          ve benzeri aramalarda işletmelerin gerçekten sorduğu sorular: fiyat, süre, ajans seçimi,
          yerel SEO ve yapay zekâ görünürlüğü.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Yerel sayfalar:{" "}
          <Link href="/tokat-web-tasarim" className="link-underline text-accent">
            Tokat
          </Link>
          {" · "}
          <Link href="/canakkale-web-tasarim" className="link-underline text-accent">
            Çanakkale
          </Link>
          {" · "}
          <Link href="/izmir-web-tasarim" className="link-underline text-accent">
            İzmir
          </Link>
          {" · "}
          <Link href="/istanbul-web-tasarim" className="link-underline text-accent">
            İstanbul
          </Link>
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <BlogCard post={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
