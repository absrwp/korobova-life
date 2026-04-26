import { useState } from "react";
import { PAL_B } from "../lib/palette";
import { Section } from "./Section";
import { CONTENT } from "../data/content";

type Props = { mobile: boolean };
type Topic = { t: string; d: string; body: string };

export function Topics({ mobile }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const renderTopic = (topic: Topic, i: number) => {
    const isOpen = openIdx === i;
    return (
      <div key={i} style={{ borderTop: `1px solid ${PAL_B.rule}` }}>
        <button
          type="button"
          onClick={() => setOpenIdx(isOpen ? null : i)}
          aria-expanded={isOpen}
          style={{
            width: "100%",
            background: "transparent",
            border: 0,
            textAlign: "left",
            cursor: "pointer",
            color: PAL_B.ink,
            padding: mobile ? "16px 0" : "20px 8px",
            display: "grid",
            gridTemplateColumns: mobile ? "32px 1fr 24px" : "60px 1fr auto 32px",
            gap: mobile ? 12 : 24,
            alignItems: "center",
          }}
        >
          <span style={{
            font: `400 ${mobile ? 12 : 14}px/1 ui-monospace,Menlo,monospace`,
            color: PAL_B.mute,
            letterSpacing: ".05em",
          }}>{String(i + 1).padStart(2, "0")}</span>
          <span style={{
            font: `400 ${mobile ? 18 : 24}px/1.25 ${PAL_B.serif}`,
            letterSpacing: "-.015em",
            textWrap: "balance" as any,
          }}>{topic.t}</span>
          {!mobile && (
            <span style={{
              font: `400 13px/1.3 ${PAL_B.sans}`,
              color: PAL_B.mute2,
              textAlign: "right",
              maxWidth: 220,
              fontStyle: "italic",
            }}>{topic.d}</span>
          )}
          <span style={{
            width: 28, height: 28, borderRadius: "50%",
            border: `1px solid ${PAL_B.rule2}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: PAL_B.accent,
            font: `400 16px/1 ${PAL_B.sans}`,
            transform: isOpen ? "rotate(45deg)" : "none",
            transition: "transform .25s",
          }}>+</span>
        </button>
        {isOpen && (
          <div style={{
            padding: mobile ? "0 0 24px 44px" : "0 64px 32px 84px",
            font: `400 ${mobile ? 15 : 17}px/1.65 ${PAL_B.sans}`,
            color: PAL_B.mute2,
            maxWidth: 820,
          }}>
            {topic.body}
          </div>
        )}
      </div>
    );
  };

  return (
    <Section
      id="topics"
      idx="I / VIII"
      eyebrow="С чем я работаю"
      title={
        <>
          <span style={{ color: PAL_B.accent, fontStyle: "italic" }}>Запросы</span>
          , с&nbsp;которыми приходят чаще всего
        </>
      }
      kicker="Нажмите на запрос, чтобы прочитать подробнее. Если видите здесь своё — напишите мне."
      variant="dark"
      mobile={mobile}
    >
      <div>
        {CONTENT.topics.map((topic, i) => renderTopic(topic, i))}
        {expanded &&
          CONTENT.topicsExtra.map((topic, i) =>
            renderTopic(topic, CONTENT.topics.length + i)
          )}
        <div style={{ borderTop: `1px solid ${PAL_B.rule}` }} />
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          style={{
            marginTop: mobile ? 24 : 32,
            background: "transparent",
            border: `1px solid ${PAL_B.rule2}`,
            color: PAL_B.accent,
            cursor: "pointer",
            font: `500 ${mobile ? 14 : 15}px/1 ${PAL_B.sans}`,
            letterSpacing: ".02em",
            padding: mobile ? "14px 22px" : "16px 28px",
            borderRadius: 999,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            transition: "border-color .2s, color .2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = PAL_B.accent;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = PAL_B.rule2;
          }}
        >
          <span style={{
            fontFamily: "ui-monospace,Menlo,monospace",
            fontSize: 14,
            transform: expanded ? "rotate(45deg)" : "none",
            transition: "transform .25s",
            display: "inline-block",
          }}>+</span>
          {expanded ? "Свернуть" : `Ещё ${CONTENT.topicsExtra.length} запроса`}
        </button>

        {/* Δ-17: «Если не нашли свой запрос» + «С чем не работаю» */}
        <div style={{
          marginTop: mobile ? 56 : 80,
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
          gap: mobile ? 32 : 32,
        }}>
          <div style={{
            padding: mobile ? "24px 0 0" : "32px 32px 0 0",
            borderTop: `1px solid ${PAL_B.rule}`,
            paddingTop: mobile ? 24 : 32,
          }}>
            <div style={{
              font: "400 11px/1 ui-monospace,Menlo,monospace",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: PAL_B.accent,
              marginBottom: 14,
            }}>Не нашли свой запрос?</div>
            <p style={{
              font: `400 ${mobile ? 16 : 17}px/1.6 ${PAL_B.sans}`,
              color: PAL_B.mute2,
              margin: 0,
              maxWidth: 560,
            }}>
              {CONTENT.topicsAfter.notFound}
            </p>
          </div>
          <div style={{
            padding: mobile ? "24px 0 0" : "32px 0 0 32px",
            borderTop: `1px solid ${PAL_B.rule}`,
            borderLeft: !mobile ? `1px solid ${PAL_B.rule}` : "none",
            paddingTop: mobile ? 24 : 32,
          }}>
            <div style={{
              font: "400 11px/1 ui-monospace,Menlo,monospace",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: PAL_B.mute,
              marginBottom: 14,
            }}>⚠ С чем я не работаю</div>
            <p style={{
              font: `400 ${mobile ? 15 : 16}px/1.6 ${PAL_B.sans}`,
              color: PAL_B.mute2,
              margin: 0,
              maxWidth: 560,
            }}>
              {CONTENT.topicsAfter.notWorking}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
