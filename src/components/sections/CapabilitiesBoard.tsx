import Link from "next/link";

const capabilities = [
  {
    title: "Kurumsal Kimlik",
    text: "Markanın nasıl görüneceğini netleştiririz: renk, tipografi ve sunum dili aynı çizgide kalır.",
    href: "/hizmetler/web-tasarim",
  },
  {
    title: "Logo Tasarımı",
    text: "İşletmenizi tek bakışta tanıtan, sade ve kullanılabilir logo çalışması.",
    href: "/hizmetler/web-tasarim",
  },
  {
    title: "Özel İçerik",
    text: "Hazır metin yapıştırılmaz. Sektörünüze ve müşterinize göre sayfa metinleri yazılır.",
    href: "/hizmetler/web-tasarim",
  },
  {
    title: "Mail Entegrasyonu",
    text: "İletişim formu, kurumsal e-posta ve bildirim akışı sitenizle birlikte kurulur.",
    href: "/hizmetler/web-tasarim",
  },
  {
    title: "Domain & Hosting",
    text: "Alan adı, barındırma ve yayına alma sürecini birlikte netleştiririz; sahiplik sizde kalır.",
    href: "/hizmetler/web-tasarim",
  },
  {
    title: "Google’da Tanıtım",
    text: "İşletme kaydı, yerel arama ve site altyapısıyla Google’da doğru görünürlüğü hedefleriz.",
    href: "/hizmetler/seo",
  },
  {
    title: "SEO & GEO",
    text: "Arama sonuçlarında ve yapay zekâ cevaplarında işletmenizin adı geçsin diye teknik iskelet kurarız.",
    href: "/hizmetler/seo",
  },
  {
    title: "Marka Büyümesi",
    text: "Site, içerik ve reklam aynı hedefe bağlanır: daha fazla teklif, daha güçlü marka değeri.",
    href: "/hizmetler/meta-reklam",
  },
] as const;

export function CapabilitiesBoard() {
  return (
    <section
      id="yetenekler"
      className="hairline section-pad"
      aria-labelledby="yetenekler-heading"
    >
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Kapsam</p>
          <h2
            id="yetenekler-heading"
            className="mt-3 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl"
          >
            Markanızı
            <span className="mt-1 block text-accent">dijitalde büyüten işler</span>
          </h2>
          <p className="mt-4 text-muted">
            Web sitesi tek başına yetmez. Kimlik, içerik, mail, alan adı ve Google görünürlüğünü aynı
            masada kuruyoruz.
          </p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <li key={item.title} className="bg-elevated">
              <Link
                href={item.href}
                className="group flex h-full flex-col p-5 transition-colors hover:bg-subtle md:p-6"
              >
                <span className="font-display text-lg font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-accent md:text-xl">
                  {item.title}
                </span>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.text}</p>
                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  İncele →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
