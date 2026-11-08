import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

const phrases = [
  "KURUMSAL KİMLİK",
  "LOGO TASARIMI",
  "ÖZEL İÇERİK",
  "MAIL ENTEGRASYONU",
  "DOMAIN & HOSTING",
  "GOOGLE’DA İŞLETME TANITIMI",
  "MARKA DEĞERİNİ BÜYÜTME",
] as const;

const board = [
  { slug: "dalyan-palmiye-resort", role: "feature" },
  { slug: "guzubey-asansor", role: "side" },
  { slug: "aevum-troia", role: "side" },
] as const;

const tags = ["Kurumsal Kimlik", "Logo", "SEO & Google", "Domain & Hosting"] as const;

export function CreativeShowcase() {
  const items = board.flatMap((entry) => {
    const project = projects.find((item) => item.slug === entry.slug);
    return project?.image ? [{ ...project, role: entry.role }] : [];
  });

  const feature = items.find((item) => item.role === "feature");
  const sides = items.filter((item) => item.role === "side");

  if (!feature) return null;

  return (
    <section className="relative overflow-x-clip py-10 md:py-16" aria-labelledby="showcase-heading">
      <div className="neon-divider" />

      <div className="marquee mt-8" aria-hidden>
        <div className="marquee-track items-center">
          {phrases.map((phrase) => (
            <span
              key={phrase}
              className="font-display whitespace-nowrap text-[clamp(1.8rem,5vw,4.5rem)] font-bold tracking-tight text-ink/90"
            >
              {phrase}
              <span className="mx-6 text-accent">/</span>
            </span>
          ))}
        </div>
        <div className="marquee-track items-center" aria-hidden>
          {phrases.map((phrase) => (
            <span
              key={`${phrase}-dup`}
              className="font-display whitespace-nowrap text-[clamp(1.8rem,5vw,4.5rem)] font-bold tracking-tight text-ink/90"
            >
              {phrase}
              <span className="mx-6 text-accent">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container-x mt-12 md:mt-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow">Vitrin</p>
            <h2
              id="showcase-heading"
              className="mt-3 font-display text-[clamp(1.75rem,5vw,3.5rem)] font-bold uppercase leading-[1.05] tracking-tight text-ink"
            >
              Site değil,
              <span className="mt-1 block text-accent">dijital deneyim.</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              Kurumsal kimlik ve özel içerikle kurulmuş üç iş. Hazır tema yok; marka değeri önde.
            </p>
          </div>
          <Link href="/projeler" className="link-underline text-sm font-semibold text-accent">
            Tüm projeler →
          </Link>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Odak alanları">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-btn border border-line bg-elevated px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-line bg-elevated">
          <Link
            href={`/projeler/${feature.slug}`}
            className="group relative block border-b border-line bg-[#0c0f16]"
          >
            <div className="relative aspect-[16/10] md:aspect-[21/10]">
              <Image
                src={feature.image!}
                alt={`${feature.name} tasarım panosu`}
                fill
                sizes="100vw"
                className="object-contain p-4 transition duration-500 group-hover:scale-[1.01] sm:p-6 md:p-8"
                priority
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-subtle/80 px-5 py-4 md:px-7">
              <div>
                <p className="font-display text-lg font-bold uppercase tracking-tight text-ink md:text-xl">
                  {feature.name}
                </p>
                <p className="mt-0.5 text-sm text-muted">
                  {feature.sector}
                  {feature.city ? ` · ${feature.city}` : ""}
                </p>
              </div>
              <span className="text-sm font-semibold text-accent">Projeyi incele →</span>
            </div>
          </Link>

          <div className="grid md:grid-cols-2">
            {sides.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projeler/${project.slug}`}
                className={`group relative block bg-[#0c0f16] ${
                  index === 0 ? "md:border-r md:border-line" : ""
                } ${index < sides.length - 1 ? "border-b border-line md:border-b-0" : ""}`}
              >
                <div className="relative aspect-[16/11]">
                  <Image
                    src={project.image!}
                    alt={`${project.name} tasarım panosu`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-4 transition duration-500 group-hover:scale-[1.01] sm:p-5"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-line bg-subtle/80 px-5 py-3.5">
                  <div>
                    <p className="font-display text-base font-bold uppercase tracking-tight text-ink">
                      {project.name}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">{project.sector}</p>
                  </div>
                  <span className="shrink-0 text-xs font-semibold text-accent">İncele →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="neon-divider mt-12 md:mt-16" />
    </section>
  );
}
