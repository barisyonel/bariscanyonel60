"use client";

import { Reveal } from "@/components/ui/Reveal";
import { KineticTitle } from "@/components/motion/Story";

const tech = [
  { name: "Next.js", hint: "App Router" },
  { name: "React", hint: "UI" },
  { name: "TypeScript", hint: "Type-safe" },
  { name: "Tailwind", hint: "Design system" },
  { name: "Node.js", hint: "Backend" },
  { name: "MySQL", hint: "Data" },
  { name: "Cloudflare", hint: "Edge / CDN" },
  { name: "Vercel", hint: "Deploy" },
  { name: "OpenAI", hint: "GEO / AI" },
  { name: "Schema.org", hint: "Structured data" },
  { name: "JSON-LD", hint: "Rich results" },
  { name: "Open Graph", hint: "Social" },
] as const;

function TechGlyph({ name }: { name: string }) {
  const letter = name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase();
  return (
    <span
      aria-hidden
      className="flex h-10 w-10 items-center justify-center rounded-btn border border-line bg-subtle/60 text-xs font-semibold tracking-wide text-accent transition-transform duration-400 group-hover:rotate-6 group-hover:border-accent/50"
    >
      {letter}
    </span>
  );
}

export function TechStackSection() {
  return (
    <section
      id="teknolojiler"
      className="hairline section-pad bg-elevated/40"
      aria-labelledby="teknolojiler-heading"
    >
      <div className="container-x">
        <p className="eyebrow">Altyapı</p>
        <KineticTitle
          id="teknolojiler-heading"
          text="Kullandığımız teknolojiler"
          className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl"
        />
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-muted">
            Apple / Linear / Vercel seviyesinde hız ve güvenilirlik için modern, bakımı kolay bir
            yığın.
          </p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {tech.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.04} variant="scale">
              <li className="group glass-card flex items-center gap-3 rounded-card border border-line p-4 transition-[border-color,transform,box-shadow] duration-400 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-22px_rgba(33,154,203,0.4)]">
                <TechGlyph name={t.name} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">{t.name}</p>
                  <p className="truncate text-xs text-muted">{t.hint}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
