# MagnetPage — Lead Magnet Download Page

> A high-converting download page template for e-books, whitepapers, templates, checklists, and other lead magnets.

## Brand Identity

- **Personality:** Premium, sophisticated, trustworthy — built for B2B marketers
- **Primary Colors:**
  - Background: `#F8F7F4` (warm off-white)
  - Foreground: `#1E1B4B` (deep indigo — rich, not plain black)
  - Accent/CTA: `#D97706` (warm amber/gold — premium, high-converting)
  - Secondary: `#4338CA` (rich indigo — used for book cover, headings)
  - Muted text: `#6B7280` (cool gray)
  - Surface/cards: `#EEECE7` (warm stone)
- **Fonts:**
  - Display/headings: Space Grotesk (modern, clean)
  - Body text: DM Sans (readable, approachable)
- **Dark mode:** Fully supported with inverted palette

## Pages

- **Homepage** (`/`) — The main lead magnet landing page with email capture form
- **Thank You** (`/thank-you`) — Post-submission confirmation page with download link and upsell

## Homepage Sections

1. **Hero** — Two-column layout: headline, subtitle, trust indicators, email form on the left; 3D floating book mockup on the right
2. **Logo Bar** — "Downloaded by teams at" with company names (Stripe, Notion, Linear, Vercel, Figma, Webflow)
3. **What's Inside** — 6 chapter previews with descriptions and page counts in card layout
4. **Sneak Peek** — Full-width dark section with a pull quote from the guide
5. **Testimonials** — 3-column grid with star ratings, quotes, names, and roles
6. **About the Author** — Author photo (initials avatar), bio, and credential badges
7. **FAQ** — 5 expandable questions using native `<details>` elements
8. **Final CTA** — Repeated email capture form with download counter
9. **Footer** — Minimal with privacy/terms/contact links

## Thank You Page Sections

1. **Success Hero** — Checkmark animation, confirmation message, direct download button
2. **Quick Poll** — Optional single-question survey ("What's your biggest challenge?")
3. **What's Next** — Email sequence preview showing 4 upcoming bonus emails
4. **Upsell** — Course/service offer with pricing, features, and discount badge
5. **Footer** — Same as homepage

## Components

- **Book3D** (`components/Book3D.tsx`) — CSS-only 3D book mockup with floating animation. Props: `title`, `subtitle`, `author`, `badge`
- **LeadForm** (`components/LeadForm.tsx`) — Email capture form with loading state. Props: `variant` ("hero" or "footer"), `buttonText`, `placeholder`. Redirects to `/thank-you?email=...` on submit
- **CountUp** (`components/CountUp.tsx`) — Animated number counter that triggers on scroll. Props: `target`, `suffix`, `duration`

## Key Features

- **3D Book Mockup** — Pure CSS perspective transforms with floating animation, page edge details, and spine shadow
- **Progressive Profiling** — Email-only on landing page, optional challenge poll on thank-you page
- **Download Counter** — Animated count-up number (12,847+) triggers when scrolled into view
- **Social Proof** — Star ratings, testimonials with initials avatars, company logos
- **FAQ Accordion** — Native HTML `<details>` elements, no JavaScript needed
- **Upsell Section** — Pricing card with original/discount price, feature checklist
- **Dark Mode** — Full dark mode support via CSS `prefers-color-scheme`
- **Responsive** — Fully responsive from mobile to desktop

## How to Customize

- **To change the guide topic/content:** Edit the data objects at the top of `app/page.tsx` (GUIDE, HEADLINE, CHAPTERS, TESTIMONIALS, etc.)
- **To change colors:** Edit the CSS variables in `app/globals.css` under `:root`
- **To change the upsell offer:** Edit the UPSELL object at the top of `app/thank-you/ThankYouContent.tsx`
- **To connect a real email service:** Replace the `setTimeout` redirect in `components/LeadForm.tsx` with an API call to your email provider
- **To add a real PDF download:** Replace the `href="#"` on the download button in the thank-you page with your actual PDF URL

## Template Data (Easy to Edit)

All content is stored in clearly labeled data objects at the top of each page file:

| File | Data Objects |
|------|-------------|
| `app/page.tsx` | GUIDE, HEADLINE, COMPANIES, CHAPTERS, TESTIMONIALS, AUTHOR, FAQS, SNEAK_PEEK |
| `app/thank-you/ThankYouContent.tsx` | UPSELL, EMAIL_SEQUENCE, CHALLENGE_OPTIONS |

## Recent Changes

- Initial build: Created complete MagnetPage template with landing page, thank-you page, 3D book mockup, progressive profiling form, animated counter, testimonials, FAQ, and upsell section
- Updated color theme to deep indigo + warm amber/gold palette (from burnt sienna + forest green)
