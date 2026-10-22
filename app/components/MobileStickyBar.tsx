"use client";

import React from "react";
import { MessageCircle, Mail } from "lucide-react";
import { useLang } from "../lib/i18n";
import { trackWhatsAppClick } from "../lib/tracking";

const WHATSAPP_NUMBER = "8615933930830";

interface MobileStickyBarProps {
  pageName?: string;
}

export function MobileStickyBar({ pageName = "Homepage" }: MobileStickyBarProps) {
  const lang = useLang();
  const isEs = lang === "es";

  const handleWhatsApp = (e: React.MouseEvent) => {
    trackWhatsAppClick({
      button: "mobile_sticky_bar",
      label: `Mobile Sticky Bar: ${pageName}`,
    });
    const greeting = isEs
      ? "¡Hola Baoding Junyang! Estoy navegando desde el móvil y me gustaría solicitar una cotización directa de fábrica (MOQ 200 uds)."
      : "Hi Baoding Junyang! I'm browsing on mobile and would like to get a direct factory quote (MOQ 200pcs).";
    const text = encodeURIComponent(greeting);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const handleScrollToInquiry = (e: React.MouseEvent) => {
    const el = document.getElementById("inquiry");
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3.5 py-2 shadow-[0_-4px_25px_rgba(0,0,0,0.12)] flex items-center justify-between gap-2.5 pb-[max(0.6rem,env(safe-area-inset-bottom))]">
        {/* Left Factory Info */}
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-[11px] font-black text-slate-900 truncate tracking-tight">
              {isEs ? "Fábrica Directa" : "Direct Factory"}
            </span>
            <span className="text-[9px] font-black bg-slate-100 text-slate-700 px-1 py-0.2 rounded border border-slate-200">
              MOQ 200
            </span>
          </div>
          <span className="text-[9px] text-slate-500 font-bold tracking-tight">
            {isEs ? "⚡ Respuesta rápida < 2h" : "⚡ Fast quote < 2h"}
          </span>
        </div>

        {/* Right CTA Buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href={`/${lang}#inquiry`}
            onClick={handleScrollToInquiry}
            className="inline-flex items-center justify-center gap-1 bg-slate-900 active:bg-slate-800 text-white font-bold px-3 py-2 rounded-xl text-xs transition shadow-sm"
          >
            <Mail size={13} />
            <span>{isEs ? "Consulta" : "Inquire"}</span>
          </a>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black px-3.5 py-2 rounded-xl text-xs transition shadow-md shadow-emerald-600/25 cursor-pointer"
          >
            <MessageCircle size={14} />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
      {/* Spacer so footer or bottom elements are not obscured by the sticky bar on mobile */}
      <div className="h-14 lg:hidden" />
    </>
  );
}
