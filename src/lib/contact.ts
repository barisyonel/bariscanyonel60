import { Resend } from "resend";
import { getContactEnv } from "@/lib/env";
import { site } from "@/lib/site";

export type ContactPayload = {
  name: string;
  phone: string;
  business: string;
  message: string;
  /** İstemci IP (rate limit / log) */
  ip?: string;
  /** Kaynak: form | api */
  source?: "form" | "api";
};

export type ContactResult =
  | { ok: true; message: string }
  | { ok: false; message: string; code?: "validation" | "rate_limit" | "config" | "provider" };

const hits = new Map<string, number[]>();

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** TR telefonlarını kabaca normalize eder */
export function normalizePhone(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10 && digits.startsWith("5")) return `90${digits}`;
  if (digits.length === 11 && digits.startsWith("0")) return `9${digits.slice(1)}`;
  if (digits.length === 12 && digits.startsWith("90")) return digits;
  return digits;
}

export function validateContact(input: {
  name: string;
  phone: string;
  business?: string;
  message?: string;
}): { ok: true; data: ContactPayload } | { ok: false; message: string } {
  const name = String(input.name || "").trim();
  const phoneRaw = String(input.phone || "").trim();
  const business = String(input.business || "").trim();
  const message = String(input.message || "").trim();
  const phone = normalizePhone(phoneRaw);

  if (name.length < 2) {
    return { ok: false, message: "Lütfen adınızı girin (en az 2 karakter)." };
  }
  if (phone.length < 10 || phone.length > 15) {
    return { ok: false, message: "Lütfen geçerli bir telefon numarası girin." };
  }
  if (message.length > 4000) {
    return { ok: false, message: "Mesaj çok uzun; lütfen kısaltın." };
  }

  return { ok: true, data: { name, phone: phoneRaw, business, message } };
}

function rateLimit(key: string, limit = 3, windowMs = 60_000): boolean {
  const now = Date.now();
  const arr = (hits.get(key) || []).filter((t) => now - t < windowMs);
  if (arr.length >= limit) {
    hits.set(key, arr);
    return false;
  }
  arr.push(now);
  hits.set(key, arr);
  return true;
}

export async function submitContact(
  payload: ContactPayload
): Promise<ContactResult> {
  const phoneKey = normalizePhone(payload.phone);
  const limitKey = payload.ip ? `${payload.ip}:${phoneKey}` : phoneKey;

  if (!rateLimit(limitKey)) {
    return {
      ok: false,
      code: "rate_limit",
      message: "Çok sık denediniz, lütfen biraz bekleyin.",
    };
  }

  const env = getContactEnv();
  if (!env.configured) {
    console.error("[contact] RESEND_API_KEY eksik");
    return {
      ok: false,
      code: "config",
      message: "Form şu an kullanılamıyor. Lütfen WhatsApp'tan yazın.",
    };
  }

  const source = payload.source || "form";
  const resend = new Resend(env.apiKey);

  const { error } = await resend.emails.send({
    from: env.from,
    to: [env.to],
    subject: `Yeni keşif talebi — ${payload.name}`,
    replyTo: site.email,
    headers: {
      "X-BCY-Source": source,
      ...(payload.ip ? { "X-BCY-IP": payload.ip } : {}),
    },
    text: [
      `Ad: ${payload.name}`,
      `Telefon: ${payload.phone}`,
      `İşletme: ${payload.business || "—"}`,
      `Kaynak: ${source}`,
      payload.ip ? `IP: ${payload.ip}` : "",
      "",
      payload.message || "(Mesaj yok)",
    ]
      .filter(Boolean)
      .join("\n"),
    html: `
      <h2>Yeni iletişim formu</h2>
      <p><strong>Ad:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(payload.phone)}</p>
      <p><strong>İşletme:</strong> ${escapeHtml(payload.business || "—")}</p>
      <p><strong>Kaynak:</strong> ${escapeHtml(source)}</p>
      <p><strong>Mesaj:</strong></p>
      <p>${escapeHtml(payload.message || "(Mesaj yok)").replaceAll("\n", "<br/>")}</p>
    `,
  });

  if (error) {
    console.error("[contact] Resend hatası:", error);
    return {
      ok: false,
      code: "provider",
      message: "Gönderim başarısız. Lütfen WhatsApp'tan veya telefonla ulaşın.",
    };
  }

  console.info("[contact] gönderildi", {
    name: payload.name,
    phone: payload.phone.slice(0, 4) + "****",
    source,
  });

  return {
    ok: true,
    message: "Mesajınız alındı. En geç 1 iş günü içinde dönüş yapacağız.",
  };
}
