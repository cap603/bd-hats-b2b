"use client";
import { useState, useEffect, useRef } from "react";
import { useT } from "../lib/i18n";

const WHATSAPP_NUMBER = "8615933930830";

export function InquiryForm() {
  const t = useT("form");
  const [status, setStatus] = useState<string | null>(null);
  const [prefill, setPrefill] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Pre-fill message from URL intent (e.g. /#inquiry?intent=sample)
    const hash = window.location.hash;
    const match = hash.match(/intent=([^&]+)/);
    if (match) {
      const intent = decodeURIComponent(match[1]);
      if (intent === "sample") setPrefill(t("intentSample"));
      else if (intent === "bulk") setPrefill(t("intentBulk"));
      else if (intent === "test") setPrefill(t("intentTest"));
    }
  }, [t]);

  const trackInquiry = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "inquiry_submit", {
        event_category: "conversion",
        event_label: "inquiry-form",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value?.trim() || "";
    const email = emailRef.current?.value?.trim() || "";
    const message = messageRef.current?.value?.trim() || "";

    const lines = [
      "New B2B Inquiry — BD Hats Website",
      "----------------------------------",
      `Name: ${name}`,
      `Email: ${email}`,
      "----------------------------------",
      `Requirements: ${message}`,
    ];
    const text = encodeURIComponent(lines.join("\n"));

    trackInquiry();

    // Send to WhatsApp (primary sales channel) — no backend needed
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");

    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
        <h3 className="text-xl font-bold text-green-800 mb-2">{t("thanks")}</h3>
        <p className="text-green-700">{t("thanksMsg")}</p>
        <button onClick={() => setStatus(null)} className="mt-4 text-green-800 underline">{t("sendAnother")}</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-xl shadow-sm border">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t("name")} *</label>
        <input ref={nameRef} required type="text" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder={t("namePlaceholder")} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t("email")} *</label>
        <input ref={emailRef} required type="email" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder={t("emailPlaceholder")} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t("message")} *</label>
        <textarea ref={messageRef} required rows={5} defaultValue={prefill} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder={t("messagePlaceholder")}></textarea>
      </div>
      <p className="text-xs text-gray-400 -mt-2">{t("privacyNote")}</p>
      <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-4 font-black rounded-lg transition flex items-center justify-center gap-2 shadow-lg shadow-green-500/20">
        {t("submit")}
      </button>
    </form>
  );
}
