# Rifle Configurator — risk-part proof of concept

A tiny, dependency-free web page that proves the **riskiest part** of the
hunting-site idea: rendering a rifle with a mount and a scope **to true scale**,
and validating that the combination actually fits — from one shared geometry
model.

## Run it

Double-click `index.html`. That's it — no install, no build, no server.

## What is hardcoded

- **1 rifle** — Northwind Ridgeback, bolt-action .308 (invented brand, real-ish geometry)
- **1 mount** — Ridgeline Pica 30mm rings, medium height
- **2 scopes** — a 1" 3-9x40 (deliberately does *not* fit the 30mm rings) and a 30mm 4-16x50 (fits)

## The idea that makes this work

One geometry model drives both outputs:

- `placeScope()` decides where the scope sits (scope centreline, objective position, eye relief).
- The **compositor** draws from that result.
- The **compatibility engine** validates from the same result.

So the picture and the verdict can never disagree. Change a number in
`data.js` and both update together.

## Things to try (they're the demo)

1. Select the **1" 3-9x40** scope → it turns red and reports a **tube mismatch** with the 30mm rings.
2. Select the **30mm 4-16x50** scope → green, everything passes.
3. Drag the **mount height** slider up past 32mm → a **high-mount warning** appears.
   Drag it around → the **barrel clearance** number changes, because the
   objective's position is computed, not drawn by hand.

## Layout

```
index.html      the page
styles.css      theme + the colour rules for each part
js/data.js      the hardcoded catalogue (all millimetres)
js/geometry.js  placement math + compatibility engine   <-- the core
js/render.js    the SVG compositor                       <-- the other core
js/app.js       UI wiring
```

## Coordinate system

`x` grows toward the muzzle. `y = 0` is the bore centre-line, `+y` is down.
Everything in `data.js` is millimetres of real geometry. The `<svg>` `viewBox`
is set from the real bounding box, so the browser scales it and **1 unit = 1 mm**.

## What this proves / what's next

**Proved:** the visual + compatibility core works and is genuinely parametric,
not a mock-up. Two of the scariest unknowns (does the compositor read as a real
rifle? can validation and picture share one model?) are now answered.

**Next steps:**
1. Replace invented geometry with real, cited specs for ~30 popular parts.
2. Move the rules into a data-driven table instead of `if` statements.
3. Swap the parametric SVG for sprite/3D parts one at a time (same anchors).
4. Add a database + admin editor so non-devs can enter parts.
