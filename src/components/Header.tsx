"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";

const nav = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/hakkimda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/sss", label: "SSS" },
];

function isActive(path: string | null, href: string) {
  if (!path) return false;
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
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
          className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
            scrolled
              ? "border-line/80 bg-base/75 backdrop-blur-xl supports-[backdrop-filter]:bg-base/60"
              : "border-transparent bg-transparent"
          }`}
        >
          <div className="container-x flex h-[4.5rem] items-center justify-between gap-4 lg:h-[5rem]">
            <BrandLogo onClick={() => setOpen(false)} />

            {/* Desktop: floating glass island */}
            <nav
              className="relative hidden items-center rounded-full border border-line/70 bg-elevated/55 p-1.5 shadow-[0_0_0_1px_rgba(33,154,203,0.04)_inset] backdrop-blur-md md:flex"
              aria-label="Ana menü"
            >
              {nav.map((n) => {
                const active = isActive(path, n.href);
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={`relative z-10 rounded-full px-2.5 py-2 text-[0.8rem] tracking-wide transition-colors lg:px-3.5 lg:text-[0.86rem] ${
                      active ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {active && !reduce && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-subtle ring-1 ring-accent/35"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {active && reduce && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-subtle ring-1 ring-accent/35" />
                    )}
                    <span className="relative">{n.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="tel:+905301129440"
                className="group hidden items-center gap-2 text-[0.82rem] text-muted transition-colors hover:text-accent lg:inline-flex"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
                  <span className="relative h-2 w-2 rounded-full bg-accent" />
                </span>
                0530 112 94 40
              </a>
              <Link
                href="/iletisim"
                className="group relative inline-flex overflow-hidden rounded-full bg-accent px-5 py-2.5 text-[0.86rem] font-medium text-base transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">Keşif Görüşmesi</span>
                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-line bg-elevated/80 backdrop-blur-md md:hidden"
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

      {/* Mobile full-screen menu */}
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
              className="absolute inset-0 bg-base/80 backdrop-blur-md"
              aria-label="Menüyü kapat"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              aria-label="Mobil menü"
              className="absolute inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto border-t border-line bg-gradient-to-b from-elevated to-base px-6 pb-10 pt-6"
              initial={reduce ? false : { y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduce ? undefined : { y: 16, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="space-y-1">
                {nav.map((n, i) => {
                  const active = isActive(path, n.href);
                  return (
                    <motion.li
                      key={n.href}
                      initial={reduce ? false : { opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: reduce ? 0 : 0.04 * i, duration: 0.3 }}
                    >
                      <Link
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className={`block border-b border-line/70 py-4 ${
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

              <div className="mt-8 space-y-3">
                <Link
                  href="/iletisim"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-center font-medium text-base"
                >
                  Ücretsiz Keşif Görüşmesi
                </Link>
                <a
                  href="tel:+905301129440"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  0530 112 94 40
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
