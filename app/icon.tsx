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
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontWeight: 900,
            color: "#14B8B8",
            lineHeight: 1,
            letterSpacing: -2,
          }}
        >
          {">>"}
        </div>
      </div>
    ),
    { ...size }
  );
}
