"use client";

export interface TrackClickParams {
  button?: string;
  label?: string;
  page?: string;
}

/**
 * Tracks WhatsApp clicks across the website and dispatches an immediate
 * beacon event to /api/inquiry/event for DingTalk notification & country identification.
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

  // 2. Asynchronous Beacon to server for DingTalk instant webhook alert
  try {
    const payload = JSON.stringify({
      type: "whatsapp_click",
      page,
      referrer,
      button,
      label,
      timestamp: new Date().toISOString(),
    });

    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon("/api/inquiry/event", blob);
    } else {
      fetch("/api/inquiry/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  } catch (err) {
    // Non-blocking
  }
}
