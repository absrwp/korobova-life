import { PAL_B } from "../lib/palette";
import { Icon } from "../lib/icons";
import { Section } from "./Section";
import { CONTENT } from "../data/content";

type Props = { mobile: boolean };

export function About({ mobile }: Props) {
  return (
    <Section
      id="about"
      idx="III / IX"
      eyebrow="Обо мне"
      variant="light"
      mobile={mobile}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1.4fr",
        gap: mobile ? 32 : 80,
        alignItems: "start",
      }}>
        <div>
          <img
            src="/assets/portrait-about.png"
            alt="Елена Коробова — портрет"
            loading="lazy"
            style={{
              width: "100%",
              aspectRatio: "4/5",
              objectFit: "cover",
              objectPosition: "50% 25%",
              display: "block",
              filter: "sepia(.12) saturate(.95) contrast(1.03)",
            }}
          />
          <div style={{
            marginTop: 20,
            font: `400 13px/1.55 ${PAL_B.sans}`,
            color: PAL_B.muteDark,
          }}>
            Член Гильдии психологов и&nbsp;психотерапевтов, МГИ, EAGT.
            Супервизируюсь регулярно — для меня это часть профессиональной гигиены.
          </div>
        </div>

        <div>
          <h2 style={{
            font: `400 clamp(30px, 4.2vw, 54px)/1.08 ${PAL_B.serif}`,
            letterSpacing: "-.022em",
            margin: "0 0 32px",
            color: PAL_B.inkDark,
            textWrap: "balance" as any,
          }}>
            <span style={{ color: PAL_B.accent, fontStyle: "italic" }}>Добро пожаловать</span>{" "}
            в&nbsp;пространство, где есть место вашему опыту, вашей истории.
          </h2>

          <p style={{
            font: `400 ${mobile ? 17 : 19}px/1.6 ${PAL_B.sans}`,
            color: "#3a3428", margin: "0 0 28px",
            fontStyle: "italic",
            paddingLeft: 16,
            borderLeft: `2px solid ${PAL_B.accent}`,
          }}>
            Здесь можно быть услышанным и&nbsp;шаг за&nbsp;шагом становиться автором своей жизни.
          </p>

          {CONTENT.aboutShort.map((p, i) => (
            <p key={i} style={{
              font: `400 17px/1.65 ${PAL_B.sans}`,
              color: "#3a3428", margin: "0 0 20px",
            }}>{p}</p>
          ))}

          <a href="https://t.me/korobova_e" target="_blank" rel="noopener" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginTop: 20,
            font: `500 14px/1 ${PAL_B.sans}`,
            color: PAL_B.accent2, textDecoration: "none",
            borderBottom: `1px solid ${PAL_B.accent2}`,
            paddingBottom: 4,
          }}>
            Написать в&nbsp;Telegram <Icon.arrow />
          </a>
        </div>
      </div>
    </Section>
  );
}
