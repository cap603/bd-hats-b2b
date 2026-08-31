"use client";

import { useEffect, useState } from "react";
import { useT, useLang } from "../lib/i18n";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "8615933930830";

export function IntentPopup() {
  const t = useT("popup");
  const lang = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't re-show on every page — once per session is enough
    if (typeof window !== "undefined" && sessionStorage.getItem("intent_popup_shown")) return;

    let dismissed = false;
    const timer = setTimeout(() => {
      if (!dismissed) {
        setVisible(true);
        sessionStorage.setItem("intent_popup_shown", "1");
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "intent_popup_shown", { event_category: "engagement" });
        }
      }
    }, 30000); // 30 seconds
    return () => {
      dismissed = true;
      clearTimeout(timer);
    };
  }, []);

  const close = () => setVisible(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi Baoding Junyang! I'm browsing your site and would like a quote for custom hats."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "intent_popup_click", { event_category: "engagement", label: "whatsapp" });
    }
    close();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />

      {/* Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-[fadeIn_.3s_ease]">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition p-1"
        >
          <X size={20} />
        </button>

        <span className="inline-block bg-yellow-100 text-yellow-800 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          {t("badge")}
        </span>

        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-black mb-2">
          {t("heading")}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {t("sub")}
        </p>

        <div className="space-y-3">
          <button
            onClick={handleWhatsApp}
            className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-2xl transition shadow-lg shadow-green-500/20"
          >
            <svg viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M16.004 3.2c-7.06 0-12.8 5.736-12.8 12.8 0 2.26.592 4.47 1.72 6.42L3.2 28.8l6.58-1.724a12.74 12.74 0 0 0 6.224 1.584h.005c7.06 0 12.8-5.736 12.8-12.8 0-3.42-1.332-6.632-3.75-9.05a12.72 12.72 0 0 0-9.055-3.71Zm0 2.4c2.78 0 5.392 1.082 7.355 3.045a10.33 10.33 0 0 1 3.045 7.355c0 5.732-4.664 10.4-10.4 10.4a10.34 10.34 0 0 1-5.302-1.452l-.376-.224-3.904 1.02 1.02-3.806-.244-.382a10.36 10.36 0 0 1-1.594-5.556c0-5.732 4.664-10.4 10.4-10.4Zm-5.04 6.24c-.196 0-.516.074-.786.37-.27.294-1.034 1.01-1.034 2.462 0 1.452 1.058 2.854 1.206 3.052.148.198 2.05 3.278 5.078 4.47 2.51.986 3.022.79 3.568.74.546-.05 1.762-.72 2.01-1.416.248-.696.248-1.292.174-1.416-.074-.124-.27-.198-.566-.346-.296-.148-1.762-.87-2.034-.97-.272-.098-.47-.148-.668.1-.198.246-.766.968-.94 1.166-.174.198-.346.222-.642.074-.296-.148-1.25-.46-2.382-1.47-.88-.786-1.474-1.756-1.648-2.052-.174-.296-.018-.456.13-.604.134-.132.298-.346.446-.52.148-.172.198-.296.296-.494.1-.198.05-.37-.024-.518-.074-.148-.658-1.646-.932-2.244-.236-.542-.5-.46-.672-.46-.174-.004-.376-.004-.576-.004Z" />
            </svg>
            {t("whatsappBtn")}
          </button>

          <a
            href={`/${lang}/#inquiry`}
            onClick={close}
            className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-2xl transition text-sm uppercase tracking-widest"
          >
            {t("formBtn")}
          </a>
        </div>

        <p className="text-center text-[10px] text-gray-400 mt-4">{t("note")}</p>
      </div>
    </div>
  );
}
