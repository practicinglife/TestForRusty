# ⚒️ IronForge Blacksmithing

A fully functional blacksmithing website built with Next.js, TypeScript, and Tailwind CSS. Features custom metalwork services, a gallery of work, and a wholesale materials shop with cart functionality.

## Features

- **Home Page** — Hero section, featured services, featured products, and client testimonials
- **Services** — Six blacksmithing services including custom forging, repair & restoration, decorative ironwork, tool making, architectural metalwork, and blade forging
- **Gallery** — Showcase of completed work with category filtering (Custom Forging, Decorative, Blades, Architectural)
- **Wholesale Shop** — 13 products across 4 categories (Steel & Iron, Tools & Equipment, Fuel & Flux, Hardware & Fasteners) with shopping cart, quantity controls, and bulk pricing info
- **About** — Company story, values, team bios, and stats
- **Contact** — Contact form with validation, business info, and location

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: React Context (cart)

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm start

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & Tailwind theme
│   ├── layout.tsx           # Root layout with Header, Footer, CartProvider
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page
│   ├── contact/page.tsx     # Contact page
│   ├── gallery/page.tsx     # Gallery page
│   ├── services/page.tsx    # Services page
│   └── shop/page.tsx        # Wholesale shop page
├── components/
│   ├── CartDrawer.tsx       # Slide-out cart drawer
│   ├── CartProvider.tsx     # Cart context provider
│   ├── Footer.tsx           # Site footer
│   ├── GalleryItem.tsx      # Gallery card component
│   ├── Header.tsx           # Site header with navigation
│   ├── HeroSection.tsx      # Home page hero section
│   ├── ProductCard.tsx      # Product card with add-to-cart
│   ├── ServiceCard.tsx      # Service card component
│   └── TestimonialCard.tsx  # Testimonial card component
├── data/
│   ├── gallery.ts           # Gallery items data
│   ├── products.ts          # Wholesale products data
│   └── services.ts          # Services data
└── types/
    └── index.ts             # TypeScript type definitions
```
