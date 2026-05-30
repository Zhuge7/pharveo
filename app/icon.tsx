import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "#0F2027",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Double chevron >> — calqué sur le logo Pharveo */}
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
        >
          {/* Chevron gauche */}
          <path
            d="M6 8 L16 19 L6 30"
            stroke="#14B8B8"
            stroke-width="5.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          {/* Chevron droit */}
          <path
            d="M19 8 L29 19 L19 30"
            stroke="#0E8A8A"
            stroke-width="5.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
