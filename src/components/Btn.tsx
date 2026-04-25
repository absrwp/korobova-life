import type { ReactNode, CSSProperties } from "react";
import { PAL_B } from "../lib/palette";

type Palette = typeof PAL_B;
type BtnKind = "primary" | "ghost" | "dark" | "terra";

type Props = {
  kind?: BtnKind;
  children: ReactNode;
  palette?: Palette;
  icon?: ReactNode;
  mobile?: boolean;
  href?: string;
};

export function Btn({
  kind = "primary",
  children,
  palette = PAL_B,
  icon,
  mobile,
  href = "#",
}: Props) {
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: mobile ? "12px 18px" : "16px 24px",
    font: `500 ${mobile ? 14 : 15}px/1 ${palette.sans}`,
    letterSpacing: ".01em",
    borderRadius: 999,
    textDecoration: "none",
    border: "1px solid transparent",
    cursor: "pointer",
    transition: "all .15s",
    whiteSpace: "nowrap",
  };
  const sage = palette.sage || palette.accent;
  const sageInk = palette.sageInk || palette.accentInk;

  if (kind === "primary") Object.assign(base, {
    background: sage, color: sageInk, borderColor: sage,
  });
  if (kind === "ghost") Object.assign(base, {
    background: "transparent", color: palette.ink, borderColor: palette.rule2,
  });
  if (kind === "dark") Object.assign(base, {
    background: palette.ink, color: palette.bg || palette.bgCream, borderColor: palette.ink,
  });
  if (kind === "terra") Object.assign(base, {
    background: palette.accent, color: palette.accentInk, borderColor: palette.accent,
  });

  const ext = /^https?:\/\//i.test(href);
  return (
    <a
      href={href}
      style={base}
      {...(ext ? { target: "_blank", rel: "noopener" } : {})}
    >
      {icon}
      {children}
    </a>
  );
}
