import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") || "BCY Dijital").slice(0, 80);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "space-between", padding: 64,
          background: "#050c18", color: "#eef3f9", fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 14, height: 14, borderRadius: 99, background: "#219acb" }} />
          <div style={{ fontSize: 28, fontWeight: 700 }}>BCY Dijital</div>
        </div>
        <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#8b9cb3" }}>
          <div>bariscanyonel.com</div>
          <div style={{ color: "#219acb" }}>Tokat · Çanakkale · İzmir</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
