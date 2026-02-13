"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

/* ──────────────────────────────────────────
   TEMPLATE DATA — Edit these to customize
   ────────────────────────────────────────── */

const UPSELL = {
  badge: "SUBSCRIBER-ONLY OFFER",
  title: "Content Marketing Masterclass",
  subtitle: "6-week intensive program",
  description:
    "Go deeper with live workshops, 1-on-1 coaching, and a private community of 500+ marketers. Implement every strategy from the playbook with expert guidance.",
  features: [
    "6 live workshops (recorded for replay)",
    "Private Slack community access",
    "1-on-1 strategy call with Sarah Chen",
    "Lifetime access to all materials",
    "30-day money-back guarantee",
  ],
  originalPrice: "$497",
  discountPrice: "$297",
  savings: "Save $200",
  ctaText: "Enroll Now — $297",
  ctaSubtext: "Limited spots available. 30-day money-back guarantee.",
};

const EMAIL_SEQUENCE = [
  {
    day: "Day 1",
    title: "Quick-start checklist",
    description: "A one-page action plan to start implementing today.",
  },
  {
    day: "Day 3",
    title: "Video walkthrough of Chapter 1",
    description: "Sarah walks you through the content engine framework step-by-step.",
  },
  {
    day: "Day 5",
    title: "Advanced strategies worksheet",
    description: "Exercises to apply distribution tactics to your specific market.",
  },
  {
    day: "Day 7",
    title: "Live Q&A invitation",
    description: "Get your questions answered in a live session with the author.",
  },
];

const CHALLENGE_OPTIONS = [
  "Generating consistent content",
  "Getting enough traffic",
  "Converting readers to leads",
  "Measuring content ROI",
];

/* ──────────────────────────────────────────
   PAGE COMPONENT
   ────────────────────────────────────────── */

export function ThankYouContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "your inbox";
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);
  const [challengeSubmitted, setChallengeSubmitted] = useState(false);

  const handleChallengeSubmit = () => {
    if (selectedChallenge) {
      setChallengeSubmitted(true);
      // In production, send this to your analytics/CRM
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* ===== SUCCESS HERO ===== */}
      <section className="relative overflow-hidden">
        {/* Celebration background pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--secondary) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }} />

        <div className="relative mx-auto max-w-3xl px-6 pb-12 pt-16 text-center sm:pb-16 sm:pt-24">
          {/* Success checkmark */}
          <div className="animate-fade-in-up mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--secondary)]/10">
            <svg className="h-10 w-10 text-[var(--secondary)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="animate-fade-in-up delay-100 mb-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Your playbook is ready!
          </h1>

          <p className="animate-fade-in-up delay-200 mb-10 text-lg text-[var(--muted)]">
            We&apos;ve sent <span className="font-medium text-[var(--foreground)]">The B2B Content Marketing Playbook</span>{" "}
            to <span className="font-medium text-[var(--foreground)]">{email}</span>. You can also download it directly below.
          </p>

          {/* Download button */}
          <div className="animate-fade-in-up delay-300">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-xl bg-[var(--accent)] px-8 py-4 font-[family-name:var(--font-display)] text-lg font-semibold text-white shadow-lg transition-all hover:bg-[var(--accent-hover)] hover:shadow-xl"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download PDF Now
            </a>
            <p className="mt-3 text-sm text-[var(--muted)]">
              PDF • 47 pages • 3.2 MB
            </p>
          </div>
        </div>
      </section>

      {/* ===== QUICK POLL ===== */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]/40">
        <div className="mx-auto max-w-2xl px-6 py-14">
          {!challengeSubmitted ? (
            <div className="text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                Quick question (optional)
              </p>
              <h2 className="mb-8 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--foreground)] sm:text-2xl">
                What&apos;s your biggest content marketing challenge?
              </h2>

              <div className="mb-6 flex flex-wrap justify-center gap-3">
                {CHALLENGE_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedChallenge(option)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                      selectedChallenge === option
                        ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                        : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]/30"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {selectedChallenge && (
                <button
                  onClick={handleChallengeSubmit}
                  className="rounded-lg bg-[var(--foreground)] px-6 py-2.5 text-sm font-medium text-[var(--background)] transition-colors hover:opacity-90"
                >
                  Submit
                </button>
              )}
            </div>
          ) : (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary)]/10">
                <svg className="h-6 w-6 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--foreground)]">
                Thanks for sharing!
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                We&apos;ll tailor your bonus content to help with &ldquo;{selectedChallenge?.toLowerCase()}&rdquo;.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            What&apos;s next
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
            In the next 7 days, you&apos;ll receive
          </h2>
          <p className="mb-12 text-[var(--muted)]">
            Bonus resources to help you get the most out of the playbook.
          </p>
        </div>

        <div className="space-y-4">
          {EMAIL_SEQUENCE.map((item, index) => (
            <div
              key={item.day}
              className="flex gap-5 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 sm:p-6"
            >
              {/* Day indicator */}
              <div className="flex shrink-0 flex-col items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/10 font-[family-name:var(--font-display)] text-sm font-bold text-[var(--accent)]">
                  {index + 1}
                </div>
                {index < EMAIL_SEQUENCE.length - 1 && (
                  <div className="mt-2 h-full w-[2px] bg-[var(--border)]" />
                )}
              </div>

              {/* Content */}
              <div className="pt-1">
                <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                  {item.day}
                </p>
                <h3 className="mb-1 font-[family-name:var(--font-display)] font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== UPSELL ===== */}
      <section className="bg-[var(--secondary)] dark:bg-[var(--surface)]">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <div className="overflow-hidden rounded-3xl bg-white/10 p-8 backdrop-blur-sm dark:bg-[var(--background)] sm:p-12">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white dark:bg-[var(--accent)]/10 dark:text-[var(--accent)]">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 1a.75.75 0 01.65.38l2.16 3.75 4.31.66a.75.75 0 01.42 1.27L14.4 10.1l.74 4.28a.75.75 0 01-1.09.79L10 13.18l-4.05 1.99a.75.75 0 01-1.09-.79l.74-4.28L2.46 7.06a.75.75 0 01.42-1.27l4.31-.66 2.16-3.75A.75.75 0 0110 1z" />
              </svg>
              {UPSELL.badge}
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              {/* Left — Info */}
              <div>
                <h2 className="mb-2 font-[family-name:var(--font-display)] text-3xl font-bold text-white dark:text-[var(--foreground)]">
                  {UPSELL.title}
                </h2>
                <p className="mb-4 text-sm font-medium text-white/60 dark:text-[var(--muted)]">
                  {UPSELL.subtitle}
                </p>
                <p className="mb-8 leading-relaxed text-white/80 dark:text-[var(--muted)]">
                  {UPSELL.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {UPSELL.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-white/60 dark:text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-white/80 dark:text-[var(--foreground)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — Pricing CTA */}
              <div className="flex flex-col items-center justify-center rounded-2xl bg-white/10 p-8 text-center dark:bg-[var(--surface)]">
                {/* Price */}
                <div className="mb-2">
                  <span className="text-sm text-white/40 line-through dark:text-[var(--muted)]">
                    {UPSELL.originalPrice}
                  </span>
                </div>
                <div className="mb-1 font-[family-name:var(--font-display)] text-5xl font-bold text-white dark:text-[var(--foreground)]">
                  {UPSELL.discountPrice}
                </div>
                <div className="mb-8 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white dark:bg-[var(--accent)]/10 dark:text-[var(--accent)]">
                  {UPSELL.savings}
                </div>

                {/* CTA Button */}
                <a
                  href="#"
                  className="mb-4 w-full rounded-xl bg-[var(--accent)] px-8 py-4 font-[family-name:var(--font-display)] font-semibold text-white shadow-lg transition-all hover:bg-[var(--accent-hover)] hover:shadow-xl"
                >
                  {UPSELL.ctaText}
                </a>
                <p className="text-xs text-white/40 dark:text-[var(--muted)]">
                  {UPSELL.ctaSubtext}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--foreground)]">
              MagnetPage
            </p>
            <div className="flex items-center gap-6 text-xs text-[var(--muted)]">
              <a href="#" className="transition-colors hover:text-[var(--foreground)]">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-[var(--foreground)]">Terms of Service</a>
              <a href="#" className="transition-colors hover:text-[var(--foreground)]">Contact</a>
            </div>
            <p className="text-xs text-[var(--muted)]">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
