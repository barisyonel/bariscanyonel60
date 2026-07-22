import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const statics = [
    "", "/hizmetler", "/projeler", "/blog", "/sss", "/hakkimda", "/iletisim",
    "/tokat-web-tasarim", "/canakkale-web-tasarim", "/izmir-web-tasarim", "/kvkk",
  ].map((p) => ({ url: `${site.domain}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 }));

  return [
    ...statics,
    ...services.map((s) => ({ url: `${site.domain}/hizmetler/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...projects.map((p) => ({ url: `${site.domain}/projeler/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
    ...posts.map((p) => ({ url: `${site.domain}/blog/${p.slug}`, lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
