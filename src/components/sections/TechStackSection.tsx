const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MySQL",
  "Cloudflare",
  "Vercel",
  "Schema.org / JSON-LD",
  "Open Graph",
] as const;

export function TechStackSection() {
  return (
    <section id="teknolojiler" className="hairline section-pad" aria-labelledby="teknolojiler-heading">
      <div className="container-x grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div>
          <h2 id="teknolojiler-heading" className="text-2xl font-semibold md:text-3xl">
            Kullandığımız teknolojiler
          </h2>
          <p className="mt-3 text-muted">Hızlı açılan, bakımı kolay ve uzun ömürlü bir altyapı.</p>
          <p className="mt-3 text-muted">
            Müşteri teknoloji adı satın almaz; hızlı açılan ve sonra güncellenebilen bir site satın alır.
            Aşağıdaki araçlar bu sonucu üretmek için kullandığımız yığındır. Sürüm ve kurulum detayı
            teklif metninde, işinize göre yazılır.
          </p>
        </div>
        <ul className="flex flex-wrap content-start gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-btn border border-accent/20 bg-accent-mist px-4 py-2 text-sm font-medium text-ink"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
