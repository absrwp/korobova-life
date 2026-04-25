import type { ReactNode } from "react";
import { PAL_B } from "../lib/palette";

type Props = {
  id?: string;
  idx?: string;
  eyebrow?: string;
  title?: ReactNode;
  kicker?: string;
  children: ReactNode;
  variant?: "dark" | "light";
  mobile?: boolean;
};

export function Section({
  id,
  idx,
  eyebrow,
  title,
  kicker,
  children,
  variant = "dark",
  mobile,
}: Props) {
  const isLight = variant === "light";
  const bg = isLight ? PAL_B.bgCream : PAL_B.bg;
  const ink = isLight ? PAL_B.inkDark : PAL_B.ink;
  const mute = isLight ? PAL_B.muteDark : PAL_B.mute;
  const mute2 = isLight ? "#5a5344" : PAL_B.mute2;
  const rule = isLight ? PAL_B.ruleDark : PAL_B.rule;

  return (
    <section
      id={id}
      style={{
        background: bg,
        color: ink,
        padding: mobile ? "72px 20px" : "140px 40px",
        scrollMarginTop: 80,
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {(eyebrow || idx) && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 0",
              borderBottom: `1px solid ${rule}`,
              marginBottom: mobile ? 24 : 40,
              font: "400 11px/1 ui-monospace,Menlo,monospace",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: mute,
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span>{eyebrow}</span>
            {idx && <span style={{ letterSpacing: ".18em", color: mute }}>{idx}</span>}
          </div>
        )}
        {title && (
          <h2
            style={{
              font: `400 clamp(32px, 4.4vw, 56px)/1.05 ${PAL_B.serif}`,
              letterSpacing: "-0.02em",
              margin: "0 0 28px",
              color: ink,
              maxWidth: 900,
              textWrap: "balance" as any,
            }}
          >
            {title}
          </h2>
        )}
        {kicker && (
          <p
            style={{
              font: `400 ${mobile ? 16 : 19}px/1.55 ${PAL_B.sans}`,
              color: mute2,
              margin: "0 0 48px",
              maxWidth: 760,
            }}
          >
            {kicker}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
