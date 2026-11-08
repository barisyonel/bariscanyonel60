import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  size?: "nav" | "footer";
  className?: string;
  onClick?: () => void;
  variant?: "dark" | "light";
};

const sizes = {
  nav: { mark: "h-8 w-auto", text: "text-[1.15rem]" },
  footer: { mark: "h-9 w-auto", text: "text-xl" },
} as const;

export function BrandLogo({
  href = "/",
  size = "nav",
  className = "",
  onClick,
  variant = "dark",
}: BrandLogoProps) {
  const s = sizes[size];
  // logo-mark.png koyu zeminde; light-bg varyantı açık yüzeyler için
  const markSrc = variant === "dark" ? "/logo-mark.png" : "/logo-mark-light-bg.png";
  const textClass = variant === "dark" ? "text-ink" : "text-[#0f172a]";


  const content = (
    <>
      <Image
        src={markSrc}
        alt="BCY Dijital logosu"
        width={515}
        height={239}
        className={`${s.mark} object-contain`}
        priority={size === "nav"}
      />
      <span className={`${s.text} font-bold tracking-tight ${textClass}`}>Dijital</span>
    </>
  );

  if (!href) {
    return <span className={`inline-flex items-center gap-2.5 ${className}`}>{content}</span>;
  }

  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center gap-2.5 ${className}`}
      onClick={onClick}
      aria-label="BCY Dijital ana sayfa"
    >
      {content}
    </Link>
  );
}
