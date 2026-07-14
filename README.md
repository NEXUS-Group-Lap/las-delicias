# Panadería Las Delicias — Guatemalan Bakery & Restaurant

![Astro 6](https://img.shields.io/badge/Astro-6.4.8-ff5d01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4.1-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?style=for-the-badge&logo=typescript&logoColor=white)

Website for Panadería Las Delicias, a Guatemalan bakery and restaurant in Fort Myers, FL. Built on a static
Astro theme, adapted for local SEO, two full language versions (English/Spanish) with a language switcher,
delivery routes, and catering.

## Tech Stack

- Astro 6 (static output)
- Tailwind CSS 4
- TypeScript (strict)

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Set the production domain at build time once it's purchased:

```bash
SITE=https://your-domain.com npm run build
```

## Languages (English / Spanish)

The site is fully split into two languages — no mixed-language ("Spanglish") copy on either version:

- English lives at the root (`/`, `/menu`, `/bakery`, …).
- Spanish lives under `/es` (`/es`, `/es/menu`, `/es/bakery`, …), configured via Astro's built-in `i18n`
  routing in `astro.config.mjs`.
- The header (and mobile menu) has an **EN / ES** button that always links to the equivalent page in the
  other language, not just the homepage.
- `src/i18n/en.ts` and `src/i18n/es.ts` hold every UI string, typed against `src/i18n/types.ts` so both
  dictionaries are kept in sync (TypeScript errors if one language is missing a key).
- `src/i18n/utils.ts` exposes `getDictionary(lang)`, `getLangFromUrl(url)`, and `getLocalizedPath(path, lang)`
  (used to build nav links and the language-toggle target).
- Each page's markup lives once in `src/components/views/*View.astro` (e.g. `HomeView.astro`), taking a
  `lang` prop. The thin files in `src/pages/*.astro` and `src/pages/es/*.astro` just render the view with
  `lang="en"` / `lang="es"` — so edit the view, not the page, when copy or layout changes.
- `hreflang` alternate links and `<html lang>` are set automatically in `BaseLayout.astro`.

To add or edit copy: update the matching key in **both** `en.ts` and `es.ts` — the `Dictionary` type will
flag it if one is missed.

## Content Files

- `src/data/site.ts` — name, address, phone, email, hours (bilingual), social links, and delivery cities (the
  single source of truth for NAP data — update here, it propagates everywhere).
- `src/data/menu.ts` — menu categories (bilingual names/notes) and dish names, used by `/menu` and the
  homepage highlights. Dish names stay in Spanish in both language versions (standard for Latin restaurant
  menus).
- `src/layouts/BaseLayout.astro` — shared meta tags, Open Graph/Twitter tags, hreflang alternates, and
  Restaurant/Bakery JSON-LD.
- `src/components/SiteHeader.astro` / `SiteFooter.astro` — navigation, phone CTA, language toggle, and footer
  NAP/social block.
- `src/assets/gallery/` — real bakery/food photography, rendered via `astro:assets` `<Image>`.
- `src/assets/stock/` — free-license Pexels photos (dough-kneading hands, catering trays) used where no real
  photo exists yet.
- `src/styles.css` — design tokens (cream/beige bakery palette + blue accent) and local fonts.

## Pages

| English    | Spanish        | Content                                  |
| ---------- | -------------- | ----------------------------------------- |
| `/`        | `/es`          | Home                                       |
| `/menu`    | `/es/menu`     | Full menu by category                      |
| `/bakery`  | `/es/bakery`   | Bakery story                               |
| `/delivery`| `/es/delivery` | Delivery routes & cities                   |
| `/catering`| `/es/catering` | Catering & event orders                    |
| `/gallery` | `/es/gallery`  | Photo gallery (real bakery & food photos)  |
| `/contact` | `/es/contact`  | Address, phone, hours, social links        |

## Known Pending Items

- Real photography for the storefront facade and delivery vans — the home hero and delivery pages still use
  stand-in imagery (bread close-up / no image) since no real photo of the building or vans exists yet.
- Final logo file (SVG/PNG transparent) — replace `public/favicon.svg`.
- Confirmed current menu pricing, delivery schedules per city, catering minimums/lead time, and accepted
  payment methods.
- Final production domain — update `astro.config.mjs` (`site`) and `src/pages/robots.txt.js`.

## SEO

- Canonical URLs, Open Graph, Twitter cards
- Restaurant + Bakery JSON-LD (schema.org) on every page, sourced from `src/data/site.ts`
- Sitemap via `@astrojs/sitemap`
- Dynamic `robots.txt`

## License

This project is licensed under the [MIT License](LICENSE).
