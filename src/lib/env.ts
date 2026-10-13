import { site } from "@/lib/site";

/** bariscanyonel.com — Resend'de doğrulanmış gönderici alanı */
function siteMailHost() {
  try {
    return new URL(site.domain).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "bariscanyonel.com";
  }
}

/**
 * From adresi doğrulanmış domain'de değilse info@…'ya düşer.
 * (me projesindeki Resend korumasıyla aynı mantık)
 */
function resolveContactFrom(raw?: string | null): string {
  const fallback = `BCY Dijital <${site.email}>`;
  const value = raw?.trim();
  if (!value) return fallback;

  const address = value.includes("<")
    ? value.match(/<([^>]+)>/)?.[1]?.trim()
    : value;
  if (!address || !address.includes("@")) return fallback;

  const host = address.split("@")[1]?.toLowerCase();
  const allowed = siteMailHost();
  if (host !== allowed && host !== `mail.${allowed}`) {
    return fallback;
  }

  if (value.includes("<")) return value;
  return `BCY Dijital <${address}>`;
}

/**
 * Sunucu tarafı ortam değişkenleri.
 * Eksik kritik değerlerde form gönderimi kontrollü düşer.
 */
export function getContactEnv() {
  const apiKey = process.env.RESEND_API_KEY?.trim() || "";
  const to = process.env.CONTACT_TO_EMAIL?.trim() || site.email;
  const from = resolveContactFrom(process.env.CONTACT_FROM_EMAIL);

  return {
    apiKey,
    to,
    from,
    configured: Boolean(apiKey),
  };
}

export function assertServerEnv() {
  const missing: string[] = [];
  if (!process.env.RESEND_API_KEY?.trim()) missing.push("RESEND_API_KEY");
  return { ok: missing.length === 0, missing };
}
