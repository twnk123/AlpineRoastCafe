Summit Brew Café — One-Page Site

Overview
- Fast, accessible, mobile-first single page for a café in Ljubljana.
- Content is editable via JSON in `content/site.json`.

Scripts
- Install deps: `npm install`
- Install test deps (if missing): `npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom jest-axe zod`
- Dev server: `npm run dev`
- Tests: `npm run test`
- Production build: `npm run build`

Sections
- Hero, Why Us, Menu Highlights, Seasonal Promo, Gallery, Reviews, Hours & Location, Contact, Footer.

Notes
- Images use `next/image` with explicit `width/height` and `sizes` to preserve layout (low CLS).
- Reduced motion respected via CSS guard in `styles/globals.css`.
- Contact form validates with zod and posts to `/api/contact` (mocked; logs in dev).

Non-goals (v1)
- No CMS/admin, bookings, payments, or database.

Content Editing
- Update text, menu, promo, reviews, hours, social, map URL, and gallery via `content/site.json`.

