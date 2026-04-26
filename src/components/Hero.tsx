import { PAL_B } from "../lib/palette";
import { Icon } from "../lib/icons";
import { Btn } from "./Btn";

type Props = { mobile: boolean };

export function Hero({ mobile }: Props) {
  return (
    <section style={{
      padding: mobile ? "48px 20px 80px" : "80px 40px 140px",
      maxWidth: 1240, margin: "0 auto", width: "100%", boxSizing: "border-box",
      position: "relative",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        gap: mobile ? 40 : 56,
        alignItems: "end",
      }}>
        <div>
          <h1 style={{
            font: `400 clamp(40px, 6.4vw, 96px)/1 ${PAL_B.serif}`,
            letterSpacing: "-0.032em",
            margin: 0,
            color: PAL_B.ink,
            textWrap: "balance" as any,
          }}>
            Вы&nbsp;устали справляться{" "}
            <span style={{ color: PAL_B.accent, fontStyle: "italic", fontWeight: 300 }}>
              в&nbsp;одиночку
            </span>
            ?
          </h1>
          <p style={{
            font: `400 ${mobile ? 17 : 21}px/1.55 ${PAL_B.sans}`,
            color: PAL_B.mute2,
            margin: "32px 0 40px",
            maxWidth: 520,
          }}>
            Пространство, где можно лучше понять себя — без оценок, спешки и&nbsp;давления. Клинический психолог, гештальт-терапевт. Очно в&nbsp;Екатеринбурге и&nbsp;онлайн.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Btn kind="primary" palette={PAL_B} mobile={mobile} icon={<Icon.tg />} href="#discovery">
              Записаться на&nbsp;сессию
            </Btn>
            {mobile && (
              <Btn kind="ghost" palette={PAL_B} mobile={mobile} href="tel:+79527442237">
                📞&nbsp;Позвонить
              </Btn>
            )}
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <img
            src="/assets/portrait-hero.png"
            alt="Елена Коробова — портрет"
            loading="eager"
            style={{
              width: "100%",
              aspectRatio: mobile ? "4/5" : "4/5",
              objectFit: "cover",
              objectPosition: "50% 30%",
              display: "block",
              filter: "sepia(.18) saturate(.92) contrast(1.04) brightness(1.02)",
            }}
          />
          <div style={{
            position: "absolute",
            bottom: mobile ? -24 : -40,
            right: mobile ? -12 : -60,
            background: PAL_B.bgCream,
            color: PAL_B.inkDark,
            padding: mobile ? "16px 20px" : "24px 28px",
            maxWidth: mobile ? 240 : 300,
            font: `400 ${mobile ? 16 : 18}px/1.35 ${PAL_B.serif}`,
            fontStyle: "italic",
            boxShadow: "0 20px 40px rgba(0,0,0,.35)",
          }}>
            «Путь к&nbsp;себе начинается с&nbsp;разговора»
          </div>
        </div>
      </div>

      {/* trust row */}
      <div style={{
        marginTop: mobile ? 80 : 120,
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
        borderTop: `1px solid ${PAL_B.rule2}`,
      }}>
        {[
          { n: "2 500+", t: "часов практики" },
          { n: "4",      t: "образования" },
          { n: "5 лет",  t: "в профессии" },
        ].map((s, i) => (
          <div key={i} style={{
            padding: mobile ? "24px 16px" : "32px 24px",
            borderRight: !mobile && i < 2 ? `1px solid ${PAL_B.rule2}` : "none",
            borderBottom: mobile && i < 2 ? `1px solid ${PAL_B.rule2}` : "none",
          }}>
            <div style={{
              font: `400 ${mobile ? 30 : 44}px/1 ${PAL_B.serif}`,
              color: PAL_B.accent,
              letterSpacing: "-.02em",
              marginBottom: 10,
            }}>{s.n}</div>
            <div style={{
              font: `400 13px/1.3 ${PAL_B.sans}`,
              color: PAL_B.mute,
            }}>{s.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
