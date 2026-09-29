export type PostFaq = { q: string; a: string };

export type PostSection = {
  h: string;
  paragraphs: string[];
  bullets?: string[];
  /** Bölüm sonrası görsel (opsiyonel) */
  image?: string;
  imageAlt?: string;
  /** Bölüm sonunda dış kaynak linki (opsiyonel) */
  link?: { label: string; href: string; note?: string };
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  /** Liste/filtre ve yerel SEO etiketi */
  tags?: string[];
  region: "Tokat" | "Çanakkale" | "İzmir" | "İstanbul" | "Genel";
  coverImage: string;
  coverAlt: string;
  /** GEO: ilk paragrafta doğrudan, alıntılanabilir cevap */
  directAnswer: string;
  highlights: string[];
  sections: PostSection[];
  faq: PostFaq[];
};

const IMG = {
  og: "/logo-og.jpg",
  aevum: "/projects/aevum-troia.jpg",
  guzubey: "/projects/guzubey-asansor.jpg",
  polat: "/projects/polat-mermer.jpg",
  yonel: "/projects/yonel-oto-yedek-parca.jpg",
  metod: "/projects/metod-muhendislik.jpg",
  mufat: "/projects/mufat-insaat.jpg",
  imbat: "/projects/imbat-osgb.jpg",
  dalyan: "/projects/dalyan-palmiye-resort.jpg",
  balsan: "/projects/balsan-papel.jpg",
  mygolden: "/projects/mygoldenfood.jpg",
} as const;

export const posts: Post[] = [
  {
    slug: "canakkalede-web-tasarim",
    title: "Çanakkale'de web tasarım: Yerel işletmeler ne aramalı?",
    description:
      "Çanakkale web tasarım rehberi 2026: turizm ve gayrimenkul odaklı site, yerel SEO, WhatsApp iletişimi ve BCY Dijital'in Aevum Troia referansı.",
    date: "2026-07-15",
    updated: "2026-07-15",
    tags: ["Çanakkale", "Web Tasarım"],
    region: "Çanakkale",
    coverImage: IMG.aevum,
    coverAlt: "Çanakkale gayrimenkul web tasarımı — Aevum Troia referans sitesi",
    directAnswer:
      "Çanakkale'de web tasarım; turizm, konaklama ve gayrimenkul gibi sezonluk arama trafiğini bilen bir yapıyla yapılmalıdır. BCY Dijital Çanakkale'de aktif çalışır; Aevum Troia Real Estate gibi yerel referanslarla kurumsal site, SEO ve WhatsApp odaklı iletişim kurar.",
    highlights: [
      "Sezonluk arama (yaz turizm / kış hizmet-gayrimenkul) için içerik planı şarttır",
      "Portföy, bölge dili ve tek tık WhatsApp satış hızını belirler",
      "Yerel SEO: Çanakkale + sektör + Google İşletme Profili",
      "Referans: Aevum Troia (aevumtroia.com) — BCY Dijital",
    ],
    sections: [
      {
        h: "Çanakkale pazarı neden farklı?",
        paragraphs: [
          "Şehir turizm ve hizmet yoğun; yaz sezonunda arama hacmi artar, kışın ise yerel hizmet ve gayrimenkul öne çıkar. \"Çanakkale web tasarım\" veya \"Çanakkale villa satılık\" arayan kişi hızlı güven ve net iletişim ister.",
          "Bu yüzden sitede yalnızca güzel görseller değil; ilan/portföy yapısı, bölge içeriği, mobil hız ve tek tıkla WhatsApp kritiktir. Sezon öncesi içerik güncellemesi yapan işletmeler, rakiplerinden bir adım önde kalır.",
        ],
        bullets: [
          "Yaz: turizm, konaklama, villa kiralama aramaları",
          "Kış/ara dönem: yerel hizmet ve gayrimenkul yatırımı",
          "Mobil + hız + form/WhatsApp = dönüşüm",
        ],
      },
      {
        h: "Referansımız: Aevum Troia",
        paragraphs: [
          "Çanakkale'deki gayrimenkul markası Aevum Troia için kurumsal portföy sitesi kurduk: villa ve arsa sunumu, bölge dili, danışmanlık akışı ve iletişimi tek çatıda topladık. Canlı siteyi Aevum Troia vaka sayfamızdan ve aevumtroia.com adresinden inceleyebilirsiniz.",
          "Benzer bir ihtiyaçta süreç aynıdır: keşif, yazılı teklif, onaylı tasarım, SEO iskeletiyle 5 iş günü hedefi.",
        ],
        image: IMG.aevum,
        imageAlt: "Aevum Troia Real Estate — Çanakkale kurumsal web sitesi",
      },
      {
        h: "Çanakkale web sitesi yaptırırken kontrol listesi",
        paragraphs: [
          "1) Alan adı ve hosting size mi ait? 2) Yerel SEO (Çanakkale + sektör) dahil mi? 3) Harita / İşletme Profili konuşuldu mu? 4) Sezonluk içerik güncellemesi nasıl yapılacak?",
          "Detaylı şehir sayfamız: Çanakkale Web Tasarım. Ücretsiz keşif için iletişim formundan yazmanız yeterli.",
        ],
        bullets: [
          "Sahiplik yazılı olsun",
          "Schema + hız + mobil ölçümü netleşsin",
          "WhatsApp / form CTA her sayfada görünsün",
        ],
      },
    ],
    faq: [
      {
        q: "Çanakkale'de web tasarım fiyatı neye göre değişir?",
        a: "Sayfa sayısı, portföy/ilan yapısı, özgün tasarım ve SEO kapsamına göre. Keşif sonrası yazılı teklifle netleşir; rastgele \"paket fiyat\" genelde yarım kalır.",
      },
      {
        q: "Turizm işletmesi için site kaç günde hazır olur?",
        a: "İçerik ve fotoğraflar hazırsa kurumsal tanıtım sitelerinde hedefimiz 5 iş günüdür. Çok dilli veya rezervasyon entegrasyonu süre uzatabilir.",
      },
      {
        q: "BCY Dijital Çanakkale'de yüz yüze görüşür mü?",
        a: "Evet — yüz yüze veya görüntülü keşif yapılır. Çanakkale Web Tasarım sayfasından veya iletişim formundan randevu alabilirsiniz.",
      },
    ],
  },
  {
    slug: "izmirde-web-tasarim",
    title: "İzmir'de web tasarım: Sanayi ve hizmet işletmeleri için rehber",
    description:
      "İzmir web tasarım 2026: B2B ve sanayi firmaları için kurumsal site, yerel SEO, teklif formu. İzmak Makina Kalıp referansı ve BCY Dijital süreci.",
    date: "2026-07-15",
    updated: "2026-07-15",
    tags: ["İzmir", "Web Tasarım"],
    region: "İzmir",
    coverImage: IMG.metod,
    coverAlt: "İzmir B2B / sanayi kurumsal web tasarımı örneği",
    directAnswer:
      "İzmir'de web tasarım; perakende ve turizmin yanı sıra B2B / sanayi işletmelerinde teklif toplayan, teknik yeterliliği gösteren kurumsal sitelerdir. BCY Dijital İzmir'de de hizmet verir; İzmak (izmirmakinakalip.com) gibi makine-kalıp firmaları için kurumsal vitrin kurar.",
    highlights: [
      "B2B İzmir sitesi: hizmet sayfaları + yetkinlik + teklif formu",
      "\"İzmir + sektör\" (ör. kalıp imalatı) yerel arama getirir",
      "Teknik SEO, schema ve Google İşletme Profili tamamlansın",
      "Referans: İzmak Makina Kalıp — izmirmakinakalip.com",
    ],
    sections: [
      {
        h: "İzmir'de kim web sitesi yaptırmalı?",
        paragraphs: [
          "Özellikle Buca ve çevresindeki üretim, kalıp, CNC ve yedek parça firmaları; ürün/hizmetlerini telefonla anlatmak yerine siteden teklif toplamak ister. \"İzmir web tasarım\" arayan işletme genelde güven, hız ve B2B dil arar.",
          "İyi bir İzmir kurumsal sitesi: net hizmet sayfaları, parça/kalıp yetkinliği, modern ekipman vurgusu, teklif formu ve mobil uyum içerir.",
        ],
        bullets: [
          "Üretim / CNC / kalıp / OSGB / mühendislik",
          "Teklif formu + WhatsApp dönüşüm kanalları",
          "Gerçek fabrika ve makine fotoğrafları",
        ],
      },
      {
        h: "Referansımız: İzmak Makina Kalıp",
        paragraphs: [
          "İzmir merkezli İzmak için makine yedek parça, plastik enjeksiyon ve kesme sıvama kalıpları, CNC ve CAD/CAM hizmetlerini anlatan kurumsal site çalışması yürüttük. 1960'tan beri süren üretim geleneğini dijitale taşıyan vitrin: izmirmakinakalip.com.",
          "Projeyi portföyümüzde İzmak Makina Kalıp başlığı altında bulabilirsiniz; benzer bir sanayi sitesi için süreci 5 iş günü hedefiyle planlıyoruz.",
        ],
        image: IMG.metod,
        imageAlt: "Kurumsal B2B web tasarımı — sanayi ve mühendislik vitrini",
      },
      {
        h: "İzmir web tasarımında SEO notu",
        paragraphs: [
          "\"İzmir + sektörünüz\" (ör. İzmir kalıp imalatı) aramaları B2B'de müşteri adayı getirir. Teknik SEO, schema ve Google İşletme Profili olmadan site yarım kalır.",
          "Şehir sayfamız: İzmir Web Tasarım. Keşif görüşmesi ücretsizdir.",
        ],
      },
    ],
    faq: [
      {
        q: "İzmir'de B2B firması için site şart mı?",
        a: "Evet — ihale ve B2B teklifte resmi site güven sinyalidir. Instagram keşif için iyidir; karar aşamasında site beklenir.",
      },
      {
        q: "Sanayi sitesinde hangi sayfalar olmalı?",
        a: "Hizmetler, yetkinlikler/makine parkı, referanslar, hakkında ve teklif/iletişim. Ürün veya kalıp tipleri ayrı bölümlenebilir.",
      },
      {
        q: "BCY İzmir'de de çalışıyor mu?",
        a: "Evet. İzmir Web Tasarım sayfamızdan süreci inceleyebilir, ücretsiz keşif için iletişim formundan yazabilirsiniz.",
      },
    ],
  },
  {
    slug: "tokatta-web-tasarim-kim-yapiyor",
    title: "Tokat'ta web tasarım kim yapıyor? Güvenilir firma nasıl seçilir?",
    description:
      "Tokat web tasarım arayan işletmeler için 2026 rehberi: yerel stüdyo mu uzak ajans mı; teklifte ne aranır; BCY Dijital nasıl çalışır.",
    date: "2026-07-12",
    updated: "2026-07-15",
    tags: ["Tokat", "Web Tasarım"],
    region: "Tokat",
    coverImage: IMG.guzubey,
    coverAlt: "Tokat web tasarım referansı — Guzubey Asansör kurumsal site",
    directAnswer:
      "Tokat'ta web tasarım hizmeti; BCY Dijital gibi yerel stüdyolar ve uzaktan çalışan ajanslar tarafından sunulur. Doğru seçim, fiyat etiketi değil — yazılı teklif, 5 iş günü gibi net süre, SEO altyapısı ve yayın sonrası destek vaadinin gerçekçiliğidir.",
    highlights: [
      "Web tasarım = satış kanalı kurulumu, baskı işi değil",
      "Yerel stüdyo: sektör dili + Google Haritalar rekabeti",
      "Teklifte sahiplik, süre, SEO ve destek yazılı olmalı",
      "BCY: Tokat merkezli; Çanakkale, İzmir ve İstanbul'da da aktif",
    ],
    sections: [
      {
        h: "Tokat'ta web sitesi yaptırmak isteyen ne arıyor?",
        paragraphs: [
          "Çoğu işletme Google'a \"Tokat web tasarım\", \"Tokat web sitesi\" veya \"Tokat'ta web sitesi yaptırmak\" yazar. Amaç güzel bir sayfa değil; telefonun çalması, teklif talebinin forma düşmesi ve \"Tokat + sektörünüz\" aramalarında görünür olmaktır.",
          "Bu yüzden web tasarım seçimi bir baskı işi değil, satış kanalı kurulumudur. Teklife bakarken yalnızca mockup değil, yerel SEO, mobil hız, WhatsApp/form akışı ve bakım şartını da sorun.",
        ],
      },
      {
        h: "Yerel stüdyo ile büyük şehir ajansı farkı",
        paragraphs: [
          "İstanbul veya Ankara merkezli bir ajans teknik olarak çok iyi iş çıkarabilir; fakat Tokat pazarını, rakiplerinizi ve yüz yüze keşif ihtiyacını genelde ikinci plana atar. Yerel bir Tokat web tasarım stüdyosu; asansör, emlak, otomotiv, mühendislik gibi şehirdeki sektör dilini bilir ve Google Haritalar + yerel arama rekabetini doğru okur.",
          "BCY Dijital, Tokat merkezli çalışır; Çanakkale, İzmir ve İstanbul'da da aktif hizmet verir. Görüşmeler yüz yüze veya görüntülü yapılır; teslim hedefi kurumsal sitelerde 5 iş günüdür.",
        ],
        image: IMG.guzubey,
        imageAlt: "Guzubey Asansör — Tokat kurumsal web tasarım referansı",
      },
      {
        h: "Teklif almadan önce sormanız gereken 5 soru",
        paragraphs: [
          "1) Site kimde kalacak — alan adı ve hosting sizin adınıza mı? 2) Teslim süresi yazılı mı? 3) SEO ve schema dahil mi, yoksa \"sonradan ekleriz\" mi? 4) Mobil ve hız (PageSpeed/Lighthouse) nasıl ölçülecek? 5) Yayın sonrası destek ne kadar, ne kadara?",
          "Bu sorulara net cevap vermeyen teklif, ucuz gelse de uzun vadede pahalıdır. Tokat web tasarımında güven, şeffaflığın yazılı hâline bağlıdır.",
        ],
        bullets: [
          "Alan adı + hosting sahipliği",
          "Yazılı teslim tarihi",
          "SEO / schema dahil mi?",
          "Hız ölçümü ve bakım şartı",
        ],
      },
      {
        h: "BCY Dijital ile süreç nasıl işler?",
        paragraphs: [
          "Ücretsiz keşif görüşmesinde işinizi ve hedeflerinizi dinleriz. Ardından kapsam, süre ve ücret kalem kalem yazılır. Tasarım onayı sonrası Next.js altyapısıyla kurumsal site, e-ticaret veya katalog site inşa edilir; SEO iskeleti, Search Console yönlendirmesi ve gerektiğinde Google Haritalar kurulumu teslimle birlikte gelir.",
          "Referanslarımızı Tokat ve çevresindeki gerçek işletmelerden görebilirsiniz: asansör, mermer, yedek parça, mühendislik ve daha fazlası. Detay için Projeler ve Tokat Web Tasarım sayfalarına bakın.",
        ],
        image: IMG.polat,
        imageAlt: "Polat Mermer — Tokat B2B web tasarım projesi",
      },
    ],
    faq: [
      {
        q: "Tokat'ta web tasarım kim yapıyor?",
        a: "Yerel stüdyolar (ör. BCY Dijital) ve uzaktan çalışan ajanslar. Güvenilir seçim yazılı teklif, net süre, SEO ve sahiplik şartıyla yapılır.",
      },
      {
        q: "Kurumsal site kaç günde teslim edilir?",
        a: "İçerik ve onaylar hazırsa BCY Dijital'de hedef 5 iş gündür.",
      },
      {
        q: "SEO pakete dahil mi?",
        a: "Kurumsal paketlerimizde teknik SEO iskeleti, schema ve hız hedefi standarttır. Aylık içerik/SEO büyümesi ayrı pakettir.",
      },
    ],
  },
  {
    slug: "tokatta-web-sitesi-kac-tl",
    title: "Tokat'ta web sitesi yaptırmak kaç TL tutar?",
    description:
      "Tokat'ta web sitesi fiyatlarını 2026'da belirleyen etkenler: sayfa sayısı, tasarım özgünlüğü, e-ticaret ve panel. Şeffaf çerçeve.",
    date: "2026-06-10",
    updated: "2026-07-15",
    tags: ["Tokat", "Fiyat"],
    region: "Tokat",
    coverImage: IMG.yonel,
    coverAlt: "Tokat web sitesi fiyat rehberi — katalog / kurumsal site örneği",
    directAnswer:
      "Tokat'ta web sitesi fiyatı; sayfa sayısına, tasarımın şablonla mı özgün mü yapıldığına ve e-ticaret ya da yönetim paneli ihtiyacına göre değişir. Tek sayfalık tanıtım sitesiyle çok sayfalı kurumsal site veya e-ticaret mağazası arasında birkaç kat fiyat farkı olması normaldir.",
    highlights: [
      "Fiyat = kapsam + özgünlük + süreklilik",
      "\"Her şey dahil X TL\" → neyin dahil olduğuna bakın",
      "Kurumsal 5–10 sayfa çoğu yerel işletmenin ilk ihtiyacı",
      "BCY: keşif sonrası yazılı teklif — rastgele rakam yok",
    ],
    sections: [
      {
        h: "Fiyatı asıl belirleyen üç şey",
        paragraphs: [
          "Birincisi kapsam: kaç sayfa, hangi özellikler? İletişim formu ile ilan yönetim sistemi aynı emek değildir. İkincisi özgünlük: hazır tema üzerine logo değiştirmekle sıfırdan tasarım arasında hem fiyat hem sonuç farkı vardır. Üçüncüsü süreklilik: bakım, içerik güncellemesi ve SEO desteği isteyip istemediğiniz.",
          "\"Her şey dahil X TL\" diyen tekliflere temkinli yaklaşın. Neyin dahil olduğu yazılı olmayan teklif, sonradan sürprizle tamamlanır.",
        ],
        bullets: [
          "Kapsam (sayfa / özellik)",
          "Özgün tasarım vs hazır tema",
          "Bakım ve SEO sürekliliği",
        ],
      },
      {
        h: "Tokat'ta sık görülen paketler (kabaca)",
        paragraphs: [
          "Kurumsal tanıtım sitesi (5–10 sayfa, form, SEO iskeleti): çoğu yerel işletmenin ilk ihtiyacı budur. Katalog / yedek parça / ürün listesi sitesi: arama ve filtre artırır maliyeti. E-ticaret: ödeme, kargo, stok ve yasal metinlerle en kapsamlı katmandır.",
          "BCY Dijital'de ücretsiz keşif sonrası yazılı teklif alırsınız; kapsam netleşmeden rastgele rakam söylemeyiz. Amaç en ucuz teklif değil, telefonu çaldıran doğru kapsamdır.",
        ],
        image: IMG.yonel,
        imageAlt: "Yönel Oto Yedek Parça — katalog odaklı web sitesi",
      },
      {
        h: "Ucuz sitenin gizli maliyeti",
        paragraphs: [
          "Yavaş açılan, mobilde bozulan, Google'da görünmeyen bir site fiilen yoktur; sadece masrafı yapılmıştır. Web sitesi bir gider değil, telefonu çaldıran bir yatırımdır — doğru yapılırsa.",
          "Karar verirken fiyat yerine şu soruyu sorun: bu site bana ayda kaç yeni müşteri kazandırabilir? Tokat web tasarımında ölçülebilir hedef, güzel görselden önce gelir.",
        ],
      },
    ],
    faq: [
      {
        q: "Tokat'ta web sitesi kaç TL?",
        a: "Tek bir rakam yoktur; kapsam ve özgünlüğe göre değişir. Keşif sonrası yazılı teklifle netleşir.",
      },
      {
        q: "En ucuz teklifi mi seçmeliyim?",
        a: "Hayır. Sahiplik, hız, SEO ve destek yazılı olmayan ucuz site uzun vadede pahalıdır.",
      },
      {
        q: "E-ticaret kurumsal siteden neden daha pahalı?",
        a: "Ödeme, stok, kargo, yasal metinler ve güvenlik katmanları ekstra geliştirme ve test gerektirir.",
      },
    ],
  },
  {
    slug: "tokat-web-sitesi-ne-kadar-surer",
    title: "Tokat'ta web sitesi kaç günde hazır olur?",
    description:
      "Tokat web tasarım sürecinde gerçekçi süre 2026: kurumsal sitelerde 5 iş günü hedefi, sizi yavaşlatan içerik ve onay adımları.",
    date: "2026-07-08",
    updated: "2026-07-15",
    tags: ["Tokat", "Süreç"],
    region: "Tokat",
    coverImage: IMG.mufat,
    coverAlt: "Tokat web sitesi teslim süresi — kurumsal proje örneği",
    directAnswer:
      "Tokat'ta kurumsal bir web sitesi, içerikler ve kararlar hazırsa genellikle 5 iş günü içinde teslim edilebilir. E-ticaret, özel katalog veya çok dilli yapılar kapsamında süre uzar; ilk görüşmede net takvim yazılır.",
    highlights: [
      "Kurumsal hedef: 5 iş günü (içerik + onay hazırsa)",
      "Gecikme genelde eksik içerik / uzun onaydandır",
      "Keşifte checklist: logo, metin, fotoğraf, iletişim",
      "Yayın sonrası: Search Console + hızlı düzeltmeler",
    ],
    sections: [
      {
        h: "5 iş günü ne anlama geliyor?",
        paragraphs: [
          "Keşif sonrası yazılan teklifte sayfa listesi, teslim tarihi ve sizin yapmanız gerekenler (logo, metin, fotoğraf) netleşir. Biz tasarım ve kodlamayı paralel ilerletiriz; siz onay verdiğiniz sürece takvim korunur.",
          "Geçikmenin en sık nedeni tasarımcı değil, eksik içerik veya uzun onaydır. Bu yüzden keşifte içerik checklist'i çıkarırız.",
        ],
      },
      {
        h: "Süreci hızlandıran hazırlıklar",
        paragraphs: [
          "Firma adı, logo (varsa), telefon-WhatsApp, çalışma saatleri, hizmet listesi ve 5–10 adet gerçek fotoğraf. Rakip sitelerin beğendiğiniz / beğenmediğiniz yanları da yönümüzü netleştirir.",
          "Metinler sonradan da güncellenebilir; fakat ana sayfa ve hizmet sayfalarının ilk taslağı ne kadar erken gelirse yayın o kadar erken olur.",
        ],
        bullets: [
          "Logo + iletişim bilgileri",
          "Hizmet listesi",
          "5–10 gerçek fotoğraf",
          "Rakip notları",
        ],
        image: IMG.mufat,
        imageAlt: "Mufat İnşaat — Tokat / Turhal kurumsal web projesi",
      },
      {
        h: "Yayın sonrası ne olur?",
        paragraphs: [
          "Site canlıya alındığında iş bitmez: Search Console, hızlı düzeltmeler ve gerekirse Google İşletme Profili yönlendirmesi teslimle birlikte konuşulur. Aylık bakım isteyenler için ayrı paket sunulur.",
          "Tokat web sitesi yaptırmak bir sprint değil, satış kanalını açmaktır; açılış sonrası ölçümle büyütürüz.",
        ],
      },
    ],
    faq: [
      {
        q: "5 iş günü garanti mi?",
        a: "Hedefimizdir; takvim teklifte yazılır. İçerik veya onay gecikirse süre kayar — bu keşifte şeffaf anlatılır.",
      },
      {
        q: "E-ticaret ne kadar sürer?",
        a: "Kapsama göre planlanır; ürün sayısı, ödeme ve entegrasyonlar süreyi belirler. İlk görüşmede net tarih verilir.",
      },
      {
        q: "İçerik yoksa ne olur?",
        a: "Checklist ile yönlendiririz; taslak metin veya kısa brieften de ilerleyebiliriz. Ama fotoğraf ve temel bilgiler şarttır.",
      },
    ],
  },
  {
    slug: "tokatta-kurumsal-web-sitesi",
    title: "Tokat'ta kurumsal web sitesi neden şart?",
    description:
      "Tokat işletmeleri için kurumsal web sitesinin rolü: teklif eki, güven sinyali, yerel SEO ve WhatsApp/form ile gelen talep.",
    date: "2026-07-05",
    updated: "2026-07-15",
    tags: ["Tokat", "Kurumsal"],
    region: "Tokat",
    coverImage: IMG.imbat,
    coverAlt: "Tokat kurumsal web sitesi — OSGB / hizmet sektörü örneği",
    directAnswer:
      "Tokat'ta kurumsal web sitesi; işletmenizin dijital kartviziti değil, teklif süreçlerinde güven veren vitrin ve \"Tokat + hizmetiniz\" aramalarında bulunma kanalıdır. Instagram tek başına bunu karşılamaz.",
    highlights: [
      "Instagram keşif; site karar ve teklif aşaması",
      "4 parça: hizmetler, referans, iletişim, teknik SEO",
      "NAP + Google İşletme Profili yerel görünürlük temeli",
      "BCY: asansör, mermer, otomotiv, mühendislik standartı",
    ],
    sections: [
      {
        h: "Instagram yetmez mi?",
        paragraphs: [
          "Sosyal medya keşif için iyidir; fakat ihale, B2B teklif veya ciddi alıcı, resmi bir site ve net iletişim bekler. Kurumsal sitede hizmetler, referanslar, adres/iletişim ve güven unsurları tek yerde durur.",
          "Ayrıca Google aramasında görünen sonuç çoğunlukla sitedir. Tokat web tasarımında hedef, sosyal medyayı besleyen değil — aramadan gelen müşteriyi yakalayan bir site kurmaktır.",
        ],
      },
      {
        h: "İyi kurumsal sitenin 4 parçası",
        paragraphs: [
          "1) Net hizmet sayfaları 2) Gerçek fotoğraf ve referans 3) Kolay iletişim (form + WhatsApp + telefon) 4) Teknik SEO + hızlı mobil açılış. Bunlardan biri eksikse site \"var\" ama iş getirmez.",
          "BCY Dijital, Tokat'taki asansör, mermer, otomotiv ve mühendislik projelerinde bu dört parçayı standart tutar.",
        ],
        image: IMG.imbat,
        imageAlt: "İmbat OSGB — kurumsal web tasarım referansı",
        bullets: [
          "Hizmet sayfaları",
          "Gerçek fotoğraf + referans",
          "Form + WhatsApp + telefon",
          "Hız + schema + mobil",
        ],
      },
      {
        h: "Yerel SEO ile birlikte düşünün",
        paragraphs: [
          "Kurumsal site + Google İşletme Profili + tutarlı NAP (isim, adres, telefon) üçlüsü, Tokat yerel aramalarında görünürlüğün temelidir. Yalnızca tema değiştirmek yeterli değildir.",
          "Detaylı yerel SEO adımları için blogdaki SEO rehberine ve hizmetler sayfamızdaki SEO / GEO içeriklerine bakabilirsiniz.",
        ],
      },
    ],
    faq: [
      {
        q: "Kurumsal site ile one-page farkı nedir?",
        a: "Kurumsal site hizmetleri ayrı sayfalarda derinlik sunar; one-page kısa tanıtım içindir. Teklif ve SEO için çok sayfalı yapı genelde daha güçlüdür.",
      },
      {
        q: "Sadece Instagram yeter mi?",
        a: "Keşif için evet, dönüşüm ve B2B güven için hayır. Resmi site arama ve teklifte beklenir.",
      },
      {
        q: "Google Haritalar siteye bağlanır mı?",
        a: "Evet — İşletme Profili + site + tutarlı NAP birlikte çalışır. Teslimde yönlendiriyoruz.",
      },
    ],
  },
  {
    slug: "tokat-web-tasarim-ajansi-nasil-secilir",
    title: "Tokat web tasarım ajansı seçerken nelere bakılır?",
    description:
      "Tokat web tasarım ajansı veya freelance seçiminde 2026 kontrol listesi: portföy, sözleşme, SEO, hız, destek ve sahiplik.",
    date: "2026-07-14",
    updated: "2026-07-15",
    tags: ["Tokat", "Rehber"],
    region: "Tokat",
    coverImage: IMG.balsan,
    coverAlt: "Tokat web tasarım ajansı seçimi — portföy örnekleri",
    directAnswer:
      "Tokat'ta web tasarım ajansı seçerken portföyün sektörünüze yakınlığına, yazılı sözleşmeye, SEO'nun pakete dahil olup olmadığına, sitenin size ait kalacağına ve yayın sonrası desteke bakın. En düşük fiyat genelde en pahalı sondur.",
    highlights: [
      "Portföyde problem–çözüm–sonuç okuyun",
      "Alan adı / hosting / kod erişimi size ait olsun",
      "SEO'suz \"güzel site\" müşteri getirmez",
      "GEO isteyenlere ayrı katman önerilir",
    ],
    sections: [
      {
        h: "Portföy ve vaka okuma",
        paragraphs: [
          "Sadece \"güzel site\" değil: sorun neydi, nasıl çözüldü, sonuç ne oldu? BCY Dijital proje sayfalarında problem–çözüm–sonuç dilini bilinçli kullanır; canlı URL'leri de paylaşıyoruz.",
          "Kendi sektörünüze yakın bir örnek yoksa keşifte sormaktan çekinmeyin — benzer bir akış tasarlanabilir.",
        ],
        image: IMG.balsan,
        imageAlt: "Balsan Papel — marka ve kurumsal site referansı",
      },
      {
        h: "Sahiplik ve kilit riski",
        paragraphs: [
          "Alan adı, hosting paneli ve kod erişimi sizin adınıza olmalı. Ajansa kilitli site, ileride taşımak istediğinizde pahalıya patlar. Teklifte sahipliği yazılı isteyin.",
          "Bizde teslim sonrası kaynak ve yönetim erişimi müşteriye aittir; bakım isteğe bağlıdır.",
        ],
      },
      {
        h: "SEO'suz web tasarım eksik kalır",
        paragraphs: [
          "Tokat web tasarım aramasında çıkan rakipler çoğu zaman yalnızca görsel vaat eder. Siz \"web sitesi\" ararken aslında \"müşteri\" arıyorsunuz; SEO'suz site bunu getirmez.",
          "Teknik SEO, schema, hız ve yerel sayfa yapısı BCY Dijital'de kurumsal paketlerin parçasıdır. GEO (yapay zekâ aramaları) isteyenlere ayrı katman sunulur.",
        ],
        bullets: [
          "Teknik SEO + schema",
          "Yerel sayfa yapısı",
          "Hız (Lighthouse hedefi)",
          "İsteğe bağlı GEO",
        ],
      },
    ],
    faq: [
      {
        q: "Freelance mı ajans mı?",
        a: "Önemli olan kişi/firma değil; portföy, sözleşme, SEO ve destek. Yerel stüdyo Tokat pazarını daha iyi bilir.",
      },
      {
        q: "Sözleşme şart mı?",
        a: "Evet. Kapsam, süre, ücret, sahiplik ve destek yazılı olmalı.",
      },
      {
        q: "SEO dahil değilse ne olur?",
        a: "Site yayınlanır ama aramada görünmez; yatırımın geri dönüşü gecikir veya olmaz.",
      },
    ],
  },
  {
    slug: "yapay-zeka-aramalarinda-firmaniz-cikiyor-mu",
    title: "Yapay zekâ aramalarında firmanız çıkıyor mu?",
    description:
      "ChatGPT ve benzeri asistanlar müşterilerinize sizin yerinize rakibinizi öneriyor olabilir. GEO nedir, Tokat işletmeleri için neden şimdi önemli?",
    date: "2026-06-24",
    updated: "2026-09-29",
    tags: ["GEO", "SEO"],
    region: "Genel",
    coverImage: IMG.og,
    coverAlt: "GEO — yapay zekâ aramalarında işletme görünürlüğü",
    directAnswer:
      "Müşteriler artık \"Tokat'ta güvenilir emlakçı hangisi?\" gibi soruları doğrudan ChatGPT, Gemini ve benzeri asistanlara soruyor. Siteniz bu asistanların anlayacağı yapıda değilse, cevaplarda adınız hiç geçmiyor — müşteri daha sizi aramadan rakibinize gidiyor.",
    highlights: [
      "GEO = yapay zekâ cevaplarında kaynak olarak geçmek",
      "Net tanım cümleleri + SSS + schema şart",
      "Türkiye'de erken davranan avantajlıdır",
      "Test: ChatGPT'ye şehir + sektör sorun",
    ],
    sections: [
      {
        h: "GEO nedir?",
        paragraphs: [
          "GEO (Generative Engine Optimization), sitenizin yapay zekâ asistanlarının cevaplarında kaynak olarak kullanılmasını sağlayan çalışmadır. Net tanım cümleleri, soru-cevap yapısı, schema işaretlemesi ve tutarlı işletme bilgisi bu işin temelidir.",
          "Klasik SEO sayfa sıralamasına odaklanır; GEO ise asistanın \"kim önerilir?\" cevabında adınızın geçmesini hedefler. İkisi birlikte çalışır.",
        ],
        bullets: [
          "Doğrudan cevap cümleleri (lead)",
          "FAQ / SSS yapısı",
          "Schema.org işaretlemesi",
          "Tutarlı NAP ve hakkında bilgisi",
        ],
      },
      {
        h: "Neden şimdi?",
        paragraphs: [
          "Türkiye'de bu alana yatırım yapan yerel işletme henüz çok az. Sektöründe ilk davranan, asistanların 'varsayılan cevabı' olur; sonradan gelenin işi çok daha zordur.",
          "Kendi işletmeniz için basit bir test: ChatGPT'ye şehrinizi ve sektörünüzü sorun. Çıkan cevapta yoksanız, kaybettiğiniz müşteriyi hiç görmüyorsunuz demektir.",
        ],
        link: {
          label: "Kurumsal web sitesi için yapay zekâ yeterli mi?",
          href: "https://kocyigityazilim.com/blog/kurumsal-web-sitesi-yapay-zeka-yeterli-mi",
          note: "AI ile site üretmek ile Google'ın AI yanıtlarında kaynak olarak görünmek arasındaki farkı ele alan kapsamlı bir rehber.",
        },
        image: IMG.dalyan,
        imageAlt: "Dijital görünürlük — çok kanallı web ve SEO/GEO örneği",
      },
      {
        h: "Tokat işletmeleri için pratik adım",
        paragraphs: [
          "Önce sitenizin teknik temeli (hız, mobil, schema), sonra SSS ve blogda gerçek müşteri sorularına doğrudan cevaplar. BCY Dijital hem klasik SEO hem GEO katmanını Tokat, Çanakkale, İzmir ve İstanbul projelerinde uygular.",
          "Ücretsiz keşifte mevcut sitenizin asistan cevaplarında ne kadar \"alıntılanabilir\" olduğunu birlikte tarayabiliriz.",
        ],
      },
    ],
    faq: [
      {
        q: "GEO SEO'nun yerini mi alır?",
        a: "Hayır. SEO arama sonuçları, GEO asistan cevapları içindir. Güçlü site her ikisini de besler.",
      },
      {
        q: "Ne kadar sürer?",
        a: "Teknik ve içerik temeli birkaç haftada kurulabilir; asistanlarda görünürlük tutarlı yayın ve otoriteyle büyür.",
      },
      {
        q: "Küçük işletme için GEO mantıklı mı?",
        a: "Evet — özellikle yerel hizmette rakip azken erken başlamak maliyeti düşürür.",
      },
    ],
  },
  {
    slug: "isletmeler-icin-seo-nereden-baslanir",
    title: "Küçük işletme SEO'ya nereden başlamalı?",
    description:
      "Tokat ve çevresindeki yerel işletmeler için SEO'nun ilk üç adımı: Google Business Profile, teknik sağlık ve müşterinin gerçekten aradığı içerik.",
    date: "2026-07-01",
    updated: "2026-07-15",
    tags: ["SEO", "Tokat"],
    region: "Tokat",
    coverImage: IMG.mygolden,
    coverAlt: "Yerel işletme SEO rehberi — içerik ve teknik temel",
    directAnswer:
      "Yerel bir işletme SEO'ya üç adımla başlamalıdır: önce Google Business Profile kaydını eksiksiz doldurmak, sonra sitenin teknik sağlığını (hız, indekslenme, mobil uyum) düzeltmek, en son müşterilerin gerçekten sorduğu soruları cevaplayan içerikler yazmak.",
    highlights: [
      "1) Google Business Profile eksiksiz",
      "2) Search Console + hız + mobil",
      "3) Gerçek müşteri sorularına içerik",
      "Hakkımızda yazısı SEO değildir — soruya cevap yazın",
    ],
    sections: [
      {
        h: "1. Google Business Profile",
        paragraphs: [
          "Harita kaydınız; kategori, çalışma saatleri, fotoğraflar ve müşteri yorumlarıyla dolu olmalı. Yerel aramaların çoğunda harita kutusu, klasik sonuçlardan önce görünür. Tokat'ta \"web tasarım\" arayan müşteri de haritadan tıklayabilir.",
          "NAP (isim, adres, telefon) site ile birebir aynı olsun; tutarsızlık yerel sıralamayı zayıflatır.",
        ],
      },
      {
        h: "2. Teknik sağlık",
        paragraphs: [
          "Search Console'a kayıt olun, indekslenme hatalarını görün. Sitenizin mobilde 3 saniyeden hızlı açıldığından emin olun. Bu temel olmadan içerik çalışması boşa kürek çekmektir.",
          "HTTPS, sitemap, robots ve temel schema (LocalBusiness / Organization) ilk teknik kontrol listesidir.",
        ],
        image: IMG.mygolden,
        imageAlt: "Kurumsal web ve yerel SEO — marka sitesi örneği",
        bullets: [
          "Search Console kaydı",
          "Mobil hız < 3 sn hedefi",
          "Sitemap + indeks",
          "Temel schema",
        ],
      },
      {
        h: "3. Müşterinin sorduğu sorular",
        paragraphs: [
          "\"Hakkımızda\" yazısı kimseyi getirmez. \"Asansör bakım sözleşmesi zorunlu mu?\" gibi gerçek soruların cevabı getirir. Müşterilerinizin telefonda sorduğu ilk beş soruyu yazıya dökün; SEO içeriğinizin ilk beş konusu hazır.",
          "BCY Dijital blogundaki Tokat web sitesi ve web tasarım yazıları da aynı mantıkla yazılmıştır: soruya doğrudan cevap, sonra derinleştirme.",
        ],
      },
    ],
    faq: [
      {
        q: "SEO ne kadar sürer?",
        a: "Teknik düzeltmeler haftalar içinde; içerik ve otorite aylar içinde büyür. Yerel aramada erken kazanımlar mümkündür.",
      },
      {
        q: "İçerik ajansı mı site mi önce?",
        a: "Önce teknik sağlıklı site, sonra içerik. Temelsiz blog sıralanmaz.",
      },
      {
        q: "BCY SEO hizmeti veriyor mu?",
        a: "Evet — kurumsal paketlerde teknik SEO; büyüme için içerik, yerel SEO ve GEO katmanları sunulur.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

/** En yeni önce (updated, yoksa date) */
export function getPostsSorted() {
  return [...posts].sort((a, b) => {
    const da = a.updated || a.date;
    const db = b.updated || b.date;
    return da < db ? 1 : da > db ? -1 : 0;
  });
}
