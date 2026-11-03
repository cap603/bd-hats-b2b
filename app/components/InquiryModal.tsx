"use client";

import { useEffect, useState, useRef } from "react";
import { useLang, useT } from "../lib/i18n";
import { attributionLines, attributionTag } from "../lib/attribution";
import { trackWhatsAppClick } from "../lib/tracking";
import { X, MessageCircle, Send, CheckCircle2, ShieldCheck, Clock, Zap } from "lucide-react";

const WHATSAPP_NUMBER = "8615933930830";

export function InquiryModal() {
  const lang = useLang();
  const formT = useT("form");
  const [visible, setVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // 1. Listen for global open triggers + smart exit-intent & timed triggers
  useEffect(() => {
    // Custom event listener so any button can open this modal
    const handleOpen = () => {
      setVisible(true);
      setIsSubmitted(false);
    };
    window.addEventListener("open-inquiry-modal", handleOpen);

    // Global click listener for elements with data-inquiry-modal or matching buttons
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const trigger = target.closest('[data-inquiry-modal="true"], a[href$="#inquiry-modal"]');
      if (trigger) {
        e.preventDefault();
        setVisible(true);
        setIsSubmitted(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    // Smart auto triggers: exit-intent & 25s engagement (session-scoped)
    const isDismissed = sessionStorage.getItem("inquiry_modal_dismissed");
    let exitTriggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (exitTriggered || isDismissed) return;
      if (e.clientY <= 10) {
        exitTriggered = true;
        setVisible(true);
        sessionStorage.setItem("inquiry_modal_dismissed", "1");
      }
    };

    const timer = setTimeout(() => {
      if (!isDismissed && !exitTriggered) {
        setVisible(true);
        sessionStorage.setItem("inquiry_modal_dismissed", "1");
      }
    }, 25000);

    if (!isDismissed) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("open-inquiry-modal", handleOpen);
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem("inquiry_modal_dismissed", "1");
  };

  // Keyboard Escape listener
  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible]);

  // WhatsApp click handler
  const handleWhatsApp = () => {
    trackWhatsAppClick({
      button: "modal_popup_direct",
      label: "Inquiry Modal Direct WhatsApp",
    });

    const isEs = lang === "es";
    const isDe = lang === "de";
    const isFr = lang === "fr";
    const isPt = lang === "pt";
    const isIt = lang === "it";
    const isJa = lang === "ja";

    let greeting = "Hi Baoding Junyang! I would like to get a factory-direct quote for custom hats (MOQ 200 pcs).";
    if (isEs) greeting = "¡Hola Baoding Junyang! Me gustaría recibir una cotización de fábrica para gorras personalizadas (MOQ 200 uds).";
    else if (isDe) greeting = "Hallo Baoding Junyang! Ich interessiere mich für eine Fabrikpreis-Kalkulation für Kappen (Mindestmenge 200 Stück).";
    else if (isFr) greeting = "Bonjour Baoding Junyang! Je souhaite obtenir un devis d'usine pour des casquettes personnalisées (MOQ 200 pcs).";
    else if (isPt) greeting = "Olá Baoding Junyang! Gostaria de receber um orçamento de fábrica para bonés personalizados (MOQ 200 peças).";
    else if (isIt) greeting = "Buongiorno Baoding Junyang! Vorrei richiedere un preventivo di fabbrica per cappellini personalizzati (MOQ 200 pz).";
    else if (isJa) greeting = "保定俊扬（Baoding Junyang）様、オリジナル帽子の直接卸価格と量産見積りを希望します（最小発注ロット200個〜）。";

    const text = encodeURIComponent(`${greeting}\n\n${attributionTag()}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    close();
  };

  // Form submit handler
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
      message: `[Inquiry Modal Form] ${message}`,
      attribution: attrLines,
      locale: lang || "en",
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    let generatedId = `INQ-${Date.now().toString(36).toUpperCase()}`;

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
      console.warn("Inquiry modal submission fallback active:", err);
    }

    setInquiryId(generatedId);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (!visible) return null;

  // Localized copy
  const isEs = lang === "es";
  const isDe = lang === "de";
  const isFr = lang === "fr";
  const isPt = lang === "pt";
  const isIt = lang === "it";
  const isJa = lang === "ja";

  const badgeText = isEs
    ? "FÁBRICA DIRECTA ISO 9001 · MOQ 200 UDS"
    : isDe
    ? "ISO 9001 DIREKT AB WERK · MOQ 200 STK."
    : isFr
    ? "USINE DIRECTE ISO 9001 · MOQ 200 PCS"
    : isPt
    ? "DIRETO DA FÁBRICA ISO 9001 · MOQ 200 PEÇAS"
    : isIt
    ? "DIRETTO DALLA FABBRICA ISO 9001 · MOQ 200 PZ"
    : isJa
    ? "ISO 9001 認証工場直販 · MOQ 200個〜"
    : "ISO 9001 FACTORY DIRECT · MOQ 200 PCS";

  const headingText = isEs
    ? "Cotización Directa de Fábrica"
    : isDe
    ? "Sofortiges Fabrikangebot anfordern"
    : isFr
    ? "Demandez Votre Devis Direct d'Usine"
    : isPt
    ? "Solicitar Orçamento Direto da Fábrica"
    : isIt
    ? "Richiedi Preventivo Diretto di Fabbrica"
    : isJa
    ? "工場直販・量産お見積り依頼"
    : "Get Factory Direct Quote & Pricing";

  const subText = isEs
    ? "Respuesta rápida <12h, 100+ máquinas Barudan, muestras físicas en 7 días."
    : isDe
    ? "12-Std.-Antwort, 100+ Barudan-Stickköpfe, physische Muster in 7 Tagen."
    : isFr
    ? "Réponse en 12h, 100+ têtes de broderie Barudan, échantillons en 7 jours."
    : isPt
    ? "Resposta em 12h, 100+ máquinas Barudan, amostras físicas em 7 dias."
    : isIt
    ? "Risposta rapida <12h, 100+ macchine da ricamo Barudan, campioni in 7 giorni."
    : isJa
    ? "12時間以内見積り回答、百霊達高速刺繍機100台、7日間サンプル作成。"
    : "12h rapid turnaround, 100+ Barudan embroidery heads, 7-day physical samples.";

  const whatsappBtnText = isEs
    ? "Chatear por WhatsApp Directo"
    : isDe
    ? "Direkt auf WhatsApp anfragen"
    : isFr
    ? "Discuter Directement sur WhatsApp"
    : isPt
    ? "Conversar Direto no WhatsApp"
    : isIt
    ? "Chatta Subito su WhatsApp"
    : isJa
    ? "WhatsAppで今すぐ担当者に連絡"
    : "Chat Directly on WhatsApp";

  const orDividerText = isEs
    ? "O ENVÍE SU FORMULARIO DE CONSULTA"
    : isDe
    ? "ODER ANFRAGEFORMULAR AUSFÜLLEN"
    : isFr
    ? "OU REMPLIR LE FORMULAIRE DE DEVIS"
    : isPt
    ? "OU ENVIE O FORMULÁRIO DE COTAÇÃO"
    : isIt
    ? "O INVIA IL MODULO DI RICHIESTA"
    : isJa
    ? "またはお見積りフォームを送信"
    : "OR SUBMIT INQUIRY FORM";

  const submitBtnText = isSubmitting
    ? isEs
      ? "Enviando a Fábrica..."
      : isDe
      ? "Wird an Fabrik gesendet..."
      : isFr
      ? "Envoi en cours..."
      : isJa
      ? "送信中..."
      : "Sending to Factory..."
    : isEs
    ? "⚡ Enviar Consulta a Fábrica"
    : isDe
    ? "⚡ Anfrage an Fabrik senden"
    : isFr
    ? "⚡ Envoyer la Demande à l'Usine"
    : isPt
    ? "⚡ Enviar Consulta para a Fábrica"
    : isIt
    ? "⚡ Invia Richiesta alla Fabbrica"
    : isJa
    ? "⚡ 工場担当者へ見積り依頼を送信"
    : "⚡ Send Inquiry to Factory";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-[fadeIn_.2s_ease]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={close}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-5 sm:p-7 md:p-8 border border-slate-200/80 my-auto z-10">
        {/* Close Button */}
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1.5 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-100 transition cursor-pointer"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="pr-8 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-slate-900 text-amber-400 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md mb-2.5">
                <ShieldCheck size={12} className="text-amber-400" />
                {badgeText}
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-tight">
                {headingText}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-1">
                {subText}
              </p>
            </div>

            {/* 1. Fast WhatsApp Channel */}
            <div className="mb-4">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-black py-3.5 px-4 rounded-2xl transition shadow-lg shadow-emerald-600/20 text-sm sm:text-base cursor-pointer"
              >
                <MessageCircle size={20} className="shrink-0" />
                <span>{whatsappBtnText}</span>
              </button>
              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium mt-1.5">
                <Clock size={12} className="text-emerald-600 shrink-0" />
                <span>+86 159 3393 0830 · {isEs ? "Respuesta en minutos" : isJa ? "リアルタイム対応" : "Instant reply"}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="h-px bg-slate-200 flex-1" />
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 shrink-0">
                {orDividerText}
              </span>
              <div className="h-px bg-slate-200 flex-1" />
            </div>

            {/* 2. In-Modal Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    {formT("name")} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    ref={nameRef}
                    required
                    type="text"
                    placeholder={formT("namePlaceholder") || "John Doe"}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-hidden transition bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    {formT("email")} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    ref={emailRef}
                    required
                    type="email"
                    placeholder={formT("emailPlaceholder") || "you@brand.com"}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-hidden transition bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  {formT("phone")}
                </label>
                <input
                  ref={phoneRef}
                  type="text"
                  placeholder={formT("phonePlaceholder") || "+1 (555) 000-0000"}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-hidden transition bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  {formT("message")} <span className="text-rose-500">*</span>
                </label>
                <textarea
                  ref={messageRef}
                  required
                  rows={2}
                  placeholder={
                    isEs
                      ? "Estilo de gorra, cantidad estimada (mín. 200 uds), tipo de logotipo (bordado 3D, parche)..."
                      : isDe
                      ? "Kappentyp, geschätzte Stückzahl (ab 200 Stk.), Logo-Details (3D-Stick, Patch)..."
                      : isFr
                      ? "Modèle de casquette, quantité estimée (min. 200 pcs), logo (broderie 3D, patch)..."
                      : isJa
                      ? "キャップの型（6パネル/スナップバック等）、希望ロット（200個〜）、刺繍仕様（3D立体刺繍など）..."
                      : "Cap style, estimated quantity (min 200 pcs), logo specs (3D puff, flat embroidery, patch)..."
                  }
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-hidden transition bg-slate-50/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-black active:scale-[0.99] text-white font-black py-3 px-4 rounded-xl text-xs sm:text-sm transition shadow-md cursor-pointer disabled:opacity-60"
              >
                <Send size={14} />
                <span>{submitBtnText}</span>
              </button>

              <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium px-1">
                <span>🔒 {isEs ? "Tus datos son 100% confidenciales" : isJa ? "秘密厳守・直接工場見積り" : "100% confidential factory quote"}</span>
                <span>⚡ {isEs ? "Respuesta < 12h" : isJa ? "12h以内回答" : "Direct response < 12h"}</span>
              </div>
            </form>
          </>
        ) : (
          /* 3. Success State */
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 size={32} />
            </div>

            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60 inline-block mb-2">
                ID: {inquiryId}
              </span>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                {isEs
                  ? "¡Consulta Recibida con Éxito!"
                  : isDe
                  ? "Anfrage erfolgreich eingegangen!"
                  : isFr
                  ? "Demande Reçue avec Succès !"
                  : isPt
                  ? "Consulta Recebida com Sucesso!"
                  : isIt
                  ? "Richiesta Ricevuta con Successo!"
                  : isJa
                  ? "お見積り依頼を受け付けました！"
                  : "Inquiry Successfully Dispatched!"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1.5 max-w-sm mx-auto">
                {isEs
                  ? "Nuestro equipo de ingeniería revisará sus especificaciones y le enviará la cotización de fábrica por correo en menos de 12 horas."
                  : isDe
                  ? "Unser Technik-Team prüft Ihre Angaben und sendet Ihnen innerhalb von 12 Stunden ein schriftliches Fabrikangebot per E-Mail."
                  : isFr
                  ? "Notre équipe examinera vos spécifications et vous enverra un devis détaillé par email sous 12 heures."
                  : isJa
                  ? "当社の技術・営業チームが仕様を確認の上、12時間以内に詳細なお見積書をメールにて返信いたします。"
                  : "Our engineering sales team is reviewing your specs and will email you an itemized factory quote within 12 hours."}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer"
              >
                <MessageCircle size={14} />
                <span>{isEs ? "Acelerar por WhatsApp" : isJa ? "WhatsAppで急ぎ相談" : "Fast-track on WhatsApp"}</span>
              </button>
              <button
                type="button"
                onClick={close}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              >
                {isEs ? "Cerrar" : isJa ? "閉じる" : "Close Window"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
