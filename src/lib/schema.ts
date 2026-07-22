import { site } from "./site";

export function localBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${site.domain}/#business`,
    name: site.name,
    alternateName: "BCY Dijital Tokat Web Tasarım",
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.3235,
      longitude: 36.5522,
    },
    areaServed: [
      { "@type": "City", name: "Tokat" },
      { "@type": "City", name: "Çanakkale" },
      { "@type": "City", name: "İzmir" },
      { "@type": "Country", name: "Türkiye" },
    ],
    knowsAbout: [
      "Tokat web tasarım",
      "Kurumsal web sitesi",
      "E-ticaret",
      "Yerel SEO",
      "GEO",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dijital hizmetler",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kurumsal web tasarım" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-ticaret" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "GEO" } },
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
      "Tokat merkezli BCY Dijital'in kurucusu. Kurumsal web tasarım, e-ticaret, SEO ve GEO ile yerel işletmelere dijital kanal kurar.",
    worksFor: { "@id": `${site.domain}/#business` },
    url: `${site.domain}/hakkimda`,
    image: `${site.domain}/logo.png`,
    sameAs: site.sameAs,
    knowsAbout: ["Web tasarım", "Next.js", "SEO", "GEO", "Tokat"],
    address: { "@type": "PostalAddress", addressLocality: "Tokat", addressCountry: "TR" },
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${site.domain}/hakkimda#about`,
    name: "Hakkımızda — BCY Dijital Tokat Web Tasarım",
    description:
      "BCY Dijital, Tokat merkezli web tasarım stüdyosudur. Kurumsal site, e-ticaret, SEO ve GEO hizmeti sunar.",
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
    areaServed: ["Tokat", "Çanakkale", "İzmir", "Türkiye"],
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

export function webPageSchema(opts?: { title?: string; description?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.domain}/#webpage`,
    name: opts?.title || "Tokat Web Tasarım | BCY Dijital",
    description: opts?.description || site.description,
    url: site.domain,
    inLanguage: "tr-TR",
    isPartOf: { "@type": "WebSite", "@id": `${site.domain}/#website`, name: site.name, url: site.domain },
    about: { "@id": `${site.domain}/#business` },
    primaryImageOfPage: { "@type": "ImageObject", url: `${site.domain}/logo.png` },
  };
}

export function reviewsSchema(
  items: { quote: string; company: string; name: string; projectSlug: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.domain}/#business`,
    name: site.name,
    review: items.map((t) => ({
      "@type": "Review",
      reviewBody: t.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Organization",
        name: t.company,
      },
      itemReviewed: {
        "@type": "Service",
        name: "Web tasarım",
        url: `${site.domain}/projeler/${t.projectSlug}`,
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(items.length),
      bestRating: "5",
    },
  };
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
      { "@type": "Thing", name: "Tokat web tasarım" },
      ...(p.region ? [{ "@type": "Place", name: p.region }] : []),
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
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tokat",
        addressCountry: "TR",
      },
    },
    sameAs: site.sameAs,
    parentOrganization: { "@id": `${site.domain}/#business` },
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
