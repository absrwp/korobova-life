import { PAL_B } from "../lib/palette";
import { Section } from "./Section";
import { CONTENT } from "../data/content";

type Props = { mobile: boolean };

export function Timeline({ mobile }: Props) {
  return (
    <Section
      id="timeline"
      idx="VI / IX"
      eyebrow="Образование"
      title="Путь в профессии"
      variant="dark"
      mobile={mobile}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
        gap: mobile ? 0 : 24,
        borderTop: `1px solid ${PAL_B.rule}`,
      }}>
        {CONTENT.timeline.map((t, i) => (
          <div key={i} style={{
            padding: mobile ? "24px 0" : "32px 0",
            borderBottom: mobile ? `1px solid ${PAL_B.rule}` : "none",
            borderRight: !mobile && (i + 1) % 3 !== 0 ? `1px solid ${PAL_B.rule}` : "none",
            paddingRight: !mobile ? 24 : 0,
          }}>
            <div style={{
              font: `400 ${mobile ? 32 : 44}px/1 ${PAL_B.serif}`,
              color: PAL_B.accent, fontStyle: "italic",
              letterSpacing: "-.02em",
              marginBottom: 8,
            }}>{t.y}</div>
            <div style={{
              font: `400 ${mobile ? 16 : 18}px/1.35 ${PAL_B.sans}`,
              color: PAL_B.mute2,
            }}>{t.t}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
