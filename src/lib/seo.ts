import type { Metadata } from "next";
import { site } from "./site";

export function meta(opts: {
  title: string;
  description: string;
  path: string;
  /** Mutlak veya göreli görsel yolu */
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
}): Metadata {
  const url = `${site.domain}${opts.path}`;
  const imagePath = opts.image || `/og?title=${encodeURIComponent(opts.title)}`;
  const imageUrl = imagePath.startsWith("http") ? imagePath : `${site.domain}${imagePath}`;

  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.name,
      locale: "tr_TR",
      type: opts.type === "article" ? "article" : "website",
      ...(opts.type === "article" && opts.publishedTime
        ? {
            publishedTime: opts.publishedTime,
            modifiedTime: opts.modifiedTime || opts.publishedTime,
          }
        : {}),
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [imageUrl],
    },
  };
}
