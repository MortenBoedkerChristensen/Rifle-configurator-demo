import { LogoMark } from "./Icons";
import { footerColumns } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="logo" href="#top" aria-label="SIGTE — til forsiden">
              <span className="logo-mark">
                <LogoMark />
              </span>
              <span className="logo-text">
                <span className="logo-name">SIGTE</span>
                <span className="logo-sub">Jagt &amp; optik</span>
              </span>
            </a>
            <p>
              Dansk jagtudstyr med mål, der kan sammenlignes. Bygget af jægere for
              jægere — siden 2014.
            </p>
            <div className="footer-contact">
              <a href="mailto:hej@sigte.dk">hej@sigte.dk</a>
              <a href="tel:+4570123456">+45 70 12 34 56</a>
              <span>Man–fre 9–17 · Lørdag 10–14</span>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="footer-col">
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2026 SIGTE ApS · CVR 12 34 56 78 · Priser inkl. 25 % moms</span>
          <ul className="pay-list" aria-label="Betalingsmuligheder">
            <li>MobilePay</li>
            <li>Visa</li>
            <li>Mastercard</li>
            <li>Apple Pay</li>
          </ul>
        </div>

        <p className="legal-note">
          SIGTE sælger ikke våben, ammunition eller lyddæmpere online. Våben og
          ammunition formidles gennem autoriserede forhandlere efter dansk lovgivning.
          Køb af optik og tilbehør er ikke tilladelsespligtigt. Alle priser er i DKK
          inkl. 25 % moms.
        </p>
      </div>
    </footer>
  );
}
