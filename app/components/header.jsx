"use client";

import Image from "next/image";
import { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  const [signupEmail, setSignupEmail] = useState("");
  const [signupStatus, setSignupStatus] = useState(null); // "success" | "error" | null
  const [signupError, setSignupError] = useState("");

  const handleFooterSignupSubmit = async (e) => {
    e.preventDefault();
    setSignupStatus(null);
    setSignupError("");

    const email = signupEmail.trim();

    if (!email) {
      setSignupError("Please enter your email.");
      return;
    }

    try {
      await addDoc(collection(db, "waitlist"), {
        email,
        createdAt: serverTimestamp(),
        source: "landing-footer",
      });

      setSignupStatus("success");
      setSignupEmail("");

      setTimeout(() => setSignupStatus(null), 4000);
    } catch (err) {
      console.error("Error saving email:", err);
      setSignupError("Something went wrong. Please try again.");
    }
  };

  return (
    <footer id="contact-section" className="bg-black">
      <div className="mx-auto max-w-6xl px-6 py-14 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* LEFT: Logo + Email signup */}
        <div className="w-full md:w-auto max-w-sm">
          <div className="flex items-center mb-6">
            <Image
              src="/train-r-logo.png"
              alt="Train-R logo"
              width={200}
              height={48}
              className="h-14 w-auto"
              priority
            />
          </div>

          <p className="text-sm text-white/70 mb-4">
            Sign up to get early access.
          </p>

          <form
            onSubmit={handleFooterSignupSubmit}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="flex-1 rounded-full bg-white/5 px-4 py-2 text-sm text-white placeholder-white/40 border border-white/10 focus:border-white/30 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-white text-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] hover:bg-white/80 transition"
              >
                Join
              </button>
            </div>

            {signupStatus === "success" && (
              <p
                className="text-xs font-semibold italic"
                style={{ color: "#E6FF3B" }}
              >
                You&apos;re on the list. We&apos;ll be in touch soon.
              </p>
            )}

            {signupError && (
              <p className="text-xs text-red-400">{signupError}</p>
            )}
          </form>
        </div>

        {/* RIGHT SECTIONS */}
        <div className="flex flex-1 flex-col gap-10 sm:flex-row sm:justify-end sm:gap-16">
          {/* SUPPORT */}
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-white/60 mb-3">
              Support
            </p>
            <ul className="space-y-1 text-sm text-white/70">
              <li>
                <a href="#contact-section" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@train-r.com"
                  className="hover:text-white"
                >
                  Email support
                </a>
              </li>
              <li>
                <a href="#about-section" className="hover:text-white">
                  About Train-R
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="sm:pl-10 sm:border-l sm:border-white/10">
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-white/60 mb-3">
              Legal
            </p>
            <ul className="space-y-1 text-sm text-white/70">
              <li>
                <a href="/privacy" className="hover:text-white">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-white">
                  Cookie policy
                </a>
              </li>
              <li>
                <a href="/data-security" className="hover:text-white">
                  Data &amp; security
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom strip */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-3 text-[7px] sm:flex-row tracking-[0.16em] uppercase text-white/50">
          <p>Copyright © {year}, Train-R | All rights reserved</p>
          <div className="flex items-center gap-1">
            <a href="#" className="hover:text-white">
              {/* Social link placeholder */}
            </a>
            <a href="#" className="hover:text-white">
              {/* Social link placeholder */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
