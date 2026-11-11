// Product data for Heavenly Lights.
// Every component reads from here, so edit prices, sizes and text in this one file.
// Label images live in src/assets/labels/<id>-<grams>.webp

// The same three sizes are offered for every fragrance.
export const sizeTiers = [
  { grams: 100, price: 100, hours: 20 },
  { grams: 150, price: 140, hours: 30 },
  { grams: 250, price: 180, hours: 60 },
];

const commonFeatures = [
  "Hand-poured in small batches",
  "Available in 100g, 150g and 250g",
  "Burns for up to 20, 30 or 60 hours depending on size",
];

const products = [
  {
    id: "lavender",
    name: "Lavender",
    type: "Scented Candle",
    fragrance: "Soothing lavender fields",
    description:
      "A gentle floral fragrance designed to ease the mind at the end of a long day.",
  },
  {
    id: "rose",
    name: "Rose",
    type: "Scented Candle",
    fragrance: "Fresh, romantic garden rose",
    description:
      "A delicate, romantic rose fragrance that makes any room feel warm and welcoming.",
  },
  {
    id: "sandalwood",
    name: "Sandalwood",
    type: "Scented Candle",
    fragrance: "Warm, creamy sandalwood",
    description:
      "A grounding, woody fragrance that brings quiet calm to prayer corners and living rooms alike.",
  },
  {
    id: "jasmine",
    name: "Jasmine",
    type: "Scented Candle",
    fragrance: "Delicate white jasmine blossom",
    description:
      "An elegant, uplifting floral scent inspired by fresh jasmine in bloom.",
  },
  {
    id: "lemon",
    name: "Lemon",
    type: "Scented Candle",
    fragrance: "Bright, zesty lemon",
    description:
      "A fresh, clean citrus fragrance that lifts the mood and brightens any space.",
  },
  {
    id: "vanilla",
    name: "Vanilla",
    type: "Scented Candle",
    fragrance: "Warm, creamy vanilla bean",
    description:
      "A cozy, comforting scent that fills your room with warm vanilla and a gentle sweetness.",
  },
  {
    id: "spiced-apple",
    name: "Spiced Apple",
    type: "Scented Candle",
    fragrance: "Crisp red apple with warm spice",
    description:
      "A cozy blend of crisp apple and gentle spice, perfect for cooler evenings.",
  },
].map((product) => ({
  ...product,
  features: commonFeatures,
  sizes: sizeTiers,
}));

export function formatPrice(amount) {
  return `₹${amount}`;
}

export default products;
