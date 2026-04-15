"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "~/components/ThemeToggle";
import { getEmail } from "~/lib/email";
import { useEmailOverlay } from "~/components/EmailOverlay";
import { trackContact, trackCTA } from "~/lib/analytics";

interface NavCategory {
  label: string;
  items: { label: string; href: string }[];
}

const navCategories: NavCategory[] = [
  {
    label: "Services",
    items: [
      { label: "Certified Translations", href: "/certified-translations" },
      { label: "Interpreting", href: "/interpreting" },
      { label: "Subtitling", href: "/audiovisual-translation" },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "Pharmaceutical", href: "/pharmaceutical-translation" },
      { label: "Maritime", href: "/maritime-translation" },
      { label: "Academic", href: "/academic-translation" },
    ],
  },
  {
    label: "About",
    items: [
      { label: "Our Team", href: "/#team" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
];

// ─── Compact Scroll Bar ───────────────────────────────────────────────────

function CompactBar({ visible, onEmailClick, pathname }: { visible: boolean; onEmailClick: () => void; pathname: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsDark(
        document.documentElement.getAttribute("data-theme")?.includes("dark") ?? false,
      );
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[100] bg-base-100/90 backdrop-blur-xl shadow-md border-b border-base-300 px-8 lg:px-24"
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          exit={{ y: -60 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="container mx-auto flex items-center justify-between py-2.5">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.svg"
                className={`w-28 md:w-36 ${isDark ? "" : "invert"}`}
                width={312}
                height={67}
                alt="Afterwords Logo"
              />
            </Link>

            {/* Contact links */}
            <div className="flex items-center gap-3 md:gap-5 text-xs">
              <button
                onClick={onEmailClick}
                className="flex items-center gap-1.5 text-base-content/70 hover:text-warm transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="hidden sm:inline">{getEmail()}</span>
              </button>
              <a
                href="https://wa.me/306988854427"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-base-content/70 hover:text-[#25D366] transition-colors duration-200"
                onClick={() => trackContact("whatsapp", pathname)}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="hidden md:inline">+30 698 885 4427</span>
              </a>
              <a
                href="https://www.linkedin.com/company/afterwordstranslations"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 text-base-content/70 hover:text-base-content transition-colors duration-200"
                aria-label="LinkedIn"
                onClick={() => trackContact("linkedin", pathname)}
              >
                <Image alt="LinkedIn" width={14} height={14} src="/in.png" className={`w-3.5 h-3.5 opacity-70 ${isDark ? "" : "invert"}`} />
              </a>

              {/* CTA */}
              <Link
                href="/get-a-quote"
                className="inline-flex items-center bg-warm text-slate-900 font-semibold text-xs px-4 py-1.5 rounded-lg hover:bg-warm-dark hover:text-white transition-all duration-300"
                onClick={() => trackCTA("Get a quote", pathname)}
              >
                Get a quote
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const { openEmailOverlay } = useEmailOverlay();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    if (!openDropdown) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [openDropdown]);

  const toggleDropdown = useCallback((label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }, []);

  const closeAll = useCallback(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  }, []);

  const ChevronIcon = ({ open }: { open: boolean }) => (
    <svg
      className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <>
    {/* Compact bar — slides in when scrolled past header */}
    <CompactBar visible={scrolled} onEmailClick={() => openEmailOverlay()} pathname={pathname} />

    <header
      ref={navRef}
      className="body-font w-full mb-8 py-4"
    >
      {/* ── Utility bar ── */}
      <div>
        <div className="container mx-auto flex items-center justify-between text-xs mb-3 pb-3 border-b border-white/10">
          <button
            onClick={() => openEmailOverlay()}
            className="flex items-center gap-1.5 text-white/60 hover:text-warm transition-colors duration-200 cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            {getEmail()}
          </button>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/306988854427"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/60 hover:text-[#25D366] transition-colors duration-200"
              onClick={() => trackContact("whatsapp", pathname)}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="hidden sm:inline">+30 698 885 4427</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <a
              href="https://www.linkedin.com/company/afterwordstranslations"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
              onClick={() => trackContact("linkedin", pathname)}
            >
              <Image alt="LinkedIn" width={14} height={14} src="/in.png" className="w-3.5 h-3.5 opacity-70" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link className="title-font font shrink-0" href="/">
            <Image
              src="/logo.svg"
              className="transition-all duration-300 w-40 md:w-48 lg:w-2/3"
              width={312}
              height={67}
              alt="Afterwords Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navCategories.map((category) => (
              <div key={category.label} className="relative">
                <button
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg cursor-pointer ${
                    openDropdown === category.label
                      ? "text-warm"
                      : "text-white/80 hover:text-warm"
                  }`}
                  onClick={() => toggleDropdown(category.label)}
                >
                  {category.label}
                  <ChevronIcon open={openDropdown === category.label} />
                </button>

                <AnimatePresence>
                  {openDropdown === category.label && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 min-w-[220px] bg-base-100 border border-base-300 shadow-xl rounded-xl overflow-hidden"
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="py-2">
                        {category.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-base-content/70 hover:text-warm hover:bg-base-200 transition-colors duration-150"
                            onClick={closeAll}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Blog — direct link */}
            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-white/80 hover:text-warm transition-colors duration-200 rounded-lg"
            >
              Blog
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Get a quote — Desktop */}
            <Link
              href="/get-a-quote"
              className="hidden lg:inline-flex items-center gap-2 bg-warm text-slate-900 font-semibold text-sm px-5 py-2 rounded-lg hover:bg-warm-dark hover:text-white transition-all duration-300"
              onClick={() => trackCTA("Get a quote", pathname)}
            >
              Get a quote
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Burger Menu — Mobile only */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                if (mobileMenuOpen) setMobileExpanded(null);
              }}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="lg:hidden mt-4 pb-4 border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-0 pt-4">
                {navCategories.map((category, i) => (
                  <motion.div
                    key={category.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-white/80 hover:text-warm transition-colors duration-200 cursor-pointer"
                      onClick={() =>
                        setMobileExpanded((prev) => (prev === category.label ? null : category.label))
                      }
                    >
                      {category.label}
                      <ChevronIcon open={mobileExpanded === category.label} />
                    </button>

                    <AnimatePresence>
                      {mobileExpanded === category.label && (
                        <motion.div
                          className="pl-4 overflow-hidden"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          {category.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block py-2 text-sm text-white/60 hover:text-warm transition-colors duration-150"
                              onClick={closeAll}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Blog — direct link */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navCategories.length * 0.05 }}
                >
                  <Link
                    href="/blog"
                    className="block py-2.5 text-sm font-medium text-white/80 hover:text-warm transition-colors duration-200"
                    onClick={closeAll}
                  >
                    Blog
                  </Link>
                </motion.div>

                {/* Get a quote — Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navCategories.length + 1) * 0.05 }}
                  className="mt-4"
                >
                  <Link
                    href="/get-a-quote"
                    className="block w-full text-center bg-warm text-slate-900 font-semibold text-sm px-5 py-3 rounded-lg hover:bg-warm-dark hover:text-white transition-all duration-300"
                    onClick={() => { trackCTA("Get a quote", pathname); closeAll(); }}
                  >
                    Get a quote
                  </Link>
                </motion.div>

              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
    </>
  );
}
