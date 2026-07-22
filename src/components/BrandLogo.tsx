import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  /** compact: navbar mark+lockup; footer: larger lockup */
  size?: "nav" | "footer";
  className?: string;
  onClick?: () => void;
};

const sizes = {
  nav: { width: 140, height: 90, className: "h-11 w-auto md:h-12" },
  footer: { width: 180, height: 116, className: "h-16 w-auto" },
} as const;

export function BrandLogo({ href = "/", size = "nav", className = "", onClick }: BrandLogoProps) {
  const s = sizes[size];
  const img = (
    <Image
      src="/logo.png"
      alt="BCY Dijital — Web Tasarım | Dijital Çözümler"
      width={s.width}
      height={s.height}
      className={`${s.className} object-contain object-left`}
      priority={size === "nav"}
    />
  );

  if (!href) {
    return <span className={`inline-flex ${className}`}>{img}</span>;
  }

  return (
    <Link href={href} className={`inline-flex shrink-0 ${className}`} onClick={onClick} aria-label="BCY Dijital ana sayfa">
      {img}
    </Link>
  );
}
