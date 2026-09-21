# Byte254 🇰🇪

**Premium Tech, Kenyan Prices.** A modern e-commerce landing site and product catalog built with **Next.js**, **React**, and **Tailwind CSS** — shop genuine laptops, phones, and electronics with M-Pesa acceptance and delivery to all 47 counties.

---

## Features

- 🛍️ **Product catalog** with 8 products across Laptops, Phones, Audio, Tablets, and Gaming
- 🔍 **Live search** — filter products by name as you type
- 🏷️ **Category filter pills** — one-click category switching
- 🎠 **Auto-playing carousel** — flagship products rotate every 5s with arrows and pagination dots
- ⭐ **Ratings & stock badges** — star ratings, review counts, Featured / Out-of-Stock labels
- 🛒 **Cart state** — add-to-cart buttons with a live cart counter
- 🌓 **Dark mode** — respects system preference, smooth color transitions
- 💰 **KSh pricing** — thousands-separated Kenyan Shilling formatting
- ⚡ React Compiler enabled for optimized re-renders

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Icons | Font Awesome 7 |
| Fonts | Geist Sans & Geist Mono (via `next/font`) |
| Linter/Formatter | Biome 2 |
| Package Manager | Bun (a `package-lock.json` is also included for npm users) |

## Dependencies Explained

### Production dependencies

| Package | Version | What it does |
| --- | --- | --- |
| `next` | 16.2.9 | The React framework powering the app — App Router, static/dynamic rendering, image/font optimization, dev server, and production builds. |
| `react` | 19.2.4 | Core UI library. Interactive state (search text, active category, cart count, carousel index) is managed with React hooks. |
| `react-dom` | 19.2.4 | React's renderer for the web — mounts components into the browser DOM. |
| `@fortawesome/fontawesome-svg-core` | ^7.3.0 | Font Awesome's rendering engine — builds SVG icons from icon definitions. |
| `@fortawesome/free-solid-svg-icons` | ^7.3.0 | The free solid icon pack (600+ icons) used across the UI. |
| `@fortawesome/react-fontawesome` | ^3.3.1 | React component wrapper — renders Font Awesome icons as inline SVG components. |

### Development dependencies

| Package | Version | What it does |
| --- | --- | --- |
| `typescript` | ^5 | Static typing for JavaScript. Catches type errors at compile time via `tsc --noEmit`. |
| `tailwindcss` | ^4 | Utility-first CSS framework — all layout, theming, dark mode, and animations use Tailwind classes. |
| `@tailwindcss/postcss` | ^4 | PostCSS plugin that lets Next.js process Tailwind v4 styles (wired in `postcss.config.mjs`). |
| `@biomejs/biome` | 2.2.0 | All-in-one linter + formatter (replaces ESLint/Prettier). Run via `npm run lint` / `npm run format`. |
| `@types/node` | ^20 | TypeScript type definitions for Node.js APIs. |
| `@types/react` | ^19 | TypeScript type definitions for React (hooks, JSX, events). |
| `@types/react-dom` | ^19 | TypeScript type definitions for React DOM. |
| `babel-plugin-react-compiler` | 1.0.0 | React Compiler integration — auto-memoizes components to avoid unnecessary re-renders. Enabled via `reactCompiler: true` in `next.config.ts`. |

### Global packages you need installed (machine setup)

- **Node.js 20+** — JavaScript runtime (required by npm/Next.js)
- **npm** — comes bundled with Node.js
- **Bun** *(optional but recommended)* — faster package manager; the repo ships a `bun.lock`

## Prerequisites — Machine Setup

Before running the project, set up your machine:

### 1. Install Node.js (v20 or later)

**Windows** — download the installer from [nodejs.org](https://nodejs.org) or use winget:

```powershell
winget install OpenJS.NodeJS.LTS
```

**macOS** — using Homebrew:

```bash
brew install node
```

**Linux (Debian/Ubuntu)**:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verify the install:

```bash
node --version   # should print v20.x.x or later
npm --version
```

### 2. Install Bun (optional — recommended)

```bash
# macOS / Linux
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"
```

Verify:

```bash
bun --version
```

> If you skip Bun, use `npm` for everything instead (see commands below).

## Getting Started

### 1. Clone and enter the project

```bash
git clone <your-repo-url>
cd Byte254
```

### 2. Install dependencies

**With Bun (recommended — matches `bun.lock`):**

```bash
bun install
```

**With npm:**

```bash
npm install
```

### 3. Run the development server

```bash
bun run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Pages hot-reload as you edit files.

### 4. Build for production (optional)

```bash
bun run build
bun run start
# or with npm
npm run build
npm run start
```

## Available Scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `bun run dev` / `npm run dev` | Starts the dev server with hot reload at `localhost:3000`. |
| `build` | `bun run build` / `npm run build` | Creates an optimized production build in `.next/`. |
| `start` | `bun run start` / `npm run start` | Serves the production build (run `build` first). |
| `lint` | `bun run lint` / `npm run lint` | Runs Biome to lint and check formatting. |
| `format` | `bun run format` / `npm run format` | Auto-formats the codebase with Biome. |

## Project Structure

```
Byte254/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout — Navbar + Footer wrap every page
│   │   ├── page.tsx                # Home: Hero → Featured carousel → WhyUs → About → Contact
│   │   ├── globals.css             # Tailwind + theme variables
│   │   ├── favicon.ico
│   │   ├── About/page.tsx          # About page
│   │   ├── Contact/page.tsx        # Contact page
│   │   ├── Product/
│   │   │   ├── page.tsx            # Product catalog (search, filters, cart, grid)
│   │   │   └── slug/slug.tsx       # Product detail component scaffold (see Roadmap)
│   │   └── WhyUs/page.tsx          # Why Us page
│   └── features/
│       └── landingPage/
│           └── components/
│               ├── NavBar.tsx      # Sticky top navigation
│               ├── HeroSection.tsx # Landing hero banner
│               ├── carousel.tsx    # Reusable auto-playing product carousel
│               ├── WhyUs.tsx       # Value-proposition section
│               ├── About.tsx       # About teaser section
│               ├── ContactUs.tsx   # Contact section
│               └── Footer.tsx      # Site footer
├── public/
│   └── products/                   # Product images (PNG)
├── next.config.ts                  # Next.js config (React Compiler enabled)
├── postcss.config.mjs              # PostCSS config (Tailwind plugin)
├── biome.json                      # Biome linter/formatter config
├── tsconfig.json                   # TypeScript config (@/* → ./src/* path alias)
├── bun.lock / package-lock.json    # Lockfiles for Bun / npm
└── package.json                    # Scripts + dependencies
```

## How It Works

- **Root layout** (`src/app/layout.tsx`) wraps every page with `NavBar` and `Footer`, sets site metadata ("Byte254 — Premium Tech, Kenyan Prices"), and enables dark mode via the `dark` class on `<html>`.
- **Home** (`src/app/page.tsx`) composes `HeroSection`, a featured-products `Carousel` (4 flagship items), and teaser sections for WhyUs, About, and ContactUs.
- **Product catalog** (`src/app/Product/page.tsx`, client component):
  1. A single `products` array holds all catalog data (name, price in KSh, category, image, rating, stock).
  2. `cat` and `search` state drive filtering — products are filtered by active category pill AND case-insensitive name match.
  3. `cartCount` state increments on "Add to Cart"; the header cart button shows the total.
  4. Products render in a responsive grid (1→2→3→4 columns), with star ratings drawn as inline SVGs and Featured/Out-of-Stock badges.
- **Carousel** (`carousel.tsx`, client component): auto-advances every 5 seconds via `setInterval`, with prev/next arrows and clickable pagination dots. Reused on both Home and the Product page.

## Roadmap / Known Limitations

- 🔲 **Product detail routes** — `Product/slug/slug.tsx` is a working component scaffold, but it isn't wired as a dynamic route yet (no `Product/[slug]/page.tsx`). Product cards currently don't link to detail pages.
- 🔲 **Persistent cart** — cart is a client-side counter only; it resets on refresh. No localStorage/backend yet.
- 🔲 **Hardcoded data** — products are inline arrays; no CMS or database.
- 🔲 **Checkout & M-Pesa integration** — mentioned in the branding, not yet implemented.
- 🔲 `<img>` is used instead of `next/image` — switching would add automatic optimization and lazy loading.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `bun: command not found` | Use `npm` commands instead, or install Bun (see Prerequisites). |
| Port 3000 already in use | Run `npm run dev -- -p 3001` to use a different port. |
| Type errors about missing modules | Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`. |
| Product images not loading | Verify PNGs exist in `public/products/` — image paths are hardcoded in the product arrays. |
| Biome not found when linting | Ensure dev dependencies are installed (`npm install`), then re-run `npm run lint`. |

## Deploy on Vercel

The easiest way to deploy is with the [Vercel Platform](https://vercel.com/new) from the creators of Next.js:

1. Push the repo to GitHub/GitLab/Bitbucket
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — just click **Deploy**

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

---

Learn more about the underlying tools: [Next.js docs](https://nextjs.org/docs) · [React docs](https://react.dev) · [Tailwind CSS docs](https://tailwindcss.com/docs) · [Font Awesome docs](https://docs.fontawesome.com) · [Biome docs](https://biomejs.dev)
