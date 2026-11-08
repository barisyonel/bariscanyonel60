const items = [
  { title: "Kurumsal kimlik", text: "Logo ve marka dili aynı çizgide" },
  { title: "Özel içerik", text: "İşletmenize göre yazılmış metinler" },
  { title: "Mail & domain", text: "Kurumsal mail, alan adı, hosting" },
  { title: "Google tanıtımı", text: "Yerel arama ve işletme görünürlüğü" },
  { title: "Marka büyümesi", text: "Site, SEO ve reklam aynı hedefte" },
] as const;

export function TrustBar() {
  return (
    <section aria-label="Kısa güvence maddeleri" className="pb-8 pt-2 md:pb-12">
      <ul className="mx-auto grid max-w-[1100px] grid-cols-2 gap-3 px-4 sm:px-6 lg:grid-cols-5 lg:px-6">
        {items.map((item, index) => (
          <li
            key={item.title}
            className={`rounded-card border border-line bg-elevated px-4 py-4 ${
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
