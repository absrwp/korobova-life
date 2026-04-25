import { PAL_B } from "../lib/palette";
import { Icon } from "../lib/icons";
import { Section } from "./Section";
import { CONTENT } from "../data/content";

type Props = { mobile: boolean };

export function Formats({ mobile }: Props) {
  return (
    <Section
      id="formats"
      idx="II / IX"
      eyebrow="Форматы"
      title="Как мы можем работать"
      kicker="Цены ориентировочные — обсудим под ваш запрос и ритм. Напишите в мессенджеры — предложу подходящий вариант."
      variant="light"
      mobile={mobile}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "repeat(2, 1fr)",
        gap: 24,
      }}>
        {CONTENT.formats.map((f, i) => (
          <div key={f.id} style={{
            background: "transparent",
            border: `1px solid ${PAL_B.ruleDark}`,
            padding: mobile ? "28px 22px" : "40px 36px",
            position: "relative",
            color: PAL_B.inkDark,
            display: "flex", flexDirection: "column",
          }}>
            <div style={{
              font: `400 11px/1 ui-monospace,Menlo,monospace`,
              color: PAL_B.muteDark, letterSpacing: ".18em",
              textTransform: "uppercase", marginBottom: 14,
            }}>{String(i + 1).padStart(2, "0")}</div>

            <h3 style={{
              font: `400 ${mobile ? 26 : 32}px/1.12 ${PAL_B.serif}`,
              letterSpacing: "-.015em",
              margin: "0 0 14px",
              color: PAL_B.inkDark,
            }}>{f.title}</h3>

            <p style={{
              font: `400 15px/1.55 ${PAL_B.sans}`,
              color: "#5a5344",
              margin: "0 0 20px",
              flex: 1,
            }}>{f.desc}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
              {f.meta.map((m, j) => (
                <span key={j} style={{
                  font: `500 12px/1 ${PAL_B.sans}`,
                  padding: "6px 10px", borderRadius: 999,
                  border: `1px solid ${PAL_B.ruleDark}`, color: "#5a5344",
                }}>{m}</span>
              ))}
            </div>

            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "baseline",
              paddingTop: 18, borderTop: `1px solid ${PAL_B.ruleDark}`,
              marginBottom: 22, gap: 12, flexWrap: "wrap",
            }}>
              <div>
                <div style={{
                  font: `400 ${mobile ? 28 : 36}px/1 ${PAL_B.serif}`,
                  letterSpacing: "-.015em",
                  color: PAL_B.inkDark,
                }}>{f.price}</div>
                {f.priceNote && (
                  <div style={{
                    font: `400 12px/1.4 ${PAL_B.sans}`,
                    color: PAL_B.muteDark, marginTop: 6,
                  }}>{f.priceNote}</div>
                )}
              </div>
              <div style={{
                font: `500 12px/1 ${PAL_B.sans}`,
                color: f.scarce ? PAL_B.accent2 : PAL_B.muteDark,
                display: "flex", alignItems: "center", gap: 6,
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: f.scarce ? PAL_B.accent2 : PAL_B.sageDark,
                }} />
                {f.status}
              </div>
            </div>

            <a href="#discovery" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              font: `500 14px/1 ${PAL_B.sans}`,
              color: PAL_B.accent2, textDecoration: "none",
              borderBottom: `1px solid ${PAL_B.accent2}`,
              paddingBottom: 4,
              alignSelf: "flex-start",
            }}>Записаться <Icon.arrow /></a>
          </div>
        ))}
      </div>
    </Section>
  );
}
