const items = [
  "25+ Tamamlanan Proje",
  "5 İş Gününde Teslim",
  "SEO + GEO Altyapısı",
  "%100 Size Ait",
] as const;

export function TrustBar() {
  return (
    <section aria-label="Güven göstergeleri" className="border-y border-line bg-elevated">
      <ul className="container-x grid grid-cols-2 md:grid-cols-4">
        {items.map((item) => (
          <li key={item} className="px-1 py-4 text-sm font-medium text-ink md:px-4 md:py-5 md:text-[0.95rem]">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
