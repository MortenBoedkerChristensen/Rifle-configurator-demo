import { ArrowRightIcon, PlusIcon } from "./Icons";
import { ProductArt } from "./ProductArt";
import { products } from "@/lib/content";

export function Products() {
  return (
    <section className="section section-alt" id="produkter">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="kicker">Populært lige nu</span>
            <h2 className="section-title">De dele, jægere kommer tilbage efter.</h2>
            <p className="section-sub">
              Alle mål er opgivet, som producenten opgiver dem — så de kan bruges i
              konfiguratoren.
            </p>
          </div>
          <a className="section-link" href="#kategorier">
            Se hele sortimentet
            <ArrowRightIcon />
          </a>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.name} className="product-card">
              <a className="product-media" href="/konfigurator" aria-label={`Se ${product.name}`}>
                {product.tag ? (
                  <span className={`product-tag ${product.tagTone === "brass" ? "brass" : ""}`}>
                    {product.tag}
                  </span>
                ) : null}
                <ProductArt art={product.art} />
              </a>

              <div className="product-body">
                <span className="product-brand">{product.brand}</span>
                <h3 className="product-name">
                  <a href="/konfigurator">{product.name}</a>
                </h3>
                <div className="product-chips">
                  {product.chips.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="product-foot">
                  <div className="product-price">
                    <strong>{product.price}</strong>
                    <span>Moms inkl.</span>
                  </div>
                  <button
                    className="product-add"
                    type="button"
                    aria-label={`Læg ${product.name} i kurven`}
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
