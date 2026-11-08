const benefits = [
  {
    n: "01",
    title: "Kurumsal Kimlik",
    text: "Logo, renk ve sunum dili işletmenize göre kurulur. Hazır tema üzerine logo yapıştırılmaz.",
  },
  {
    n: "02",
    title: "Özel İçerik",
    text: "Sayfa metinleri sektöre ve müşteriye göre yazılır. Kopyala-yapıştır içerik kullanmayız.",
  },
  {
    n: "03",
    title: "Mail & Domain",
    text: "Kurumsal mail, form entegrasyonu, alan adı ve hosting süreci teslimatın parçasıdır.",
  },
  {
    n: "04",
    title: "Google Tanıtımı",
    text: "Yerel arama, işletme kaydı ve SEO altyapısıyla Google’da doğru görünürlük hedeflenir.",
  },
  {
    n: "05",
    title: "Tam Sahiplik",
    text: "Alan adı, site ve kodlar teslimden sonra sizin üzerinize geçer. Ajansa bağlı kalmazsınız.",
  },
  {
    n: "06",
    title: "Marka Büyümesi",
    text: "Site, içerik ve reklam aynı hedefe bağlanır: daha çok teklif, daha güçlü marka değeri.",
  },
] as const;

export function WhyUsSection() {
  return (
    <section id="neden-biz" className="section-pad" aria-labelledby="neden-biz-heading">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Neden BCY</p>
            <h2
              id="neden-biz-heading"
              className="mt-3 max-w-xl font-display text-3xl font-bold uppercase tracking-tight md:text-5xl"
            >
              Şablon değil,
              <span className="mt-1 block text-accent">marka yatırımı</span>
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Web site tek başına yetmez. Kimlik, içerik, mail, domain ve Google tanıtımını birlikte
              kuruyoruz.
            </p>
            <p className="mt-3 max-w-md text-muted">
              Teslimden sonra siteniz, alan adınız ve kodlarınız size kalır. Amaç marka değerini
              büyütmek.
            </p>
          </div>

          <ol className="divide-y divide-line border-y border-line">
            {benefits.map((item) => (
              <li key={item.n} className="grid gap-3 py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-8">
                <span className="font-display text-3xl font-bold text-accent/80">{item.n}</span>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
