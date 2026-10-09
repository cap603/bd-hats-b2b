"use client";
import { useState, useEffect, useRef } from "react";
import { useT, useLang } from "../lib/i18n";
import { attributionLines } from "../lib/attribution";
import { trackWhatsAppClick } from "../lib/tracking";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";

const WHATSAPP_NUMBER = "8615933930830";

export function InquiryForm() {
  const t = useT("form");
  const lang = useLang();
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryId, setInquiryId] = useState<string>("");
  const [submittedName, setSubmittedName] = useState<string>("");
  const [submittedEmail, setSubmittedEmail] = useState<string>("");
  const [whatsAppText, setWhatsAppText] = useState<string>("");
  const [prefill, setPrefill] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Pre-fill message from URL intent (e.g. /#inquiry?intent=sample)
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      const match = hash.match(/intent=([^&]+)/);
      if (match) {
        const intent = decodeURIComponent(match[1]);
        if (intent === "sample") setPrefill(t("intentSample"));
        else if (intent === "bulk") setPrefill(t("intentBulk"));
        else if (intent === "test") setPrefill(t("intentTest"));
      }
    }
  }, [t]);

  const trackInquiry = (id?: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "inquiry_submit", {
        event_category: "conversion",
        event_label: id ? `form-${id}` : "inquiry-form",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const name = nameRef.current?.value?.trim() || "";
    const email = emailRef.current?.value?.trim() || "";
    const phone = phoneRef.current?.value?.trim() || "";
    const message = messageRef.current?.value?.trim() || "";

    if (!name || !email || !message) return;

    setIsSubmitting(true);

    const attrLines = attributionLines();
    const payload = {
      name,
      email,
      phone,
      message,
      attribution: attrLines,
      locale: lang || "en",
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    let generatedId = `INQ-${Date.now().toString(36).toUpperCase()}`;

    // 1. Send to server-side backend API (Guaranteed lead capture & email/webhook dispatch)
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data?.inquiryId) {
        generatedId = data.inquiryId;
      }
    } catch (err) {
      console.warn("Backend logging fallback active:", err);
    }

    trackInquiry(generatedId);

    // 2. Prepare WhatsApp direct message
    const lines = [
      `New B2B Inquiry (${generatedId}) — BD Hats`,
      "----------------------------------",
      `Name: ${name}`,
      `Email: ${email}`,
      ...(phone ? [`Phone/WhatsApp: ${phone}`] : []),
      "----------------------------------",
      `Requirements: ${message}`,
      ...attrLines,
    ];
    const encodedText = encodeURIComponent(lines.join("\n"));
    setWhatsAppText(encodedText);
    setInquiryId(generatedId);
    setSubmittedName(name);
    setSubmittedEmail(email);

    // Try opening WhatsApp in a new tab; if popup blocked, user has the prominent button on thanks screen
    try {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, "_blank");
    } catch {
      // ignore popup blocker
    }

    setIsSubmitting(false);
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-6 sm:p-8 rounded-2xl text-center shadow-xs">
        <div className="h-12 w-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald-600/20">
          <CheckCircle2 size={24} />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block mb-2">
          Reference #{inquiryId}
        </span>
        <h3 className="text-xl font-black text-slate-900 mb-2">{t("thanks")}</h3>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6">
          {t("thanksMsg")}
        </p>

        {/* Dual-Channel Fast WhatsApp Option */}
        <div className="bg-white border border-emerald-200/80 rounded-xl p-4 max-w-md mx-auto mb-6 text-left">
          <p className="text-xs font-bold text-slate-700 mb-2.5 flex items-center gap-1.5">
            <MessageCircle size={15} className="text-emerald-600 shrink-0" />
            <span>{t("whatsappFallback")}</span>
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsAppText}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick({
                button: "form_success_card",
                label: `Inquiry Form Followup (#${inquiryId})`,
              })
            }
            className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-md shadow-emerald-600/20"
          >
            <MessageCircle size={16} />
            <span>{t("chatWhatsApp")}</span>
          </a>
        </div>

        <button
          onClick={() => {
            setStatus(null);
            setInquiryId("");
          }}
          className="text-xs text-slate-500 hover:text-slate-800 underline font-semibold transition"
        >
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-5 sm:p-8 rounded-2xl shadow-xs border border-slate-200/90 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            {t("name")} *
          </label>
          <input
            ref={nameRef}
            required
            type="text"
            className="w-full px-3.5 py-2.5 text-base sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition bg-slate-50/50 focus:bg-white"
            placeholder={t("namePlaceholder")}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            {t("email")} *
          </label>
          <input
            ref={emailRef}
            required
            type="email"
            className="w-full px-3.5 py-2.5 text-base sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition bg-slate-50/50 focus:bg-white"
            placeholder={t("emailPlaceholder")}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
          {t("phone")}
        </label>
        <input
          ref={phoneRef}
          type="text"
          className="w-full px-3.5 py-2.5 text-base sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition bg-slate-50/50 focus:bg-white"
          placeholder={t("phonePlaceholder")}
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
          {t("message")} *
        </label>
        <textarea
          ref={messageRef}
          required
          rows={4}
          defaultValue={prefill}
          className="w-full px-3.5 py-2.5 text-base sm:text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition bg-slate-50/50 focus:bg-white resize-y"
          placeholder={t("messagePlaceholder")}
        ></textarea>
      </div>

      <p className="text-[11px] text-slate-400">
        {t("privacyNote")}
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-slate-900 hover:bg-black active:scale-95 text-white py-3.5 px-6 font-bold rounded-xl transition flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            <span>{t("submitting")}</span>
          </>
        ) : (
          <>
            <Send size={15} />
            <span>{t("submit")}</span>
          </>
        )}
      </button>
    </form>
  );
}
