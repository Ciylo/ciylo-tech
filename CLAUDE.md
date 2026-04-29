# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server at localhost:3000
npm run build     # Static export to /out (output: "export" mode)
npm run start     # Serve production build
npm run lint      # Run ESLint
```

There are no tests in this project.

## Architecture

**Next.js 16 App Router** project configured for **static export** (`output: "export"` in `next.config.ts`). This means:
- No server-side features (no `getServerSideProps`, no API routes, no middleware)
- `dynamicParams = false` is required on dynamic routes; `generateStaticParams` must enumerate all slugs at build time
- `next/image` uses `unoptimized: true`
- Deployed behind Nginx with `trailingSlash: true`

### Route structure

All page routes live under `src/app/(pages)/` using the Next.js route group `(pages)`. The root `src/app/page.tsx` simply re-exports `HomeLanding` from `(pages)/home/page.tsx`.

Dynamic routes:
- `/case-study/detail/[slug]` — driven by `src/data/caseStudies.ts`
- `/industries/details/[slug]` — driven by `src/data/industries.ts`

### Data layer

All content is **static TypeScript data** in `src/data/`:
- `caseStudies.ts` — exports `caseStudyCards` (listing), `caseStudyDetails` (detail pages), and helper functions `getCaseStudyBySlug`, `getCaseStudiesByCategory`
- `industries.ts` — exports `industryCards`, `industryDetails`, and `getIndustryBySlug`

To add a new case study or industry, add entries to both the card array and the detail array in the respective data file, then add the slug to `generateStaticParams` (it's auto-derived from the data arrays).

### Component organization

- `src/components/layout/` — `Header`, `Footer`, `DecorativeImage` (a fixed background SVG hidden on `/industries/details` paths)
- `src/components/-webComponents/` — shared section components reused across pages (clients marquee, sliders, industry-specific case study grids, `GetStarted` CTA)
- `src/components/forms/` — form inputs
- `src/components/ui/` — base UI primitives (Button)

### Global layout

`src/app/layout.tsx` wraps every page with `Header`, `Footer`, and `DecorativeImage`. The `<main>` has `pt-18 md:pt-24` to clear the fixed header.

### Styling

- **Tailwind CSS v4** (`@import "tailwindcss"` in `globals.css`) — no `tailwind.config.js`; breakpoints are defined in `@theme` inside `globals.css`
- **Ant Design v6** (`antd`) for interactive components (Tabs, Drawer, Button, Input)
- **Swiper** for the Specialities carousel; custom CSS overrides for swiper in `globals.css`
- Brand color: `#00C9A7` (teal/green)
- Responsive pattern: `px-6 md:px-16 2xl:px-0` with `container mx-auto` for max-width centering

### Client vs server components

Pages that use React state or browser APIs are marked `"use client"` (e.g., `Header`, `CaseStudyPage`). Detail pages (`case-study/detail/[slug]`, `industries/details/[slug]`) are server components that call data helpers synchronously — no `async` data fetching needed since all data is in-memory TypeScript.
