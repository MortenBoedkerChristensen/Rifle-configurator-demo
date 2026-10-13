/*
 * data.js — the hardcoded catalogue for the proof of concept.
 *
 * COORDINATE SYSTEM (used everywhere):
 *   x grows toward the muzzle (right).  y = 0 is the bore / barrel centre-line.
 *   +y is DOWN (so the stock is at positive y, the scope sits at negative y).
 *   All numbers are millimetres and describe REAL geometry — nothing here is
 *   an arbitrary screen pixel. That is what lets one model drive both the
 *   picture and the compatibility checks.
 *
 * Brand names below are invented on purpose (no real trademarks / no
 * copyrighted product images). Swap in real specs later.
 */
(function () {
  window.FG = window.FG || {};

  FG.GUN = {
    id: 'rifle-northwind-ridgeback-308',
    category: 'rifle',
    brand: 'Northwind Arms',
    model: 'Ridgeback .308',
    displayName: 'Northwind Ridgeback — bolt-action .308 Win, 20" barrel',
    caliber: '.308 Win',
    weightKg: 3.30,
    railInterface: 'picatinny',
    eyeX: 360, // approx. distance from the butt to the shooter's eye (length of pull), mm
    profile: {
      x: { butt: 0, receiverBack: 385, receiverFront: 600, foreEndTip: 800, muzzle: 1110 },
      barrel: { startX: 600, endX: 1110, rChamber: 14.0, rMuzzle: 8.5 },
      receiver: { top: -37, bottom: 10 },
      rail: { startX: 400, endX: 560, top: -46, base: -37 },
      stock: {
        buttTop: -16, buttBottom: 42,
        combNoseX: 330, combNoseY: -12,
        wristTopX: 382, wristTopY: -6,
        wristBottomX: 382, wristBottomY: 12,
        gripBottomX: 300, gripBottomY: 50,
        toeX: 70, toeY: 60,
        foreStartTopX: 382, foreStartTopY: 16,
        foreTipTopX: 800, foreTipTopY: 18,
        foreTipBottomX: 800, foreTipBottomY: 32,
        foreBottomX: 400, foreBottomY: 46
      },
      bolt: { x: 583, y: -12, x2: 598, y2: 6, knobX: 604, knobY: 20, knobR: 7 },
      trigger: { guardX1: 410, guardY1: 14, guardX2: 316, guardY2: 52, bladeX1: 366, bladeY1: 16, bladeX2: 360, bladeY2: 42 },
      magazine: { x: 402, y: 12, w: 100, h: 30 }
    },
    anchors: { rail: { x: 480, y: -46 } }
  };

  FG.MOUNT = {
    id: 'mount-ridgeline-pica-30-med',
    category: 'mount',
    brand: 'Ridgeline Optics',
    model: 'Pica 30 Medium',
    displayName: 'Ridgeline Pica 30mm rings — medium height',
    railInterface: 'picatinny',
    tubeDiameter: 30,        // mm — the scope tube these rings clamp
    tubeCenterAboveRail: 24, // mm — "medium" height, from rail top to tube centre
    footHalfLength: 55,      // mm of rail it clamps, each side of centre
    ringSpan: 80,            // mm between the two rings
    weightKg: 0.16
  };

  FG.SCOPES = [
    {
      id: 'scope-1in-3-9x40',
      category: 'scope',
      brand: 'Northwind Optics',
      model: 'Classic 3-9x40',
      displayName: 'Northwind Classic 3-9x40 (1" tube)',
      magnification: '3-9x40',
      tubeDiameter: 25.4,    // 1 inch — does NOT fit 30mm rings (on purpose!)
      objectiveDiameter: 40,
      ocularDiameter: 41,
      tubeLength: 290,
      ocularLength: 32,
      objectiveLength: 40,
      weightKg: 0.42
    },
    {
      id: 'scope-30mm-4-16x50',
      category: 'scope',
      brand: 'Ridgeline Optics',
      model: 'Vantage 4-16x50',
      displayName: 'Ridgeline Vantage 4-16x50 (30mm tube)',
      magnification: '4-16x50',
      tubeDiameter: 30,
      objectiveDiameter: 50,
      ocularDiameter: 44,
      tubeLength: 320,
      ocularLength: 36,
      objectiveLength: 46,
      weightKg: 0.58
    }
  ];
})();
