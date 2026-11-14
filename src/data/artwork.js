// Central place for all candle / fragrance artwork.
// To swap an image, replace the file in src/assets/ (same name) or change the mapping here.

import lavender from "../assets/flavours/lavender.webp";
import sandalwood from "../assets/flavours/sandalwood.webp";
import apple from "../assets/flavours/apple.webp";
import rose from "../assets/flavours/rose.webp";
import lemon from "../assets/flavours/lemon.webp";
import vanilla from "../assets/flavours/vanilla.webp";
import jasmine from "../assets/flavours/jasmine.webp";

import candleGelWax from "../assets/candles/gel-wax.webp";
import candleDevotional from "../assets/candles/devotional.webp";
import candleAutumn from "../assets/candles/autumn.webp";
import candleAdventWreath from "../assets/candles/advent-wreath.webp";
import candleAdventCalendar from "../assets/candles/advent-calendar.webp";

// The 7 signature fragrances shown on the home page.
export const flavours = [
  { id: "lavender", name: "Lavender", note: "Calm & soothing", image: lavender },
  { id: "sandalwood", name: "Sandalwood", note: "Warm & woody", image: sandalwood },
  { id: "apple", name: "Apple", note: "Crisp & fresh", image: apple },
  { id: "rose", name: "Rose", note: "Romantic & floral", image: rose },
  { id: "lemon", name: "Lemon", note: "Bright & zesty", image: lemon },
  { id: "vanilla", name: "Vanilla", note: "Sweet & cozy", image: vanilla },
  { id: "jasmine", name: "Jasmine", note: "Delicate & elegant", image: jasmine },
];

// Product label images: src/assets/labels/<product-id>-<grams>.webp
const labelFiles = import.meta.glob("../assets/labels/*.webp", {
  eager: true,
  import: "default",
});

// labelImage("lavender", 150)                      -> clean label (no price box), used on cards
// labelImage("lavender", 150, { withPrice: true })  -> label with the MRP box, used on product pages
// If a version is missing, the other one is used instead.
export function labelImage(productId, grams, { withPrice = false } = {}) {
  const clean = labelFiles[`../assets/labels/${productId}-${grams}-noprice.webp`];
  const priced = labelFiles[`../assets/labels/${productId}-${grams}.webp`];
  return withPrice ? priced || clean : clean || priced;
}

// Category id -> image (ids come from src/data/categories.js)
export const categoryArt = {
  scented: candleAutumn,
  gel: candleGelWax,
  jar: candleDevotional,
  decorative: candleAdventCalendar,
  gift: rose,
  seasonal: candleAdventWreath,
};
