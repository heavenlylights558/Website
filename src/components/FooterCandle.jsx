import { flavours } from "../data/artwork";
import { CandleCluster } from "./CandleScene";
import "./FooterCandle.css";

// Fragrance icons that drift up from the candles, like scent wafting from lit wicks.
const waftOrder = [
  { id: "rose", x: "-70px", sway: "16px", delay: "0s", duration: "8s", size: 38, rot: "-16deg" },
  { id: "jasmine", x: "58px", sway: "14px", delay: "1.6s", duration: "9s", size: 36, rot: "14deg" },
  { id: "lavender", x: "-14px", sway: "18px", delay: "3.2s", duration: "8.5s", size: 40, rot: "-10deg" },
  { id: "lemon", x: "96px", sway: "12px", delay: "4.8s", duration: "9.5s", size: 34, rot: "18deg" },
  { id: "vanilla", x: "-104px", sway: "15px", delay: "6.2s", duration: "8.8s", size: 38, rot: "-20deg" },
  { id: "apple", x: "28px", sway: "13px", delay: "7.4s", duration: "9.2s", size: 32, rot: "12deg" },
];

function FooterCandle() {
  const wafts = waftOrder
    .map((item) => ({ ...item, flavour: flavours.find((f) => f.id === item.id) }))
    .filter((item) => item.flavour);

  return (
    <div className="footer-candle" aria-hidden="true">
      {wafts.map((item) => (
        <img
          key={item.id}
          src={item.flavour.image}
          alt=""
          className="footer-candle__waft"
          style={{
            "--x": item.x,
            "--sway": item.sway,
            "--delay": item.delay,
            "--duration": item.duration,
            "--size": `${item.size}px`,
            "--rot": item.rot,
          }}
        />
      ))}

      <CandleCluster className="footer-candle__svg" />
    </div>
  );
}

export default FooterCandle;
