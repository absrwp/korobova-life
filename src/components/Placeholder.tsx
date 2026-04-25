import type { CSSProperties } from "react";
import { PAL_B } from "../lib/palette";

type Tone = "green" | "terra" | "warm" | "cream" | "pastel" | "ink";

type Props = {
  label?: string;
  ratio?: string;
  tone?: Tone;
  style?: CSSProperties;
};

const TONE_BG: Record<Tone, string> = {
  green:  "linear-gradient(135deg, #3d6052 0%, #2a4538 100%)",
  terra:  "linear-gradient(135deg, #c4856a 0%, #a86d55 100%)",
  warm:   "linear-gradient(135deg, #d4a87f 0%, #b08660 100%)",
  cream:  "linear-gradient(135deg, #f0e8dc 0%, #d8cdb9 100%)",
  pastel: "linear-gradient(135deg, #b8c8b8 0%, #8aa090 100%)",
  ink:    "linear-gradient(135deg, #3a3428 0%, #1a1612 100%)",
};

export function Placeholder({ label, ratio = "3/4", tone = "green", style }: Props) {
  const dark = tone === "ink" || tone === "green";
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: ratio,
        background: TONE_BG[tone],
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        padding: 16,
        color: dark ? PAL_B.ink : PAL_B.inkDark,
        font: `400 11px/1.4 ui-monospace, Menlo, monospace`,
        letterSpacing: ".15em",
        textTransform: "uppercase",
        opacity: .9,
        ...style,
      }}
    >
      {label}
    </div>
  );
}
