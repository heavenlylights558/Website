import { Link } from "react-router-dom";
import { GelCandle } from "./CandleScene";
import { sizeTiers, formatPrice } from "../data/products";
import useInView from "../hooks/useInView";
import "./SizeCompare.css";

// Same drawing scale for every candle, so the real size difference is visible.
const looks = {
  100: { color: "red", w: 54, h: 82, flame: 0.7 },
  150: { color: "amber", w: 64, h: 108, flame: 0.82 },
  250: { color: "blue", w: 76, h: 142, flame: 0.95 },
};

const maxHours = Math.max(...sizeTiers.map((tier) => tier.hours));

function SizeCompare({ heading = false, cta = false }) {
  const [ref, inView] = useInView(0.2);

  return (
    <div className={`size-compare ${inView ? "is-visible" : ""}`} ref={ref}>
      {heading && (
        <div className="size-compare__head">
          <h2>Choose Your Size</h2>
          <p>Every fragrance comes in three sizes — the bigger the candle, the longer it burns.</p>
        </div>
      )}

      <div className="size-compare__grid">
        {sizeTiers.map((tier) => (
          <div className="size-compare__item" key={tier.grams}>
            {tier.grams === 250 && <span className="size-compare__tag">Best value</span>}
            <div className="size-compare__art">
              <GelCandle {...looks[tier.grams]} />
            </div>
            <h3>{tier.grams}g</h3>
            <p className="size-compare__hours">Burns up to {tier.hours} hours</p>
            <div className="size-compare__bar" aria-hidden="true">
              <span style={{ "--fill": tier.hours / maxHours }} />
            </div>
            <p className="size-compare__price">{formatPrice(tier.price)}</p>
          </div>
        ))}
      </div>

      {cta && (
        <p className="size-compare__cta">
          <Link to="/catalog" className="text-link">See the full catalogue</Link>
        </p>
      )}
    </div>
  );
}

export default SizeCompare;
