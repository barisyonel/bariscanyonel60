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
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    entry("", { priority: 1, changeFrequency: "weekly", lastModified: now }),
    entry("/hizmetler", { priority: 0.9, changeFrequency: "monthly", lastModified: now }),
    entry("/projeler", { priority: 0.9, changeFrequency: "weekly", lastModified: now }),
    entry("/blog", { priority: 0.8, changeFrequency: "weekly", lastModified: now }),
    entry("/sss", { priority: 0.7, changeFrequency: "monthly", lastModified: now }),
    entry("/hakkimda", { priority: 0.7, changeFrequency: "monthly", lastModified: now }),
    entry("/iletisim", { priority: 0.85, changeFrequency: "monthly", lastModified: now }),
    entry("/tokat-web-tasarim", { priority: 0.85, changeFrequency: "monthly", lastModified: now }),
    entry("/canakkale-web-tasarim", { priority: 0.8, changeFrequency: "monthly", lastModified: now }),
    entry("/izmir-web-tasarim", { priority: 0.8, changeFrequency: "monthly", lastModified: now }),
    entry("/istanbul-web-tasarim", { priority: 0.8, changeFrequency: "monthly", lastModified: now }),
    entry("/kvkk", { priority: 0.3, changeFrequency: "yearly", lastModified: now }),
    entry("/gizlilik-politikasi", { priority: 0.3, changeFrequency: "yearly", lastModified: now }),
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) =>
    entry(`/hizmetler/${s.slug}`, {
      priority: 0.85,
      changeFrequency: "monthly",
      lastModified: now,
    })
  );

  const projectPages: MetadataRoute.Sitemap = projects.map((p) =>
    entry(`/projeler/${p.slug}`, {
      // Yeni / öne çıkan referanslar biraz daha yüksek öncelik
      priority: p.slug === "prime-dizayn" ? 0.75 : 0.65,
      changeFrequency: "monthly",
      lastModified: now,
    })
  );

  const blogPages: MetadataRoute.Sitemap = posts.map((p) =>
    entry(`/blog/${p.slug}`, {
      priority: 0.6,
      changeFrequency: "yearly",
      lastModified: p.date,
    })
  );

  return [...staticPages, ...servicePages, ...projectPages, ...blogPages];
}
