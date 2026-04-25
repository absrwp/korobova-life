import { useEffect, useState } from "react";
import { PAL_B } from "../lib/palette";
import { Icon } from "../lib/icons";
import { Btn } from "./Btn";

type Props = { mobile: boolean };

const links = [
  { label: "Запросы",      href: "#topics"    },
  { label: "Форматы",      href: "#formats"   },
  { label: "Обо мне",      href: "#about"     },
  { label: "Отзывы",       href: "#reviews"   },
  { label: "Как работаем", href: "#steps"     },
  { label: "FAQ",          href: "#faq"       },
  { label: "Связь",        href: "#discovery" },
];

export function Nav({ mobile }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(47,74,58,.92)",
      backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
      borderBottom: `1px solid ${PAL_B.rule}`,
      width: "100%",
    }}>
      <div style={{
        padding: mobile ? "14px 20px" : "20px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 16,
        maxWidth: 1240, margin: "0 auto", width: "100%", boxSizing: "border-box",
      }}>
        <a href="#top" style={{
          font: `500 ${mobile ? 18 : 20}px/1 ${PAL_B.serif}`,
          letterSpacing: "-.02em", color: PAL_B.ink, textDecoration: "none",
          display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap",
        }}>
          <span style={{
            width: 10, height: 10, borderRadius: "50%",
            background: PAL_B.accent, display: "inline-block",
          }} />
          korobova {!mobile && <span style={{ color: PAL_B.mute, fontWeight: 300 }}>/ психолог</span>}
        </a>

        {!mobile && (
          <nav style={{ display: "flex", gap: 28 }}>
            {links.slice(0, 6).map((l) => (
              <a key={l.href} href={l.href} style={{
                font: `400 13px/1 ${PAL_B.sans}`,
                color: PAL_B.mute2, textDecoration: "none",
                letterSpacing: ".02em",
              }}>{l.label}</a>
            ))}
          </nav>
        )}

        {!mobile && (
          <Btn kind="primary" palette={PAL_B} mobile={mobile} icon={<Icon.tg />} href="https://t.me/korobova_e">Telegram</Btn>
        )}

        {mobile && (
          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
            style={{
              width: 44, height: 44,
              background: "transparent", border: `1px solid ${PAL_B.rule2}`,
              borderRadius: 999,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 4, cursor: "pointer", color: PAL_B.ink,
            }}
          >
            <span style={{
              display: "block", width: 18, height: 1.5, background: "currentColor",
              transform: open ? "translateY(3px) rotate(45deg)" : "none",
              transition: "transform .2s",
            }} />
            <span style={{
              display: "block", width: 18, height: 1.5, background: "currentColor",
              transform: open ? "translateY(-3px) rotate(-45deg)" : "none",
              transition: "transform .2s",
            }} />
          </button>
        )}
      </div>

      {mobile && open && (
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed", inset: 0,
            background: PAL_B.bgDeep,
            zIndex: 60,
            display: "flex", flexDirection: "column",
            paddingTop: "calc(64px + env(safe-area-inset-top))",
          }}
        >
          <button
            type="button"
            aria-label="Закрыть меню"
            onClick={() => setOpen(false)}
            style={{
              position: "absolute", top: 14, right: 20,
              width: 44, height: 44, borderRadius: 999,
              background: "transparent", color: PAL_B.ink,
              border: `1px solid ${PAL_B.rule2}`,
              cursor: "pointer",
              font: `400 22px/1 ${PAL_B.serif}`,
            }}
          >×</button>
          <nav style={{
            flex: 1, display: "flex", flexDirection: "column",
            padding: "24px 24px 32px", gap: 4, overflowY: "auto",
          }}>
            {links.map((l) => (
              <a key={l.href} href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  font: `400 28px/1.2 ${PAL_B.serif}`,
                  color: PAL_B.ink, textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: `1px solid ${PAL_B.rule}`,
                  letterSpacing: "-.01em",
                }}>{l.label}</a>
            ))}
          </nav>
          <div style={{
            padding: "20px 24px calc(20px + env(safe-area-inset-bottom))",
            borderTop: `1px solid ${PAL_B.rule}`,
            display: "flex", gap: 10,
          }}>
            <a href="https://t.me/korobova_e" target="_blank" rel="noopener"
              onClick={() => setOpen(false)}
              style={{
                flex: 1, textDecoration: "none",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                padding: "14px", borderRadius: 999,
                background: PAL_B.sage,
                color: PAL_B.sageInk,
                font: `500 14px/1 ${PAL_B.sans}`, minHeight: 44,
              }}>✉ Telegram</a>
            <a href="tel:+79527442237"
              onClick={() => setOpen(false)}
              style={{
                flex: 1, textDecoration: "none",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                padding: "14px", borderRadius: 999,
                background: "transparent", color: PAL_B.ink,
                border: `1px solid ${PAL_B.rule2}`,
                font: `500 14px/1 ${PAL_B.sans}`, minHeight: 44,
              }}>📞 Звонок</a>
          </div>
        </div>
      )}
    </header>
  );
}
