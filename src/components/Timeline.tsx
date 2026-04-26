import { PAL_B } from "../lib/palette";
import { Section } from "./Section";
import { CONTENT } from "../data/content";

type Props = { mobile: boolean };

export function Timeline({ mobile }: Props) {
  return (
    <Section
      id="timeline"
      idx="V / VIII"
      eyebrow="Образование и принципы"
      title="Путь в профессии"
      variant="dark"
      mobile={mobile}
    >
      {/* Образование — список школ + квалификаций */}
      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "repeat(2, 1fr)",
        gap: mobile ? 0 : 0,
        borderTop: `1px solid ${PAL_B.rule}`,
        marginBottom: mobile ? 48 : 80,
      }}>
        {CONTENT.education.map((e, i) => (
          <div key={i} style={{
            padding: mobile ? "24px 0" : "32px 24px 32px 0",
            borderBottom: `1px solid ${PAL_B.rule}`,
            borderRight: !mobile && i % 2 === 0 ? `1px solid ${PAL_B.rule}` : "none",
            paddingLeft: !mobile && i % 2 === 1 ? 24 : 0,
          }}>
            <div style={{
              font: `400 ${mobile ? 19 : 22}px/1.3 ${PAL_B.serif}`,
              letterSpacing: "-.01em",
              color: PAL_B.ink,
              marginBottom: 10,
              textWrap: "balance" as any,
            }}>{e.school}</div>
            <div style={{
              font: `400 14px/1.55 ${PAL_B.sans}`,
              color: PAL_B.mute2,
            }}>{e.qualification}</div>
          </div>
        ))}
      </div>

      {/* Принципы работы */}
      <div>
        <div style={{
          font: "400 11px/1 ui-monospace,Menlo,monospace",
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: PAL_B.mute,
          marginBottom: mobile ? 20 : 28,
          paddingTop: mobile ? 8 : 12,
        }}>
          Принципы работы
        </div>
        <ul style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "grid",
          gap: mobile ? 16 : 14,
          maxWidth: 820,
        }}>
          {CONTENT.principles.map((p, i) => (
            <li key={i} style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: mobile ? 14 : 18,
              alignItems: "baseline",
              font: `400 ${mobile ? 16 : 17}px/1.55 ${PAL_B.sans}`,
              color: PAL_B.mute2,
              paddingBottom: mobile ? 12 : 16,
              borderBottom: i < CONTENT.principles.length - 1 ? `1px solid ${PAL_B.rule}` : "none",
            }}>
              <span style={{
                font: "400 12px/1.4 ui-monospace,Menlo,monospace",
                color: PAL_B.accent,
                letterSpacing: ".05em",
              }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ textWrap: "pretty" as any }}>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
