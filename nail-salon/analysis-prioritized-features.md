# Prioritized Feature List — Nail Salon Website & Owner Dashboard

> **Phase 2 output** → drives SPEC.md in Phase 3.
> Covers both the **public website** (client-facing) and the **owner dashboard** (admin-side).
> Each item flagged as **Table Stakes** (TS), **Must-Have** (MH), **Should-Have** (SH), **Nice-to-Have** (NH), or **Competitive Differentiator** (CD).

---

## A. PUBLIC WEBSITE (Client-Facing)

### 1. MUST-HAVES — Table Stakes
*Every nail salon website in 2026 must have these to be credible.*

| # | Feature | Category | Detail |
|---|---------|----------|--------|
| A1.1 | **Full-screen hero section** | TS | Single high-quality image or 3-5 slide carousel with salon name, tagline ("Where Art Meets Elegance"), and prominent CTA ("Book Appointment" / "View Services"). Video background is common but not required. |
| A1.2 | **Service menu with pricing** | TS | Category grid (Manicure, Pedicure, Gel, Acrylic, Dip, Nail Art, Waxing, Lash Extensions). Each card shows: service name, 2-3 line description, price range ($25-$45 or "Starting at $35"), duration, "Book Now" button. Tiered pricing (Basic/Deluxe/Premium) per category. |
| A1.3 | **Online booking widget** | TS | Embedded booking flow: select service → select staff (with photo + specialties) → pick date/time (real-time, color-coded slots) → enter info → confirm. CTA in header, hero, and footer. Confirmation via email + SMS with auto-reminder. |
| A1.4 | **Gallery / Portfolio** | TS | High-resolution nail art gallery in grid or masonry layout. Category filters (All, Gel Art, 3D Designs, Ombre, French Tips, Seasonal). Salon interior photos to showcase ambiance and cleanliness. Zoom on hover/tap for detail. |
| A1.5 | **About Us / Team page** | TS | Staff bios with photos, experience years, specialties. Salon story and atmosphere. |
| A1.6 | **Location & Hours** | TS | Full address, embedded Google Map, phone number, operating hours per day. NAP (Name, Address, Phone) in header and footer on every page. |
| A1.7 | **Social proof / Reviews** | TS | Google Reviews widget or aggregate star rating (e.g., "★ 4.8 (127 reviews)") displayed in hero and footer. Testimonial carousel with client photo, name, service received. Review count alongside star rating. |
| A1.8 | **Mobile-responsive design** | TS | Simplified single-image hero on mobile, sticky CTA button always visible. Touch targets minimum 44×44px. Font minimum 16px body text. Full keyboard navigation through menus and booking flow. |
| A1.9 | **Footer with full info** | TS | NAP, social links (Instagram, Facebook), hours, quick links to Services/Gallery/About/Contact, secondary booking CTA. |
| A1.10 | **SEO foundation** | TS | Local business schema (JSON-LD): name, address, phone, hours, service types. Google Business Profile integration with booking link. Local keywords ("[city] nail salon", "[city] manicure"). NAP consistency everywhere. |

### 2. SHOULD-HAVES — Expected But Not Critical
*Customers expect these; their absence will be noticed but they won't make-or-break the business.*

| # | Feature | Category | Detail |
|---|---------|----------|--------|
| A2.1 | **Add-on / Upgrade section** | SH | Nail art per finger, gel top coat, paraffin wax, design upgrades displayed as separate column or "upgrade" chip alongside service cards. |
| A2.2 | **Seasonal promotions & new client specials** | SH | Badge-highlighted offers on services page and hero. "New Client Special — 20% off first visit" with clear terms. |
| A2.3 | **Walk-in option display** | SH | For shops that accept walk-ins: estimated wait time, "Walk-ins Welcome" badge. |
| A2.4 | **Before/after gallery section** | SH | Before/after transformations for nail repair, extensions, set changes. Combined with mini review cards (growing industry standard). |
| A2.5 | **Instagram feed integration** | SH | Embedded Instagram grid or "Follow us on Instagram" section linking to salon's profile. Auto-posts from gallery to IG. |
| A2.6 | **Awards & certifications badges** | SH | Displayed as visual badges (licensed, certified, featured in local magazines/TV). |
| A2.7 | **FAQ section** | SH | Common questions with FAQ schema markup: How long does gel last? Pricing? Walk-ins? Appointment policies? |
| A2.8 | **Accessibility compliance** | SH | WCAG AA contrast ratios (4.5:1 text on salon-appropriate palettes), proper `<label>` associations on booking forms, alt text on gallery images describing nail art and colors, screen reader announcements for booking confirmation. |

### 3. NICE-TO-HAVES — Differentiators
*Not expected, but they elevate the experience and can influence choice.*

| # | Feature | Category | Detail |
|---|---------|----------|--------|
| A3.1 | **Service detail modal/drawer** | NH | Instead of separate pages, show full service details (ingredients, aftercare tips, included amenities) in a modal. Faster UX than page navigation. |
| A3.2 | **Client photo submission with consent** | NH | Upload-your-nails feature where clients submit photos post-appointment. Digital consent form checkbox. Growing trend that boosts gallery content. |
| A3.3 | **Service page SEO anchors** | NH | Individual anchor pages or deep links for each major service (manicure, pedicure, gel nails) to capture long-tail search traffic. |
| A3.4 | **Blog / nail care tips** | NH | Content section: nail care tips, seasonal nail art trends, aftercare guides, trend forecasts. Supports SEO and positions salon as expert. |
| A3.5 | **"Featured in" media mentions** | NH | Logos or citations for local magazine features, TV segments, influencer mentions, blog roundups. |
| A3.6 | **Clean upfront pricing (no hidden fees)** | NH | "Price includes: shaping, cuticle care, polish application. Add-ons listed separately." Trust signal that converts. (Table stakes in premium markets, nice-to-have in general.) |

### 4. COMPETITIVE DIFFERENTIATORS — True Advantages
*These features set a salon apart from competitors and drive real business value.*

| # | Feature | Category | Detail | Impact |
|---|---------|----------|--------|--------|
| A4.1 | **Virtual nail try-on (AR)** | **CD** | Browser-based AR using the device camera to preview nail colors and designs before booking. Still rare in the industry. High "wow" factor, drives bookings for nail art services. Requires Web AR library (e.g., 8th Wall, Google Model Viewer). | High — booking conversion |
| A4.2 | **Online gift cards with digital delivery** | **CD** | Purchase gift cards online with custom design preview, delivery via email/SMS, recipient books directly. Revenue driver with zero marginal cost. | High — revenue |
| A4.3 | **Membership / subscription plans** | **CD** | Monthly flat-rate plans (e.g., "$99/month — one gel fill + one pedicure"). Auto-billing, member portal to manage. Recurring revenue model. | High — recurring revenue |
| A4.4 | **Loyalty program with points tracking** | **CD** | Points per visit/dollar spent visible in booking portal. Tiers (Silver/Gold/Platinum). Redemption directly online. Drives retention and repeat bookings. | High — retention |
| A4.5 | **Client portal for history & re-book** | **CD** | Logged-in area where clients view past services, saved preferences (nail shape, color family), favorite staff, and re-book in 2 clicks. Reduces booking friction. | Medium-High — UX |
| A4.6 | **Real-time SMS confirmation with 2-way reply** | **CD** | After booking, clients can reply to SMS to reschedule, cancel, or ask questions. Two-way conversational flow without downloading an app. | Medium — convenience |

---

## B. OWNER DASHBOARD (Admin Side)

### 1. MUST-HAVES — Table Stakes
*Every salon management dashboard needs these to function as a business tool.*

| # | Feature | Category | Detail |
|---|---------|----------|--------|
| B1.1 | **Calendar view (day/week/month)** | TS | Color-coded appointments by staff or service type. Drag-and-drop rescheduling. Toggle between day, week, and month views. |
| B1.2 | **Appointment management** | TS | Status workflow: Confirmed → Arrived → In Progress → Completed → No-Show → Cancelled. Manual walk-in booking with service + staff + duration. Recurring appointments (weekly/biweekly). |
| B1.3 | **Client database (CRM)** | TS | Name, phone, email, birthday, address, emergency contact. Full service history (every appointment with staff, date, price, notes). Notes field for free-text staff entries. Client tags: VIP, New Client, At-Risk, Referral Source. |
| B1.4 | **Daily sales summary** | TS | Total revenue, by service, by staff, tips, retail. Payment methods: cash, card, gift card, store credit. Tip tracking with pooling allocation. |
| B1.5 | **Staff scheduling grid** | TS | Weekly grid with staff rows × time columns. Color-coded availability. Service-to-staff mapping (who can perform which services). Break/lunch scheduling. |
| B1.6 | **Mobile-first dashboard UX** | TS | Most owners check on phone. At-a-glance KPI strip: today's appointments count, today's revenue, new clients. Quick actions: book appointment, check in client, add walk-in. |
| B1.7 | **Role-based access control** | TS | Owner (everything), Manager (no financial settings), Staff (schedule + client info only). |
| B1.8 | **Reports with date range filtering** | TS | Daily, weekly, monthly sales reports. Export to CSV (tables) and PDF (reports). Tax reports: sales tax collected per period. |
| B1.9 | **Automated SMS reminders** | TS | 24-hour and 2-hour pre-appointment reminders. Configurable message templates. |

### 2. SHOULD-HAVES — Expected But Not Critical
*These are standard in modern salon software; missing them is a gap but not fatal.*

| # | Feature | Category | Detail |
|---|---------|----------|--------|
| B2.1 | **Client preference tracking** | SH | Favorite nail shape, color preferences, allergies, sensitivities. "Last visit" counter ("X days since last visit") for re-engagement targeting. |
| B2.2 | **Birthday alerts** | SH | Auto-reminder 7 days before client birthday with suggested promo offer. One-click birthday coupon/message send. |
| B2.3 | **Booking source tracking** | SH | Source tagging: online, walk-in, phone, Instagram, referral. Track which channels drive bookings. |
| B2.4 | **Time-off request workflow** | SH | Staff submit via simple form, owner approves/denies. Calendar shows approved time-off as blocked slots. |
| B2.5 | **Waitlist management** | SH | Auto-notify clients when a slot opens. Configurable notification preferences (SMS or email). |
| B2.6 | **Commission tracking** | SH | Per-service percentage or flat fee. Service-based splits (50/50, 60/40, graduated). Product sales commission. Payout periods: weekly or bi-weekly with paystub download. |
| B2.7 | **Refunds and voids** | SH | Track with reason codes and staff attribution. Adjust daily totals accordingly. |
| B2.8 | **Payment processor integration** | SH | Stripe (preferred) or Square for online + in-person payments. |

### 3. NICE-TO-HAVES — Differentiators
*Add significant operational value but not required for launch.*

| # | Feature | Category | Detail |
|---|---------|----------|--------|
| B3.1 | **Photo CRM — nail art tagged by client** | NH | Before/after photos attached to client profile. Tagged by service type, color, design. Staff can reference for continuity on return visits. |
| B3.2 | **Low stock alerts** | NH | Configurable thresholds per product. Dashboard notification when stock is low. |
| B3.3 | **Supplier tracking** | NH | Vendor name, order history, lead times, minimum order quantities. |
| B3.4 | **Gift card management** | NH | Issue, redeem, check balance, expiry tracking from dashboard. |
| B3.5 | **Promo codes** | NH | Create limited-time offers with usage tracking and revenue impact reporting. |
| B3.6 | **Review request automation** | NH | Auto-send review link (Google Reviews) after completed appointment. Track response rate. |
| B3.7 | **Email campaigns** | NH | Birthday offers, re-engagement for lapsed clients (30/60/90 days), seasonal promos. SendGrid or Resend integration. |
| B3.8 | **Staff-hour limits** | NH | Cap daily and weekly hours per staff member. Alert when approaching limit (CA meal break law compliance support). |
| B3.9 | **Shift swapping** | NH | Staff can request swaps via portal, owner approves. Visibility into resulting schedule changes. |
| B3.10 | **Product usage tracking (COGS)** | NH | Optional — log per-service product usage for cost-of-goods-sold calculation. Barcode scanning for efficient stock-in/stock-out. |
| B3.11 | **Calendar sync** | NH | Google Calendar / iCal export for staff schedule visibility. |

### 4. COMPETITIVE DIFFERENTIATORS — True Advantages
*These features make the dashboard a strategic asset, not just a booking tool. They provide data-driven insights and automation most competitors lack.*

| # | Feature | Category | Detail | Impact |
|---|---------|----------|--------|--------|
| B4.1 | **AI booking assistant** | **CD** | Auto-suggest optimal open slots based on client history, preferred staff, and service duration patterns. One-click booking suggestion when calling a client. | High — saves staff time |
| B4.2 | **Demand forecasting** | **CD** | Predict busy days/weeks based on historical data, seasonality, weather, local events. Helps with staffing decisions and supply ordering. Display as trend graph in dashboard. | High — operational efficiency |
| B4.3 | **Marketing ROI dashboard** | **CD** | Track which campaigns (Instagram, referral, email, promo codes) drive bookings and revenue. Attribution model showing cost-per-acquisition per channel. Visual funnel: impressions → clicks → bookings → revenue. | High — marketing spend optimization |
| B4.4 | **Client self-service portal** | **CD** | Clients update their own profile, view history, re-book, manage memberships, check loyalty points. Reduces admin load dramatically. | High — operational efficiency |
| B4.5 | **Dynamic pricing engine** | **CD** | Adjust service prices based on demand (peak hours, high-demand dates, last-minute openings). Controversial but emerging in salon space. Configurable rules (owner sets floor/ceiling). | Medium — revenue optimization |
| B4.6 | **Referral program tracking** | **CD** | "Refer a friend" with discount for both parties. Track referral links, conversion rate, total referred revenue. Built-in sharing to SMS and social. | Medium-High — growth |
| B4.7 | **Instagram integration (2-way)** | **CD** | Auto-post new gallery images to Instagram. Track UTM campaign clicks from Instagram to booking. See which posts drive appointments. | Medium — marketing |

---

## C. STRATEGIC RECOMMENDATIONS

### Phase 3 (Build) Must Include

**Public Website (minimum viable):**
- A1.1–A1.10 (all Table Stakes)
- A2.1, A2.2, A2.4 (Should-Haves with highest impact)
- A4.2 (Gift cards — revenue generator, straightforward to build)
- A4.5 (Client portal — high UX impact, moderate build effort)

**Owner Dashboard (minimum viable):**
- B1.1–B1.9 (all Table Stakes)
- B2.1, B2.2, B2.3, B2.6 (Should-Haves with high daily use)
- B4.4 (Client self-service portal — high ROI, reduces support load)

### True Competitive Advantages to Prioritize

| Feature | Effort | Impact | Recommendation |
|---------|--------|--------|----------------|
| Client self-service portal (B4.4) | Medium | High | **Build in Phase 3** — multiplies value of website + dashboard |
| AI booking assistant (B4.1) | Medium-High | High | **Phase 4** — requires booking history data first |
| Marketing ROI dashboard (B4.3) | Medium | High | **Phase 4** — needs channel tracking infrastructure |
| Demand forecasting (B4.2) | High | High | **Phase 5** — needs 6+ months of historical data |
| Virtual nail try-on (A4.1) | High | Medium-High | **Phase 5** — evaluate AR library costs first |
| Memberships/subscriptions (A4.3) | Medium | High | **Phase 4** — requires payment integration + recurring billing |

### Table Stakes vs. Competitive Advantages — Summary

> ⚠️ **Do not skip table stakes** to build competitive differentiators. A beautiful dashboard is useless if the website has no services page or booking flow. Phase 3 must ship all "Must-Have — Table Stakes" items for both website and dashboard. Differentiators are Phase 4+ additions that make the offering truly standout.
