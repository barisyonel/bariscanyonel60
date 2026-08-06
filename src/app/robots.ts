import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

function hostFromDomain(domainUrl: string) {
  try {
    return new URL(domainUrl).host;
  } catch {
    return "bariscanyonel.com";
  }
}

/**
 * robots.txt — indekslemeye açık; sitemap bildirimi.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
    ],
    sitemap: `${site.domain}/sitemap.xml`,
    host: hostFromDomain(site.domain),
  };
}
