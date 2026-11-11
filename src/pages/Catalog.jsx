import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import products, { sizeTiers, formatPrice } from "../data/products";
import { flavours, labelImage } from "../data/artwork";
import "./Catalog.css";

// The apple product uses the "apple" icon from the fragrance set.
const iconFor = (productId) => {
  const key = productId === "spiced-apple" ? "apple" : productId;
  return flavours.find((flavour) => flavour.id === key)?.image;
};

function Catalog() {
  const [grams, setGrams] = useState(sizeTiers[0].grams);
  const tier = sizeTiers.find((item) => item.grams === grams) || sizeTiers[0];

  return (
    <div className="catalog-page">
      <div className="container page-hero">
        <span className="eyebrow-plain">Full Range</span>
        <h1>Candle Catalogue</h1>
        <p>
          All {products.length} fragrances at a glance — every size with its
          weight, burn time and price.
        </p>
      </div>

      {/* Sizes at a glance */}
      <section className="container catalog-sizes" aria-label="Sizes and prices">
        {sizeTiers.map((item) => (
          <div className="catalog-size" key={item.grams}>
            {item.grams === 250 && <span className="catalog-size__tag">Best value</span>}
            <span className="catalog-size__weight">{item.grams}g</span>
            <dl>
              <div>
                <dt>Burn time</dt>
                <dd>{item.hours} hours</dd>
              </div>
              <div>
                <dt>MRP</dt>
                <dd>{formatPrice(item.price)}</dd>
              </div>
            </dl>
          </div>
        ))}
      </section>

      {/* All fragrances, switchable by size */}
      <section className="container catalog-fragrances">
        <div className="catalog-toolbar">
          <h2>Our {products.length} Fragrances</h2>
          <div className="catalog-toggle" role="group" aria-label="Choose a size">
            {sizeTiers.map((item) => (
              <button
                key={item.grams}
                type="button"
                className={`catalog-toggle__btn ${grams === item.grams ? "is-active" : ""}`}
                onClick={() => setGrams(item.grams)}
                aria-pressed={grams === item.grams}
              >
                {item.grams}g
              </button>
            ))}
          </div>
        </div>

        <div className="catalog-grid">
          {products.map((product) => (
            <article className="catalog-card" key={product.id}>
              <Link to={`/products/${product.id}`} className="catalog-card__image">
                <img
                  src={labelImage(product.id, tier.grams)}
                  alt={`${product.name} candle, ${tier.grams}g`}
                  loading="lazy"
                />
              </Link>
              <div className="catalog-card__body">
                <h3>{product.name}</h3>
                <p>{product.fragrance}</p>
                <dl className="catalog-card__facts">
                  <div>
                    <dt>Weight</dt>
                    <dd>{tier.grams}g</dd>
                  </div>
                  <div>
                    <dt>Burn time</dt>
                    <dd>{tier.hours} hrs</dd>
                  </div>
                  <div>
                    <dt>MRP</dt>
                    <dd>{formatPrice(tier.price)}</dd>
                  </div>
                </dl>
                <Link to={`/products/${product.id}`} className="catalog-card__link">
                  View details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Complete price list */}
      <section className="container catalog-table-section">
        <h2>Complete Price List</h2>
        <div className="catalog-table-wrap">
          <table className="catalog-table">
            <thead>
              <tr>
                <th scope="col">Fragrance</th>
                {sizeTiers.map((item) => (
                  <th scope="col" key={item.grams}>
                    {item.grams}g
                    <span>{item.hours} hrs burn</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">
                    <Link to={`/products/${product.id}`}>
                      <img src={iconFor(product.id)} alt="" />
                      {product.name}
                    </Link>
                  </th>
                  {sizeTiers.map((item) => (
                    <td key={item.grams}>
                      <strong>{formatPrice(item.price)}</strong>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="catalog-note">
          Prices shown are MRP per candle. The same three sizes are available
          in every fragrance.
        </p>
      </section>

      <section className="container catalog-cta">
        <h2>Ready to order?</h2>
        <p>Tell us the fragrance and size you'd like and we'll take it from there.</p>
        <Button to="/contact">Contact Us</Button>
      </section>
    </div>
  );
}

export default Catalog;
