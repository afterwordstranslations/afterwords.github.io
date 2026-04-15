/**
 * Shared Google Analytics event helpers.
 *
 * Every custom event flows through `trackEvent` which guards against
 * missing gtag (e.g. local dev, blocked scripts).
 */

export function trackEvent(
  action: string,
  params?: Record<string, string | number>,
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
}

// ─── CTA clicks ──────────────────────────────────────────────────────────

export function trackCTA(label: string, sourcePage: string) {
  trackEvent("cta_click", {
    event_category: "engagement",
    cta_text: label,
    source_page: sourcePage,
  });
}

// ─── Outbound / contact clicks ───────────────────────────────────────────

export function trackContact(
  method: "email" | "whatsapp" | "linkedin" | "helpscout",
  sourcePage: string,
) {
  trackEvent("contact_click", {
    event_category: "contact",
    method,
    source_page: sourcePage,
  });
}

export function trackSocial(
  network: "instagram" | "linkedin" | "facebook",
  sourcePage: string,
) {
  trackEvent("social_click", {
    event_category: "outbound",
    network,
    source_page: sourcePage,
  });
}

// ─── Email overlay funnel ────────────────────────────────────────────────

export function trackEmailOverlay(
  action: "opened" | "copy" | "open_client",
  sourcePage: string,
) {
  trackEvent("email_overlay", {
    event_category: "contact",
    action,
    source_page: sourcePage,
  });
}

// ─── Blog engagement ─────────────────────────────────────────────────────

export function trackBlogClick(
  slug: string,
  context: "listing" | "featured" | "related",
) {
  trackEvent("blog_post_click", {
    event_category: "blog",
    slug,
    context,
  });
}

// ─── Quote wizard (superset of the old trackQuoteEvent) ──────────────────

export function trackQuoteEvent(
  action: string,
  params?: Record<string, string | number>,
) {
  trackEvent(action, {
    event_category: "quote_wizard",
    ...params,
  });
}
