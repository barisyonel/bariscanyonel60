import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";
import { postReadingTime } from "@/lib/reading-time";
import { site } from "@/lib/site";

const fmt = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function BlogCard({ post }: { post: Post }) {
  const minutes = postReadingTime(post);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-elevated motion-card hover:border-accent/50"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-elevated">
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          fill
          className="motion-media object-cover object-top"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <span className="absolute left-3 top-3 rounded-full border border-line/80 bg-base/80 px-2.5 py-0.5 text-xs text-accent backdrop-blur-sm">
          {post.region}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="rounded-full border border-line px-2.5 py-0.5">{minutes} dk okuma</span>
          <time dateTime={post.updated}>{fmt.format(new Date(post.updated))}</time>
          {post.tags?.slice(0, 2).map((t) => (
            <span key={t} className="rounded-full border border-line px-2.5 py-0.5">
              {t}
            </span>
          ))}
        </div>
        <h2 className="mt-3 text-xl font-semibold transition-colors group-hover:text-accent md:text-2xl">
          {post.title}
        </h2>
        <p className="mt-2.5 flex-1 text-sm text-muted md:text-base">{post.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4">
          <span className="text-xs text-muted">Yazar: {site.person}</span>
          <span className="text-sm text-accent transition-transform group-hover:translate-x-0.5">
            Rehberi oku →
          </span>
        </div>
      </div>
    </Link>
  );
}
