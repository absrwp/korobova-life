/**
 * Отправка уведомления о заявке в Telegram бот Лены.
 *
 * Архитектура (MVP): прямой fetch на api.telegram.org с фронта.
 * Токен подставляется на build-time через VITE_TG_BOT_TOKEN.
 * ⚠ Токен будет виден в bundle.js — для бота, который только пишет в один chat,
 *   это допустимо. При необходимости anti-spam — мигрировать на прокси
 *   через Cloudflare Worker (см. PRD §Δ-18).
 *
 * Поведение:
 * - Если токен или chat_id не заданы — функция тихо возвращает false (UX не ломается).
 * - При успехе — true.
 * - При сетевой ошибке — false (логируется в консоль для диагностики).
 */
export async function notifyTelegram(text: string): Promise<boolean> {
  const TOKEN = import.meta.env.VITE_TG_BOT_TOKEN as string | undefined;
  const CHAT_ID = import.meta.env.VITE_TG_CHAT_ID as string | undefined;

  if (!TOKEN || !CHAT_ID) {
    if (typeof console !== "undefined") {
      console.debug(
        "[notifyTelegram] env not configured — VITE_TG_BOT_TOKEN/VITE_TG_CHAT_ID missing.",
        { hasToken: Boolean(TOKEN), hasChat: Boolean(CHAT_ID) }
      );
    }
    return false;
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });
    if (!res.ok) {
      if (typeof console !== "undefined") {
        console.warn("[notifyTelegram] non-200:", res.status, await res.text().catch(() => ""));
      }
      return false;
    }
    return true;
  } catch (err) {
    if (typeof console !== "undefined") console.warn("[notifyTelegram] failed:", err);
    return false;
  }
}

/** Хелпер форматирования: текущая дата + время в TZ Екб. */
export function nowEkbStamp(): string {
  try {
    return new Date().toLocaleString("ru-RU", {
      timeZone: "Asia/Yekaterinburg",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return new Date().toISOString();
  }
}
