import { PAL_B } from "../lib/palette";
import { Section } from "./Section";
import { Placeholder } from "./Placeholder";
import { CONTENT } from "../data/content";

type Props = { mobile: boolean };

export function Articles({ mobile }: Props) {
  return (
    <Section
      id="articles"
      idx="·"
      eyebrow="Статьи"
      title="Читать между сессиями"
      variant="dark"
      mobile={mobile}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "repeat(4, 1fr)",
        gap: mobile ? 24 : 20,
      }}>
        {CONTENT.articles.map((a, i) => (
          <a
            key={i}
            href={`#articles-${i + 1}`}
            style={{
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              color: PAL_B.ink,
              borderTop: `1px solid ${PAL_B.rule2}`,
              paddingTop: 20,
            }}
          >
            <Placeholder
              label={a.tag}
              ratio="4/3"
              tone={i % 2 ? "warm" : "green"}
            />
            <div style={{
              marginTop: 16,
              font: `400 11px/1 ui-monospace,Menlo,monospace`,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: PAL_B.mute,
            }}>{a.tag} · {a.r}</div>
            <h4 style={{
              margin: "12px 0 0",
              font: `400 ${mobile ? 19 : 22}px/1.25 ${PAL_B.serif}`,
              letterSpacing: "-.01em",
              color: PAL_B.ink,
              textWrap: "balance" as any,
            }}>{a.t}</h4>
          </a>
        ))}
      </div>
    </Section>
  );
}
