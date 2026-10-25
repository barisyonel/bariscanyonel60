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
    tagline: "Küçük işletmeler ve yeni markalar için",
    priceLabel: "Keşiften sonra",
    priceNote: "Yazılı teklif · sürpriz yok",
    features: [
      "5–7 sayfalık kurumsal site",
      "Mobil öncelikli özel tasarım",
      "Temel SEO iskeleti",
      "WhatsApp / iletişim CTA",
      "5 iş günü teslim hedefi",
    ],
    ctaLabel: "Fiyat Teklifi Al",
    href: "/#teklif",
  },
  {
    id: "kurumsal",
    name: "Kurumsal",
    tagline: "Profesyonel dijital kimlik isteyen işletmeler için",
    priceLabel: "Keşiften sonra",
    priceNote: "Yazılı teklif · sürpriz yok",
    features: [
      "10+ sayfa / özel bölümler",
      "Özel tasarım + animasyon",
      "Teknik + yerel SEO",
      "Schema & hız optimizasyonu",
      "Revizyon turları tanımlı",
      "Yayın sonrası destek",
    ],
    ctaLabel: "Ücretsiz Teklif Al",
    href: "/#teklif",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Google, SEO, GEO ve dijital büyümeye odaklanan markalar için",
    priceLabel: "Keşiften sonra",
    priceNote: "Yazılı teklif · sürpriz yok",
    features: [
      "Kurumsal kapsamın tamamı",
      "E-ticaret veya gelişmiş panel",
      "GEO / AI görünürlük",
      "Meta Pixel + kampanya kurulumu",
      "Performans & raporlama",
      "Öncelikli destek",
    ],
    ctaLabel: "Projemi Fiyatlandır",
    href: "/#teklif",
  },
] as const;
