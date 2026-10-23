import { ArrowRightIcon, BagIcon, LogoMark, SearchIcon, UserIcon } from "./Icons";
import { navLinks } from "@/lib/content";

export function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <p>
            <span aria-hidden>✦</span>
            Fri fragt over <strong>999 kr.</strong> · Levering 1–2 hverdage med PostNord
          </p>
          <nav className="topbar-links" aria-label="Service">
            <a href="#forhandlere">Find forhandler</a>
            <a href="#nyhedsbrev">Kundeservice</a>
            <a href="#nyhedsbrev">DA · DKK</a>
          </nav>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap header-inner">
          <a className="logo" href="#top" aria-label="SIGTE — til forsiden">
            <span className="logo-mark">
              <LogoMark />
            </span>
            <span className="logo-text">
              <span className="logo-name">SIGTE</span>
              <span className="logo-sub">Jagt &amp; optik</span>
            </span>
          </a>

          <nav className="main-nav" aria-label="Hovedmenu">
            {navLinks.map((link) => (
              <a key={link.label} className="nav-link" href={link.href}>
                {link.label}
              </a>
            ))}
            <a className="nav-cta" href="#konfigurator">
              Konfigurator
              <ArrowRightIcon />
            </a>
          </nav>

          <details className="mobile-menu">
            <summary>Menu</summary>
            <div className="mobile-menu-panel">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
              <a href="#konfigurator">
                <strong>Konfigurator</strong>
              </a>
              <a href="#nyhedsbrev">Min konto</a>
            </div>
          </details>

          <div className="header-actions">
            <button className="icon-btn" type="button" aria-label="Søg">
              <SearchIcon />
            </button>
            <button className="icon-btn" type="button" aria-label="Min konto">
              <UserIcon />
            </button>
            <button className="icon-btn" type="button" aria-label="Kurv, 2 varer">
              <BagIcon />
              <span className="cart-count">2</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
