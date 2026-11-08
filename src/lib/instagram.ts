export type InstagramMedia = {
  id: string;
  caption: string;
  category: string;
  cover: string;
  permalink: string;
  source: "live" | "curated";
};

const INSTAGRAM_PROFILE = "https://www.instagram.com/webtasarimbaris";

/** Curated fallback — gerçek Reels API yokken proje görselleriyle vitrin. */
const curatedFeed: InstagramMedia[] = [
  {
    id: "curated-1",
    caption: "Prime Dizayn — kurumsal web sitesi",
    category: "Web tasarım",
    cover: "/projects/prime-dizayn.jpg",
    permalink: INSTAGRAM_PROFILE,
    source: "curated",
  },
  {
    id: "curated-2",
    caption: "Dalyan Palmiye — konaklama sitesi",
    category: "Konaklama",
    cover: "/projects/dalyan-palmiye-resort.jpg",
    permalink: INSTAGRAM_PROFILE,
    source: "curated",
  },
  {
    id: "curated-3",
    caption: "Şamlıoğlu Hukuk — kurumsal vitrin",
    category: "Hukuk",
    cover: "/projects/samlioglu-hukuk.jpg",
    permalink: INSTAGRAM_PROFILE,
    source: "curated",
  },
  {
    id: "curated-4",
    caption: "Aevum Troia — marka sitesi",
    category: "Marka",
    cover: "/projects/aevum-troia.jpg",
    permalink: INSTAGRAM_PROFILE,
    source: "curated",
  },
  {
    id: "curated-5",
    caption: "Guzubey Asansör — yerel SEO",
    category: "SEO",
    cover: "/projects/guzubey-asansor.jpg",
    permalink: INSTAGRAM_PROFILE,
    source: "curated",
  },
  {
    id: "curated-6",
    caption: "Polat Mermer — sektörel site",
    category: "Sanayi",
    cover: "/projects/polat-mermer.jpg",
    permalink: INSTAGRAM_PROFILE,
    source: "curated",
  },
];

export function getInstagramProfileUrl() {
  return INSTAGRAM_PROFILE;
}

/**
 * Meta Graph API ile Reels/media çekmek için iskelet.
 * INSTAGRAM_ACCESS_TOKEN + INSTAGRAM_USER_ID yoksa curated fallback döner.
 */
export async function getInstagramFeed(): Promise<{
  items: InstagramMedia[];
  connected: boolean;
}> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!token || !userId) {
    return { items: curatedFeed, connected: false };
  }

  try {
    const url = new URL(`https://graph.facebook.com/v21.0/${userId}/media`);
    url.searchParams.set(
      "fields",
      "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp"
    );
    url.searchParams.set("access_token", token);
    url.searchParams.set("limit", "9");

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return { items: curatedFeed, connected: false };
    }

    const data = (await res.json()) as {
      data?: Array<{
        id: string;
        caption?: string;
        media_type?: string;
        media_url?: string;
        thumbnail_url?: string;
        permalink?: string;
      }>;
    };

    const items: InstagramMedia[] = (data.data ?? [])
      .filter((item) => item.media_type === "VIDEO" || item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM")
      .slice(0, 9)
      .map((item) => ({
        id: item.id,
        caption: (item.caption ?? "BCY Dijital")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 80),
        category: item.media_type === "VIDEO" ? "Video" : "Gönderi",
        cover: item.thumbnail_url || item.media_url || "/projects/prime-dizayn.jpg",
        permalink: item.permalink || INSTAGRAM_PROFILE,
        source: "live" as const,
      }));

    if (!items.length) {
      return { items: curatedFeed, connected: false };
    }

    return { items, connected: true };
  } catch {
    return { items: curatedFeed, connected: false };
  }
}
