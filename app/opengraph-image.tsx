import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Pharveo - CRM Visite Médicale pour l'Afrique de l'Ouest";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0F2027",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        {/* Aurora orb */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -50,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(16,196,196,0.18)",
            display: "flex",
          }}
        />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 36 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 900,
              color: "#14B8B8",
              lineHeight: 1,
              marginRight: 16,
            }}
          >
            {">>"}
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            Pharveo
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 820,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
            }}
          >
            {"Le CRM pharmaceutique bâti pour"}
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#14B8B8",
              lineHeight: 1.2,
            }}
          >
            {"la visite médicale en Afrique de l'Ouest."}
          </div>
        </div>

        {/* Badges */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Offline-first", "Conforme ARP", "Go live 4–8 sem."].map((badge) => (
            <div
              key={badge}
              style={{
                display: "flex",
                background: "rgba(16,196,196,0.12)",
                border: "1px solid rgba(16,196,196,0.3)",
                borderRadius: 8,
                padding: "8px 20px",
                color: "#14B8B8",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {badge}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 100,
            color: "rgba(255,255,255,0.25)",
            fontSize: 20,
            display: "flex",
          }}
        >
          pharveo.com
        </div>
      </div>
    ),
    { ...size }
  );
}
