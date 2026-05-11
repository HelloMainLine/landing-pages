# Nail Salon Project — Review Punchlist

## Critical Issues (must fix before deploy)

1. **Missing sections vs SPEC:** No Location section (Google Map, hours table, directions). No "Pricing" section — current "Pricing" is just a promo bar, not the tiered pricing table with Basic/Deluxe/Premium tiers and add-on chips. Services section missing category tabs (Manicure/Pedicure/Gel/etc.) and "Book" buttons per card.

2. **Missing dashboard pages (4 of 12):** `/dashboard/schedule` (staff scheduling grid), `/dashboard/reports` (analytics with charts), `/dashboard/settings` (business config), `/auth/login` (Supabase Auth login). No login/auth flow exists at all — dashboard is publicly accessible.

3. **Color contrast violation (WCAG 2.1 AA):** `text-[#D4A5A5]` (rose gold) used on light/white backgrounds in multiple places (category badges, stat labels, section headings). Rose on canvas = 2.8:1, fails the 4.5:1 minimum for normal text. SPEC explicitly warns "decorative only. Do not use for text."

4. **Supabase schema incomplete vs SPEC:** SPEC calls for 16+ tables (service_categories, service_add_ons, staff_service_mapping, clients [separate from profiles], gift_cards, commissions, review_requests, business_settings, stock_adjustments). Only 10 are implemented. The schema uses `profiles` for clients/staff/admin but SPEC expects a separate `clients` table with different fields.

5. **No server-side Supabase integration:** `lib/supabase/` (client.ts, browser-client.ts, admin.ts) does not exist. All dashboard data is hardcoded mock data — no actual DB queries. No Server Actions or API routes.

## Minor Issues (nice to fix)

6. **Gallery lacks interactivity:** No lightbox on click, no category filter chips (spec wants All/Gel Art/3D Designs/Ombre/French Tips/Seasonal), no zoom on hover. Gallery uses gradient placeholder images — no real images.

7. **Testimonials missing features:** No aggregate rating display ("★ 4.8 (127 reviews)" with Google logo). No "Leave a Review" link to Google Business Profile. No client photos.

8. **About section title mismatch:** SPEC says "Meet the Team" with staff cards (photo, name, title, experience, specialties). Current is "Our Studio" with a text story and stats grid. No staff member cards.

9. **Code duplication:** `Svg` icon component is redefined identically in every dashboard page (appointments, clients, services, staff, products, payments, reviews pages) instead of being shared.

10. **Missing project scaffolding:** No `README.md`, no `next.config.*`, no `public/images/` directory, no `components/ui/` (shadcn/ui) as SPEC specifies. `class-variance-authority` dependency is unused.

11. **Booking form is single-page, not multi-step:** SPEC wants 5-step flow (service → staff → date/time → info → confirm). Current is a single form with no staff selection, no real-time availability, no confirmation step.

12. **Header nav links mismatch:** SPEC says nav should be Services · Gallery · About · Contact. Current has Services · Gallery · About · Contact (matches), but there's no `#contact` section on the page — the Location section (which would provide this) is missing.

13. **Accessibility gaps:** No skip-to-content link. Some icon-only buttons (edit, delete, view in tables) lack aria-labels or title attributes. The dashboard sidebar mobile overlay backdrop has aria-hidden issues.

## Clean Passes (what's good)

- **Build compiles cleanly** — zero TypeScript errors, zero ESLint warnings, zero build failures.
- **Responsive design** works well at 375px, 768px, and 1280px — mobile hamburger menu, grid stacking, table overflow-x-auto.
- **Design tokens are consistent** — `#D4A5A5` rose gold, `#FAFAF7` canvas, Playfair Display + Inter fonts used throughout via CSS variables and Tailwind config.
- **Semantic HTML** — proper use of `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<h1>`-`<h4>`, `<table>`, `<form>`, `<label>` with `htmlFor`.
- **Forms have proper labels** — all form fields in booking section use `<label htmlFor>` with matching `id`.
- **Decorative SVGs have `aria-hidden="true"`** — consistently applied.
- **`prefers-reduced-motion` respected** — animations disabled in globals.css.
- **`focus-visible` outlines defined** — global rose-colored focus ring with offset.
- **`cn()` utility used throughout** — proper clsx + tailwind-merge pattern.
- **TypeScript strict mode enabled** (`strict: true` in tsconfig.json).
- **No console.log in production code** — clean.
- **Dashboard UX is cohesive** — consistent card borders, badge styles, hover states, and color usage across all 8 pages.
- **Supabase RLS is well-structured** — `is_admin()` helper function, per-table policies with clear role separation, proper `WITH CHECK` clauses.

## Overall Verdict

**Needs rework** — The project builds clean and has excellent design token consistency, but is missing ~40% of the SPEC requirements. Critical gaps include no auth/login, 4 missing dashboard pages, missing Location/Pricing sections, WCAG contrast failures, incomplete Supabase schema (10 tables vs 16+), and no actual backend integration (all hardcoded mock data). The public site is ~60% complete, the dashboard is ~65% complete by page count but 0% functional without auth/backend. Requires 2-3 more development passes to reach SPEC compliance.
