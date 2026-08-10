"use client";

import { useEffect, useState } from "react";
import { useT } from "../lib/i18n";

const WHATSAPP_NUMBER = "8615933930830";

export function WhatsAppFloat() {
  const t = useT("chat");
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    // Show after slight delay (avoid covering hero CTA immediately)
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_float_click", { event_category: "engagement" });
    }
    const text = encodeURIComponent(
      "Hi Baoding Junyang! I'm interested in your custom hats. Can we discuss a quote?"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-2">
      {/* Tooltip bubble */}
      <div
        className={`bg-white border border-gray-100 shadow-2xl rounded-2xl px-4 py-2.5 text-xs font-bold text-gray-800 transition-all duration-300 ${
          tooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        onClick={() => setTooltip(false)}
      >
        {t("tip")}
      </div>

      {/* Floating button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        aria-label="Chat on WhatsApp"
        className="relative group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-105"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-60 animate-ping group-hover:animate-none" style={{ animationDuration: "2.2s" }} />
        <svg viewBox="0 0 32 32" className="w-6 h-6 relative z-10" fill="currentColor" aria-hidden="true">
          <path d="M16.004 3.2c-7.06 0-12.8 5.736-12.8 12.8 0 2.26.592 4.47 1.72 6.42L3.2 28.8l6.58-1.724a12.74 12.74 0 0 0 6.224 1.584h.005c7.06 0 12.8-5.736 12.8-12.8 0-3.42-1.332-6.632-3.75-9.05a12.72 12.72 0 0 0-9.055-3.71Zm0 2.4c2.78 0 5.392 1.082 7.355 3.045a10.33 10.33 0 0 1 3.045 7.355c0 5.732-4.664 10.4-10.4 10.4a10.34 10.34 0 0 1-5.302-1.452l-.376-.224-3.904 1.02 1.02-3.806-.244-.382a10.36 10.36 0 0 1-1.594-5.556c0-5.732 4.664-10.4 10.4-10.4Zm-5.04 6.24c-.196 0-.516.074-.786.37-.27.294-1.034 1.01-1.034 2.462 0 1.452 1.058 2.854 1.206 3.052.148.198 2.05 3.278 5.078 4.47 2.51.986 3.022.79 3.568.74.546-.05 1.762-.72 2.01-1.416.248-.696.248-1.292.174-1.416-.074-.124-.27-.198-.566-.346-.296-.148-1.762-.87-2.034-.97-.272-.098-.47-.148-.668.1-.198.246-.766.968-.94 1.166-.174.198-.346.222-.642.074-.296-.148-1.25-.46-2.382-1.47-.88-.786-1.474-1.756-1.648-2.052-.174-.296-.018-.456.13-.604.134-.132.298-.346.446-.52.148-.172.198-.296.296-.494.1-.198.05-.37-.024-.518-.074-.148-.658-1.646-.932-2.244-.236-.542-.5-.46-.672-.46-.174-.004-.376-.004-.576-.004Z" />
        </svg>
        <span className="relative z-10 font-black text-sm">{t("cta")}</span>
      </button>
    </div>
  );
}
