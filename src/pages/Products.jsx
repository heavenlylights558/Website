import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "./Products.css";

function Products() {
  return (
    <div className="products-page">
      <div className="container page-hero">
        <span className="eyebrow-plain">Our Collection</span>
        <h1>All Candles</h1>
        <p>
          Browse the full range of Heavenly Lights candles — each one
          hand-poured and finished in small batches.
        </p>
      </div>

      <div className="container">
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
