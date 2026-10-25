"use server";

import { headers } from "next/headers";
import { submitContact, validateContact, type ContactResult } from "@/lib/contact";

export type FormState = { ok: boolean; message: string } | null;

async function clientIp() {
  const h = await headers();
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || undefined;
  return h.get("x-real-ip") || undefined;
}

export async function sendContact(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot
  if (formData.get("web_url")) return { ok: true, message: "Mesajınız alındı." };

  const email = String(formData.get("email") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const websiteStatus = String(formData.get("website_status") || "").trim();
  const variant = String(formData.get("form_variant") || "");

  if (email.length > 120 || service.length > 80 || websiteStatus.length > 80) {
    return { ok: false, message: "Girilen bilgiler çok uzun; lütfen kısaltın." };
  }
  if (variant === "quote" && !email) {
    return { ok: false, message: "Lütfen e-posta adresinizi girin." };
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Lütfen geçerli bir e-posta adresi girin." };
  }

  const message = [
    email ? `E-posta: ${email}` : "",
    service ? `İstenen hizmet: ${service}` : "",
    websiteStatus ? `Mevcut web sitesi: ${websiteStatus}` : "",
    String(formData.get("message") || "").trim(),
  ]
    .filter(Boolean)
    .join("\n");

  const validated = validateContact({
    name: String(formData.get("name") || ""),
    phone: String(formData.get("phone") || ""),
    business: String(formData.get("business") || ""),
    message,
  });

  if (!validated.ok) {
    return { ok: false, message: validated.message };
  }

  const result: ContactResult = await submitContact({
    ...validated.data,
    ip: await clientIp(),
    source: "form",
  });

  return { ok: result.ok, message: result.message };
}
