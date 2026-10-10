"use client";

export interface TrackClickParams {
  button?: string;
  label?: string;
  page?: string;
}

/**
 * Robust WhatsApp click tracker supporting modern fetch keepalive and sendBeacon fallback.
 * Guarantees dispatch even during mobile external app switcher navigation.
 */
export function trackWhatsAppClick(params?: TrackClickParams) {
  if (typeof window === "undefined") return;

  const page = params?.page || window.location.pathname || "/";
  const referrer = document.referrer || "";
  const button = params?.button || "whatsapp_button";
  const label = params?.label || "";

  // 1. GA4 event dispatch
  if ((window as any).gtag) {
    try {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "inquiry",
        page_location: page,
        button_name: button,
        button_label: label,
      });
    } catch (e) {}
  }

  // 2. Dual-channel dispatch to server for DingTalk instant webhook alert
  try {
    const payload = JSON.stringify({
      type: "whatsapp_click",
      page,
      referrer,
      button,
      label,
      timestamp: new Date().toISOString(),
    });

    // Primary: fetch with keepalive: true (W3C standard for analytics on unload)
    try {
      fetch("/api/inquiry/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    } catch (e) {}

    // Secondary redundancy: sendBeacon with text/plain (avoids CORS preflight / WebKit blob bugs)
    if (navigator.sendBeacon) {
      try {
        navigator.sendBeacon("/api/inquiry/event", payload);
      } catch (e) {}
    }
  } catch (err) {
    // Non-blocking
  }
}
