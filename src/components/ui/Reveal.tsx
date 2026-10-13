import type { CSSProperties, ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={className ? `reveal ${className}` : "reveal"}
      style={delay ? ({ "--reveal-delay": `${delay * 40}%` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
