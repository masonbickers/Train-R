"use client";

const ACCENT = "#E6FF3B";
const SILVER = "#E1E3E8";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
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

        {/* Intro */}
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

        {/* Section 1 */}
        <Section title="1. Who we are">
          <p>
            <span className="font-semibold">Controller:</span> Mason Bickers
          </p>
          <p>
            <span className="font-semibold">Service name:</span> Train-R
          </p>
          <p>
            <span className="font-semibold">Website:</span>{" "}
            <a
              href="https://www.train-r.com"
              className="underline decoration-slate-500 underline-offset-4 hover:text-white"
            >
              https://www.train-r.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:info@train-r.com"
              className="underline decoration-slate-500 underline-offset-4 hover:text-white"
            >
              info@train-r.com
            </a>
          </p>
          <p className="mt-3">
            We are responsible for the processing of your personal data in
            connection with Train-R.
          </p>
        </Section>

        {/* Section 2 */}
        <Section title="2. Data we collect">
          <p className="mb-2">
            When you connect your Garmin account to Train-R, we receive data via
            Garmin APIs. Depending on your authorisation, this may include:
          </p>

          <Subheading>Identity &amp; account data</Subheading>
          <ul className="list-disc space-y-1 pl-5">
            <li>Garmin user ID</li>
            <li>Display name (if shared)</li>
            <li>Email address (if provided)</li>
          </ul>

          <Subheading className="mt-4">Activity &amp; fitness data</Subheading>
          <ul className="list-disc space-y-1 pl-5">
            <li>Activity type (e.g. run, strength, Hyrox)</li>
            <li>Distance, duration, pace, cadence</li>
            <li>Heart-rate data</li>
            <li>GPS route data associated with activities</li>
            <li>Calories, elevation, steps and other metrics</li>
            <li>Training load and intensity metrics</li>
          </ul>

          <Subheading className="mt-4">Device and technical data</Subheading>
          <ul className="list-disc space-y-1 pl-5">
            <li>Device type / model</li>
            <li>Metadata such as sync times and basic logs</li>
          </ul>

          <p className="mt-4">
            We <strong>do not</strong> receive your Garmin password or payment
            details.
          </p>

          <p className="mt-2">
            We may also collect usage analytics from your interaction with
            Train-R (for example, which screens you use most), as well as any
            information you enter manually, such as notes, training goals, and
            session logs.
          </p>
        </Section>

        {/* Section 3 */}
        <Section title="3. How we use your data">
          <p className="mb-2">
            We use your Garmin and account data to operate and improve the
            Train-R service, including to:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Provide and operate the Train-R app and related services</li>
            <li>Sync, display and organise your activity history</li>
            <li>
              Generate training insights, metrics, and recommendations
              personalised to you
            </li>
            <li>Analyse performance trends over time</li>
            <li>Personalise your training blocks and plan structure</li>
            <li>Provide customer support and respond to enquiries</li>
            <li>
              Maintain the security, integrity and performance of our systems
            </li>
            <li>
              Comply with Garmin API requirements and other applicable terms
            </li>
          </ul>
          <p className="mt-3">
            We may use aggregated and anonymised data (which does not identify
            you) to analyse usage patterns, improve our services, and for
            research and statistical purposes.
          </p>
          <p className="mt-3">
            We <strong>do not sell</strong> your personal data.
          </p>
        </Section>

        {/* Section 4 */}
        <Section title="4. Legal bases for processing (UK / EU)">
          <p className="mb-2">
            If you are in the UK or EU, we rely on the following legal bases
            under UK GDPR / EU GDPR:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Performance of a contract</span>{" "}
              – where processing is necessary to provide the Train-R service you
              have requested.
            </li>
            <li>
              <span className="font-semibold">Consent</span> – for example, when
              you connect your Garmin account and grant Train-R access to your
              Garmin data. You can withdraw this consent at any time by
              disconnecting Train-R from Garmin.
            </li>
            <li>
              <span className="font-semibold">Legitimate interests</span> – such
              as improving the service, enhancing user experience, and ensuring
              security, provided these interests are not overridden by your
              rights.
            </li>
          </ul>
        </Section>

        {/* Section 5 */}
        <Section title="5. How we share your data">
          <p className="mb-2">
            We may share your data with carefully selected third parties in the
            following circumstances:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">
                Service providers (processors)
              </span>{" "}
              – such as cloud hosting providers, analytics services, logging and
              monitoring tools, and email/notification platforms. These
              providers only process your data on our instructions and are
              subject to appropriate contractual safeguards.
            </li>
            <li>
              <span className="font-semibold">Garmin</span> – where required by
              Garmin API functionality or to maintain the integration, and only
              in accordance with Garmin’s terms.
            </li>
            <li>
              <span className="font-semibold">Legal and compliance</span> – if
              we are required to do so by law, regulation or valid legal
              process, or to protect our rights, users, or the security of the
              service.
            </li>
          </ul>
          <p className="mt-3">
            Train-R never shares identifiable fitness or activity data with
            third parties for their own marketing purposes.
          </p>
        </Section>

        {/* Section 6 */}
        <Section title="6. Data storage, security and retention">
          <p>
            Your data is stored on secure servers using encrypted connections
            (such as HTTPS/TLS) and protected by technical and organisational
            measures, including access controls, monitoring, and regular
            backups.
          </p>
          <p className="mt-3 font-semibold">Retention</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Garmin activity and training data is retained while your Train-R
              account remains active.
            </li>
            <li>
              Minimal logs may be retained for a longer period for security,
              debugging and audit purposes.
            </li>
          </ul>
          <p className="mt-3">
            If you disconnect Garmin or request deletion of your data, we will
            delete or irreversibly anonymise your personal data within a
            reasonable period, subject to any legal or regulatory requirements
            to retain specific information.
          </p>
        </Section>

        {/* Section 7 */}
        <Section title="7. Your rights">
          <p className="mb-2">
            Depending on your location and applicable law, you may have the
            following rights:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Access</span> – to request a copy
              of the personal data we hold about you.
            </li>
            <li>
              <span className="font-semibold">Rectification</span> – to ask us
              to correct inaccurate or incomplete data.
            </li>
            <li>
              <span className="font-semibold">Erasure</span> – to request that
              we delete your personal data in certain circumstances.
            </li>
            <li>
              <span className="font-semibold">Restriction</span> – to ask us to
              limit the processing of your data in certain situations.
            </li>
            <li>
              <span className="font-semibold">Objection</span> – to object to
              processing based on legitimate interests.
            </li>
            <li>
              <span className="font-semibold">Portability</span> – to request
              that we provide your data in a structured, commonly used and
              machine-readable format, where technically feasible.
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:info@train-r.com"
              className="underline decoration-slate-500 underline-offset-4 hover:text-white"
            >
              info@train-r.com
            </a>
            . We may need to verify your identity before responding.
          </p>
        </Section>

        {/* Section 8 */}
        <Section title="8. Disconnecting Garmin or deleting your data">
          <p>
            You may disconnect Train-R from Garmin at any time via your Garmin
            account settings (Garmin Connect) or within Train-R (where this
            option is available). Once disconnected, we will no longer receive
            new data from Garmin.
          </p>
          <p className="mt-3">
            To request deletion of stored Garmin data or your Train-R account,
            please contact us at{" "}
            <a
              href="mailto:info@train-r.com"
              className="underline decoration-slate-500 underline-offset-4 hover:text-white"
            >
              info@train-r.com
            </a>
            . We will process your request within a reasonable timeframe,
            subject to any legal obligations to retain certain records.
          </p>
        </Section>

        {/* Section 9 */}
        <Section title="9. International data transfers">
          <p>
            Your data may be processed and stored in countries outside your own,
            including countries that may not have the same level of data
            protection laws as those in your jurisdiction.
          </p>
          <p className="mt-3">
            Where required, we implement appropriate safeguards (such as
            Standard Contractual Clauses or equivalent mechanisms) to ensure
            that your personal data is protected in accordance with applicable
            law.
          </p>
        </Section>

        {/* Section 10 */}
        <Section title="10. Children">
          <p>
            Train-R is not intended for children under the age of 16, and we do
            not knowingly collect personal data from children under 16. If you
            believe that a child has provided us with personal information,
            please contact us so that we can take appropriate action.
          </p>
        </Section>

        {/* Section 11 */}
        <Section title="11. Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. When we make
            material changes, we will update the “Last updated” date at the top
            of this page and, where appropriate, notify you through the app,
            email, or other communication channels.
          </p>
        </Section>

        {/* Section 12 */}
        <Section title="12. Contact us">
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your data, please contact:
          </p>
          <p className="mt-3">
            <span className="font-semibold">Train-R</span>
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

        {/* Subtle accent line */}
        <div
          className="mt-10 h-px w-full"
          style={{ background: `linear-gradient(to right, transparent, ${ACCENT}, transparent)` }}
        />
        <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-slate-500">
          Train-R · AI Powered Training
        </p>
      </div>
    </main>
  );
}

/* ---------- Reusable layout components ---------- */

function Section({ title, children }) {
  return (
    <section className="mt-10 border-t border-slate-800 pt-8">
      <h2
        className="text-lg font-semibold text-slate-50 md:text-xl"
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
