"use client";

import { trackQuoteEvent } from "../../analytics";
import { useEmailOverlay } from "~/components/EmailOverlay";

/**
 * Renders the 3 contact method cards (Email, WhatsApp, Live Chat).
 * No section wrapper or heading — the parent controls layout context.
 */
export function DirectContact({ className = "" }: { className?: string }) {
  const { openEmailOverlay } = useEmailOverlay();

  const handleDirectEmail = () => {
    trackQuoteEvent("direct_contact_click", { method: "email" });
    openEmailOverlay();
  };

  const handleDirectWhatsApp = () => {
    trackQuoteEvent("direct_contact_click", { method: "whatsapp" });
    window.open("https://wa.me/306988854427", "_blank");
  };

  const handleDirectBeacon = () => {
    trackQuoteEvent("direct_contact_click", { method: "helpscout" });
    window.Beacon?.("open");
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}
    >
      {/* WhatsApp — order-first on mobile */}
      <button
        onClick={handleDirectWhatsApp}
        className="order-first md:order-2 group p-6 rounded-2xl bg-base-100 border-2 border-base-300 hover:border-[#25D366] text-left transition-all duration-300 cursor-pointer hover:shadow-lg"
      >
        <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center mb-4 group-hover:bg-[#25D366]/20 transition-colors">
          <svg
            className="w-6 h-6 text-[#25D366]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
        <h3 className="font-semibold text-base-content mb-1">
          Chat on WhatsApp
        </h3>
        <p className="text-xs text-base-content/50">
          Quick questions? Start a conversation and get a fast response.
        </p>
        <span className="inline-block mt-3 text-xs font-medium text-[#25D366] md:hidden">
          Popular on mobile
        </span>
      </button>

      {/* Email */}
      <button
        onClick={handleDirectEmail}
        className="order-2 md:order-1 group p-6 rounded-2xl bg-base-100 border-2 border-base-300 hover:border-warm text-left transition-all duration-300 cursor-pointer hover:shadow-lg"
      >
        <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center mb-4 group-hover:bg-warm/20 transition-colors">
          <svg
            className="w-6 h-6 text-warm"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <h3 className="font-semibold text-base-content mb-1">
          Send us an email
        </h3>
        <p className="text-xs text-base-content/50">
          Write to us at your own pace — we typically reply within a few hours.
        </p>
      </button>

      {/* HelpScout — opens Beacon */}
      <button
        onClick={handleDirectBeacon}
        className="order-3 group p-6 rounded-2xl bg-base-100 border-2 border-base-300 hover:border-blue-500 text-left transition-all duration-300 cursor-pointer hover:shadow-lg"
      >
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>
        </div>
        <h3 className="font-semibold text-base-content mb-1">Live chat</h3>
        <p className="text-xs text-base-content/50">
          Talk to our team right here — we&apos;re happy to help.
        </p>
      </button>
    </div>
  );
}
