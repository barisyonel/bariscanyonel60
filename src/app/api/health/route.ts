import { NextResponse } from "next/server";
import { assertServerEnv } from "@/lib/env";
import { site } from "@/lib/site";

export const runtime = "nodejs";

/** Deploy / uptime kontrolü — gizli veri döndürmez */
export async function GET() {
  const env = assertServerEnv();
  return NextResponse.json({
    ok: true,
    service: site.name,
    contactMail: env.ok,
    time: new Date().toISOString(),
  });
}
