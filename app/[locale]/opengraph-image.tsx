import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0D1B2A",
        }}
      >
        <svg width="360" height="120" viewBox="0 0 600 200">
          <path
            d="M300,20 L40,180 L150,70 L460,60 L560,180 Z"
            fill="none"
            stroke="#00C9C8"
            strokeWidth={6}
          />
        </svg>
        <div
          style={{
            marginTop: 32,
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: 2,
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          Global Data 468
        </div>
        <div style={{ marginTop: 12, fontSize: 24, color: "#00C9C8", letterSpacing: 4 }}>
          ANALYZE, OPTIMIZE, GROW
        </div>
      </div>
    ),
    size
  );
}
