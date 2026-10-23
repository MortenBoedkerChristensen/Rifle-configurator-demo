# SIGTE — hunting shop with a true-to-scale configurator

Two connected pieces, built to de-risk the same product idea: a Danish hunting
shop whose differentiator is a PCPartPicker-style rifle, mount and scope
configurator — with a visual preview drawn to real measurements.

| Folder | What it is | Status |
| --- | --- | --- |
| `hunter-configurator/` | Zero-dependency proof of concept for the hard part: one geometry model drives both the SVG and the compatibility verdict. | Working |
| `web/` | Next.js homepage sketch for the shop, with the configurator as the hero and a live ring-height demo. | Sketch |

## Quick start

**Configurator proof of concept** — open `hunter-configurator/index.html`. No
install, no build, no server.

**Homepage sketch without Node** — open `web/preview/homepage.html`. Shared
stylesheet, working demo slider and newsletter state.

**Next.js app**

```bash
cd web
npm install
npm run dev
```

See `web/README.md` for the design rationale and file map.

## The idea

The configurator is not a widget bolted onto a shop. It is the reason to choose
this shop:

- parts carry real geometry (tube diameter, objective size, ring height, rail
  interface), not just marketing categories;
- the preview and the compatibility check read the **same** placement result, so
  the picture cannot disagree with the verdict;
- the shop sells optics, mounts, gear and dealer referrals. Firearms and
  ammunition are not sold online; the site routes those to authorised Danish
  dealers.

## Status / next steps

1. Wire the homepage's schematic to the real geometry engine.
2. Extract `configurator-core` and add the server-authoritative validation API.
3. Replace mock catalogue data with the domain model and CMS/admin entry.
4. Build product listing and detail pages around compatibility.
