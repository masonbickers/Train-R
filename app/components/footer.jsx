"use client";

import Image from "next/image";
import { useState } from "react";
import { User } from "lucide-react";

const NAV_LEFT = ["Train", "Nutrition", "Journal"];

export default function SiteHeader({ onNavClick }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleNavClick = (label) => {
    if (typeof onNavClick === "function") {
      onNavClick(label);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-black/40 backdrop-blur-lg border-b border-white/5">
      {/* MOBILE HEADER */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:hidden">
        {/* Mobile menu toggle */}
        <button
          type="button"
          className="text-white/80 text-2xl"
          onClick={() => setShowMobileMenu((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Logo */}
        <div className="flex flex-1 items-center justify-center">
          <Image
            src="/train-r-logo.png"
            alt="Train-R logo"
            width={110}
            height={26}
            className="h-7 w-auto"
            priority
          />
        </div>

        {/* Account icon — clean, no circle */}
        <button
          type="button"
          aria-label="Account"
          onClick={scrollToTop}
          className="text-white/80 hover:text-white transition p-1"
        >
          <User className="h-5 w-5" />
        </button>
      </div>

      {/* MOBILE SLIDE-DOWN MENU */}
      {showMobileMenu && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 space-y-3">
          {NAV_LEFT.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                handleNavClick(item);
                setShowMobileMenu(false);
              }}
              className="block w-full text-left text-sm text-white/80 tracking-[0.22em] uppercase py-2"
            >
              {item}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              scrollToTop();
              setShowMobileMenu(false);
            }}
            className="block w-full text-left text-sm text-white/80 tracking-[0.22em] uppercase py-2"
          >
            Account
          </button>
        </div>
      )}

      {/* DESKTOP HEADER */}
      <div className="mx-auto hidden max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6 py-3 md:grid">
        {/* Left nav */}
        <nav className="flex items-center gap-8 text-xs tracking-[0.18em] uppercase justify-self-start">
          {NAV_LEFT.map((item) => (
            <button
              key={item}
              className="text-white/70 hover:text-white transition-colors"
              type="button"
              onClick={() => handleNavClick(item)}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* Logo centre */}
        <div className="flex items-center justify-center">
          <Image
            src="/train-r-logo.png"
            alt="Train-R logo"
            width={110}
            height={26}
            className="h-7 w-auto"
            priority
          />
        </div>

        {/* Right: account + location selector */}
        <nav className="flex items-center gap-8 text-xs tracking-[0.18em] uppercase justify-self-end">
          <button
            className="text-white/70 hover:text-white transition-colors"
            type="button"
            onClick={scrollToTop}
          >
            ACCOUNT
          </button>
          <button
            className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
            type="button"
          >
            <span>UNITED KINGDOM</span>
            <span className="text-[10px] leading-none">▾</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
