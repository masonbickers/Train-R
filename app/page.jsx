"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ACCENT = "#E6FF3B";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-slate-100">
      {/* ---------- NAV ---------- */}
      <header className="fixed top-0 left-0 right-0 z-30 border-b border-white/5 bg-black/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div
              className="relative h-8 w-8 overflow-hidden rounded-xl border border-white/10 bg-black"
              style={{ boxShadow: "0 0 24px rgba(230,255,59,0.4)" }}
            >
              <Image
                src="/Train-R.png"
                alt="Train-R logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-sm font-semibold text-slate-200">
              Train-R
            </span>
          </div>

          <nav className="hidden gap-6 text-xs font-medium text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#nutrition" className="hover:text-white">
              Nutrition
            </a>
            <a href="#how" className="hover:text-white">
              How it works
            </a>
            <a href="#pillars" className="hover:text-white">
              Training pillars
            </a>
            <a href="#journal" className="hover:text-white">
              Journal &amp; coach
            </a>
          </nav>

          <a
            href="#cta"
            className="rounded-full px-4 py-2 text-xs font-semibold text-black"
            style={{ backgroundColor: ACCENT }}
          >
            Get early access
          </a>
        </div>
      </header>

      {/* space for fixed nav */}
      <div className="pt-20" />

      {/* ---------- HERO ---------- */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-white/5"
      >
        {/* neon blobs */}
        <motion.div
          className="pointer-events-none absolute -left-24 top-[-10rem] h-72 w-72 rounded-full blur-3xl"
          style={{ background: ACCENT, opacity: 0.18 }}
          animate={{ opacity: [0.12, 0.25, 0.12], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl"
          animate={{ opacity: [0.05, 0.2, 0.05], scale: [1.05, 0.95, 1.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 md:flex-row md:items-center md:py-24">
          {/* left */}
          <div className="relative z-10 max-w-xl">
            <motion.p
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-200"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              AI-powered hybrid training
            </motion.p>

            <motion.h1
              className="mb-4 text-4xl font-semibold leading-tight md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              Train like an <span className="text-slate-300">athlete,</span>
              <br />
              think like a <span style={{ color: ACCENT }}>coach.</span>
            </motion.h1>

            <motion.p
              className="mb-8 text-sm leading-relaxed text-slate-300 md:text-base"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              Train-R blends running, strength and Hyrox-style conditioning
              with AI coaching, nutrition tracking and a performance journal —
              in one clean system built for real athletes, not influencers.
            </motion.p>

            <motion.div
              className="mb-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              <a
                href="#cta"
                className="flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-[rgba(230,255,59,0.35)]"
                style={{ backgroundColor: ACCENT }}
              >
                Get your first block
                <span className="text-xs">↗</span>
              </a>
              <a
                href="#how"
                className="text-xs font-medium text-slate-300 underline-offset-4 hover:text-white hover:underline"
              >
                See how Train-R works
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.18em] text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex flex-col gap-1">
                <span className="text-slate-200">Run</span>
                <span>Intervals · Tempo · Easy</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-slate-200">Lift</span>
                <span>Strength · Power · Capacity</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-slate-200">Hyrox</span>
                <span>Sleds · Ski/Row · Zones</span>
              </div>
            </motion.div>
          </div>

          {/* right – mock app card */}
          <motion.div
            className="relative z-10 mx-auto w-full max-w-sm md:max-w-md"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="pointer-events-none absolute -left-8 top-8 h-24 w-24 rounded-full bg-[rgba(230,255,59,0.18)] blur-2xl" />
            <div className="pointer-events-none absolute -right-4 bottom-0 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl" />

            <div
              className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#0A0B10] to-[#020308] p-4 shadow-[0_0_52px_rgba(0,0,0,0.8)]"
              style={{ backdropFilter: "blur(18px)" }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Today • Hybrid block
                </span>
                <span
                  className="rounded-full px-2 py-1 text-[10px] font-semibold text-black"
                  style={{ backgroundColor: ACCENT }}
                >
                  Week 3 / 8
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <CardRow
                  label="Run · Threshold"
                  detail="6 km tempo @ 4:05–4:15/km"
                  tag="Performance"
                />
                <CardRow
                  label="Lift · Lower"
                  detail="Back squat, RDLs, split squats"
                  tag="Strength"
                />
                <CardRow
                  label="Hyrox · Zone work"
                  detail="Ski + farmers carry + wall balls"
                  tag="Conditioning"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-black/60 px-3 py-3 text-[10px]">
                <MiniStat label="5K PB" value="18:21" />
                <MiniStat label="Half" value="1:30:00" />
                <MiniStat label="Bench" value="110 kg" />
              </div>

              <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
                <Chip>AI coach chat</Chip>
                <Chip>Macros &amp; meals</Chip>
                <Chip>Training journal</Chip>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- FEATURES STRIP ---------- */}
      <section
        id="features"
        className="border-b border-white/5 bg-[#050608] py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              All-in-one engine
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Not another run app. Not another gym app.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Train-R runs your entire hybrid block in one place — AI coaching,
              training, nutrition and journalling designed to actually work
              together.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="AI training coach"
              body="Ask real questions about your sessions, pacing, deloads and race plans. Train-R uses your data — not random templates — to respond."
            />
            <FeatureCard
              title="Nutrition that follows the plan"
              body="Log meals in seconds, auto-estimate macros and see how today lines up with your block and recovery goals."
            />
            <FeatureCard
              title="Journal + insights"
              body="Tag sessions with how they felt, sleep, stress and notes. Turn your diary into performance insights, not just a wall of text."
            />
          </div>
        </div>
      </section>

      {/* ---------- NUTRITION SECTION ---------- */}
      <section
        id="nutrition"
        className="border-b border-white/5 bg-black py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Fuel that matches the block
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Nutrition wired into your training.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              The nutrition side of Train-R uses the same SAP-style cards as
              your app: daily goals, macros, food quality and AI feedback based
              on what you actually logged today.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-slate-200">
              <li>• Set clear calorie &amp; macro targets for each block.</li>
              <li>• Log meals with quick text or photo-based estimates.</li>
              <li>
                • See how today&apos;s intake supports tomorrow&apos;s session
                load.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#05060A] to-[#020308] p-4 text-xs shadow-[0_0_40px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-2 flex items-center justify-between text-[11px]">
              <span className="font-semibold uppercase tracking-[0.16em] text-slate-400">
                Today • Nutrition
              </span>
              <span
                className="rounded-full px-2 py-1 text-[10px] font-semibold text-black"
                style={{ backgroundColor: ACCENT }}
              >
                2,150 / 2,600 kcal
              </span>
            </div>

            <div className="mb-3 grid grid-cols-3 gap-2">
              <MacroChip label="Protein" value="112 g" />
              <MacroChip label="Carbs" value="274 g" />
              <MacroChip label="Fat" value="68 g" />
            </div>

            <div className="mb-3 rounded-2xl border border-white/12 bg-black/60 px-3 py-3 text-[11px]">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-semibold text-slate-100">
                  Coach note
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-slate-300">
                  Food quality · B+
                </span>
              </div>
              <p className="text-slate-300">
                You&apos;re close to your calorie target and hit protein. Keep
                an eye on late-evening snack choices to keep tomorrow&apos;s
                session feeling light.
              </p>
            </div>

            <div className="space-y-2 text-[11px] text-slate-300">
              <div className="flex items-center justify-between">
                <span>Breakfast · Bagel &amp; eggs</span>
                <span className="text-slate-400">520 kcal</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Lunch · Chicken rice bowl</span>
                <span className="text-slate-400">690 kcal</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Snack · Yogurt &amp; berries</span>
                <span className="text-slate-400">210 kcal</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section
        id="how"
        className="border-b border-white/5 bg-black py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                How Train-R works
              </p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                From chaos to a clean block.
              </h2>
            </div>
            <p className="max-w-md text-xs text-slate-300 md:text-sm">
              Train-R is built around repeatable blocks: the right sessions, at
              the right intensity, across the week — not random “destroy
              yourself” workouts.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            <StepCard
              step="01"
              title="Set your baseline"
              body="Sync your PBs and training history, tell Train-R how many days you can actually train and what equipment you’ve got."
            />
            <StepCard
              step="02"
              title="Get your hybrid block"
              body="Train-R designs a balanced block across run, lift and Hyrox sessions, with clear priorities for each week."
            />
            <StepCard
              step="03"
              title="Review, adapt, repeat"
              body="Use AI coach, metrics and your journal to adjust blocks, dial in recovery and move from Version 1.0 → 2.0 → 3.0."
            />
          </div>
        </div>
      </section>

      {/* ---------- TRAINING PILLARS ---------- */}
      <section
        id="pillars"
        className="border-b border-white/5 bg-[#050608] py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Training pillars
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Run. Lift. Hyrox.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              All three are planned together – so you don’t fry your legs before
              race pace or ruin strength with junk mileage.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            <PillarCard
              label="Run"
              items={[
                "Easy aerobic mileage for engine",
                "Interval + threshold sessions",
                "Race-pace work for 5K / 10K / half",
              ]}
            />
            <PillarCard
              label="Lift"
              items={[
                "Compound-first: squats, pulls, presses",
                "Strength waves tied to your run load",
                "Power + durability for Hyrox work",
              ]}
            />
            <PillarCard
              label="Hyrox"
              items={[
                "Zone sessions with ski / row / sleds",
                "Wall balls, lunges, carries in context",
                "Race simulations, not random WODs",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ---------- JOURNAL / COACH ---------- */}
      <section
        id="journal"
        className="border-b border-white/5 bg-black py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-10 grid gap-10 md:grid-cols-2 md:items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Journal + AI coach
              </p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Log the day. Ask the coach. Get the signal.
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Train-R takes your notes, sleep, stress and session feel
                seriously. The AI coach uses all of it to give specific answers
                — when to push, when to back off, and how to line up your next
                block.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                <li>• Session-by-session journalling with tags.</li>
                <li>• Weekly insights from training, nutrition and mood.</li>
                <li>• Concrete suggestions, not generic motivation quotes.</li>
              </ul>
            </div>

            <motion.div
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#05060A] to-[#020308] p-4 text-xs shadow-[0_0_40px_rgba(0,0,0,0.9)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Sample coach chat
              </p>
              <ChatBubble who="you">
                Legs feel heavy, HR higher than normal on my easy run. Deload
                or push through?
              </ChatBubble>
              <ChatBubble who="coach">
                You’re carrying fatigue from the last 3 days. Let’s drop
                tomorrow’s intensity to Z2 only, keep the lift lighter and move
                intervals to later in the week.
              </ChatBubble>
              <ChatBubble who="coach">
                If that still feels rough, we’ll trim 10–15% volume across the
                block rather than forcing PRs on tired legs.
              </ChatBubble>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section
        id="cta"
        className="border-t border-white/5 bg-[#050608] pb-20 pt-16"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            Early access list
          </motion.p>
          <motion.h2
            className="mt-3 text-2xl font-semibold md:text-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Be in the first wave of Train-R athletes.
          </motion.h2>
          <motion.p
            className="mx-auto mt-3 max-w-xl text-sm text-slate-300"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            Drop your email and we’ll send you early Train-R access, plus a
            sample hybrid training week you can run immediately.
          </motion.p>

          <motion.form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left md:flex-row"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-white/12 bg-black/70 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-[rgba(230,255,59,0.8)]"
            />
            <button
              type="submit"
              className="rounded-full px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-[rgba(230,255,59,0.4)]"
              style={{ backgroundColor: ACCENT }}
            >
              Join the list
            </button>
          </motion.form>

          <p className="mt-3 text-[10px] text-slate-500">
            No spam. Just training blocks, ideas and product updates.
          </p>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-white/5 bg-black py-6 text-center text-[11px] text-slate-500">
        Train-R · Built for runners, lifters &amp; Hyrox athletes.
      </footer>
    </main>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function MiniStat({ label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[11px] font-medium text-slate-400">{label}</span>
      <span className="text-xs font-semibold text-slate-100">{value}</span>
    </div>
  );
}

function Chip({ children }) {
  return (
    <span
      className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[10px] font-medium text-slate-200"
      style={{ boxShadow: "0 0 18px rgba(230,255,59,0.25)" }}
    >
      {children}
    </span>
  );
}

function MacroChip({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/12 bg-black/70 px-3 py-2 text-[11px]">
      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-xs font-semibold text-slate-100">{value}</p>
    </div>
  );
}

function FeatureCard({ title, body }) {
  return (
    <motion.div
      className="h-full rounded-2xl border border-white/10 bg-[rgba(8,9,13,0.96)] p-5 text-sm shadow-[0_18px_40px_rgba(0,0,0,0.7)]"
      whileHover={{ y: -4, borderColor: ACCENT }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <h3 className="mb-2 text-sm font-semibold text-slate-50">{title}</h3>
      <p className="text-[13px] leading-relaxed text-slate-300">{body}</p>
    </motion.div>
  );
}

function StepCard({ step, title, body }) {
  return (
    <motion.div
      className="h-full rounded-2xl border border-white/10 bg-[rgba(7,8,12,0.96)] p-5 text-sm"
      whileHover={{ y: -4, borderColor: ACCENT }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        <span style={{ color: ACCENT }}>{step}</span> • Step
      </div>
      <h3 className="mb-2 text-sm font-semibold text-slate-50">{title}</h3>
      <p className="text-[13px] leading-relaxed text-slate-300">{body}</p>
    </motion.div>
  );
}

function PillarCard({ label, items }) {
  return (
    <motion.div
      className="h-full rounded-2xl border border-white/10 bg-[rgba(8,9,13,0.96)] p-5 text-sm"
      whileHover={{ y: -4, borderColor: ACCENT }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <h3
        className="mb-3 text-sm font-semibold uppercase tracking-[0.18em]"
        style={{ color: ACCENT }}
      >
        {label}
      </h3>
      <ul className="space-y-2 text-[13px] text-slate-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function ChatBubble({ who, children }) {
  const isYou = who === "you";
  return (
    <div
      className={`mb-2 flex ${
        isYou ? "justify-end" : "justify-start"
      } text-[12px]`}
    >
      <div
        className={`max-w-xs rounded-2xl px-3 py-2 ${
          isYou
            ? "bg-[rgba(230,255,59,0.95)] text-black"
            : "bg-white/6 text-slate-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function CardRow({ label, detail, tag }) {
  return (
    <div className="flex items-start justify-between rounded-2xl border border-white/10 bg-black/50 px-3 py-3">
      <div>
        <p className="text-[11px] font-semibold text-slate-100">{label}</p>
        <p className="mt-1 text-[11px] text-slate-400">{detail}</p>
      </div>
      <span className="ml-3 rounded-full bg-white/5 px-2 py-1 text-[10px] font-medium text-slate-300">
        {tag}
      </span>
    </div>
  );
}
