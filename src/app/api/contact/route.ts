import { NextResponse } from "next/server";
import { submitContact, validateContact } from "@/lib/contact";

export const runtime = "nodejs";

type Body = {
  name?: string;
  phone?: string;
  business?: string;
  message?: string;
  /** Honeypot */
  web_url?: string;
};

function ipFrom(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || undefined;
  return req.headers.get("x-real-ip") || undefined;
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Geçersiz JSON gövdesi." },
      { status: 400 }
    );
  }

  if (body.web_url) {
    return NextResponse.json({ ok: true, message: "Mesajınız alındı." });
  }

  const validated = validateContact({
    name: body.name || "",
    phone: body.phone || "",
    business: body.business || "",
    message: body.message || "",
  });

  if (!validated.ok) {
    return NextResponse.json(
      { ok: false, message: validated.message },
      { status: 422 }
    );
  }

  const result = await submitContact({
    ...validated.data,
    ip: ipFrom(req),
    source: "api",
  });

  return NextResponse.json(
    { ok: result.ok, message: result.message, code: result.ok ? undefined : result.code },
    { status: result.ok ? 200 : result.code === "rate_limit" ? 429 : 502 }
  );
}
