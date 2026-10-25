import type { Post } from "./posts";

const day = "2026-10-25";

function guide(
  partial: Omit<Post, "date" | "updated" | "coverImage" | "coverAlt" | "region"> & {
    region?: Post["region"];
  }
): Post {
  return {
    date: day,
    updated: day,
    region: partial.region ?? "Tokat",
    coverImage: `/blog/${partial.slug}.jpg`,
    coverAlt: `${partial.title} — BCY Dijital blog kapağı`,
    ...partial,
  };
}

export const guidePosts: Post[] = [
  guide({
    slug: "tokat-teknik-seo-kontrol-listesi",
    title: "Tokat’taki işletme sitesi için teknik SEO kontrol listesi",
    description:
      "Yayına almadan önce hız, mobil kullanım, başlık, indeks ve iletişim bilgisini kontrol edin. Tokat işletmeleri için uygulanabilir bir liste.",
    tags: ["Tokat", "Teknik SEO"],
    directAnswer:
      "Teknik SEO, sitenin Google tarafından okunabilir olmasıdır. Tokat’taki bir işletme sitesinde önce mobil ekran, açılış hızı, tek bir H1, Search Console kaydı ve sitedeki telefonun haritadaki telefonla aynı olması kontrol edilir.",
    highlights: [
      "Telefonda açılmayan sayfa, masaüstünde düzgün olsa da eksiktir",
      "Her sayfada bir H1 ve o sayfayı anlatan bir title olur",
      "Sitemap ve Search Console, yayın gününün işidir",
      "Sıra garantisi bu listenin parçası değildir",
    ],
    sections: [
      {
        h: "Yayından önce beş dakika",
        paragraphs: [
          "Kendi telefonunuzdan siteyi açın. İlk ekranda ne iş yaptığınız yazıyor mu, telefon numarası tıklanınca arama açılıyor mu, yazılar yakınlaştırmadan okunuyor mu? Bu üçü yoksa tema “responsive” olsa da işe yaramıyordur.",
          "Ardından sayfa başlığına bakın. Ana sayfa ile hizmet sayfası aynı title’ı taşıyorsa Google iki sayfayı aynı sanır. Her sayfanın başlığı, o sayfadaki işi söylemeli.",
        ],
      },
      {
        h: "Hız ve indeks",
        paragraphs: [
          "Büyük fotoğraf, gereksiz animasyon ve üçüncü parti araçlar açılışı yavaşlatır. Yavaş sayfa hem ziyaretçiyi hem taramayı zorlar. Görselleri gereğinden büyük yüklemeyin.",
          "Search Console’a mülkü ekleyin, sitemap’i gönderin ve “sayfa dizine eklenmedi” uyarısı varsa önce onu okuyun. Yeni yazı yazmak, indekslenmeyen bir siteyi düzeltmez.",
        ],
        bullets: [
          "HTTPS açık olsun",
          "Kopya title ve description kalmasın",
          "404 veren iç link olmasın",
          "İletişim bilgisi her sayfada aynı yazılsın",
        ],
      },
      {
        h: "Liste bittikten sonra",
        paragraphs: [
          "Teknik liste, sıralama vaadi değildir. Firma adınızla yapılan aramada çıkmak çoğu zaman ilk hedeftir. “Tokat + hizmetiniz” gibi rekabetçi aramalar ayrıca içerik ve zaman ister.",
        ],
      },
    ],
    faq: [
      {
        q: "Bu listeyi kim uygular?",
        a: "Yeni sitede biz teslimin parçası olarak bakarız. Mevcut sitede de aynı maddeleri birlikte kontrol edebiliriz.",
      },
      {
        q: "Puan 100 olmazsa site kötü müdür?",
        a: "Hayır. Araç puanı yol gösterir. Asıl ölçü, telefonda işin anlaşılması ve formun çalışmasıdır.",
      },
    ],
    links: [
      { href: "/hizmetler/seo", label: "SEO hizmeti" },
      { href: "/tokat-web-tasarim", label: "Tokat’ta web sitesi hizmeti" },
      { href: "/iletisim", label: "Sitenizi birlikte açalım" },
    ],
  }),
  guide({
    slug: "tokat-isletmeleri-icin-google-ads",
    title: "Tokat işletmeleri için Google Ads bütçesi nereye gider?",
    description:
      "Arama, iş ortakları ve görüntülü ağ aynı bütçeyi paylaşır. Tokat’taki küçük bütçede hangi kanalın açık kalması gerektiğini sade anlatıyoruz.",
    tags: ["Tokat", "Reklam"],
    directAnswer:
      "Küçük bir bütçede önce arama ağı durur. Görüntülü reklam ve arama iş ortakları, dönüşüm ölçülmeden açılırsa tıklama yer ama telefon çalmaz. Reklamdan önce sayfadaki form ve WhatsApp çalışmalıdır.",
    highlights: [
      "BCY Dijital reklam ajansı değil; sayfayı ve ölçümü kurar",
      "Arama niyeti, banner’dan daha yakın müşteridir",
      "Dönüşüm tanımı yoksa bütçe öğrenemez",
      "Kanal ayarı kampanya açıldıktan sonra da kontrol edilir",
    ],
    sections: [
      {
        h: "Bütçe neden dağılır?",
        paragraphs: [
          "Google Ads, bütçeyi arama, arama iş ortakları ve görüntülü ağ arasında paylaştırabilir. Tokat’ta günlük küçük bütçeyle çalışan bir işletme, görüntülü ağda ucuz tıklama görüp bunun müşteri sandığında yanılır. O tıklama çoğu zaman henüz hizmet aramayan kişidir.",
          "Arama kampanyasında insan, hizmetin adını yazmıştır. Asansör bakımı, avukat veya yedek parça arayan kişi banner’dan daha yakındır. İş ortakları ağı ise bazen alakasız sitelerde çıkar. Küçük bütçede onu kapatıp sonucu ayrı izlemek daha sağlıklıdır.",
        ],
      },
      {
        h: "Reklam, kırık sayfaya gitmesin",
        paragraphs: [
          "Reklamın açtığı sayfa yavaşsa, telefonda bozuluyorsa veya telefon numarası yoksa bütçe sayfayı finanse eder, sizi değil. Önce tek bir net sayfa: ne yapıyorsunuz, neredesiniz, nasıl ulaşılır.",
          "Form, arama ve WhatsApp tıklamasını ölçmeden “reklam işe yaramadı” demek erkendir. Ölçüm yoksa hangi kanalın işe yaradığını da bilemezsiniz.",
        ],
      },
    ],
    faq: [
      {
        q: "BCY Google Ads yönetiyor mu?",
        a: "Asıl işimiz site, ölçüm ve Meta reklamıdır. Google Ads hesabını sizin adınıza açıp kanal ayarını ve iniş sayfasını birlikte netleştiririz; sürekli reklam işletmeciliğini ayrıca konuşuruz.",
      },
      {
        q: "Hedef CPA’yı ilk gün açmalı mıyım?",
        a: "Dönüşüm verisi birikmeden akıllı teklif, tahmindir. Önce ölçüm ve sınırlı arama kampanyası daha anlaşılırdır.",
      },
    ],
    links: [
      { href: "/hizmetler/meta-reklam", label: "Reklam ve ölçüm" },
      { href: "/tokat-web-tasarim", label: "İniş sayfası olarak web sitesi" },
      { href: "/iletisim", label: "Kampanya öncesi keşif" },
    ],
  }),
  guide({
    slug: "google-isletme-profilini-konusarak-yonetmek",
    title: "Google İşletme Profili’ni yapay zekâ ile yönetmek",
    description:
      "Çalışma saati, yorum ve gönderi artık sohbet üzerinden de düzenlenebiliyor. Tokat işletmeleri için ne işe yarar, nerede elle kontrol gerekir?",
    tags: ["Tokat", "Google Haritalar"],
    directAnswer:
      "Yapay zekâ, Google İşletme Profili’nde saat, bağlantı ve yorum taslağını hızlandırabilir. Yayınlamadan önce işletme adı, telefon ve adres yine insan tarafından kontrol edilmelidir. Sohbet, yanlış kategoriyi veya olmayan bir adresi düzelten bir kaynak değildir.",
    highlights: [
      "Taslak hızdır, onay sorumluluktur",
      "İşletme adına anahtar kelime ekletmeyin",
      "Yorum cevabı kısa ve gerçek olsun",
      "Site adresi profilde kendi alan adınız olsun",
    ],
    sections: [
      {
        h: "Ne işe yarar?",
        paragraphs: [
          "Saat değişikliği, tatil günü, yeni fotoğraf veya yoruma kısa cevap gibi tekrar eden işler sohbetle hızlanır. Tokat’ta tek kişilik işleten esnaf için bu, panele her hafta girmekten daha kolay olabilir.",
          "Yine de model, tabeladaki adı bilmez. “Tokat’ın en iyi…” gibi bir cümleyi işletme adına yazdırmak profili riske atar. Ad, tabeladaki ad olarak kalır.",
        ],
      },
      {
        h: "Yayınlamadan önce bakılacaklar",
        paragraphs: [
          "Telefon, web sitesi ve çalışma saati sitedeki bilgiyle aynı mı? Kategori hâlâ yaptığınız işi mi anlatıyor? Gönderide fiyat veya kampanya varsa o fiyat vitrinde de var mı? Bu üçü tutmuyorsa taslağı yayınlamayın.",
        ],
      },
    ],
    faq: [
      {
        q: "Gemini profili tek başına SEO yapar mı?",
        a: "Hayır. Doğru kategori, tutarlı telefon ve gerçek fotoğraf dururken sohbet yalnızca güncellemeyi kolaylaştırır.",
      },
      {
        q: "Yorumları otomatik cevaplatmalı mıyım?",
        a: "Taslak alabilirsiniz. Göndermeden okuyun. Müşterinin yazmadığı bir övgüyü cevaba eklemeyin.",
      },
    ],
    links: [
      { href: "/blog/tokat-google-haritalar-seo-rehberi", label: "Haritalar rehberi" },
      { href: "/hizmetler/seo", label: "Yerel SEO" },
      { href: "/iletisim", label: "Profil kontrolü" },
    ],
  }),
  guide({
    slug: "spam-guncellemesi-sonrasi-seo-kontrolu",
    title: "Spam güncellemesi sonrası Tokat işletmesi ne kontrol etmeli?",
    description:
      "Google spam güncellemesi bitince yapılacak iş sıra tahmini değil, Search Console ve sitenin kendi riskleridir. Satın alınmış bağlantı ve kopya sayfa bu listenin başındadır.",
    tags: ["SEO", "Tokat"],
    directAnswer:
      "Bir spam güncellemesinden sonra Tokat’taki işletme, önce Search Console’da manuel işlem ve kapsam raporuna bakar. Ardından satın alınmış bağlantı, kopya şehir sayfası ve anahtar kelime yığılmış metin varsa onları temizler. Düşüş her zaman cezadır diye okunmaz.",
    highlights: [
      "Manuel işlem varsa posta kutusunda yazar",
      "Kopya ilçe sayfaları risklidir",
      "Satın link ve takas yazı politika dışıdır",
      "Üç gün içinde “eski sıraya döndük” vaadi ciddi değildir",
    ],
    sections: [
      {
        h: "Önce raporu okuyun",
        paragraphs: [
          "Search Console’da Güvenlik ve Manuel işlemler boşsa, ortada ilan edilmiş bir ceza yoktur. Kapsam raporunda sayfalar “dışarıda bırakıldı” veya “keşfedildi, dizine eklenmedi” diyorsa sebep çoğu zaman kalite ya da kopyalıktır.",
          "Sıra her gün oynar. Tek bir kelimedeki düşüşü, bütün şehrin güncellemesine bağlamak aceleciliktir. Birkaç haftalık grafik, bir güne bakmaktan daha doğru okunur.",
        ],
      },
      {
        h: "Sitede temizlenecekler",
        paragraphs: [
          "Aynı metnin ilçe adıyla çoğaltılmış halleri, gizli metin, anahtar kelime listesi ve “en iyi firmayız” gibi kanıtsız iddialar spam sisteminin baktığı yerlerdir. Bunları kaldırmak, yeni bir “spam paketi” satın almaktan daha güvenlidir.",
          "Başka siteden para ile yazı ve bağlantı almak da bu listenin içindedir. Görünürlük için buna ihtiyacınız olduğunu söyleyen teklifi reddedin.",
        ],
      },
    ],
    faq: [
      {
        q: "Sıram düştü, hemen ne yapayım?",
        a: "Aynı gün onlarca sayfa basmayın. Manuel işlemi, kırık sayfaları ve kopya içeriği kontrol edin. Değişiklikten sonra yeniden değerlendirme, ancak ortada ihlal varsa istenir.",
      },
      {
        q: "Güncellemeyi geri almak mümkün mü?",
        a: "Google tarihi duyurur, işletme onu geri alamaz. Yapabileceğiniz iş, siteyi politikaya uygun hale getirmektir.",
      },
    ],
    links: [
      { href: "/hizmetler/seo", label: "Teknik SEO kontrolü" },
      { href: "/blog/ucretli-backlink-ve-tanitim-yazisi", label: "Ücretli bağlantı riski" },
      { href: "/iletisim", label: "Raporu birlikte okuyalım" },
    ],
  }),
  guide({
    slug: "yapay-zeka-ile-site-icerigi",
    title: "Yapay zekâ ile site içeriği yazarken Tokat işletmesi neye dikkat etmeli?",
    description:
      "Google, yapay zekâ metnini yasaklamaz. Yasakladığı şey, denetlenmemiş, yanlış ve yalnızca sıralama için üretilmiş sayfadır.",
    tags: ["İçerik", "SEO"],
    region: "Genel",
    directAnswer:
      "Yapay zekâ taslak çıkarabilir. Tokat’taki işletmenin sitesine giren metin ise sizin fiyatınızı, sürecinizi ve gerçek hizmetinizi söylemelidir. Denetlenmemiş taslak, yanlış saat veya olmayan bir vaat yayınlamanıza yol açar.",
    highlights: [
      "Taslak serbest, yayın sorumluluğu sizde",
      "Her sayfa bir soruya cevap versin",
      "Aynı metni ilçe ilçe çoğaltmayın",
      "Yazar olarak işletmeyi veya gerçek kişiyi gösterin",
    ],
    sections: [
      {
        h: "Google neyi sorun sayar?",
        paragraphs: [
          "Sorun, metnin makineyle yazılması değildir. Sorun, okuyana yeni bir bilgi vermeyen, yanlış olan veya yalnızca anahtar kelime için üretilmiş sayfalardır. “Tokat web tasarım” cümlesinin on kez tekrarlandığı bir yazı bu tanıma girer.",
          "İşletme sahibi metni okumadan yayınlarsa, sitede olmayan bir hizmet veya yanlış bir fiyat kalabilir. Bu hem müşteriyi hem güveni bozar.",
        ],
      },
      {
        h: "Güvenli kullanım",
        paragraphs: [
          "Taslağı kendi cümlelerinizle düzeltin. Gerçek süre, gerçek kapsam ve gerçek örnek ekleyin. Bilmediğiniz yasal tarihi modele yazdırmayın; resmi metne bakın veya o cümleyi silin.",
          "Biz blogda da aynı kuralı kullanıyoruz: konu başkasına ait olabilir, cümle ve örnek bizim işimize ait olmalıdır.",
        ],
      },
    ],
    faq: [
      {
        q: "Yapay zekâ içeriği sıralamadan düşer mi?",
        a: "Kendiliğinden düşmez. Yararsız veya yanıltıcıysa düşer. İnsan eliyle düzeltilmiş, doğru bir sayfa durabilir.",
      },
      {
        q: "Tüm siteyi bir günde ürettirebilir miyim?",
        a: "Ürettirirsiniz ama yayınlamamalısınız. Her sayfayı hizmet sahibi okumadan siteye koymayın.",
      },
    ],
    links: [
      { href: "/blog/yapay-zeka-aramalarinda-firmaniz-cikiyor-mu", label: "Yapay zekâ aramalarında görünmek" },
      { href: "/hizmetler/geo", label: "GEO hizmeti" },
      { href: "/hakkimda", label: "Yazıları kim yazıyor?" },
    ],
  }),
  guide({
    slug: "tokat-emlak-ofisi-dijital-hazirlik",
    title: "Tokat emlak ofisleri için dijital ilan hazırlığı",
    description:
      "İlan, tapu ve ödeme süreci değişirken emlak ofisinin sitesinde portföy, yetki ve iletişim net durmalıdır. Resmi tarihi ilandan değil, duyurudan doğrulayın.",
    tags: ["Tokat", "Emlak"],
    directAnswer:
      "Tokat’taki emlak ofisinin sitesi; ilanın kimden geldiğini, ofisin telefonunu ve danışmanın adını göstermelidir. Güvenli ödeme gibi resmi takvimler değişebilir. Sitede hukuk vaadi yazmak yerine, güncel süreci müşteriye nasıl anlatacağınızı hazırlayın.",
    highlights: [
      "Portföy fotoğrafı stok görsel olmasın",
      "İlan metninde olmayan özellik yazılmasın",
      "Ödeme ve tapu cümlesini resmi duyurudan kontrol edin",
      "WhatsApp, ilanın yanında dursun",
    ],
    sections: [
      {
        h: "İlan sayfası ne söylemeli?",
        paragraphs: [
          "Konum, m², oda ve fiyat yanında ilanı veren ofisin adı görünür. “Tokat satılık daire” başlığı tek başına bir ilan değildir. Fotoğraf o eve ait olmalıdır.",
          "Müşteri haritadan ofise, ofisten ilana geçtiğinde telefon değişmemelidir. Farklı numara, güveni kırar.",
        ],
      },
      {
        h: "Mevzuat cümlesini sitede dondurmayın",
        paragraphs: [
          "Taşınmaz satışında ödeme ve sözleşme kuralları güncellenir. Bir blog tarihini sitenizin yasal metni yapmayın. Güncel tebliği veya bakanlık duyurusunu kontrol edin, sonra müşteriye sade bir açıklama yazın.",
          "Bizim işimiz emlak hukuku danışmanlığı değil, ofisin portföyünü ve iletişimini düzgün bir sitede toplamaktır. Çanakkale’de Aevum Troia’da bu vitrin işini kurduk; Tokat ofisi için de aynı mantık geçerlidir.",
        ],
      },
    ],
    faq: [
      {
        q: "Her ilan için ayrı sayfa gerekir mi?",
        a: "Yayında kalan ilanlar evet. Satılan ilanı yayında unutmak hem müşteriyi hem aramayı bozar.",
      },
      {
        q: "Portal yetiyor mu?",
        a: "İlanı göstermek için yetebilir. Ofisin kim olduğunu ve diğer portföyü anlatmak için kendi siteniz gerekir.",
      },
    ],
    links: [
      { href: "/projeler/aevum-troia", label: "Gayrimenkul site örneği" },
      { href: "/hizmetler/web-tasarim", label: "Kurumsal site" },
      { href: "/iletisim", label: "Ofis sitesini konuşalım" },
    ],
  }),
  guide({
    slug: "search-console-yapay-zeka-gorunurlugu",
    title: "Search Console’da yapay zekâ görünürlüğü ne anlatır?",
    description:
      "AI Overviews ve benzeri sonuçlar klasik tıklamadan ayrı izlenebilir. Tokat işletmesi bu raporu sıra hedefi değil, içerik sinyali olarak okumalı.",
    tags: ["SEO", "GEO"],
    region: "Genel",
    directAnswer:
      "Search Console’daki yapay zekâ raporları, sitenizin üretken sonuçlarda görünüp görünmediğini ayırmaya yarar. Gösterim, tıklama demek değildir. Tokat’taki işletme bu veriyi “birinci olduk” diye değil, hangi sorunun cevaplandığını görmek için kullanır.",
    highlights: [
      "Rapor yoksa özellik hesabınıza açılmamış olabilir",
      "Gösterim ile müşteri aynı sayı değildir",
      "Soruya net cevap veren sayfa bu sonuçlara daha yatkındır",
      "Klasik SEO durmadan bu rapor tek başına büyümez",
    ],
    sections: [
      {
        h: "Raporda ne aranır?",
        paragraphs: [
          "Hangi sorgular sizi üretken sonuçta göstermiş, hangileri normal mavi linkte kalmış. İkisi farklı niyet olabilir. Biri “nedir” sorusudur, diğeri “nerede, kimi arayayım” sorusudur.",
          "Tokat’ta hizmet arayan kişinin asıl dönüşümü çoğu zaman harita, telefon veya formdur. Yapay zekâ gösterimi bunu tamamlar, yerine geçmez.",
        ],
      },
      {
        h: "Sayfayı bu rapora göre nasıl düzeltirsiniz?",
        paragraphs: [
          "Soruyu başlıkta sorun, ilk paragrafta cevaplayın, ardından şartı ve istisnayı yazın. Uydurma istatistik eklemeyin. Kaynağı siz olmayan bir yönetmelik tarihini kesin cümle yapmayın.",
        ],
      },
    ],
    faq: [
      {
        q: "Raporu göremiyorum.",
        a: "Özellik her mülkte aynı anda açılmayabilir. Klasik performans raporu duruyorsa işinize oradan devam edin.",
      },
      {
        q: "Gösterim artınca trafik neden artmadı?",
        a: "Cevap sonuçta görünüyor, tıklama gerekmiyor olabilir. Telefon ve form hâlâ ayrıca ölçülmelidir.",
      },
    ],
    links: [
      { href: "/hizmetler/geo", label: "GEO nedir?" },
      { href: "/blog/yapay-zeka-aramalarinda-firmaniz-cikiyor-mu", label: "Asistanlarda çıkmak" },
      { href: "/iletisim", label: "Raporu yorumlayalım" },
    ],
  }),
  guide({
    slug: "youtube-shorts-reklamlari",
    title: "Tokat işletmeleri için kısa video reklamı",
    description:
      "Dikey video reklamı tek dokunuşla sayfaya inebilir. İşe yaraması için görüntü net, sayfa mobil ve ölçüm açık olmalıdır.",
    tags: ["Reklam", "Video"],
    directAnswer:
      "Kısa video, Tokat’taki işletmenin vitrinini dokuz saniyede anlatır. Tıklanınca açılan sayfa videodaki vaadi sürdürmüyorsa izlenme müşteri olmaz. Önce mobil sayfa, sonra video.",
    highlights: [
      "Dikey çekin, yatay videoyu kırpmayın",
      "İlk saniyede ne iş yaptığınız görünsün",
      "İniş sayfası videoyla aynı teklifi söylesin",
      "İzlenme, form değildir",
    ],
    sections: [
      {
        h: "Çekmeden önce",
        paragraphs: [
          "Dükkân, ürün veya ekip gerçek olsun. Stok görüntü, Tokat’taki işletmeyi anlatmaz. Konuşma şart değil; tabela, işin kendisi ve bir iletişim yolu yeter.",
          "Reklam “hemen ara” diyorsa sayfada telefon durmalıdır. Video kampanya, site boşken açılmaz.",
        ],
      },
      {
        h: "Ölçüm",
        paragraphs: [
          "Görüntülüme ile WhatsApp tıklamasını aynı kovaya koymayın. Küçük bütçede bir kampanya, bir sayfa, bir dönüşüm tanımı yeter. Üç ağ birden açmak öğrenmeyi zorlaştırır.",
        ],
      },
    ],
    faq: [
      {
        q: "Her işletme video çekmeli mi?",
        a: "Hayır. Arama niyeti güçlü bir hizmette önce site ve harita daha doğrudan olabilir. Video, gösterilecek işi olanlara yarar.",
      },
      {
        q: "Profesyonel stüdyo şart mı?",
        a: "Net ışık ve sabit telefon çoğu yerel işletmeye yeter. Dağınık ses ve karanlık görüntü, pahalı kurguyla düzelmez.",
      },
    ],
    links: [
      { href: "/hizmetler/meta-reklam", label: "Reklam kurulumu" },
      { href: "/tokat-web-tasarim", label: "Videonun ineceği sayfa" },
      { href: "/iletisim", label: "Çekim öncesi konuşalım" },
    ],
  }),
  guide({
    slug: "tokat-yoresel-urunleri-internetten-satmak",
    title: "Tokat’ta yöresel ürün internetten nasıl satılır?",
    description:
      "Pazaryeri mi, kendi mağaza mı? Tokat’taki üretici için ürün fotoğrafı, kargo ve yasal metin hazır olmadan sepet açılmaz.",
    tags: ["Tokat", "E-ticaret"],
    directAnswer:
      "Yöresel ürünü internetten satmak, bir hesap açıp fotoğraf yüklemekten ibaret değildir. Ürünün adı, içindekiler, gramaj, kargo ölçüsü ve iade adresi hazırsa pazaryeri veya kendi siteniz işe yarar. Bunlar yoksa önce katalog sayfası daha doğrudur.",
    highlights: [
      "Pazaryeri hızlı başlangıç, komisyon ve kural sizde değil",
      "Kendi site, müşteri listesini sizde tutar",
      "Gıda ve kozmetikte etiket bilgisi şart",
      "Stok biten ürünü yayında bırakmayın",
    ],
    sections: [
      {
        h: "Nereden başlamalı?",
        paragraphs: [
          "Onlarca sabit fiyatlı ürününüz varsa sepet düşünülür. Üç çeşit, sipariş üzerine üretimse WhatsApp’lı bir ürün sayfası yeter. Tokat’taki pek çok üretici ikinci gruptadır ve bunu mağaza sanıp gereksiz kapsam alır.",
          "Kooperatif veya küçük üretici, büyük platformun evrak ve komisyon şartını okumadan “hemen satış” beklemesin. Şart size uymuyorsa kendi siteniz daha sakin bir başlangıçtır.",
        ],
      },
      {
        h: "Sayfada olması gerekenler",
        paragraphs: [
          "Gerçek ürün fotoğrafı, net içerik, alerjen veya katkı bilgisi, teslim süresi ve kimden alındığı. “Doğal” kelimesi tek başına açıklama değildir.",
          "Ödeme kuruluşu şirket evrakı ister. Site bitince kartı bağlamayı sonraya bırakmak, lansmanı kaydırır.",
        ],
      },
    ],
    faq: [
      {
        q: "Sadece Tokat’a mı satılır?",
        a: "Kargo ve yasal metin tamamsa Türkiye geneline satılır. Şehir, mağazanın sınırını koymaz.",
      },
      {
        q: "BCY e-ticaret kuruyor mu?",
        a: "Evet, ürün ve ödeme kapsamı netleşince. Keşifte katalogun yetip yetmeyeceğini de söyleriz.",
      },
    ],
    links: [
      { href: "/hizmetler/e-ticaret", label: "E-ticaret hizmeti" },
      { href: "/blog/tokat-e-ticaret-sitesi-kurma-rehberi", label: "E-ticaret rehberi" },
      { href: "/projeler/mygoldenfood", label: "Gıda sitesi örneği" },
      { href: "/iletisim", label: "Ürün kapsamını konuşalım" },
    ],
  }),
  guide({
    slug: "crm-mi-erp-mi",
    title: "CRM mi, ERP mi? Tokat’taki işletme hangisine bakar?",
    description:
      "Müşteri takibi ile stok ve fatura aynı yazılım değildir. Küçük işletmede çoğu zaman önce düzenli müşteri kaydı, sonra gerekiyorsa operasyon sistemi gelir.",
    tags: ["Yazılım", "Tokat"],
    directAnswer:
      "CRM müşteriyi ve satışı takip eder. ERP stok, satın alma ve parayı takip eder. Tokat’taki pek çok işletme ikisine birden değil, dağınık WhatsApp’ı bir müşteri listesine çevirmeye ihtiyaç duyar. BCY kutu ERP satmaz; sitenin forma ve doğru araca bağlanmasını kurar.",
    highlights: [
      "Excel’de kaybolan teklif, CRM sorusudur",
      "Depo ve fatura karışıyorsa konu ERP’dir",
      "İkisini birden ilk gün almak şart değildir",
      "Araç, sitenin yerine geçmez",
    ],
    sections: [
      {
        h: "Hangi belirti hangisini gösterir?",
        paragraphs: [
          "Teklif kime gitti, kim geri döndü, kim randevuyu kaçırdı bilmiyorsanız müşteri kaydı eksiktir. Bu, ağır bir kurumsal kaynak sistemi değildir.",
          "Aynı ürün iki yerde satılıp stok tutmuyorsa, satın alma ile satış birbirini görmüyorsa konu operasyondur. Onu web sitesinin içine “bir form daha” diye sıkıştırmak olmaz.",
        ],
      },
      {
        h: "Site bu işin neresinde?",
        paragraphs: [
          "Site, müşterinin sizi bulduğu yerdir. CRM, o müşteriyi unutmamanızı sağlar. İkisini karıştırmayın. Form, seçtiğiniz araca düşebilir; aracın kendisini her projede baştan yazmayız.",
          "Seçmeden önce kullanıcı sayısını, kimlerin gireceğini ve mevcut veriyi sorun. Aktarılmayan eski liste, yeni ekranda da dağınık durur.",
        ],
      },
    ],
    faq: [
      {
        q: "Hazır araç mı, özel yazılım mı?",
        a: "İşiniz standartsa hazır araç daha ucuz ve bakımlıdır. Süreçleriniz gerçekten size özelse özel yazılım konuşulur. Bunu keşifte ayırırız.",
      },
      {
        q: "WhatsApp CRM sayılır mı?",
        a: "Konuşma yeridir, arşiv değildir. Ay sonunda kime ne teklif gittiğini çıkaramıyorsanız kayıt eksiktir.",
      },
    ],
    links: [
      { href: "/blog/ozel-yazilim-maliyeti-nelere-bagli", label: "Özel yazılım maliyeti" },
      { href: "/hizmetler/web-tasarim", label: "Önce web sitesi" },
      { href: "/iletisim", label: "İhtiyacı ayıralım" },
    ],
  }),
  guide({
    slug: "ozel-yazilim-maliyeti-nelere-bagli",
    title: "Özel yazılım maliyeti neye göre değişir?",
    description:
      "Modül, kullanıcı, entegrasyon, veri taşıma ve bakım fiyatı belirler. Tek ekranlık teklif ile stoklu sistem aynı iş değildir.",
    tags: ["Yazılım", "Fiyat"],
    directAnswer:
      "Özel yazılımın tek fiyatı yoktur. Kaç ekran olduğu, kimlerin kullanacağı, hangi sisteme bağlanacağı ve eski verinin taşınıp taşınmayacağı tutarı değiştirir. Web sitesi ile özel panel aynı teklifin içinde sanılmamalıdır.",
    highlights: [
      "Kapsam yazılmadan rakam tahminidir",
      "Entegrasyon, ekrandan pahalı olabilir",
      "Bakım, ilk teslimin dışında konuşulur",
      "Hazır araç bazen daha doğru yatırımdır",
    ],
    sections: [
      {
        h: "Fiyatı büyüten başlıklar",
        paragraphs: [
          "Kullanıcı rolleri, rapor, bildirim, ödeme, kargo, muhasebe aktarımı ve eski Excel’in içeri alınması ayrı işlerdir. “Basit bir panel” cümlesi bunların hepsini gizleyebilir.",
          "Güvenlik ve yedek de süstür diye kesilmez. Müşteri verisi tutuyorsanız erişim ve yedek, teklifin satırıdır.",
        ],
      },
      {
        h: "Ne zaman yazılım yazılmaz?",
        paragraphs: [
          "İhtiyacınız randevu, ilan veya ürün vitriniyse buna özel ERP demeyin. Hazır ve bakılan bir araç, sıfırdan yazılmış bakımsız bir panelden daha uzun yaşar.",
          "Yazılıma karar verilirse kapsam, süre ve kodun kime ait olduğu sözleşmede durur. Sözlü “hallederiz” sonraki faturanın adıdır.",
        ],
      },
    ],
    faq: [
      {
        q: "Web sitesi fiyatı ile aynı mı?",
        a: "Hayır. Kurumsal site bir vitrindir. Özel yazılım bir iş sürecidir. İkisi aynı gün teslim edilmez.",
      },
      {
        q: "Bakım zorunlu mu?",
        a: "Yazılım yaşar. Kütüphane ve güvenlik güncellenmezse bir yıl sonra risk büyür. Bakımı baştan konuşun.",
      },
    ],
    links: [
      { href: "/blog/tokatta-web-sitesi-kac-tl", label: "Web sitesi maliyeti" },
      { href: "/blog/crm-mi-erp-mi", label: "CRM ve ERP farkı" },
      { href: "/iletisim", label: "Kapsamı yazalım" },
    ],
  }),
  guide({
    slug: "tokat-yazilim-firmasi-nasil-secilir",
    title: "Tokat’ta yazılım firması nasıl seçilir?",
    description:
      "Referans, sözleşmede sahiplik, teslim sonrası destek ve işin gerçekten yazılım mı site mi olduğu. Seçim listesi.",
    tags: ["Tokat", "Yazılım"],
    directAnswer:
      "Tokat’ta yazılım firması seçerken canlı iş isteyin, kodun ve alan adının size kalıp kalmayacağını sorun, bakımı yazılı isteyin. En düşük teklif, kapsamı boş bırakan tekliftir. Web sitesi ile özel yazılımı aynı kişiye “ikisi de sitedir” diye vermeyin; ikisini de tarif edin.",
    highlights: [
      "Canlı örnek, slayttan güçlüdür",
      "Alan adı ve kod sizde kalsın",
      "Destek süresi sözleşmede yazsın",
      "Anlamadığınız modülü onaylamayın",
    ],
    sections: [
      {
        h: "Görüşmede sorulacaklar",
        paragraphs: [
          "Benzer bir işi kim için yapmışlar, site hâlâ açık mı, siz çıktıktan sonra kim güncelliyor? Cevap “bizde kalır, siz dokunamazsınız” ise devam etmeyin.",
          "Tokat’ta yüz yüze görüşmek süreci kısaltır ama şehir, tek başına yeterlilik değildir. Uzaktan çalışan düzgün bir ekip, yakındaki dağınık bir ekipten iyi olabilir. Ayıran şey sözleşmedir.",
        ],
      },
      {
        h: "BCY bu listede nerede durur?",
        paragraphs: [
          "Biz web sitesi, e-ticaret, SEO ve ölçülebilir sayfa kurarız. Her özel yazılım iddiasını üstlenmeyiz. İhtiyaç panel değil vitrinse onu söyleriz. İhtiyaç gerçekten yazılımsa kapsamı ayırır, uymayan işi almayız.",
        ],
      },
    ],
    faq: [
      {
        q: "Yerel firma şart mı?",
        a: "Şart değil. Yüz yüze keşif isteyen işletme için Tokat’ta olmamız pratiktir. Karar, referans ve sözleşme ile verilir.",
      },
      {
        q: "Sözleşme olmadan başlanır mı?",
        a: "Başlanmamalı. Kapsam, ücret, süre ve sahiplik yazılmadan emek de para da tartışmalı hale gelir.",
      },
    ],
    links: [
      { href: "/tokat-web-tasarim", label: "Web tasarım tarafımız" },
      { href: "/projeler", label: "Canlı işler" },
      { href: "/hakkimda", label: "Kimle çalışıyorsunuz?" },
      { href: "/iletisim", label: "Keşif" },
    ],
  }),
  guide({
    slug: "ucretli-backlink-ve-tanitim-yazisi",
    title: "Ücretli tanıtım yazısı ve backlink SEO için riskli mi?",
    description:
      "Para ile alınan bağlantı ve başkasının sitesine konan reklam yazısı, Google’ın site itibarı politikasına takılabilir. Tokat işletmesi için sade karşılık.",
    tags: ["SEO"],
    region: "Genel",
    directAnswer:
      "Sıra için satın alınan bağlantı ve ilgisiz sitede yayınlanan tanıtım yazısı risklidir. Google, güçlü bir sitenin otoritesinin üçüncü taraf içeriğe kiralanmasını site itibarının kötüye kullanımı sayabilir. Tokat’taki işletmenin ihtiyacı, kendi sitesinde doğru bilgi ve gerçek referanstır.",
    highlights: [
      "Satın link paketi önermiyoruz",
      "Müşterinin kendi sitesinden gerçek referans başka şeydir",
      "Reklam yazısı reklam diye işaretlenmelidir",
      "Kısa yol, manuel işlemle bitebilir",
    ],
    sections: [
      {
        h: "Ne serbest, ne değil?",
        paragraphs: [
          "Müşteriniz, yaptığı işi kendi sitesinde anlatıp size link veriyorsa bu referanstır. Siz yüz siteye aynı yazıyı satın alıyorsanız bu kampanya değil, manipülasyondur.",
          "Basın bülteni de otomatik dağıtılıp her yere aynı linki bırakıyorsa fayda beklemek zordur. Haberi hak eden bir iş, bir yerde düzgün anlatılır.",
        ],
      },
      {
        h: "Ne yapmalısınız?",
        paragraphs: [
          "Kendi sayfanızı düzeltin, harita kaydını tutarlı yapın, gerçek müşteriden yorum isteyin. Başka alan adından otorite kiralamayın. Biz bu yöntemi satmıyoruz ve rapora da yazmıyoruz.",
        ],
      },
    ],
    faq: [
      {
        q: "Eski tanıtım yazıları duruyor. Sileyim mi?",
        a: "Kontrol sizdeyse bağlantıyı kaldırın veya reklam olarak işaretleyin. Kontrol sizde değilse Search Console’daki bağlantı listesine bakıp gerekirse reddedin.",
      },
      {
        q: "Rakip alıyor, ben de alayım mı?",
        a: "Rakibin ihlali sizin stratejiniz olmamalı. Güncellemede önce o model zarar görür.",
      },
    ],
    links: [
      { href: "/hizmetler/seo", label: "SEO’da ne yapıyoruz?" },
      { href: "/blog/spam-guncellemesi-sonrasi-seo-kontrolu", label: "Spam güncellemesi sonrası" },
      { href: "/projeler", label: "Gerçek referanslar" },
    ],
  }),
  guide({
    slug: "tokat-kurumsal-eposta",
    title: "Tokat’ta kurumsal e-posta nasıl alınır?",
    description:
      "gmail.com yerine kendi alan adınız. DNS, SPF, DKIM ve kutunun kime ait olduğu. İşletme rehberi.",
    tags: ["Tokat", "E-posta"],
    directAnswer:
      "Kurumsal e-posta, info@sizin-alan-adiniz şeklindedir. Önce alan adı size ait olmalı, sonra DNS’e posta kayıtları eklenmelidir. Kutuyu ajansın paneline kilitlemeyin. SPF, DKIM ve DMARC, mektubun spam’e düşmemesi için temel üç kayıttır.",
    highlights: [
      "Ücretsiz kişisel kutu, teklif mektubunda zayıf durur",
      "Alan adı sizde değilse e-posta da emanettir",
      "Google Workspace ve Zoho farklı fiyatlardır, ikisi de meşrudur",
      "Eski Gmail’i bir anda silmeyin, yönlendirin",
    ],
    sections: [
      {
        h: "Sıra nasıl işler?",
        paragraphs: [
          "Alan adını işletme adına alın. Barındırma ile e-posta aynı firmada olmak zorunda değildir. Posta hizmetini seçin, size verilen MX, SPF ve DKIM kayıtlarını DNS’e ekleyin, bir test mektubu gönderin.",
          "Kayıtlar yayılmadan “mail gelmiyor” demeyin. Birkaç saat sürebilir. Şifreyi tek kişide bırakmayın; işletme sahibi kurtarma adresini tutar.",
        ],
      },
      {
        h: "Sık yapılan hata",
        paragraphs: [
          "Site ajansa yaptırılır, alan adı ajansın hesabında kalır, e-posta da orada açılır. İlişki bitince kutu da gider. Bunu baştan yazın: alan adı ve DNS sizin panelinizde.",
          "DMARC’ı ilk gün “hepsini reddet” diye kurmak, meşru mektubu da kesebilir. Önce izleme, sonra sıkılaştırma daha güvenlidir.",
        ],
      },
    ],
    faq: [
      {
        q: "E-posta site paketine dahil mi?",
        a: "Alan adı yönlendirmesi ve kayıtların tarifini teklifte konuşuruz. Aylık kutu ücreti, posta sağlayıcısına aittir.",
      },
      {
        q: "Eski adresimdeki yazışmalar?",
        a: "Yönlendirme açın ve önemli klasörü dışa aktarın. Bir gecede taşıyıp eski kutuyu kapatmayın.",
      },
    ],
    links: [
      { href: "/tokat-web-tasarim", label: "Alan adı size ait olsun" },
      { href: "/iletisim", label: "DNS’i birlikte bakalım" },
      { href: "/hizmetler/web-tasarim", label: "Site tesliminde neler var?" },
    ],
  }),
  guide({
    slug: "google-tercih-edilen-kaynaklar",
    title: "Google’ın tercih edilen kaynaklar özelliği Tokat işletmesine ne katar?",
    description:
      "Okur, bir siteyi tercih edilen kaynak olarak seçebilir. Bu bir sıra satın alma düğmesi değildir. İçerik düzenli ve doğruysa anlam kazanır.",
    tags: ["SEO", "Google"],
    region: "Genel",
    directAnswer:
      "Tercih edilen kaynaklar, ziyaretçinin bazı siteleri sonuçlarda daha görünür kılmasını isteyen bir tercihtir. Tokat’taki işletme bunu bir sıralama düğmesi sanmamalı. Düzenli, doğru ve imzalı içerik yoksa butonun koyulacak yeri de yoktur.",
    highlights: [
      "Özellik her hesapta aynı gün açılmayabilir",
      "Buton, zayıf sayfayı birinci yapmaz",
      "Haber ve rehber üreten sitelere daha yakındır",
      "Yerel işletmede asıl kanal hâlâ harita ve sitedir",
    ],
    sections: [
      {
        h: "Kime yarar?",
        paragraphs: [
          "Sık soru cevaplayan, blogu olan, okurun geri geldiği sitelere. Haftada bir açılan kurumsal vitrine bu butonu koymak, okura seçtirecek bir alışkanlık yaratmaz.",
          "Tokat’ta asıl arama çoğu zaman “yakınımdaki hizmet”tir. O sonuçta harita kaydı ve net sayfa, tercih butonundan önce gelir.",
        ],
      },
      {
        h: "Yine de ne yapabilirsiniz?",
        paragraphs: [
          "Yazarını belli edin, tarihi koyun, yanlış cümleyi düzeltin. İnsan sizi kaynak seçsin istiyorsanız sayfa buna layık olmalıdır. Butonu, özellik sizde açıksa ve talimat güncelse ekleyin. Kapalıysa zorlamayın.",
        ],
      },
    ],
    faq: [
      {
        q: "Butonu koyunca trafik gelir mi?",
        a: "Hayır. Ziyaretçi sizi seçerse o kişinin sonuçlarında daha görünür olursunuz. Seçilmeden buton bir vaattir.",
      },
      {
        q: "Yerel esnaf için öncelik mi?",
        a: "Değil. Öncelik telefon, harita, hız ve doğru hizmet sayfasıdır.",
      },
    ],
    links: [
      { href: "/blog", label: "Rehberler" },
      { href: "/hizmetler/seo", label: "SEO hizmeti" },
      { href: "/hakkimda", label: "Yazar" },
    ],
  }),
  guide({
    slug: "tokat-online-randevu-sistemi",
    title: "Tokat’ta online randevu sistemi hangi işletmeye gerekir?",
    description:
      "Kuaför, klinik, danışmanlık ve servis için takvim. Telefon ve WhatsApp bitmeden randevu defteri karışıyorsa sistem konuşulur.",
    tags: ["Tokat", "Randevu"],
    directAnswer:
      "Online randevu, Tokat’ta günü dolan işletmeye yarar. Günde üç müşterisi olan dükkân için ek yazılım şart değildir. Sistem; boş saati göstersin, çakışmayı kessin, hatırlatma göndersin ve sitedeki butonla aynı takvime düşsün.",
    highlights: [
      "WhatsApp tek başına takvim değildir",
      "Personel sayısı ve hizmet süresi baştan yazılır",
      "Haritadaki “randevu” butonu siteye inebilir",
      "Hazır araç, çoğu işletmeye yeter",
    ],
    sections: [
      {
        h: "Kimde işe yarar?",
        paragraphs: [
          "Kuaför, güzellik, diş, danışman, özel ders ve periyodik bakım. Müşteri saat seçemiyor, personel aynı saate iki kişi yazıyorsa ihtiyaç gerçektir.",
          "Haftada birkaç keşif yapılan asansör veya mühendislik ofisinde randevu, form ve telefondur. Onlar için takvim yazılımı erken olabilir.",
        ],
      },
      {
        h: "Kurarken",
        paragraphs: [
          "Hizmet süresi, iptal kuralı ve kimlerin takvimi gördüğü net olsun. Site, Instagram ve harita aynı bağlantıya gitsin. İki ayrı takvim, iki ayrı gerçekliktir.",
          "Kişisel veri tutuyorsanız kimin eriştiğini ve mesajın ne söylediğini bilin. Hatırlatma, reklam metni gibi yazılmasın.",
        ],
      },
    ],
    faq: [
      {
        q: "Uygulama indirtmek gerekir mi?",
        a: "Müşteriye hayır. Tarayıcıda açılan bir sayfa yeter. Personel için hazır panel çoğu zaman yeter.",
      },
      {
        q: "BCY randevu yazıyor mu?",
        a: "Sık kullanılan hazır araçları siteye bağlarız. Tamamen size özel takvim, ayrı kapsamdadır.",
      },
    ],
    links: [
      { href: "/hizmetler/web-tasarim", label: "Siteye randevu butonu" },
      { href: "/tokat-web-tasarim", label: "Tokat işletmeleri için site" },
      { href: "/iletisim", label: "Takvimi tarif edin" },
    ],
  }),
  guide({
    slug: "google-isletme-profili-askiya-alindi",
    title: "Google İşletme Profili askıya alındıysa ne yapmalısınız?",
    description:
      "Tokat’ta harita kaydı kalkınca önce nedeni ayıklanır. Anahtar kelimeli işletme adı, sahte adres ve kopya profil en sık sebeplerdendir.",
    tags: ["Tokat", "Google Haritalar"],
    directAnswer:
      "Profil askıya alındıysa yeni bir profil açmak çözmez. İşletme adından anahtar kelimeyi çıkarın, pin’i gerçek konuma koyun, belgeleri hazırlayıp mevcut profil üzerinden itiraz edin. Olmayan şube için ikinci pin açmayın.",
    highlights: [
      "Askı, sıralama düşüşünden farklıdır",
      "İsimde “Tokat en iyi …” varsa kaldırın",
      "Evrak, tabeladaki ad ile aynı olsun",
      "İtiraz metnine hakaret veya acele slogan yazmayın",
    ],
    sections: [
      {
        h: "Sık nedenler",
        paragraphs: [
          "İşletme adına şehir ve hizmet yığmak, ev adresini dükkân gibi göstermek, aynı işletmeyi iki kez açmak ve kapalı bir işletmenin profilini devralıp bilgiyi değiştirmemek. Bunlar politikanın açık ihlalleridir.",
          "Yorum satın almak da profili ayrıca riske atar. Askıdan çıkmak için yeni sahte yorum istemeyin.",
        ],
      },
      {
        h: "İtirazdan önce",
        paragraphs: [
          "Adı tabelaya çekin. Kategori doğru olsun. Web sitesi varsa o alan adı profilde yazsın ve sitede aynı telefon görünsün. Fotoğrafta tabela okunuyorsa işiniz kolaylaşır.",
          "İtirazda kısa olun: kim olduğunuz, adresiniz, neyi düzelttiğiniz. “Hemen açın, reklam veriyorum” cümlesi inceleme metni değildir.",
        ],
      },
    ],
    faq: [
      {
        q: "Kaç günde açılır?",
        a: "Sabit süre yok. Eksik evrakla üst üste itiraz, sırayı uzatabilir.",
      },
      {
        q: "Yeni profil açsam daha hızlı olmaz mı?",
        a: "Genelde hayır. Kopya profil ikinci bir ihlal olur.",
      },
    ],
    links: [
      { href: "/blog/google-isletme-profili-nasil-acilir", label: "Profil nasıl açılır?" },
      { href: "/blog/tokat-google-haritalar-seo-rehberi", label: "Haritalar rehberi" },
      { href: "/iletisim", label: "Profili birlikte okuyalım" },
    ],
  }),
  guide({
    slug: "ticari-reklam-kurallari-2026",
    title: "Dijital reklamda Tokat işletmesinin dikkat edeceği kurallar",
    description:
      "Fiyat, stok ve kampanya vaadi reklamda neyse sayfada da o olmalıdır. 2026 reklam düzenlemelerini ilan metnine birebir kopyalamayın; güncel yönetmeliğe bakın.",
    tags: ["Reklam", "Tokat"],
    directAnswer:
      "Reklamda görünen fiyat, indirim şartı ve stok, tıklanınca açılan sayfada da durmalıdır. “En iyi”, “tek” gibi kanıtsız üstünlük ve yanıltıcı aciliyet, hem müşteriyi hem reklam hesabını zorlar. Güncel ticari reklam metnini resmi kaynaktan kontrol edin.",
    highlights: [
      "İndirim varsa eski ve yeni fiyat anlaşılır olsun",
      "Tükenmiş ürünü reklamda bırakmayın",
      "Yorum ve yıldız uydurmayın",
      "Sayfa, reklamın vaadini karşılamalı",
    ],
    sections: [
      {
        h: "Pratik kontrol",
        paragraphs: [
          "Reklamı açan kişi sayfada aynı ürünü, aynı şartı buluyor mu? Kargo bedava denmişse alt sınır yazıyor mu? “Son 2 ürün” her gün yeniden başlıyorsa bu aciliyet yanıltıcıdır.",
          "Yerel işletmede de kural değişmez. Tokat’ta yalnızca komşuya görünüyor olmak, yanıltıcı ilanı serbest bırakmaz.",
        ],
      },
      {
        h: "Resmi metni bizden ezberlemeyin",
        paragraphs: [
          "Yönetmelik güncellenir. Bir blog cümlesini hukuk müşavirinizin yerine koymayın. Şüpheli vaadi yayınlamadan önce Ticaret Bakanlığı duyurusuna veya danışmanınıza bakın. Bizim işimiz, sayfanın reklamla çelişmemesini sağlamaktır.",
        ],
      },
    ],
    faq: [
      {
        q: "Sosyal medya paylaşımı da reklam mı?",
        a: "Ürün satmak veya hizmete çağırmak için yapıldıysa ticari ileti gibi düşünün. “Sadece paylaştım” demek şartı kaldırmaz.",
      },
      {
        q: "Kampanya bitince ne olur?",
        a: "Reklamı durdurun ve sayfadaki fiyatı güncelleyin. Eski afiş yayında kalmasın.",
      },
    ],
    links: [
      { href: "/hizmetler/meta-reklam", label: "Reklam kurulumu" },
      { href: "/blog/tokat-isletmeleri-icin-google-ads", label: "Bütçe nereye gider?" },
      { href: "/iletisim", label: "Sayfayı kampanyaya göre kuralım" },
    ],
  }),
  guide({
    slug: "tokat-web-sitesi-yaptirmadan-once",
    title: "Tokat’ta web sitesi yaptırmadan önce sorulacak sorular",
    description:
      "Alan adı, süre, SEO, mobil, destek ve kodun kime ait olduğu. İmza atmadan önce on soru.",
    tags: ["Tokat", "Web Tasarım"],
    directAnswer:
      "Tokat’ta web sitesi yaptırmadan önce şunları yazıya dökün: sayfa listesi, teslim süresi, alan adının kime ait olduğu, mobil uyum, teknik SEO’nun pakete dahil olup olmadığı, revizyon, eğitim ve destek. Cevabı olmayan teklif, ucuz görünse de eksiktir.",
    highlights: [
      "Kapsam yoksa fiyat da yoktur",
      "Alan adı ve kod size ait olsun",
      "Örnek iş canlı açılabilsin",
      "Destek, “sonra bakarız” olmasın",
    ],
    sections: [
      {
        h: "On soru",
        paragraphs: [
          "Ne teslim edilecek? Kaç günde? Alan adı kimde kalacak? Metni kim yazacak? Telefon ve WhatsApp nasıl duracak? SEO’dan kastedilen teknik iskelet mi, aylık çalışma mı? Eğitim var mı? Yayından sonra kim küçük düzeltmeyi yapacak? Örnek işin adresi nedir? Sözleşmede bunlar var mı?",
          "Bu soruların cevabı sözlüyse, teklif henüz teklif değildir. Biz yazılı kapsam kullanırız.",
        ],
      },
      {
        h: "Hazır tema tuzağı",
        paragraphs: [
          "Ucuz paketin içi hazır tema, stok görsel ve size ait olmayan panel olabilir. İlk ay güzel durur. Değiştirmek istediğinizde kapı kilitlidir. Bunu baştan sorun.",
        ],
      },
    ],
    faq: [
      {
        q: "Hepsine evet diyen firmayı mı seçmeliyim?",
        a: "Hayır. “SEO dahil, birinci sıra dahil, her şey dahil” diyen cümle şüphelidir. Kapsamı kalem kalem okuyun.",
      },
      {
        q: "Bu soruları size sorabilir miyim?",
        a: "Evet. Keşif bunun için. Satın alma zorunluluğu yok.",
      },
    ],
    links: [
      { href: "/tokat-web-tasarim", label: "Tokat web tasarım sayfası" },
      { href: "/blog/tokat-web-tasarim-ajansi-nasil-secilir", label: "Ajans seçimi" },
      { href: "/iletisim", label: "Soruları birlikte geçelim" },
    ],
  }),
  guide({
    slug: "google-isletme-profili-nasil-acilir",
    title: "Tokat’ta Google İşletme Profili nasıl açılır?",
    description:
      "Hesap, kategori, doğrulama ve site bağlantısı. Olmayan adres uydurulmaz. Hizmet bölgesi ile dükkân adresi karıştırılmaz.",
    tags: ["Tokat", "Google Haritalar"],
    directAnswer:
      "Google İşletme Profili, işletme sahibi hesabıyla açılır. Ad tabeladaki addır. Müşterinin geldiği bir kapı varsa adres doğrulanır. Kapı yoksa hizmet bölgesi seçilir, sahte pin konmaz. Doğrulama mektup, telefon veya video ile gelebilir.",
    highlights: [
      "Kişisel hesapla değil, işletmenin erişebildiği hesapla açın",
      "Birincil kategori yaptığınız iş olsun",
      "Site adresine kendi alan adınızı yazın",
      "Doğrulama bitmeden yorum istemeyin",
    ],
    sections: [
      {
        h: "Adımlar",
        paragraphs: [
          "İşletme adını, kategoriyi ve hizmet bölgesini veya adresi girin. Telefonu, sitede kullanacağınız numarayla aynı yazın. Web sitesi hazırsa onu ekleyin; hazır değilse sosyal hesabı web sitesi yerine koymayın, boş bırakıp site bitince ekleyin.",
          "Doğrulama isteği gelince adresten veya videodan kaçmayın. Başkasının pin’ini “yakın diye” sahiplenmeyin.",
        ],
      },
      {
        h: "Açıldıktan sonra",
        paragraphs: [
          "Çalışma saatini, gerçek fotoğrafı ve hizmet listesini doldurun. Açıklamaya anahtar kelime dizisi yazmayın. Ne yaptığınızı iki cümleyle söyleyin. Yorum, iş bittikten sonra müşteriden istenir.",
        ],
      },
    ],
    faq: [
      {
        q: "Doğrulama ne kadar sürer?",
        a: "Yönteme göre değişir. Kartpostal günler sürebilir. Video daha kısa olabilir. Sabit gün vaadi vermeyin.",
      },
      {
        q: "Birden fazla ilçe seçebilir miyim?",
        a: "Hizmet veriyorsanız hizmet alanı olarak evet. Her ilçeye ayrı dükkân pin’i hayır.",
      },
    ],
    links: [
      { href: "/blog/tokat-google-haritalar-seo-rehberi", label: "Görünürlük rehberi" },
      { href: "/blog/google-isletme-profili-askiya-alindi", label: "Profil askıya alındıysa" },
      { href: "/iletisim", label: "Açılışta takılırsanız" },
    ],
  }),
  guide({
    slug: "tokat-sosyal-medya-yonetimi",
    title: "Tokat’taki işletme için sosyal medya ve site birlikte nasıl durur?",
    description:
      "Paylaşım, sizin yerinize arama sonucu olmaz. Instagram ilgiyi toplar; site ve harita o ilgiyi telefona çevirir.",
    tags: ["Tokat", "Sosyal Medya"],
    directAnswer:
      "Sosyal medya, Tokat’taki işletmenin güncel işini gösterir. Web sitesi, hizmeti ve iletişimi kalıcı tutar. İkisinde farklı telefon, farklı fiyat veya farklı işletme adı varsa ziyaretçi ikisine de güvenmez.",
    highlights: [
      "Hesap, web sitesinin yerine geçmez",
      "Profil bağlantısı kendi alan adınıza gitsin",
      "Her gönderi satış olmak zorunda değil",
      "Ölçüm: tıklama ve mesaj, beğeni değil",
    ],
    sections: [
      {
        h: "Ne paylaşılır?",
        paragraphs: [
          "Bitmiş iş, gerçek mekân, kısa bir süreç, çalışma saati değişikliği. Her güne aynı afişi basmak hesap doldurur, hatırlatmaz. Haftada düzenli ve doğru, her gün zorlama içerikten iyidir.",
          "Gönderide “yazın” diyorsanız cevaplayan biri olmalıdır. Sessiz WhatsApp, kampanyayı bitirir.",
        ],
      },
      {
        h: "Site ile bağ",
        paragraphs: [
          "Biyografideki link, kampanya bitsin diye her hafta değişen bir ağaç olmasın. Ana hizmet sayfanız veya iletişim, kalıcı durur. Özel kampanyayı ayrıca kısaltırsınız.",
          "Beğeni satın almak, harita yorumu satın almak kadar boştur. Çevrenizdeki gerçek müşteri, satın alınmış hesaptan değerlidir.",
        ],
      },
    ],
    faq: [
      {
        q: "Sosyal medyayı siz mi yönetiyorsunuz?",
        a: "Asıl işimiz site ve reklam altyapısıdır. İçerik takvimini işletmeyle kurarız; günlük topluluk yönetimini her pakete dahil saymayın.",
      },
      {
        q: "Sadece Instagram yeter mi?",
        a: "Keşif için bir süre yeter. Teklif, harita ve arama için kendi siteniz gerekir.",
      },
    ],
    links: [
      { href: "/hizmetler/meta-reklam", label: "Meta reklam" },
      { href: "/tokat-web-tasarim", label: "Kalıcı sayfa" },
      { href: "/iletisim", label: "Hesap ve siteyi hizalayalım" },
    ],
  }),
  guide({
    slug: "tokat-isletmeleri-icin-nfc",
    title: "Tokat’taki işletmeler için NFC ne işe yarar?",
    description:
      "Telefona dokundurulan kart; menü, yorum, kartvizit veya kampanya sayfası açabilir. Sihirli bir sıralama aracı değildir.",
    tags: ["Tokat", "NFC"],
    directAnswer:
      "NFC, telefonun okuduğu küçük bir etikettir. Tokat’ta masaya, vitrine veya kartvizite konunca menüyü, Google yorum ekranını veya iletişim sayfasını açabilir. Etiketin açtığı adres çalışmıyorsa plastik parçanın kendisi işe yaramaz.",
    highlights: [
      "Önce açılacak sayfa hazır olsun",
      "Yorum ekranına zorla yönlendirmek politika riski taşıyabilir",
      "Dijital kartvizit, kâğıdın yerine geçer",
      "Her işletmeye paket şart değildir",
    ],
    sections: [
      {
        h: "Mantıklı kullanım",
        paragraphs: [
          "Kafede menü, danışmanda kartvizit, kasada iletişim veya yol tarifi. Müşteri uygulamayı indirmez; telefonu yaklaştırır. iPhone ve Android’in yeni sürümleri bunu destekler, çok eski cihazlar etmeyebilir.",
          "Etikete yazdığınız adres değişirse etiketi de güncellersiniz veya kısa bir yönlendirme kullanırsınız. Kalıcı alan adı, kırk karakterlik ağaç linkinden daha sağlıklıdır.",
        ],
      },
      {
        h: "Yorum için dikkat",
        paragraphs: [
          "Müşteriden yorum istemek serbesttir. Yıldız şartı koymak, yalnızca memnuna kartı uzatmak ve ödüllü sahte yorum bu işi bozar. NFC’yi “5 yıldız garantisi” diye satan teklife itibar etmeyin.",
        ],
      },
    ],
    faq: [
      {
        q: "NFC, QR’dan iyi mi?",
        a: "Dokunmak, kamerayı açmaktan hızlıdır. Işıkta QR daha evrensel olabilir. Masada ikisi de durabilir.",
      },
      {
        q: "Siz kart basıyor musunuz?",
        a: "Sayfayı ve adresi kurarız. Fiziksel baskıyı, adres netleşince ayrıca konuşuruz.",
      },
    ],
    links: [
      { href: "/blog/tokat-google-yorumlari-nasil-artar", label: "Yorum isterken" },
      { href: "/blog/tokat-restoran-qr-menu", label: "QR menü" },
      { href: "/iletisim", label: "Hangi adresi açacağız?" },
    ],
  }),
  guide({
    slug: "tokat-restoran-qr-menu",
    title: "Tokat’ta restoran menüsü ve QR",
    description:
      "QR menü her zaman yasal zorunluluk değildir. İçerik, alerjen ve fiyat menüde okunmalıdır. Güncel kuralı resmi metinden kontrol edin.",
    tags: ["Tokat", "Restoran"],
    directAnswer:
      "QR menü, kâğıt menünün yerine kendiliğinden geçmez. Tokat’taki kafe ve restoran, fiyatı, içindekileri ve alerjen bilgisini müşterinin göreceği yerde tutmalıdır. Zorunluluk iddiasını bir blogdan değil, güncel resmi duyurudan doğrulayın.",
    highlights: [
      "QR, PDF mezarlığı olmasın",
      "Fiyat değişince sayfa da değişsin",
      "Alerjen bilgisi uydurulmaz",
      "Telefon çekmiyorsa kâğıt yedek durur",
    ],
    sections: [
      {
        h: "İyi menü sayfası",
        paragraphs: [
          "Kısa açılır, kategorisi bellidir, fiyatı okunur, fotoğraf o yemeğe aittir. On megabaytlık PDF, masada açılmaz. Sayfa, sizin alan adınızda durursa link kırılmaz.",
          "Gluten, süt veya sert alerjen bilgisini tahmini yazmayın. Bilmiyorsanız “mutfağa sorun” deyin, uydurmayın.",
        ],
      },
      {
        h: "Zorunluluk cümlesi",
        paragraphs: [
          "Menü düzenlemeleri zamanla değişir. “QR zorunlu” veya “QR serbest” hükmünü bu yazıya kilitlemiyoruz. Uygulamadan önce il müdürlüğü veya resmi tebliği okuyun. Bizim kurduğumuz şey, menünün telefonda düzgün açılmasıdır.",
        ],
      },
    ],
    faq: [
      {
        q: "Instagram menüsü yeter mi?",
        a: "Hikâyede kaybolur. Kalıcı bir sayfa daha doğru durur. Hesaptan o sayfaya link verirsiniz.",
      },
      {
        q: "Site şart mı?",
        a: "Tek sayfalık bir menü de kendi adresinizde durabilir. Restoran büyüdükçe rezervasyon ve harita ile birleşir.",
      },
    ],
    links: [
      { href: "/hizmetler/web-tasarim", label: "Tek sayfalık site" },
      { href: "/tokat-web-tasarim", label: "Tokat’ta site" },
      { href: "/iletisim", label: "Menüyü konuşalım" },
    ],
  }),
  guide({
    slug: "tokat-google-yorumlari-nasil-artar",
    title: "Tokat’ta Google yorumları nasıl artar?",
    description:
      "İş bitince istemek serbesttir. Satın almak, hediye karşılığı yıldız şartı koymak ve sahte hesap açmak serbest değildir.",
    tags: ["Tokat", "Yorum"],
    directAnswer:
      "Google yorumu, memnun kalan müşteriden iş bittikten sonra istenirse artar. Kartvizitte kısa bir rica, kasada nazik bir hatırlatma ve yoruma gerçek bir cevap yeter. Yorum satın almak hem politikaya aykırıdır hem profili askıya alabilir.",
    highlights: [
      "Her müşteriye aynı kopya metni ezberletmeyin",
      "Olumsuz yoruma hakaretle cevap vermeyin",
      "Yıldız şartlı indirim önermeyin",
      "Cevap, işletme sahibinin ağzından olsun",
    ],
    sections: [
      {
        h: "Doğru isteme",
        paragraphs: [
          "Hizmet bittikten sonra, müşteri oradayken, acele ettirmeden sorun. Bağlantıyı SMS veya kartla verebilirsiniz. “Beş yıldız yazarsanız şu kadar indirim” demeyin. Bu, yorumu teşvik değil takas yapar.",
          "Personel kendi hesabından on yorum yazmasın. Aile hesapları da aynı kapıya çıkar. Google bunu zamanla ayıklar.",
        ],
      },
      {
        h: "Gelen yoruma cevap",
        paragraphs: [
          "Teşekkür kısa olsun. Şikâyette savunmaya geçmeyin; neyi düzelteceğinizi söyleyin ve gerekirse telefonu verin. Herkese aynı paragrafı yapıştırmak, kimsenin okumadığını gösterir.",
          "Hakaret içeren yorumu cevapla büyütmeyin. Platformun bildirim yolunu kullanın, müşteriyle bağırmayın.",
        ],
      },
    ],
    faq: [
      {
        q: "Kaç yorum yeter?",
        a: "Sayı hedefi koymayın. Düzenli ve gerçek yorum, bir gecede elli sahte yorumdan iyidir.",
      },
      {
        q: "Negatif yorumu sildirebilir miyim?",
        a: "Hoşunuza gitmemesi silinme sebebi değildir. Politika ihlali varsa bildirirsiniz. Karar Google’a aittir.",
      },
    ],
    links: [
      { href: "/blog/google-isletme-profili-nasil-acilir", label: "Önce profil" },
      { href: "/blog/tokat-isletmeleri-icin-nfc", label: "Masada NFC" },
      { href: "/iletisim", label: "Profil metnini düzeltelim" },
    ],
  }),
  guide({
    slug: "isletmem-google-da-neden-cikmiyor",
    title: "İşletmem Google’da neden çıkmıyor?",
    description:
      "Tokat’ta çıkmamanın sık nedenleri: doğrulanmamış profil, yanlış kategori, site indekste değil, firma adı ile arama karışıyor.",
    tags: ["Tokat", "SEO"],
    directAnswer:
      "İşletmeniz Google’da çıkmıyorsa önce kendi adınızı arayın, sonra hizmeti. Profil doğrulanmamış, site indekse girmemiş veya kategori yanlış olabilir. “Tokat” kelimesini her yere yazmak bu üç sorunu çözmez.",
    highlights: [
      "Firma adı ayrı, hizmet araması ayrıdır",
      "Yeni site birkaç gün görünebilir, rekabetli kelime değil",
      "Harita ve site çelişirse ikisi de zayıflar",
      "Reklam, organik yokluğu gizler ama tedavi etmez",
    ],
    sections: [
      {
        h: "Ayırarak bakın",
        paragraphs: [
          "Kendi işletme adınız hiçbir sonuçta yoksa ya siteniz yayınlanmamıştır ya da adı farklı yazılmıştır. Adınız çıkıyor, “Tokat + hizmet” çıkmıyorsa sayfa o hizmeti anlatmıyordur veya rekabet daha doludur.",
          "Haritada hiç yoksanız profil yoktur veya askıdadır. Sitede çıkıp haritada yoksanız iki kanal ayrıdır; birini ötekine tamam sanmayın.",
        ],
      },
      {
        h: "İlk düzeltmeler",
        paragraphs: [
          "Search Console’da sayfa var mı bakın. Title’da hizmetin adı geçsin. Profil kategorisini kontrol edin. Telefonda açılmayan sayfayı reklama vermeden önce düzeltin.",
          "Bir haftada birinci olmayı vadeden işi satın almayın. Firma adında erken sonuç görülebilir. Geniş kelimeler sürer.",
        ],
      },
    ],
    faq: [
      {
        q: "Siteyi yeni açtım, normal mi?",
        a: "İndeks için günler sürebilir. Sitemap gönderildiyse bekleyin. Haftalar sonra hâlâ firma adınız yoksa teknik bir sorun vardır.",
      },
      {
        q: "Reklam verince organik de çıkar mı?",
        a: "Hayır. Reklam, reklam alanındadır. Organik sonuç ayrı kurulur.",
      },
    ],
    links: [
      { href: "/blog/tokat-teknik-seo-kontrol-listesi", label: "Teknik liste" },
      { href: "/blog/tokatta-seo-ile-google-gorunurlugu", label: "Tokat’ta görünürlük" },
      { href: "/iletisim", label: "Birlikte arayalım" },
    ],
  }),
  guide({
    slug: "tokat-yeni-isletme-ilk-musteri",
    title: "Tokat’ta yeni işletme ilk müşterisini nasıl bulur?",
    description:
      "Tabela, harita, doğru telefon ve çevreden gelen ilk iş. Reklam, sayfa hazır olmadan ilk adım değildir.",
    tags: ["Tokat", "Yeni İşletme"],
    directAnswer:
      "Yeni işletmenin ilk müşterisi çoğu zaman çevreden, tavsiyeden ve haritadan gelir. Tokat’ta açılış haftasında tabela ile aynı ad, çalışan bir telefon ve nerede olduğunuzu gösteren bir sayfa yeter. On bin takipçi, kapı numarasının yerini tutmaz.",
    highlights: [
      "Ad, her yerde aynı yazılsın",
      "Harita kaydını açılıştan önce doğrulamaya başlayın",
      "İlk işin fotoğrafı, stok görselden iyidir",
      "İndirim yağmuru, konumu anlatmayan sayfayı kurtarmaz",
    ],
    sections: [
      {
        h: "İlk hafta",
        paragraphs: [
          "Google profilini doğrulatın, çalışma saatini girin, kapıdan bir fotoğraf koyun. Tek sayfalık sitede ne yaptığınız, adresiniz ve telefonunuz dursun. Instagram’ı açın ama linki bu sayfaya verin.",
          "Tanıdığınız ilk on kişiye haber verin. Onların gerçek ziyareti, satın alınmış duyurudan daha sağlam başlangıçtır.",
        ],
      },
      {
        h: "İlk ay",
        paragraphs: [
          "Gelen müşteriden, memnunsa, yorum isteyin. Hangi soruyu telefonda üç kez duyduysanız onu sayfaya yazın. Reklamı, sayfa ve harita tamam olunca açın. Öncesi, boş vitrine trafik almaktır.",
        ],
      },
    ],
    faq: [
      {
        q: "Tabeladan önce site mi?",
        a: "İkisi birlikte yürür. Ad değişecekse siteyi ve profili son ad ile açın. İki isim, iki işletme gibi görünür.",
      },
      {
        q: "Küçük bütçeyle ne alınır?",
        a: "Tek sayfa, alan adı, harita ve düzenli cevap. Büyük paket, müşteri yokken aylık gider olur.",
      },
    ],
    links: [
      { href: "/blog/tokat-kucuk-isletme-web-sitesi-rehberi", label: "Küçük işletme sitesi" },
      { href: "/blog/google-isletme-profili-nasil-acilir", label: "Haritaya eklemek" },
      { href: "/iletisim", label: "Açılış sayfası" },
    ],
  }),
  guide({
    slug: "web-sitesi-mi-mobil-uygulama-mi",
    title: "Tokat’taki işletme için web sitesi mi, mobil uygulama mı?",
    description:
      "Çoğu yerel işletme önce site ister. Uygulama, müşteri her hafta geri geliyorsa ve hesap açıyorsa anlam kazanır.",
    tags: ["Tokat", "Mobil"],
    directAnswer:
      "Tokat’ta sizi arayan kişi uygulama mağazasına girmez, arama yapar. Web sitesi bu yüzden önce gelir. Uygulama; düzenli sipariş, üyelik veya saha ekibi gibi tekrar eden bir kullanım varsa düşünülür. İkisini birden ilk gün yaptırmak çoğu işletme için erkendir.",
    highlights: [
      "Arama sonucu uygulamaya çıkmaz",
      "Site, telefonda düzgünse “mobil” ihtiyacın çoğunu karşılar",
      "Uygulama iki mağaza, iki güncelleme demektir",
      "Önce kullanım sıklığına bakın",
    ],
    sections: [
      {
        h: "Site yeterken",
        paragraphs: [
          "Hizmeti anlatmak, teklif almak, menü göstermek, randevu vermek ve haritada bulunmak siteyle olur. Müşteri bunu yılda birkaç kez yapıyorsa uygulama indirmez.",
          "“Uygulamamız da olsun” cümlesi prestij için söyleniyorsa masraftır. İndirilmeyen uygulama, kapalı bir dükkân gibidir.",
        ],
      },
      {
        h: "Uygulama düşünülürken",
        paragraphs: [
          "Kurye, saha ekibi, sadakat puanı veya her gün açılan bir sipariş varsa bakılır. Yine de içerik ve marka önce sitede oturur. Uygulama, boş bir markanın üstüne konmaz.",
          "Bakım da fiyata dahildir: mağaza kuralları değişir, telefon modelleri değişir. Tek seferlik teslim hayali kurmayın.",
        ],
      },
    ],
    faq: [
      {
        q: "Siz uygulama yazıyor musunuz?",
        a: "Önceliğimiz webdir. Uygulama ihtiyacı gerçekse kapsamı ayırırız; her siteye zorunlu eklenti diye bakmayız.",
      },
      {
        q: "PWA sayılır mı?",
        a: "Ana ekrana eklenebilen bir site, basit ihtiyaçta uygulamaya yaklaşır. Mağaza şart değilse bu daha hafif bir yoldur.",
      },
    ],
    links: [
      { href: "/blog/tokatta-mobil-uyumlu-web-sitesi", label: "Mobil uyumlu site" },
      { href: "/hizmetler/web-tasarim", label: "Web tasarım" },
      { href: "/iletisim", label: "Hangisi gerektiğini ayıralım" },
    ],
  }),
  guide({
    slug: "tokat-dijital-donusum-yol-haritasi",
    title: "Tokat’taki küçük işletme için dijital yol haritası",
    description:
      "Önce ad ve telefon tutarlı olsun, sonra site, sonra harita, en son reklam. Her şeyi aynı aya sıkıştırmayın.",
    tags: ["Tokat", "Dijital"],
    directAnswer:
      "Dijital dönüşüm, Tokat’taki esnaf için bir yazılım fuarı değildir. Sıra şöyledir: aynı ad ve telefon, çalışan bir sayfa, doğrulanmış harita kaydı, gerçek fotoğraf, ancak ondan sonra reklam. Hepsi aynı hafta satın alınırsa hiçbiri oturmaz.",
    highlights: [
      "Birinci ay: kimlik ve iletişim",
      "İkinci ay: site ve harita",
      "Üçüncü ay: ölçüm ve gerekirse reklam",
      "Araç sayısı başarı değildir",
    ],
    sections: [
      {
        h: "Üç ay",
        paragraphs: [
          "İlk ay tabeladaki adı, telefonu ve çalışma saatini yazın. Eski kartvizitle yeni Instagram çelişmesin. İkinci ay tek bir site veya sayfa açın, haritayı doğrulatın, gerçek fotoğraf koyun. Üçüncü ay telefonda kaç kişinin aradığını ve formun çalışıp çalışmadığını görün.",
          "Ancak bu düzendeyse reklam anlamlıdır. Öncesi, tanımadığınız bir kalabalığa afiş asmaktır.",
        ],
      },
      {
        h: "Almayacaklarınız",
        paragraphs: [
          "Onlarca dizinden link, sahte yorum, her ilçeye kopya sayfa ve kullanılmayan mobil uygulama. Bunlar yol haritası değil, masraftır. Küçük bütçe, az ve doğru işe gitmelidir.",
        ],
      },
    ],
    faq: [
      {
        q: "Nereden başlamalıyım, sizde mi?",
        a: "Keşifte hangi adımda olduğunuzu söyleriz. Herkese aynı paketi açmayız.",
      },
      {
        q: "Ne kadar sürer?",
        a: "Sayfa günler sürebilir. Alışkanlık ve harita doğrulaması daha uzun sürer. İkisini karıştırmayın.",
      },
    ],
    links: [
      { href: "/blog/tokat-kucuk-isletme-web-sitesi-rehberi", label: "Küçük işletme rehberi" },
      { href: "/tokat-web-tasarim", label: "Tokat’ta web sitesi" },
      { href: "/iletisim", label: "Hangi adımdasınız?" },
    ],
  }),
  guide({
    slug: "tokat-web-tasarim-trendleri-2026",
    title: "2026’da Tokat işletmeleri için web tasarımda ne önemli?",
    description:
      "Trend, süslü efekt değil. Hız, okunur yazı, gerçek fotoğraf ve tek bir net eylem. Moda geçen kaydırmalar iş getirmez.",
    tags: ["Tokat", "Tasarım"],
    directAnswer:
      "2026’da Tokat’taki işletme sitesinde önemli olan trend kelimesi değil, telefonda hız, gerçek görüntü ve ziyaretçinin bir sonraki adımıdır. Ağır animasyon ve okunmayan ince yazı, yeni görünse de müşteriyi yorar.",
    highlights: [
      "Sade sayfa, bağıran sayfadan uzun yaşar",
      "Koyu tema tercih olabilir, zorunluluk değil",
      "Video, metnin yerine geçmez",
      "Erişilebilir yazı boyutu süstür diye küçültülmez",
    ],
    sections: [
      {
        h: "Takip etmeye değenler",
        paragraphs: [
          "Mobil düzen, hızlı görsel, net buton, karanlıkta da okunan kontrast ve yapay zekâ cevaplarının alıntılayabileceği sade paragraflar. Bunlar moda olduğu için değil, işe yaradığı için durur.",
          "Sektörünüz bağıran bir kampanya sitesi istemiyorsa istemeyin. Avukat ile restoran aynı şablona girmez. Trend, bu farkı silmek için değildir.",
        ],
      },
      {
        h: "Bırakılabilecekler",
        paragraphs: [
          "Açılışta on saniyelik intro, kendiliğinden çalan video, okunmayan kayan yazı ve her blokta başka bir renk. Bunlar “modern” fotoğrafında hoş durur, telefonda siteyi kapatır.",
        ],
      },
    ],
    faq: [
      {
        q: "Sitem eski göründüğü için sıra kaybeder mi?",
        a: "Tek başına renk yüzünden değil. Yavaşsa, telefonda bozuluyorsa ve hizmeti anlatmıyorsa kaybeder. Görünüm bunun parçasıdır.",
      },
      {
        q: "Her yıl tasarım değişmeli mi?",
        a: "Hayır. İçerik ve hız güncel kalsın. Tasarım, marka dağılmadıkça birkaç yıl durabilir.",
      },
    ],
    links: [
      { href: "/blog/tokat-web-sitesi-yenileme-rehberi", label: "Ne zaman yenilemeli?" },
      { href: "/hizmetler/web-tasarim", label: "Tasarım yaklaşımımız" },
      { href: "/projeler", label: "Örnek işler" },
    ],
  }),
];
