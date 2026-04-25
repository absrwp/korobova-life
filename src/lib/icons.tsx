// Inline-SVG иконки. Принимают опциональный размер `s` (по умолчанию 14px).
type IconProps = { s?: number };

export const Icon = {
  arrow: ({ s = 14 }: IconProps = {}) => (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  ),
  tg: ({ s = 14 }: IconProps = {}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4 2.5 11.5l5.7 1.7L18 7l-7.6 8 .4 5.5 3-3.4 4.5 3.4 3.7-16.5z" />
    </svg>
  ),
  wa: ({ s = 14 }: IconProps = {}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 3.5A11 11 0 0 0 3 18.2L2 22l3.9-1A11 11 0 1 0 20.5 3.5zM12 20a8 8 0 0 1-4-1.1l-.3-.2-2.4.6.6-2.3-.2-.3a8 8 0 1 1 6.3 3.3zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.9-.1.1-.2.2-.4 0-.5-.2-1.1-.5-1.7-1.1-.6-.5-1-1.2-1.1-1.4 0-.2 0-.3.1-.4l.4-.5.2-.4v-.4l-.1-.7c-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.6.6-1 1.3-1 2.5 0 .3 0 .6.1 1 .3.7 1 2.4 2.6 3.6 1.7 1.3 2.5 1.3 3.4 1 .4 0 1.1-.5 1.3-1 .2-.5.2-.9.1-1z" />
    </svg>
  ),
  mail: ({ s = 14 }: IconProps = {}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  pin: ({ s = 14 }: IconProps = {}) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
};
