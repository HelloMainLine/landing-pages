# Nail Salon Website + Owner Dashboard — SPEC

> **Project:** Full nail salon public website with owner dashboard
> **Output:** `/root/landing-pages/nail-salon/`
> **Stack:** Next.js 15 (App Router) + Tailwind CSS + Supabase (Postgres + Auth + RLS)
> **Status:** Pre-build

---

## 1. Brand Direction

**Modern · Elegant · Feminine (tasteful, not stereotypical)**

- Vibe: upscale boutique salon — think glass counters, marble accents, soft lighting, curated playlists
- Tone: warm, confident, aspirational — "Your nails, elevated"
- Avoid: bubblegum pink, glitter overload, cartoonish nail icons, "spa" clichés
- Embrace: blush tones, champagne, soft neutrals, clean lines, editorial photography
- Voice: "We don't just paint nails — we craft the finishing touch to every outfit"

---

## 2. Design Tokens (adapted for nail salon)

Adapted from `design-editorial-luxe-tokens` and `design-light-barbershop`, swapping brass for rose gold/champagne.

```css
/* Nail Salon Palette */
--color-canvas:        #FAFAF7;   /* page background — warm ivory */
--color-ink:           #1A1A1A;   /* text + borders + primary buttons */
--color-ink-muted:     #3D3D3D;   /* secondary text */
--color-rose:          #D4A5A5;   /* THE accent — rose gold for headings, decorative */
--color-rose-dark:     #B88686;   /* hover states, borders */
--color-surface:       #F5F4F0;   /* card backgrounds */
--color-surface-alt:   #F0EDE8;   /* alternate card / section backgrounds */
--color-muted:         #6B6B6B;   /* tertiary text, captions */
--color-border:        #D4A5A5;   /* 1px rose borders */
--color-success:       #4A7C59;   /* booking confirmed, available slot */
--color-warning:       #C4953A;   /* limited availability, low stock */
--color-error:         #C44A4A;   /* no-show, cancelled, out of stock */
```

**Typography:**
```css
--font-heading: "Playfair Display", Georgia, serif;   /* display / headlines */
--font-body:    "Inter", system-ui, sans-serif;
```

| Token | Value | Usage |
|-------|-------|-------|
| `--font-heading` | Playfair Display 400/600/700 | Hero H1, section titles |
| `--font-body` | Inter 300/400/500/600 | Body text, labels, buttons, UI |
| `--radius-sm` | 4px | Inputs, small elements |
| `--radius-md` | 8px | Cards, modals |
| `--radius-lg` | 12px | Hero container, booking widget |
| `--spacing-section` | 6rem (desktop) / 4rem (mobile) | Section vertical padding |

**Contrast notes:**
- Rose (#D4A5A5) on canvas (#FAFAF7) = 2.8:1 → decorative only. **Do not use for text.**
- Ink (#1A1A1A) on canvas = 18.4:1 → AAA.
- Ink-muted (#3D3D3D) on canvas = 9.1:1 → AAA.

**CDN fonts:**
```
https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap
```

---

## 3. Public Site Sections

### Header / Navigation
- Sticky header with translucent backdrop blur on scroll
- Logo (text-only: "LUXE NAILS" in Playfair Display, rose)
- Nav links: Services · Gallery · About · Contact
- CTA button: "Book Now" (rose filled)
- Mobile: hamburger menu with slide-out drawer

### Hero
- Full-viewport hero with background image (salon interior or nail art close-up)
- Overlay: gradient from dark to transparent
- H1: "Your Nails, Elevated." in Playfair Display
- Subtitle: "Premium nail artistry in [City]. Book your experience today."
- Two CTAs: "Book Appointment" (primary) · "View Services" (outline)
- Optional: floating stats bar (50+ polish colors, 5-star rated, 500+ happy clients)

### Services & Pricing
- Section title: "Our Services"
- Category tabs: Manicure · Pedicure · Gel · Acrylic · Dip Powder · Nail Art · Waxing
- Each service card: name, short description, duration, price range, "Book" button
- Tiered pricing displayed per category (Basic / Deluxe / Premium)
- Add-on chips below each tier (nail art per finger, gel top coat, paraffin dip)
- New client special badge on relevant services
- "Book Now" button opens booking widget modal or navigates to booking section

### Gallery
- Section title: "Our Work"
- Masonry grid layout with high-resolution nail art photos
- Category filter chips: All · Gel Art · 3D Designs · Ombre · French Tips · Seasonal
- Lightbox on click with navigation arrows
- Zoom on hover/tap for detail
- "Follow us on Instagram" CTA below gallery

### About / Team
- Section title: "Meet the Team"
- Salon story: 1-2 paragraphs about philosophy, experience, atmosphere
- Staff cards: photo, name, title/role, experience years, specialties
- Salon ambiance photos beside staff grid
- Certifications/license badges displayed

### Testimonials / Reviews
- Section title: "What Our Clients Say"
- Carousel of testimonial cards: client photo, name, service received, quote, star rating
- Aggregate rating display: "★ 4.8 (127 reviews)" with Google logo
- "Leave a Review" link to Google Business Profile

### Location & Hours
- Section title: "Visit Us"
- Embedded Google Map (responsive)
- Address, phone (click-to-call), email
- Hours table: day columns with hours
- "Get Directions" and "Call Now" buttons

### Booking Section
- Embedded booking flow widget
- Step 1: Select service category → specific service
- Step 2: Select staff (with photo + specialties shown)
- Step 3: Pick date/time — real-time availability slots (green = available, gray = booked)
- Step 4: Your info — name, phone, email, notes
- Step 5: Confirm — summary + booking button
- Confirmation message with email/SMS note

### Footer
- 4-column grid:
  - Column 1: Logo, tagline, social links (Instagram, Facebook, Pinterest)
  - Column 2: Quick links (Services, Gallery, About, Contact, Book Now)
  - Column 3: Hours of operation
  - Column 4: Contact info (address, phone, email)
- Bottom bar: © 2026 Luxe Nails. All rights reserved. Privacy Policy | Terms
- NAP consistency on every page

---

## 4. Owner Dashboard Pages

### Dashboard URL structure: `/dashboard`

### Login
- Email + password via Supabase Auth
- Role-based redirect: owner → /dashboard, staff → /dashboard/schedule
- "Forgot password" flow

### Dashboard Home (`/dashboard`)
- KPI strip: Today's Appointments · Today's Revenue · New Clients This Week · Upcoming (next booking)
- Quick action buttons: Book Appointment · Check In Client · Add Walk-in
- Mini calendar showing today's appointments by staff
- Recent activity feed (new bookings, cancellations, new clients)

### Appointments (`/dashboard/appointments`)
- Calendar: day/week/month toggle with color-coded appointments (by staff)
- Appointment list view with filters: date range, staff, status, service type
- Status workflow: Confirmed → Arrived → In Progress → Completed → No-Show → Cancelled
- Click appointment → detail modal: client info, service, staff, time, notes, edit/update status
- "New Appointment" button → create walk-in booking
- Drag-and-drop rescheduling on calendar view

### Schedule (`/dashboard/schedule`)
- Weekly grid: staff rows × time columns
- Color-coded: available, booked, break, time-off
- Staff selector (multi-select to view)
- Time-off requests panel: pending requests with approve/deny buttons
- Break/lunch block management

### Clients (`/dashboard/clients`)
- Searchable client table: name, phone, email, last visit, total visits, total spent
- Click row → client detail panel:
  - Profile: name, phone, email, birthday, address, emergency contact
  - Service history: table of past appointments with date, service, staff, price
  - Preferences: favorite nail shape, color preferences, allergies/notes
  - Photo log: before/after images tagged to this client
  - Tags: VIP, New Client, At-Risk, Referral
- Quick actions: Book Appointment, Send Message, View History

### Services (`/dashboard/services`)
- Service category management: add/edit/reorder categories
- Service CRUD: name, description, duration, price (base + tiered), category
- Add-on management: name, price, applicable services
- Toggle active/inactive per service

### Staff (`/dashboard/staff`)
- Staff list: name, photo, phone, email, role, specialties, active status
- Staff detail: edit profile, service-to-staff mapping (which services they can do)
- Commission settings: per-service percentage or flat fee
- Schedule view per staff member

### Inventory (`/dashboard/inventory`)
- Product list: name, brand, category (polish, gel, acrylic, tools, retail, consumables), stock qty, low stock threshold
- Low stock alerts highlighted in red
- Category filter + search
- Stock adjustment modal with reason logging
- Supplier info per product (vendor, lead time, min order)

### Revenue / Payments (`/dashboard/revenue`)
- KPI cards: Today's Revenue, This Week, This Month, vs Last Period
- Revenue chart: daily/weekly/monthly with date range picker
- Breakdown by: service type (pie chart), staff (bar chart), payment method
- Tips tracking: by staff, with pooling option
- Recent transactions table: date, client, service, staff, amount, method, status
- Export: CSV on tables, PDF on reports
- Sales tax report per period

### Reports (`/dashboard/reports`)
- Date range picker on every report
- Sales summary (PDF export)
- Staff performance (appointments + revenue per staff)
- Service popularity (count + revenue per service)
- Client retention (new vs returning, lapsed clients)
- Booking source tracking (online, walk-in, phone, referral)

### Settings (`/dashboard/settings`)
- Profile: salon name, address, phone, email, hours
- Notifications: SMS reminder timing, email templates
- Payment: Stripe/Square connect settings
- Staff roles & permissions management
- Business hours configuration

---

## 5. Backend Data Model

### Supabase Tables

```sql
-- Staff members
-- PK: id (uuid)
-- Fields: name, email, phone, photo_url, role (owner/manager/staff), specialties, 
--          active, created_at, updated_at
-- RLS: owners see all, managers see all active, staff see only themselves

-- Services
-- PK: id (uuid)
-- Fields: name, description, duration_minutes, base_price, tier_label, category_id, 
--          active, sort_order, created_at
-- RLS: owners/managers read/write, public read active only

-- Service Categories
-- PK: id (uuid)
-- Fields: name, description, icon, sort_order, active
-- RLS: same as services

-- Service Add-ons
-- PK: id (uuid)
-- Fields: name, price, applicable_service_ids (jsonb), active
-- RLS: owners/managers read/write, public read active only

-- Staff Service Mapping
-- PK: id (uuid)
-- FK: staff_id, service_id
-- Fields: commission_percentage, commission_flat_fee
-- RLS: owners/managers read/write, staff read own

-- Clients
-- PK: id (uuid)
-- Fields: name, email, phone, birthday, address, emergency_contact, 
--          preferences (jsonb), photo_url, tags (text[]), notes, 
--          referral_source, created_at, last_visit
-- RLS: owners/managers read/write, staff read all

-- Appointments
-- PK: id (uuid)
-- FK: client_id, staff_id, service_id, addon_ids (jsonb)
-- Fields: appointment_date, start_time, end_time, status (enum: confirmed/arrived/
--          in_progress/completed/no_show/cancelled), total_price, notes, 
--          booking_source, created_at, updated_at
-- RLS: owners/managers read/write, staff read own, clients read own via portal

-- Payments
-- PK: id (uuid)
-- FK: appointment_id, client_id, staff_id
-- Fields: amount, tip_amount, payment_method (cash/card/gift_card/store_credit), 
--          transaction_id, status, payment_date
-- RLS: owners/managers only (financial data)

-- Inventory Items
-- PK: id (uuid)
-- Fields: name, brand, category, sku, stock_quantity, low_stock_threshold, 
--          unit_price, supplier_name, supplier_lead_days, min_order_qty, active
-- RLS: owners/managers read/write

-- Stock Adjustments
-- PK: id (uuid)
-- FK: inventory_item_id
-- Fields: quantity_change, reason, adjusted_by (staff_id), created_at
-- RLS: owners/managers read/write

-- Commissions
-- PK: id (uuid)
-- FK: staff_id, appointment_id
-- Fields: commission_amount, service_id, paid, payout_date
-- RLS: owners/managers read/write, staff read own

-- Gift Cards
-- PK: id (uuid)
-- Fields: code, initial_balance, remaining_balance, client_id, 
--          issued_date, expiry_date, status (active/redeemed/expired)
-- RLS: owners/managers read/write, client can check own balance

-- Loyalty Points
-- PK: id (uuid)
-- FK: client_id
-- Fields: points_balance, tier (silver/gold/platinum), total_visits, lifetime_spend
-- RLS: owners/managers write, client read own

-- Business Settings
-- PK: id (uuid) — single row
-- Fields: salon_name, address, phone, email, hours (jsonb), 
--          sms_reminder_hours, email_templates (jsonb), payment_provider_settings
-- RLS: owners only

-- Review Requests
-- PK: id (uuid)
-- FK: appointment_id, client_id
-- Fields: sent_at, status (pending/sent/clicked), review_url, review_submitted_at
-- RLS: owners/managers read/write
```

### Row Level Security (RLS) Summary

| Table | Owner | Manager | Staff | Public | Client |
|-------|-------|---------|-------|--------|--------|
| Services | R/W | R/W | R | R (active) | R |
| Staff | R/W | R/W | R (self) | R (active) | R |
| Clients | R/W | R/W | R | — | R (self) |
| Appointments | R/W | R/W | R/W (own) | — | R/W (own) |
| Payments | R/W | R | — | — | — |
| Inventory | R/W | R/W | R | — | — |
| Commissions | R/W | R/W | R (own) | — | — |
| Business Settings | R/W | R | — | — | — |

---

## 6. Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Framework** | Next.js 15 (App Router) | SSR for SEO pages, server components, route groups for public/app split |
| **Styling** | Tailwind CSS 4 | Rapid prototyping, design token consistency |
| **UI Components** | shadcn/ui (base) | Accessible, customizable, Radix primitives |
| **Database** | Supabase (Postgres) | Managed Postgres, built-in Auth, RLS, real-time subscriptions |
| **Auth** | Supabase Auth | Email/password + magic link, RLS integration, session management |
| **File Storage** | Supabase Storage | Gallery images, staff photos, client photo log |
| **State** | Zustand (client state) + Server State (RSC) | Minimal client state, server components for data fetching |
| **Deployment** | Vercel | Optimized for Next.js, edge functions, preview deployments |

### Why Supabase over custom Prisma + Postgres

- RLS policies enforce tenant isolation at the DB level — no accidental data leaks
- Built-in auth with session management saves 2-3 weeks of auth scaffolding
- Storage API for image uploads avoids S3 setup
- Real-time subscriptions for live appointment updates
- Matches the tech stack from engineering memory for maximum reuse

### Project Structure

```
nail-salon/
├── app/
│   ├── (public)/               # Public site
│   │   ├── layout.tsx          # Public layout (header + footer)
│   │   ├── page.tsx            # Home (hero + services + gallery + about + testimonials + location + booking)
│   │   ├── services/           # Services detail page (optional, seo)
│   │   └── gallery/            # Gallery full-page view
│   ├── (dashboard)/            # Authenticated dashboard
│   │   ├── layout.tsx          # Dashboard layout (sidebar + topbar)
│   │   ├── page.tsx            # Dashboard home / overview
│   │   ├── appointments/       # Calendar + list view
│   │   ├── schedule/           # Staff scheduling grid
│   │   ├── clients/            # Client CRM
│   │   ├── services/           # Service management
│   │   ├── staff/              # Staff management
│   │   ├── inventory/          # Inventory management
│   │   ├── revenue/            # Revenue + analytics
│   │   ├── reports/            # Reports
│   │   └── settings/           # Business settings
│   ├── auth/
│   │   ├── login/              # Login page
│   │   └── callback/           # Auth callback
│   └── layout.tsx              # Root layout
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── public/                 # Public site components
│   │   ├── hero.tsx
│   │   ├── services-section.tsx
│   │   ├── gallery-section.tsx
│   │   ├── about-section.tsx
│   │   ├── testimonials.tsx
│   │   ├── location-section.tsx
│   │   ├── booking-section.tsx
│   │   └── footer.tsx
│   └── dashboard/              # Dashboard components
│       ├── sidebar.tsx
│       ├── topbar.tsx
│       ├── kpi-card.tsx
│       ├── calendar-view.tsx
│       ├── appointment-modal.tsx
│       ├── client-detail.tsx
│       └── revenue-chart.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts           # Supabase client (server)
│   │   ├── browser-client.ts   # Supabase client (browser)
│   │   └── admin.ts            # Supabase admin (service role)
│   ├── actions/                # Server Actions
│   ├── types/                  # TypeScript types
│   └── utils.ts
└── public/
    ├── images/                 # Static images (logo, placeholder gallery)
    └── fonts/                  # Self-hosted font fallbacks
```

---

## 7. Build Order

| Order | Task | Model | Description |
|-------|------|-------|-------------|
| 1 | Public site skeleton + hero + nav | deepseek-v4-pro | Layout, header, hero section |
| 2 | Services + pricing section | deepseek-v4-pro | Service display with tiers, add-ons |
| 3 | Gallery + about + testimonials | deepseek-v4-pro | Gallery, team, reviews sections |
| 4 | Booking section + footer | deepseek-v4-pro | Booking flow, location, footer |
| 5 | Supabase schema + RLS | qwen3-coder:480b | All tables, policies, migrations |
| 6 | Dashboard auth + routing | qwen3-coder:480b | Login, dashboard layout, sidebar |
| 7 | Appointments management | qwen3-coder:480b | Calendar, list, CRUD modals |
| 8 | Clients CRM | qwen3-coder:480b | Client table, detail panel |
| 9 | Inventory + services + staff | qwen3-coder:480b | Admin management CRUD pages |
| 10 | Revenue / analytics | qwen3-coder:480b | Charts, reports, export |

---

## 8. Acceptance Criteria

- [ ] Public site: hero, services, gallery, about, testimonials, location, booking, footer
- [ ] All WCAG 2.1 AA contrast requirements met
- [ ] Mobile responsive: header collapses, grid stacks, booking works on phone
- [ ] Dashboard login with Supabase Auth
- [ ] Dashboard: calendar, appointments, clients, schedule, services, staff, inventory, revenue
- [ ] RLS policies enforced for all tables
- [ ] SEO: local business schema, meta tags, semantic HTML
- [ ] Booking flow: end-to-end from service selection to confirmation
- [ ] Gallery: lightbox, category filters, responsive masonry
- [ ] All CRUD operations on dashboard admin pages
- [ ] Revenue charts with date range filtering
- [ ] README.md with setup instructions
