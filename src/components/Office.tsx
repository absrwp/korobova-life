import { PAL_B } from "../lib/palette";
import { Icon } from "../lib/icons";
import { Btn } from "./Btn";
import { Section } from "./Section";
import { CONTENT } from "../data/content";

type Props = { mobile: boolean };

const photos = [
  { src: "/assets/office-sofa.png",   alt: "Кабинет · диван у окна" },
  { src: "/assets/office-group.png",  alt: "Кабинет · место для групп" },
  { src: "/assets/office-detail.png", alt: "Деталь · свечи и подушки" },
];

export function Office({ mobile }: Props) {
  return (
    <Section
      id="office"
      idx="VII / IX"
      eyebrow="Кабинет"
      title="Место встречи"
      variant="light"
      mobile={mobile}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
        gap: mobile ? 8 : 12,
        marginBottom: mobile ? 32 : 56,
      }}>
        {photos.map((p, i) => (
          <img
            key={i}
            src={p.src}
            alt={p.alt}
            loading="lazy"
            style={{
              width: "100%",
              aspectRatio: "3/4",
              objectFit: "cover",
              display: "block",
              filter: "sepia(.1) saturate(.92)",
            }}
          />
        ))}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1.6fr",
        gap: mobile ? 24 : 56,
        alignItems: "stretch",
      }}>
        <div style={{
          background: PAL_B.bg, color: PAL_B.ink,
          padding: mobile ? "24px" : "40px",
        }}>
          <div style={{
            font: `400 11px/1 ui-monospace,Menlo,monospace`,
            letterSpacing: ".2em", color: PAL_B.mute,
            textTransform: "uppercase", marginBottom: 20,
          }}>Адрес</div>
          <div style={{
            font: `400 ${mobile ? 22 : 28}px/1.25 ${PAL_B.serif}`,
            color: PAL_B.ink, marginBottom: 20,
            textWrap: "balance" as any,
          }}>{CONTENT.office.address}</div>
          <div style={{
            font: `400 14px/1.55 ${PAL_B.sans}`,
            color: PAL_B.mute2, marginBottom: 28,
            paddingTop: 20, borderTop: `1px solid ${PAL_B.rule}`,
          }}>{CONTENT.office.hours}</div>
          <Btn
            kind="primary"
            palette={PAL_B}
            mobile={mobile}
            icon={<Icon.pin />}
            href={CONTENT.contacts.map}
          >Построить маршрут</Btn>
        </div>

        <div style={{
          aspectRatio: mobile ? "4/3" : "auto",
          minHeight: mobile ? "auto" : 360,
          background: `
            linear-gradient(rgba(236,228,210,.3), rgba(236,228,210,.3)),
            repeating-linear-gradient(0deg,  rgba(30,36,32,.09) 0 1px, transparent 1px 48px),
            repeating-linear-gradient(90deg, rgba(30,36,32,.09) 0 1px, transparent 1px 48px),
            ${PAL_B.bgCream}
          `,
          position: "relative",
          border: `1px solid ${PAL_B.ruleDark}`,
        }}>
          <div style={{
            position: "absolute", top: "30%", left: 0, right: 0, height: 2,
            background: "rgba(30,36,32,.15)",
          }} />
          <div style={{
            position: "absolute", left: "55%", top: 0, bottom: 0, width: 2,
            background: "rgba(30,36,32,.15)",
          }} />
          <div style={{
            position: "absolute",
            top: "28%", left: "52%",
            width: 32, height: 32,
            borderRadius: "50% 50% 50% 0",
            background: PAL_B.accent,
            transform: "rotate(-45deg)",
            boxShadow: "0 6px 20px rgba(217,122,78,.5)",
          }} />
          <div style={{
            position: "absolute", bottom: 16, left: 16,
            background: PAL_B.bg, color: PAL_B.ink,
            padding: "10px 14px",
            font: `500 12px/1 ${PAL_B.sans}`,
            letterSpacing: ".04em",
          }}>ул. Малышева, 51 · 705</div>
        </div>
      </div>
    </Section>
  );
}
