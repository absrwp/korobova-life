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
      idx="VI / VIII"
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
          minHeight: mobile ? 280 : 360,
          position: "relative",
          border: `1px solid ${PAL_B.ruleDark}`,
          overflow: "hidden",
        }}>
          <iframe
            src={CONTENT.contacts.mapEmbed}
            title="Карта — улица Антона Валека, 13"
            width="100%"
            height="100%"
            style={{
              border: 0,
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
}
