import { useState } from "react";
import { PAL_B } from "../lib/palette";
import { Section } from "./Section";
import { CONTENT } from "../data/content";

type Props = { mobile: boolean };

export function Faq({ mobile }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      idx="VIII / IX"
      eyebrow="FAQ"
      title="До первой встречи"
      variant="dark"
      mobile={mobile}
    >
      <div>
        {CONTENT.faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              style={{
                borderTop: `1px solid ${PAL_B.rule}`,
                borderBottom: i === CONTENT.faq.length - 1 ? `1px solid ${PAL_B.rule}` : "none",
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: 0,
                  textAlign: "left",
                  padding: mobile ? "20px 0" : "28px 0",
                  display: "grid",
                  gridTemplateColumns: mobile ? "auto 1fr auto" : "60px 1fr 40px",
                  gap: mobile ? 16 : 32,
                  alignItems: "center",
                  cursor: "pointer",
                  color: PAL_B.ink,
                }}
              >
                <span style={{
                  font: `400 ${mobile ? 13 : 14}px/1 ui-monospace,Menlo,monospace`,
                  color: PAL_B.mute, letterSpacing: ".1em",
                }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{
                  font: `400 ${mobile ? 18 : 22}px/1.3 ${PAL_B.serif}`,
                  letterSpacing: "-.01em",
                  color: PAL_B.ink,
                  textWrap: "balance" as any,
                }}>{item.q}</span>
                <span style={{
                  width: 28, height: 28, borderRadius: "50%",
                  border: `1px solid ${PAL_B.rule2}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  font: `400 16px/1 ${PAL_B.sans}`,
                  color: PAL_B.accent,
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform .25s",
                }}>+</span>
              </button>
              {isOpen && (
                <div style={{
                  padding: `0 0 ${mobile ? 28 : 40}px ${mobile ? 36 : 92}px`,
                  font: `400 ${mobile ? 15 : 18}px/1.6 ${PAL_B.sans}`,
                  color: PAL_B.mute2,
                  maxWidth: 820,
                }}>{item.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
