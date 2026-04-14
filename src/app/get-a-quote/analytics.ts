export function trackQuoteEvent(
  action: string,
  params?: Record<string, string | number>,
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: "quote_wizard",
      ...params,
    });
  }
}
