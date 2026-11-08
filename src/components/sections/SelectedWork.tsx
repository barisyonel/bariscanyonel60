import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/lib/projects";

export function SelectedWork({ projects }: { projects: Project[] }) {
  const [lead, second, ...rest] = projects;

  return (
    <section id="referanslar" className="section-pad scroll-mt-24" aria-labelledby="referanslar-heading">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Öne çıkan işler</p>
            <h2
              id="referanslar-heading"
              className="mt-3 max-w-2xl font-display text-3xl font-bold uppercase tracking-tight md:text-5xl"
            >
              Seçili projeler
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Farklı sektörlerde yaptığımız modern ve hızlı web sitelerini burada görebilirsiniz.
            </p>
            <p className="mt-3 max-w-xl text-muted">
              Kartlarda sitenin ekranı, sektörü ve teslimden sonra neyin değiştiği durur. Amaç vitrin
              göstermek değil; teklif, randevu ya da arama akışının o işte nasıl kurulduğunu anlatmak.
            </p>
          </div>
          <Link href="/projeler" className="link-underline text-sm font-semibold text-accent">
            Tüm projeler →
          </Link>
        </div>

        {lead ? (
          <Reveal className="mt-12">
            <article className="group relative grid overflow-hidden rounded-card border border-line bg-elevated lg:grid-cols-[1.25fr_0.75fr]">
              <Link
                href={`/projeler/${lead.slug}`}
                className="relative block min-h-[16rem] overflow-hidden lg:min-h-[28rem]"
                tabIndex={-1}
                aria-hidden
              >
                {lead.image ? (
                  <Image
                    src={lead.image}
                    alt={`${lead.name} web sitesi tasarımı`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="motion-media object-cover object-top"
                    priority
                  />
                ) : null}
              </Link>
              <div className="flex flex-col justify-end border-t border-line p-6 md:p-8 lg:border-l lg:border-t-0">
                <p className="text-sm font-medium text-accent">
                  {lead.sector} · {lead.city}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                  <Link href={`/projeler/${lead.slug}`} className="hover:text-accent">
                    {lead.name}
                  </Link>
                </h3>
                <p className="mt-3 text-muted">{lead.summary}</p>
                <p className="mt-3 text-sm font-medium text-ink">{lead.result}</p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                  <Link href={`/projeler/${lead.slug}`} className="link-underline text-accent">
                    Projeyi incele →
                  </Link>
                  <a
                    href={lead.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-muted hover:text-ink"
                  >
                    Canlı site ↗
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ) : null}

        {second ? (
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <ProjectCard p={second} featured />
            </Reveal>
            {rest[0] ? (
              <Reveal delay={0.06}>
                <ProjectCard p={rest[0]} featured />
              </Reveal>
            ) : null}
          </div>
        ) : null}

        {rest.length > 1 ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.slice(1).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
