# Trukkas Landing Project Guide

This project is a Vite + React + TypeScript landing site for Trukkas. It uses React Router, Tailwind CSS v4, Framer Motion, and Lucide React.

## Commands

- `npm.cmd run dev` starts the Vite dev server.
- `npm.cmd run build` runs TypeScript and production build checks.
- `npm.cmd run lint` runs ESLint.
- `npm.cmd run preview` serves the production build.

If port `5173` is already in use, use another port:

```bash
npm.cmd run dev -- --host localhost --port 5174 --strictPort
```

## Source Structure

- `src/App.tsx` defines the React Router routes.
- `src/main.tsx` mounts React and wraps the app with `BrowserRouter`.
- `src/index.css` contains Tailwind setup, design tokens, base styles, and shared utility classes.
- `src/layout/` contains shared page layout wrappers.
- `src/screen/` contains route-level page components. The landing page currently lives in `src/screen/HomeScreen.tsx`.
- `src/components/` contains reusable UI primitives such as buttons, logos, headings, and transitions.
- `src/data/` contains shared static data like navigation items.
- `src/assets/` contains all image assets used by the landing page.

## Current Pages

Routes are defined in `src/App.tsx`:

- `/` -> `HomeScreen`
- `/services` -> `ServicesScreen`
- `/about` -> `AboutScreen`
- `/contact` -> `ContactScreen`
- `*` -> `NotFoundScreen`

The landing page is intentionally self-contained because its hero/nav/footer have custom responsive behavior.

## Design System

Tailwind tokens are declared in `src/index.css` using `@theme`.

Important brand colors:

- Dark blue: `#000036`
- Blue: `#0241E8`
- Light blue: `#78D7FF`
- Background: `#E8ECF1`
- Background alt: `#EEEFEA`

Use the existing Tailwind theme names where possible:

- `trukkas-dark-blue`
- `trukkas-blue`
- `trukkas-light-blue`
- `trukkas-bg`
- `trukkas-bg-alt`

## Landing Page Notes

`src/screen/HomeScreen.tsx` currently includes:

- Hero section with custom mobile drawer navigation.
- Hero phone/container composition.
- Hero bottom trust bar image.
- How It Works section with image-based cards and mobile timeline.
- Two audience CTA panels.
- App download section with fixed `159px x 48px` store buttons.
- Footer with footer-specific Trukkas logo.

Mobile behavior is heavily tuned to supplied UI screenshots, so avoid broad layout refactors unless the design changes.

## Asset Conventions

Prefer importing local image assets from `src/assets/` instead of referencing files from Downloads or public paths.

Current important assets:

- `trukkas-logo-white.png` for hero nav.
- `trukkas-logo-blue.png` for mobile drawer.
- `trukkas-logo-footer.png` for footer.
- `iphone-request.png` for hero phone.
- `trukkas-containers-fit.png` for hero container layer.
- `hero-bottom-bar.png` for the hero trust bar.
- `how-documents-card.png`, `how-escrow-card.png`, `how-timeline-card.png` for How It Works cards.
- `app-store-button-tight.png`, `play-store-button-tight.png` for store buttons.

## Styling Guidelines

- Keep responsive differences explicit with Tailwind breakpoint prefixes.
- Preserve mobile-specific details in the landing page unless asked to change them.
- Use `md:` as the main boundary between mobile and desktop behavior.
- Keep CTA buttons on mobile at exact provided dimensions where specified.
- For image assets that include glow or padding, crop or size carefully so the visible button/artwork does not look stretched.

## Verification

After meaningful UI changes, run:

```bash
npm.cmd run build
npm.cmd run lint
```

For visual changes, preview locally and inspect both desktop and mobile widths.
