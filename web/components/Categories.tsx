import type { ReactNode } from "react";
import { ArrowRightIcon, BackpackIcon, JacketIcon, MountIcon, ScopeIcon, WrenchIcon } from "./Icons";
import { categories, type Category } from "@/lib/content";

const iconMap: Record<Category["icon"], ReactNode> = {
  scope: <ScopeIcon />,
  mount: <MountIcon />,
  wrench: <WrenchIcon />,
  jacket: <JacketIcon />,
  backpack: <BackpackIcon />,
};

export function Categories() {
  return (
    <section className="section" id="kategorier">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Sortiment</span>
            <h2 className="section-title">Alt til riflen. Og resten af jagten.</h2>
            <p className="section-sub">
              Kikkerter og montager med mål, der kan sammenlignes. Tøj og udstyr, der
              holder til en dansk november.
            </p>
          </div>
          <a className="section-link" href="#produkter">
            Se alt udstyr
            <ArrowRightIcon />
          </a>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <a key={category.name} className="category-card" href="#produkter">
              <span className="cat-icon">{iconMap[category.icon]}</span>
              <span className="cat-arrow">
                <ArrowRightIcon />
              </span>
              <span>
                <span className="cat-name">{category.name}</span>
                <span className="cat-count">{category.count} varer</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
