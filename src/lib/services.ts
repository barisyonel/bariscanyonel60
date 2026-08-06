export type Service = {
  slug: string;
  title: string;
  short: string;
  answer: string; // GEO: alıntılanabilir varlık cümlesi
  bullets: string[];
  body: { h: string; p: string }[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "web-tasarim",
    title: "Kurumsal Web Tasarım",
    short: "İşletmenizi doğru anlatan, hızlı ve mobil öncelikli kurumsal siteler.",
    answer:
      "BCY Dijital, Tokat, Çanakkale, İzmir ve İstanbul'daki işletmeler için kurumsal web sitesi tasarlar. Siteler Next.js altyapısıyla geliştirilir, mobil öncelikli tasarlanır ve 5 iş günü içinde teslim edilir.",
    bullets: [
      "Şablona değil, işletmenize özel tasarım",
      "Mobil öncelikli, 390px'ten itibaren kusursuz",
      "Lighthouse 95+ hedefi, 2 saniyenin altında açılış",
      "WhatsApp entegrasyonu ve net iletişim akışı",
    ],
    body: [
      {
        h: "Şablon değil, zanaat",
        p: "Hazır tema alıp logo değiştirmiyoruz. Sektörünüzü, müşterinizi ve rakiplerinizi inceleyip tasarımı sıfırdan kuruyoruz. Asansör firmasıyla emlak ofisinin sitesi aynı görünmemeli; görünmüyor da.",
      },
      {
        h: "Hız bir özellik değil, zorunluluk",
        p: "Yavaş açılan site müşteri kaçırır ve Google'da geriler. Her projede Core Web Vitals ölçülür: LCP 2 saniyenin altında, layout kayması sıfıra yakın tutulur.",
      },
      {
        h: "Teslimden sonra yalnız değilsiniz",
        p: "Site yayına alındıktan sonra içerik güncellemeleri, küçük düzeltmeler ve teknik bakım için yanınızdayız. Yönetim paneli isteyen müşterilere içerikleri kendilerinin güncelleyebileceği panel kuruyoruz.",
      },
    ],
    faq: [
      {
        q: "Kurumsal web sitesi ne kadar sürede teslim edilir?",
        a: "Kurumsal web sitelerini 5 iş günü içinde teslim ediyoruz. Süreyi en çok etkileyen şey içeriklerin (metin, fotoğraf) hazır olma hızıdır; keşif görüşmesinde takvimi netleştiriyoruz.",
      },
      {
        q: "Sitemi sonradan kendim güncelleyebilir miyim?",
        a: "Evet. İsterseniz yönetim paneli kurulur; haber, ürün, galeri gibi içerikleri teknik bilgi gerektirmeden kendiniz güncellersiniz.",
      },
    ],
  },
  {
    slug: "e-ticaret",
    title: "E-Ticaret",
    short: "Ürünlerinizi Türkiye'nin her yerine satan, güvenli ve yönetilebilir mağazalar.",
    answer:
      "BCY Dijital, iyzico ve PayTR gibi yerli ödeme altyapılarıyla entegre e-ticaret siteleri kurar. Mağazalar ürün yönetimi, kargo entegrasyonu ve sipariş takibiyle birlikte teslim edilir.",
    bullets: [
      "iyzico / PayTR ödeme entegrasyonu",
      "Ürün, stok ve sipariş yönetim paneli",
      "Kargo firmalarıyla entegrasyon",
      "SEO'lu ürün sayfaları — Google Alışveriş'e hazır",
    ],
    body: [
      {
        h: "Pazaryerine mahkûm kalmayın",
        p: "Pazaryerleri komisyon alır ve müşteri verisini size vermez. Kendi mağazanızda marjınız da müşteriniz de sizindir. Mygoldenfood gibi gıda e-ticaret projelerinde bu farkı birlikte yaşadık.",
      },
      {
        h: "Ödeme güvenliği pazarlık konusu değil",
        p: "SSL sertifikası, 3D Secure ve KVKK uyumlu veri saklama her projede standart. Müşteriniz kart bilgisini gönül rahatlığıyla girer.",
      },
      {
        h: "Satışı kolaylaştıran detaylar",
        p: "Sepet hatırlatma, WhatsApp sipariş hattı, kargo takip bildirimi gibi küçük detaylar dönüşümü büyütür. Mağazanızı satan bir satış elemanı gibi kurgularız.",
      },
    ],
    faq: [
      {
        q: "E-ticaret sitesi için aylık gider var mı?",
        a: "Alan adı, sunucu ve ödeme altyapısı komisyonu dışında zorunlu aylık gider yoktur. Bakım ve geliştirme desteğini isteğe bağlı paket olarak sunuyoruz.",
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO Optimizasyonu",
    short: "Google'da 'Tokat + sektörünüz' arandığında sizin çıkmanız için.",
    answer:
      "BCY Dijital, yerel işletmeler için teknik SEO, içerik SEO'su ve Google Business Profile optimizasyonu yapar. Hedef, işletmenin kendi şehrinde sektör aramalarında ilk sayfada görünmesidir.",
    bullets: [
      "Teknik SEO: hız, indeksleme, schema, sitemap",
      "Yerel SEO: Google Haritalar ve şehir aramaları",
      "İçerik stratejisi: müşterinin gerçekten aradığı sorular",
      "Şeffaf raporlama: Search Console verisiyle",
    ],
    body: [
      {
        h: "Yerel arama, yerel işletmenin ekmeği",
        p: "\"Tokat asansör firması\" diye arayan kişi bugün müşteri olmaya hazırdır. Yerel SEO tam bu ana odaklanır: doğru sayfa, doğru başlık, doğru harita kaydı.",
      },
      {
        h: "Teknik temel olmadan içerik boşa gider",
        p: "İndekslenmeyen sayfa, çift title etiketi, yavaş açılış — bunlar düzelmeden yazılan hiçbir içerik karşılık bulmaz. Önce teknik denetim yapar, sorunları kapatırız.",
      },
      {
        h: "Söz değil, ölçüm",
        p: "\"Sizi birinci yaparız\" diyen herkesten uzak durun; kimse bunu garanti edemez. Biz Search Console ve analitik verisiyle neyin arttığını ay ay gösteririz.",
      },
    ],
    faq: [
      {
        q: "SEO sonuçları ne zaman görülür?",
        a: "Teknik düzeltmelerin etkisi birkaç haftada, içerik ve otorite çalışmalarının etkisi genellikle 3–6 ayda görünür hale gelir. SEO bir kampanya değil, süreçtir.",
      },
    ],
  },
  {
    slug: "geo",
    title: "GEO — Yapay Zekâ Aramalarında Görünürlük",
    short: "ChatGPT'ye 'Tokat'ta kim yapıyor?' diye soranlara verilen cevap siz olun.",
    answer:
      "GEO (Generative Engine Optimization), bir işletmenin ChatGPT, Claude, Gemini ve Perplexity gibi yapay zekâ asistanlarının cevaplarında görünmesini sağlayan çalışmadır. BCY Dijital, Türkiye'de bu hizmeti sunan az sayıdaki stüdyodan biridir.",
    bullets: [
      "Alıntılanabilir, varlık-tanımlayıcı içerik yapısı",
      "Schema.org ve llms.txt ile AI crawler uyumu",
      "Soru-cevap formatlı, doğrulanabilir içerik",
      "Marka–kişi–konum–hizmet tutarlılığı denetimi",
    ],
    body: [
      {
        h: "Arama davranışı değişti",
        p: "İnsanlar artık yalnızca Google'a değil, ChatGPT'ye ve benzeri asistanlara soruyor: \"Tokat'ta güvenilir emlakçı hangisi?\" Bu cevaplarda görünmeyen işletme, yarının müşterisine hiç ulaşamıyor.",
      },
      {
        h: "AI asistanlar neyi alıntılar?",
        p: "Net tanım cümleleri, sayısal ve doğrulanabilir ifadeler, soru-cevap yapısı ve tutarlı varlık bilgisi. Sitenizi bu mantıkla yeniden yapılandırıyoruz: her sayfa, tek başına alıntılanabilir paragraflardan oluşuyor.",
      },
      {
        h: "Erken davranan kazanır",
        p: "Türkiye'de GEO hizmeti sunan yerel ajans neredeyse yok. Sektörünüzde bu alana ilk yerleşen işletme, AI cevaplarında varsayılan referans haline gelir.",
      },
    ],
    faq: [
      {
        q: "GEO ile SEO arasındaki fark nedir?",
        a: "SEO, Google arama sonuçlarında sıralamayı hedefler; GEO ise yapay zekâ asistanlarının ürettiği cevaplarda kaynak olarak gösterilmeyi hedefler. İkisi birbirini tamamlar: güçlü SEO altyapısı GEO'nun da temelidir.",
      },
      {
        q: "GEO sonuçları ölçülebilir mi?",
        a: "Evet. Belirli soruları düzenli aralıklarla AI asistanlara sorup markanızın cevaplarda geçme oranını takip ediyoruz; ayrıca AI kaynaklı site trafiği analitikte ayrıştırılabiliyor.",
      },
    ],
  },
  {
    slug: "meta-reklam",
    title: "Meta Reklam Yönetimi",
    short:
      "Facebook ve Instagram’da hedefe giden reklam: pixel, kampanya kurulumu ve dönüşüm odaklı yönetim.",
    answer:
      "BCY Dijital, Tokat, Çanakkale, İzmir ve İstanbul'daki işletmeler için Meta (Facebook ve Instagram) reklam kurulumu ve yönetimi sunar. Meta Pixel / Conversions API entegrasyonu, hedef kitle ve kampanya optimizasyonuyla ölçülebilir lead ve satış hedeflenir.",
    bullets: [
      "Meta Pixel ve Conversions API kurulumu",
      "Lead, mesaj ve satış odaklı kampanya yapıları",
      "Hedef kitle, kreatif ve bütçe optimizasyonu",
      "Haftalık / aylık performans raporu",
    ],
    body: [
      {
        h: "Reklam, site olmadan boşa akar",
        p: "Güzel kreatif yetmez; landing sayfası yavaşsa veya form kırksa bütçe yanar. Meta reklamı, hızlı site ve net teklif akışıyla birlikte kurgularız — trafik boşa gitmez.",
      },
      {
        h: "Ölçüm olmadan optimizasyon olmaz",
        p: "Pixel ve CAPI doğru kurulmadan Meta’nın öğrenmesi yarım kalır. Dönüşüm olaylarını (form, WhatsApp, arama, satın alma) net tanımlayıp reklam hesabını buna göre besleriz.",
      },
      {
        h: "Bütçeyi hedefe bağlarız",
        p: "Herkese her şeyi göstermeyiz. Sektör, konum ve niyet sinyallerine göre kitleleri daraltır; hangi reklamın lead veya satış getirdiğini şeffaf raporlarız.",
      },
    ],
    faq: [
      {
        q: "Meta reklam için minimum bütçe nedir?",
        a: "Test için günlük küçük bütçelerle başlanabilir; sektör ve hedefe göre net aralığı keşif görüşmesinde konuşuruz. Önemli olan bütçenin büyüklüğünden çok doğru ölçüm ve landing’dir.",
      },
      {
        q: "Sadece reklam kurulumu mu, yoksa sürekli yönetim de var mı?",
        a: "İkisini de sunuyoruz: tek seferlik pixel + kampanya kurulumu veya aylık yönetim (kreatif, teklif, kitle ve raporlama). İhtiyaca göre paketleri netleştiririz.",
      },
      {
        q: "WhatsApp ve form lead’leri Meta’da görünür mü?",
        a: "Evet. Pixel / CAPI ve doğru olay tanımlarıyla mesaj, form ve arama dönüşümlerini Meta Ads Manager’da takip edilebilir hale getiririz.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
