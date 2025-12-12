"use client";

import Image from "next/image";
import { useState } from "react";
import { User } from "lucide-react";

/* ───────── VISUAL TOKENS ───────── */
const ACCENT = "#E6FF3B";
const SILVER = "#E1E3E8";

export default function PrivacyPage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Footer signup state
  const [signupEmail, setSignupEmail] = useState("");
  const [signupStatus, setSignupStatus] = useState(null);
  const [signupError, setSignupError] = useState("");

  const year = new Date().getFullYear();

  /* Scroll helper */
  const handleNavClick = (item) => {
    if (item === "Contact") {
      const el = document.getElementById("contact-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Footer signup handler */
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setSignupError("");
    setSignupStatus(null);

    if (!signupEmail.trim()) {
      setSignupError("Please enter your email.");
      return;
    }
    setSignupStatus("success");
    setSignupEmail("");
  };

  return (
    <main className="min-h-screen bg-black text-slate-100">
      {/* ───────── HEADER ───────── */}
      <header className="fixed inset-x-0 top-0 z-30 bg-black/40 backdrop-blur-lg border-b border-white/5">
        {/* MOBILE HEADER */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:hidden">
          <button
            type="button"
            className="text-white/80 text-2xl"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            ☰
          </button>

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

          <button
            type="button"
            aria-label="Account"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white/80 hover:text-white transition p-1"
          >
            <User className="h-5 w-5" />
          </button>
        </div>

        {/* MOBILE MENU */}
        {showMobileMenu && (
          <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 space-y-3">
            <button
              type="button"
              onClick={() => {
                handleNavClick("Contact");
                setShowMobileMenu(false);
              }}
              className="block text-left text-sm text-white/80 tracking-[0.22em] uppercase py-2"
            >
              Contact
            </button>
          </div>
        )}

        {/* DESKTOP HEADER */}
        <div className="mx-auto hidden max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6 py-3 md:grid">
          <nav className="flex items-center gap-8 text-xs uppercase tracking-[0.18em]">
            <button
              type="button"
              onClick={() => handleNavClick("Contact")}
              className="text-white/70 hover:text-white transition-colors"
            >
              CONTACT
            </button>
          </nav>

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

          <nav className="flex items-center gap-8 text-xs tracking-[0.18em] uppercase justify-self-end">
            <button
              className="text-white/70 hover:text-white transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              ACCOUNT
            </button>
          </nav>
        </div>
      </header>

      {/* ───────── CONTENT WRAPPER ───────── */}
      <div className="mx-auto max-w-4xl px-6 py-32 md:py-36">

        {/* Header */}
        <header className="mb-10 border-b border-slate-800 pb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Last updated: <span className="text-slate-200">6 December 2025</span>
          </p>
        </header>

        {/* INTRO */}
        <section className="space-y-4 text-sm leading-relaxed text-slate-200">
          <p>
            This Privacy Policy explains how <strong>Train-R</strong> (“we”,
            “us”, “our”) collects, uses, and protects your information when you
            use our services and when you connect your Garmin account or other
            integrated services.
          </p>
          <p>
            By using Train-R and authorising us to access your Garmin data, you
            agree to the practices described in this policy.
          </p>
        </section>

        {/* SECTION 1 */}
        <Section title="1. Who we are">
          <p><strong>Controller:</strong> Mason Bickers</p>
          <p><strong>Service name:</strong> Train-R</p>
          <p>
            <strong>Website:</strong>{" "}
            <a href="https://www.train-r.com"
               className="underline decoration-slate-500 underline-offset-4 hover:text-white">
              https://www.train-r.com
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@train-r.com"
               className="underline decoration-slate-500 underline-offset-4 hover:text-white">
              info@train-r.com
            </a>
          </p>
          <p className="mt-3">
            We are responsible for the processing of your personal data in
            connection with Train-R.
          </p>
        </Section>

        {/* SECTION 2 */}
        <Section title="2. Data we collect">
          <p className="mb-2">
            When you connect your Garmin account to Train-R, we receive data via
            Garmin APIs. Depending on your authorisation, this may include:
          </p>

          <Subheading>Identity &amp; account data</Subheading>
          <ul className="list-disc space-y-1 pl-5">
            <li>Garmin user ID</li>
            <li>Display name</li>
            <li>Email address (if shared)</li>
          </ul>

          <Subheading className="mt-4">Activity &amp; fitness data</Subheading>
          <ul className="list-disc space-y-1 pl-5">
            <li>Activity type</li>
            <li>Distance, duration, pace, cadence</li>
            <li>Heart-rate data</li>
            <li>GPS route data</li>
            <li>Calories, elevation, steps</li>
            <li>Training load & intensity</li>
          </ul>

          <Subheading className="mt-4">Device & technical data</Subheading>
          <ul className="list-disc space-y-1 pl-5">
            <li>Device type / model</li>
            <li>Sync times and logs</li>
          </ul>

          <p className="mt-2">
            We <strong>do not</strong> receive your Garmin password or payment
            details.
          </p>

          <p className="mt-2">
            We may also collect usage analytics, notes, training goals, and any
            information you enter manually.
          </p>
        </Section>

        {/* SECTION 3 */}
        <Section title="3. How we use your data">
          <p className="mb-2">
            We use your Garmin and account data to operate and improve Train-R:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Operate and provide the Train-R service</li>
            <li>Display and sync your training history</li>
            <li>Generate personalised insights and recommendations</li>
            <li>Analyse performance trends</li>
            <li>Personalise training plans</li>
            <li>Provide customer support</li>
            <li>Maintain system security</li>
            <li>Comply with Garmin API terms</li>
          </ul>

          <p className="mt-3">
            We may use anonymised data for analytics and research.
            We <strong>do not sell</strong> your data.
          </p>
        </Section>

        {/* SECTION 4 */}
        <Section title="4. Legal bases for processing (UK / EU)">
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Contract:</strong> providing the Train-R service</li>
            <li>
              <strong>Consent:</strong> Garmin integration (you can withdraw any time)
            </li>
            <li>
              <strong>Legitimate interests:</strong> improving service & security
            </li>
          </ul>
        </Section>

        {/* SECTION 5 */}
        <Section title="5. How we share your data">
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Service providers</strong> (cloud, analytics, email)</li>
            <li><strong>Garmin</strong> where required for API use</li>
            <li><strong>Legal authorities</strong> if required by law</li>
          </ul>
          <p className="mt-3">
            We never share identifiable fitness data for marketing.
          </p>
        </Section>

        {/* SECTION 6 */}
        <Section title="6. Data storage, security and retention">
          <p>
            Data is stored securely with encryption and safeguards.
            Garmin data is retained while your account is active.
          </p>

          <p className="mt-3 font-semibold">Retention</p>
          <ul className="list-disc pl-5">
            <li>Activity data stays while your account is active</li>
            <li>Minimal logs may remain for debugging/security</li>
          </ul>

          <p className="mt-3">
            You may request deletion or disconnect Garmin at any time.
          </p>
        </Section>

        {/* SECTION 7 */}
        <Section title="7. Your rights">
          <p>You may have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access your data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion</li>
            <li>Restrict processing</li>
            <li>Object to processing</li>
            <li>Request data portability</li>
          </ul>

          <p className="mt-3">
            Contact:{" "}
            <a
              href="mailto:info@train-r.com"
              className="underline decoration-slate-500 hover:text-white"
            >
              info@train-r.com
            </a>
          </p>
        </Section>

        {/* SECTION 8 */}
        <Section title="8. Disconnecting Garmin or deleting data">
          <p>
            You may disconnect Garmin anytime via Garmin Connect or Train-R.
            After disconnecting, no new data will be received.
          </p>
          <p className="mt-3">
            To delete stored Garmin data or your account, email:{" "}
            <a
              href="mailto:info@train-r.com"
              className="underline decoration-slate-500 hover:text-white"
            >
              info@train-r.com
            </a>
          </p>
        </Section>

        {/* SECTION 9 */}
        <Section title="9. International transfers">
          <p>
            Your data may be processed outside your home country.
            We apply appropriate safeguards where required.
          </p>
        </Section>

        {/* SECTION 10 */}
        <Section title="10. Children">
          <p>
            Train-R is not intended for children under 16.
            We do not knowingly collect data from children.
          </p>
        </Section>

        {/* SECTION 11 */}
        <Section title="11. Changes to this policy">
          <p>
            We may update this Policy. When we do, we update the "Last updated"
            date and may notify you via in-app alerts or email.
          </p>
        </Section>

        {/* SECTION 12 */}
        <Section title="12. Contact us">
          <p>
            <strong>Train-R</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:info@train-r.com"
              className="underline decoration-slate-500 underline-offset-4 hover:text-white"
            >
              info@train-r.com
            </a>
            <br />
            Website:{" "}
            <a
              href="https://www.train-r.com"
              className="underline decoration-slate-500 underline-offset-4 hover:text-white"
            >
              https://www.train-r.com
            </a>
          </p>
        </Section>

        <div
          className="mt-10 h-px w-full"
          style={{ background: `linear-gradient(to right, transparent, ${ACCENT}, transparent)` }}
        />
      </div>

      {/* ───────── FOOTER ───────── */}
      <footer id="contact-section" className="bg-black border-t border-white/5 mt-20">
        <div className="mx-auto max-w-6xl px-6 py-14 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          
          {/* LEFT: Signup */}
          <div className="w-full max-w-sm">
            <Image
              src="/train-r-logo.png"
              alt="Train-R logo"
              width={200}
              height={48}
              className="h-14 w-auto mb-6"
            />

            <p className="text-sm text-white/70 mb-4">
              Sign up to get early access.
            </p>

            <form onSubmit={handleSignupSubmit} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="flex-1 rounded-full bg-white/5 px-4 py-2 text-sm text-white placeholder-white/40 border border-white/10 focus:border-white/30"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white text-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em]"
                >
                  Join
                </button>
              </div>

              {signupStatus === "success" && (
                <p className="text-xs font-semibold italic mt-1" style={{ color: ACCENT }}>
                  You&apos;re on the list. We&apos;ll be in touch soon.
                </p>
              )}

              {signupError && (
                <p className="text-xs text-red-400 mt-1">{signupError}</p>
              )}
            </form>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex flex-col sm:flex-row gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] uppercase text-white/60 mb-3">
                Support
              </p>
              <ul className="space-y-1 text-sm text-white/70">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Use</a></li>
                <li><a href="/cookies" className="hover:text-white">Cookies</a></li>
                <li><a href="mailto:info@train-r.com" className="hover:text-white">Email support</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-3 text-[9px] uppercase text-white/50 tracking-[0.16em] flex justify-between">
            <p>© {year} Train-R — All rights reserved</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ───────── REUSABLE COMPONENTS ───────── */

function Section({ title, children }) {
  return (
    <section className="mt-10 border-t border-slate-800 pt-8">
      <h2
        className="text-lg font-semibold md:text-xl"
        style={{ color: SILVER }}
      >
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-200">
        {children}
      </div>
    </section>
  );
}

function Subheading({ children, className = "" }) {
  return (
    <h3
      className={`text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 ${className}`}
    >
      {children}
    </h3>
  );
}
