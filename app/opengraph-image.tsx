import { ImageResponse } from "next/og";
import { site } from "@/lib/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          backgroundColor: "#0d2137",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            color: "#c9a84c",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 8,
            width: 90,
            height: 4,
            backgroundColor: "#c9a84c",
          }}
        />
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 980,
            color: "#ffffff",
          }}
        >
          {site.baseline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 26,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Diagnostic · Structuration · Transformation · Pilotage
        </div>
      </div>
    ),
    { ...size }
  );
}
