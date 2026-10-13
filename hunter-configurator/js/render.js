/*
 * render.js — the compositor.
 *
 * Draws the rifle, then the mount, then the scope, then the ring outlines on
 * top. Every coordinate comes from data.js / geometry.js, so the drawing is
 * genuinely to scale: 1 SVG user unit = 1 mm. The <svg viewBox> is set from the
 * real bounding box, so the browser handles all zooming.
 */
(function () {
  window.FG = window.FG || {};
  const FG = window.FG;

  function n(v) {
    return Number(v.toFixed(2));
  }

  function rect(x, y, w, h, cls, extra) {
    return '<rect class="' + cls + '" x="' + n(x) + '" y="' + n(y) + '" width="' + n(w) +
      '" height="' + n(h) + '" ' + (extra || '') + '/>';
  }

  function poly(points, cls) {
    return '<polygon class="' + cls + '" points="' +
      points.map((p) => n(p[0]) + ',' + n(p[1])).join(' ') + '"/>';
  }

  function line(x1, y1, x2, y2, cls, extra) {
    return '<line class="' + cls + '" x1="' + n(x1) + '" y1="' + n(y1) + '" x2="' + n(x2) +
      '" y2="' + n(y2) + '" ' + (extra || '') + '/>';
  }

  function circle(cx, cy, r, cls) {
    return '<circle class="' + cls + '" cx="' + n(cx) + '" cy="' + n(cy) + '" r="' + n(r) + '"/>';
  }

  // ---- the rifle ----------------------------------------------------------
  function renderRifle(gun) {
    const p = gun.profile;
    const x = p.x, s = p.stock, r = p.rail, b = p.barrel, rec = p.receiver;

    const stockPoly = [
      [x.butt, s.buttTop], [230, -24], [s.combNoseX, s.combNoseY],
      [s.wristTopX, s.wristTopY], [s.wristBottomX, s.wristBottomY],
      [s.gripBottomX, s.gripBottomY], [s.toeX, s.toeY], [x.butt, s.buttBottom]
    ];
    const forePoly = [
      [s.foreStartTopX, s.foreStartTopY], [s.foreTipTopX, s.foreTipTopY],
      [s.foreTipBottomX, s.foreTipBottomY], [s.foreBottomX, s.foreBottomY],
      [s.wristBottomX, 34]
    ];
    const barrelPoly = [
      [b.startX, -b.rChamber], [b.endX, -b.rMuzzle], [b.endX, b.rMuzzle], [b.startX, b.rChamber]
    ];

    let notches = '';
    for (let nx = r.startX + 5; nx < r.endX - 2; nx += 5) {
      notches += line(nx, r.top, nx, r.top + 4, 'rail-notch');
    }

    const a = gun.anchors.rail;

    return (
      '<g class="part-gun">' +
        poly(stockPoly, 'gun-wood') +
        poly(forePoly, 'gun-wood') +
        poly(barrelPoly, 'gun-steel') +
        rect(x.receiverBack, rec.top, x.receiverFront - x.receiverBack, rec.bottom - rec.top, 'gun-steel', 'rx="2"') +
        rect(r.startX, r.top, r.endX - r.startX, r.base - r.top, 'gun-steel') +
        notches +
        '<path class="gun-stroke" d="M' + n(p.bolt.x) + ' ' + n(p.bolt.y) + ' L' + n(p.bolt.x2) + ' ' + n(p.bolt.y2) + '"/>' +
        circle(p.bolt.knobX, p.bolt.knobY, p.bolt.knobR, 'gun-steel') +
        '<path class="gun-stroke" d="M' + n(p.trigger.guardX1) + ' ' + n(p.trigger.guardY1) +
          ' C 406 44, 362 54, ' + n(p.trigger.guardX2) + ' ' + n(p.trigger.guardY2) + '"/>' +
        line(p.trigger.bladeX1, p.trigger.bladeY1, p.trigger.bladeX2, p.trigger.bladeY2, 'gun-line') +
        rect(p.magazine.x, p.magazine.y, p.magazine.w, p.magazine.h, 'gun-wood', 'rx="3"') +
        line(b.endX, -b.rMuzzle, b.endX, b.rMuzzle, 'gun-line') +
        '<g class="anchor">' +
          line(a.x - 7, a.y, a.x + 7, a.y) +
          line(a.x, a.y - 7, a.x, a.y + 7) +
        '</g>' +
      '</g>'
    );
  }

  // ---- the mount (body, drawn under the scope) ----------------------------
  function renderMountBody(gun, mount, place) {
    const rail = gun.anchors.rail;
    const footHalf = mount.footHalfLength != null ? mount.footHalfLength : 55;
    const tubeRadius = mount.tubeDiameter / 2;
    const tubeBottomY = place.centerlineY + tubeRadius;
    const rings = FG.geometry.ringXs(gun, mount);
    const clampHalf = 20;

    let s = '<g class="part-mount">';
    // base plate resting on the rail
    s += rect(rail.x - footHalf, rail.y - 1, footHalf * 2, 5, 'mount-body', 'rx="1.5"');
    // clamps that wrap the rail
    rings.forEach((rx) => {
      s += rect(rx - clampHalf, rail.y - 6, clampHalf * 2, 16, 'mount-body', 'rx="2"');
    });
    // posts up to the tube
    rings.forEach((rx) => {
      s += rect(rx - 7, tubeBottomY, 14, rail.y - tubeBottomY, 'mount-body');
    });
    s += '</g>';
    return s;
  }

  // ---- the scope ----------------------------------------------------------
  function renderScope(scope, place, result) {
    const cy = place.centerlineY;
    const tubeR = scope.tubeDiameter / 2;
    const objR = scope.objectiveDiameter / 2;
    const ocuR = scope.ocularDiameter / 2;
    const cls = 'part-scope' + (result.metrics.tubeFits ? '' : ' is-error');

    return (
      '<g class="' + cls + '">' +
        rect(place.rearX, cy - ocuR, place.ocularLength, scope.ocularDiameter, 'scope-body', 'rx="3"') +
        rect(place.tubeStartX, cy - tubeR, place.tubeLength, scope.tubeDiameter, 'scope-body') +
        rect(place.tubeEndX, cy - objR, place.objectiveLength, scope.objectiveDiameter, 'scope-body', 'rx="4"') +
        rect(place.centerX - 13, cy - tubeR - 20, 26, 20, 'scope-body', 'rx="3"') +
        rect(place.tubeStartX + 6, cy - tubeR - 2, 14, scope.tubeDiameter + 4, 'scope-detail', 'rx="2"') +
      '</g>'
    );
  }

  // ---- ring outlines (drawn ON TOP so the tube shows through) -------------
  function renderMountOverlay(gun, mount, place) {
    const tubeRadius = mount.tubeDiameter / 2;
    const top = place.centerlineY - tubeRadius - 2;
    const h = mount.tubeDiameter + 4;
    const rings = FG.geometry.ringXs(gun, mount);

    let s = '<g class="part-mount-ring">';
    rings.forEach((rx) => {
      s += rect(rx - 9, top, 18, h, 'ring-outline', 'rx="6"');
    });
    s += '</g>';
    return s;
  }

  // ---- compose everything -------------------------------------------------
  function renderBuild(svg, build) {
    const gun = build.gun, mount = build.mount, scope = build.scope, result = build.result;
    const place = result.place;

    const scopeTop = place.centerlineY - Math.max(scope.objectiveDiameter, scope.ocularDiameter) / 2 - 24;
    const yMin = Math.min(gun.profile.receiver.top, scopeTop) - 12;
    const yMax = 84;
    const xMin = -30;
    const xMax = gun.profile.x.muzzle + 44;

    svg.setAttribute('viewBox', xMin + ' ' + yMin + ' ' + (xMax - xMin) + ' ' + (yMax - yMin));
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    svg.innerHTML =
      renderRifle(gun) +
      renderMountBody(gun, mount, place) +
      renderScope(scope, place, result) +
      renderMountOverlay(gun, mount, place);
  }

  FG.render = { renderBuild };
})();
