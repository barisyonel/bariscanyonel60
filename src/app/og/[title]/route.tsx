import { ImageResponse } from "next/og";

export const runtime = "edge";

type Props = { params: Promise<{ title: string }> };

export async function GET(_req: Request, { params }: Props) {
  const { title: raw } = await params;
  let title = "BCY Dijital";
  try {
    title = decodeURIComponent(raw || "").slice(0, 80) || title;
  } catch {
    title = (raw || title).slice(0, 80);
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#ffffff",
          color: "#0f1419",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 14, height: 14, borderRadius: 99, background: "#1a7fae" }} />
          <div style={{ fontSize: 28, fontWeight: 700 }}>BCY Dijital</div>
        </div>
        <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#5a6472" }}>
          <div>bariscanyonel.com</div>
          <div style={{ color: "#1a7fae" }}>Tokat · Çanakkale · İzmir · İstanbul</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
