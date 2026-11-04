import { Link } from "react-router-dom";
import { productArt } from "../data/artwork";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { id, name, type, description, price } = product;
  const art = productArt[id];

  return (
    <article className="product-card">
      <div className="product-card__image" aria-hidden="true">
        {art ? (
          <img src={art} alt="" className="product-card__art" loading="lazy" />
        ) : (
          <svg viewBox="0 0 120 140" className="product-card__jar">
            <ellipse cx="60" cy="34" rx="10" ry="16" fill="var(--color-gold)" opacity="0.8" />
            <rect x="24" y="46" width="72" height="82" rx="14" fill="var(--color-cream-deep)" />
            <rect x="24" y="46" width="72" height="82" rx="14" fill="none" stroke="var(--color-brown)" strokeOpacity="0.25" />
            <rect x="36" y="60" width="48" height="6" rx="3" fill="var(--color-white)" opacity="0.6" />
          </svg>
        )}
      </div>

      <div className="product-card__body">
        <span className="product-card__type">{type}</span>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">{price}</span>
          <Link to={`/products/${id}`} className="product-card__link">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
