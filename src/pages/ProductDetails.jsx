import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../components/Button";
import products, { formatPrice } from "../data/products";
import { labelImage } from "../data/artwork";
import "../components/Artwork.css";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [selectedGrams, setSelectedGrams] = useState(
    product ? product.sizes[0].grams : null
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

  const { name, description, type, fragrance, sizes, features } = product;
  const selected =
    sizes.find((size) => size.grams === selectedGrams) || sizes[0];
  const art = labelImage(id, selected.grams);

  return (
    <div className="container product-details">
      <Link to="/products" className="product-details__back">← Back to products</Link>

      <div className="product-details__grid">
        <div className="product-details__image">
          {art && (
            <img
              src={art}
              alt={`${name} candle, ${selected.grams}g`}
              className="product-details__art"
            />
          )}
        </div>

        <div className="product-details__info">
          <span className="product-details__type">{type}</span>
          <h1>{name}</h1>
          <p className="product-details__price">{formatPrice(selected.price)}</p>
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
                  key={size.grams}
                  type="button"
                  className={`size-chip ${selected.grams === size.grams ? "is-selected" : ""}`}
                  onClick={() => setSelectedGrams(size.grams)}
                >
                  {size.grams}g · {formatPrice(size.price)}
                </button>
              ))}
            </div>
          </div>

          <div className="product-details__facts">
            <div className="product-details__fact">
              <span>Net weight</span>
              <strong>{selected.grams}g</strong>
            </div>
            <div className="product-details__fact">
              <span>Burn time</span>
              <strong>{selected.hours} hours</strong>
            </div>
            <div className="product-details__fact">
              <span>MRP</span>
              <strong>{formatPrice(selected.price)}</strong>
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
