export const tokatMeta = {
  title: "Tokat Web Tasarım | Profesyonel Site ve SEO | BCY Dijital",
  description:
    "Tokat'ta işletmelere özel hızlı, mobil uyumlu ve SEO odaklı kurumsal web siteleri. Gerçek Tokat referanslarımızı inceleyin, ücretsiz teklif alın.",
} as const;

if (tokatMeta.title.length < 50 || tokatMeta.title.length > 60) {
  throw new Error(`Tokat title uzunluğu ${tokatMeta.title.length}; hedef 50–60 karakter.`);
}

if (tokatMeta.description.length < 140 || tokatMeta.description.length > 160) {
  throw new Error(
    `Tokat description uzunluğu ${tokatMeta.description.length}; hedef 140–160 karakter.`
  );
}

export const tokatH1 = "Tokat Web Tasarım ve Profesyonel Web Sitesi Hizmeti";

export const tokatOfferings = [
  {
    title: "Kurumsal Web Tasarım",
    href: "/hizmetler/web-tasarim",
    text: "Hizmetlerinizi, referanslarınızı ve iletişim yolunu ayrı ayrı anlatan site. Teklif ve ihale dosyasına ekleyebileceğiniz resmi vitrin.",
  },
  {
    title: "E-Ticaret Sitesi",
    href: "/hizmetler/e-ticaret",
    text: "Ürünü olan işletmeler için ödeme, sipariş ve ürün yönetimi. Pazaryeri komisyonuna mahkûm kalmadan kendi mağazanızdan satış.",
  },
  {
    title: "SEO Uyumlu Web Sitesi",
    href: "/hizmetler/seo",
    text: "Başlık yapısı, hız, mobil uyum ve schema ile arama motorunun sayfayı anlaması. Sıra vaadi yok; teknik temel teslimin parçası.",
  },
  {
    title: "Landing Page",
    href: "/hizmetler/web-tasarim",
    text: "Tek bir teklif, kampanya veya hizmet için odaklanmış sayfa. Ziyaretçi ne yapacağını ilk ekranda görür.",
  },
  {
    title: "Web Sitesi Yenileme",
    href: "/iletisim",
    text: "Eski sitenin içeriği duruyorsa onu çöpe atmayız. Yavaş, telefonda dağılan veya markayı anlatmayan yapıyı güncel bir iskelete taşırız.",
  },
  {
    title: "Teknik SEO",
    href: "/hizmetler/seo",
    text: "İndeks, canonical, sitemap, hız ve yapısal veri. İçerik yazmadan önce sayfanın taranabilir olması gerekir.",
  },
  {
    title: "Yerel SEO",
    href: "/hizmetler/seo",
    text: "Tokat ve ilçe aramalarında işletmenizin adı, hizmeti ve Google İşletme Profili ile sitenin aynı şeyi söylemesi.",
  },
  {
    title: "Bakım ve Destek",
    href: "/iletisim",
    text: "Yayın sonrası küçük düzeltmeler projeye dahildir. Sürekli içerik ve geliştirme, ihtiyaca göre ayrıca konuşulur.",
  },
] as const;

export const tokatWhy = [
  "Tokat merkezli çalışıyoruz; keşif için yüz yüze görüşebiliriz.",
  "Guzubey Asansör, Şamlıoğlu Hukuk, Tokat Sanayi Sitesi ve Polat Mermer gibi canlı Tokat referansları var.",
  "Siteler Next.js ile, mobil öncelikli geliştiriliyor.",
  "Teknik SEO ve yerel arama iskeleti teslimin içinde; aylık SEO ayrı bir iş olarak konuşulur.",
  "Hız ve Core Web Vitals hedefleri tasarımın yanında durur.",
  "Yayın sonrası destek vardır. Alan adı ve kod müşteriye aittir.",
  "Teklif yazılıdır; kapsam ve süre baştan görülür.",
] as const;

export const tokatSectors = [
  "restoran",
  "kafe",
  "otel",
  "avukat",
  "emlak",
  "asansör",
  "otomotiv",
  "sanayi",
  "üretim",
  "mermer",
  "mühendislik",
  "inşaat",
  "sağlık",
  "güzellik",
  "mobilya",
  "perakende",
  "e-ticaret",
  "yerel esnaf",
] as const;

export const tokatFaq = [
  {
    q: "Tokat'ta web sitesi yaptırmak ne kadar?",
    a: "Tek rakam yok. Sayfa sayısı, özel tasarım, e-ticaret, yönetim paneli, özel yazılım, SEO, içerik ve entegrasyonlar tutarı değiştirir. Keşiften sonra yazılı teklif veriyoruz.",
  },
  {
    q: "Tokat'ta kurumsal web sitesi kaç günde hazırlanır?",
    a: "Metin ve görseller hazırsa kurumsal sitelerde hedefimiz 5 iş günüdür. E-ticaret, katalog veya özel entegrasyonlarda süre kapsamla birlikte teklifte yazılır.",
  },
  {
    q: "Tokat'ta yüz yüze görüşebilir miyiz?",
    a: "Evet. Tokat merkezde yüz yüze keşif yapabiliriz. İlçeler ve şehir dışındaki işler için görüntülü görüşme de yeterli olur.",
  },
  {
    q: "Web sitesi Google'da çıkar mı?",
    a: "Yayınlanan site, teknik iskeletle indekse uygun teslim edilir. Firma adınızla görünmek çoğu zaman kısa sürer. Rekabetçi aramalarda üst sıra, ayrıca sürdürülen SEO ister. Sıra garantisi vermiyoruz.",
  },
  {
    q: "SEO web sitesi paketine dahil mi?",
    a: "Teknik SEO iskeleti, başlık yapısı, hız ve schema kurumsal teslimin parçasıdır. Aylık içerik, harita yönetimi ve sürekli SEO ayrı kapsamdır.",
  },
  {
    q: "Mobil uyumlu web sitesi yapıyor musunuz?",
    a: "Evet. Sayfalar önce telefona göre kurulur. Arama trafiğinin büyük kısmı mobil olduğu için bu ayrı bir paket değil, standarttır.",
  },
  {
    q: "E-ticaret sitesi yapıyor musunuz?",
    a: "Evet. Ürün, sipariş ve yerli ödeme altyapısı gereken işlerde e-ticaret kuruyoruz. Kapsam, ürün adedine ve entegrasyonlara göre teklifte netleşir.",
  },
  {
    q: "Web sitesinin alan adı ve kodları bana mı ait?",
    a: "Evet. Alan adı ve site kodu size aittir. İleride başka bir ekiple devam edebilirsiniz.",
  },
  {
    q: "Mevcut web sitemi yenileyebilir misiniz?",
    a: "Evet. İşe yarayan metin ve görselleri koruyup yavaş veya telefonda bozulan yapıyı yeniliyoruz. Yenileme, sıfırdan siteyle aynı fiyatta olmak zorunda değildir.",
  },
  {
    q: "Tokat dışındaki firmalarla çalışıyor musunuz?",
    a: "Evet. Çanakkale, İzmir ve İstanbul’da da iş yapıyoruz. Türkiye’nin diğer illerinden gelen talepler görüntülü keşifle yürür.",
  },
  {
    q: "Web sitesi bittikten sonra destek veriyor musunuz?",
    a: "Teslim sonrası küçük düzeltmeler dahildir. Düzenli bakım, içerik girişi veya reklam yönetimi ayrıca konuşulur.",
  },
] as const;

export const tokatProjectOrder = [
  "guzubey-asansor",
  "samlioglu-hukuk",
  "tokat-sanayi-sitesi",
  "polat-mermer",
  "yonel-oto-yedek-parca",
  "metod-muhendislik",
  "mufat-insaat",
] as const;
