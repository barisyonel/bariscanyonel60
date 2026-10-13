import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { meta } from "@/lib/seo";
import { projects, getProject } from "@/lib/projects";
import { getTestimonialByProject } from "@/lib/testimonials";
import { waLink } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return meta({
    title: `${p.name} — ${p.sector} Vaka Çalışması`,
    description: p.summary,
    path: `/projeler/${p.slug}`,
  });
}

const serviceLink: Record<string, { href: string; label: string }> = {
  "E-Ticaret": { href: "/hizmetler/e-ticaret", label: "E-Ticaret hizmeti" },
  SEO: { href: "/hizmetler/seo", label: "SEO hizmeti" },
  "Yerel SEO": { href: "/hizmetler/seo", label: "SEO hizmeti" },
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const blocks = [
    { h: "Problem", t: p.problem },
    { h: "Çözüm", t: p.solution },
    { h: "Sonuç", t: p.result },
  ];
  const svc = p.tags.map((t) => serviceLink[t]).find(Boolean) ?? {
    href: "/hizmetler/web-tasarim",
    label: "Kurumsal web tasarım hizmeti",
  };
  const testimonial = getTestimonialByProject(p.slug);

  return (
    <div className="container-x section-pad">
      <JsonLd
        data={breadcrumb([
          { name: "Ana Sayfa", path: "/" },
          { name: "Projeler", path: "/projeler" },
          { name: p.name, path: `/projeler/${p.slug}` },
        ])}
      />
      <Reveal>
        <p className="eyebrow">{p.sector} · {p.city}</p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">{p.name}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{p.summary}</p>
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block text-sm text-accent hover:underline underline-offset-4"
        >
          Canlı siteyi gör →
        </a>
      </Reveal>

      {p.image && (
        <Reveal>
          <div className="relative mt-10 aspect-square overflow-hidden rounded-card border border-line bg-[#e6e8ec]">
            <Image
              src={p.image}
              alt={`${p.name} — laptop, tablet ve mobil mockup`}
              fill
              sizes="(max-width: 768px) 100vw, 72rem"
              className="object-contain object-center"
              priority
            />
          </div>
        </Reveal>
      )}

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {blocks.map((b, i) => (
          <Reveal key={b.h} delay={i * 0.08}>
            <div className="h-full rounded-card border border-line bg-elevated p-7">
              <p className="eyebrow">{b.h}</p>
              <p className="mt-4 text-[0.98rem] text-ink/80">{b.t}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {p.metric && (
        <Reveal>
          <div className="mt-6 rounded-card bg-elevated p-6">
            <p className="text-2xl font-semibold text-ink">{p.metric}</p>
            <p className="mt-1 text-sm text-muted">Search Console / analitik verisiyle doğrulanmıştır.</p>
          </div>
        </Reveal>
      )}

      {testimonial && (
        <Reveal>
          <figure className="mt-10 rounded-card bg-elevated p-7 md:p-8">
            <p className="eyebrow">Müşteri yorumu</p>
            <blockquote className="mt-4 text-lg leading-relaxed text-ink/80">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-5 text-sm text-muted">
              <span className="font-medium text-ink">{testimonial.company}</span>
              {" · "}
              {testimonial.role}
            </figcaption>
          </figure>
        </Reveal>
      )}

      <Reveal>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-card border border-line bg-elevated p-8">
          <div>
            <h2 className="text-2xl font-semibold">Benzer bir işe mi ihtiyacınız var?</h2>
            <p className="mt-2 text-muted">
              Bu projede kullandığımız yaklaşımı{" "}
              <Link href={svc.href} className="text-accent underline underline-offset-4">{svc.label}</Link>{" "}
              sayfasında anlatıyoruz.
            </p>
          </div>
          <ButtonLink href={waLink(`Merhaba, ${p.name} projenize benzer bir iş için görüşmek istiyorum.`)} external>
            WhatsApp&apos;tan yazın
          </ButtonLink>
        </div>
      </Reveal>
    </div>
  );
}
