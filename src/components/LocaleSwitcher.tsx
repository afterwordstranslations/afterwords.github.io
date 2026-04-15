"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "~/i18n/navigation";

export function LocaleSwitcher({ variant = "auto" }: { variant?: "auto" | "dark" }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [theme, setTheme] = useState<"afterwords-light" | "afterwords-dark">("afterwords-light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "afterwords-light" | "afterwords-dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "afterwords-dark" : "afterwords-light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "afterwords-light" ? "afterwords-dark" : "afterwords-light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  const isDark = variant === "dark";
  const localeText = isDark ? "text-white/60 hover:text-white" : "text-base-content/60 hover:text-base-content";
  const separator = isDark ? "bg-white/25" : "bg-base-content/25";
  const themeBtn = isDark
    ? "text-white/60 hover:text-white"
    : "text-base-content/60 hover:text-base-content";

  const otherLocale = locale === "en" ? "el" : "en";
  const otherLabel = locale === "en" ? "Ελληνικά" : "English";

  return (
    <div className="flex items-center gap-2.5 text-sm">
      <button
        onClick={() => switchLocale(otherLocale)}
        className={`flex items-center gap-1.5 px-2 py-2 cursor-pointer transition-colors duration-200 ${localeText}`}
        aria-label={otherLabel}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.528.38-2.97 1.05-4.228" />
        </svg>
        {otherLabel}
      </button>
      <span className={`w-px h-4 ${separator}`} />
      <button
        onClick={toggleTheme}
        className={`p-2.5 cursor-pointer transition-colors duration-200 ${themeBtn}`}
        aria-label="Toggle theme"
      >
        {theme === "afterwords-light" ? (
          <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </button>
    </div>
  );
}
