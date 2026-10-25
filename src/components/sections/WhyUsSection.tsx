const benefits = [
  {
    title: "Alan Adı Sizin Adınıza",
    text: "Alan adı müşterinin adına kayıtlıdır.",
  },
  {
    title: "Site ve Kodlar Size Ait",
    text: "Proje teslim edildiğinde dijital varlığınız üzerinde kontrol sizdedir.",
  },
  {
    title: "Ajansa Bağımlılık Yok",
    text: "Müşteriyi gereksiz teknik bağımlılığa sokmayan yapı.",
  },
  {
    title: "Mobil Uyumlu",
    text: "Telefon, tablet ve masaüstünde profesyonel görünüm.",
  },
  {
    title: "Hızlı Altyapı",
    text: "Performans odaklı modern web teknolojileri.",
  },
  {
    title: "SEO + GEO",
    text: "Google ve yapay zekâ tabanlı arama sistemleri için güçlü teknik altyapı.",
  },
] as const;

export function WhyUsSection() {
  return (
    <section id="neden-biz" className="hairline section-pad" aria-labelledby="neden-biz-heading">
      <div className="container-x">
        <h2 id="neden-biz-heading" className="max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
          Web Siteniz Gerçekten Sizin Olsun
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Teslimden sonra siteniz, alan adınız ve kodlarınız size kalır. Hız, mobil uyum ve arama
          görünürlüğü bu sahipliğin üstüne kurulur.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <li key={item.title} className="rounded-card border border-line bg-base p-6">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
