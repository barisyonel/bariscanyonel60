"use client";

import { PageTransition } from "@/components/ui/PageTransition";

/** Her navigasyonda yenilenir → sayfa geçiş animasyonu tetiklenir */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
