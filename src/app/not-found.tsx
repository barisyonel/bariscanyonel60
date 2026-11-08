import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı (404)",
  robots: { index: false, follow: true },
};

const popular = [
  { href: "/hizmetler/web-tasarim", label: "Kurumsal web tasarım" },
  { href: "/projeler", label: "Projeler" },
  { href: "/blog", label: "Blog" },
  { href: "/sss", label: "Sık sorulanlar" },
  { href: "/iletisim", label: "İletişim" },
];

export default function NotFound() {
  return (
    <div className="container-x section-pad text-center">
      <p className="text-[clamp(5rem,16vw,9rem)] font-semibold leading-none tracking-tight text-line">404</p>
      <h1 className="mt-4 text-4xl font-semibold">Bu sayfa taşınmış ya da hiç olmamış</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        Adres yanlış yazılmış olabilir. Aradığınızı aşağıdaki sayfalardan bulabilirsiniz.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-btn bg-accent px-6 py-2.5 font-medium text-[#090b12] transition-colors hover:bg-accent-deep"
        >
          Ana sayfa
        </Link>
        <Link
          href="/iletisim"
          className="inline-flex min-h-11 items-center rounded-btn border border-line px-6 py-2.5 font-medium text-ink transition-colors hover:border-ink"
        >
          Bize yazın
        </Link>
      </div>
      <ul className="mx-auto mt-12 flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-2 text-[0.95rem]">
        {popular.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="link-underline text-accent">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
