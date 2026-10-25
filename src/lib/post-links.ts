import type { Post } from "./posts";

const linksBySlug: Record<string, NonNullable<Post["links"]>> = {
  "tokatta-web-tasarim-kim-yapiyor": [
    { href: "/tokat-web-tasarim", label: "Tokat işletmeleri için web tasarım" },
    { href: "/hizmetler/web-tasarim", label: "Kurumsal web tasarım hizmeti" },
    { href: "/projeler", label: "Tokat referansları" },
    { href: "/iletisim", label: "Keşif görüşmesi" },
  ],
  "tokatta-web-sitesi-kac-tl": [
    { href: "/tokat-web-tasarim", label: "Tokat’ta web sitesi hizmeti" },
    { href: "/hizmetler/web-tasarim", label: "Web tasarım kapsamı" },
    { href: "/hizmetler/e-ticaret", label: "E-ticaret kapsamı" },
    { href: "/iletisim", label: "Yazılı teklif alın" },
  ],
  "tokat-web-sitesi-ne-kadar-surer": [
    { href: "/tokat-web-tasarim", label: "web tasarım hizmetimiz" },
    { href: "/iletisim", label: "Takvimi konuşalım" },
    { href: "/projeler", label: "Teslim edilmiş işler" },
  ],
  "tokatta-kurumsal-web-sitesi": [
    { href: "/hizmetler/web-tasarim", label: "Kurumsal web tasarım" },
    { href: "/tokat-web-tasarim", label: "Tokat merkezli hizmet sayfası" },
    { href: "/projeler/guzubey-asansor", label: "Guzubey Asansör vaka çalışması" },
    { href: "/iletisim", label: "İletişim" },
  ],
  "tokat-web-tasarim-ajansi-nasil-secilir": [
    { href: "/tokat-web-tasarim", label: "Tokat’ta nasıl çalıştığımız" },
    { href: "/hizmetler/seo", label: "SEO hizmeti" },
    { href: "/projeler", label: "Portföy" },
    { href: "/hakkimda", label: "Barış Can Yönel" },
  ],
  "isletmeler-icin-seo-nereden-baslanir": [
    { href: "/hizmetler/seo", label: "SEO hizmeti" },
    { href: "/blog/tokatta-seo-ile-google-gorunurlugu", label: "Tokat’ta Google görünürlüğü" },
    { href: "/tokat-web-tasarim", label: "Yerel web sitesi sayfası" },
  ],
};

export function withPostLinks(post: Post): Post {
  if (post.links && post.links.length > 0) return post;
  const links = linksBySlug[post.slug];
  return links ? { ...post, links } : post;
}
