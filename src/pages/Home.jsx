import { Link } from "react-router-dom";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import products from "../data/products";
import categories from "../data/categories";
import heroCandles from "../assets/festive-candles.png";
import iconNaturalWax from "../assets/icon-natural-wax.png";
import iconMadeInIndia from "../assets/icon-made-in-india.png";
import iconBurnTime from "../assets/icon-burn-time.webp";
import FragranceStrip from "../components/FragranceStrip";
import "./Home.css";

const featured = products.slice(0, 3);
const featuredCategories = categories.slice(0, 4);

const reasons = [
  {
    title: "Hand-poured, not mass-made",
    text: "Every candle is poured and finished by hand in small batches, so quality stays consistent from jar to jar.",
  },
  {
    title: "Clean-burning ingredients",
    text: "We use a soy wax blend and cotton wicks, chosen for an even burn and a room that stays clear.",
  },
  {
    title: "Fragrance that lasts",
    text: "Our scent blends are tested to stay noticeable and pleasant from the first light to the last.",
  },
];

const testimonials = [
  {
    quote:
      "The Lavender Calm candle has become part of my evening routine. It burns evenly and the scent never feels overpowering.",
    name: "Meera S.",
  },
  {
    quote:
      "I bought the Christmas Glow as a gift and ended up ordering one for myself too. Beautifully simple packaging.",
    name: "Arjun N.",
  },
  {
    quote:
      "Small details like the glass jar make it feel premium without the premium price tag.",
    name: "Divya R.",
  },
];

const differentiators = [
  {
    title: "Natural Soy Wax",
    text: "Clean-burning, plant-based wax with no paraffin or synthetic fillers.",
    image: iconNaturalWax,
  },
  {
    title: "Hand-Poured in Kerala",
    text: "Made locally in small batches, shipped across India.",
    image: iconMadeInIndia,
  },
  {
    title: "Long Burn Time",
    text: "Burns for 20, 30 or 60 hours, depending on the size you choose.",
    image: iconBurnTime,
  },
  {
    title: "Skin-Safe Fragrances",
    text: "Tested scent blends, gentle enough for everyday spaces.",
    icon: "shield",
  },
];

const burnSteps = [
  {
    title: "Place on a stable, heat-resistant surface",
    text: "Ensure the candle is placed securely, away from drafts, before lighting.",
  },
  {
    title: "Trim the wick to 1/8 inch before each use",
    text: "A short wick gives a clean, steady flame and a smoother burn.",
  },
  {
    title: "Let the first burn reach the edges",
    text: "Allow the wax pool to melt fully across the top on your first light — it prevents tunnelling later.",
  },
  {
    title: "Burn for 3–4 hours at a time",
    text: "Extinguish before the wax pool gets too deep, and never leave a candle unattended.",
  },
];

function DiffIcon({ type }) {
  const common = {
    viewBox: "0 0 40 40",
    width: 32,
    height: 32,
    fill: "none",
    stroke: "var(--color-gold-deep)",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  return (
    <svg {...common}>
      <path d="M20 6 32 10v9c0 8.5-5.5 13.5-12 16-6.5-2.5-12-7.5-12-16v-9Z" />
      <path d="M15 20l4 4 7-8" />
    </svg>
  );
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="hero__eyebrow">Heavenly Lights</span>
            <h1>Light Up Your Moments</h1>
            <p>
              Hand-poured candles crafted from natural soy wax and thoughtful
              fragrance blends — made to turn an ordinary evening into a
              little occasion.
            </p>
            <div className="hero__actions">
              <Button to="/products">Explore Our Candles</Button>
              <Button to="/about" variant="secondary">About Us</Button>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__glow" />
            <img
              src={heroCandles}
              alt=""
              className="hero__candle"
            />
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Featured Candles</h2>
            <p>A few favourites from the collection, picked for their scent and their staying power.</p>
          </div>
          <div className="grid-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/products" className="text-link">See all products</Link>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>What Makes Us Different?</h2>
          </div>
          <div className="diff-grid">
            {differentiators.map((item) => (
              <div className="diff-item" key={item.title}>
                <div className="diff-icon">
                  {item.image ? (
                    <img src={item.image} alt="" className="diff-icon__img" />
                  ) : (
                    <DiffIcon type={item.icon} />
                  )}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature fragrances */}
      <FragranceStrip />

      {/* Categories */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <h2>Shop by Category</h2>
            <p>From everyday scented jars to seasonal gifting candles, find the kind that fits the moment.</p>
          </div>
          <div className="grid-4">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/categories" className="text-link">Browse all categories</Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container why-grid">
          <div className="section-head why-grid__head">
            <h2>Why Choose Heavenly Lights</h2>
            <p>
              We're a small startup focused on getting the fundamentals
              right — good wax, good fragrance, and honest pricing.
            </p>
          </div>
          <div className="why-grid__list">
            {reasons.map((reason) => (
              <div className="why-item" key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="section section--alt about-snippet">
        <div className="container about-snippet__grid">
          <div className="about-snippet__image" aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="96" fill="var(--color-cream-deep)" />
              <path
                d="M100 44c11 16 16.5 27 16.5 37a16.5 16.5 0 1 1-33 0C83.5 71 89 60 100 44Z"
                fill="var(--color-gold)"
              />
              <rect x="72" y="90" width="56" height="70" rx="10" fill="var(--color-white)" opacity="0.7" />
            </svg>
          </div>
          <div>
            <h2>Made by hand, made with care</h2>
            <p>
              Heavenly Lights started as a small home project experimenting
              with wax and fragrance. Today, every candle is still poured
              and packaged by hand, with the same attention we started
              with.
            </p>
            <Button to="/about" variant="secondary">Our Story</Button>
          </div>
        </div>
      </section>

      {/* How to burn your candle */}
      <section className="section burn-guide">
        <div className="container burn-guide__grid">
          <div className="burn-guide__image" aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="96" fill="var(--color-cream-deep)" />
              <ellipse cx="100" cy="52" rx="9" ry="15" fill="var(--color-gold)" opacity="0.9" />
              <ellipse cx="100" cy="58" rx="4.5" ry="8" fill="#fff4da" opacity="0.9" />
              <rect x="72" y="70" width="56" height="80" rx="10" fill="var(--color-white)" opacity="0.75" />
              <rect x="72" y="70" width="56" height="80" rx="10" fill="none" stroke="var(--color-brown)" strokeOpacity="0.25" />
              <line x1="100" y1="70" x2="100" y2="58" stroke="var(--color-charcoal)" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <div className="section-head">
              <h2>How to Burn Your Candle</h2>
              <p>A few simple habits make every candle burn cleaner and last longer.</p>
            </div>
            <ol className="burn-guide__steps">
              {burnSteps.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>What Customers Say</h2>
          </div>
          <div className="grid-3">
            {testimonials.map((testimonial) => (
              <figure className="testimonial" key={testimonial.name}>
                <blockquote>"{testimonial.quote}"</blockquote>
                <figcaption>{testimonial.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta__inner">
          <h2>Bring a little glow into your space</h2>
          <p>Explore the full collection and find a scent for every room and mood.</p>
          <Button to="/products" variant="outline-light">Shop All Candles</Button>
        </div>
      </section>
    </>
  );
}

export default Home;
