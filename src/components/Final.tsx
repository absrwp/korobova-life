import { useEffect, useState, type FormEvent, type CSSProperties } from "react";
import { PAL_B } from "../lib/palette";
import { Icon } from "../lib/icons";
import { Btn } from "./Btn";
import { Section } from "./Section";

type Props = { mobile: boolean };

export function Final({ mobile }: Props) {
  const [step, setStep] = useState(1);
  const [topics, setTopics] = useState<string[]>([]);
  const [format, setFormat] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [agree, setAgree] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (window.trackGoal && step > 1) window.trackGoal("form-step-" + step);
  }, [step]);

  const toggleTopic = (t: string) =>
    setTopics((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.trackGoal?.("form-submit");
    const body = encodeURIComponent(
      `С чем пришли: ${topics.join(", ") || "—"}\n` +
      `Формат: ${format || "—"}\n` +
      `Удобное время: ${time || "—"}\n` +
      `Имя: ${name}\n` +
      `Связь: ${contact}\n`
    );
    const subject = encodeURIComponent("Запись на сессию — заявка с сайта");
    window.location.href = `mailto:hello@korobova.life?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const chip = (label: string, active: boolean, onClick: () => void) => (
    <button
      type="button"
      key={label}
      onClick={onClick}
      style={{
        padding: "10px 16px",
        borderRadius: 999,
        border: `1px solid ${active ? PAL_B.accent : PAL_B.rule2}`,
        background: active ? PAL_B.accent + "22" : "transparent",
        color: active ? PAL_B.ink : PAL_B.mute2,
        font: `500 14px/1 ${PAL_B.sans}`,
        cursor: "pointer", minHeight: 44,
        transition: "border-color .2s, background .2s, color .2s",
      }}
    >{label}</button>
  );

  const inputStyle: CSSProperties = {
    width: "100%", padding: "14px 18px",
    borderRadius: 12, border: `1px solid ${PAL_B.rule2}`,
    background: "rgba(0,0,0,.18)", color: PAL_B.ink,
    font: `400 16px/1.4 ${PAL_B.sans}`, outline: "none",
    minHeight: 48,
  };

  return (
    <Section
      id="discovery"
      idx="IX / IX"
      eyebrow="Связь"
      variant="dark"
      mobile={mobile}
    >
      <div style={{
        padding: mobile ? "40px 24px" : "72px 64px",
        background: `
          radial-gradient(circle at 80% 20%, rgba(217,122,78,.22), transparent 50%),
          ${PAL_B.bgAlt}
        `,
        border: `1px solid ${PAL_B.rule2}`,
      }}>
        <h2 style={{
          font: `400 clamp(32px, 5vw, 68px)/1 ${PAL_B.serif}`,
          letterSpacing: "-.025em",
          margin: "0 0 24px",
          color: PAL_B.ink,
          textWrap: "balance" as any,
          maxWidth: 900,
        }}>
          Напишите —{" "}
          <span style={{ color: PAL_B.accent, fontStyle: "italic" }}>обсудим</span>
          , что происходит и&nbsp;чем я&nbsp;могу быть полезна.
        </h2>
        <p style={{
          font: `400 ${mobile ? 16 : 19}px/1.55 ${PAL_B.sans}`,
          color: PAL_B.mute2, margin: "0 0 36px", maxWidth: 620,
        }}>
          За&nbsp;1 минуту расскажите, что беспокоит и&nbsp;какой формат удобен. Отвечу
          в&nbsp;течение дня, обычно быстрее.
        </p>

        {sent ? (
          <div style={{
            background: "rgba(0,0,0,.18)",
            border: `1px solid ${PAL_B.rule2}`,
            padding: mobile ? "24px" : "40px",
            borderRadius: 16,
            maxWidth: 640,
          }}>
            <div style={{
              font: `400 ${mobile ? 24 : 32}px/1.2 ${PAL_B.serif}`,
              color: PAL_B.ink, marginBottom: 12,
            }}>🌿 Заявка отправлена</div>
            <p style={{
              color: PAL_B.mute2, margin: 0,
              font: `400 16px/1.55 ${PAL_B.sans}`,
            }}>
              Если письмо не открылось автоматически — напишите в Telegram{" "}
              <a href="https://t.me/korobova_e" target="_blank" rel="noopener" style={{ color: PAL_B.accent }}>
                @korobova_e
              </a>{" "}
              или на hello@korobova.life. Отвечу в течение дня.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} style={{
            background: "rgba(0,0,0,.18)",
            border: `1px solid ${PAL_B.rule2}`,
            padding: mobile ? "24px" : "36px",
            borderRadius: 16,
            maxWidth: 720,
          }}>
            <div style={{ display: "flex", gap: 6, marginBottom: 28 }} aria-hidden="true">
              {[1, 2, 3].map((s) => (
                <div key={s} style={{
                  flex: 1, height: 3, borderRadius: 2,
                  background: s <= step ? PAL_B.accent : PAL_B.rule2,
                  transition: "background .25s",
                }} />
              ))}
            </div>
            <div style={{
              font: `400 11px/1 ui-monospace,Menlo,monospace`,
              letterSpacing: ".18em", textTransform: "uppercase",
              color: PAL_B.mute, marginBottom: 20,
            }}>Шаг {step} из 3</div>

            {step === 1 && (
              <div>
                <label style={{
                  display: "block",
                  font: `500 16px/1.4 ${PAL_B.sans}`,
                  color: PAL_B.ink, marginBottom: 14,
                }}>С&nbsp;чем бы хотели разобраться?</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {[
                    "Тревога", "Отношения", "Апатия", "Самооценка",
                    "Выгорание", "Горе", "Расставание", "Страхи",
                    "Поиск себя", "Что-то другое",
                  ].map((t) => chip(t, topics.includes(t), () => toggleTopic(t)))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <label style={{
                  display: "block",
                  font: `500 16px/1.4 ${PAL_B.sans}`,
                  color: PAL_B.ink, marginBottom: 14,
                }}>Какой формат интересен?</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                  {[
                    "Индивидуально", "Терапевтическая группа",
                    "Тематическая группа", "Тьюторская группа",
                    "Не знаю пока",
                  ].map((f) => chip(f, format === f, () => setFormat(f)))}
                </div>
                <label htmlFor="time" style={{
                  display: "block",
                  font: `500 14px/1.4 ${PAL_B.sans}`,
                  color: PAL_B.mute2, marginBottom: 8,
                }}>Удобное время</label>
                <select
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  style={inputStyle}
                >
                  <option value="">Выберите…</option>
                  <option>Будни утром (9:00–12:00)</option>
                  <option>Будни днём (12:00–17:00)</option>
                  <option>Будни вечером (17:00–21:00)</option>
                  <option>Выходные</option>
                  <option>Любое</option>
                </select>
              </div>
            )}

            {step === 3 && (
              <div>
                <label htmlFor="name" style={{
                  display: "block",
                  font: `500 14px/1.4 ${PAL_B.sans}`,
                  color: PAL_B.mute2, marginBottom: 8,
                }}>Как вас зовут</label>
                <input
                  id="name" type="text" value={name}
                  onChange={(e) => setName(e.target.value)}
                  required placeholder="Имя"
                  style={{ ...inputStyle, marginBottom: 16 }}
                />
                <label htmlFor="contact" style={{
                  display: "block",
                  font: `500 14px/1.4 ${PAL_B.sans}`,
                  color: PAL_B.mute2, marginBottom: 8,
                }}>Telegram или телефон</label>
                <input
                  id="contact" type="text" value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required placeholder="@username или +7…"
                  style={{ ...inputStyle, marginBottom: 16 }}
                />
                <label style={{
                  display: "flex", alignItems: "flex-start", gap: 10,
                  font: `400 13px/1.5 ${PAL_B.sans}`,
                  color: PAL_B.mute2, cursor: "pointer",
                }}>
                  <input
                    type="checkbox" checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    required style={{ marginTop: 4 }}
                  />
                  <span>
                    Согласен на&nbsp;обработку персональных данных в&nbsp;соответствии с&nbsp;
                    <a href="#privacy" style={{ color: PAL_B.accent }}>
                      политикой конфиденциальности
                    </a>.
                  </span>
                </label>
              </div>
            )}

            <div style={{
              display: "flex", gap: 10,
              marginTop: 28, flexWrap: "wrap",
            }}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  style={{
                    padding: "14px 22px", borderRadius: 999,
                    border: `1px solid ${PAL_B.rule2}`, background: "transparent",
                    color: PAL_B.ink, font: `500 14px/1 ${PAL_B.sans}`,
                    cursor: "pointer", minHeight: 44,
                  }}
                >← Назад</button>
              )}
              {step < 3 && (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  style={{
                    flex: mobile ? 1 : "0 0 auto",
                    padding: "14px 28px", borderRadius: 999,
                    border: `1px solid ${PAL_B.sage}`,
                    background: PAL_B.sage,
                    color: PAL_B.sageInk,
                    font: `500 15px/1 ${PAL_B.sans}`,
                    cursor: "pointer", minHeight: 44,
                  }}
                >Далее →</button>
              )}
              {step === 3 && (
                <button
                  type="submit"
                  disabled={!agree || !name || !contact}
                  style={{
                    flex: mobile ? 1 : "0 0 auto",
                    padding: "14px 28px", borderRadius: 999,
                    border: `1px solid ${PAL_B.sage}`,
                    background: PAL_B.sage,
                    color: PAL_B.sageInk,
                    font: `500 15px/1 ${PAL_B.sans}`,
                    cursor: !agree || !name || !contact ? "not-allowed" : "pointer",
                    opacity: !agree || !name || !contact ? .5 : 1,
                    minHeight: 44,
                  }}
                >Отправить заявку</button>
              )}
            </div>
          </form>
        )}

        <div style={{
          marginTop: 32,
          paddingTop: 24,
          borderTop: `1px solid ${PAL_B.rule}`,
        }}>
          <div style={{
            font: `400 12px/1 ui-monospace,Menlo,monospace`,
            letterSpacing: ".18em", textTransform: "uppercase",
            color: PAL_B.mute, marginBottom: 14,
          }}>или напрямую</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Btn kind="ghost" palette={PAL_B} mobile={mobile} icon={<Icon.tg />}   href="https://t.me/korobova_e">Telegram · @korobova_e</Btn>
            <Btn kind="ghost" palette={PAL_B} mobile={mobile} icon={<Icon.wa />}   href="https://wa.me/79527442237">WhatsApp</Btn>
            <Btn kind="ghost" palette={PAL_B} mobile={mobile} icon={<Icon.mail />} href="mailto:hello@korobova.life">E-mail</Btn>
            <Btn kind="ghost" palette={PAL_B} mobile={mobile} href="tel:+79527442237">📞 +7&nbsp;952&nbsp;744‑22‑37</Btn>
          </div>
        </div>
      </div>
    </Section>
  );
}
