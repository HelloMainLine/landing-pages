# Nail Salon Owner Dashboard — Industry Research

## 1. Appointment Management
- **Calendar view**: day/week/month toggle with color-coded appointments by staff or service type
- **Drag-and-drop rescheduling**: move appointments between time slots
- **New appointment entry**: manual walk-in booking with service + staff + duration selection
- **Appointment status workflow**: Confirmed → Arrived → In Progress → Completed → No-Show → Cancelled
- **Waitlist management**: auto-notify when slot opens
- **Recurring appointments**: set weekly/biweekly standing appointments
- **Booking source tracking**: online, walk-in, phone, Instagram, referral

## 2. Staff Scheduling
- **Weekly schedule grid**: staff rows × time columns, color-coded availability
- **Time-off requests**: staff submit via portal, owner approves/denies
- **Break/lunch scheduling**: enforce California meal break laws
- **Shift swapping**: staff can request swaps, owner approves
- **Staff-hour limits**: cap daily/weekly hours per staff
- **Service-to-staff mapping**: which staff can perform which services

## 3. Client CRM
- **Client database**: name, phone, email, birthday, address, emergency contact
- **Service history**: every appointment with service, staff, date, price, notes
- **Preferences**: favorite nail shape, color preferences, allergies, sensitivities
- **Photo log**: before/after photos attached to client profile (HIPAA-light: just photos)
- **Birthday alerts**: auto-reminder 7 days before with birthday promo suggestion
- **Last visit**: "X days since last visit" for re-engagement targeting
- **Notes field**: free-text for staff to record preferences, complaints, special instructions
- **Client tags**: VIP, New Client, At-Risk, Referral Source

## 4. Inventory Management
- **Product tracking**: nail polish (brand, color, type), gels, acrylics, tips, supplies
- **Low stock alerts**: configurable thresholds per product
- **Supplier tracking**: vendor name, order history, lead times, minimum order qty
- **Usage tracking**: optional — log per-service product usage for COGS calculation
- **Retail inventory**: products sold to clients (polish, nail care kits)
- **Barcode scanning** for efficient stock-in/stock-out
- **Product categories**: polish, gel, acrylic, Dip, tools, sanitation, retail, consumables

## 5. Revenue & Payment Tracking
- **Daily sales summary**: total revenue, by service, by staff, tips, retail
- **Payment methods**: cash, card (Stripe/Square), gift card, store credit
- **Tip tracking**: card tips, cash tips, tip pooling allocation
- **Sales by service type**: pie chart showing revenue distribution
- **Sales by staff**: bar chart of individual performance
- **Daily, weekly, monthly reports** with export (CSV/PDF)
- **Tax reports**: sales tax collected per period
- **Refunds and voids**: track with reason codes

## 6. Marketing Tools
- **SMS reminders**: automated 24hr and 2hr before appointment
- **Email campaigns**: birthday offers, re-engagement for lapsed clients, seasonal promos
- **Loyalty program**: points per visit/dollar, rewards tiers, redemption tracking
- **Referral tracking**: "Refer a friend" with discount for both parties
- **Gift card management**: issue, redeem, check balance, expiry
- **Promo codes**: create limited-time offers with usage tracking
- **Review request**: auto-send review link after appointment

## 7. Staff Commission Tracking
- **Commission rates**: per-service percentage or flat fee per type
- **Service-based splits**: 50/50, 60/40, or graduated by seniority
- **Product sales commission**: percentage of retail products sold
- **Tip allocation**: keep-what-you-earn or tip pool split
- **Payout periods**: weekly or bi-weekly with paystub download
- **Commission reports**: per-staff earning summary with date range filter

## 8. Integrations
- **Payment processor**: Stripe (preferred) or Square for in-person + online payments
- **POS integration**: Square Terminal, Clover, Toast for in-shop transactions
- **SMS provider**: Twilio for booking confirmations, reminders, 2-way messaging
- **Email provider**: SendGrid or Resend for campaigns and receipts
- **Calendar sync**: Google Calendar, iCal for staff schedule export
- **Google Business Profile**: sync hours, services, booking link
- **Instagram integration**: auto-post new gallery images, track UTM campaign clicks
- **Accounting integration**: QuickBooks, Xero export for revenue/payouts
- **Review platforms**: Google Reviews API, Yelp API

## 9. Dashboard UX Must-Haves
- **Mobile-first**: owners check dashboard on phone most often
- **At-a-glance KPI strip**: today's appointments count, today's revenue, new clients
- **Quick actions**: book appointment, check in client, add walk-in
- **Date range picker** on every report page
- **Export everywhere**: CSV on tables, PDF on reports
- **Role-based access**: owner (everything), manager (no financial settings), staff (schedule + client info only)

## 10. Competitive Differentiators
- **AI booking assistant**: auto-suggest open slots based on client history
- **Demand forecasting**: predict busy days based on historical data
- **Marketing ROI dashboard**: track which campaigns drive bookings
- **Dynamic pricing**: adjust prices based on demand (controversial but emerging)
- **Client self-service portal**: update profile, view history, re-book
- **Photo CRM**: nail art photos tagged by client for recall
