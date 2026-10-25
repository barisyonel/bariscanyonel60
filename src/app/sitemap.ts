import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function url(path: string) {
  return `${site.domain}${path}`;
}

function entry(
  path: string,
  opts: {
    priority: number;
    changeFrequency: ChangeFrequency;
    lastModified?: Date | string;
  }
): MetadataRoute.Sitemap[number] {
  return {
    url: url(path),
    lastModified: opts.lastModified ?? new Date(),
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
  };
}

/**
 * Dinamik sitemap — tüm hizmet, proje ve blog URL’leri.
 * Yeni proje (ör. prime-dizayn) projects[]’e eklenince otomatik dahil olur.
 */
const CONTENT_UPDATED = "2026-10-25";
const OLDER = "2026-07-15";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    entry("", { priority: 1, changeFrequency: "weekly", lastModified: CONTENT_UPDATED }),
    entry("/hizmetler", { priority: 0.9, changeFrequency: "monthly", lastModified: OLDER }),
    entry("/projeler", { priority: 0.9, changeFrequency: "weekly", lastModified: OLDER }),
    entry("/blog", { priority: 0.8, changeFrequency: "weekly", lastModified: CONTENT_UPDATED }),
    entry("/sss", { priority: 0.7, changeFrequency: "monthly", lastModified: OLDER }),
    entry("/hakkimda", { priority: 0.7, changeFrequency: "monthly", lastModified: OLDER }),
    entry("/iletisim", { priority: 0.85, changeFrequency: "monthly", lastModified: OLDER }),
    entry("/tokat-web-tasarim", { priority: 0.95, changeFrequency: "monthly", lastModified: CONTENT_UPDATED }),
    entry("/canakkale-web-tasarim", { priority: 0.8, changeFrequency: "monthly", lastModified: OLDER }),
    entry("/izmir-web-tasarim", { priority: 0.8, changeFrequency: "monthly", lastModified: OLDER }),
    entry("/istanbul-web-tasarim", { priority: 0.8, changeFrequency: "monthly", lastModified: OLDER }),
    entry("/kvkk", { priority: 0.3, changeFrequency: "yearly", lastModified: "2026-06-01" }),
    entry("/gizlilik-politikasi", { priority: 0.3, changeFrequency: "yearly", lastModified: "2026-06-01" }),
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) =>
    entry(`/hizmetler/${s.slug}`, {
      priority: 0.85,
      changeFrequency: "monthly",
      lastModified: OLDER,
    })
  );

  const projectPages: MetadataRoute.Sitemap = projects.map((p) =>
    entry(`/projeler/${p.slug}`, {
      priority: p.slug === "prime-dizayn" ? 0.75 : 0.65,
      changeFrequency: "monthly",
      lastModified: p.updated ?? OLDER,
    })
  );

  const blogPages: MetadataRoute.Sitemap = posts.map((p) =>
    entry(`/blog/${p.slug}`, {
      priority: p.region === "Tokat" ? 0.7 : 0.6,
      changeFrequency: "yearly",
      lastModified: p.updated || p.date,
    })
  );

  return [...staticPages, ...servicePages, ...projectPages, ...blogPages];
}
