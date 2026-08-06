export type PricingPackage = {
  id: string;
  name: string;
  tagline: string;
  priceLabel: string;
  priceNote: string;
  features: readonly string[];
  ctaLabel: string;
  href: string;
  popular?: boolean;
};

/** Paket çerçeveleri — nihai tutar keşif sonrası yazılı teklifle netleşir */
export const pricingPackages: readonly PricingPackage[] = [
  {
    id: "baslangic",
    name: "Başlangıç",
    tagline: "Küçük işletme ve net vitrin ihtiyacı",
    priceLabel: "Keşiften sonra",
    priceNote: "Yazılı teklif · sürpriz yok",
    features: [
      "5–7 sayfalık kurumsal site",
      "Mobil öncelikli özel tasarım",
      "Temel SEO iskeleti",
      "WhatsApp / iletişim CTA",
      "5 iş günü teslim hedefi",
    ],
    ctaLabel: "Başlangıç için yazın",
    href: "/iletisim",
  },
  {
    id: "kurumsal",
    name: "Kurumsal",
    tagline: "Marka güveni ve dönüşüm odaklı",
    priceLabel: "Keşiften sonra",
    priceNote: "En çok tercih edilen paket",
    features: [
      "10+ sayfa / özel bölümler",
      "Özel tasarım + animasyon",
      "Teknik + yerel SEO",
      "Schema & hız optimizasyonu",
      "Revizyon turları tanımlı",
      "Yayın sonrası destek",
    ],
    ctaLabel: "Kurumsal teklif al",
    href: "/iletisim",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Büyüme: SEO, GEO ve reklam hazır",
    priceLabel: "Keşiften sonra",
    priceNote: "Ölçülebilir büyüme paketi",
    features: [
      "Kurumsal kapsamın tamamı",
      "E-ticaret veya gelişmiş panel",
      "GEO / AI görünürlük",
      "Meta Pixel + kampanya kurulumu",
      "Performans & raporlama",
      "Öncelikli destek",
    ],
    ctaLabel: "Premium keşif",
    href: "/iletisim",
  },
] as const;
