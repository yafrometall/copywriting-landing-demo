# QWEN.md — TechFit X1 Landing Page

## Project Overview

**TechFit X1** is a product landing page built with **Angular 19** for a sports smartwatch. The app showcases the product's key features (heart rate monitoring, SpO2, GPS, 7-day battery) and drives conversions with pricing, testimonials, and a call-to-action.

### Tech Stack
- **Framework:** Angular 19 (standalone components, no NgModules)
- **Styling:** SCSS with custom CSS variables (no external UI library)
- **Build:** Angular DevKit (`@angular-devkit/build-angular:application`)
- **Package Manager:** npm

### Architecture

```
src/app/
├── components/
│   ├── hero/           — Hero section: product title, highlights, CTA, animated watch mockup
│   ├── features/       — Feature cards: 6 benefits with icons and descriptions
│   ├── testimonials/   — Testimonial cards: 4 customer reviews with ratings
│   ├── pricing/        — Pricing section: launch price, savings, guarantee, trust badges
│   └── footer/         — Footer: brand info, quick links, legal, contact
└── pages/
    ├── landing-page/   — Container component that assembles all sections
    └── checkout/       — Checkout page: personal data, shipping, payment form, simulate payment
```

All components are **standalone** (no NgModules). The app uses **Angular Router** for navigation between the landing page (`/`) and checkout (`/checkout`).

### Product Details
- **Product:** TechFit X1 Sports Smartwatch
- **Launch Price:** $89 USD (original: $149 USD)
- **Key Features:** Heart rate monitoring, SpO2, integrated GPS, 7-day battery, IP68 water resistance, smart notifications
- **Perks:** Free shipping, 30-day no-questions guarantee

## Building and Running

### Development Server
```bash
ng serve
```
The app will be available at `http://localhost:4200` with hot reload.

### Production Build
```bash
ng build
```
Output is written to `dist/techfit-x1`.

### Serving the Built App
```bash
npx http-server dist/techfit-x1/browser -p 8080
```

### Dependencies
```bash
npm install        # Install dependencies
npm update         # Update dependencies
```

## Development Conventions

### Component Style
- All components are **standalone** with inline `imports` array
- SCSS is used for styling with a shared `_variables.scss` file in `src/app/styles/`
- Component styles are scoped (each component has its own `.scss` file)

### SCSS Variables
Key variables defined in `src/app/styles/_variables.scss`:
- `$primary-dark`, `$primary-blue` — Brand colors
- `$accent-green`, `$accent-orange`, `$accent-yellow` — Accent/CTA colors
- `$text-dark`, `$text-muted`, `$text-light` — Text colors
- `$bg-light`, `$bg-white` — Background colors

### Code Color Function
When adjusting colors in SCSS, use `@use 'sass:color'` and `color.adjust()` instead of the deprecated `darken()`/`lighten()` globals:
```scss
@use 'sass:color';
background: color.adjust($accent-orange, $lightness: -10%);
```

### Template Notes
- Use `&#64;` for the `@` character in HTML templates (e.g., emails) to avoid Angular template parsing errors
- External font links in `index.html` work fine; avoid `@import url(...)` in SCSS files

### Responsive Design
All components are responsive with CSS Grid and media queries:
- Desktop: full grid layouts (3 columns for features, 2 for testimonials)
- Tablet: 2-column layouts
- Mobile: single-column stacking

## Future Enhancements
- [ ] Replace simulated payment with real payment gateway (Stripe, PayPal)
- [ ] Add real product images to replace the animated watch mockup
- [ ] Implement analytics tracking (Google Analytics, Facebook Pixel)
- [ ] Add A/B testing for CTA buttons and pricing copy
- [ ] Multi-language support (i18n)
- [ ] Form validation with Angular Reactive Forms and server-side validation
