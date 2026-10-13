/*
 * app.js — wires the UI to the geometry + compositor.
 * Deliberately tiny: pick a scope, nudge the mount height, see the result.
 */
(function () {
  const FG = window.FG;
  const gun = FG.GUN;
  const baseMount = FG.MOUNT;

  const state = {
    scopeId: FG.SCOPES[1].id,                 // start on the 30mm scope (the one that fits)
    tubeCenterAboveRail: baseMount.tubeCenterAboveRail
  };

  const svg = document.getElementById('build');
  const scopeOptions = document.getElementById('scope-options');
  const heightInput = document.getElementById('mount-height');
  const heightValue = document.getElementById('mount-height-value');
  const verdict = document.getElementById('verdict');

  // ---- static left-column info -------------------------------------------
  document.getElementById('rifle-name').textContent = gun.displayName;
  document.getElementById('rifle-spec').textContent =
    gun.caliber + ' · rail: ' + gun.railInterface + ' · ' + gun.weightKg + 'kg';
  document.getElementById('mount-name').textContent = baseMount.displayName;
  document.getElementById('mount-spec').textContent =
    baseMount.railInterface + ' rail · ' + baseMount.tubeDiameter + 'mm tube · ' + baseMount.weightKg + 'kg';

  // ---- scope radio options ------------------------------------------------
  FG.SCOPES.forEach((scope) => {
    const label = document.createElement('label');
    label.className = 'option';
    label.innerHTML =
      '<input type="radio" name="scope" value="' + scope.id + '">' +
      '<span class="option-main"><strong>' + scope.displayName + '</strong>' +
        '<small>' + scope.tubeDiameter + 'mm tube · ' + scope.objectiveDiameter +
        'mm objective · ' + scope.weightKg + 'kg</small></span>' +
      '<span class="badge" data-badge="' + scope.id + '"></span>';
    scopeOptions.appendChild(label);
  });

  scopeOptions.addEventListener('change', (e) => {
    if (e.target.name === 'scope') { state.scopeId = e.target.value; update(); }
  });
  heightInput.addEventListener('input', (e) => {
    state.tubeCenterAboveRail = Number(e.target.value); update();
  });

  function currentMount() {
    return Object.assign({}, baseMount, { tubeCenterAboveRail: state.tubeCenterAboveRail });
  }

  function update() {
    const mount = currentMount();
    const scope = FG.SCOPES.find((s) => s.id === state.scopeId);
    const result = FG.geometry.evaluateBuild(gun, mount, scope);

    const radio = document.querySelector('input[name="scope"][value="' + scope.id + '"]');
    if (radio) radio.checked = true;

    FG.render.renderBuild(svg, { gun, mount, scope, result });
    heightValue.textContent = state.tubeCenterAboveRail + ' mm';

    updateBadges();
    renderVerdict(result, scope);
  }

  function statusOf(result) {
    if (result.errors.length) return { cls: 'bad', text: 'Does not fit', badge: 'badge-bad', badgeText: 'Does not fit' };
    if (result.warnings.length) return { cls: 'warn', text: 'Fits, with warnings', badge: 'badge-warn', badgeText: 'Fits, with warnings' };
    return { cls: 'ok', text: 'Fits', badge: 'badge-ok', badgeText: 'Fits' };
  }

  function updateBadges() {
    const mount = currentMount();
    FG.SCOPES.forEach((scope) => {
      const r = FG.geometry.evaluateBuild(gun, mount, scope);
      const st = statusOf(r);
      const el = document.querySelector('[data-badge="' + scope.id + '"]');
      el.textContent = st.badgeText;
      el.className = 'badge ' + st.badge;
    });
  }

  function renderVerdict(result, scope) {
    const st = statusOf(result);
    const m = result.metrics;

    const metric = (label, value) =>
      '<div class="metric"><span class="label">' + label + '</span><span class="value">' + value + '</span></div>';

    const clearance = m.objectiveClearanceMm < 0
      ? Math.abs(m.objectiveClearanceMm).toFixed(1) + 'mm overlap'
      : m.objectiveClearanceMm.toFixed(1) + 'mm gap';

    let html =
      '<div class="status ' + st.cls + '"><span class="dot"></span>' + st.text +
        '<span style="margin-left:auto;font-weight:400;font-size:12px;opacity:.8">' + scope.magnification + '</span></div>' +
      '<div class="metrics">' +
        metric('Barrel clearance', clearance) +
        metric('Eye relief', m.eyeReliefMm.toFixed(0) + 'mm') +
        metric('Scope height', baseMount ? (state.tubeCenterAboveRail + 'mm over rail') : '') +
        metric('Total weight', m.totalWeightKg.toFixed(2) + 'kg') +
      '</div>';

    const rows = [];
    result.errors.forEach((t) => rows.push(['err', '✕', t]));
    result.warnings.forEach((t) => rows.push(['warn', '!', t]));
    result.pass.forEach((t) => rows.push(['pass', '✓', t]));
    result.notes.forEach((t) => rows.push(['note', 'i', t]));

    html += '<ul class="checks">' +
      rows.map((r) => '<li class="' + r[0] + '"><span class="icon">' + r[1] + '</span><span>' + r[2] + '</span></li>').join('') +
      '</ul>';

    verdict.innerHTML = html;
  }

  update();
})();
