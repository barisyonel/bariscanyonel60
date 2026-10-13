import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Marquee } from "@/components/ui/Marquee";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";

const facts = [
  { value: "25+", label: "Tamamlanan proje" },
  { value: "5 iş günü", label: "Kurumsal site teslim hedefi" },
  { value: "%100", label: "Size ait alan adı ve kod" },
] as const;

const featured = getProject("dalyan-palmiye-resort");
const secondary = getProject("prime-dizayn");

export function Hero() {
  return (
    <section id="anasayfa" aria-labelledby="home-h1" className="overflow-hidden pb-14 pt-12 md:pb-20 md:pt-20">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <p className="inline-flex items-center gap-2 rounded-btn border border-line bg-base py-1 pl-1.5 pr-3.5 text-sm text-muted">
            <span className="rounded-btn bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
              Tokat
            </span>
            Web tasarım stüdyosu
            <span className="hidden sm:inline">· {site.regions.slice(1).join(", ")}</span>
          </p>

          <h1
            id="home-h1"
            className="mt-6 max-w-[16ch] text-[clamp(2.5rem,5.4vw,4.4rem)] font-semibold leading-[1.03] text-ink"
          >
            İşletmenizi doğru anlatan <span className="mark-underline">web siteleri</span> yapıyoruz
          </h1>

          <p className="mt-7 max-w-[36rem] text-lg leading-relaxed text-muted">
            Tokat’ta kurumsal web sitesi, e-ticaret ve yerel SEO hizmeti veriyoruz. Müşterileriniz sizi
            Google’da bulsun, güvensin ve tek tıkla ulaşsın. Kapsamı yazılı veriyor, teslim tarihini
            baştan söylüyoruz.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/iletisim">Ücretsiz Keşif Görüşmesi</ButtonLink>
            <ButtonLink href="/projeler" variant="ghost">
              Projeleri İncele
            </ButtonLink>
          </div>

          <ul className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-7">
            {facts.map((f) => (
              <li key={f.label}>
                <p className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">{f.value}</p>
                <p className="mt-1 text-[0.82rem] leading-snug text-muted">{f.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:mr-0">
          {featured?.image ? (
            <Link href={`/projeler/${featured.slug}`} className="photo group relative ml-auto block aspect-square w-[88%]">
              <Image
                src={featured.image}
                alt={`${featured.name} web sitesi`}
                fill
                priority
                sizes="(max-width: 1024px) 88vw, 30rem"
                className="motion-media object-cover"
              />
            </Link>
          ) : null}
          {secondary?.image ? (
            <Link
              href={`/projeler/${secondary.slug}`}
              className="photo group absolute -bottom-6 left-0 block aspect-[3/2] w-[52%] ring-[6px] ring-base"
            >
              <Image
                src={secondary.image}
                alt={`${secondary.name} web sitesi`}
                fill
                sizes="(max-width: 1024px) 52vw, 18rem"
                className="motion-media object-cover"
              />
            </Link>
          ) : null}
          {featured ? (
            <div className="absolute right-3 top-3 rounded-xl bg-base px-3.5 py-2.5 shadow-md">
              <p className="flex items-center gap-1.5 text-[0.7rem] font-medium text-muted">
                <span className="size-1.5 rounded-full bg-[#1f9d55]" aria-hidden />
                Yayında
              </p>
              <p className="mt-0.5 text-sm font-semibold text-ink">{featured.name}</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="container-x mt-20">
        <p className="text-sm text-muted">Yayındaki sitelerimizden bazıları</p>
        <div className="mt-5 text-[1.05rem] font-medium text-muted">
          <Marquee
            label="Referans siteler"
            items={projects.map((p) => (
              <Link key={p.slug} href={`/projeler/${p.slug}`} className="transition-colors hover:text-ink">
                {new URL(p.url).hostname.replace(/^www\./, "")}
              </Link>
            ))}
          />
        </div>
      </div>
    </section>
  );
}
