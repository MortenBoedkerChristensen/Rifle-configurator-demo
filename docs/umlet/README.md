# Domain model and class diagram

Two views of the same system, kept beside the code so the homepage, the
configurator proof of concept and the written report can point at the same
names.

| File | What it is | Open with |
| --- | --- | --- |
| `domain-model.uxf` | Conceptual model of the shop: customers, orders, products, dealer stock and the configurator's saved builds. | [UMLet](https://www.umlet.com/) |
| `class-diagram.uxf` | Design model of the same area, with attributes, methods and the geometry/compatibility interfaces. | [UMLet](https://www.umlet.com/) |
| `domain-model.mmd` | Read-only Mermaid mirror for GitHub and quick review. | GitHub / Mermaid Live |
| `class-diagram.mmd` | Read-only Mermaid mirror for GitHub and quick review. | GitHub / Mermaid Live |

Open a `.uxf` file with **File → Open** in UMLet. The diagrams use a freeform
coordinate layout, so they can be edited directly; the Mermaid files are
maintained by hand and are not meant to be edited separately.

## Why the model looks like this

**The configurator is part of the domain, not a widget.** A `Build` points at
one `RiflePlatform`, one `Scope` and one `Mount`. The same `Build` derives a
`Placement` (the millimetre positions) and a `CompatibilityResult` (the
verdict). That is the central rule from the proof of concept: the drawing and
the verdict must read the same numbers.

**Rifles are catalogue data, not products in the cart.** `RiflePlatform` is
deliberately **not** a subclass of `Product`. Danish/EU rules make online sale
of firearms and ammunition a different business, so the webshop sells optics,
mounts and gear, while rifles are shown as reference data and handed over to
an authorised dealer. `DealerStock` connects to `Product` and `Dealer`, never
to `RiflePlatform`.

**Money is stored in DKK and VAT is explicit.** `OrderLine.vatRate` and
`priceWithVat()` keep the 25% Danish VAT visible instead of hiding it in a
formatted string.

**Compatibility is a set of rules over one placement.** `GeometryEngine`
produces a `Placement`; `CompatibilityRule` implementations turn that placement
into errors and warnings. Concrete rules named in the diagram notes:
`RailRule`, `TubeRule`, `ObjectiveClearanceRule`, `EyeReliefRule` and
`WeightRule`. This is what makes the "picture" and the "verdict" impossible to
disagree.

**Saved builds belong to a customer.** The domain model shows `Customer 1 —
0..* Build`; the class diagram keeps the persistence link as `Build.ownerId`
so the configurator core does not depend on the customer aggregate.

## Reading the notation

- `1`, `0..*`, `1..*` are multiplicities. `Build 0..* — 1 Scope` means one
  scope can appear in many saved builds, but each build has exactly one scope.
- The hollow triangle is generalisation: `Scope`, `Mount` and `Accessory` are
  specialised `Product`s.
- `<<interface>>`, `<<abstract>>` and `<<enumeration>>` are UML stereotypes.
- The notes are part of the diagram, not decoration: they record the legal
  boundary and the concrete rule names.

## What is intentionally left out

- Payment, shipment and authentication providers. The homepage is a sketch;
  these belong in the implementation model once the checkout flow is chosen.
- CMS content such as guides and reviews. They do not affect the configurator
  or the order total.
- Generated values inside `Placement`. They are derived from the inputs and are
  shown in the class diagram as public read-only values, not stored columns.
