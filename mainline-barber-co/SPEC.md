# Mainline Barber Co. — Landing Page Specification

## 1. Overview

A single-page, dark-themed landing page for **Mainline Barber Co.**, a premium barbershop located in Chicago. The design evokes a vintage-industrial aesthetic with a modern execution: deep blacks, warm gold accents, sharp edges, and clean typography. The page is fully responsive (mobile-first), accessible (WCAG 2.1 AA), and SEO-optimized.

---

## 2. Design Tokens

| Token | Value | Usage |
|---|---|---|
| Page background | `#0a0a0a` | Body / page-level bg |
| Surface / card bg | `#1a1a1a` | Section cards, nav, service cards |
| Gold accent | `#c8a45a` | CTAs, dividers, highlights, hover states, price callouts |
| Text primary | `#f5f5f5` | Body text, headings |
| Text secondary | `#a0a0a0` | Descriptions, captions, meta text |
| Link gold | `#c8a45a` | Anchor links |
| Focus ring | `#c8a45a` | Keyboard focus outlines |

### Typography

| Role | Font | Weights | Source |
|---|---|---|---|
| Headings (h1–h6) | Playfair Display | 700 (all headings) | Google Fonts, preload |
| Body text | Inter | 400 (normal), 500 (emphasis) | Google Fonts, preload |

```html
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500&display=swap" as="style">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500&display=swap">
```

### Visual Effects

- **Noise grain overlay** — SVG `<feTurbulence>` filter applied at 3% opacity over hero section for texture.
- **Amber radial glow** — CSS radial gradient behind hero headline: `radial-gradient(ellipse at 50% 30%, rgba(200,164,90,0.12) 0%, transparent 60%)`.
- **Sharp edges** — `border-radius: 0` everywhere on vintage elements (buttons, cards, nav).

---

## 3. Page Structure & Wireframe Descriptions

### 3.1 Fixed Top Navigation

**Layout:**
```
[Mainline Barber Co.]                          [About  Services  Gallery  Booking]  [BOOK NOW]
```

| Element | Details |
|---|---|
| Logo / brand | Text: "MAINLINE BARBER CO." in Playfair Display, gold (`#c8a45a`), 18px, bold. Left-aligned. |
| Nav links | "About", "Services", "Gallery", "Booking" — Inter 400, 14px, white (`#f5f5f5`), gold hover underline. |
| CTA button | "BOOK NOW" — gold bg (`#c8a45a`), black text (`#0a0a0a`), sharp edges, 14px, 16px padding. Links to `#booking`. |
| Behavior | Fixed/sticky top, bg `#0a0a0a` with 90% opacity backdrop blur. Shrinks on scroll (font-size reduces from 18px to 14px). |
| Mobile | Hamburger menu (gold icon) opens full-screen overlay nav with section links stacked vertically. |

**Accessibility:** Skip-nav link at very top of page: `<!-- <a href="#main" class="skip-nav">Skip to main content</a> -->`

---

### 3.2 Hero Section

**Wireframe:**
```
+---------------------------------------------------+
|                                                   |
|              [amber radial glow]                  |
|                                                   |
|              MAINLINE BARBER CO.                  |
|              Premium · Cuts · Shaves              |
|                                                   |
|                  [BOOK APPOINTMENT]               |
|                                                   |
|              [noise grain overlay]                |
|                                                   |
+---------------------------------------------------+
```

| Element | Details |
|---|---|
| Background | `#0a0a0a` with amber radial glow gradient and noise texture overlay |
| Heading (h1) | "MAINLINE BARBER CO." — Playfair Display, 72px desktop / 40px mobile, white, all caps, letter-spacing 4px |
| Tagline | "Premium · Cuts · Shaves" — Inter, 18px desktop / 14px mobile, gold (`#c8a45a`), letter-spacing 2px |
| CTA Button | "BOOK APPOINTMENT" — gold bg (`#c8a45a`), black text, 16px, uppercase, sharp edges, 20px 40px padding. Hover: bg shifts to `#d4b06a`, subtle lift animation. |
| Spacing | 100vh viewport height, content vertically and horizontally centered |
| Noise texture | SVG filter applied via CSS: `filter: url(#noise)` on a pseudo-element overlay |

---

### 3.3 Services Section

**Wireframe:**
```
+---------------------------------------------------+
|               OUR SERVICES                        |
|         [gold divider line]                       |
+---------------------------------------------------+
|  +-------------+  +-------------+  +-------------+ |
|  |   [icon]    |  |   [icon]    |  |   [icon]    | |
|  |  Haircuts   |  | Beard Trims |  |Hot Towel    | |
|  |  $5         |  |  $5         |  |  Shaves     | |
|  |  5 reviews  |  |  5 reviews  |  |  $5         | |
|  +-------------+  +-------------+  +-------------+ |
|  +-------------+                                   |
|  |   [icon]    |                                   |
|  |Hair Styling |                                   |
|  |  (0 reviews)|                                   |
|  +-------------+                                   |
+---------------------------------------------------+
```

| Service | Price | Rating | Icon | Description |
|---|---|---|---|---|
| Haircuts | $5 | ★★★★★ (5 reviews) | Scissors SVG | Classic and modern cuts for all hair types. Precision styling with expert attention to detail. |
| Beard Trims | $5 | ★★★★★ (5 reviews) | Comb/Beard SVG | Expert beard shaping and trimming. Clean lines and defined edges for a polished look. |
| Hot Towel Shaves | $5 | ★★★★★ (5 reviews) | Steam/Towel SVG | Traditional hot towel shave with straight razor. A luxurious, relaxing grooming experience. |
| Hair Styling | $0 | (0 reviews) | Sparkle/Star SVG | Professional hair styling for special occasions. Look your best for any event. |

**Layout rules:**
- Desktop: 4-column grid (all services side-by-side).
- Tablet: 2x2 grid.
- Mobile: Single column, stacked cards.
- Each card: `#1a1a1a` bg, sharp edges, gold top border (2px), white icon, gold price, white title, gray description, gold star ratings.
- Cards have a 2px gold left-border accent on hover.

---

### 3.4 About / Gallery Section

**Wireframe:**
```
+---------------------------------------------------+
|              ABOUT US                             |
|         [gold divider line]                       |
+---------------------------------------------------+
|  +------------------+  +-----------------------+  |
|  |  About text      |  |  [Gallery Image 1]    |  |
|  |  spanning ~4     |  |  [Gallery Image 2]    |  |
|  |  lines of copy.  |  |  [Gallery Image 3]    |  |
|  |                  |  +-----------------------+  |
|  |  "Mainline Barber |  +-----------------------+  |
|  |  Co. has been a   |  |  [Gallery Image 4]    |  |
|  |  cornerstone of   |  +-----------------------+  |
|  |  the Chicago       |                            |
|  |  community for     |                            |
|  |  years..."        |                            |
|  +------------------+  [2x2 gallery grid]         |
+---------------------------------------------------+
```

**About Content:**

> **About Mainline Barber Co.**
>
> For years, Mainline Barber Co. has been a cornerstone of the Chicago community. Our master barbers bring decades of combined experience to every cut, trim, and shave. We believe in the art of grooming — taking the time to understand your style, your hair, and your vision.
>
> Step into our space and experience the tradition of men's grooming done right. No rush, no shortcuts — just expert craftsmanship and a warm welcome.

**Gallery Placeholders (4 items):**

| Item | Placeholder Color | Label |
|---|---|---|
| 1 | `#2a2a2a` | "Interior — Reception" |
| 2 | `#2a2a2a` | "Master Barber at Work" |
| 3 | `#2a2a2a` | "Classic Shave Setup" |
| 4 | `#2a2a2a` | "The Mainline Space" |

**Layout rules:**
- Desktop: 50/50 split — text left, gallery right (2x2 grid).
- Mobile: Stacked — text first, gallery below.
- Gallery items: `#2a2a2a` background with centered white text label, sharp edges.
- Section uses `#0a0a0a` background.

---

### 3.5 Booking Section

**Wireframe:**
```
+---------------------------------------------------+
|              BOOK YOUR VISIT                      |
|         [gold divider line]                       |
+---------------------------------------------------+
|                                                   |
|     "Ready for a fresh look? Walk in or          |
|      book your appointment today."                |
|                                                   |
|          [BOOK NOW — GOLD CTA BUTTON]             |
|                                                   |
|     +-----------------------------------------+   |
|     |  HOURS OF OPERATION                     |   |
|     |  Monday - Friday:  9:00 AM - 7:00 PM   |   |
|     |  Saturday:        9:00 AM - 5:00 PM    |   |
|     |  Sunday:          Closed                 |   |
|     +-----------------------------------------+   |
+---------------------------------------------------+
```

| Element | Details |
|---|---|
| Section bg | `#1a1a1a` |
| Heading (h2) | "BOOK YOUR VISIT" — Playfair Display, 42px desktop / 28px mobile, white |
| Subtext | "Ready for a fresh look? Walk in or book your appointment today." — Inter, 16px, secondary text color |
| CTA Button | "BOOK NOW" — gold bg, black text, same style as hero CTA |
| Hours card | `#0a0a0a` bg, gold top border, white text, sharp edges |
| Hours content | Monday–Friday 9AM–7PM, Saturday 9AM–5PM, Sunday Closed |

---

### 3.6 Footer

**Wireframe:**
```
+---------------------------------------------------+
|  [gold divider line]                              |
|                                                   |
|  MAINLINE BARBER CO.                              |
|  123 Main Street, Chicago, IL                     |
|                                                   |
|  [Instagram icon]  [Facebook icon]                |
|                                                   |
|  © 2026 Mainline Barber Co. All rights reserved. |
|                                                   |
|  [↑ Scroll to Top]                                |
+---------------------------------------------------+
```

| Element | Details |
|---|---|
| Background | `#0a0a0a` |
| Top border | 1px gold (`#c8a45a`) |
| Brand | "MAINLINE BARBER CO." — Playfair Display, gold, 20px |
| Address | "123 Main Street, Chicago, IL" — Inter, 14px, secondary text |
| Social icons | Instagram + Facebook SVG icons, gold (`#c8a45a`), hover: white, 24px |
| Copyright | "© 2026 Mainline Barber Co. All rights reserved." — Inter, 12px, secondary text |
| Scroll-to-top | "↑ Scroll to Top" — gold text, links to `#top`, hover underline |

---

## 4. Responsive Behavior

| Breakpoint | Nav | Services Grid | About/Gallery |
|---|---|---|---|
| Desktop (≥1024px) | Full links visible | 4 columns | 50/50 split |
| Tablet (768–1023px) | Full links visible | 2x2 grid | 50/50 split |
| Mobile (<768px) | Hamburger overlay | 1 column stacked | Stacked (text first) |

**Mobile nav overlay:** Full-screen `#0a0a0a` background, gold hamburger icon, section links stacked vertically with gold dividers, "BOOK NOW" button at bottom.

---

## 5. Accessibility Requirements

| Requirement | Implementation |
|---|---|
| Skip navigation | `<a href="#main" class="skip-nav">Skip to main content</a>` — visually hidden until focused |
| Semantic HTML | `<nav>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy (h1 → h2 → h3) |
| Heading hierarchy | h1 (hero brand) → h2 (section titles) → h3 (service names) |
| Alt text | All images and gallery placeholders have descriptive alt attributes |
| Focus states | Gold (`#c8a45a`) focus ring on all interactive elements |
| Color contrast | All text meets WCAG 2.1 AA (white on #0a0a0a = 16.7:1, gold on #0a0a0a = 4.8:1) |
| Keyboard nav | All sections reachable via tab order, CTA buttons functional via keyboard |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` disables animations, glow effects, and transitions |
| ARIA labels | Social icons have aria-label, nav has aria-label="Main navigation" |

---

## 6. SEO Requirements

| Element | Value |
|---|---|
| Title | "Mainline Barber Co. — Premium Cuts & Shaves in Chicago" |
| Meta description | "Mainline Barber Co. offers premium haircuts, beard trims, and hot towel shaves in Chicago. Walk in or book your appointment today." |
| Open Graph | og:title, og:description, og:image placeholders |
| Schema.org | LocalBusiness JSON-LD with name, address, openingHours, priceRange |
| Semantic HTML | Proper use of header, nav, main, section, article, footer elements |
| Canonical URL | `/` |

---

## 7. Technical Requirements

### 7.1 Structure

- Single HTML file with embedded CSS and minimal JavaScript (for nav toggle, scroll effects).
- No external JS frameworks. Vanilla JS only.
- CSS custom properties for all design tokens.
- CSS Grid and Flexbox for layouts.
- Mobile-first media queries.

### 7.2 CSS Architecture

```css
/* Custom properties */
:root {
  --bg-page: #0a0a0a;
  --bg-surface: #1a1a1a;
  --gold: #c8a45a;
  --gold-hover: #d4b06a;
  --text-primary: #f5f5f5;
  --text-secondary: #a0a0a0;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
}
```

### 7.3 JavaScript Features

1. **Mobile nav toggle** — hamburger icon opens/closes full-screen overlay nav.
2. **Nav shrink on scroll** — logo font-size reduces as user scrolls past hero.
3. **Scroll-to-top button** — appears after scrolling 300px, links to top of page.
4. **Smooth scroll** — anchor links use smooth scrolling behavior.

### 7.4 Performance

- Google Fonts loaded with `rel="preload"` and `display=swap`.
- Noise texture via inline SVG (no external image).
- All icons as inline SVGs (no icon library dependency).
- Minified CSS and JS inline in the HTML file.

---

## 8. Content Summary

### Main Copy

- **Hero headline:** MAINLINE BARBER CO.
- **Hero tagline:** Premium · Cuts · Shaves
- **Hero CTA:** BOOK APPOINTMENT
- **Section: Services** — "OUR SERVICES"
- **Section: About** — "ABOUT US"
- **Section: Booking** — "BOOK YOUR VISIT"
- **Footer brand:** MAINLINE BARBER CO.

### Service Descriptions (full text)

1. **Haircuts — $5**
   Classic and modern cuts for all hair types. Precision styling with expert attention to detail.

2. **Beard Trims — $5**
   Expert beard shaping and trimming. Clean lines and defined edges for a polished look.

3. **Hot Towel Shaves — $5**
   Traditional hot towel shave with straight razor. A luxurious, relaxing grooming experience.

4. **Hair Styling — $0**
   Professional hair styling for special occasions. Look your best for any event.

---

## 9. Output

The deliverable for this spec is the implementation file:

**`/root/barber-shop/index.html`**

This HTML file will contain:
- All sections described above (Hero, Services, About/Gallery, Booking, Footer)
- Embedded CSS with design tokens, responsive breakpoints, accessibility styles
- Embedded JavaScript for interactive features
- Inline SVG icons for services and social links
- Schema.org structured data for SEO
- Skip-nav link and full accessibility support

---

## 10. Design Notes

- The dark + gold palette creates a premium, vintage-industrial feel appropriate for a barbershop.
- Sharp edges (no border-radius) reinforce the vintage, no-nonsense aesthetic.
- The noise grain texture adds warmth and depth to the dark backgrounds, preventing flatness.
- The amber radial glow in the hero draws the eye to the headline and CTA.
- All interactive elements have gold hover states for visual feedback.
- The mobile-first approach ensures the experience is optimized for on-the-go users booking appointments.
- The fixed nav with shrink effect provides persistent access to booking while respecting screen real estate.
