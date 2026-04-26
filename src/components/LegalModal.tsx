import { useEffect, useState } from "react";
import { PAL_B } from "../lib/palette";
import { LEGAL_CONTENT, LEGAL_PDF_URL, type LegalKey } from "../data/legal";

export function LegalModal() {
  const [openId, setOpenId] = useState<LegalKey | null>(null);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#", "");
      if (h in LEGAL_CONTENT) setOpenId(h as LegalKey);
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId]);

  const close = () => {
    setOpenId(null);
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  if (!openId) return null;
  const data = LEGAL_CONTENT[openId];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      style={{
        position: "fixed", inset: 0, zIndex: 80,
        background: "rgba(20,30,24,.78)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20,
      }}
    >
      <div style={{
        background: PAL_B.bgCream, color: PAL_B.inkDark,
        borderRadius: 16,
        maxWidth: 720, width: "100%",
        maxHeight: "85vh", overflowY: "auto",
        padding: 32,
        position: "relative",
      }}>
        <button
          type="button"
          aria-label="Закрыть"
          onClick={close}
          style={{
            position: "absolute", top: 14, right: 16,
            width: 40, height: 40, borderRadius: 999,
            background: "transparent", color: PAL_B.inkDark,
            border: `1px solid ${PAL_B.ruleDark}`,
            cursor: "pointer",
            font: `400 22px/1 ${PAL_B.serif}`,
          }}
        >×</button>
        <h2
          id="legal-title"
          style={{
            font: `400 clamp(24px, 3.2vw, 36px)/1.2 ${PAL_B.serif}`,
            letterSpacing: "-.02em",
            margin: "0 0 20px",
            maxWidth: "85%",
            color: PAL_B.inkDark,
          }}
        >{data.title}</h2>
        {data.body.map((p, i) => (
          <p key={i} style={{
            font: `400 15px/1.65 ${PAL_B.sans}`,
            color: "#3a3428", margin: "0 0 14px",
          }}>{p}</p>
        ))}

        {openId === "privacy" && LEGAL_PDF_URL && (
          <a
            href={LEGAL_PDF_URL}
            download
            target="_blank"
            rel="noopener"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 12,
              padding: "10px 18px",
              borderRadius: 999,
              background: PAL_B.accent,
              color: PAL_B.accentInk,
              font: `500 14px/1 ${PAL_B.sans}`,
              textDecoration: "none",
            }}
          >
            ↓ Скачать PDF
          </a>
        )}
      </div>
    </div>
  );
}
