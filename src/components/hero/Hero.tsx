import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const facts = [
  { value: "25+", label: "Tamamlanan proje" },
  { value: "5 iş günü", label: "Kurumsal site teslim hedefi" },
  { value: "%100", label: "Size ait alan adı ve kod" },
] as const;

const domains = projects.map((p) => new URL(p.url).hostname.replace(/^www\./, ""));

export function Hero() {
  return (
    <section id="anasayfa" aria-labelledby="home-h1" className="pb-16 pt-14 md:pb-24 md:pt-24">
      <div className="container-x">
        <p className="text-sm text-muted">
          Tokat web tasarım stüdyosu · {site.regions.join(", ")}
        </p>

        <h1
          id="home-h1"
          className="mt-5 max-w-[20ch] text-[clamp(2.4rem,6vw,4.25rem)] font-semibold leading-[1.05] text-ink"
        >
          İşletmenizi doğru anlatan <span className="mark-underline">web siteleri</span> yapıyoruz
        </h1>

        <p className="mt-7 max-w-[38rem] text-lg leading-relaxed text-muted">
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

        <ul className="mt-16 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
          {facts.map((f) => (
            <li key={f.label}>
              <p className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{f.value}</p>
              <p className="mt-1.5 text-sm text-muted">{f.label}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <p className="text-sm text-muted">Yayındaki sitelerimizden bazıları</p>
          <ul className="mt-4 flex flex-wrap gap-x-7 gap-y-2 text-[0.95rem] text-ink/70">
            {domains.map((d, i) => (
              <li key={d}>
                <Link
                  href={`/projeler/${projects[i].slug}`}
                  className="transition-colors hover:text-ink"
                >
                  {d}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
