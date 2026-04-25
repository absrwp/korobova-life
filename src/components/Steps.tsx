import { PAL_B } from "../lib/palette";
import { Section } from "./Section";
import { CONTENT } from "../data/content";

type Props = { mobile: boolean };

export function Steps({ mobile }: Props) {
  return (
    <Section
      id="steps"
      idx="V / IX"
      eyebrow="Процесс"
      title="Как начать работу"
      variant="dark"
      mobile={mobile}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
        gap: 0,
      }}>
        {CONTENT.steps.map((s, i) => (
          <div key={i} style={{
            padding: mobile ? "28px 0" : "40px 32px 40px 0",
            borderTop: `2px solid ${i === 0 ? PAL_B.accent : PAL_B.rule}`,
            borderBottom: mobile ? `1px solid ${PAL_B.rule}` : "none",
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              marginBottom: 24,
            }}>
              <div style={{
                font: `400 13px/1 ui-monospace,Menlo,monospace`,
                color: i === 0 ? PAL_B.accent : PAL_B.mute,
                letterSpacing: ".1em",
              }}>{s.n}</div>
              {i === 0 && (
                <div style={{
                  font: `500 11px/1 ${PAL_B.sans}`,
                  color: PAL_B.accent, letterSpacing: ".1em",
                  textTransform: "uppercase",
                }}>старт</div>
              )}
            </div>
            <h4 style={{
              font: `400 ${mobile ? 24 : 30}px/1.1 ${PAL_B.serif}`,
              letterSpacing: "-.01em",
              margin: "0 0 16px",
              color: PAL_B.ink,
            }}>{s.t}</h4>
            <p style={{
              font: `400 15px/1.55 ${PAL_B.sans}`,
              color: PAL_B.mute2, margin: 0,
            }}>{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
