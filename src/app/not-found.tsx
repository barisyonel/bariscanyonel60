import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x section-pad text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-semibold">Bu sayfa taşınmış ya da hiç olmamış.</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        Aradığınızı ana sayfadan ya da hizmetler bölümünden bulabilirsiniz.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="/" className="rounded-btn bg-ink px-5 py-2.5 font-medium text-white">Ana sayfa</Link>
        <Link href="/hizmetler" className="rounded-btn border border-line px-5 py-2.5 text-ink hover:border-accent">Hizmetler</Link>
      </div>
    </div>
  );
}
