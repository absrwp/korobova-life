# korobova / психолог

Лендинг для Елены Коробовой — психолога, гештальт-терапевта в Екатеринбурге.

## Стек

- **Vite 5** + **React 18** + **TypeScript**
- Шрифты: Fraunces (serif) + Manrope (sans), подключены через Google Fonts
- Inline-стили (CSS-in-JS, без CSS-фреймворков) — палитра в `src/lib/palette.ts`
- Yandex.Metrika snippet (нужно подставить реальный ID в `index.html`)

## Структура

```
src/
  App.tsx                  — корневой компонент, useIsMobile + рендер всех секций
  main.tsx                 — точка входа React
  components/              — компоненты разделов
    Nav.tsx                  навигация + гамбургер для mobile
    Hero.tsx                 первый экран (заголовок «Вы устали справляться в одиночку?»)
    Topics.tsx               9 запросов + раскрывающиеся «Ещё 3 запроса»
    Lead.tsx                 лид-магнит (PDF: «7 признаков, что собственные опоры заканчиваются»)
    Formats.tsx              4 формата работы (одинаковые карточки)
    About.tsx                «Добро пожаловать в пространство…»
    Reviews.tsx              отзывы клиентов (заглушки)
    Steps.tsx                «Как начать работу» — 3 шага
    Timeline.tsx             образование (2009–сегодня)
    Office.tsx               кабинет (3 фото + адрес + карта-стилизация)
    Faq.tsx                  «До первой встречи» — 8 вопросов
    Articles.tsx             статьи (4 заглушки — open question 0.10)
    Final.tsx                multi-step форма + контакты
    Footer.tsx               4 колонки + копирайт
    Section.tsx              общий враппер секций (eyebrow + idx «I/IX»)
    Btn.tsx                  кнопка-ссылка (primary/ghost/dark/terra)
    Icon.tsx                 inline-SVG-иконки (tg, wa, mail, pin, arrow)
    Placeholder.tsx          плейсхолдер для заглушек
    LegalModal.tsx           модалки приватности/кодекса/согласия (#privacy/#ethics/#consent)
    StickyMobileBar.tsx      нижняя плашка на мобильном
  data/
    content.ts             — все тексты сайта (заголовки, форматы, шаги, отзывы, FAQ)
    legal.ts               — текст приватности/кодекса/согласия
  lib/
    palette.ts             — цветовая палитра PAL_B
    icons.tsx              — inline-SVG-иконки
    useIsMobile.ts         — хук адаптивности через window.matchMedia
  styles/
    global.css             — глобальный сброс, focus-visible, prefers-reduced-motion
public/
  assets/
    portrait-hero.png      — портрет Елены (Hero)
    portrait-about.png     — портрет Елены (About)
    office-sofa.png        — кабинет: диван у окна
    office-group.png       — кабинет: групповой формат
    office-detail.png      — кабинет: деталь со свечами
    pdf-cover.jpg          — фон обложки лид-магнита (Unsplash, CC0)
```

## Локальная разработка

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # выходит в dist/
npm run preview  # локальный preview сборки
```

## Что нужно от клиента (open questions из PRD)

1. **Цены** на 4 формата (`src/data/content.ts → formats[i].price`)
2. **Описания** «Тематической» и «Тьюторской» групп (`content.ts → formats[2..3]`)
3. **Подтверждение текста About** — формулировки «мыслящая» / «не стыжу»
4. **Реальные отзывы клиентов** (`content.ts → reviews`)
5. **Yandex.Metrika ID** (`index.html → window.__YM_ID__`)
6. **CHAT_ID Telegram-бота** (`.env.local → VITE_TG_CHAT_ID`) — для уведомлений с форм
7. **Max-handle** (`src/data/content.ts → contacts.max`) — пока placeholder

## Ключевые решения

- **Адаптивность** — через хук `useIsMobile(760)`, единый рендер для desktop/mobile с пропом `mobile`
- **Якоря секций** — `#topics #formats #about #reviews #steps #timeline #office #faq #lead #articles #discovery #top` + `scrollMarginTop: 80` для sticky-нав
- **Доступность** — `:focus-visible`, `prefers-reduced-motion`, `min-height: 44px` на mobile, `aria-modal/expanded/controls` на drawer и legal-modals
- **Аналитика** — `window.trackGoal(name)` инжектируется в `index.html`, цели: `tg-click / wa-click / email-click / tel-click / map-click / form-step-N / form-submit / lead-magnet-submit / scroll-25/50/75/100`

## Деплой

Любой статический хостинг: Vercel / Netlify / GitHub Pages / Cloudflare Pages.

## Импорт в Lovable

1. Зайти на https://lovable.dev
2. New Project → Connect GitHub → выбрать `korobova-life`
3. Lovable склонирует, развернёт preview, дальше можно править через AI-чат

## Лицензия

Закрытая. Все права на текст, фото и айдентику принадлежат Елене Коробовой.
