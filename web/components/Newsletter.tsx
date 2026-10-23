"use client";

import { useState } from "react";
import { ArrowRightIcon } from "./Icons";

export function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <section className="newsletter" id="nyhedsbrev">
      <div className="wrap">
        <div className="newsletter-card">
          <div className="newsletter-copy">
            <h2>Jagtkalenderen og nye guides — én mail om måneden.</h2>
            <p>
              Sæsonstart, lovændringer og de nye dele, der er værd at kende. Ingen
              tilbudsspam, ingen daglige påmindelser.
            </p>
          </div>

          <div>
            {sent ? (
              <p className="newsletter-success" role="status">
                Tak! Vi har sendt en bekræftelse til din indbakke.
              </p>
            ) : (
              <form
                className="newsletter-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <div className="newsletter-field">
                  <label className="sr-only" htmlFor="newsletter-email">
                    E-mailadresse
                  </label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="din@mail.dk"
                    required
                  />
                  <button className="btn btn-primary" type="submit">
                    Tilmeld
                    <ArrowRightIcon />
                  </button>
                </div>
                <p className="newsletter-note">
                  Ved at tilmelde dig accepterer du vores privatlivspolitik. Afmeld
                  med ét klik.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
