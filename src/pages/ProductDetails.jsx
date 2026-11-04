import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../components/Button";
import products from "../data/products";
import { productArt } from "../data/artwork";
import "../components/Artwork.css";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [selectedSize, setSelectedSize] = useState(
    product ? product.sizes[0] : null
  );

  if (!product) {
    return (
      <div className="container page-hero">
        <h1>Product not found</h1>
        <p>We couldn't find the candle you're looking for.</p>
        <Link to="/products" className="text-link">Back to all products</Link>
      </div>
    );
  }

  const { name, price, description, type, fragrance, sizes, features } = product;

  return (
    <div className="container product-details">
      <Link to="/products" className="product-details__back">← Back to products</Link>

      <div className="product-details__grid">
        <div className="product-details__image" aria-hidden="true">
          {productArt[id] ? (
            <img src={productArt[id]} alt="" className="product-details__art" />
          ) : (
            <svg viewBox="0 0 260 300" className="product-details__jar">
            <ellipse cx="130" cy="52" rx="16" ry="26" fill="var(--color-gold)" opacity="0.9" />
            <rect x="48" y="82" width="164" height="190" rx="20" fill="var(--color-cream-deep)" />
            <rect x="48" y="82" width="164" height="190" rx="20" fill="none" stroke="var(--color-brown)" strokeOpacity="0.2" />
            <rect x="76" y="118" width="108" height="12" rx="6" fill="var(--color-white)" opacity="0.7" />
            <rect x="76" y="142" width="70" height="8" rx="4" fill="var(--color-white)" opacity="0.5" />
          </svg>
          )}
        </div>

        <div className="product-details__info">
          <span className="product-details__type">{type}</span>
          <h1>{name}</h1>
          <p className="product-details__price">{price}</p>
          <p>{description}</p>

          <div className="product-details__row">
            <span className="product-details__label">Fragrance</span>
            <span>{fragrance}</span>
          </div>

          <div className="product-details__row product-details__row--sizes">
            <span className="product-details__label">Size</span>
            <div className="size-options">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`size-chip ${selectedSize === size ? "is-selected" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <ul className="product-details__features">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <Button>Add to Cart</Button>
          <p className="product-details__note">
            Cart and checkout are coming soon — this button is a placeholder for now.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
