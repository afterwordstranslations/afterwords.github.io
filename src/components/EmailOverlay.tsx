"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getEmail } from "~/lib/email";
import { trackEmailOverlay } from "~/lib/analytics";

// ─── Context ──────────────────────────────────────────────────────────────

interface EmailOverlayContextValue {
  openEmailOverlay: (options?: { subject?: string; body?: string }) => void;
}

const EmailOverlayContext = createContext<EmailOverlayContextValue>({
  openEmailOverlay: () => {},
});

export function useEmailOverlay() {
  return useContext(EmailOverlayContext);
}

// ─── Provider + Overlay ───────────────────────────────────────────────────

export function EmailOverlayProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mailtoParams, setMailtoParams] = useState<{
    subject?: string;
    body?: string;
  }>({});
  const pathname = usePathname();

  const openEmailOverlay = useCallback(
    (options?: { subject?: string; body?: string }) => {
      setMailtoParams(options ?? {});
      setCopied(false);
      setOpen(true);
      trackEmailOverlay("opened", pathname);
    },
    [pathname],
  );

  const close = useCallback(() => setOpen(false), []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, close]);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const email = getEmail();

  const handleOpenMailClient = () => {
    trackEmailOverlay("open_client", pathname);
    const params = new URLSearchParams();
    if (mailtoParams.subject)
      params.set("subject", mailtoParams.subject);
    if (mailtoParams.body) params.set("body", mailtoParams.body);
    const qs = params.toString();
    window.open(`mailto:${email}${qs ? `?${qs}` : ""}`, "_self");
    close();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      trackEmailOverlay("copy", pathname);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        close();
      }, 1200);
    } catch {
      // Fallback — do nothing
    }
  };

  return (
    <EmailOverlayContext.Provider value={{ openEmailOverlay }}>
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="relative bg-base-100 rounded-2xl shadow-2xl border border-base-300 p-6 sm:p-8 w-full max-w-sm"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={close}
                className="absolute top-4 right-4 text-base-content/40 hover:text-base-content transition-colors cursor-pointer"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center mb-4">
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

              <h3 className="font-[family-name:var(--font-display)] text-lg text-base-content mb-1">
                Send us an email
              </h3>
              <p className="text-sm text-base-content/50 mb-6">
                {email}
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleOpenMailClient}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-warm text-slate-900 text-sm font-semibold hover:bg-warm-dark hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  Open email app
                </button>
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-base-300 text-sm font-medium text-base-content/70 hover:border-warm hover:text-warm transition-all duration-200 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                        />
                      </svg>
                      Copy email address
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </EmailOverlayContext.Provider>
  );
}
