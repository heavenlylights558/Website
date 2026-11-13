import CategoryCard from "../components/CategoryCard";
import categories from "../data/categories";
import { CandleCluster, SingleCandle } from "../components/CandleScene";
import "./Categories.css";

function Categories() {
  return (
    <div className="categories-page">
      <div className="container page-hero page-hero--candles">
        <div className="page-hero__candles" aria-hidden="true">
          <CandleCluster />
        </div>
        <span className="eyebrow-plain">Find Your Kind</span>
        <h1>Candle Categories</h1>
        <p>
          Every candle we make fits into one of these categories — browse
          by the kind of candle you're looking for.
        </p>
      </div>

      <div className="container">
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
