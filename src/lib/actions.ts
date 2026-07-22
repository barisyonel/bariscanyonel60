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

  const validated = validateContact({
    name: String(formData.get("name") || ""),
    phone: String(formData.get("phone") || ""),
    business: String(formData.get("business") || ""),
    message: String(formData.get("message") || ""),
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
