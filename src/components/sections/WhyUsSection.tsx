const benefits = [
  {
    n: "01",
    title: "Size Özel Tasarım",
    text: "Hazır tema üzerine logo konmaz. Sektörünüze ve müşterinize göre arayüz kurulur. Asansör firması ile konaklama işletmesi aynı kutulara sığmaz; sayfa sırası işin kendisinden çıkar.",
  },
  {
    n: "02",
    title: "Mobil Öncelikli",
    text: "Telefon, tablet ve masaüstünde aynı netlikte açılan bir düzen. Teklif butonu ve form, dar ekranda da başparmağın ulaşacağı yerde durur.",
  },
  {
    n: "03",
    title: "SEO Altyapısı",
    text: "Sayfanın Google tarafından doğru okunması için teknik iskelet teslimata dahildir. Başlık, açıklama ve işletme bilgisi sayfayla birlikte yayınlanır.",
  },
  {
    n: "04",
    title: "Yüksek Performans",
    text: "Hızlı açılan, bakımı sürdürülebilir modern web teknolojileri. Ağır hazır temalar yerine sayfanın ihtiyacı kadar kod gider.",
  },
  {
    n: "05",
    title: "Kolay Sahiplik",
    text: "Alan adı, site ve kodlar teslimden sonra size kalır. Ajansa bağımlılık yoktur. İsterseniz sonraki güncellemeyi başka bir ekip de devralabilir.",
  },
  {
    n: "06",
    title: "Satış Odaklı UX",
    text: "Ziyaretçi teklif, arama veya WhatsApp adımına takılmadan ulaşır. Her sayfanın sonunda ne yapılacağı bellidir; süs için duran buton konmaz.",
  },
] as const;

export function WhyUsSection() {
  return (
    <section id="neden-biz" className="section-pad bg-elevated" aria-labelledby="neden-biz-heading">
      <div className="container-x">
        <p className="text-xs font-semibold tracking-[0.16em] text-accent">NEDEN BCY</p>
        <h2 id="neden-biz-heading" className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          Şablon Değil, İşletmenize Özel Bir Web Sitesi
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Teslimden sonra siteniz, alan adınız ve kodlarınız size kalır. Hız, mobil uyum ve arama
          görünürlüğü bu sahipliğin üstüne kurulur.
        </p>
        <p className="mt-3 max-w-2xl text-muted">
          Şablon, her işletmeye aynı kutuları verir. Burada sayfa düzeni işinize göre kurulur: teklif
          isteyen firma ile randevu alan işletme aynı akışa zorlanmaz. Aşağıdaki altı madde, teslimde
          neyi standart kabul ettiğimizi kısaca anlatır.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <li
              key={item.n}
              className="rounded-[18px] border border-line bg-base p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-(--shadow-md)"
            >
              <p className="text-sm font-semibold tracking-wide text-accent">{item.n}</p>
              <h3 className="mt-4 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
