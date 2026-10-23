# SIGTE — homepage sketch (Next.js)

A design sketch for the homepage of the hunting shop, built as a real Next.js
App Router project. The brand, products and copy are invented, but the layout,
the Danish market details and the configurator angle are the real thing.

The point of the page: **the configurator is the differentiator, not a side
feature.** It owns the hero, gets its own interactive section, and every product
card is framed by whether it fits your rifle.

## Look at it without installing anything

Open `preview/homepage.html` directly in a browser. It is a static mirror that
uses the exact same stylesheet (`app/homepage.css`) and includes working vanilla
JS for the ring-height demo and the newsletter state.

> The preview opens straight from disk, with no Node toolchain or build step. It
> is not used by Next.js and can be deleted once you only need the app.

## Run the Next.js app

```bash
cd web
npm install
npm run dev
```

Open <http://localhost:3000>. Node 18.18+ is required.

```bash
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Structure

```
web/
  app/
    layout.tsx          lang="da", metadata, global stylesheet
    page.tsx            homepage composition
    homepage.css        the whole design system + page styles
    konfigurator/
      page.tsx          placeholder route so CTAs are not dead ends
  components/
    SiteHeader.tsx      topbar, sticky nav, mobile menu (details/summary)
    Hero.tsx            headline, CTAs, stats, example build card
    BuildSchematic.tsx  parametric-looking rifle/scope SVG with callouts
    TrustStrip.tsx      shipping, returns, payment, support
    Categories.tsx      five category cards
    ConfiguratorBand.tsx  dark section + live ring-height demo (client)
    Products.tsx        four product cards with compatibility chips
    ProductArt.tsx      scope and mount line-art (no photos needed)
    Guides.tsx          editorial cards
    Dealers.tsx         local-dealer list + stylised map
    Newsletter.tsx      form with success state (client)
    SiteFooter.tsx      links, payments, legal note
    Icons.tsx           inline stroke icons (no icon dependency)
  lib/content.ts        all copy/data in one place
  preview/homepage.html static mirror for quick review
```

## Design notes

- **Palette:** ink `#14170f`, bone `#f6f3ea`, moss `#35402a`, brass `#c9a76a`.
  Brass is reserved for measurement and primary actions, so the configurator
  reads as the instrument on the page.
- **Type:** system serif (Iowan/Palatino/Georgia) for headlines, system sans for
  UI. No webfont requests, so the sketch renders offline and has no FOUT.
- **No photos:** the rifle, scopes and mounts are inline SVG. It keeps the repo
  light and avoids fake stock imagery; real photography can drop into
  `.product-media` later.
- **Danish market:** DKK, "moms inkl.", MobilePay, PostNord, 1–2 day delivery,
  30-day returns, Danish copy throughout.
- **Legal position:** the footer and dealer section state plainly that firearms
  and ammunition are not sold online; those go through authorised dealers. The
  shop sells optics, mounts, gear and referrals.
- **Reusable primitives:** `.btn`, `.section`, `.kicker`, `.chip`, `.wrap`,
  `.product-card`. Everything is plain CSS with custom properties, so moving to
  Tailwind or CSS Modules later is mechanical.

## What is mocked

- Product names, prices, stock counts, Trustpilot rating and dealer distances.
- The hero schematic is hand-drawn SVG, not generated from the geometry engine.
  The `hunter-configurator/js/geometry.js` model is what should feed it.
- Search, account, cart and the newsletter submit have no backend. The
  newsletter shows a local success state; the cart badge is static.
- `/konfigurator` is a placeholder page.

## Verified

- `npm run build` and `npm run typecheck` pass (Next.js 15.5, React 19).
- Production build checked in a browser: slider, newsletter success state,
  mobile menu and `/konfigurator` all work; no console errors.
- Lighthouse on the live page: **1.0 accessibility, 1.0 best practices, 1.0 SEO**.
- No horizontal overflow at 360, 390, 768, 1024 and 1440 px. The hand-drawn
  callouts are replaced by readable captions under 620 px.

## Next steps

1. Extract the configurator core from `hunter-configurator/` into
   `packages/configurator-core` and feed the real `BuildSchematic`.
2. Replace `lib/content.ts` with CMS/catalogue data (`Product`, `Variant`,
   `ComponentProfile` from the domain model).
3. Wire the newsletter form to the API and add proper validation/error states.
4. Add product listing and product detail routes; keep compatibility status
   visible on every card.
5. Connect search, account and cart to a backend; make the cart badge live.
