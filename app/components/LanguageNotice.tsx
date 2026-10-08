"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLang } from "../lib/i18n";
import { Globe, X, ArrowRight } from "lucide-react";

export function LanguageNotice() {
  const lang = useLang();
  const pathname = usePathname();
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only suggest when buyer is currently on English route
    if (lang !== "en") return;

    // Check if dismissed in this session
    try {
      if (sessionStorage.getItem("dismissed_es_notice") === "true") return;
    } catch (e) {
      // ignore storage error
    }

    // Check navigator language (Spanish codes: es, es-ES, es-MX, es-CO, es-AR, etc.)
    const browserLang = (navigator.language || (navigator as any).userLanguage || "").toLowerCase();
    if (browserLang.startsWith("es")) {
      // Delay slightly for smooth appearance after page load
      const t = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(t);
    }
  }, [lang]);

  if (!show) return null;

  const handleSwitchToSpanish = () => {
    try {
      sessionStorage.setItem("dismissed_es_notice", "true");
    } catch (e) {}
    setShow(false);

    // Switch /en/... to /es/... or / to /es
    let target = "/es";
    if (pathname.startsWith("/en")) {
      target = pathname.replace(/^\/en/, "/es");
    } else if (!pathname.startsWith("/es")) {
      target = `/es${pathname === "/" ? "" : pathname}`;
    }
    router.push(target);
  };

  const handleDismiss = () => {
    try {
      sessionStorage.setItem("dismissed_es_notice", "true");
    } catch (e) {}
    setShow(false);
  };

  return (
    <aside aria-label="Sugerencia de idioma" className="fixed top-20 right-4 z-50 max-w-sm w-[calc(100vw-2rem)] bg-slate-900/95 backdrop-blur-md text-white border border-slate-700/80 rounded-2xl shadow-2xl p-4 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
          <Globe size={16} />
          <span>Idioma / Spanish</span>
        </div>
        <button
          onClick={handleDismiss}
          className="text-slate-400 hover:text-white transition p-1 -mr-1 -mt-1 cursor-pointer"
          aria-label="Cerrar sugerencia"
        >
          <X size={16} />
        </button>
      </div>
      <p className="text-xs text-slate-200 mt-2 mb-3.5 leading-relaxed">
        ¿Prefieres navegar el catálogo de fábrica y solicitar cotizaciones al por mayor en <strong>español</strong>?
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={handleSwitchToSpanish}
          className="flex-1 bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-black py-2 px-3.5 rounded-xl text-xs transition flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
        >
          <span>Cambiar a Español</span>
          <ArrowRight size={13} />
        </button>
        <button
          onClick={handleDismiss}
          className="text-slate-400 hover:text-slate-200 text-xs py-2 px-3 cursor-pointer"
        >
          No, gracias
        </button>
      </div>
    </aside>
  );
}
