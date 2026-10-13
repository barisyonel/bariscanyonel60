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
        </div>
        <ul className="flex flex-wrap content-start gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-btn border border-line px-4 py-2 text-sm text-ink"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
