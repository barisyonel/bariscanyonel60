const items = [
  { title: "Modern Tasarım", text: "Şablon değil, markaya özel arayüz" },
  { title: "Mobil Uyumlu", text: "Telefonda da aynı özen" },
  { title: "SEO Altyapısı", text: "Arama motorunun okuyacağı iskelet" },
  { title: "Hızlı Teslim", text: "Net kapsam, tanımlı takvim" },
  { title: "Satış Odaklı", text: "Teklif ve iletişim akışı net" },
] as const;

export function TrustBar() {
  return (
    <section aria-label="Güven göstergeleri" className="bg-white pb-8 pt-1 md:pb-12">
      <ul className="mx-auto grid max-w-[1100px] grid-cols-2 gap-3 px-4 sm:px-6 lg:grid-cols-5 lg:px-6">
        {items.map((item, index) => (
          <li
            key={item.title}
            className={`rounded-[16px] border border-line bg-white px-4 py-4 shadow-[0_10px_30px_-22px_rgba(7,26,38,0.45)] ${
              index === items.length - 1 ? "col-span-2 lg:col-span-1" : ""
            }`}
          >
            <span className="block h-1 w-8 rounded-full bg-accent" aria-hidden />
            <p className="mt-3 text-sm font-semibold text-ink">{item.title}</p>
            <p className="mt-1 text-sm leading-snug text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
