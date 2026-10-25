export const cities = {
  tokat: {
    name: "Tokat",
    path: "/tokat-web-tasarim",
    title: "Tokat Web Tasarım — Yerel İşletmeler İçin",
    heroTitle: "Tokat Web Tasarım: yerel, hızlı ve ölçülebilir kurumsal siteler",
    intro:
      "BCY Dijital, Tokat merkezli bir web tasarım stüdyosudur. Tokat'taki işletmeler için kurumsal web sitesi, e-ticaret ve SEO hizmeti sunar; görüşmeler yüz yüze ya da çevrim içi yapılabilir.",
    why: [
      "Tokat pazarını biliyoruz: asansörden emlağa, sigortadan otomotive bu şehirde iş yaptık.",
      "Yüz yüze görüşme imkânı — projenizi masada, çay eşliğinde konuşuruz.",
      "Yerel SEO'da 'Tokat + sektörünüz' aramalarına odaklanırız; İstanbul ajansları bunu es geçer.",
    ],
    sectors: "asansör, gayrimenkul, otomotiv, sigorta, mühendislik ve gıda",
  },
  canakkale: {
    name: "Çanakkale",
    path: "/canakkale-web-tasarim",
    title: "Çanakkale Web Tasarım — İkinci Pazarımız",
    heroTitle: "Çanakkale Web Tasarım: kurumsal site, SEO ve GEO",
    intro:
      "BCY Dijital, Tokat merkezli olup Çanakkale'de de aktif çalışan bir web tasarım stüdyosudur. Çanakkale'deki işletmelere kurumsal site, e-ticaret ve SEO hizmetini yerinde veya çevrim içi görüşmelerle sunar.",
    why: [
      "Çanakkale'de düzenli bulunuyoruz; proje görüşmeleri yüz yüze de yapılabilir.",
      "Turizm ve hizmet sektörü yoğun bu şehirde, sezonluk arama trafiğini bilen bir stratejiyle çalışırız.",
      "Yerel SEO ve Google Haritalar optimizasyonu her pakete dahildir.",
    ],
    sectors: "turizm, konaklama, hizmet ve perakende",
  },
  izmir: {
    name: "İzmir",
    path: "/izmir-web-tasarim",
    title: "İzmir Web Tasarım — Ege'de Dijital Vitrin",
    heroTitle: "İzmir Web Tasarım: kurumsal site, e-ticaret, SEO ve GEO",
    intro:
      "BCY Dijital, İzmir'deki işletmelere kurumsal web sitesi, e-ticaret ve SEO hizmeti sunar. Görüşmeler görüntülü veya yerinde planlanabilir; teslim süreci 5 iş günü hedefiyle şeffaf yürütülür.",
    why: [
      "Ege perakende, turizm ve hizmet sektörlerinin dijital ihtiyaçlarını bilerek ilerliyoruz.",
      "İzmir ve çevresinde yerel SEO: 'İzmir + sektörünüz' aramalarına ölçülebilir görünürlük.",
      "Uzaktan veya yüz yüze keşif; yazılı teklif, canlı önizleme ve yayın sonrası destek.",
    ],
    sectors: "perakende, turizm, yeme-içme, hizmet, B2B ve sanayi (kalıp / CNC)",
  },
  istanbul: {
    name: "İstanbul",
    path: "/istanbul-web-tasarim",
    title: "İstanbul Web Tasarım — Kurumsal Site, SEO ve GEO",
    heroTitle: "İstanbul Web Tasarım: kurumsal site, e-ticaret, SEO ve GEO",
    intro:
      "BCY Dijital, İstanbul'daki işletmelere kurumsal web sitesi, e-ticaret ve SEO hizmeti sunar. Görüşmeler görüntülü veya yerinde planlanabilir; teslim süreci 5 iş günü hedefiyle şeffaf yürütülür.",
    why: [
      "Metropol rekabetinde hız, performans ve net teklif akışı kritiktir — buna göre tasarlarız.",
      "İstanbul ve çevre ilçelerde yerel SEO: 'İstanbul + sektörünüz' aramalarına ölçülebilir görünürlük.",
      "Uzaktan veya yüz yüze keşif; yazılı teklif, canlı önizleme ve yayın sonrası destek.",
    ],
    sectors: "kurumsal, e-ticaret, hizmet, B2B, finans ve perakende",
  },
} as const;

/**
 * Henüz sayfası olmayan hedefler. Sitemap'e ve menüye eklenmez.
 * Özgün içerik yazılınca cities kaydı ve app/<path>/page.tsx ile yayına alınır.
 */
export const upcomingCities = [
  { name: "Erbaa", path: "/erbaa-web-tasarim" },
  { name: "Amasya", path: "/amasya-web-tasarim" },
  { name: "Sivas", path: "/sivas-web-tasarim" },
] as const;
