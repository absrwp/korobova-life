import { useState, type CSSProperties } from "react";
import { PAL_B } from "../lib/palette";
import { Section } from "./Section";
import { CONTENT } from "../data/content";

type Props = { mobile: boolean };

const TONE_BG: Record<string, string> = {
  terra: PAL_B.accent,
  green: PAL_B.sageDark,
  warm:  "#b8927a",
};
const TONE_FG: Record<string, string> = {
  terra: PAL_B.accentInk,
  green: PAL_B.bgCream,
  warm:  PAL_B.accentInk,
};

/** Минимальный markdown-парсер: **жирный** → <strong>, остальное — текст. */
function renderParagraph(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={i}>{p.slice(2, -2)}</strong>;
    }
    return <span key={i}>{p}</span>;
  });
}

export function Articles({ mobile }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <Section
      id="articles"
      idx="·"
      eyebrow="Статьи"
      title="Читать между сессиями"
      kicker="Авторские заметки на темы, которые чаще всего встречаются в работе. Нажмите на статью, чтобы прочитать полностью."
      variant="dark"
      mobile={mobile}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "repeat(2, 1fr)",
        gap: mobile ? 16 : 20,
      }}>
        {CONTENT.articles.map((a, i) => {
          const isOpen = openIdx === i;
          const tone = a.tone || "green";
          const labelStyle: CSSProperties = {
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            font: "500 11px/1 ui-monospace,Menlo,monospace",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            background: TONE_BG[tone],
            color: TONE_FG[tone],
            padding: "8px 12px",
            borderRadius: 4,
          };

          return (
            <article key={i} style={{
              border: `1px solid ${PAL_B.rule}`,
              padding: mobile ? "20px 18px" : "28px 28px",
              background: "transparent",
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 12,
                marginBottom: 16, flexWrap: "wrap",
              }}>
                <span style={labelStyle}>{a.tag}</span>
                <span style={{
                  font: "400 11px/1 ui-monospace,Menlo,monospace",
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                  color: PAL_B.mute,
                }}>{a.r}</span>
              </div>

              <h3 style={{
                font: `400 ${mobile ? 20 : 24}px/1.25 ${PAL_B.serif}`,
                letterSpacing: "-.012em",
                margin: "0 0 16px",
                color: PAL_B.ink,
                textWrap: "balance" as any,
              }}>{a.t}</h3>

              {!isOpen && (
                <p style={{
                  font: `400 14px/1.55 ${PAL_B.sans}`,
                  color: PAL_B.mute2,
                  margin: "0 0 18px",
                }}>
                  {/* первая строка как teaser */}
                  {a.body[0].length > 180 ? a.body[0].slice(0, 175) + "…" : a.body[0]}
                </p>
              )}

              {isOpen && (
                <div style={{
                  font: `400 ${mobile ? 15 : 16}px/1.7 ${PAL_B.sans}`,
                  color: PAL_B.mute2,
                  marginBottom: 18,
                }}>
                  {a.body.map((p, j) => (
                    <p key={j} style={{
                      margin: j === 0 ? 0 : "14px 0 0",
                      fontStyle: p.startsWith("*") && p.endsWith("*") && !p.startsWith("**") ? "italic" : "normal",
                    }}>
                      {p.startsWith("*") && p.endsWith("*") && !p.startsWith("**")
                        ? p.slice(1, -1)
                        : renderParagraph(p)}
                    </p>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{
                  background: "transparent",
                  border: `1px solid ${PAL_B.rule2}`,
                  color: PAL_B.accent,
                  cursor: "pointer",
                  font: `500 13px/1 ${PAL_B.sans}`,
                  padding: "10px 18px",
                  borderRadius: 999,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{
                  fontFamily: "ui-monospace,Menlo,monospace",
                  fontSize: 12,
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform .25s",
                  display: "inline-block",
                }}>+</span>
                {isOpen ? "Свернуть" : "Читать"}
              </button>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
