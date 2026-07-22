import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

function hostFromDomain(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return "bariscanyonel.com";
  }
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${site.domain}/sitemap.xml`,
    host: hostFromDomain(site.domain),
  };
}
