# Second Story Project Guide

## Overview

Second Story is an editorial resale marketplace built with TanStack Start, React, TypeScript, and Netlify. It presents a curated product catalog, client-side discovery tools, individual product pages, and optional Stripe Checkout.

## Architecture

- `src/routes/__root.tsx` defines the document metadata and shared site chrome.
- `src/routes/index.tsx` contains the home page, product filtering, search, sorting, and favorites interactions.
- `src/routes/products/$productId.tsx` loads catalog entries by ID and renders product details.
- `src/routes/checkout/` contains Stripe success and cancellation views.
- `src/data/products.ts` is the single source of truth for the current static catalog.
- `src/components/ProductVisual.tsx` renders the product-specific CSS illustrations.
- `src/components/SiteChrome.tsx` contains the shared header and footer.
- `src/components/BuyButton.tsx` checks checkout availability and starts a Stripe session.
- `src/lib/stripe.ts` contains server-only Stripe session creation.
- `src/styles.css` contains the complete visual system, responsive layouts, motion, and product artwork.

## Conventions

- Use PascalCase for React components and camelCase for functions and variables.
- Keep route files focused on page composition and route-specific state.
- Keep catalog fields explicit and typed through the `Product` interface.
- Use CSS variables from `src/styles.css` instead of introducing isolated colors.
- Preserve keyboard focus, semantic HTML, accessible labels, and reduced-motion support.
- Add shared components under `src/components/` rather than duplicating markup across routes.

## Non-Obvious Decisions

- Product visuals are generated with CSS shapes instead of external image URLs. This keeps the starter self-contained and avoids unreliable third-party assets; production photography can replace `ProductVisual` later.
- Favorites and discovery filters are session-only interface state. Persistent wishlists, accounts, or seller listings require Netlify Identity and Netlify Database before implementation.
- Stripe Checkout is optional. Browsing works without credentials, while purchase controls provide a setup message until `STRIPE_SECRET_KEY` is configured.
- The newsletter form is currently a visual interaction only. Use Netlify Forms before collecting real submissions.

## Commands

- `npm run dev` starts the Vite development server.
- `netlify dev --port 8889` runs the site with Netlify platform emulation.
- `npm run build` creates the production bundle.
