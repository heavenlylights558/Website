import { useId } from "react";
import "./CandleScene.css";

// Reusable animated candle illustrations.
//   <CandleCluster />  - a group of five lit candles on a gold tray
//   <SingleCandle />   - one lit jar candle
// Each flame flickers on its own timing; smoke and glow are animated in CandleScene.css.

function Defs({ id }) {
  return (
    <defs>
      <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffe9a8" stopOpacity="0.85" />
        <stop offset="45%" stopColor="#f3b84a" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#f3b84a" stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`${id}-wax`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f7d98a" />
        <stop offset="100%" stopColor="#e0a43a" />
      </linearGradient>
      <linearGradient id={`${id}-ivory`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#efe2c4" />
        <stop offset="45%" stopColor="#fffaf0" />
        <stop offset="100%" stopColor="#e6d5b0" />
      </linearGradient>
      <linearGradient id={`${id}-navy`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#1f2e4d" />
        <stop offset="45%" stopColor="#35497a" />
        <stop offset="100%" stopColor="#1a2640" />
      </linearGradient>
      <linearGradient id={`${id}-amber`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#d9962b" />
        <stop offset="45%" stopColor="#f6c35c" />
        <stop offset="100%" stopColor="#c98a1f" />
      </linearGradient>
      <linearGradient id={`${id}-tray`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f3dd9a" />
        <stop offset="100%" stopColor="#b8932f" />
      </linearGradient>
      <linearGradient id={`${id}-flame`} x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#ff9f1c" />
        <stop offset="55%" stopColor="#ffd86b" />
        <stop offset="100%" stopColor="#fff6c8" />
      </linearGradient>
    </defs>
  );
}

// One flame, drawn around its own base point so it can be scaled per candle.
function Flame({ id, cx, base, scale = 1, delay = "0s", duration = "1.9s" }) {
  return (
    <g transform={`translate(${cx} ${base}) scale(${scale})`}>
      <g className="fc-flame" style={{ animationDelay: delay, animationDuration: duration }}>
        <path d="M0 -52 C13 -34 17 -19 0 2 C-17 -19 -13 -34 0 -52 Z" fill={`url(#${id}-flame)`} />
        <path
          className="fc-flame__core"
          d="M0 -26 C7 -16 7 -7 0 -1 C-7 -7 -7 -16 0 -26 Z"
          fill="#fffbe6"
          opacity="0.92"
        />
      </g>
    </g>
  );
}

function Glow({ id, cx, cy, r, delay = "0s" }) {
  return (
    <circle
      className="fc-glow"
      cx={cx}
      cy={cy}
      r={r}
      fill={`url(#${id}-glow)`}
      style={{ animationDelay: delay }}
    />
  );
}

function Smoke({ cx, tip, delay = "0s" }) {
  return (
    <g
      transform={`translate(${cx} ${tip})`}
      className="fc-smoke"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path style={{ animationDelay: delay }} d="M0 -4 C-8 -14 10 -22 0 -32 C-8 -42 8 -48 0 -56" />
    </g>
  );
}

export function CandleCluster({ className = "" }) {
  const id = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 300 250"
      className={`candle-scene ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <Defs id={id} />

      {/* Glows sit behind everything */}
      <Glow id={id} cx={150} cy={88} r={66} />
      <Glow id={id} cx={92} cy={58} r={52} delay="0.7s" />
      <Glow id={id} cx={210} cy={84} r={50} delay="1.4s" />
      <Glow id={id} cx={40} cy={132} r={36} delay="0.4s" />
      <Glow id={id} cx={262} cy={140} r={34} delay="1.1s" />

      <Smoke cx={150} tip={60} />
      <Smoke cx={92} tip={36} delay="1.8s" />
      <Smoke cx={210} tip={66} delay="3.2s" />

      {/* Shadow + gold tray */}
      <ellipse cx="150" cy="241" rx="138" ry="6" fill="#000000" opacity="0.18" />
      <rect x="8" y="224" width="284" height="10" rx="5" fill={`url(#${id}-tray)`} />
      <rect x="14" y="225" width="272" height="2" rx="1" fill="#ffffff" opacity="0.35" />

      {/* Left votive */}
      <rect x="20" y="166" width="40" height="60" rx="9" fill={`url(#${id}-ivory)`} />
      <rect x="20" y="192" width="40" height="5" fill="#c6a03c" opacity="0.85" />
      <ellipse cx="40" cy="167" rx="20" ry="4" fill="#fff6dc" />
      <line x1="40" y1="167" x2="40" y2="155" stroke="#2b2622" strokeWidth="2.2" strokeLinecap="round" />
      <Flame id={id} cx={40} base={156} scale={0.6} delay="0.3s" duration="1.6s" />

      {/* Tall ivory pillar with drips */}
      <rect x="75" y="100" width="34" height="126" rx="8" fill={`url(#${id}-ivory)`} />
      <rect x="77" y="100" width="7" height="30" rx="3.5" fill="#fffaf0" />
      <rect x="99" y="100" width="7" height="18" rx="3.5" fill="#fffaf0" />
      <rect x="75" y="168" width="34" height="5" fill="#c6a03c" opacity="0.85" />
      <ellipse cx="92" cy="101" rx="17" ry="4" fill="#fff6dc" />
      <line x1="92" y1="101" x2="92" y2="89" stroke="#2b2622" strokeWidth="2.2" strokeLinecap="round" />
      <Flame id={id} cx={92} base={90} scale={0.9} delay="0.9s" duration="2.1s" />

      {/* Centre jar candle (matches the logo) */}
      <rect x="112" y="118" width="76" height="108" rx="16" fill="#1f2e4d" />
      <rect x="119" y="125" width="62" height="94" rx="10" fill={`url(#${id}-wax)`} />
      <ellipse cx="150" cy="128" rx="31" ry="5.5" fill="#fbe7a8" />
      <rect x="147" y="152" width="6" height="40" rx="2" fill="#fff8e6" />
      <rect x="137" y="162" width="26" height="6" rx="2" fill="#fff8e6" />
      <path d="M117 122 h66" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
      <line x1="150" y1="128" x2="150" y2="114" stroke="#2b2622" strokeWidth="2.5" strokeLinecap="round" />
      <Flame id={id} cx={150} base={115} scale={1} delay="0s" duration="1.9s" />

      {/* Navy pillar with gold bands */}
      <rect x="191" y="130" width="38" height="96" rx="8" fill={`url(#${id}-navy)`} />
      <rect x="191" y="152" width="38" height="4" fill="#c6a03c" />
      <rect x="191" y="198" width="38" height="4" fill="#c6a03c" />
      <ellipse cx="210" cy="131" rx="19" ry="4" fill="#4a608f" />
      <line x1="210" y1="131" x2="210" y2="119" stroke="#2b2622" strokeWidth="2.2" strokeLinecap="round" />
      <Flame id={id} cx={210} base={120} scale={0.85} delay="1.3s" duration="1.8s" />

      {/* Right votive */}
      <rect x="242" y="172" width="40" height="54" rx="9" fill={`url(#${id}-amber)`} />
      <ellipse cx="262" cy="173" rx="20" ry="4" fill="#ffe3a0" />
      <line x1="262" y1="173" x2="262" y2="162" stroke="#2b2622" strokeWidth="2.2" strokeLinecap="round" />
      <Flame id={id} cx={262} base={163} scale={0.55} delay="0.6s" duration="1.5s" />
    </svg>
  );
}

export function SingleCandle({ className = "" }) {
  const id = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 160 240"
      className={`candle-scene candle-scene--single ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <Defs id={id} />
      <Glow id={id} cx={80} cy={92} r={70} />
      <Smoke cx={80} tip={58} />

      <ellipse cx="80" cy="230" rx="52" ry="6" fill="#000000" opacity="0.18" />
      <rect x="38" y="118" width="84" height="108" rx="16" fill="#1f2e4d" />
      <rect x="45" y="125" width="70" height="94" rx="11" fill={`url(#${id}-wax)`} />
      <ellipse cx="80" cy="128" rx="35" ry="6" fill="#fbe7a8" />
      <rect x="77" y="152" width="6" height="42" rx="2" fill="#fff8e6" />
      <rect x="66" y="162" width="28" height="6" rx="2" fill="#fff8e6" />
      <path d="M44 122 h72" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" />
      <line x1="80" y1="128" x2="80" y2="113" stroke="#2b2622" strokeWidth="2.5" strokeLinecap="round" />
      <Flame id={id} cx={80} base={115} scale={1.05} />
    </svg>
  );
}

export default CandleCluster;
