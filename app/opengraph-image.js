import { ImageResponse } from "next/og";

export const alt = "Benjamin Julian Noel — Software Engineer / Producer / SAIT Graduate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#282828", color: "#ebdbb2" }}>
                <div style={{ display: "flex", flexDirection: "column", fontSize: 28, color: "#a89984", fontStyle: "italic" }}>
                    {['/*', '"portfolio"', '@by benjulian', '*/'].map((line) => <span key={line}>{line}</span>)}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
                        Benjamin Julian Noel<span style={{ color: "#fabd2f" }}>.</span>
                    </div>
                    <div style={{ display: "flex", marginTop: 28, fontSize: 28, gap: 16 }}>
                        <span style={{ border: "2px solid #ebdbb2", padding: "2px 8px" }}>software engineer</span>
                        <span style={{ border: "2px solid #ebdbb2", padding: "2px 8px" }}>producer</span>
                        <span style={{ border: "2px solid #ebdbb2", padding: "2px 8px" }}>SAIT graduate</span>
                    </div>
                </div>
            </div>
        ),
        size
    );
}
