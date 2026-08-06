export type ServiceIconId =
  | "web-tasarim"
  | "e-ticaret"
  | "seo"
  | "geo"
  | "meta-reklam"
  | "mobil-uyumluluk"
  | "default";

/** Slug → kart ikonu (server & client güvenli) */
export function serviceIconId(slug: string): ServiceIconId {
  switch (slug) {
    case "web-tasarim":
    case "e-ticaret":
    case "seo":
    case "geo":
    case "meta-reklam":
    case "mobil-uyumluluk":
      return slug;
    default:
      return "default";
  }
}
