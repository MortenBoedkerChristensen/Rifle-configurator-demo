/*
 * geometry.js — placement math + the compatibility engine.
 *
 * This is the heart of the whole project. It answers two questions with the
 * SAME numbers:
 *   1. Where does the scope sit on the rifle?      -> placeScope()
 *   2. Is this combination actually compatible?    -> evaluateBuild()
 * Because rendering reads the output of placeScope() and validation reads the
 * same values, the picture and the verdict can never disagree.
 */
(function () {
  window.FG = window.FG || {};
  const FG = window.FG;

  // Split a scope into its rear (ocular), straight (tube) and front (objective) sections.
  function scopeLengths(scope) {
    const ocularLength = scope.ocularLength != null ? scope.ocularLength : 35;
    const objectiveLength = scope.objectiveLength != null ? scope.objectiveLength : 45;
    const tubeLength = scope.tubeLength;
    return {
      ocularLength,
      objectiveLength,
      tubeLength,
      totalLength: ocularLength + tubeLength + objectiveLength
    };
  }

  // Where the scope ends up, in the gun's mm coordinate system.
  function placeScope(gun, mount, scope) {
    const rail = gun.anchors.rail;
    const centerlineY = rail.y - mount.tubeCenterAboveRail; // scope optical axis
    const centerX = rail.x;                                 // tube centred on the mount
    const L = scopeLengths(scope);
    const rearX = centerX - L.totalLength / 2;   // toward the shooter
    const frontX = centerX + L.totalLength / 2;  // toward the muzzle
    const tubeStartX = rearX + L.ocularLength;
    const tubeEndX = frontX - L.objectiveLength;
    return {
      centerlineY, centerX, rearX, frontX, tubeStartX, tubeEndX,
      ocularLength: L.ocularLength,
      objectiveLength: L.objectiveLength,
      tubeLength: L.tubeLength,
      totalLength: L.totalLength
    };
  }

  // The two ring positions along the rail.
  function ringXs(gun, mount) {
    const span = mount.ringSpan != null ? mount.ringSpan : 80;
    const cx = gun.anchors.rail.x;
    return [cx - span / 2, cx + span / 2];
  }

  // Barrel radius at a given x (linear taper from chamber to muzzle).
  function barrelRadiusAt(gun, x) {
    const b = gun.profile.barrel;
    const t = Math.min(1, Math.max(0, (x - b.startX) / (b.endX - b.startX)));
    return b.rChamber + (b.rMuzzle - b.rChamber) * t;
  }

  function fmtTube(mm) {
    return Math.abs(mm - 25.4) < 0.3 ? '1"' : mm + 'mm';
  }

  // The compatibility engine. Returns hard errors, soft warnings, passes and notes.
  function evaluateBuild(gun, mount, scope) {
    const errors = [];
    const warnings = [];
    const pass = [];
    const notes = [];

    const place = placeScope(gun, mount, scope);
    const rings = ringXs(gun, mount);

    // 1) Rail interface -----------------------------------------------------
    if (mount.railInterface !== gun.railInterface) {
      errors.push(`Rail mismatch: the rifle has a "${gun.railInterface}" rail but the mount fits "${mount.railInterface}".`);
    } else {
      pass.push(`Mount fits the rifle's ${gun.railInterface} rail.`);
    }

    // 2) Tube diameter ------------------------------------------------------
    const tubeFits = Math.abs(scope.tubeDiameter - mount.tubeDiameter) <= 0.25;
    if (!tubeFits) {
      errors.push(`Tube mismatch: the scope has a ${fmtTube(scope.tubeDiameter)} tube but the rings clamp a ${mount.tubeDiameter}mm tube.`);
    } else {
      pass.push(`Scope tube (${scope.tubeDiameter}mm) matches the rings.`);
    }

    // 3) Do the rings clamp the straight tube, not a bell? -------------------
    const ringsOnTube = rings.every((x) => x >= place.tubeStartX && x <= place.tubeEndX);
    if (!ringsOnTube) {
      errors.push(`Mounting position: the rings clamp the scope's bell instead of its straight ${scope.tubeDiameter}mm tube.`);
    }

    // 4) Objective-bell-to-barrel clearance ---------------------------------
    const objectiveCenterX = place.frontX - place.objectiveLength / 2;
    const barrelTopY = -barrelRadiusAt(gun, objectiveCenterX);       // barrel surface (y up = negative)
    const objectiveBottomY = place.centerlineY + scope.objectiveDiameter / 2;
    const clearance = barrelTopY - objectiveBottomY;                 // + = gap, - = collision
    if (clearance < 0) {
      errors.push(`The ${scope.objectiveDiameter}mm objective bell hits the barrel (${Math.abs(clearance).toFixed(1)}mm overlap). Raise the mount.`);
    } else if (clearance < 12) {
      warnings.push(`Tight clearance: only ${clearance.toFixed(1)}mm between the objective bell and the barrel. Consider taller rings.`);
    } else {
      pass.push(`Objective bell clears the barrel by ${clearance.toFixed(1)}mm.`);
    }

    // 5) High mount warning -------------------------------------------------
    if (mount.tubeCenterAboveRail > 32) {
      warnings.push(`High mount: the scope sits ${mount.tubeCenterAboveRail}mm over the rail, which hurts cheek weld and can add parallax error.`);
    }

    // 6) Eye relief ---------------------------------------------------------
    const eyeRelief = gun.eyeX - place.rearX;
    if (eyeRelief < 60) {
      warnings.push(`Eye relief is short (${eyeRelief.toFixed(0)}mm). The scope sits too close to the shooter.`);
    } else if (eyeRelief > 110) {
      warnings.push(`Eye relief is long (${eyeRelief.toFixed(0)}mm). The scope may sit too far forward.`);
    } else {
      pass.push(`Eye relief is comfortable (${eyeRelief.toFixed(0)}mm).`);
    }

    // 7) Weight -------------------------------------------------------------
    const totalWeight = gun.weightKg + mount.weightKg + scope.weightKg;
    if (totalWeight > 4.5) {
      warnings.push(`Heavy setup: ${totalWeight.toFixed(2)}kg total.`);
    } else {
      notes.push(`Total weight ${totalWeight.toFixed(2)}kg (rifle ${gun.weightKg} + mount ${mount.weightKg} + scope ${scope.weightKg}).`);
    }

    return {
      ok: errors.length === 0,
      errors, warnings, pass, notes,
      metrics: {
        centerlineY: place.centerlineY,
        objectiveClearanceMm: clearance,
        eyeReliefMm: eyeRelief,
        totalWeightKg: totalWeight,
        ringsOnTube,
        tubeFits
      },
      place,
      rings
    };
  }

  FG.geometry = { scopeLengths, placeScope, ringXs, barrelRadiusAt, evaluateBuild };
})();
