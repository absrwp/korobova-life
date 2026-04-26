import { useState, type FormEvent } from "react";
import { PAL_B } from "../lib/palette";

declare global {
  interface Window {
    trackGoal?: (name: string) => void;
  }
}

type Props = { mobile: boolean };

export function Lead({ mobile }: Props) {
  const [contact, setContact] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contact.trim()) return;
    window.trackGoal?.("lead-magnet-submit");
    // MVP-fallback: mailto. Прод: webhook → Make → Google Sheets + автоотправка PDF.
    const subject = encodeURIComponent("Лид-магнит — заявка с сайта");
    const body = encodeURIComponent(
      `Контакт для отправки PDF: ${contact}\n\nПожалуйста, пришлите гайд «7 признаков, что собственные опоры заканчиваются».`
    );
    window.location.href = `mailto:hello@korobova.life?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="lead" style={{
      background: PAL_B.accent,
      color: PAL_B.accentInk,
      padding: mobile ? "72px 20px" : "140px 40px",
      scrollMarginTop: 80,
    }}>
      <div style={{
        maxWidth: 1240, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1.3fr 1fr",
        gap: mobile ? 40 : 80,
        alignItems: "center",
      }}>
        <div>
          <div style={{
            font: `400 11px/1 ui-monospace,Menlo,monospace`,
            letterSpacing: ".2em", textTransform: "uppercase",
            color: "rgba(30,36,32,.55)", marginBottom: 24,
          }}>Лид-магнит · PDF 12 стр.</div>

          <h2 style={{
            font: `400 ${mobile ? 36 : 68}px/1 ${PAL_B.serif}`,
            letterSpacing: "-.03em",
            margin: "0 0 24px",
            color: PAL_B.accentInk,
            textWrap: "balance" as any,
          }}>
            7&nbsp;признаков, что{" "}
            <span style={{ fontStyle: "italic" }}>собственные опоры</span> заканчиваются.
          </h2>

          <p style={{
            font: `400 ${mobile ? 16 : 19}px/1.55 ${PAL_B.sans}`,
            color: "rgba(30,36,32,.8)",
            margin: "0 0 36px", maxWidth: 560,
          }}>
            Не&nbsp;про «ты не&nbsp;справляешься» — про моменты, когда внутренние инструменты перестают работать.
            7&nbsp;маркеров с&nbsp;комментариями + 3&nbsp;вопроса для самопроверки.
          </p>

          {sent ? (
            <div style={{
              background: PAL_B.accentInk, color: PAL_B.accent,
              padding: mobile ? "20px 22px" : "24px 28px",
              borderRadius: 16, maxWidth: 520,
            }}>
              <div style={{
                font: `400 22px/1.2 ${PAL_B.serif}`,
                color: PAL_B.bgCream, marginBottom: 8,
              }}>🌿 PDF на пути</div>
              <p style={{
                margin: 0, font: `400 14px/1.5 ${PAL_B.sans}`,
                color: "rgba(245,240,232,.85)",
              }}>
                Если письмо не открылось — напишите в Telegram{" "}
                <a href="https://t.me/elenkorobova" target="_blank" rel="noopener" style={{ color: PAL_B.accent }}>
                  @elenkorobova
                </a>
                , пришлю гайд лично.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} style={{
              display: "flex", gap: 8, flexWrap: "wrap",
              background: PAL_B.accentInk,
              padding: 8, borderRadius: 999,
              maxWidth: 520,
            }}>
              <label htmlFor="lead-contact" style={{
                position: "absolute", width: 1, height: 1, padding: 0,
                margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)", border: 0,
              }}>E-mail или Telegram для получения PDF</label>
              <input
                id="lead-contact"
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="E-mail или @telegram"
                style={{
                  flex: "1 1 200px",
                  background: "transparent", border: 0,
                  color: PAL_B.ink, padding: "10px 16px",
                  font: `400 15px/1 ${PAL_B.sans}`,
                  outline: "none", minHeight: 44,
                }}
              />
              <button type="submit" style={{
                background: PAL_B.accent, color: PAL_B.accentInk,
                border: 0, padding: "12px 22px",
                font: `500 14px/1 ${PAL_B.sans}`,
                borderRadius: 999, cursor: "pointer",
                minHeight: 44,
              }}>Получить →</button>
            </form>
          )}
        </div>

        <div style={{
          position: "relative",
          transform: mobile ? "none" : "rotate(-3deg)",
        }}>
          <div style={{
            position: "relative",
            aspectRatio: "3/4",
            background: PAL_B.ink,
            boxShadow: "0 30px 80px rgba(0,0,0,.35)",
            overflow: "hidden",
          }}>
            <img
              src="/assets/pdf-cover.jpg"
              alt=""
              role="presentation"
              loading="lazy"
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
                opacity: .55,
                filter: "sepia(.4) saturate(.7) contrast(1.05)",
              }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: `linear-gradient(180deg, rgba(30,36,32,.15) 0%, rgba(30,36,32,.65) 100%)`,
            }} />
            <div style={{
              position: "absolute", inset: 0,
              padding: mobile ? "24px" : "36px 32px",
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              color: PAL_B.bgCream,
            }}>
              <div style={{
                font: `400 10px/1.4 ui-monospace,Menlo,monospace`,
                letterSpacing: ".22em", textTransform: "uppercase",
                opacity: .8,
              }}>
                Гайд · 12 страниц<br />
                korobova&nbsp;/&nbsp;психолог
              </div>
              <div>
                <div style={{
                  font: `400 ${mobile ? 24 : 32}px/1.05 ${PAL_B.serif}`,
                  letterSpacing: "-.02em",
                  marginBottom: 8,
                }}>7&nbsp;признаков</div>
                <div style={{
                  font: `400 italic ${mobile ? 18 : 22}px/1.2 ${PAL_B.serif}`,
                  fontStyle: "italic",
                  color: PAL_B.accent,
                  letterSpacing: "-.01em",
                }}>что собственные опоры заканчиваются</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
