import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "./site";

export const ogSize = { width: 1200, height: 630 };

// Font merek (OFL, dari Fontsource): Montserrat 800 untuk judul, Plus Jakarta Sans 500 untuk teks.
const montserrat = readFile(join(process.cwd(), "src/assets/montserrat-800.woff"));
const jakarta = readFile(join(process.cwd(), "src/assets/jakarta-500.woff"));
const logo = readFile(join(process.cwd(), "public/logo/logo-layes-putih.png")).then((b) => `data:image/png;base64,${b.toString("base64")}`);

/** Gambar Open Graph navy dengan logo, judul dan baris kontak. */
export async function ogImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#0d3061", color: "#fff", padding: 72, fontFamily: "Jakarta", position: "relative" }}>
        <div style={{ position: "absolute", right: -160, top: -160, width: 560, height: 560, borderRadius: 9999, border: "90px solid rgba(20,196,191,0.12)" }} />
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse butuh <img> biasa */}
        <img src={await logo} width={309} height={64} alt="" />
        <div style={{ marginTop: "auto", fontFamily: "Montserrat", fontSize: 60, fontWeight: 800, lineHeight: 1.12, letterSpacing: -1, maxWidth: 980 }}>{title}</div>
        <div style={{ marginTop: 24, fontSize: 30, color: "#b8c6dc", maxWidth: 960 }}>{subtitle}</div>
        <div style={{ marginTop: 40, display: "flex", fontSize: 26, color: "#14c4bf" }}>
          WhatsApp {site.phone} · Jabodetabek
        </div>
      </div>
    ),
    { ...ogSize, fonts: [
        { name: "Montserrat", data: await montserrat, weight: 800, style: "normal" },
        { name: "Jakarta", data: await jakarta, weight: 500, style: "normal" },
      ] },
  );
}
