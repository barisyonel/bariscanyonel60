"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/lib/site";

type DropItem = { href: string; label: string; note: string };

type NavLink = { kind: "link"; href: string; label: string };

type NavMenu = {
  kind: "menu";
  id: string;
  href: string;
  label: string;
  summary: string;
  align: "start" | "end";
  items: DropItem[];
};

type NavEntry = NavLink | NavMenu;

const serviceItems: DropItem[] = [
  { href: "/hizmetler/web-tasarim", label: "Kurumsal Web Tasarım", note: "Markaya özel, mobil öncelikli site" },
  { href: "/hizmetler/e-ticaret", label: "E-Ticaret", note: "Ödeme, stok ve sipariş paneli" },
  { href: "/hizmetler/seo", label: "SEO Optimizasyonu", note: "Teknik iskelet ve yerel arama" },
  { href: "/hizmetler/geo", label: "GEO", note: "Yapay zekâ cevaplarında görünürlük" },
  { href: "/hizmetler/meta-reklam", label: "Meta Reklam", note: "Facebook ve Instagram kampanyaları" },
];

const processItems: DropItem[] = [
  { href: "/#surec-tanisma", label: "Tanışma", note: "İşi ve müşteriyi yerinde dinleriz" },
  { href: "/#surec-strateji", label: "Strateji", note: "Kapsam yazılı teklife döner" },
  { href: "/#surec-tasarim", label: "Tasarım", note: "Ana sayfa yönü birlikte seçilir" },
  { href: "/#surec-gelistirme", label: "Geliştirme", note: "Sayfalar birlikte kontrol edilir" },
  { href: "/#surec-yayin", label: "Yayın", note: "Alan adı ve site size geçer" },
];

const blogItems: DropItem[] = [
  { href: "/blog/tokatta-web-sitesi-kac-tl", label: "Web sitesi kaç TL tutar?", note: "Fiyatın neye göre yazıldığı" },
  { href: "/blog/tokat-web-sitesi-ne-kadar-surer", label: "Site kaç günde hazır olur?", note: "Teslim takvimi" },
  { href: "/blog/isletmeler-icin-seo-nereden-baslanir", label: "SEO'ya nereden başlanır?", note: "Küçük işletme için ilk adım" },
  { href: "/blog/yapay-zeka-aramalarinda-firmaniz-cikiyor-mu", label: "Yapay zekâ aramalarında görünürlük", note: "Asistan cevaplarında yer almak" },
];

const nav: NavEntry[] = [
  { kind: "menu", id: "hizmetler", href: "/hizmetler", label: "Hizmetler", summary: "Tüm hizmetler", align: "start", items: serviceItems },
  { kind: "link", href: "/projeler", label: "Projeler" },
  { kind: "menu", id: "surec", href: "/#surec", label: "Süreç", summary: "Sürecin tamamı", align: "start", items: processItems },
  { kind: "link", href: "/hakkimda", label: "Hakkımda" },
  { kind: "menu", id: "blog", href: "/blog", label: "Blog", summary: "Tüm yazılar", align: "end", items: blogItems },
  { kind: "link", href: "/iletisim", label: "İletişim" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Social = { url: string; label: string; icon: ReactNode };

function socialFromUrl(url: string): Social {
  if (url.includes("linkedin")) {
    return {
      url,
      label: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
        </svg>
      ),
    };
  }
  if (url.includes("instagram")) {
    return {
      url,
      label: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
        </svg>
      ),
    };
  }
  return {
    url,
    label: "Medium",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
        <path d="M7.5 5.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zm8.25 0c-1.86 0-3.38 3.02-3.38 6.75s1.52 6.75 3.38 6.75 3.37-3.02 3.37-6.75-1.51-6.75-3.37-6.75zm5.25 0c-.93 0-1.69 3.02-1.69 6.75s.76 6.75 1.69 6.75S22.5 15.73 22.5 12s-.76-6.75-1.5-6.75z" />
      </svg>
    ),
  };
}

const socials = site.sameAs.map(socialFromUrl);

function isActive(path: string | null, href: string) {
  if (!path) return false;
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label="Sosyal medya">
      {socials.map((s) => (
        <a
          key={s.url}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="inline-flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-accent"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

function linkClass(active: boolean) {
  return `rounded-full px-3.5 py-2 text-[0.95rem] font-semibold tracking-tight transition-colors ${
    active ? "bg-accent-mist text-accent" : "text-ink hover:bg-accent-mist hover:text-accent"
  }`;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const reduce = useReducedMotion();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
    setMobileSection(null);
  }, [path]);

  useEffect(() => {
    if (!menu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(null);
    };
    const onPointer = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [menu]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50">
        <div
          className={`border-b transition duration-300 ${
            scrolled
              ? "border-line bg-white/80 shadow-sm backdrop-blur-md"
              : "border-transparent bg-white/70 backdrop-blur-sm"
          }`}
        >
          <div className="container-x flex h-[4.75rem] items-center justify-between gap-6">
            <BrandLogo onClick={() => setOpen(false)} />

            <nav ref={navRef} className="hidden items-center gap-0.5 lg:flex" aria-label="Ana menü">
              {nav.map((item) => {
                switch (item.kind) {
                  case "link": {
                    const active = isActive(path, item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={linkClass(active)}
                      >
                        {item.label}
                      </Link>
                    );
                  }
                  case "menu": {
                    const active = isActive(path, item.href);
                    const expanded = menu === item.id;
                    return (
                      <div
                        key={item.id}
                        className="relative"
                        onMouseEnter={() => setMenu(item.id)}
                        onMouseLeave={() => setMenu((current) => (current === item.id ? null : current))}
                      >
                        <Link
                          href={item.href}
                          className={`inline-flex items-center gap-1 ${linkClass(active || expanded)}`}
                          aria-expanded={expanded}
                          aria-haspopup="true"
                          aria-controls={`nav-${item.id}`}
                          onClick={(event) => {
                            const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
                            if (!canHover && menu !== item.id) {
                              event.preventDefault();
                              setMenu(item.id);
                            }
                          }}
                        >
                          {item.label}
                          <Chevron open={expanded} />
                        </Link>
                        <div
                          id={`nav-${item.id}`}
                          role="region"
                          aria-label={item.label}
                          className={`absolute top-full z-50 w-[22rem] pt-3 ${
                            item.align === "end" ? "right-0" : "left-0"
                          } ${expanded ? "visible" : "invisible pointer-events-none"}`}
                        >
                          <div
                            className={`rounded-[18px] border border-line bg-white p-2 shadow-[0_22px_50px_-28px_rgba(7,26,38,0.55)] transition duration-200 ${
                              expanded ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                            }`}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setMenu(null)}
                              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-accent hover:bg-accent-mist"
                            >
                              {item.summary}
                              <span aria-hidden>→</span>
                            </Link>
                            <ul className="mt-1 border-t border-line pt-1">
                              {item.items.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setMenu(null)}
                                    className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-accent-mist"
                                  >
                                    <span className="block text-sm font-semibold text-ink">{child.label}</span>
                                    <span className="mt-0.5 block text-xs leading-snug text-muted">{child.note}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  default: {
                    const unreachable: never = item;
                    return unreachable;
                  }
                }
              })}
            </nav>

            <div className="hidden lg:flex">
              <Link
                href={path === "/" ? "/#teklif" : "/iletisim"}
                className="inline-flex items-center rounded-btn bg-accent px-5 py-2.5 text-[0.95rem] font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-accent-deep hover:shadow-[0_10px_28px_-12px_rgba(8,126,164,0.7)]"
              >
                Ücretsiz Teklif Al
              </Link>
            </div>

            <button
              type="button"
              className="relative z-[60] flex h-11 w-11 items-center justify-center lg:hidden"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menü</span>
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 origin-center bg-ink transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-ink transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 origin-center bg-ink transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 bottom-0 top-[4.75rem] z-[55] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-ink/20"
              aria-label="Menüyü kapat"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              aria-label="Mobil menü"
              className="absolute inset-0 overflow-y-auto border-t border-accent/20 bg-base px-6 pb-10 pt-8"
              initial={reduce ? false : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduce ? undefined : { y: 12, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="space-y-0">
                {nav.map((item, i) => {
                  switch (item.kind) {
                    case "link": {
                      const active = isActive(path, item.href);
                      return (
                        <motion.li
                          key={item.href}
                          initial={reduce ? false : { opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reduce ? 0 : 0.04 * i, duration: 0.3 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`block border-b border-line py-4 ${active ? "text-accent" : "text-ink"}`}
                          >
                            <span className="text-2xl font-semibold">{item.label}</span>
                          </Link>
                        </motion.li>
                      );
                    }
                    case "menu": {
                      const active = isActive(path, item.href);
                      const expanded = mobileSection === item.id;
                      return (
                        <motion.li
                          key={item.id}
                          initial={reduce ? false : { opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: reduce ? 0 : 0.04 * i, duration: 0.3 }}
                          className="border-b border-line"
                        >
                          <div className="flex items-center">
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className={`flex-1 py-4 text-2xl font-semibold ${active ? "text-accent" : "text-ink"}`}
                            >
                              {item.label}
                            </Link>
                            <button
                              type="button"
                              className="inline-flex size-11 items-center justify-center rounded-btn text-ink"
                              aria-expanded={expanded}
                              aria-controls={`mobile-${item.id}`}
                              aria-label={expanded ? `${item.label} menüsünü kapat` : `${item.label} menüsünü aç`}
                              onClick={() => setMobileSection((current) => (current === item.id ? null : item.id))}
                            >
                              <Chevron open={expanded} />
                            </button>
                          </div>
                          {expanded ? (
                            <ul id={`mobile-${item.id}`} className="mb-4 space-y-1 rounded-[16px] bg-accent-mist p-2">
                              <li>
                                <Link
                                  href={item.href}
                                  onClick={() => setOpen(false)}
                                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-accent"
                                >
                                  {item.summary} →
                                </Link>
                              </li>
                              {item.items.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-xl px-3 py-2.5"
                                  >
                                    <span className="block text-sm font-semibold text-ink">{child.label}</span>
                                    <span className="mt-0.5 block text-xs text-muted">{child.note}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </motion.li>
                      );
                    }
                    default: {
                      const unreachable: never = item;
                      return unreachable;
                    }
                  }
                })}
              </ul>

              <div className="mt-10 space-y-3">
                <Link
                  href="/iletisim"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-btn bg-accent px-6 py-3.5 text-center font-semibold text-white"
                >
                  Ücretsiz Teklif Al
                </Link>
                <a
                  href={`tel:+${site.phoneRaw}`}
                  className="flex w-full items-center justify-center rounded-btn border border-line px-6 py-3.5 text-ink transition-colors hover:border-ink"
                >
                  0530 112 94 40
                </a>
                <SocialLinks className="justify-center pt-4" />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
