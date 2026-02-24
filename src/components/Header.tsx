"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "~/components/ThemeToggle";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeaderProps {
  navItems: NavItem[];
}

export function Header({ navItems }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="text-gray-100 body-font w-full mb-8">
      <div className="container mx-auto">
        <div className="mt-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link className="title-font font" href="/">
            <Image
              src="/logo.svg"
              className="w-40 md:w-48 lg:w-2/3"
              width={312}
              height={67}
              alt="Afterwords Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="text-white py-1 link"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side: Burger (mobile) / empty (desktop), LinkedIn, Theme Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Burger Menu - Mobile only */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* LinkedIn */}
            <a
              className="text-white p-1"
              href="https://www.linkedin.com/company/afterwordstranslations"
              aria-label="LinkedIn"
            >
              <Image
                alt="LinkedIn logo"
                width={50}
                height={50}
                className="w-6"
                src="/in.png"
              />
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="text-white py-2 link"
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
