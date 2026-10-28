import { ImageResponse } from "next/og";

export const alt = "Akango — Learn Twi, one small lesson at a time";
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
          justifyContent: "space-between",
          background: "#090914",
          padding: "64px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #A78BFA, #5B21B6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ fontSize: "36px", fontWeight: 700 }}>Akango</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "86px",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            Learn Twi.
          </div>
          <div
            style={{
              fontSize: "86px",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "#F5C451",
            }}
          >
            One small lesson at a time.
          </div>
          <div style={{ fontSize: "28px", color: "#A7A3C2" }}>
            6 units · 41 lessons · 132 exercises · 13 proverbs
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "20px",
            color: "#A7A3C2",
          }}
        >
          <span>Built in Ghana</span>
          <span>Learn Akan. Go further.</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
