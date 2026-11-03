"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { useLang } from "../lib/i18n";
import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";

interface LanguageOption {
  code: string;
  label: string;
  name: string;
  flag: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "EN", name: "English", flag: "🇺🇸" },
  { code: "es", label: "ES", name: "Español", flag: "🇪🇸" },
  { code: "de", label: "DE", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "FR", name: "Français", flag: "🇫🇷" },
];

export function LanguageSwitcher() {
  const currentLocale = useLang();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === currentLocale) || LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const selectLanguage = (targetCode: string) => {
    if (targetCode === currentLocale) {
      setIsOpen(false);
      return;
    }

    // Replace the first locale segment e.g. /en/... -> /de/...
    const segments = pathname.split("/");
    if (segments.length > 1 && LANGUAGES.some((l) => l.code === segments[1])) {
      segments[1] = targetCode;
    } else {
      segments.splice(1, 0, targetCode);
    }
    const newPath = segments.join("/") || `/${targetCode}`;

    setIsOpen(false);
    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        disabled={isPending}
        className="flex items-center gap-1.5 text-xs font-black text-slate-700 hover:text-black transition px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white/90 hover:bg-slate-50 shadow-xs cursor-pointer select-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Change Language / Idioma / Sprache / Langue"
      >
        <Globe size={13} className="text-slate-500" />
        <span className="text-xs font-black tracking-wide">{current.label}</span>
        <ChevronDown size={11} className={`text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-40 rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
            Language / Sprache / Langue
          </div>
          {LANGUAGES.map((lang) => {
            const isActive = lang.code === currentLocale;
            return (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-left transition cursor-pointer ${
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm leading-none">{lang.flag}</span>
                  <span className="leading-none">{lang.name}</span>
                </div>
                {isActive && <Check size={13} className="text-slate-900 stroke-[3]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
