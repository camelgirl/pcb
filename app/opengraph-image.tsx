import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bridge PCB — PCB & PCBA Manufacturing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#09090b",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Copper glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,168,83,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Copper glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,168,83,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 48 }}>
          {/* Logo icon (inline SVG) */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#d4a853" />
                <stop offset="100%" stopColor="#b8860b" />
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="14" fill="url(#g)" />
            <rect x="13" y="18" width="7" height="30" rx="2" fill="white" />
            <rect x="44" y="18" width="7" height="30" rx="2" fill="white" />
            <rect x="13" y="18" width="38" height="7" rx="2" fill="white" />
            <rect x="13" y="39" width="38" height="5" rx="1.5" fill="white" opacity="0.55" />
            <circle cx="16.5" cy="21.5" r="3.5" fill="#b8860b" />
            <circle cx="47.5" cy="21.5" r="3.5" fill="#b8860b" />
            <circle cx="16.5" cy="41.5" r="2.5" fill="#946b09" opacity="0.8" />
            <circle cx="47.5" cy="41.5" r="2.5" fill="#946b09" opacity="0.8" />
            <circle cx="32" cy="21.5" r="3" fill="#d4a853" />
          </svg>
          <span style={{ color: "#f4f4f5", fontSize: 32, fontWeight: 700, letterSpacing: "-0.5px" }}>
            Bridge PCB
          </span>
          <span
            style={{
              marginLeft: 8,
              background: "rgba(212,168,83,0.15)",
              border: "1px solid rgba(212,168,83,0.35)",
              borderRadius: 999,
              color: "#d4a853",
              fontSize: 14,
              fontWeight: 500,
              padding: "4px 14px",
            }}
          >
            US-based
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#f4f4f5",
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: 28,
          }}
        >
          PCB &amp; PCBA{" "}
          <span style={{ color: "#d4a853" }}>Manufacturing</span>
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 26,
            color: "#a1a1aa",
            lineHeight: 1.4,
            maxWidth: 800,
            marginBottom: 52,
          }}
        >
          US-based sourcing agent backed by leading manufacturers in China.
          Technical support, QA, and logistics — 2L to 46L, HDI, Flex, Rigid-Flex &amp; PCBA.
        </div>

        {/* Pill tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["HDI", "Flex & Rigid-Flex", "Backplane", "PCBA Turnkey", "DFM Review"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "#18181b",
                border: "1px solid #3f3f46",
                borderRadius: 999,
                color: "#a1a1aa",
                fontSize: 18,
                padding: "8px 20px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 100,
            color: "#52525b",
            fontSize: 18,
            fontFamily: "monospace",
          }}
        >
          bridgepcb.com
        </div>
      </div>
    ),
    { ...size }
  );
}
