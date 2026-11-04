import { flavours } from "../data/artwork";
import useInView from "../hooks/useInView";
import "./FragranceStrip.css";

function FragranceStrip() {
  const [ref, inView] = useInView(0.2);

  return (
    <section className="section fragrance-strip" ref={ref}>
      <div className="container">
        <div className="fragrance-strip__head">
          <h2>Our Signature Fragrances</h2>
          <p>Seven scents, each hand-blended to bring a different mood home.</p>
        </div>

        <ul className={`fragrance-grid ${inView ? "is-visible" : ""}`}>
          {flavours.map((flavour, index) => (
            <li
              className="fragrance-item"
              key={flavour.id}
              style={{ "--i": index }}
            >
              <div className="fragrance-item__art">
                <img
                  src={flavour.image}
                  alt={`${flavour.name} fragrance`}
                  loading="lazy"
                />
              </div>
              <h3>{flavour.name}</h3>
              <p>{flavour.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FragranceStrip;
