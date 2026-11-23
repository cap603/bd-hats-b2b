"use client";
import { useState, useEffect, useRef } from "react";
import { useT, useLang } from "../lib/i18n";
import { attributionLines } from "../lib/attribution";
import { trackWhatsAppClick } from "../lib/tracking";
import { CheckCircle2, MessageCircle, Send, ShieldCheck, Lock, FileText, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "8615933930830";

export function InquiryForm() {
  const t = useT("form");
  const lang = useLang();
  const isEs = lang === "es";

  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryId, setInquiryId] = useState<string>("");
  const [submittedName, setSubmittedName] = useState<string>("");
  const [submittedEmail, setSubmittedEmail] = useState<string>("");
  const [whatsAppText, setWhatsAppText] = useState<string>("");
  const [prefill, setPrefill] = useState("");

  // Structured RFQ Fields
  const [capStyle, setCapStyle] = useState("Custom 5-Panel Caps");
  const [targetQty, setTargetQty] = useState("500 pcs (100% Sample Refund)");
  const [decoration, setDecoration] = useState("3D Puff Embroidery");
  const [timeline, setTimeline] = useState("Standard (Sample 7d, Bulk 15-20d)");
  const [destination, setDestination] = useState("United States");
  const [ndaRequested, setNdaRequested] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleIntent = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash;
      const match = hash.match(/intent=([^&]+)/);
      const searchMatch = window.location.search.match(/intent=([^&]+)/);
      const intentRaw = match ? match[1] : (searchMatch ? searchMatch[1] : null);
      if (intentRaw) {
        const intent = decodeURIComponent(intentRaw);
        if (intent === "sample") setPrefill(t("intentSample"));
        else if (intent === "bulk") setPrefill(t("intentBulk"));
        else if (intent === "test") setPrefill(t("intentTest"));
        else if (intent === "techpack") setPrefill(t("intentTechpack"));
        else if (intent === "mockup") setPrefill(t("intentMockup"));
      }
    };

    handleIntent();
    window.addEventListener("hashchange", handleIntent);
    return () => window.removeEventListener("hashchange", handleIntent);
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
    const customNotes = messageRef.current?.value?.trim() || "";

    if (!name || !email) return;

    setIsSubmitting(true);
    setStatus(null);

    // Build structured technical RFQ message payload
    const structuredMessage = [
      `[Structured B2B RFQ Technical Specifications]`,
      `• Cap Silhouette: ${capStyle}`,
      `• Target Production Quantity: ${targetQty}`,
      `• Primary Decoration: ${decoration}`,
      `• Required Delivery Timeline: ${timeline}`,
      `• Destination Market: ${destination}`,
      `• NDA Status: ${ndaRequested ? "REQUESTED — Please send mutual NDA for signature before reviewing artwork/files" : "Standard Factory Review"}`,
      customNotes ? `\n[Client Artwork & Specification Notes]:\n${customNotes}` : "",
    ].filter(Boolean).join("\n");

    const attrLines = attributionLines();
    const payload = {
      name,
      email,
      phone,
      message: structuredMessage,
      attribution: attrLines,
      locale: lang || "en",
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    let generatedId = `INQ-${Date.now().toString(36).toUpperCase()}`;

    let submitted = false;
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const data = await res.json().catch(() => null);
        if (data?.inquiryId) generatedId = data.inquiryId;
        submitted = true;
      }
    } catch (err) {
      console.warn("Inquiry submission network error:", err);
    }

    if (!submitted) {
      setIsSubmitting(false);
      setStatus("error");
      return;
    }
    trackInquiry(generatedId);

    // Prepare WhatsApp fast follow-up message
    const lines = isEs
      ? [
          `Nueva Consulta B2B (${generatedId}) — BD Hats`,
          "----------------------------------",
          `Nombre: ${name}`,
          `Correo: ${email}`,
          ...(phone ? [`WhatsApp: ${phone}`] : []),
          `Modelo: ${capStyle}`,
          `Cantidad: ${targetQty}`,
          `Decoración: ${decoration}`,
          `Plazo: ${timeline}`,
          `Destino: ${destination}`,
          ...(ndaRequested ? ["NDA: Solicitado antes de abrir archivos"] : []),
          "----------------------------------",
          ...(customNotes ? [`Notas: ${customNotes}`] : []),
          ...attrLines,
        ]
      : [
          `New B2B Factory RFQ (${generatedId}) — BD Hats`,
          "----------------------------------",
          `Name: ${name}`,
          `Email: ${email}`,
          ...(phone ? [`WhatsApp: ${phone}`] : []),
          `Cap Style: ${capStyle}`,
          `Quantity: ${targetQty}`,
          `Decoration: ${decoration}`,
          `Timeline: ${timeline}`,
          `Destination: ${destination}`,
          ...(ndaRequested ? ["NDA: Mutual NDA requested prior to review"] : []),
          "----------------------------------",
          ...(customNotes ? [`Notes: ${customNotes}`] : []),
          ...attrLines,
        ];

    const encodedText = encodeURIComponent(lines.join("\n"));
    setWhatsAppText(encodedText);
    setInquiryId(generatedId);
    setSubmittedName(name);
    setSubmittedEmail(email);

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
        <h3 className="text-xl font-black text-slate-900 mb-2">
          {isEs ? "¡Solicitud Recibida con Éxito!" : "RFQ Received Successfully!"}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6">
          {isEs
            ? "Tus especificaciones técnicas han sido asignadas a nuestro equipo de ingeniería comercial (admin@bdjunyang.com)."
            : "Your technical specifications have been safely delivered to our factory engineering sales team (admin@bdjunyang.com)."}
        </p>

        {/* 4-Step Factory SLA Tracking Box */}
        <div className="bg-white border border-emerald-200/90 rounded-2xl p-5 max-w-lg mx-auto mb-6 text-left space-y-3 shadow-xs">
          <p className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-100 pb-2">
            {isEs ? "SLA y Próximos Pasos de Producción:" : "Factory SLA & Next Steps:"}
          </p>
          <div className="flex items-start gap-2.5 text-xs text-slate-700">
            <span className="font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">01</span>
            <span>{isEs ? "Correo de confirmación enviado — por favor revise su bandeja de entrada (y spam)." : "Confirmation email sent — check your inbox (and spam folder)."}</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-slate-700">
            <span className="font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">02</span>
            <span>{isEs ? "Cotización formal por escrito y desglosada con precios FOB en menos de 12 horas." : "Itemised, written quotation with tiered FOB unit rates delivered within 12 hours."}</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-slate-700">
            <span className="font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">03</span>
            <span>{isEs ? "Muestra física en 7 días, fotografiada y grabada en vídeo HD antes del envío." : "Physical sample dispatched in 7 days, photographed and filmed in HD before shipping."}</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-slate-700">
            <span className="font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">04</span>
            <span>{isEs ? "Producción en masa en 15–20 días, con reportes multimedia en corte, bordado y empaque." : "Bulk production in 15–20 days, with progress photo/video logs at cutting, stitching and packing."}</span>
          </div>
        </div>

        {/* Dual-Channel Fast WhatsApp Option */}
        <div className="bg-white border border-emerald-200/80 rounded-xl p-4 max-w-lg mx-auto mb-6 text-left">
          <p className="text-xs font-bold text-slate-700 mb-2.5 flex items-center gap-1.5">
            <MessageCircle size={15} className="text-emerald-600 shrink-0" />
            <span>{isEs ? "¿Prefieres agilizar por chat directo? Conecta con el especialista asignado:" : "Need an immediate reply? You can also connect with our sales specialist on WhatsApp:"}</span>
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
    <div className="space-y-4">
      {/* Reverse Qualification Card */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 text-left shadow-2xs">
        <h4 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight flex items-center gap-2 mb-3">
          <ShieldCheck size={16} className="text-blue-600 shrink-0" />
          <span>{isEs ? "¿Es Baoding Junyang la fábrica adecuada para su pedido?" : "Is BD Hats the right factory for your order?"}</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
          <div className="bg-white p-3.5 rounded-xl border border-emerald-200/80 shadow-2xs">
            <span className="font-black text-emerald-800 flex items-center gap-1.5 mb-2 text-[11px] uppercase tracking-wider">
              <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
              {isEs ? "Apto para su marca si busca:" : "A good fit if you need:"}
            </span>
            <ul className="space-y-1.5 text-slate-600 text-[11px]">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{isEs ? "Programas de temporada de marca desde 200 uds por modelo y color" : "Brand seasonal programs from 200 pcs per style and colour"}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{isEs ? "Líneas de producción dedicadas, cotización desglosada y muestra previa firmada" : "Your own production lines, itemised quotes and a signed pre-production sample"}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{isEs ? "Instalaciones auditadas por SGS, control de calidad pieza a pieza y embalaje de exportación" : "SGS-audited facility evidence, piece-by-piece QC and export packing specs"}</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-amber-200/80 shadow-2xs">
            <span className="font-black text-amber-800 flex items-center gap-1.5 mb-2 text-[11px] uppercase tracking-wider">
              <span className="text-amber-600 font-bold">✕</span>
              {isEs ? "Probablemente no encaje si busca:" : "Probably not the best fit if you need:"}
            </span>
            <ul className="space-y-1.5 text-slate-600 text-[11px]">
              <li className="flex items-start gap-1.5">
                <span className="text-amber-600 font-bold">•</span>
                <span>{isEs ? "Gorras individuales personales (1-5 uds son exclusivamente para desarrollo de marcas)" : "One-off personal caps (1–5 pcs are sample runs only; no single-cap retail)"}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-600 font-bold">•</span>
                <span>{isEs ? "Mercancía en su mesa en 3 días (muestra física 7 días, producción 15–20 días)" : "Goods on your desk in 3 days (sample 7 days, bulk 15–20 days)"}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-600 font-bold">•</span>
                <span>{isEs ? "Compra enfocada únicamente en precio mínimo sin paso de validación de muestra" : "Lowest-price-only sourcing without a pre-production sample approval step"}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Structured RFQ Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-5 sm:p-8 rounded-2xl shadow-xs border border-slate-200/90 text-left">
        {status === "error" && (
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-left">
            <p className="text-sm font-bold text-rose-800 mb-1">
              {isEs ? "No se pudo enviar la consulta" : "Submission failed"}
            </p>
            <p className="text-xs text-rose-700 mb-3">
              {isEs
                ? "Nuestro servidor no confirmó la recepción. Inténtelo de nuevo o escríbanos directamente por WhatsApp."
                : "Our server did not confirm receipt. Please try again, or send via WhatsApp."}
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi BD Hats! My website inquiry failed to submit. I would like a factory quote for custom caps (MOQ 200 pcs).")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ button: "form_error_fallback", label: "Inquiry Form Error WhatsApp Fallback" })}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition"
            >
              <MessageCircle size={14} />
              {isEs ? "Enviar por WhatsApp" : "Send via WhatsApp instead"}
            </a>
          </div>
        )}

        {/* Section 1: Structured Technical Specs */}
        <div className="border-b border-slate-100 pb-4 mb-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-black">1</span>
            <span className="text-xs font-black uppercase tracking-wider text-slate-900">
              {isEs ? "Especificaciones Técnicas del Proyecto" : "Technical Project Specifications"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Cap Style */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                {isEs ? "Modelo de Gorra *" : "Cap Style *"}
              </label>
              <select
                value={capStyle}
                onChange={(e) => setCapStyle(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 outline-none bg-slate-50/50 font-medium text-slate-800"
              >
                <option value="Custom 5-Panel Caps">Custom 5-Panel Camper Caps</option>
                <option value="Structured Baseball Caps">Structured 6-Panel Baseball Caps</option>
                <option value="Unstructured Dad Hats">Unstructured Vintage Dad Hats</option>
                <option value="Wholesale Snapbacks">Classic Flat-Brim Snapback Hats</option>
                <option value="Custom Trucker Hats">Breathable Mesh Trucker Hats</option>
                <option value="Custom Bucket Hats">Outdoor Sun Bucket Hats</option>
                <option value="Custom Knit Beanies">Ribbed Knit Winter Beanies</option>
                <option value="Multiple Styles / Not Sure Yet">Multiple Styles / Need Engineering Recommendation</option>
              </select>
            </div>

            {/* Target Quantity */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                {isEs ? "Cantidad Estimada *" : "Target Quantity *"}
              </label>
              <select
                value={targetQty}
                onChange={(e) => setTargetQty(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 outline-none bg-slate-50/50 font-medium text-slate-800"
              >
                <option value="200-499 pcs (MOQ Tier)">200 – 499 pcs (Trial MOQ Tier)</option>
                <option value="500 pcs (100% Sample Refund)">500 – 999 pcs (Recommended · 100% Sample Fee Refund)</option>
                <option value="1,000-2,999 pcs (High Volume)">1,000 – 2,999 pcs (Volume Price Breaks)</option>
                <option value="3,000-9,999 pcs (Seasonal Program)">3,000 – 9,999 pcs (Enterprise Program)</option>
                <option value="10,000+ pcs (Container Program)">10,000+ pcs (20GP / 40HQ Container Program)</option>
              </select>
            </div>

            {/* Decoration Technique */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                {isEs ? "Técnica de Logotipo *" : "Decoration Technique *"}
              </label>
              <select
                value={decoration}
                onChange={(e) => setDecoration(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 outline-none bg-slate-50/50 font-medium text-slate-800"
              >
                <option value="3D Puff Embroidery">High-Density 3D Puff Embroidery</option>
                <option value="Flat Technical Embroidery">Flat Fine Embroidery (Tatami / Satin)</option>
                <option value="Woven Patch with Merrow Border">Woven Label Patch (Merrowed Border)</option>
                <option value="Laser-Engraved Leather Patch">Genuine / PU Laser-Engraved Leather Patch</option>
                <option value="Screen Print / Silicon Heat Transfer">Screen Print / High-Build Silicon Transfer</option>
                <option value="Rubber PVC / Metal Hardware">Molded Rubber PVC / Custom Metal Hardware</option>
                <option value="Undecided / Reviewing Tech Pack">Undecided / Please Review My Artwork</option>
              </select>
            </div>

            {/* Delivery Timeline */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                {isEs ? "Plazo de Entrega Deseado *" : "Delivery Timeline *"}
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 outline-none bg-slate-50/50 font-medium text-slate-800"
              >
                <option value="Standard (Sample 7d, Bulk 15-20d)">Standard (Sample 7d, Bulk 15–20d)</option>
                <option value="Urgent Delivery Required">Urgent Launch Date (Express Air)</option>
                <option value="1-2 Months (Seasonal Production)">1–2 Months (Seasonal Collection)</option>
                <option value="3+ Months (Ocean Freight)">3+ Months (Ocean Freight / Lowest Landed Cost)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Contact Details & Buyer Geography */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-black">2</span>
            <span className="text-xs font-black uppercase tracking-wider text-slate-900">
              {isEs ? "Datos de Contacto y Destino" : "Contact & Delivery Destination"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                {t("name")} *
              </label>
              <input
                ref={nameRef}
                required
                type="text"
                className="w-full px-3.5 py-2.5 text-base sm:text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 outline-none transition bg-slate-50/50 focus:bg-white"
                placeholder={t("namePlaceholder")}
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                {t("email")} *
              </label>
              <input
                ref={emailRef}
                required
                type="email"
                className="w-full px-3.5 py-2.5 text-base sm:text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 outline-none transition bg-slate-50/50 focus:bg-white"
                placeholder={t("emailPlaceholder")}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                {t("phone")}
              </label>
              <input
                ref={phoneRef}
                type="text"
                className="w-full px-3.5 py-2.5 text-base sm:text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 outline-none transition bg-slate-50/50 focus:bg-white"
                placeholder={t("phonePlaceholder")}
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                {isEs ? "País de Destino (para cálculo FOB/DDP) *" : "Destination Country (FOB / Freight) *"}
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 text-base sm:text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 outline-none transition bg-slate-50/50 focus:bg-white"
                placeholder="e.g. United States / Germany / Australia"
              />
            </div>
          </div>

          {/* Mutual NDA Checkbox */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 mb-3">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-800">
              <input
                type="checkbox"
                checked={ndaRequested}
                onChange={(e) => setNdaRequested(e.target.checked)}
                className="mt-0.5 rounded text-slate-900 focus:ring-slate-900 w-4 h-4 cursor-pointer"
              />
              <div className="leading-snug">
                <span className="font-bold flex items-center gap-1.5 text-slate-900">
                  <Lock size={12} className="text-blue-600 inline" />
                  {isEs
                    ? "Deseo firmar un Acuerdo de Confidencialidad (NDA) antes de compartir diseños originales / Ficha Técnica."
                    : "I would like to sign a mutual NDA before sharing our original artwork / tech pack."}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  {isEs
                    ? "Nuestro equipo enviará el acuerdo NDA para firma digital antes de abrir sus archivos vectoriales."
                    : "We will send our bilateral NDA for electronic signature before our engineering team opens your vector design files."}
                </span>
              </div>
            </label>
          </div>

          {/* Optional Message / Notes */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
              {isEs ? "Requisitos Adicionales / Notas de Tejido (Opcional)" : "Additional Specifications / Fabric & Buckle Notes (Optional)"}
            </label>
            <textarea
              ref={messageRef}
              rows={3}
              defaultValue={prefill}
              className="w-full px-3.5 py-2.5 text-base sm:text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 outline-none transition bg-slate-50/50 focus:bg-white resize-y"
              placeholder={isEs ? "Detalles de gramaje GSM, hebilla de latón, cinta interior personalizada, etc." : "Tell us about fabric GSM preferences, closure buckles, custom seam tape, or paste links to design files..."}
            ></textarea>
          </div>
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
              <span>{isEs ? "Enviar Especificaciones a Fábrica" : "Submit Technical RFQ to Factory"}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
