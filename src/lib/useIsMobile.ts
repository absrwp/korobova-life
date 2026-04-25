import { useEffect, useState } from "react";

/** Хук адаптивности: возвращает true, если ширина окна ≤ breakpoint. */
export function useIsMobile(breakpoint: number = 760): boolean {
  const [mobile, setMobile] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia(`(max-width: ${breakpoint}px)`).matches
      : false
  );
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [breakpoint]);
  return mobile;
}
