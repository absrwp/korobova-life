import { PAL_B } from "../lib/palette";
import { Section } from "./Section";
import { CONTENT } from "../data/content";

type Props = { mobile: boolean };

export function Reviews({ mobile }: Props) {
  return (
    <Section
      id="reviews"
      idx="IV / IX"
      eyebrow="Отзывы"
      title="Что говорят клиенты"
      kicker="Реальный опыт работы. Имена изменены, цитаты публикуются с согласия."
      variant="light"
      mobile={mobile}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
        gap: 24,
      }}>
        {CONTENT.reviews.map((r, i) => (
          <div key={i} style={{
            background: "transparent",
            border: `1px solid ${PAL_B.ruleDark}`,
            padding: mobile ? "24px 22px" : "32px 28px",
            display: "flex", flexDirection: "column",
            color: PAL_B.inkDark,
          }}>
            <div style={{
              font: `400 11px/1 ui-monospace,Menlo,monospace`,
              color: PAL_B.muteDark, letterSpacing: ".18em",
              textTransform: "uppercase", marginBottom: 16,
            }}>{r.tag}</div>
            <p style={{
              font: `400 ${mobile ? 16 : 17}px/1.5 ${PAL_B.serif}`,
              fontStyle: "italic",
              color: PAL_B.inkDark,
              margin: "0 0 24px",
              flex: 1,
            }}>«{r.text}»</p>
            <div style={{
              paddingTop: 16,
              borderTop: `1px solid ${PAL_B.ruleDark}`,
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: PAL_B.accent + "33",
                color: PAL_B.accent2,
                display: "flex", alignItems: "center", justifyContent: "center",
                font: `500 14px/1 ${PAL_B.serif}`,
                flexShrink: 0,
              }}>{r.name.charAt(0)}</div>
              <div>
                <div style={{
                  font: `500 13px/1.3 ${PAL_B.sans}`,
                  color: PAL_B.inkDark,
                }}>{r.name}</div>
                <div style={{
                  font: `400 11px/1.4 ${PAL_B.sans}`,
                  color: PAL_B.muteDark, marginTop: 2,
                }}>{r.meta}</div>
              </div>
            </div>
            <div style={{
              marginTop: 14,
              padding: "8px 12px",
              background: PAL_B.accent + "1a",
              color: PAL_B.accent2,
              font: `500 12px/1.4 ${PAL_B.sans}`,
              borderRadius: 4,
            }}>→ {r.result}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
