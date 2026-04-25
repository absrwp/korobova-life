import { PAL_B } from "../lib/palette";
import { CONTENT } from "../data/content";

type Props = { mobile: boolean };

type Col = {
  t: string;
  l: { x: string; href: string; ext?: boolean }[];
};

export function Footer({ mobile }: Props) {
  const cols: Col[] = [
    {
      t: "Навигация",
      l: [
        { x: "Запросы",  href: "#topics"   },
        { x: "Форматы",  href: "#formats"  },
        { x: "Обо мне",  href: "#about"    },
        { x: "Статьи",   href: "#articles" },
      ],
    },
    {
      t: "Связь",
      l: [
        { x: "Telegram", href: "https://t.me/korobova_e",    ext: true },
        { x: "WhatsApp", href: "https://wa.me/79527442237",  ext: true },
        { x: "E-mail",   href: "mailto:hello@korobova.life", ext: true },
      ],
    },
    {
      t: "Документы",
      l: [
        { x: "Политика", href: "#privacy" },
        { x: "Кодекс",   href: "#ethics"  },
        { x: "Согласие", href: "#consent" },
      ],
    },
  ];

  return (
    <footer style={{
      background: PAL_B.bgDeep,
      color: PAL_B.ink,
      padding: mobile ? "40px 20px" : "56px 40px",
    }}>
      <div style={{
        maxWidth: 1240, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "2fr 1fr 1fr 1fr",
        gap: 32,
        paddingBottom: 32,
        borderBottom: `1px solid ${PAL_B.rule}`,
      }}>
        <div>
          <div style={{
            font: `500 22px/1 ${PAL_B.serif}`,
            color: PAL_B.ink,
            marginBottom: 16,
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{
              width: 10, height: 10,
              borderRadius: "50%", background: PAL_B.accent,
            }} />
            korobova
          </div>
          <div style={{
            font: `400 13px/1.55 ${PAL_B.sans}`,
            color: PAL_B.mute, maxWidth: 320,
          }}>{CONTENT.role}</div>
        </div>
        {cols.map((col, i) => (
          <div key={i}>
            <div style={{
              font: `500 11px/1 ${PAL_B.sans}`,
              textTransform: "uppercase",
              letterSpacing: ".15em",
              color: PAL_B.mute,
              marginBottom: 16,
            }}>{col.t}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {col.l.map((it, j) => (
                <a
                  key={j}
                  href={it.href}
                  {...(it.ext ? { target: "_blank", rel: "noopener" } : {})}
                  style={{
                    font: `400 13px/1 ${PAL_B.sans}`,
                    color: PAL_B.mute2,
                    textDecoration: "none",
                  }}
                >{it.x}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: 1240, margin: "0 auto",
        paddingTop: 24,
        font: `400 11px/1 ui-monospace,Menlo,monospace`,
        color: PAL_B.mute,
        letterSpacing: ".15em",
        textTransform: "uppercase",
        display: "flex", justifyContent: "space-between",
        flexWrap: "wrap", gap: 12,
      }}>
        <span>© 2026 · ИП КОРОБОВА Е.</span>
        <span>ВОЗВРАЩАЯ ОПОРУ</span>
      </div>
    </footer>
  );
}
