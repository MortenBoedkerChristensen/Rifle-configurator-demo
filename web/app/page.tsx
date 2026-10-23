import { Categories } from "@/components/Categories";
import { ConfiguratorBand } from "@/components/ConfiguratorBand";
import { Dealers } from "@/components/Dealers";
import { Guides } from "@/components/Guides";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { Products } from "@/components/Products";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Gå til indhold
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Categories />
        <ConfiguratorBand />
        <Products />
        <Guides />
        <Dealers />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
