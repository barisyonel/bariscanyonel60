import { NextResponse } from "next/server";

/** Eski parametreli OG URL’lerini sabit, parametresiz görsele yönlendirir. */
export function GET(req: Request) {
  return NextResponse.redirect(new URL("/logo-og.jpg", req.url), 308);
}
