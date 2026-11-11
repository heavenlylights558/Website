import { Link } from "react-router-dom";
import { labelImage } from "../data/artwork";
import { formatPrice } from "../data/products";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { id, name, type, description, sizes } = product;
  const startSize = sizes[0];
  const art = labelImage(id, startSize.grams);

  return (
    <article className="product-card">
      <Link to={`/products/${id}`} className="product-card__image" aria-label={`${name} candle`}>
        {art && (
          <img
            src={art}
            alt={`${name} candle label`}
            className="product-card__art"
            loading="lazy"
          />
        )}
      </Link>

      <div className="product-card__body">
        <span className="product-card__type">{type}</span>
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="product-card__sizes">
          {sizes.map((size) => `${size.grams}g`).join(" · ")}
        </p>
        <div className="product-card__footer">
          <span className="product-card__price">
            <small>From</small> {formatPrice(startSize.price)}
          </span>
          <Link to={`/products/${id}`} className="product-card__link">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
