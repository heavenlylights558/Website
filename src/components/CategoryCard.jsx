import { categoryArt } from "../data/artwork";
import "./CategoryCard.css";

function CategoryCard({ category }) {
  const { id, name, description } = category;
  const art = categoryArt[id];

  return (
    <article className="category-card">
      <div className="category-card__image" aria-hidden="true">
        {art ? (
          <img src={art} alt="" className="category-card__art" loading="lazy" />
        ) : (
          <svg viewBox="0 0 100 100" className="category-card__flame">
            <path
              d="M50 12c9 13 13.5 22.5 13.5 30.5a13.5 13.5 0 1 1-27 0C36.5 34.5 41 25 50 12Z"
              fill="var(--color-gold)"
            />
            <circle cx="50" cy="78" r="4" fill="var(--color-brown)" opacity="0.5" />
          </svg>
        )}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
}

export default CategoryCard;
