# Second Story

Second Story is a curated resale storefront for clothing, accessories, footwear, and home objects. The site combines an editorial marketplace experience with searchable product listings, category filters, individual item pages, seller details, condition information, and Stripe-ready checkout.

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Tailwind CSS 4 with a custom global design system
- Netlify deployment adapter
- Stripe Checkout through server functions
- Lucide icons

## Local development

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

The app runs on `http://localhost:3000` by default. For Netlify platform emulation, use:

```bash
netlify dev --port 8889
```

## Checkout configuration

Checkout is automatically enabled when `STRIPE_SECRET_KEY` is available in the environment. Set `SITE_URL` to the deployed site origin so Stripe returns customers to the correct success and cancellation pages.

Without Stripe configuration, the storefront remains fully browsable and clearly indicates that checkout setup is still required.

## Content updates

The sample catalog lives in `src/data/products.ts`. Each product includes its pricing, condition, seller, category, and visual treatment. The CSS-generated product artwork is implemented in `src/components/ProductVisual.tsx` and `src/styles.css`, so the project has no dependency on third-party product image hosts.
