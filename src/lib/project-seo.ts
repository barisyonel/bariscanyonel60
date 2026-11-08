import type { Project } from "./projects";

const UPDATED = "2026-10-25";
const FRESH = "2026-11-09";

const details: Record<
  string,
  Pick<Project, "imageAlt" | "updated" | "caseStudy">
> = {
  "prime-dizayn": {
    updated: FRESH,
    imageAlt: "Prime Dizayn İstanbul mimari ofis web sitesi",
  },
  "turanlar-ticaret": {
    updated: FRESH,
    imageAlt: "Turanlar Ticaret Tokat ürün vitrini ve WhatsApp sipariş sitesi",
  },
  "aevum-troia": {
    updated: UPDATED,
    imageAlt: "Aevum Troia Çanakkale konaklama web sitesi",
  },
  "dalyan-palmiye-resort": {
    updated: UPDATED,
    imageAlt: "Dalyan Palmiye Resort Muğla otel web sitesi",
  },
  "mygoldenfood": {
    updated: UPDATED,
    imageAlt: "MyGoldenFood gıda markası e-ticaret web sitesi",
  },
  "balsan-papel": {
    updated: UPDATED,
    imageAlt: "Balsan Papel ambalaj ve kağıt ürünleri web sitesi",
  },
  "imbat-osgb": {
    updated: UPDATED,
    imageAlt: "İmbat OSGB iş sağlığı ve güvenliği web sitesi",
  },
  "izmak-makina-kalip": {
    updated: UPDATED,
    imageAlt: "İzmak Makina Kalıp sanayi web sitesi",
  },
  "guzubey-asansor": {
    updated: UPDATED,
    imageAlt: "Guzubey Asansör Tokat web sitesi tasarımı",
    caseStudy: {
      need: "Kurumsal tekliflerde ve site yönetimleriyle görüşmelerde gösterilebilecek, bakım ile montajı ayıran bir web varlığı.",
      design:
        "Hizmetleri ayrı bloklarda anlatan, tamamlanan işlerin fotoğraflarına yer veren sade bir kurumsal düzen. Amaç vitrin şovu değil, teklif ekine konabilecek net bir dosya.",
      technical: "Next.js, mobil öncelikli sayfalar ve WhatsApp üzerinden teklif akışı.",
      seo: "Hizmet başlıkları, Tokat bağlamı ve temel schema iskeleti kuruldu. Sıralama garantisi verilmedi; hedef, firmanın kendi adı ve hizmet aramalarında anlaşılır bir sonuç olmasıydı.",
      mobile: "Telefonla arayan müşteri için ara ve WhatsApp aksiyonları küçük ekranda ilk bakışta duruyor.",
    },
  },
  "samlioglu-hukuk": {
    updated: UPDATED,
    imageAlt: "Şamlıoğlu Hukuk Tokat avukatlık ofisi web sitesi",
    caseStudy: {
      need: "Tokat’ta avukat arayan kişinin ofisi, çalışma alanlarını ve danışmanlık yolunu tek yerde görmesi.",
      design:
        "Koyu zemin ve altın vurguyla hukuk ofisine yakışan ölçülü bir dil. Faaliyet alanları, süreç ve sık sorulan sorular aynı güven tonunda ilerliyor.",
      technical: "Next.js, mobil öncelikli sayfalar, form ve WhatsApp danışmanlık çağrısı.",
      seo: "Faaliyet alanı başlıkları ve ofis bilgisi sayfada açık yazıldı. Hukuk reklamı vaadi yok; amaç ofisin kim olduğunu arama sonucunda doğru anlatmak.",
      mobile: "Uzun metinler küçük ekranda bölüm bölüm okunuyor; danışmanlık çağrısı sayfanın altında kaybolmuyor.",
    },
  },
  "tokat-sanayi-sitesi": {
    updated: UPDATED,
    imageAlt: "Tokat Sanayi Sitesi firma rehberi web sitesi",
    caseStudy: {
      need: "Sanayi sitesindeki esnafın, müşterinin doğru ustayı veya firmayı telefondan ezberlemeden bulabilmesi.",
      design:
        "Kategori ve arama önde. Firma kartı, iletişim ve işletme kaydı aynı akışta. Rehber, tek tek kurumsal sitelerin yerini tutmuyor; onları bulunabilir kılıyor.",
      technical: "Next.js, arama ve kategori yapısı, WhatsApp iletişimi.",
      seo: "Kategori sayfaları ve yerel bağlam (Tokat sanayi) arama niyetine göre ayrıldı. Her esnaf için kopya şehir sayfası açılmadı.",
      mobile: "Usta arayan kişi çoğu zaman telefondadır; kategori seçimi ve arama küçük ekranda tek elle kullanılacak şekilde kuruldu.",
    },
  },
  "polat-mermer": {
    updated: UPDATED,
    imageAlt: "Polat Mermer Tokat kurumsal web sitesi",
    caseStudy: {
      need: "Mermer ve doğal taş ürünlerini, uygulama örneklerini ve teklif kanalını tek vitrinde toplamak.",
      design:
        "Koyu premium zemin, ürün ve uygulama galerisi. B2B alıcı önce taşı ve işi görüyor, sonra teklif istiyor.",
      technical: "Kurumsal sayfa yapısı, galeri ve teklif akışı.",
      seo: "Ürün ve uygulama başlıkları, firmanın ne iş yaptığını arama sonucunda ayıracak şekilde yazıldı. Anahtar kelime listesi sayfaya doldurulmadı.",
      mobile: "Galeri küçük ekranda kırpılmadan geziliyor; teklif çağrısı görsellerin altında duruyor.",
    },
  },
  "yonel-oto-yedek-parca": {
    updated: UPDATED,
    imageAlt: "Yönel Oto Yedek Parça Tokat katalog sitesi",
    caseStudy: {
      need: "Müşterinin doğru parçayı mağazayı aramadan, marka ve modele göre bulup yazabilmesi.",
      design: "Katalog ve arama önde. Ürün kartı, stok hikâyesini değil bulunabilirliği çözüyor.",
      technical: "Aranabilir katalog, ürün kartları ve WhatsApp iletişim.",
      seo: "Parça ve marka bağlamı sayfa başlıklarında doğal geçiyor. Amaç Tokat genelinde her aramayı kapmak değil, yedek parça niyetini karşılamak.",
      mobile: "Katalog listesi dar ekranda tek sütun; iletişim kartın içinde.",
    },
  },
  "metod-muhendislik": {
    updated: UPDATED,
    imageAlt: "Metod Mühendislik Tokat kurumsal web sitesi",
    caseStudy: {
      need: "Elektrik pano ve endüstriyel işlerde referansları kurumsal alıcıya derli toplu göstermek.",
      design: "Sade, mühendislik diline uygun düzen. Süslü kampanya sayfası değil, teknik yeterlilik vitrini.",
      technical: "Hizmet sayfaları, proje portföyü ve teklif kanalları.",
      seo: "Hizmet ve proje sayfaları ayrı başlıklarla kuruldu. Böylece pano üretimi ile genel tanıtım birbirine karışmıyor.",
      mobile: "Teknik metinler kısa bloklara bölündü; teklif formu telefonda da doldurulabiliyor.",
    },
  },
  "mufat-insaat": {
    updated: UPDATED,
    imageAlt: "Mufat İnşaat Turhal web sitesi tasarımı",
    caseStudy: {
      need: "Turhal merkezli mühendislik firmasının kamu ve özel işverenlere güncel bir dijital dosya sunması.",
      design: "Hizmet, proje, süreç ve teklif aynı kurumsal dilde. Şehir bilgisi Turhal ve Tokat olarak açık yazıldı.",
      technical: "Next.js tabanlı kurumsal site ve teklif çağrısı.",
      seo: "Yerel bağlam sayfada Turhal ve Tokat olarak geçiyor. İlçe için ayrı kopya sayfa açılmadı; firma sayfası kendi lokasyonunu anlatıyor.",
      mobile: "Saha ve ofis trafiği telefonda baktığı için süreç adımları küçük ekranda alt alta okunuyor.",
    },
  },
};

const tokatAnchors: Record<string, string> = {
  "guzubey-asansor": "Tokat’ta web sitesi hizmeti",
  "samlioglu-hukuk": "Tokat işletmeleri için web tasarım",
  "tokat-sanayi-sitesi": "Tokat web tasarım",
  "polat-mermer": "web tasarım hizmetimiz",
  "yonel-oto-yedek-parca": "Tokat’taki katalog ve kurumsal işler",
  "metod-muhendislik": "Tokat merkezli web sitesi çalışmaları",
  "mufat-insaat": "Turhal ve Tokat için kurumsal site",
  "turanlar-ticaret": "Tokat Merkez e-ticaret ve vitrin sitesi",
};

export function enrichProject(project: Project): Project {
  const extra = details[project.slug];
  if (!extra) return project;
  return { ...project, ...extra };
}

export function tokatProjectAnchor(slug: string): string | undefined {
  return tokatAnchors[slug];
}
