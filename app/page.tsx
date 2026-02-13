import Link from "next/link";
import { Book3D } from "@/components/Book3D";
import { LeadForm } from "@/components/LeadForm";
import { CountUp } from "@/components/CountUp";

/* ──────────────────────────────────────────
   TEMPLATE DATA — Edit these to customize
   ────────────────────────────────────────── */

const GUIDE = {
  title: "The B2B Content Marketing Playbook",
  subtitle: "147 Proven Strategies",
  author: "Sarah Chen",
  badge: "FREE GUIDE",
  pageCount: 47,
  downloadCount: 12847,
};

const HEADLINE = {
  badge: `FREE GUIDE — ${GUIDE.pageCount} PAGES`,
  title: "The B2B Content Marketing Playbook",
  subtitle:
    "147 proven strategies to generate qualified leads, build authority, and double your pipeline — downloaded by 12,000+ marketers worldwide.",
};

const COMPANIES = ["Stripe", "Notion", "Linear", "Vercel", "Figma", "Webflow"];

const CHAPTERS = [
  {
    number: "01",
    title: "Foundations: Building Your Content Engine",
    description:
      "Learn the framework used by top B2B companies to consistently produce content that drives pipeline and revenue.",
    pages: 12,
  },
  {
    number: "02",
    title: "Finding Your Ideal Audience",
    description:
      "Stop guessing who you're writing for. Use these research methods to pinpoint exactly who needs your solution.",
    pages: 8,
  },
  {
    number: "03",
    title: "The 30-Day Content Calendar",
    description:
      "A plug-and-play editorial calendar with templates, topic formulas, and distribution schedules you can start using today.",
    pages: 10,
  },
  {
    number: "04",
    title: "Distribution That Actually Works",
    description:
      "Where to share, when to post, and how to get 10x more eyeballs on every piece of content you publish.",
    pages: 7,
  },
  {
    number: "05",
    title: "Measuring What Matters",
    description:
      "The only 5 metrics you need to track — and why most marketing teams are measuring the wrong things entirely.",
    pages: 6,
  },
  {
    number: "06",
    title: "Bonus: 15 Plug-and-Play Email Templates",
    description:
      "Copy-paste email sequences for nurture campaigns, cold outreach, and re-engagement that convert.",
    pages: 4,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "This guide completely changed how we approach content. We went from 2 blog posts a month to a full content engine generating 40+ leads weekly.",
    name: "Marcus Johnson",
    role: "Head of Marketing, TechFlow",
    initials: "MJ",
  },
  {
    quote:
      "I've read dozens of marketing guides. This is the only one I've bookmarked and actually refer back to. The 30-day calendar alone saved us hours of planning.",
    name: "Sarah Kim",
    role: "Content Lead, Basecamp",
    initials: "SK",
  },
  {
    quote:
      "We implemented the distribution framework from Chapter 4 and saw a 3x increase in organic traffic within 60 days. Highly recommend.",
    name: "David Chen",
    role: "VP Marketing, ScaleUp",
    initials: "DC",
  },
];

const AUTHOR = {
  name: "Sarah Chen",
  title: "Founder, ContentEngine",
  bio: "15+ years in B2B marketing. Previously led content at Stripe and Notion. Has helped 200+ companies build content strategies that generated over $50M in combined pipeline.",
  initials: "SC",
  credentials: [
    "200+ companies mentored",
    "Former Head of Content at Stripe",
    "$50M+ pipeline generated",
  ],
};

const FAQS = [
  {
    question: "Is this really free?",
    answer:
      "Yes, completely free. No credit card required. We believe great marketing education should be accessible to everyone. We just ask for your email so we can send you the guide and occasional tips.",
  },
  {
    question: "What format is the guide?",
    answer:
      "It's a beautifully designed 47-page PDF that you can read on any device, print out, or share with your team. Optimized for both screen reading and printing.",
  },
  {
    question: "Who is this guide for?",
    answer:
      "B2B marketers, content strategists, founders who handle their own marketing, and marketing teams looking to systematize their content operations. Whether you're just starting out or looking to level up, there's something for you.",
  },
  {
    question: "How is this different from other marketing guides?",
    answer:
      "This isn't theory — every strategy comes with real examples from actual companies, ready-to-use templates, and step-by-step instructions you can implement today. No fluff, no filler.",
  },
  {
    question: "Will I receive other emails after downloading?",
    answer:
      "You'll get a short 5-email sequence with bonus tips and resources over the next week. After that, you'll only receive our monthly newsletter. You can unsubscribe with one click at any time.",
  },
];

const SNEAK_PEEK = {
  quote:
    "The companies that win at content marketing aren't the ones who publish the most — they're the ones who publish with intention. One well-researched piece that answers a real question will outperform fifty generic blog posts every single time.",
  chapter: "Chapter 1 — Foundations",
  page: "Page 14",
};

/* ──────────────────────────────────────────
   PAGE COMPONENT
   ────────────────────────────────────────── */

export default function MagnetPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 sm:pb-24 sm:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — Content */}
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
                {HEADLINE.badge}
              </div>

              {/* Headline */}
              <h1 className="mb-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.5rem]">
                {HEADLINE.title}
              </h1>

              {/* Subtitle */}
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
                {HEADLINE.subtitle}
              </p>

              {/* Trust indicators */}
              <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 1a.75.75 0 01.65.38l2.16 3.75 4.31.66a.75.75 0 01.42 1.27L14.4 10.1l.74 4.28a.75.75 0 01-1.09.79L10 13.18l-4.05 1.99a.75.75 0 01-1.09-.79l.74-4.28L2.46 7.06a.75.75 0 01.42-1.27l4.31-.66 2.16-3.75A.75.75 0 0110 1z" />
                  </svg>
                  4.9 rating
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--border)]" />
                <span className="flex items-center gap-1.5">
                  <CountUp target={GUIDE.downloadCount} suffix="+" />
                  {" "}downloads
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--border)]" />
                <span>Free forever</span>
              </div>

              {/* Form */}
              <LeadForm variant="hero" />
            </div>

            {/* Right — 3D Book */}
            <div className="flex items-center justify-center animate-fade-in-up delay-200 lg:justify-end">
              <Book3D
                title={GUIDE.title}
                subtitle={GUIDE.subtitle}
                author={GUIDE.author}
                badge={GUIDE.badge}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOGO BAR ===== */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]/50">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="mb-5 text-center text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
            Downloaded by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {COMPANIES.map((company) => (
              <span
                key={company}
                className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--foreground)]/25"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INSIDE ===== */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            What&apos;s inside
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Everything you need to build a content engine that generates leads on autopilot
          </h2>
          <p className="text-[var(--muted)]">
            {GUIDE.pageCount} pages of actionable strategies, templates, and real-world examples.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {CHAPTERS.map((chapter) => (
            <Link
              key={chapter.number}
              href={`/chapters/${chapter.number}`}
              className="group block rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all hover:border-[var(--accent)]/30 hover:shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                {/* Chapter number */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] font-[family-name:var(--font-display)] text-lg font-bold text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)]/10">
                  {chapter.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--foreground)]">
                      {chapter.title}
                    </h3>
                    <span className="rounded-full bg-[var(--surface)] px-2.5 py-0.5 text-xs font-medium text-[var(--muted)]">
                      {chapter.pages} pages
                    </span>
                  </div>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {chapter.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden shrink-0 self-center text-[var(--border)] transition-colors group-hover:text-[var(--accent)] sm:block">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Total page count */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[var(--muted)]">
            <span className="font-semibold text-[var(--foreground)]">{GUIDE.pageCount} pages</span>{" "}
            of strategies, templates, and real examples — not a single page of filler.
          </p>
        </div>
      </section>

      {/* ===== SNEAK PEEK ===== */}
      <section className="bg-[var(--secondary)] dark:bg-[var(--surface)]">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <div className="text-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-white/50 dark:text-[var(--muted)]">
              Sneak peek — {SNEAK_PEEK.chapter}
            </p>
            <blockquote className="font-[family-name:var(--font-display)] text-2xl font-medium leading-relaxed text-white dark:text-[var(--foreground)] sm:text-3xl">
              &ldquo;{SNEAK_PEEK.quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-white/40 dark:text-[var(--muted)]">
              — {SNEAK_PEEK.page}
            </p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Social proof
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Marketers who&apos;ve read this guide
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 1a.75.75 0 01.65.38l2.16 3.75 4.31.66a.75.75 0 01.42 1.27L14.4 10.1l.74 4.28a.75.75 0 01-1.09.79L10 13.18l-4.05 1.99a.75.75 0 01-1.09-.79l.74-4.28L2.46 7.06a.75.75 0 01.42-1.27l4.31-.66 2.16-3.75A.75.75 0 0110 1z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 flex-1 leading-relaxed text-[var(--foreground)]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-[var(--border)] pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary)] text-sm font-bold text-white dark:bg-[var(--secondary)]/20 dark:text-[var(--secondary)]">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">{testimonial.name}</p>
                  <p className="text-xs text-[var(--muted)]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT THE AUTHOR ===== */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]/30">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--secondary)] text-2xl font-bold text-white sm:h-28 sm:w-28">
                {AUTHOR.initials}
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                About the author
              </p>
              <h3 className="mb-1 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--foreground)]">
                {AUTHOR.name}
              </h3>
              <p className="mb-4 text-sm font-medium text-[var(--muted)]">{AUTHOR.title}</p>
              <p className="mb-6 leading-relaxed text-[var(--muted)]">{AUTHOR.bio}</p>

              {/* Credentials */}
              <div className="flex flex-wrap gap-3">
                {AUTHOR.credentials.map((credential) => (
                  <span
                    key={credential}
                    className="flex items-center gap-1.5 rounded-full bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] border border-[var(--border)]"
                  >
                    <svg className="h-3 w-3 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            FAQ
          </p>
          <h2 className="mb-12 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--background)]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-6">
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--foreground)] sm:text-lg">
                  {faq.question}
                </h3>
                <span className="faq-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--muted)]">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </summary>
              <div className="faq-content px-6 pb-6">
                <p className="leading-relaxed text-[var(--muted)]">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)]/40">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <div className="text-center">
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Ready to transform your content strategy?
            </h2>
            <p className="mb-10 text-lg text-[var(--muted)]">
              Join <CountUp target={GUIDE.downloadCount} suffix="+" /> marketers who&apos;ve already downloaded the guide. It takes 30 seconds.
            </p>
            <LeadForm variant="footer" />
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
