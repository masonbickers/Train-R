// app/page.jsx
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const NAV_LEFT = ["Train", "Nutrition", "Journal"];
const NAV_RIGHT = ["About", "Contact"]; // kept in case you want later

// PHOTO CAROUSEL IMAGES — update filenames as needed
const GALLERY_IMAGES = [
  { src: "/running.jpeg", label: "Run session view" },
  { src: "/barbell.jpeg", label: "Hyrox breakdown" },
  { src: "/athlete.jpeg", label: "test" },
  { src: "/crossfit.jpeg", label: "Strength session" },
  { src: "/rope.jpeg", label: "Strength session" },
  { src: "/gym.jpeg", label: "Strength session" },
  { src: "/running.jpeg", label: "Strength session" },
];

const FAQ_ITEMS = [
  {
    q: "Is Train-R for beginners or experienced athletes?",
    a: "Both. The app scales your volume and intensity based on your current level, race dates and weekly capacity. You’ll never be thrown into elite-level volume if you’re not ready for it.",
  },
  {
    q: "Do I need a gym membership or specific equipment?",
    a: "You’ll get the most out of Train-R with access to basic strength kit (barbells, dumbbells, sled, rower, ski, etc.), but we can still build smart plans around what you actually have.",
  },
  {
    q: "How is this different from a generic running plan?",
    a: "Traditional plans assume you only run. Train-R balances running, lifting and Hyrox-style conditioning into a single, adaptive plan that reacts when life gets in the way.",
  },
  {
    q: "Can I change my goals once I’ve started?",
    a: "Yes. You can update goals, races and availability, and the plan will adjust your upcoming weeks instead of starting from zero.",
  },
];

/* -------- FADE-IN ON SCROLL WRAPPER -------- */
function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();
  const carouselRef = useRef(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === "right") {
      const target = container.scrollLeft + scrollAmount;
      const finalTarget = target >= maxScroll - 5 ? 0 : target;
      container.scrollTo({ left: finalTarget, behavior: "smooth" });
    } else {
      const target = container.scrollLeft - scrollAmount;
      const finalTarget = target <= 0 ? maxScroll : target;
      container.scrollTo({ left: finalTarget, behavior: "smooth" });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  // ---- HEADER NAV HANDLER ----
  const handleNavClick = (label) => {
    const idMap = {
      Train: "train-section",
      Nutrition: "nutrition-section",
      Journal: "journal-section",
      About: "about-section",
      Contact: "contact-section",
    };

    const targetId = idMap[label];
    if (!targetId) return;

    if (typeof document !== "undefined") {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* -------- HEADER -------- */}
      <header className="fixed inset-x-0 top-0 z-30 bg-black/40 backdrop-blur-lg border-b border-white/5">
        {/* MOBILE HEADER */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:hidden">
          <button
            type="button"
            className="text-white/80 text-xl"
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
            className="text-[10px] tracking-[0.18em] uppercase text-white/70"
            type="button"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            ACCOUNT
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
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
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
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
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

      {/* -------- HERO (no scroll animation so it stays perfectly centred) -------- */}
      <section className="relative min-h-screen w-full pt-20">
        <Image
          src="/running.jpeg"
          alt="Hybrid training in motion"
          fill
          priority
          className="object-cover filter grayscale"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

        <div className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/70">
            Hybrid Training • Running • Strength • Hyrox
          </p>

          <h1 className="max-w-3xl text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            The app built for
            <span className="block md:inline"> real-world performance.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm md:text-base text-white/70">
            Personalised running, strength and Hyrox plans. One place to track
            the work that actually makes you better.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-full border border-white bg-white text-black px-8 py-2 text-xs font-semibold uppercase tracking-[0.22em] hover:bg-transparent hover:text-white transition-colors">
              Get early access
            </button>
            <button className="rounded-full border border-white/40 px-8 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 hover:border-white hover:text-white transition-colors">
              View demo
            </button>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-white/50">
            Scroll
          </div>
        </div>
      </section>

      {/* -------- HOW IT WORKS (TWO-COLUMN) -------- */}
      <section id="train-section" className="bg-black py-20">
        <FadeInSection>
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start md:justify-between">
            {/* Left copy */}
            <div className="max-w-sm">
              <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-3">
                How it works
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Built for the way you actually train.
              </h2>
              <p className="mt-4 text-sm md:text-base text-white/60">
                Train-R pulls your running, strength and Hyrox work into one
                place, then adjusts the plan as life moves – races, travel,
                missed days and big weeks included.
              </p>
            </div>

            {/* Right: linear steps, no boxes */}
            <div className="flex-1 grid gap-6 sm:grid-cols-2">
              {[
                {
                  step: "01",
                  label: "Set the baseline",
                  title: "Tell us how you train.",
                  body: "Goals, race dates, weak points and current volume – all in one quick setup flow.",
                },
                {
                  step: "02",
                  label: "Build the week",
                  title: "Get a live training blueprint.",
                  body: "Sessions mapped across your week: runs, lifts, Hyrox pieces and recovery in one view.",
                },
                {
                  step: "03",
                  label: "Adapt on the fly",
                  title: "Adjust around real life.",
                  body: "Miss a day, travel or race? The plan reshuffles so the key work still gets done.",
                },
                {
                  step: "04",
                  label: "Close the loop",
                  title: "See what’s actually working.",
                  body: "Track load, pace trends and Hyrox splits so you can see progress and tweak with intent.",
                },
              ].map((item, idx) => (
                <FadeInSection key={item.step} delay={150 + idx * 80}>
                  <div className="flex gap-4">
                    {/* step marker */}
                    <div className="flex flex-col items-center pt-1">
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold tracking-[0.18em] uppercase"
                        style={{ backgroundColor: "#E6FF3B", color: "#050505" }}
                      >
                        {item.step}
                      </div>
                      <div className="mt-2 h-full w-px bg-white/15 hidden sm:block" />
                    </div>

                    {/* text */}
                    <div className="space-y-1">
                      <p className="text-[11px] tracking-[0.22em] uppercase text-white/45">
                        {item.label}
                      </p>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/60">{item.body}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* -------- PILLARS: TRACK / STRENGTH / NUTRITION -------- */}
      <section id="pillars-section" className="bg-[#050505] py-20">
        <FadeInSection>
          <div className="mx-auto max-w-6xl px-6">
            {/* Header */}
            <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-3">
              What you train
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-2">
              Three pillars, one system.
            </h2>
            <p className="text-sm text-white/55 max-w-xl">
              Running, strength and fuelling — all connected so nothing fights
              for space.
            </p>

            {/* Cards */}
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {/* TRACK */}
              <FadeInSection delay={100}>
                <div className="relative overflow-hidden rounded-2xl bg-black/60 px-8 py-10 text-center border border-white/5 hover:border-white/20 transition-colors">
                  {/* subtle neon bar */}
                  <span
                    className="absolute top-0 left-0 h-1 w-full"
                    style={{ backgroundColor: "#E6FF3B", opacity: 0.75 }}
                  />

                  <div className="relative mx-auto mb-6 h-20 w-20">
                    <Image
                      src="/white-track-2.png"
                      alt="Track / running"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-sm font-semibold mb-3 tracking-[0.2em] uppercase">
                    Track & Road
                  </h3>
                  <p className="text-xs text-white/60 max-w-xs mx-auto">
                    Speed, tempo, long runs. Sessions built to support
                    performance across 5k to marathon — and still leave room for
                    lifting.
                  </p>
                </div>
              </FadeInSection>

              {/* STRENGTH */}
              <FadeInSection delay={200}>
                <div className="relative overflow-hidden rounded-2xl bg-black/60 px-8 py-10 text-center border border-white/5 hover:border-white/20 transition-colors">
                  <span className="absolute top-0 left-0 h-1 w-full bg-white/10" />

                  <div className="relative mx-auto mb-6 h-20 w-20">
                    <Image
                      src="/dumbell.png"
                      alt="Strength"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-sm font-semibold mb-3 tracking-[0.2em] uppercase">
                    Strength
                  </h3>
                  <p className="text-xs text-white/60 max-w-xs mx-auto">
                    Leg strength, upper power, engine days. Lifting programmed
                    to build durability and speed — not work against them.
                  </p>
                </div>
              </FadeInSection>

              {/* NUTRITION */}
              <FadeInSection delay={300}>
                <div className="relative overflow-hidden rounded-2xl bg-black/60 px-8 py-10 text-center border border-white/5 hover:border-white/20 transition-colors">
                  <span className="absolute top-0 left-0 h-1 w-full bg-white/10" />

                  <div className="relative mx-auto mb-6 h-20 w-20">
                    <Image
                      src="/nutrition.png"
                      alt="Nutrition"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-sm font-semibold mb-3 tracking-[0.2em] uppercase">
                    Nutrition
                  </h3>
                  <p className="text-xs text-white/60 max-w-xs mx-auto">
                    Fuel aligned to your sessions — heavy strength days,
                    intervals, deloads, long runs and race week all handled
                    automatically.
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* -------- NUTRITION SECTION (DETAILED) -------- */}
      <section
        id="nutrition-section"
        className="bg-black py-20 border-y border-white/5"
      >
        <FadeInSection>
          <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2 md:items-start">
            {/* Left: Copy */}
            <div>
              <div className="mb-3 flex items-center gap-3">
                <p className="text-xs tracking-[0.3em] uppercase text-white/60">
                  Nutrition engine
                </p>
                {/* subtle neon pill */}
                <span
                  className="hidden rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase md:inline-flex"
                  style={{ backgroundColor: "#E6FF3B", color: "#050505" }}
                >
                  Fuel • Recover
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Fuel that matches the work you&rsquo;re doing.
              </h2>
              <p className="text-sm text-white/60 mb-4">
                Train-R doesn&rsquo;t just throw calorie targets at you. It ties
                what you eat to the sessions you&rsquo;re actually doing – heavy
                strength days, brutal Hyrox pieces, long runs and deload weeks.
              </p>
              <ul className="space-y-3 text-sm text-white/65">
                <li>
                  • Simple meal logging without turning your day into
                  MyFitnessPal.
                </li>
                <li>
                  • Weight trends mapped against training load and recovery.
                </li>
                <li>
                  • Tag hard sessions so the app nudges carbs where they matter
                  most.
                </li>
                <li>• Race-week fuelling that plugs straight into your plan.</li>
              </ul>
            </div>

            {/* Right: UI-style cards */}
            <div className="grid gap-4">
              <FadeInSection delay={150}>
                <div className="rounded-2xl bg-white/[0.03] p-5 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs tracking-[0.26em] uppercase text-white/50">
                      Today&rsquo;s snapshot
                    </p>
                    <span
                      className="h-1.5 w-16 rounded-full"
                      style={{ backgroundColor: "#E6FF3B" }}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="rounded-xl bg-black/70 p-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">
                        Calories
                      </p>
                      <p className="text-sm font-semibold">2,450</p>
                      <p className="text-[11px] text-white/50 mt-1">
                        On target for a strength + intervals day.
                      </p>
                    </div>
                    <div className="rounded-xl bg-black/70 p-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">
                        Carbs
                      </p>
                      <p className="text-sm font-semibold">305g</p>
                      <p className="text-[11px] text-white/50 mt-1">
                        Front-loaded around key sessions.
                      </p>
                    </div>
                    <div className="rounded-xl bg-black/70 p-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">
                        Protein
                      </p>
                      <p className="text-sm font-semibold">165g</p>
                      <p className="text-[11px] text-white/50 mt-1">
                        Split across 3–4 anchor meals.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={250}>
                <div className="rounded-2xl bg-white/[0.02] p-5 border border-white/5">
                  <p className="text-xs tracking-[0.26em] uppercase text-white/50 mb-2">
                    Log the real world
                  </p>
                  <p className="text-sm text-white/70 mb-3">
                    Tag days as &ldquo;Perfect&rdquo;, &ldquo;Good enough&rdquo;
                    or &ldquo;Chaos&rdquo; so the plan can respond instead of
                    assuming every week is textbook.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full bg-white/10 px-3 py-1">
                      Post-race pizza
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1">
                      Long run bagels
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1">
                      Office snacks
                    </span>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* -------- APP PREVIEW (PHONE MOCKUP) -------- */}
      <section className="bg-black py-20">
        <FadeInSection>
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-3">
              App preview
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              See your training in motion.
            </h2>
            <p className="mx-auto max-w-xl text-sm text-white/60 mb-10">
              From today’s run and lifts to nutrition and long-term progress,
              Train-R keeps everything connected in one clean, fast view.
            </p>

            <div className="relative mx-auto max-w-5xl">
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl" />
              <div className="relative w-full">
                <Image
                  src="/phone-mockup.png"
                  alt="Train-R app preview"
                  width={1200}
                  height={800}
                  className="mx-auto h-auto w-full max-w-4xl object-contain"
                />
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* -------- WHY TRAIN-R WORKS -------- */}
      <section id="about-section" className="bg-[#050505] py-20">
        <FadeInSection>
          <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2.5fr)] md:items-start">
            {/* Left copy */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-3">
                Why Train-R works
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
                Built around how hybrid athletes
                <span className="block">actually train.</span>
              </h2>
              <p className="text-sm md:text-base text-white/65 mb-4">
                Train-R isn’t a generic running plan or a random WOD generator.
                It understands that you’re juggling miles, heavy lifts, Hyrox
                stations, work and life – then builds a week that respects all
                of it.
              </p>
            </div>

            {/* Right cards */}
            <div className="grid gap-4 text-sm text-white/70">
              {/* CARD 1 */}
              <FadeInSection delay={120}>
                <div className="bg-black/70 px-5 py-4 rounded-2xl border border-white/10">
                  <div className="mb-2 flex items-center gap-3">
                    <Image
                      src="/circle-icon.png"
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                    <h3 className="text-sm font-semibold">
                      Intelligent load management
                    </h3>
                  </div>
                  <p className="text-xs text-white/60">
                    Volume and intensity scale off your recent sessions, life
                    stress and race dates – so you stack work without constantly
                    feeling one bad week away from a niggle.
                  </p>
                </div>
              </FadeInSection>

              {/* CARD 2 */}
              <FadeInSection delay={220}>
                <div className="bg-black/70 px-5 py-4 rounded-2xl border border-white/10">
                  <div className="mb-2 flex items-center gap-3">
                    <Image
                      src="/circle-icon.png"
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                    <h3 className="text-sm font-semibold">
                      One plan for the whole athlete
                    </h3>
                  </div>
                  <p className="text-xs text-white/60">
                    Runs, lifts and Hyrox pieces live in one calendar. No more
                    stitching together three different programmes and hoping
                    they don’t clash – every session has a clear role.
                  </p>
                </div>
              </FadeInSection>

              {/* CARD 3 */}
              <FadeInSection delay={320}>
                <div className="bg-black/70 px-5 py-4 rounded-2xl border border-white/10">
                  <div className="mb-2 flex items-center gap-3">
                    <Image
                      src="/circle-icon.png"
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                    <h3 className="text-sm font-semibold">
                      Feedback loops from your data
                    </h3>
                  </div>
                  <p className="text-xs text-white/60">
                    Your performances, notes and fatigue scores feed back into
                    the engine. The plan gets sharper over time, nudging
                    deloads, progressions and race prep when your metrics call
                    for it.
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* -------- WHO IT'S FOR -------- */}
      <section id="journal-section" className="bg-black py-20">
        <FadeInSection>
          <div className="mx-auto max-w-6xl px-6">
            {/* Header row */}
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-3">
                  Who it’s for
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                  If you live between running and strength,
                  <span className="block">this is for you.</span>
                </h2>
              </div>

              {/* Neon tag */}
              <div className="flex items-center justify-start md:justify-end">
                <span
                  className="rounded-full px-4 py-1 text-[10px] font-semibold tracking-[0.22em] uppercase"
                  style={{ backgroundColor: "#E6FF3B", color: "#050505" }}
                >
                  Hybrid • Events • Strength
                </span>
              </div>
            </div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-3 text-sm text-white/70">
              {/* Card 1 */}
              <FadeInSection delay={100}>
                <div className="rounded-2xl bg-white/[0.03] px-6 py-7 border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-colors">
                  <span
                    className="mb-4 inline-block h-1 w-10 rounded-full"
                    style={{ backgroundColor: "#E6FF3B" }}
                  />
                  <h3 className="text-sm font-semibold mb-2">
                    Hybrid athletes
                  </h3>
                  <p className="text-xs text-white/60">
                    You split your week between miles, the gym and brutal
                    conditioning. Train-R keeps it all pulling in the same
                    direction so you’re building one engine, not three separate
                    ones.
                  </p>
                </div>
              </FadeInSection>

              {/* Card 2 */}
              <FadeInSection delay={200}>
                <div className="rounded-2xl bg-white/[0.03] px-6 py-7 border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-colors">
                  <span className="mb-4 inline-block h-1 w-10 rounded-full bg-white/10" />
                  <h3 className="text-sm font-semibold mb-2">
                    Hyrox & event racers
                  </h3>
                  <p className="text-xs text-white/60">
                    You’ve got races on the calendar and clear weaknesses –
                    sleds, burpees, running off the rower. The app targets those
                    gaps while keeping your overall load under control.
                  </p>
                </div>
              </FadeInSection>

              {/* Card 3 */}
              <FadeInSection delay={300}>
                <div className="rounded-2xl bg-white/[0.03] px-6 py-7 border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-colors">
                  <span className="mb-4 inline-block h-1 w-10 rounded-full bg-white/10" />
                  <h3 className="text-sm font-semibold mb-2">
                    Runners who lift
                  </h3>
                  <p className="text-xs text-white/60">
                    You care about PBs and staying strong. Train-R balances
                    speed, strength and durability so you can chase times
                    without feeling like you’re undoing your gym work.
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* -------- PRICING / EARLY ACCESS -------- */}
      <section className="bg-[#050505] py-20">
        <FadeInSection>
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-3">
              Pricing / early access
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Secure your spot before full launch.
            </h2>
            <p className="mx-auto max-w-xl text-sm text-white/60 mb-10">
              We’re opening Train-R to a limited group of athletes first so we
              can tune the engine with real training data and reward the people
              who help shape it.
            </p>

            <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
              {/* Founding Athlete */}
              <FadeInSection delay={120}>
                <div className="relative bg-white/[0.05] px-6 py-8 text-left rounded-2xl">
                  <span
                    className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
                    style={{ backgroundColor: "#E6FF3B" }}
                  />

                  <p className="text-xs tracking-[0.28em] uppercase text-white/60 mb-2">
                    Early access
                  </p>
                  <h3 className="text-xl font-semibold mb-2">
                    Founding Athlete
                  </h3>
                  <p className="text-sm text-white/70 mb-4">
                    Join the first wave of Train-R users, feed back on the
                    product and lock in a founding rate that stays with you
                    after launch.
                  </p>
                  <ul className="mb-6 space-y-2 text-xs text-white/60">
                    <li>
                      • Full access to training plans and core app features
                    </li>
                    <li>• Direct feedback channel for feature ideas</li>
                    <li>• Priority support during the early access phase</li>
                  </ul>
                  <button className="w-full rounded-full border border-white bg-white text-black px-6 py-2 text-xs font-semibold uppercase tracking-[0.22em] hover:bg-transparent hover:text-white transition-colors">
                    Join the waitlist
                  </button>
                  <p className="mt-3 text-[11px] text-white/45">
                    Limited spots. We’ll email when your cohort is invited.
                  </p>
                </div>
              </FadeInSection>

              {/* Train-R Pro */}
              <FadeInSection delay={220}>
                <div className="bg-white/[0.02] px-6 py-8 text-left rounded-2xl opacity-80 border border-white/10">
                  <p className="text-xs tracking-[0.28em] uppercase text-white/60 mb-2">
                    Coming soon
                  </p>
                  <h3 className="text-xl font-semibold mb-2">Train-R Pro</h3>
                  <p className="text-sm text-white/70 mb-4">
                    Full public launch with deeper analytics, more integrations
                    and advanced tools for high-volume athletes and coaches.
                  </p>
                  <ul className="space-y-2 text-xs text-white/60">
                    <li>
                      • Expanded performance insights and long-term trends
                    </li>
                    <li>• More integrations and automatic sync options</li>
                    <li>• Advanced plan controls and race tools</li>
                  </ul>
                </div>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* -------- FAQ (MINIMAL ACCORDION) -------- */}
      <section id="faq" className="bg-black py-20">
        <FadeInSection>
          <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">
            {/* Left header */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-3">
                FAQ
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                Questions, answered.
              </h2>
              <p className="text-sm text-white/60">
                The basics, the details and how Train-R fits into your current
                training. Tap a question on the right to open it.
              </p>
            </div>

            {/* Right accordion */}
            <div className="space-y-1">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <FadeInSection key={item.q} delay={120 + index * 80}>
                    <div className="border-b border-white/10 last:border-b-0">
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="flex w-full items-center justify-between gap-4 py-3 text-left"
                      >
                        <span className="text-sm text-white/85">
                          {item.q}
                        </span>
                        <span className="text-xs text-white/50">
                          {isOpen ? "–" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="pb-4 pr-8 text-xs text-white/60">
                          {item.a}
                        </div>
                      )}
                    </div>
                  </FadeInSection>
                );
              })}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* -------- PHOTO CAROUSEL (EDGE-TO-EDGE) -------- */}
      <section id="gallery" className="bg-[#050505] py-16">
        <FadeInSection>
          <div className="relative mt-2">
            {/* Arrows (desktop only) */}
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/40 bg-black/70 px-3 py-2 text-sm font-semibold tracking-[0.2em] uppercase text-white/80 hover:bg-black/90 md:inline-flex"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/40 bg-black/70 px-3 py-2 text-sm font-semibold tracking-[0.2em] uppercase text-white/80 hover:bg-black/90 md:inline-flex"
            >
              ›
            </button>

            {/* Edge-to-edge strip */}
            <div
              ref={carouselRef}
              className="flex gap-[2px] overflow-x-auto scroll-smooth bg-black/90 px-0 py-2 sm:py-3 md:py-4 -mx-0 sm:-mx-4 md:-mx-8
                       [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {GALLERY_IMAGES.map((img, index) => (
                <div
                  key={`${img.src}-${img.label}-${index}`}
                  className="relative aspect-[4/3] w-40 flex-shrink-0 overflow-hidden sm:w-56 md:w-72 lg:w-80"
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover filter grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* -------- FOOTER -------- */}
      <footer id="contact-section" className="bg-black">
        <FadeInSection>
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

              {/* Email signup form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-full bg-white/5 px-4 py-2 text-sm text-white placeholder-white/40 border border-white/10 focus:border-white/30 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white text-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] hover:bg-white/80 transition"
                >
                  Join
                </button>
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
                      Data & security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>

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
    </main>
  );
}
