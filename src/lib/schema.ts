import { tokatDistricts } from "./cities";
import { site } from "./site";

export function localBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${site.domain}/#business`,
    name: site.name,
    description: site.description,
    url: site.domain,
    telephone: site.phone,
    email: site.email,
    image: `${site.domain}/logo.png`,
    logo: `${site.domain}/logo.png`,
    founder: { "@id": `${site.domain}/#person` },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tokat",
      addressRegion: "Tokat",
      addressCountry: "TR",
    },
    areaServed: [
      { "@type": "City", name: "Tokat" },
      ...tokatDistricts.map((name) => ({ "@type": "City" as const, name })),
      { "@type": "City", name: "Çanakkale" },
      { "@type": "City", name: "İzmir" },
      { "@type": "City", name: "İstanbul" },
      { "@type": "Country", name: "Türkiye" },
    ],
    knowsAbout: [
      "Kurumsal web sitesi",
      "E-ticaret",
      "Yerel SEO",
      "Teknik SEO",
      "Next.js",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dijital hizmetler",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kurumsal web tasarım" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-ticaret" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "GEO" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta reklam yönetimi" } },
      ],
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    priceRange: "₺₺",
    sameAs: site.sameAs,
  };
}

export function person() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.domain}/#person`,
    name: site.person,
    jobTitle: "Web Tasarımcı ve Geliştirici",
    description:
      "Tokat merkezli BCY Dijital'in kurucusu. Kurumsal web tasarım, e-ticaret, SEO, GEO ve Meta reklam ile yerel işletmelere dijital kanal kurar.",
    worksFor: { "@id": `${site.domain}/#business` },
    url: `${site.domain}/hakkimda`,
    image: `${site.domain}/logo.png`,
    sameAs: site.sameAs,
    knowsAbout: ["Web tasarım", "Next.js", "SEO", "GEO", "Meta Ads", "Tokat"],
    address: { "@type": "PostalAddress", addressLocality: "Tokat", addressCountry: "TR" },
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${site.domain}/hakkimda#about`,
    name: "Hakkımızda — BCY Dijital",
    description:
      "BCY Dijital, Tokat merkezli web tasarım stüdyosudur. Kurumsal site, e-ticaret, SEO, GEO ve Meta reklam hizmeti sunar.",
    url: `${site.domain}/hakkimda`,
    mainEntity: { "@id": `${site.domain}/#business` },
    about: { "@id": `${site.domain}/#person` },
    inLanguage: "tr-TR",
  };
}

export function serviceSchema(title: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    provider: { "@id": `${site.domain}/#business` },
    areaServed: ["Tokat", "Çanakkale", "İzmir", "İstanbul", "Türkiye"],
    url: `${site.domain}/hizmetler/${slug}`,
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function webPageSchema(opts?: { title?: string; description?: string; path?: string }) {
  const path = opts?.path ?? "/";
  const url = path === "/" ? site.domain : `${site.domain}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": path === "/" ? `${site.domain}/#webpage` : `${url}#webpage`,
    name: opts?.title || `${site.name} | Kurumsal Web Sitesi`,
    description: opts?.description || site.description,
    url,
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${site.domain}/#website` },
    about: { "@id": `${site.domain}/#business` },
    primaryImageOfPage: { "@type": "ImageObject", url: `${site.domain}/logo-og.jpg` },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.domain}/#website`,
    name: site.name,
    url: site.domain,
    inLanguage: "tr-TR",
    publisher: { "@id": `${site.domain}/#business` },
    description: site.description,
  };
}

export function tokatPageSchema(opts: { title: string; description: string }) {
  const url = `${site.domain}/tokat-web-tasarim`;
  return [
    webPageSchema({ title: opts.title, description: opts.description, path: "/tokat-web-tasarim" }),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Tokat web tasarım",
      serviceType: "Web tasarım",
      description: opts.description,
      url,
      provider: { "@id": `${site.domain}/#business` },
      areaServed: { "@type": "City", name: "Tokat" },
    },
  ];
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: `${site.domain}${it.path}`,
    })),
  };
}

export function articleSchema(p: {
  title: string;
  description: string;
  date: string;
  updated?: string;
  slug: string;
  coverImage?: string;
  region?: string;
}) {
  const image = p.coverImage
    ? p.coverImage.startsWith("http")
      ? p.coverImage
      : `${site.domain}${p.coverImage}`
    : `${site.domain}/logo-og.jpg`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    image: [image],
    datePublished: p.date,
    dateModified: p.updated || p.date,
    inLanguage: "tr-TR",
    author: { "@id": `${site.domain}/#person` },
    publisher: {
      "@type": "Organization",
      "@id": `${site.domain}/#business`,
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.domain}/logo.png` },
    },
    mainEntityOfPage: `${site.domain}/blog/${p.slug}`,
    about: [
      { "@type": "Thing", name: "Web tasarım" },
      ...(p.region && p.region !== "Genel" ? [{ "@type": "Place", name: p.region }] : []),
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "article p"],
    },
  };
}

/** Explicit Organization (site-wide / home) */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.domain}/#organization`,
    name: site.name,
    url: site.domain,
    logo: `${site.domain}/logo.png`,
    email: site.email,
    telephone: site.phone,
    founder: { "@id": `${site.domain}/#person` },
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tokat",
        addressCountry: "TR",
      },
    },
    sameAs: site.sameAs,
  };
}

export function imageObjectSchema(opts: {
  url: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: opts.url,
    url: opts.url,
    caption: opts.caption || site.name,
    width: opts.width || 1200,
    height: opts.height || 630,
    creditText: site.name,
  };
}

/** /projeler sayfası — Google için proje listesi */
export function projectsItemListSchema(
  items: { name: string; slug: string; summary: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} referans projeler`,
    itemListElement: items.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${site.domain}/projeler/${p.slug}`,
      description: p.summary,
    })),
  };
}
