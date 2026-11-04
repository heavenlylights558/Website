import { flavours } from "../data/artwork";
import "./FragranceRibbon.css";

// The list is repeated 4 times so the scrolling loop never shows a gap, even on wide screens.
const copies = [0, 1, 2, 3];

function FragranceRibbon() {
  return (
    <div className="fragrance-ribbon" aria-label="Our fragrances">
      <div className="fragrance-ribbon__track">
        {copies.map((copy) =>
          flavours.map((flavour, index) => (
            <span
              className="fragrance-ribbon__item"
              key={`${copy}-${flavour.id}`}
              style={{ "--i": index }}
              aria-hidden={copy > 0 ? "true" : undefined}
            >
              <img src={flavour.image} alt="" />
              <span>{flavour.name}</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export default FragranceRibbon;
