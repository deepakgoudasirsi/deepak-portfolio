import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const dynamic = "force-static";

export const alt = `${portfolio.name} portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #070b14 0%, #111827 50%, #1e1b4b 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 28, color: "#818cf8", marginBottom: 16 }}>
          Portfolio
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
          {portfolio.name}
        </div>
        <div style={{ fontSize: 32, marginTop: 24, color: "#cbd5e1" }}>
          {portfolio.title}
        </div>
      </div>
    ),
    size,
  );
}
