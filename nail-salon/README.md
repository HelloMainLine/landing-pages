# Luxe Nails — Salon Website + Owner Dashboard

A complete nail salon web presence with a public marketing site and a private owner dashboard.

## Project Structure

```
nail-salon/
├── app/
│   ├── layout.tsx              # Root layout with fonts
│   ├── page.tsx                # Public landing page (sections assembled)
│   ├── globals.css             # Global styles + Tailwind layers
│   ├── login/page.tsx          # Dashboard login page
│   ├── auth/callback/route.ts  # Supabase auth callback
│   ├── dashboard/
│   │   ├── layout.tsx          # Dashboard sidebar + header shell
│   │   ├── page.tsx            # Overview — KPIs, quick actions, recent activity
│   │   ├── appointments/page.tsx
│   │   ├── clients/page.tsx
│   │   ├── services/page.tsx
│   │   ├── staff/page.tsx
│   │   ├── products/page.tsx
│   │   ├── payments/page.tsx
│   │   └── reviews/page.tsx
├── components/
│   ├── public/                 # Public site sections (hero, nav, services, gallery, etc.)
│   └── ui/                     # Shared UI primitives (Icon)
├── lib/
│   ├── supabase.ts             # Supabase client
│   ├── schema.sql              # Database schema (tables + RLS)
│   └── utils.ts                # Tailwind class merge helper
├── middleware.ts               # Dashboard route protection
├── SPEC.md                     # Full project specification
└── research-*.md               # Phase 1 research docs
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Backend:** Supabase (Postgres + Auth + RLS)
- **Fonts:** Playfair Display (headings), Inter (body)

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Public Site Sections

1. **Hero** — Full-viewport brand moment with CTA
2. **Services** — Price + duration cards
3. **Gallery** — Portfolio showcase
4. **About** — Studio story
5. **Testimonials** — Social proof carousel
6. **Booking** — Inquiry form
7. **Footer** — Nav + social + hours

## Dashboard Features

- **Overview** — Revenue, appointments, client KPIs
- **Appointments** — Calendar + status management
- **Clients** — CRM with history
- **Services** — Service catalog management
- **Staff** — Team management + commission rates
- **Products** — Retail inventory tracking
- **Payments** — Revenue ledger + payment method breakdown
- **Reviews** — Client feedback moderation
