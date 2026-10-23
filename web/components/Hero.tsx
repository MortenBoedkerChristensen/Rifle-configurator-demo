import { ArrowRightIcon } from "./Icons";
import { BuildSchematic } from "./BuildSchematic";
import { TrustStrip } from "./TrustStrip";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Dansk jagtudstyr · monteret af jægere</span>
          <h1>
            Udstyr der passer. <em>Første gang.</em>
          </h1>
          <p className="lede">
            Vælg kikkert, montage og riffel i vores konfigurator. Du ser samlingen i
            1:1 målestok — og får svar på, om delene passer, før du køber.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#konfigurator">
              Byg din opsætning
              <ArrowRightIcon />
            </a>
            <a className="btn btn-ghost" href="#konfigurator">
              Sådan virker det
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>1:1</strong>
              <span>Målestok i preview</span>
            </div>
            <div className="stat">
              <strong>3.200+</strong>
              <span>Opsætninger bygget</span>
            </div>
            <div className="stat">
              <strong>4,9 / 5</strong>
              <span>på Trustpilot</span>
            </div>
          </div>
        </div>

        <aside className="build-card" aria-label="Eksempel på en kompatibel opsætning">
          <div className="build-head">
            <div>
              <p className="build-kicker">Eksempel · 1:1 preview</p>
              <p className="build-name">Nordlys V4 3–12×56</p>
              <p className="build-spec">30 mm rør · 56 mm objektiv · Hald medium montage</p>
            </div>
            <span className="compat">Kompatibel</span>
          </div>

          <div className="build-canvas">
            <span className="scale-tag">Målestok 1:1</span>
            <BuildSchematic />
            <div className="schematic-captions" aria-hidden="true">
              <span>
                <b>31,6 mm</b> frigang
              </span>
              <span>
                <b>81 mm</b> øjenafstand
              </span>
              <span>
                <b>⌀ 30 mm</b> rør
              </span>
            </div>
          </div>

          <div className="build-foot">
            <div className="build-includes">
              <span className="mini-chip">Northwind Ridgeback</span>
              <span className="mini-chip">Hald 30 mm</span>
              <span className="mini-chip">Nordlys V4</span>
            </div>
            <div className="price">
              <strong>12.890 kr.</strong>
              <span>Samlet pris · moms inkl.</span>
            </div>
          </div>
        </aside>
      </div>

      <TrustStrip />
    </section>
  );
}
