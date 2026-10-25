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
  quaternaryCity: "İstanbul",
  regions: ["Tokat", "Çanakkale", "İzmir", "İstanbul"] as const,
  description:
    "BCY Dijital, Barış Can Yönel tarafından Tokat merkezli yönetilen bir web tasarım stüdyosudur. Kurumsal web sitesi, e-ticaret, yerel SEO ve reklam hizmeti sunar.",
  sameAs: [
    "https://www.linkedin.com/in/bariscanyonel",
    "https://www.instagram.com/webtasarimbaris",
    "https://medium.com/@bariscanyonel",
  ],
} as const;

export function waLink(text: string) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`;
}

export const defaultWa = waLink(
  "Merhaba, web sitesi için ücretsiz keşif görüşmesi yapmak istiyorum."
);
