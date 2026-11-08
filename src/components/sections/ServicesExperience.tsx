"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/projects";

type ServiceRow = {
  n: string;
  title: string;
  short: string;
  href: string;
  previewSlug?: string;
};

const rows: ServiceRow[] = [
  {
    n: "01",
    title: "Web Site",
    short: "Kurumsal site, işletmeye özgü içerik, mail entegrasyonu ve net teklif akışı.",
    href: "/hizmetler/web-tasarim",
    previewSlug: "prime-dizayn",
  },
  {
    n: "02",
    title: "Kurumsal Kimlik",
    short: "Logo, görsel dil ve marka sunumu — işletmenizi dijitalde tutarlı tanıtır.",
    href: "/hizmetler/web-tasarim",
    previewSlug: "aevum-troia",
  },
  {
    n: "03",
    title: "SEO & Google",
    short: "Google’da işletme tanıtımı, yerel arama ve SEO & GEO altyapısı.",
    href: "/hizmetler/seo",
    previewSlug: "samlioglu-hukuk",
  },
  {
    n: "04",
    title: "Domain & Hosting",
    short: "Alan adı, barındırma ve yayın. Sahiplik sizde kalır; ajansa bağlı kalmazsınız.",
    href: "/hizmetler/web-tasarim",
    previewSlug: "turanlar-ticaret",
  },
  {
    n: "05",
    title: "E-Ticaret",
    short: "Ödeme, stok ve sipariş akışı olan satış siteleri.",
    href: "/hizmetler/e-ticaret",
    previewSlug: "mygoldenfood",
  },
  {
    n: "06",
    title: "Marka Büyümesi",
    short: "Reklam, içerik ve site aynı hedefe bağlanır: marka değerini büyütmek.",
    href: "/hizmetler/meta-reklam",
    previewSlug: "dalyan-palmiye-resort",
  },
];

export function ServicesExperience() {
  const [active, setActive] = useState(0);
  const preview = projects.find((p) => p.slug === rows[active]?.previewSlug);

  return (
    <section id="hizmetler" className="hairline section-pad" aria-labelledby="hizmetler-heading">
      <div className="container-x">
        <p className="eyebrow">Hizmetler</p>
        <h2
          id="hizmetler-heading"
          className="mt-3 max-w-3xl font-display text-3xl font-bold uppercase tracking-tight md:text-5xl"
        >
          Web Site · Kimlik · SEO
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Kurumsal kimlik, logo, özel içerik, mail entegrasyonu, domain &amp; hosting ve Google’da
          işletme tanıtımını tek stüdyoda ilerletiyoruz.
        </p>
        <p className="mt-3 max-w-2xl text-muted">
          Amaç vitrin değil: marka değerini büyütmek, daha çok arama ve daha çok teklif almak.
        </p>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ul className="divide-y divide-line border-y border-line">
            {rows.map((row, index) => (
              <li key={row.n}>
                <Link
                  href={row.href}
                  className="group flex flex-col gap-2 py-5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                >
                  <div className="flex min-w-0 items-baseline gap-4 sm:gap-6">
                    <span className="font-display text-sm font-bold text-accent">{row.n}</span>
                    <span className="font-display text-xl font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-accent md:text-2xl">
                      {row.title}
                    </span>
                  </div>
                  <p className="max-w-md text-sm text-muted sm:text-right">{row.short}</p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative hidden overflow-hidden rounded-card border border-line bg-elevated lg:block">
            <div className="relative aspect-[4/5]">
              {preview?.image ? (
                <Image
                  src={preview.image}
                  alt={`${preview.name} önizleme`}
                  fill
                  sizes="40vw"
                  className="object-cover object-top transition duration-500"
                />
              ) : (
                <div className="absolute inset-0 grid-lines" />
              )}
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-base via-base/70 to-transparent p-5">
                <p className="eyebrow">Örnek proje</p>
                <p className="mt-2 font-display text-xl font-bold uppercase tracking-tight">
                  {preview?.name ?? "BCY Dijital"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:hidden">
          <Link href="/hizmetler" className="link-underline text-sm font-semibold text-accent">
            Tüm hizmetler →
          </Link>
        </div>
      </div>
    </section>
  );
}
