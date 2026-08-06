"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/lib/site";

const nav = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/hakkimda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/sss", label: "SSS" },
];

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
          className="inline-flex h-9 w-9 items-center justify-center text-muted transition-colors hover:text-accent"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

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
          className={`border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
            scrolled
              ? "border-line/60 bg-base/80 backdrop-blur-xl supports-[backdrop-filter]:bg-base/65"
              : "border-transparent bg-transparent"
          }`}
        >
          <div className="container-x flex h-[4.5rem] items-center justify-between gap-6 lg:h-[5rem]">
            <BrandLogo onClick={() => setOpen(false)} />

            <nav className="hidden items-center gap-1 md:flex" aria-label="Ana menü">
              {nav.map((n) => {
                const active = isActive(path, n.href);
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={`relative px-3 py-2 text-[0.84rem] tracking-[0.04em] transition-colors lg:px-3.5 ${
                      active ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {n.label}
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                      aria-hidden
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex lg:gap-4">
              <SocialLinks />
              <a
                href="tel:+905301129440"
                className="hidden text-[0.82rem] tracking-wide text-muted transition-colors hover:text-accent xl:inline"
              >
                0530 112 94 40
              </a>
              <Link
                href="/iletisim"
                className="inline-flex items-center rounded-btn bg-accent px-5 py-2.5 text-[0.84rem] font-medium text-base transition-colors hover:bg-[#3eb0db]"
              >
                Keşif Görüşmesi
              </Link>
            </div>

            <button
              type="button"
              className="relative z-[60] flex h-11 w-11 items-center justify-center md:hidden"
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
            className="fixed inset-0 z-[55] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-base/85 backdrop-blur-md"
              aria-label="Menüyü kapat"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              aria-label="Mobil menü"
              className="absolute inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto border-t border-line bg-base px-6 pb-10 pt-8"
              initial={reduce ? false : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduce ? undefined : { y: 12, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="space-y-0">
                {nav.map((n, i) => {
                  const active = isActive(path, n.href);
                  return (
                    <motion.li
                      key={n.href}
                      initial={reduce ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduce ? 0 : 0.04 * i, duration: 0.3 }}
                    >
                      <Link
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className={`block border-b border-line/50 py-5 ${
                          active ? "text-accent" : "text-ink"
                        }`}
                      >
                        <span className="display text-2xl font-semibold tracking-wide sm:text-3xl">
                          {n.label}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-10 space-y-3">
                <Link
                  href="/iletisim"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-btn bg-accent px-6 py-3.5 text-center font-medium text-base"
                >
                  Ücretsiz Keşif Görüşmesi
                </Link>
                <a
                  href="tel:+905301129440"
                  className="flex w-full items-center justify-center border border-line px-6 py-3.5 text-muted transition-colors hover:border-accent hover:text-accent"
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
