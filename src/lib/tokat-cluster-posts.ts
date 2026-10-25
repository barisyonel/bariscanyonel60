import type { Post } from "./posts";

const IMG = {
  guzubey: "/projects/guzubey-asansor.jpg",
  sanayi: "/projects/tokat-sanayi-sitesi.jpg",
  polat: "/projects/polat-mermer.jpg",
  yonel: "/projects/yonel-oto-yedek-parca.jpg",
  mufat: "/projects/mufat-insaat.jpg",
  metod: "/projects/metod-muhendislik.jpg",
} as const;

export const tokatClusterPosts: Post[] = [
  {
    slug: "tokat-kucuk-isletme-web-sitesi-rehberi",
    title: "Tokat küçük işletmeler için web sitesi rehberi",
    description:
      "Tokat’ta küçük bir işletme web sitesine nereden başlamalı? Sayfa listesi, telefon, WhatsApp, fotoğraf ve ilk yıl boyunca siteyi ayakta tutan işler.",
    date: "2026-10-25",
    updated: "2026-10-25",
    tags: ["Tokat", "Küçük İşletme"],
    region: "Tokat",
    coverImage: IMG.sanayi,
    coverAlt: "Tokat Sanayi Sitesi esnaf rehberi — küçük işletmelerin bulunduğu bir web sitesi",
    directAnswer:
      "Tokat’taki küçük bir işletmenin ilk web sitesi; ne iş yaptığınızı, nerede olduğunuzu ve nasıl ulaşılacağınızı gösteren 5–7 sayfalık bir vitrindir. Katalog, e-ticaret veya özel panel ilk günden şart değildir.",
    highlights: [
      "İlk site: hizmet, iletişim, hakkımızda, gerçek fotoğraf",
      "Telefon ve WhatsApp, sosyal medya hesabından daha kalıcıdır",
      "Hazır tema ucuz görünür, telefonda bozulursa teklif getirmez",
      "Alan adı size ait olsun",
    ],
    sections: [
      {
        h: "Küçük işletme sitesinde hangi sayfalar yeter?",
        paragraphs: [
          "Ana sayfa, hizmetler, hakkımızda, iletişim ve gerekirse bir referans sayfası çoğu esnaf ve atölye için yeter. Her hizmet için ayrı bir roman yazmanıza gerek yok; müşterinin telefonda sorduğu üç sorunun cevabı sayfada durmalıdır.",
          "Restoran için menü ve konum, avukat için çalışma alanları, sanayi esnafı için ne tamir ettiği bu sayfaların içine girer. Aynı iskeleti herkese kopyalamak, sayfayı doldurmak değildir.",
        ],
      },
      {
        h: "Fotoğraf ve iletişim, metinden önce gelir",
        paragraphs: [
          "Stok görselle kurulmuş bir kafe sitesi, Tokat’taki dükkânı anlatmaz. Telefon, WhatsApp, çalışma saati ve mümkünse gerçek mekân fotoğrafı ilk hafta hazır olmalıdır. Bunlar yokken tasarım onayına geçmek süreyi uzatır.",
          "Google İşletme Profiliniz varsa sitedeki telefon ve işletme adı aynı yazılmalıdır. Farklı numara, haritadan gelen kişiyi yanlış yere götürür.",
        ],
      },
      {
        h: "İlk yıl neye bütçe ayırmalısınız?",
        paragraphs: [
          "Alan adı, barındırma ve küçük içerik düzeltmeleri sitenin açık kalması için yeter. Aylık reklam veya SEO, ancak sitede anlatılacak net bir hizmet varsa anlamlıdır. Önce sayfa doğru çalışsın, sonra trafik satın alınsın.",
        ],
        bullets: [
          "Alan adı işletmenin üzerine kayıtlı olsun",
          "Yılda bir içerik ve telefon kontrolü",
          "Reklamı, formu çalışan bir sayfaya verin",
        ],
      },
    ],
    faq: [
      {
        q: "Instagram varken site şart mı?",
        a: "Keşif için hesap işe yarar. Teklif, harita ve arama sonucu için kendi siteniz daha kalıcıdır. Hesap kapanırsa dükkânın resmi adresi kaybolur.",
      },
      {
        q: "Tek sayfa yeter mi?",
        a: "Çok dar bir hizmette evet. Birden fazla hizmet anlatıyorsanız ayrı bölümler hem okuyan kişiye hem arama motoruna daha açıktır.",
      },
      {
        q: "Siteyi kendim güncelleyebilir miyim?",
        a: "Haber, fiyat veya galeri sık değişiyorsa yönetim paneli teklife eklenir. Sık değişmeyen bir vitrinde panel şart değildir.",
      },
    ],
    links: [
      { href: "/tokat-web-tasarim", label: "Tokat’ta web sitesi hizmeti" },
      { href: "/hizmetler/web-tasarim", label: "Kurumsal web tasarım" },
      { href: "/projeler", label: "Yayındaki işler" },
      { href: "/iletisim", label: "Ücretsiz teklif" },
    ],
  },
  {
    slug: "tokatta-seo-ile-google-gorunurlugu",
    title: "Tokat’ta SEO ile Google’da nasıl görünürsünüz?",
    description:
      "Tokat’ta Google’da görünmek için önce indeks ve hız, sonra hizmet sayfası ve Google İşletme Profili. Sıra vaadi olmadan uygulanabilir sıra.",
    date: "2026-10-25",
    updated: "2026-10-25",
    tags: ["Tokat", "SEO"],
    region: "Tokat",
    coverImage: IMG.metod,
    coverAlt: "Metod Mühendislik Tokat kurumsal sitesi — hizmet sayfaları olan bir örnek",
    directAnswer:
      "Tokat’ta Google’da görünmek, anahtar kelimeyi sayfaya dizmekle olmaz. Sitenin indekslenmesi, hizmetin ayrı anlatılması ve Google İşletme Profili ile sitedeki bilgilerin aynı olması gerekir. Üst sıra ayrıca zaman ve içerik ister.",
    highlights: [
      "Önce Search Console: sayfa indekste mi?",
      "Geniş şehir kelimesi yerine hizmet + Tokat",
      "Harita kaydı ile sitedeki telefon aynı olsun",
      "Kimse birinci sıra garantisi veremez",
    ],
    sections: [
      {
        h: "Hangi aramalar gerçekten müşteri getirir?",
        paragraphs: [
          "“Tokat web tasarım” gibi geniş aramalar rekabetlidir ve her işletmenin hedefi değildir. Asansör bakımı, avukat, yedek parça veya mermer arayan kişi hizmetin adını yazar. Sayfanız o işi anlatmıyorsa şehir adını eklemek sıralama getirmez.",
          "Firma adınızla yapılan arama ilk kazanmanız gereken sonuçtur. İnsanlar sizi tavsiyeyle bulup siteye bakar. Bu aramada çıkmıyorsanız reklamdan önce teknik bir sorun vardır.",
        ],
      },
      {
        h: "Teknik iş bitmeden içerik yazmayın",
        paragraphs: [
          "Search Console’da sayfa “keşfedildi ama indekslenmedi” diyorsa yeni blog yazısı beklemede kalır. HTTPS, sitemap, kopya başlık ve çok yavaş açılış bu kuyruğun sık nedenleridir.",
          "Başlıkta hizmet, sayfada aynı hizmet, görsellerde o işi gösteren fotoğraf. Bu üçü uyumsuzsa Google sayfayı yanlış kümeye koyar.",
        ],
      },
      {
        h: "Yerel sonuç ile mavi link aynı şey değildir",
        paragraphs: [
          "Harita kutusu, klasik sonuçların üstünde durabilir. Kategori, çalışma saati, fotoğraf ve gerçek müşteri yorumu burada sitenin meta açıklamasından daha görünürdür. Yorum satın almak hem politika ihlalidir hem de profili riske atar.",
          "Sitedeki yerel sayfa, harita kaydının yerine geçmez. İkisi aynı adı ve telefonu söylemeli, biri diğerinin kopyası olmak zorunda değildir.",
        ],
      },
    ],
    faq: [
      {
        q: "SEO pakete dahil mi?",
        a: "Teknik iskelet site tesliminin parçasıdır. Aylık içerik ve harita yönetimi ayrı bir çalışmadır.",
      },
      {
        q: "Kaç haftada birinci olurum?",
        a: "Bunu söyleyen teklife itibar etmeyin. Firma adında erken sonuç görülebilir. Rekabetçi hizmet aramaları aylar sürebilir.",
      },
      {
        q: "Blog şart mı?",
        a: "Müşterinin sorduğu gerçek sorular varsa evet. Her hafta aynı şehir kelimesiyle yazılmış yazı fayda etmez.",
      },
    ],
    links: [
      { href: "/tokat-web-tasarim", label: "Tokat işletmeleri için web tasarım" },
      { href: "/hizmetler/seo", label: "SEO hizmeti" },
      { href: "/blog/tokat-google-haritalar-seo-rehberi", label: "Google Haritalar rehberi" },
      { href: "/iletisim", label: "Keşif görüşmesi" },
    ],
  },
  {
    slug: "tokat-google-haritalar-seo-rehberi",
    title: "Tokat işletmeleri için Google Haritalar rehberi",
    description:
      "Tokat’ta Google Haritalar kaydı: doğru kategori, telefon tutarlılığı, fotoğraf ve gerçek yorum. Sahte yorum veya konum hilesi yok.",
    date: "2026-10-25",
    updated: "2026-10-25",
    tags: ["Tokat", "Google Haritalar"],
    region: "Tokat",
    coverImage: IMG.guzubey,
    coverAlt: "Guzubey Asansör web sitesi — Tokat’ta harita ve site bilgisi tutarlı olması gereken bir işletme örneği",
    directAnswer:
      "Tokat’ta haritada görünmek için Google İşletme Profili doğrulanmalı, kategori işinizi anlatmalı ve sitedeki telefonla aynı olmalıdır. Hizmet alanı, dükkânınız yoksa dürüstçe seçilir; olmayan bir sokak adresi yazılmaz.",
    highlights: [
      "Kategori, sıralamadan önce gelen sınıflandırmadır",
      "Site, harita ve tabela aynı telefonu kullanır",
      "Fotoğraf dükkânın veya işin kendisi olmalı",
      "Yorum isteyin; yorum satın almayın",
    ],
    sections: [
      {
        h: "Profili açarken ilk kontrol",
        paragraphs: [
          "İşletme adı tabeladaki ad olmalı. Anahtar kelimeyi işletme adına eklemek Google’ın politikasına aykırıdır ve profilin askıya alınmasına yol açabilir. Birincil kategori, müşterinin aradığı işe en yakın olanıdır; ikincil kategoriler gerçekten verdiğiniz işlerse eklenir.",
          "Adresiniz yoksa veya müşteriye açık bir ofis değilse hizmet bölgesi olarak Tokat ve çalıştığınız ilçeler seçilir. Haritada pin, gerçekten bulunduğunuz yere konur.",
        ],
      },
      {
        h: "Site ile profil neden aynı konuşmalı?",
        paragraphs: [
          "Haritadan gelen kişi siteye tıkladığında farklı bir telefon veya farklı bir şehir görürse formu terk eder. Bu tutarsızlık yerel sıralamayı da zayıflatır. Web sitesi alanına kendi alan adınızı yazın; sosyal medya profili web sitesinin yerine geçmez.",
          "Çalışma saatleri sitede, profilde ve kapıda aynı olsun. Cumartesi açıksanız profilde kapalı yazmak, o gün gelen aramayı keser.",
        ],
      },
      {
        h: "Yorum ve fotoğraf",
        paragraphs: [
          "İşini bitirdiğiniz müşteriden Google üzerinden yorum istemek doğrudur. Yorum karşılığı indirim dayatmak, sahte hesap açmak veya yorum satın almak doğru değildir ve profili riske atar. Gelen yoruma, kısa ve gerçek bir cevap yazmak yeter.",
          "Fotoğraflar ekip, iş, ürün veya ofis olsun. Her hafta alakasız stok görsel yüklemek profili doldurmaz.",
        ],
      },
    ],
    faq: [
      {
        q: "Harita kaydı site olmadan olur mu?",
        a: "Olur, fakat site adresi boş kalır. Arama yapan kişi karar vermek için yine bir sayfa arar.",
      },
      {
        q: "Birden fazla ilçeye pin koyabilir miyim?",
        a: "Olmayan şubeler için pin açmayın. Hizmet verdiğiniz ilçeleri hizmet alanı olarak belirtin.",
      },
      {
        q: "Yorumlara cevap yazmalı mıyım?",
        a: "Evet. Kısa, nazik ve konuya dair cevap hem müşteriye hem profili okuyana yeter.",
      },
    ],
    links: [
      { href: "/hizmetler/seo", label: "Yerel SEO hizmeti" },
      { href: "/tokat-web-tasarim", label: "web tasarım hizmetimiz" },
      { href: "/iletisim", label: "Profil ve site kontrolü" },
      { href: "/projeler", label: "Tokat referansları" },
    ],
  },
  {
    slug: "tokat-e-ticaret-sitesi-kurma-rehberi",
    title: "Tokat e-ticaret sitesi kurma rehberi",
    description:
      "Tokat’ta e-ticaret sitesi kurmadan önce: ürün adedi, ödeme, kargo, yasal metinler ve mağazanın kurumsal siteden neden pahalı olduğu.",
    date: "2026-10-25",
    updated: "2026-10-25",
    tags: ["Tokat", "E-ticaret"],
    region: "Tokat",
    coverImage: IMG.yonel,
    coverAlt: "Yönel Oto Yedek Parça katalog sitesi — ürün aramalı bir Tokat web sitesi",
    directAnswer:
      "Tokat’ta e-ticaret sitesi, kurumsal tanıtım sitesinden daha geniş bir iştir. Ürün, stok, ödeme, kargo ve cayma metinleri hazır değilse önce katalog veya teklif formlu bir site daha doğru olabilir.",
    highlights: [
      "Her fiziki dükkânın hemen mağaza açması gerekmez",
      "Ödeme altyapısı ve fatura süreci baştan konuşulur",
      "Ürün fotoğrafı yoksa mağaza boş rafla açılır",
      "Katalog ile tam e-ticaret farklı kapsamlardır",
    ],
    sections: [
      {
        h: "Mağaza mı, teklif formu mu?",
        paragraphs: [
          "Mermer, asansör bakımı veya mühendislik işi sepete giren bir ürün değildir. Bu işlerde galeri ve teklif formu satışı mağazadan daha dürüst anlatır. Perakende, gıda veya standart yedek parçada ise sepet ve ödeme anlamlıdır.",
          "Kararı ürünün fiyatının sabit olup olmadığı belirler. Her siparişte keşif varsa e-ticaret erken bir yatırımdır.",
        ],
      },
      {
        h: "Açılıştan önce hazır olması gerekenler",
        paragraphs: [
          "Ürün adı, fiyat, KDV, stok, kargo ölçüsü ve en az bir gerçek fotoğraf. Bunun yanında mesafeli satış, iade ve gizlilik metinleri. Ödeme kuruluşu başvurusu da şirket evrakı ister; site bitince “kartı sonra bağlarız” demek lansmanı kaydırır.",
        ],
        bullets: [
          "Şirket bilgisi ve vergi levhası",
          "İyzico veya PayTR gibi yerli ödeme",
          "Kargo anlaşması",
          "İade adresi",
        ],
      },
      {
        h: "Yayın sonrası asıl iş operasyondur",
        paragraphs: [
          "Mağaza açılınca sipariş, stok ve müşteri mesajı günlük iş olur. Panel, bu işi telefonda Excel’den daha az zahmetli kılmak içindir. SEO, ürün sayfası boşken başlamaz; her ürünün kendi adı ve açıklaması olmalıdır.",
        ],
      },
    ],
    faq: [
      {
        q: "Pazaryeri yetmez mi?",
        a: "Satışa başlamak için yetebilir. Müşteri listesi ve komisyon sizde kalsın istiyorsanız kendi mağazanız gerekir. İkisi birlikte de yürür.",
      },
      {
        q: "Kaç üründe e-ticaret mantıklı?",
        a: "Onlarca sabit fiyatlı ürün varsa evet. Üç özel üretim kaleminiz varsa katalog yeter.",
      },
      {
        q: "Tokat dışına satış olur mu?",
        a: "Kargo ve yasal metinler tamamsa Türkiye geneline satış yapılır. Şehir, mağazanın sınırını koymaz.",
      },
    ],
    links: [
      { href: "/hizmetler/e-ticaret", label: "E-ticaret hizmeti" },
      { href: "/tokat-web-tasarim", label: "Tokat’ta web sitesi hizmeti" },
      { href: "/projeler/yonel-oto-yedek-parca", label: "Katalog örneği" },
      { href: "/iletisim", label: "Mağaza kapsamını konuşalım" },
    ],
  },
  {
    slug: "tokatta-mobil-uyumlu-web-sitesi",
    title: "Tokat’ta mobil uyumlu web sitesi neden önemli?",
    description:
      "Tokat’ta web sitesine bakan kişinin çoğu telefondadır. Mobil uyum, ayrı bir tema değil; hız, okunur metin ve tıklanabilir telefon demektir.",
    date: "2026-10-25",
    updated: "2026-10-25",
    tags: ["Tokat", "Mobil"],
    region: "Tokat",
    coverImage: IMG.polat,
    coverAlt: "Polat Mermer kurumsal sitesi — telefonda da gezilmesi gereken bir galeri",
    directAnswer:
      "Tokat’ta bir işletmeyi arayan kişi çoğu zaman telefondadır. Mobil uyumlu site, masaüstü sayfanın küçültülmüş hali değil; telefon, WhatsApp ve kısa metinle karar verdiren sayfadır.",
    highlights: [
      "Google mobil sayfayı esas alır",
      "Küçük yazı ve yan yana üç sütun, mobilde okunmaz",
      "Ara ve WhatsApp butonu başparmak mesafesinde olmalı",
      "Hız, özellikle hat zayıfken belirgindir",
    ],
    sections: [
      {
        h: "Telefonda bakan kişi ne ister?",
        paragraphs: [
          "Adres, fiyat aralığı değilse bile hizmetin adı, bir iki gerçek fotoğraf ve arama butonu. On bölümü kaydırdıktan sonra telefonu en altta gizlemek, o ziyaretçiyi kaybetmektir.",
          "Masada tasarlanıp telefonda “bir şekilde sığıyor” denilen sayfalar, satırları sıkıştırır. Yazı 16px civarında okunur; buton parmakla tıklanacak kadar büyük olmalıdır.",
        ],
      },
      {
        h: "Hız ile uyum aynı iş değildir",
        paragraphs: [
          "Sayfa telefonda düzgün durup 8 saniyede açılıyorsa uyumludur ama kullanılmaz. Büyük fotoğraflar, gereksiz animasyon ve üçüncü parti araçlar bu süreyi yer. Görseller modern formatta ve doğru boyutta sunulmalıdır.",
          "Core Web Vitals burada süs puanı değildir. Kayma (CLS), butonun tıklanacağı yeri değiştirir. İnsan yanlış yere basınca formu terk eder.",
        ],
      },
      {
        h: "Mevcut sitenizi nasıl anlarsınız?",
        paragraphs: [
          "Kendi telefonunuzdan siteyi açın. İlk ekranda ne iş yaptığınız yazıyor mu, telefon tıklanınca arama açılıyor mu, yazılar yakınlaştırmadan okunuyor mu? Bu üçü yoksa “responsive tema” cümlesi pratikte karşılıksızdır.",
        ],
      },
    ],
    faq: [
      {
        q: "Ayrı bir mobil site gerekir mi?",
        a: "Hayır. Tek site, küçük ekrana göre kurulmalıdır. m.altalanadi dönemi kapandı.",
      },
      {
        q: "Mobil uyum SEO’ya dahil mi?",
        a: "Evet, teknik teslimin parçasıdır. Google indeksinde mobil sayfa esas alınır.",
      },
      {
        q: "Uygulama yaptırmak daha mı iyi?",
        a: "Çoğu yerel işletme için hayır. İnsan sizi mağazadan uygulama indirerek aramaz; arama sonucundan girer.",
      },
    ],
    links: [
      { href: "/hizmetler/web-tasarim", label: "Mobil öncelikli web tasarım" },
      { href: "/tokat-web-tasarim", label: "Tokat işletmeleri için web tasarım" },
      { href: "/projeler/guzubey-asansor", label: "Mobil teklif akışlı örnek" },
      { href: "/iletisim", label: "Sitenizi birlikte açalım" },
    ],
  },
  {
    slug: "tokat-web-sitesi-yenileme-rehberi",
    title: "Tokat web sitesi yenileme rehberi",
    description:
      "Eski Tokat web siteniz ne zaman yenilenmeli? Yavaşlık, telefonda bozulma, size ait olmayan alan adı ve taşınması gereken içerik.",
    date: "2026-10-25",
    updated: "2026-10-25",
    tags: ["Tokat", "Yenileme"],
    region: "Tokat",
    coverImage: IMG.mufat,
    coverAlt: "Mufat İnşaat kurumsal web sitesi — yenilenmiş bir mühendislik vitrini",
    directAnswer:
      "Tokat’ta web sitesi yenilemek, logoyu değiştirmek değildir. Telefonla kullanılamayan, çok yavaş açılan veya alan adı size ait olmayan site yenilenmelidir. İşe yarayan metin ve fotoğraf taşınır.",
    highlights: [
      "Yenileme sebebi estetikten önce kullanılabilirliktir",
      "Eski URL’ler kırılmadan yeni sayfaya yönlendirilmeli",
      "Alan adı ajansın üzerindeyse önce onu çözün",
      "Sıfırdan yazmak her zaman daha pahalı değildir",
    ],
    sections: [
      {
        h: "Yenileme kararı için dört işaret",
        paragraphs: [
          "Telefonda menü açılmıyorsa, sayfa birkaç saniyeden uzun açılıyorsa, teklif formu mail göndermiyorsa veya siteyi güncellemek için ajansı aramak zorundaysanız site görevini yapmıyordur.",
          "Yalnızca “eski moda duruyor” hissi de geçerli bir sebeptir; fakat önce ölçün. Beğenmediğiniz bir site hızlı ve net ise, önce metin ve fotoğraf yenilenebilir.",
        ],
      },
      {
        h: "Eski içeriği çöpe atmayın",
        paragraphs: [
          "Yıllardır indekslenen sayfaların adresleri değişecekse eski adres yeni karşılığına yönlendirilmelidir. Yönlendirme olmadan yenileme, mevcut arama görünürlüğünü düşürür.",
          "Referans metinleri, belge adları ve gerçek fotoğraflar yeni tasarımın ham maddesidir. Ajansın size “her şeyi sıfırdan yazarız” demesi, sizin birikiminizi silmek olabilir.",
        ],
      },
      {
        h: "Sahiplik yenilemenin parçasıdır",
        paragraphs: [
          "Alan adı, barındırma ve kod erişimi sizde değilse yeni site de aynı kilide girer. Devir işlemini yenilemeden önce isteyin. Biz teslimde alan adının ve kodun müşteriye ait olmasını teklife yazarız.",
        ],
      },
    ],
    faq: [
      {
        q: "Eski sitedeki yazılar kaybolur mu?",
        a: "Taşınması istenen metin ve görseller yeni sayfaya alınır. Gereksiz kopya sayfalar bilinçli olarak emekliye ayrılır.",
      },
      {
        q: "Yenileme sırasında site kapanır mı?",
        a: "Yeni site hazır olunca geçiş yapılır. Günlerce kapalı bir vitrin gerekmez.",
      },
      {
        q: "Sadece rengi değiştirmek yeter mi?",
        a: "Sorun hız ve mobil kullanım ise renk yetmez. Sorun yalnızca logo ise büyük bir yeniden yazım gerekmeyebilir.",
      },
    ],
    links: [
      { href: "/tokat-web-tasarim", label: "Tokat web tasarım" },
      { href: "/hizmetler/web-tasarim", label: "Web sitesi yenileme yaklaşımı" },
      { href: "/projeler", label: "Yenilenen iş örnekleri" },
      { href: "/iletisim", label: "Mevcut sitenizi gönderin" },
    ],
  },
];
