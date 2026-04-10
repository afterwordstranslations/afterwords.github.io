"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "~/components/ThemeToggle";

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

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    <header
      ref={navRef}
      className={`body-font w-full mb-8 sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-100/80 backdrop-blur-xl shadow-lg -mx-8 lg:-mx-24 px-8 lg:px-24 py-2"
          : "py-4"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link className="title-font font shrink-0" href="/">
            <Image
              src="/logo.svg"
              className={`transition-all duration-300 ${scrolled ? "w-32 md:w-36" : "w-40 md:w-48 lg:w-2/3"}`}
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
                      : scrolled
                        ? "text-base-content/80 hover:text-warm"
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
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                scrolled
                  ? "text-base-content/80 hover:text-warm"
                  : "text-white/80 hover:text-warm"
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Get a quote — Desktop */}
            <button
              className="hidden lg:inline-flex items-center gap-2 bg-warm text-slate-900 font-semibold text-sm px-5 py-2 rounded-lg hover:bg-warm-dark hover:text-white transition-all duration-300 cursor-pointer"
              onClick={() => window.Beacon?.("open")}
            >
              Get a quote
            </button>

            {/* LinkedIn */}
            <a
              className={`transition-colors duration-200 p-1 ${
                scrolled ? "opacity-70 hover:opacity-100" : "opacity-70 hover:opacity-100"
              }`}
              href="https://www.linkedin.com/company/afterwordstranslations"
              aria-label="LinkedIn"
            >
              <Image alt="LinkedIn logo" width={50} height={50} className="w-5" src="/in.png" />
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Burger Menu — Mobile only */}
            <button
              className={`lg:hidden p-2 ${scrolled ? "text-base-content" : "text-white"}`}
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
              className={`lg:hidden mt-4 pb-4 border-t ${
                scrolled ? "border-base-300" : "border-white/10"
              }`}
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
                      className={`w-full flex items-center justify-between py-2.5 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                        scrolled ? "text-base-content/80 hover:text-warm" : "text-white/80 hover:text-warm"
                      }`}
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
                              className={`block py-2 text-sm transition-colors duration-150 ${
                                scrolled
                                  ? "text-base-content/60 hover:text-warm"
                                  : "text-white/60 hover:text-warm"
                              }`}
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
                    className={`block py-2.5 text-sm font-medium transition-colors duration-200 ${
                      scrolled ? "text-base-content/80 hover:text-warm" : "text-white/80 hover:text-warm"
                    }`}
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
                  <button
                    className="w-full bg-warm text-slate-900 font-semibold text-sm px-5 py-3 rounded-lg hover:bg-warm-dark hover:text-white transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      window.Beacon?.("open");
                      closeAll();
                    }}
                  >
                    Get a quote
                  </button>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
