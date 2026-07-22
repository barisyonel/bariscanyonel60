export const site = {
  name: "BCY Dijital",
  person: "Barış Can Yönel",
  domain: "https://bariscanyonel.com",
  phone: "+90 530 112 94 40",
  phoneRaw: "905301129440",
  email: "info@bariscanyonel.com",
  city: "Tokat",
  secondaryCity: "Çanakkale",
  tertiaryCity: "İzmir",
  regions: ["Tokat", "Çanakkale", "İzmir"] as const,
  description:
    "Tokat web tasarım stüdyosu BCY Dijital: kurumsal web sitesi, e-ticaret, yerel SEO ve GEO. 5 iş günü teslim, şeffaf teklif — Tokat, Çanakkale ve İzmir.",
  sameAs: [
    "https://www.linkedin.com/in/bariscanyonel",
    "https://www.instagram.com/bcydijital",
    "https://medium.com/@bariscanyonel",
  ],
} as const;

export function waLink(text: string) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`;
}

export const defaultWa = waLink(
  "Merhaba, web sitesi için ücretsiz keşif görüşmesi yapmak istiyorum."
);
