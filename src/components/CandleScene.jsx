import { useId } from "react";
import "./CandleScene.css";

// Animated gel wax candle illustrations (clear glass tumblers filled with coloured gel,
// like the Heavenly Lights gel candles).
//   <CandleCluster />  - a group of five lit gel candles on a gold tray
//   <SingleCandle />   - one large lit gel candle
//   <GelCandle />      - one gel candle of any size (used for the size comparison)
// Flames flicker, bubbles rise through the gel and smoke curls up (see CandleScene.css).

const GEL = {
  blue: ["#3d7dff", "#0a3aa6"],
  red: ["#f25a3c", "#a31212"],
  amber: ["#fcd45a", "#dc9a17"],
};

function Defs({ id }) {
  return (
    <defs>
      <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffe9a8" stopOpacity="0.85" />
        <stop offset="45%" stopColor="#f3b84a" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#f3b84a" stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`${id}-tray`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f3dd9a" />
        <stop offset="100%" stopColor="#b8932f" />
      </linearGradient>
      <linearGradient id={`${id}-flame`} x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#ff9f1c" />
        <stop offset="55%" stopColor="#ffd86b" />
        <stop offset="100%" stopColor="#fff6c8" />
      </linearGradient>
      {Object.entries(GEL).map(([name, [top, bottom]]) => (
        <linearGradient key={name} id={`${id}-gel-${name}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={top} />
          <stop offset="100%" stopColor={bottom} />
        </linearGradient>
      ))}
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

// Fixed little bubbles inside the gel (as fractions of the gel area).
const STATIC_BUBBLES = [
  [0.18, 0.22, 1.5], [0.72, 0.16, 1.2], [0.30, 0.46, 1.8], [0.80, 0.40, 1.4],
  [0.22, 0.70, 1.3], [0.66, 0.62, 1.9], [0.84, 0.82, 1.2], [0.40, 0.88, 1.5],
];

// A clear glass tumbler filled with gel, a wick column, a label and a flame.
function GelGlass({ id, cx, base, w, h, color, flame = 0.8, delay = "0s", label = false }) {
  const x = cx - w / 2;
  const top = base - h;
  const gelTop = top + 12;
  const gelX = x + 2.5;
  const gelW = w - 5;
  const gelH = base - 7 - gelTop;
  const labelH = 24;
  const labelY = gelTop + (gelH - labelH) / 2 + 3;

  return (
    <g>
      {/* glass + gel */}
      <rect x={x} y={top} width={w} height={h} rx="6" fill="#ffffff" fillOpacity="0.1" />
      <rect x={gelX} y={gelTop} width={gelW} height={gelH} rx="3" fill={`url(#${id}-gel-${color})`} />
      <ellipse cx={cx} cy={gelTop} rx={gelW / 2} ry="3.2" fill="#ffffff" fillOpacity="0.28" />
      <rect x={gelX} y={base - 10} width={gelW} height="7" rx="3" fill="#ffffff" fillOpacity="0.3" />

      {/* wick column */}
      <rect x={cx - 1.8} y={gelTop} width="3.6" height={base - 10 - gelTop} fill="#ffffff" fillOpacity="0.4" />

      {/* bubbles */}
      {STATIC_BUBBLES.map(([fx, fy, r], index) => (
        <circle
          key={index}
          cx={gelX + fx * gelW}
          cy={gelTop + fy * gelH}
          r={r}
          fill="#ffffff"
          fillOpacity="0.35"
        />
      ))}
      {[0.25, 0.6, 0.8].map((fx, index) => (
        <circle
          key={`rise-${index}`}
          className="gel-bubble"
          cx={gelX + fx * gelW}
          cy={base - 14}
          r="1.7"
          fill="#ffffff"
          style={{ "--rise": `${gelH * 0.7}px`, animationDelay: `${index * 1.7}s` }}
        />
      ))}

      {/* label */}
      {label && (
        <g>
          <rect x={cx - 15} y={labelY} width="30" height={labelH} rx="1.5" fill="#fbf1dc" stroke="#d8c08a" strokeWidth="0.6" />
          <path d={`M${cx} ${labelY + 3.5} c2 2.6 3 4 3 5.4 a3 3 0 1 1 -6 0 c0 -1.4 1 -2.8 3 -5.4 Z`} fill="#c6a03c" />
          <text x={cx} y={labelY + 16.5} textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontStyle="italic" fontSize="6.4" fill="#1f2e4d">
            Heavenly
          </text>
          <text x={cx} y={labelY + 21.5} textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontSize="4.8" fill="#1f2e4d">
            Lights
          </text>
        </g>
      )}

      {/* glass outline + highlight on top */}
      <rect x={x} y={top} width={w} height={h} rx="6" fill="none" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="1.4" />
      <rect x={x + 5} y={gelTop + 4} width="3.5" height={gelH - 10} rx="1.75" fill="#ffffff" fillOpacity="0.3" />

      {/* wick + flame */}
      <line x1={cx} y1={gelTop} x2={cx} y2={gelTop - 6} stroke="#2b2622" strokeWidth="2" strokeLinecap="round" />
      <Flame id={id} cx={cx} base={gelTop - 4} scale={flame} delay={delay} duration={`${1.5 + flame}s`} />
    </g>
  );
}

const glowFor = (id, cx, base, h, flame, delay) => (
  <Glow id={id} cx={cx} cy={base - h + 8 - 24 * flame} r={26 + 34 * flame} delay={delay} />
);

export function CandleCluster({ className = "" }) {
  const id = useId().replace(/:/g, "");

  // [cx, width, height, colour, flame scale, delay, label]
  const glasses = [
    [92, 56, 118, "blue", 0.85, "0.9s", true],
    [218, 56, 108, "amber", 0.82, "1.3s", true],
    [36, 46, 62, "amber", 0.55, "0.3s", false],
    [156, 60, 86, "red", 0.8, "0s", true],
    [270, 44, 66, "blue", 0.55, "0.6s", false],
  ];

  return (
    <svg
      viewBox="0 0 300 250"
      className={`candle-scene ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <Defs id={id} />

      {glasses.map(([cx, w, h, , flame, delay], index) => (
        <g key={`glow-${index}`}>{glowFor(id, cx, 224, h, flame, delay)}</g>
      ))}

      <Smoke cx={92} tip={64} delay="0s" />
      <Smoke cx={218} tip={60} delay="2.2s" />
      <Smoke cx={156} tip={86} delay="3.4s" />

      {/* Shadow + gold tray */}
      <ellipse cx="150" cy="241" rx="138" ry="6" fill="#000000" opacity="0.18" />
      <rect x="8" y="224" width="284" height="10" rx="5" fill={`url(#${id}-tray)`} />
      <rect x="14" y="225" width="272" height="2" rx="1" fill="#ffffff" opacity="0.35" />

      {glasses.map(([cx, w, h, color, flame, delay, label], index) => (
        <GelGlass
          key={index}
          id={id}
          cx={cx}
          base={224}
          w={w}
          h={h}
          color={color}
          flame={flame}
          delay={delay}
          label={label}
        />
      ))}
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
      <Glow id={id} cx={80} cy={86} r={74} />
      <Smoke cx={80} tip={56} />
      <ellipse cx="80" cy="232" rx="56" ry="6" fill="#000000" opacity="0.18" />
      <GelGlass id={id} cx={80} base={228} w={88} h={128} color="amber" flame={1.05} label />
    </svg>
  );
}

// One gel candle of any size, drawn on its own so sizes can be compared side by side.
export function GelCandle({ color = "red", w = 60, h = 90, flame = 0.8, label = true, className = "" }) {
  const id = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 140 220"
      className={`candle-scene gel-candle ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <Defs id={id} />
      <Glow id={id} cx={70} cy={206 - h + 8 - 24 * flame} r={26 + 34 * flame} />
      <ellipse cx="70" cy="210" rx={w / 2 + 14} ry="5" fill="#000000" opacity="0.16" />
      <GelGlass id={id} cx={70} base={206} w={w} h={h} color={color} flame={flame} label={label} />
    </svg>
  );
}

export default CandleCluster;
