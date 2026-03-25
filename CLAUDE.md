@AGENTS.md

# PowerStrokeSpecialist — Codebase Guide for AI Assistants

## Project Overview

A **Next.js 16 marketing website** for a diesel truck repair shop (Power Stroke Specialist) in Baytown, Texas. Single-page application with scroll-based navigation, animated UI, contact form submissions via Resend email, and comprehensive SEO.

**Live URL:** https://powerstrokespecialist.com
**No database. No authentication. No test suite.**

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.1 (App Router) |
| Language | TypeScript 5 (strict mode) |
| UI | React 19, Tailwind CSS 3.4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Forms | React Hook Form 7 + Zod 4 |
| Email | Resend 6 |
| Hosting | Vercel (images on Vercel Blob) |

---

## Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout: fonts, JSON-LD schema, GA, Navbar, Footer
│   ├── page.tsx            # Homepage (single-page app — all sections here)
│   ├── about/page.tsx      # Redirects to /#about
│   ├── services/page.tsx   # Redirects to /#services
│   ├── contact/page.tsx    # Redirects to /#contact
│   ├── not-found.tsx       # 404 page
│   ├── robots.ts           # SEO robots config
│   ├── sitemap.ts          # Dynamic sitemap (4 routes)
│   └── api/
│       └── contact/route.ts  # POST endpoint — validates with Zod, sends via Resend
├── components/             # 21 client components
├── lib/
│   ├── constants.ts        # ALL business data (shop info, services, reviews, hours)
│   ├── site.ts             # SITE_URL + buildMetadata() helper
│   ├── contact-schema.ts   # Zod schema for contact form
│   └── icon-map.ts         # Lucide icon name → component mapping
└── styles/
    └── globals.css         # Tailwind directives + custom component classes
```

---

## Key Conventions

### 1. All business data lives in `src/lib/constants.ts`

When updating shop info (phone, address, hours, services, reviews), **only edit `constants.ts`**. Components read from this file — never hardcode values in components.

```typescript
// Key exports:
BUSINESS_INFO  // name, address, phone, coordinates, Facebook URL
HOURS          // Mon-Fri 8AM-6PM, closed weekends
SERVICES       // 13 service types with icons
SPECIALTY_SERVICES  // Bulletproofing, Aftermarket
REVIEWS        // Customer testimonials
STATS          // 100+ engines, 10+ years, gas & diesel
```

### 2. Import path alias

Always use `@/` for imports from `src/`:

```typescript
import { BUSINESS_INFO } from '@/lib/constants'
import Hero from '@/components/Hero'
```

### 3. Client components require `"use client"`

Every component in `src/components/` uses Framer Motion or browser APIs and must have the directive at the top:

```typescript
"use client"
```

Server components: `layout.tsx`, `page.tsx`, route pages, API routes.

### 4. Tailwind custom theme — use these, don't invent new colors

```
navy-deep / navy-dark / navy / navy-light / navy-50   (brand blues: #1E3A8A family)
action / action-dark / action-light                    (CTA reds: #DC2626 family)
```

Custom component classes (defined in `globals.css`):
- `.wrap` — max-w-7xl container with responsive padding
- `.btn-navy`, `.btn-action`, `.btn-outline`, `.btn-outline-white` — button variants
- `.input-field`, `.input-field-select` — form inputs
- `.label` — section eyebrow text

### 5. Animation pattern with Framer Motion

```typescript
// Standard scroll reveal pattern used throughout:
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

Use `AnimatePresence` for conditional rendering/modals.

### 6. Metadata via `buildMetadata()`

```typescript
// In app/ route files:
import { buildMetadata } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'Page Title',
  description: 'Page description',
  path: '/page-path',
})
```

### 7. Contact API route (`src/app/api/contact/route.ts`)

- Accepts POST with JSON body matching `contactSchema` from `src/lib/contact-schema.ts`
- Validates with Zod, returns 400 on invalid input
- Sends email via Resend — requires env vars (see below)
- Returns `{ success: true, delivered: boolean }`

---

## Environment Variables

```bash
RESEND_API_KEY          # Required — Resend API key for contact form emails
CONTACT_TO_EMAIL        # Required — where form submissions are delivered
CONTACT_FROM_EMAIL      # Optional — sender address (defaults to onboarding@resend.dev)
NEXT_PUBLIC_GA_ID       # Optional — Google Analytics measurement ID
```

---

## Development Commands

```bash
npm run dev      # Start dev server (uses Turbopack)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint check
```

---

## Next.js Version Warning

**This project uses Next.js 16**, which has breaking changes from previous versions. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`. APIs, conventions, and file structure may differ from training data. Heed deprecation notices.

---

## Architecture Notes

- **Single-page app:** All content sections (#home, #services, #about, #contact) are rendered on `src/app/page.tsx`. The `/about`, `/services`, `/contact` routes simply redirect to anchors on the homepage.
- **Scroll offset:** CSS sets `scroll-margin-top: 88px` on anchor targets to account for the sticky Navbar height.
- **Images:** Remote images must be served from `2pbqjgxycewduhvh.public.blob.vercel-storage.com` (configured in `next.config.ts`). Local images go in `public/images/`.
- **SEO:** JSON-LD `AutoRepair` schema is injected in `layout.tsx`. Each page uses the Metadata API for OpenGraph/Twitter tags.
- **Accessibility:** Skip-to-content link in layout, ARIA labels on interactive elements, reduced-motion media query in CSS.
- **No tests:** There is no test framework configured. Manual testing and `npm run build` are the current validation methods.
