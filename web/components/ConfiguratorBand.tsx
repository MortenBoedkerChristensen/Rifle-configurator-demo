"use client";

import { useState } from "react";
import { ArrowRightIcon } from "./Icons";

const BASE_CLEARANCE = 7.6;
const HIGH_MOUNT_LIMIT = 32;

function formatMm(value: number) {
  return `${value.toFixed(1).replace(".", ",")} mm`;
}

export function ConfiguratorDemo() {
  const [ringHeight, setRingHeight] = useState(24);
  const clearance = ringHeight + BASE_CLEARANCE;
  const highMount = ringHeight > HIGH_MOUNT_LIMIT;

  // The little live diagram: barrel at y=72, scope bottom follows the clearance.
  const scopeBottom = Math.min(72 - clearance, 62);
  const scopeTop = scopeBottom - 16;

  return (
    <div className="demo-card" aria-label="Interaktiv eksempelvisning">
      <div className="demo-head">
        <span>Hald 30 mm · medium</span>
        <span className={`demo-status ${highMount ? "warn" : "ok"}`}>
          {highMount ? "Tjek kindstøtte" : "Kompatibel"}
        </span>
      </div>

      <div className="demo-body">
        <svg
          className="gap-viz"
          viewBox="0 0 300 88"
          role="img"
          aria-label={`Kikkert med ${formatMm(clearance)} frigang til løbet`}
        >
          <line className="gap-grid" x1="18" y1="72" x2="282" y2="72" />
          <rect className="gap-barrel" x="24" y="72" width="252" height="7" rx="3.5" />
          <rect
            className={`gap-scope ${highMount ? "warn" : ""}`}
            x="42"
            y={scopeTop}
            width="216"
            height="16"
            rx="8"
          />
          <rect className="gap-post" x="108" y={scopeBottom} width="9" height={72 - scopeBottom} />
          <rect className="gap-post" x="183" y={scopeBottom} width="9" height={72 - scopeBottom} />
          <line className="gap-dim" x1="268" y1={scopeBottom} x2="268" y2="72" />
          <line className="gap-dim" x1="264" y1={scopeBottom} x2="272" y2={scopeBottom} />
          <line className="gap-dim" x1="264" y1="72" x2="272" y2="72" />
          <text className="gap-text" x="274" y={(scopeBottom + 72) / 2 + 3}>
            {clearance.toFixed(1).replace(".", ",")}
          </text>
        </svg>

        <div className="demo-row">
          <label htmlFor="ring-height">Ringhøjde</label>
          <output htmlFor="ring-height">{ringHeight} mm</output>
        </div>
        <input
          id="ring-height"
          className="slider"
          type="range"
          min={14}
          max={40}
          step={1}
          value={ringHeight}
          onChange={(event) => setRingHeight(Number(event.target.value))}
        />
        <p className="demo-note">Træk i skyderen — tegning og tal følger med.</p>

        <div className="demo-metrics">
          <div className="demo-metric">
            <span>Frigang</span>
            <strong>{formatMm(clearance)}</strong>
          </div>
          <div className="demo-metric">
            <span>Øjenafstand</span>
            <strong>81 mm</strong>
          </div>
          <div className="demo-metric">
            <span>Rør</span>
            <strong>30 mm</strong>
          </div>
        </div>

        <p className="demo-callout" aria-live="polite">
          {highMount ? (
            <>
              <strong>Høj montage.</strong> Kindstøtten skal hæves, og øjenafstanden
              bliver sværere at ramme. Overvej medium ringe.
            </>
          ) : (
            <>
              <strong>Alt passer.</strong> Objektivet har {formatMm(clearance)} frigang
              til løbet, og øjenafstanden ligger i intervallet 75–85 mm.
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export function ConfiguratorBand() {
  return (
    <section className="band" id="konfigurator">
      <div className="wrap band-grid">
        <div>
          <span className="kicker">Konfigurator</span>
          <h2 className="section-title">Se det, før du køber det.</h2>
          <p className="section-sub">
            Vælg dele fra lageret, og konfiguratoren tegner opsætningen i målestok.
            Den tjekker rørdiameter, ringhøjde, objektivfrigang og øjenafstand — og
            advarer, når noget ikke passer.
          </p>

          <ul className="check-list">
            <li>
              <span className="tick">✓</span>
              <span>
                <strong>Rør og ringe matcher</strong>
                <small>30 mm, 34 mm eller 1" — uden gætværk.</small>
              </span>
            </li>
            <li>
              <span className="tick">✓</span>
              <span>
                <strong>Objektiv og løb har frigang</strong>
                <small>Målt på den faktiske geometri, ikke en tommelfingerregel.</small>
              </span>
            </li>
            <li>
              <span className="tick">✓</span>
              <span>
                <strong>Øjenafstanden er rigtig</strong>
                <small>Se hvordan kikkerten sidder, når du fører riflen til kinden.</small>
              </span>
            </li>
          </ul>

          <a className="btn btn-primary" href="/konfigurator">
            Åbn konfiguratoren
            <ArrowRightIcon />
          </a>
        </div>

        <ConfiguratorDemo />
      </div>
    </section>
  );
}
