import { enrichProject } from "./project-seo";

export type Project = {
  slug: string;
  name: string;
  sector: string;
  city: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  metric?: string;
  tags: string[];
  tone: string;
  url: string;
  /** Opsiyonel mockup / cihaz görseli */
  image?: string;
  /** Lighthouse SEO skoru (gösterim) */
  seoScore?: number;
  /** Lighthouse performans skoru (gösterim) */
  performance?: number;
  /** Kartta gösterilecek teknolojiler */
  tech?: string[];
  /** Görseli açıklayan alt metin */
  imageAlt?: string;
  /** İçerik güncelleme tarihi (sitemap) */
  updated?: string;
  caseStudy?: {
    need: string;
    design: string;
    technical: string;
    seo: string;
    mobile: string;
  };
};

const projectRecords: Project[] = [
  {
    slug: "prime-dizayn",
    name: "Prime Dizayn",
    sector: "Mimari · Fit-Out · Asma Tavan",
    city: "İstanbul",
    summary:
      "İstanbul Sancaktepe merkezli anahtar teslim mimari, asma tavan ve fit-out firması için koyu-premium kurumsal site.",
    problem:
      "Prime Dizayn’ın saha ve teslim gücü yüksekti ama dijitalde İstanbul asma tavan ve fit-out arayan müşterilere premium, güven veren bir vitrin eksikti; hizmetler ve referanslar dağınık anlatılıyordu.",
    solution:
      "Koyu premium dilde hero, hizmetler, seçilmiş projeler, referanslar ve net teklif CTA’sını birleştiren; mobil öncelikli, SEO odaklı bir kurumsal site kurduk — canlı: primedizayn.com.tr.",
    result:
      "Firma anahtar teslim fit-out ve İstanbul asma tavan tekliflerini tek yerden anlatıyor; keşif ve teklif talepleri form ile WhatsApp üzerinden merkeze ulaşıyor.",
    tags: ["Kurumsal", "SEO", "İstanbul"],
    tone: "#e8c547",
    url: "https://www.primedizayn.com.tr/",
    image: "/projects/prime-dizayn.jpg",
    seoScore: 98,
    performance: 97,
    tech: ["Next.js", "SEO", "WhatsApp"],
  },
  {
    slug: "turanlar-ticaret",
    name: "Turanlar Ticaret",
    sector: "Tüp · Hürgaz · Yerel Servis",
    city: "Tokat",
    summary:
      "Tokat Merkez’de 1977’den beri Hürgaz tüp satan Turanlar Ticaret için ücretsiz servis ve WhatsApp sipariş odaklı kurumsal site.",
    problem:
      "Siparişler telefon ve ezbere dönüyordu; Tokat ücretsiz tüp servisi, ürün fiyatları ve çalışma saatleri dijitalde net bir vitrinde toplanmamıştı.",
    solution:
      "Ürün vitrini, WhatsApp sipariş akışı, yerel SEO ve Tokat Merkez servis vurgusuyla hızlı, mobil öncelikli bir satış sitesi kurduk — canlı: turanlarticaret.com.",
    result:
      "Müşteriler tüpü siteden seçip WhatsApp’tan yazıyor; Tokat ücretsiz tüp servisi talepleri merkeze düzenli ulaşıyor.",
    tags: ["Kurumsal", "Yerel SEO", "WhatsApp"],
    tone: "#1e4a8c",
    url: "https://www.turanlarticaret.com/",
    image: "/projects/turanlar-ticaret.jpg",
    seoScore: 98,
    performance: 97,
    tech: ["Next.js", "SEO", "WhatsApp"],
  },
  {
    slug: "guzubey-asansor",
    name: "Guzubey Asansör",
    sector: "Asansör",
    city: "Tokat",
    summary:
      "Tokat merkezli asansör firması için montaj, bakım ve revizyon hizmetlerini anlatan kurumsal site.",
    problem:
      "Firma, kurumsal ihalelerde ve site yönetimlerine yaptığı tekliflerde gösterebileceği bir web varlığına sahip değildi; işler yalnızca telefonla ve referansla dönüyordu.",
    solution:
      "Bakım sözleşmesi ve montaj hizmetlerini ayrı sayfalarda anlatan, tamamlanan projelerin fotoğraflarıyla desteklenen, WhatsApp'tan hızlı teklif akışlı bir kurumsal site kurduk.",
    result:
      "Site, tekliflerin ekinde referans olarak kullanılıyor; bakım sözleşmesi talepleri artık form ve WhatsApp üzerinden geliyor.",
    tags: ["Kurumsal", "Yerel SEO"],
    tone: "#e8b84a",
    url: "https://www.guzubey.com/",
    image: "/projects/guzubey-asansor.jpg",
    seoScore: 98,
    performance: 96,
    tech: ["Next.js", "SEO", "WhatsApp"],
  },
  {
    slug: "samlioglu-hukuk",
    name: "Şamlıoğlu Hukuk & Danışmanlık",
    sector: "Avukatlık · Hukuk",
    city: "Tokat",
    summary:
      "Tokat avukatlık ofisi için koyu-premium kurumsal site; faaliyet alanları, süreç, makaleler ve danışmanlık CTA’sıyla güven veren dijital vitrin.",
    problem:
      "Ofisin uzmanlık alanları ve süreç disiplini güçlüydü ama Tokat’ta avukat arayan müvekkillere güven veren, modern bir web varlığı eksikti; iletişim dağınık kanallardaydı.",
    solution:
      "Altın-koyu kurumsal dilde faaliyet alanları, çalışma süreci, SSS, galeri ve net danışmanlık CTA’sını birleştiren; mobil öncelikli, SEO odaklı bir hukuk sitesi kurduk.",
    result:
      "Müvekkil adayları ofisi ve uzmanlık alanlarını tek yerden inceliyor; danışmanlık talepleri form ve WhatsApp üzerinden merkeze ulaşıyor.",
    tags: ["Kurumsal", "Yerel SEO", "Hukuk"],
    tone: "#c8a45d",
    url: "https://www.yasinsamlioglu.av.tr/",
    image: "/projects/samlioglu-hukuk.jpg",
    seoScore: 98,
    performance: 97,
    tech: ["Next.js", "SEO", "WhatsApp"],
  },
  {
    slug: "tokat-sanayi-sitesi",
    name: "Tokat Sanayi Sitesi",
    sector: "Sanayi Rehberi · Firma Dizini",
    city: "Tokat",
    summary:
      "Tokat Sanayi Sitesi esnafı için usta, servis, yedek parça ve büfe firmalarını tek yerden bulduran dijital rehber.",
    problem:
      "Yüzlerce dükkân yan yanaydı ama müşteri doğru ustayı veya firmayı telefon ve ezbere buluyordu; sanayi sitesinin dijitalde tek, güvenilir bir vitrini yoktu.",
    solution:
      "Kategori ve arama odaklı firma dizini, WhatsApp iletişimi, işletme kaydı ve yerel SEO ile Merkez ve ilçelerden gelen aramaları karşılayan bir sanayi rehberi kurduk.",
    result:
      "Ziyaretçiler motor, kaporta, lastik veya büfe ihtiyacını saniyeler içinde daraltıyor; esnaf telefon ve WhatsApp ile doğrudan ulaşılabilir hale geliyor.",
    tags: ["Rehber", "Yerel SEO", "Firma Dizini"],
    tone: "#e85a2a",
    url: "https://www.tokatsanayisitesi.com/",
    image: "/projects/tokat-sanayi-sitesi.jpg",
    seoScore: 98,
    performance: 96,
    tech: ["Next.js", "SEO", "WhatsApp"],
  },
  {
    slug: "aevum-troia",
    name: "Aevum Troia Real Estate",
    sector: "Gayrimenkul",
    city: "Çanakkale",
    summary:
      "Çanakkale’de villa, arsa ve konut yatırımları sunan gayrimenkul markası için kurumsal portföy sitesi.",
    problem:
      "Markanın villa ve arsa portföyünü tek çatıda, güven veren bir dilde sunacak dijital vitrini yoktu; danışmanlık süreci değerlendirilemiyordu.",
    solution:
      "İlan portföyü, bölge rehberi, kurumsal sayfalar ve WhatsApp odaklı iletişimle Troia hattına yakışan kurumsal bir gayrimenkul sitesi inşa ettik.",
    result:
      "Portföy ve danışmanlık süreci tek sitede toplanıyor; yatırımcı adayları doğrudan ofise ulaşıyor.",
    tags: ["Kurumsal", "SEO", "Portföy"],
    tone: "#c8a45d",
    url: "https://aevumtroia.com/",
    image: "/projects/aevum-troia.jpg",
    seoScore: 99,
    performance: 97,
    tech: ["Next.js", "SEO", "Portföy"],
  },
  {
    slug: "dalyan-palmiye-resort",
    name: "Dalyan Palmiye Resort",
    sector: "Butik Otel",
    city: "Dalyan",
    summary:
      "Butik otel için çok dilli tanıtım sitesi; konaklama, olanaklar ve rezervasyon bilgileri turistlerin kolayca ulaşabileceği şekilde düzenlendi.",
    problem:
      "Otelin odaları, olanakları ve rezervasyon kanalları dağınık kanallarda anlatılıyordu; yabancı misafir için dil desteği zayıftı.",
    solution:
      "Çok dilli yapıyı, galeri ve olanak sayfalarını ve rezervasyon yönlendirmesini tek akışta toplayan Next.js tabanlı bir tanıtım sitesi geliştirdik.",
    result:
      "Misafirler konaklama ve olanakları tek yerden inceliyor; rezervasyon talepleri netleşiyor.",
    tags: ["Next.js", "Rezervasyon", "Çoklu Dil"],
    tone: "#4a9b8c",
    url: "https://www.dalyanpalmiyeresort.com/",
    image: "/projects/dalyan-palmiye-resort.jpg",
    seoScore: 97,
    performance: 98,
    tech: ["Next.js", "i18n", "SEO"],
  },
  {
    slug: "polat-mermer",
    name: "Polat Mermer",
    sector: "Mermer & Doğal Taş",
    city: "Tokat",
    summary:
      "Mermer ve doğal taş ürünlerini sergileyen premium kurumsal site; ürün, uygulama ve referans galerisiyle B2B vitrin.",
    problem:
      "Firmanın ürün çeşitliliği ve uygulama kalitesi güçlüydü ama dijitalde marka dili parçalıydı; teklif talepleri dağınık kanallardan geliyordu.",
    solution:
      "Koyu-premium tasarım, ürün ve uygulama sayfaları, referans galerisi ve tek tıkla teklif akışıyla Polat Mermer’in dijital kimliğini kurduk.",
    result:
      "Müşteriler ürün ve uygulamaları tek vitrinden inceliyor; teklif talepleri siteden merkeze düşüyor.",
    tags: ["Kurumsal", "Galeri", "SEO"],
    tone: "#c8a45d",
    url: "https://polatmermer.com/",
    image: "/projects/polat-mermer.jpg",
  },
  {
    slug: "yonel-oto-yedek-parca",
    name: "Yönel Oto Yedek Parça",
    sector: "Otomotiv",
    city: "Tokat",
    summary:
      "Yedek parça kataloğu ve arama odaklı yapı; müşteriler ürünleri marka ve modele göre bulup doğrudan iletişime geçebiliyor.",
    problem:
      "Yedek parça stoku yalnızca telefon ve fiziksel mağazada yönetiliyordu; müşteri doğru parçayı bulmakta zorlanıyordu.",
    solution:
      "Marka ve modele göre aranabilir katalog, ürün kartları ve hızlı WhatsApp iletişim akışıyla çevrimiçi bir yedek parça vitrini kurduk.",
    result:
      "Müşteriler ürünleri siteden buluyor; satış ve teklif talepleri WhatsApp ve forma taşındı.",
    tags: ["Katalog", "SEO", "WhatsApp"],
    tone: "#c96a6a",
    url: "https://www.yonelotoyedekparca.com/",
    image: "/projects/yonel-oto-yedek-parca.jpg",
  },
  {
    slug: "mygoldenfood",
    name: "Mygoldenfood",
    sector: "Gıda",
    city: "Türkiye geneli",
    summary:
      "Kurutulmuş gıda üreticisi için kurumsal site; ürün grupları, sertifikalar ve teklif akışıyla markayı dijitale taşıyor.",
    problem:
      "Markanın ürün gruplarını, kalite standartlarını ve ihracat sürecini kurumsal bir dille anlatan dijital merkezi yoktu.",
    solution:
      "Ürün vitrinleri, sertifika ve teklif odaklı akışla markanın kendi dijital kanalını kurduk; koyu-premium altın dilde.",
    result:
      "Bayi adayları ve müşteriler markayı doğrudan siteden tanıyor; talepler merkeze ulaşıyor.",
    tags: ["Kurumsal", "SEO", "B2B"],
    tone: "#d4a94e",
    url: "https://mygoldenfood.com/",
    image: "/projects/mygoldenfood.jpg",
  },
  {
    slug: "balsan-papel",
    name: "Balsan Papel",
    sector: "Kereste & Orman Ürünleri",
    city: "Türkiye geneli",
    summary:
      "Kereste ve orman ürünleri firması için kurumsal tanıtım sitesi; ürün grupları, referanslar ve teklif talebi akışıyla B2B odaklı yapı.",
    problem:
      "B2B teklif süreçleri büyük ölçüde telefon ve e-postaya bağlıydı; ürün grupları profesyonel bir vitrinde yer almıyordu.",
    solution:
      "Ürün grupları, referanslar ve teklif formuyla sade, B2B odaklı bir kurumsal site geliştirdik.",
    result:
      "Teklif talepleri form üzerinden toplanıyor; firma ürünlerini kurumsal müşterilere net anlatıyor.",
    tags: ["Kurumsal", "Teklif Formu", "SEO"],
    tone: "#8b7355",
    url: "https://balsanpapel.com/",
    image: "/projects/balsan-papel.jpg",
  },
  {
    slug: "metod-muhendislik",
    name: "Metod Mühendislik",
    sector: "Mühendislik",
    city: "Tokat",
    summary:
      "Elektrik pano üretimi ve endüstriyel mühendislik hizmetlerini tanıtan kurumsal site.",
    problem:
      "Firmanın referans projeleri güçlüydü ama bunları kurumsal müşterilere derli toplu gösterecek bir mecra yoktu.",
    solution:
      "Hizmetler, proje portföyü ve teklif kanallarını birleştiren; sade, ölçülü, mühendislik diline uygun bir site inşa ettik.",
    result:
      "Teklif süreçlerinde site, firmanın teknik yeterlilik dosyasının dijital karşılığı olarak kullanılıyor.",
    tags: ["Kurumsal", "B2B"],
    tone: "#2f5f9e",
    url: "https://www.metodmuhendislik.com/",
    image: "/projects/metod-muhendislik.jpg",
  },
  {
    slug: "mufat-insaat",
    name: "Mufat İnşaat Mühendisliği",
    sector: "İnşaat Mühendisliği",
    city: "Turhal, Tokat",
    summary:
      "Turhal merkezli inşaat mühendisliği firması için kurumsal site; hizmetler, portföy, süreç ve teklif akışıyla B2B vitrin.",
    problem:
      "Firma 2002’den beri saha ve hesap deneyimine sahipti ama kamu-özel işverenlere güven veren, güncel bir dijital varlığı yoktu.",
    solution:
      "Koyu-premium kurumsal dilde hizmetler, projeler, süreç ve teklif CTA’sını birleştiren; Tokat–Turhal odaklı bir mühendislik sitesi kurduk.",
    result:
      "Teklif talepleri siteden toplanıyor; firma teknik yeterliliğini dijitalde net anlatıyor.",
    tags: ["Kurumsal", "B2B", "Yerel SEO"],
    tone: "#c8a45d",
    url: "https://mufatinsaat.com/",
    image: "/projects/mufat-insaat.jpg",
  },
  {
    slug: "imbat-osgb",
    name: "İmbat Ortak Sağlık Güvenlik Birimi",
    sector: "OSGB · İş Güvenliği",
    city: "Türkiye geneli",
    summary:
      "Ortak sağlık güvenlik birimi için kurumsal site; iş yeri hekimliği, İSG uzmanlığı, risk değerlendirmesi ve eğitim hizmetlerini netleştiren dijital vitrin.",
    problem:
      "Hizmet çeşitliliği ve yasal uyumluluk güçlüydü ama işverenlere güven veren, teklif odaklı kurumsal bir web varlığı eksikti.",
    solution:
      "Koyu kurumsal dilde hizmet kartları, eğitimler, referanslar ve teklif CTA’sını birleştiren; mobil öncelikli bir OSGB sitesi kurduk.",
    result:
      "İşverenler hizmetleri tek yerden inceliyor; teklif talepleri siteden merkeze ulaşıyor.",
    tags: ["Kurumsal", "B2B", "SEO"],
    tone: "#e8b84a",
    url: "https://www.imbatosgb.com/",
    image: "/projects/imbat-osgb.jpg",
  },
  {
    slug: "izmak-makina-kalip",
    name: "İzmak Makina Kalıp",
    sector: "Makine · Kalıp · CNC",
    city: "İzmir",
    summary:
      "İzmir’de makine yedek parça, plastik enjeksiyon ve kesme sıvama kalıpları ile CNC / CAD-CAM hizmetlerini anlatan kurumsal sanayi sitesi.",
    problem:
      "1960’tan beri süren üretim gücü vardı ama B2B müşterilere teknik yeterliliği ve hizmet yelpazesini derli toplu gösteren güncel bir dijital vitrin eksikti.",
    solution:
      "Hizmet alanları, hassasiyet ve ekipman vurgusu, teklif ve WhatsApp akışıyla İzmir sanayi diline uygun kurumsal bir site kurduk.",
    result:
      "İşverenler ve tedarikçiler firmayı siteden tanıyor; teklif talepleri dijital kanaldan merkeze ulaşıyor.",
    tags: ["Kurumsal", "B2B", "SEO"],
    tone: "#4a6fa5",
    url: "https://izmirmakinakalip.com/",
  },
];

export const projects: Project[] = projectRecords.map(enrichProject);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
