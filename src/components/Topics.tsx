import { useState } from "react";
import { PAL_B } from "../lib/palette";
import { Icon } from "../lib/icons";
import { Section } from "./Section";
import { CONTENT } from "../data/content";

type Props = { mobile: boolean };
type Topic = { t: string; d: string };

export function Topics({ mobile }: Props) {
  const [expanded, setExpanded] = useState(false);

  const renderTopic = (topic: Topic, i: number) => (
    <a key={i} href="#formats" style={{
      display: "grid",
      gridTemplateColumns: mobile ? "28px 1fr auto" : "80px 1fr auto 24px",
      gap: mobile ? 12 : 32,
      alignItems: "center",
      padding: mobile ? "18px 0" : "28px 8px",
      borderTop: `1px solid ${PAL_B.rule}`,
      textDecoration: "none",
      color: PAL_B.ink,
      transition: "padding-left .2s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.paddingLeft = mobile ? "0" : "24px";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.paddingLeft = mobile ? "0" : "8px";
    }}
    >
      <div style={{
        font: `400 ${mobile ? 14 : 18}px/1 ui-monospace,Menlo,monospace`,
        color: PAL_B.mute, letterSpacing: ".05em",
      }}>{String(i + 1).padStart(2, "0")}</div>
      <div style={{
        font: `400 ${mobile ? 22 : 38}px/1.1 ${PAL_B.serif}`,
        letterSpacing: "-.02em",
        textWrap: "balance" as any,
      }}>{topic.t}</div>
      {!mobile && (
        <div style={{
          font: `400 14px/1.3 ${PAL_B.sans}`,
          color: PAL_B.mute2, textAlign: "right", maxWidth: 240,
        }}>{topic.d}</div>
      )}
      <div style={{ color: PAL_B.accent, display: "flex" }}>
        <Icon.arrow s={mobile ? 14 : 18} />
      </div>
    </a>
  );

  return (
    <Section
      id="topics"
      idx="I / IX"
      eyebrow="С чем я работаю"
      title={
        <>
          <span style={{ color: PAL_B.accent, fontStyle: "italic" }}>Запросы</span>
          , с&nbsp;которыми приходят чаще всего
        </>
      }
      kicker="Если видите здесь своё — нажмите, чтобы перейти к подходящему формату работы. Если не видите — напишите, разберёмся."
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
      </div>
    </Section>
  );
}
