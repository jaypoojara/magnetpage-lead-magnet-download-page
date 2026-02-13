import { notFound } from "next/navigation";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";

/* ──────────────────────────────────────────
   CHAPTER DATA — Edit to customize
   ────────────────────────────────────────── */

const CHAPTERS: Record<
  string,
  {
    number: string;
    title: string;
    pages: number;
    description: string;
    takeaways: string[];
    preview: string;
    quote: { text: string; page: string };
    nextChapter?: { slug: string; title: string };
  }
> = {
  "01": {
    number: "01",
    title: "Foundations: Building Your Content Engine",
    pages: 12,
    description:
      "Before you write a single blog post, you need a system. This chapter walks you through the exact framework used by companies like HubSpot, Stripe, and Notion to turn content into a predictable revenue channel. You'll learn how to audit your current content, identify gaps in your funnel, and build a repeatable process that scales without burning out your team.",
    takeaways: [
      "The Content-Revenue Framework that maps every piece to a business outcome",
      "How to run a content audit in under 2 hours (with our scoring template)",
      "The 3 content pillars every B2B company needs before scaling",
      "Why most content strategies fail — and the one shift that fixes it",
      "Setting realistic KPIs based on your stage and resources",
    ],
    preview:
      "Most companies start content marketing backwards. They hire a writer, start a blog, publish twice a week, and wonder why nothing happens after 6 months. The problem isn't the content — it's the lack of a system. A content engine isn't about volume. It's about connecting every piece you create to a specific stage in your buyer's journey.",
    quote: {
      text: "The companies that win at content marketing aren't the ones who publish the most — they're the ones who publish with intention.",
      page: "Page 14",
    },
    nextChapter: { slug: "02", title: "Finding Your Ideal Audience" },
  },
  "02": {
    number: "02",
    title: "Finding Your Ideal Audience",
    pages: 8,
    description:
      "Generic content attracts generic leads. This chapter gives you research methods that go beyond basic personas to uncover what your ideal customers actually search for, worry about, and need help with. You'll build an audience profile so detailed that every piece of content you write feels like it was made for one specific person.",
    takeaways: [
      "The 'Jobs To Be Done' interview framework for content research",
      "How to mine Reddit, Quora, and G2 reviews for content gold",
      "Building a content-first ICP that goes beyond demographics",
      "The keyword intent matrix — matching topics to buyer stages",
      "3 free tools to validate content ideas before you write",
    ],
    preview:
      "Here's a secret most content marketers won't tell you: personas are nearly useless for content strategy. Knowing that your buyer is 'Marketing Mary, 35, VP of Marketing at a mid-size SaaS company' tells you nothing about what to write. What you need to know is what keeps Mary up at night, what she Googles at 11pm, and what would make her forward an article to her CEO.",
    quote: {
      text: "Stop writing for personas. Start writing for problems. The content that converts is the content that makes someone feel understood.",
      page: "Page 23",
    },
    nextChapter: { slug: "03", title: "The 30-Day Content Calendar" },
  },
  "03": {
    number: "03",
    title: "The 30-Day Content Calendar",
    pages: 10,
    description:
      "Strategy without execution is just a slide deck. This chapter gives you a complete 30-day editorial calendar you can start using immediately — with topic formulas, content templates, and a distribution schedule already built in. No more staring at a blank doc wondering what to write next.",
    takeaways: [
      "A ready-to-use 30-day calendar template (just fill in your topics)",
      "7 proven topic formulas that work for any B2B niche",
      "The 'Content Batching' system to write 4x faster",
      "How to repurpose one pillar piece into 12+ assets",
      "The ideal publishing cadence based on your team size",
    ],
    preview:
      "The biggest myth in content marketing is that you need to publish every day. You don't. What you need is consistency and a system that removes the decision fatigue from content creation. The 30-day calendar in this chapter isn't about filling slots — it's about creating a rhythm that your audience learns to expect and your team can actually maintain.",
    quote: {
      text: "Consistency beats frequency every single time. One great piece a week will outperform five mediocre ones.",
      page: "Page 31",
    },
    nextChapter: { slug: "04", title: "Distribution That Actually Works" },
  },
  "04": {
    number: "04",
    title: "Distribution That Actually Works",
    pages: 7,
    description:
      "Creating great content is only half the battle. If nobody sees it, it doesn't matter. This chapter reveals the distribution playbook that top B2B marketers use to get 10x more eyeballs on everything they publish — without paid ads. From LinkedIn strategies to email sequences to community seeding, you'll learn exactly where and when to share.",
    takeaways: [
      "The 1-7-30 distribution framework for every piece of content",
      "LinkedIn posting strategies that actually drive B2B engagement",
      "How to build a 'distribution list' of 50+ channels",
      "The email newsletter format that gets 40%+ open rates",
      "Community seeding: how to share without being spammy",
    ],
    preview:
      "Here's the uncomfortable truth: the best content in the world is worthless if nobody reads it. Most B2B marketers spend 80% of their time creating and 20% distributing. Flip that ratio. For every hour you spend writing, spend three hours making sure the right people see it. This chapter shows you how.",
    quote: {
      text: "Stop creating more. Start distributing better. The ROI of promotion always exceeds the ROI of production.",
      page: "Page 38",
    },
    nextChapter: { slug: "05", title: "Measuring What Matters" },
  },
  "05": {
    number: "05",
    title: "Measuring What Matters",
    pages: 6,
    description:
      "Pageviews are vanity. Pipeline is sanity. This chapter cuts through the noise and gives you the only 5 metrics you need to track to prove content ROI — plus a simple dashboard you can set up in 30 minutes. No more drowning in data that doesn't drive decisions.",
    takeaways: [
      "The 5 metrics that actually matter (and why the rest are noise)",
      "How to set up a content attribution dashboard in 30 minutes",
      "Connecting content to pipeline: the UTM + CRM method",
      "Benchmarks by industry so you know what 'good' looks like",
      "How to present content ROI to your CEO in one slide",
    ],
    preview:
      "If you're tracking pageviews, time on page, and social shares as your primary content metrics, you're measuring the wrong things. These are activity metrics, not outcome metrics. They tell you what happened but not whether it mattered. The only question that matters is: did this content help us generate revenue?",
    quote: {
      text: "The only 5 metrics you need: traffic-to-lead rate, content-sourced pipeline, email capture rate, content-influenced deals, and cost per lead by channel.",
      page: "Page 42",
    },
    nextChapter: { slug: "06", title: "Bonus: 15 Plug-and-Play Email Templates" },
  },
  "06": {
    number: "06",
    title: "Bonus: 15 Plug-and-Play Email Templates",
    pages: 4,
    description:
      "Copy, paste, customize, send. This bonus chapter gives you 15 battle-tested email templates for the three sequences every B2B company needs: lead nurture, cold outreach, and re-engagement. Each template comes with subject line options, send timing recommendations, and real performance data.",
    takeaways: [
      "5 lead nurture emails that warm up new subscribers",
      "5 cold outreach emails with 30%+ open rates",
      "5 re-engagement emails to revive dead leads",
      "Subject line formulas with A/B test results",
      "Optimal send times and cadence for each sequence",
    ],
    preview:
      "These aren't theoretical templates. Every single one has been tested across 200+ B2B companies and optimized for performance. The lead nurture sequence alone has generated over $2M in attributed pipeline for our clients. Just swap in your product details, adjust the tone, and hit send.",
    quote: {
      text: "The best email isn't the cleverest one. It's the one that sounds like it was written by a real person who genuinely wants to help.",
      page: "Page 45",
    },
  },
};

/* ──────────────────────────────────────────
   PAGE COMPONENT
   ────────────────────────────────────────── */

export async function generateStaticParams() {
  return Object.keys(CHAPTERS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = CHAPTERS[slug];
  if (!chapter) return {};
  return {
    title: `Chapter ${chapter.number}: ${chapter.title} — Free Preview`,
    description: chapter.description.slice(0, 160),
  };
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = CHAPTERS[slug];

  if (!chapter) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <div className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to guide overview
          </Link>
        </div>
      </div>

      {/* Chapter Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-12 sm:pt-16">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--accent)]">
            {chapter.number}
          </span>
          <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
            {chapter.pages} pages
          </span>
          <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
            Free preview
          </span>
        </div>

        <h1 className="mb-6 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
          {chapter.title}
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
          {chapter.description}
        </p>
      </section>

      {/* Key Takeaways */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]/40">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--foreground)]">
            What you&apos;ll learn
          </h2>
          <div className="space-y-4">
            {chapter.takeaways.map((takeaway, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10">
                  <svg className="h-3.5 w-3.5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[var(--foreground)] leading-relaxed">{takeaway}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Excerpt */}
      <section className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--foreground)]">
          Preview excerpt
        </h2>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8">
          <p className="text-lg leading-relaxed text-[var(--muted)]">{chapter.preview}</p>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="bg-[var(--secondary)] dark:bg-[var(--surface)]">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:py-16">
          <blockquote className="text-center font-[family-name:var(--font-display)] text-xl font-medium leading-relaxed text-white dark:text-[var(--foreground)] sm:text-2xl">
            &ldquo;{chapter.quote.text}&rdquo;
          </blockquote>
          <p className="mt-4 text-center text-sm text-white/40 dark:text-[var(--muted)]">
            — {chapter.quote.page}
          </p>
        </div>
      </section>

      {/* CTA — Get the Full Guide */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Want the full chapter?
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Download the complete playbook — free
          </h2>
          <p className="mb-10 text-lg text-[var(--muted)]">
            Get all {chapter.pages} pages of this chapter plus 5 more — 47 pages of actionable strategies.
          </p>
          <LeadForm variant="footer" buttonText="Get the Full Guide — Free" />
        </div>
      </section>

      {/* Next Chapter Navigation */}
      {chapter.nextChapter && (
        <section className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-4xl px-6 py-8">
            <Link
              href={`/chapters/${chapter.nextChapter.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all hover:border-[var(--accent)]/30 hover:shadow-sm"
            >
              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                  Next chapter
                </p>
                <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--foreground)]">
                  {chapter.nextChapter.title}
                </p>
              </div>
              <svg className="h-5 w-5 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Link href="/" className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--foreground)]">
              MagnetPage
            </Link>
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
