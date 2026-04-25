import { useEffect, useState } from "react";
import { PAL_B } from "../lib/palette";

export function StickyMobileBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("discovery");
    if (!target) return;
    const obs = new IntersectionObserver(
      (entries) => setHidden(entries[0].isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  if (hidden) return null;
  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 40,
      display: "flex", gap: 8,
      padding: "10px 12px calc(10px + env(safe-area-inset-bottom))",
      background: "rgba(31,58,44,.96)",
      backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
      borderTop: `1px solid ${PAL_B.rule}`,
    }}>
      <a href="tel:+79527442237" style={{
        flex: 1, textDecoration: "none",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        padding: "14px 12px", borderRadius: 999,
        background: "transparent", color: PAL_B.ink,
        border: `1px solid ${PAL_B.rule2}`,
        font: `500 14px/1 ${PAL_B.sans}`,
        minHeight: 44,
      }}>📞 Позвонить</a>
      <a href="#discovery" style={{
        flex: 1.4, textDecoration: "none",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        padding: "14px 16px", borderRadius: 999,
        background: PAL_B.sage,
        color: PAL_B.sageInk,
        font: `500 14px/1 ${PAL_B.sans}`,
        minHeight: 44,
      }}>Записаться →</a>
    </div>
  );
}
