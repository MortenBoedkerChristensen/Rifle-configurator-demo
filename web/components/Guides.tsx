import { ArrowRightIcon } from "./Icons";
import { guides } from "@/lib/content";

export function Guides() {
  return (
    <section className="section" id="guides">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Viden</span>
            <h2 className="section-title">Bliv klogere, før du skruer.</h2>
            <p className="section-sub">
              Korte, konkrete guides skrevet af folk, der selv bruger udstyret i
              skoven — ikke af en indkøbsafdeling.
            </p>
          </div>
          <a className="section-link" href="#nyhedsbrev">
            Alle guides
            <ArrowRightIcon />
          </a>
        </div>

        <div className="guide-grid">
          {guides.map((guide) => (
            <a key={guide.title} className="guide-card" href="#nyhedsbrev">
              <div
                className={`guide-art ${guide.art === "b" ? "alt" : ""} ${
                  guide.art === "c" ? "alt2" : ""
                }`}
              >
                <span className="guide-num">{guide.num}</span>
                <span className="guide-topic">{guide.topic}</span>
              </div>
              <div className="guide-body">
                <h3 className="guide-title">{guide.title}</h3>
                <p className="guide-meta">
                  <span>{guide.minutes} min. læsning</span>
                  <span className="dot" aria-hidden />
                  <span>Af jagtredaktionen</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
