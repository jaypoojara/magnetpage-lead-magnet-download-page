"use client";

import { useState } from "react";

export function LeadForm({
  variant = "hero",
  buttonText = "Get Your Free Copy",
  placeholder = "Enter your email address",
}: {
  variant?: "hero" | "footer";
  buttonText?: string;
  placeholder?: string;
}) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate brief submission delay, then redirect to thank-you page
    setTimeout(() => {
      window.location.href = `/thank-you?email=${encodeURIComponent(email)}`;
    }, 600);
  };

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className="mx-auto w-full max-w-lg">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="flex-1 rounded-xl border border-[var(--border)] bg-white px-5 py-4 text-[var(--foreground)] placeholder:text-[var(--muted)]/60 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 dark:bg-[var(--surface)]"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="pulse-glow whitespace-nowrap rounded-xl bg-[var(--accent)] px-8 py-4 font-[family-name:var(--font-display)] font-semibold text-white transition-all hover:bg-[var(--accent-hover)] disabled:opacity-70"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </span>
            ) : (
              buttonText
            )}
          </button>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-500">{error}</p>
        )}
        <p className="mt-3 text-center text-xs text-[var(--muted)]">
          Instant access. No spam. Unsubscribe anytime.
        </p>
      </form>
    );
  }

  // Hero variant — horizontal on desktop, stacked on mobile
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <svg
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted)]/50"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="w-full rounded-xl border border-[var(--border)] bg-white py-4 pl-12 pr-5 text-[var(--foreground)] placeholder:text-[var(--muted)]/50 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 dark:bg-[var(--surface)]"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="pulse-glow rounded-xl bg-[var(--accent)] px-8 py-4 font-[family-name:var(--font-display)] font-semibold text-white transition-all hover:bg-[var(--accent-hover)] hover:shadow-lg disabled:opacity-70"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            buttonText
          )}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
      <p className="mt-3 text-xs text-[var(--muted)]">
        Instant access. No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
