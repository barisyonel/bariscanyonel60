import { NextResponse } from "next/server";
import { getInstagramFeed } from "@/lib/instagram";

export async function GET() {
  const feed = await getInstagramFeed();
  return NextResponse.json(feed, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
