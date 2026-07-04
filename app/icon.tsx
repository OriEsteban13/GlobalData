import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0D1B2A",
          borderRadius: 6,
        }}
      >
        <svg width="22" height="16" viewBox="0 0 600 200">
          <path d="M300,20 L40,180 L560,180 Z" fill="none" stroke="#00C9C8" strokeWidth={16} />
        </svg>
      </div>
    ),
    size
  );
}
