import { ArrowRightIcon, PinIcon } from "./Icons";
import { dealers } from "@/lib/content";

const pins = [
  { left: "63%", top: "18%", label: "Aalborg", active: false },
  { left: "58%", top: "60%", label: "Aarhus", active: true },
  { left: "22%", top: "42%", label: "Ringkøbing", active: false },
];

export function Dealers() {
  return (
    <section className="section dealer" id="forhandlere">
      <div className="wrap dealer-grid">
        <div className="dealer-copy">
          <span className="kicker">Forhandlere</span>
          <h2 className="section-title">Køb våben og ammunition lokalt.</h2>
          <p>
            Vi sælger ikke våben eller ammunition online. Vores forhandlere hjælper
            med tilladelser, registrering og den sidste montering — og du kan mærke
            udstyret, før du beslutter dig.
          </p>

          <ul className="dealer-list">
            {dealers.map((dealer) => (
              <li key={dealer.name}>
                <span>
                  <span className="dealer-name">{dealer.name}</span>
                  <span className="dealer-city">{dealer.city}, Danmark</span>
                </span>
                <span className="dealer-dist">{dealer.distance}</span>
              </li>
            ))}
          </ul>

          <a className="btn btn-dark" href="#nyhedsbrev">
            Find forhandler
            <ArrowRightIcon />
          </a>
        </div>

        <div className="dealer-map" role="img" aria-label="Kort med forhandlere i Jylland">
          {pins.map((pin) => (
            <span
              key={pin.label}
              className={`map-pin ${pin.active ? "active" : ""}`}
              style={{ left: pin.left, top: pin.top }}
            >
              <span className="map-dot" />
              <span className="map-label">{pin.label}</span>
            </span>
          ))}
          <span className="map-note">
            <PinIcon />
            3 forhandlere inden for 40 km
          </span>
        </div>
      </div>
    </section>
  );
}
