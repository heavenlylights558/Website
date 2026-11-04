// Sample product data for Heavenly Lights.
// Replace this array with data fetched from a backend/API later —
// every component reads from here, so nothing else needs to change.

const products = [
  {
    id: "vanilla-bliss",
    name: "Vanilla Bliss",
    type: "Scented Candle",
    fragrance: "Warm vanilla bean, sandalwood base",
    price: "₹499",
    description:
      "A cozy, comforting scent that fills your room with warm vanilla and a soft hint of spice.",
    sizes: ["Small (100g)", "Medium (200g)", "Large (350g)"],
    features: [
      "Hand-poured in small batches",
      "Soy wax blend for a clean, even burn",
      "Cotton wick, lead-free",
      "Approx. 30–35 hours burn time",
    ],
  },
  {
    id: "lavender-calm",
    name: "Lavender Calm",
    type: "Soy Candle",
    fragrance: "French lavender, chamomile",
    price: "₹549",
    description:
      "A gentle floral fragrance designed to ease the mind at the end of a long day.",
    sizes: ["Small (100g)", "Medium (200g)", "Large (350g)"],
    features: [
      "100% natural soy wax",
      "Calming lavender essential oil blend",
      "Reusable glass jar",
      "Approx. 35–40 hours burn time",
    ],
  },
  {
    id: "rose-glow",
    name: "Rose Glow",
    type: "Jar Candle",
    fragrance: "Bulgarian rose, soft musk",
    price: "₹599",
    description:
      "A romantic, delicate rose fragrance housed in a warm amber glass jar.",
    sizes: ["Medium (200g)", "Large (350g)"],
    features: [
      "Long-lasting floral fragrance",
      "Amber glass jar, reusable after use",
      "Hand-poured and hand-finished",
      "Approx. 35 hours burn time",
    ],
  },
  {
    id: "coffee-aroma",
    name: "Coffee Aroma",
    type: "Scented Candle",
    fragrance: "Roasted coffee bean, cocoa",
    price: "₹529",
    description:
      "A rich, energizing coffee-house scent, perfect for mornings and study spaces.",
    sizes: ["Small (100g)", "Medium (200g)"],
    features: [
      "Deep, rich roasted-coffee fragrance",
      "Soy wax blend",
      "Cotton wick, lead-free",
      "Approx. 30 hours burn time",
    ],
  },
  {
    id: "sandalwood-serenity",
    name: "Sandalwood Serenity",
    type: "Decorative Candle",
    fragrance: "Sandalwood, warm amber",
    price: "₹649",
    description:
      "An earthy, grounding fragrance in a sculpted decorative vessel that doubles as home decor.",
    sizes: ["Medium (200g)", "Large (350g)"],
    features: [
      "Decorative hand-finished vessel",
      "Woody, grounding fragrance",
      "Makes a thoughtful gift",
      "Approx. 40 hours burn time",
    ],
  },
  {
    id: "christmas-glow",
    name: "Christmas Glow",
    type: "Festival / Seasonal Candle",
    fragrance: "Cinnamon, pine, orange peel",
    price: "₹579",
    description:
      "A festive blend of warm spice and pine, made to bring seasonal cheer into your home.",
    sizes: ["Small (100g)", "Medium (200g)", "Large (350g)"],
    features: [
      "Limited seasonal fragrance blend",
      "Gift-ready packaging",
      "Soy wax blend",
      "Approx. 35 hours burn time",
    ],
  },
];

export default products;
