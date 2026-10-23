import { ArrowRightIcon } from "@/components/Icons";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  title: "Konfigurator — SIGTE",
};

export default function KonfiguratorPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="section">
        <div className="wrap">
          <span className="kicker">Konfigurator</span>
          <h1 className="section-title">Her lander den rigtige konfigurator.</h1>
          <p className="section-sub">
            Denne side er en pladsholder i skitsen. I den færdige version åbner
            konfiguratoren her med riffel, montage og kikkert side om side — samme
            geometri som i <code>hunter-configurator/</code>.
          </p>
          <div style={{ marginTop: 22 }}>
            <a className="btn btn-dark" href="/">
              Tilbage til forsiden
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
