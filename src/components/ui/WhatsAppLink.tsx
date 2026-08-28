"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackMetaContact } from "@/lib/gtag";

type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function WhatsAppLink({ children, onClick, ...props }: WhatsAppLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackMetaContact();
    onClick?.(event);
  }

  return (
    <a
      {...props}
      target={props.target ?? "_blank"}
      rel={props.rel ?? "noopener noreferrer"}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
