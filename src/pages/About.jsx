import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="container page-hero about-hero">
        <div>
          <span className="eyebrow-plain">About Heavenly Lights</span>
          <h1>Small batches, made with care</h1>
          <p>
            Heavenly Lights is a young candle startup built around a simple
            idea: a good candle should feel calming to use and honest about
            what's in it.
          </p>
        </div>
        <div className="about-hero__image" aria-hidden="true">
          <svg viewBox="0 0 240 240">
            <circle cx="120" cy="120" r="112" fill="var(--color-cream)" />
            <ellipse cx="120" cy="70" rx="14" ry="22" fill="var(--color-gold)" />
            <rect x="82" y="96" width="76" height="96" rx="14" fill="var(--color-cream-deep)" />
          </svg>
        </div>
      </div>

      <section className="section about-section">
        <div className="container about-block">
          <h2>Our Story</h2>
          <p>
            Heavenly Lights began as a small home experiment — melting wax,
            testing fragrances, and giving candles away to friends and
            family for feedback. What started as a hobby slowly turned into
            a small startup, built one batch at a time.
          </p>
        </div>
      </section>

      <section className="section section--alt about-section">
        <div className="container about-block">
          <h2>Our Mission</h2>
          <p>
            To make thoughtfully crafted candles that are simple to enjoy —
            good fragrance, a clean burn, and a price that doesn't feel like
            a luxury purchase.
          </p>
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-block">
          <h2>Our Vision</h2>
          <p>
            To grow into a candle brand that people trust for everyday
            comfort and thoughtful gifting, while staying true to the
            hands-on care we started with.
          </p>
        </div>
      </section>

      <section className="section section--alt about-section">
        <div className="container about-grid">
          <div className="about-block">
            <h2>What Makes Us Different</h2>
            <p>
              We keep our range focused rather than overwhelming, so every
              candle we sell is one we've personally tested and stand
              behind.
            </p>
          </div>
          <div className="about-block">
            <h2>Quality & Craftsmanship</h2>
            <p>
              Each candle is hand-poured in small batches and checked for
              an even burn before it's packaged, rather than produced on a
              large automated line.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-block">
          <h2>Sustainability</h2>
          <p>
            We're mindful of the materials we choose, from the wax blend we
            use to the jars we pack candles in, and we're working to make
            more sustainable choices as we grow.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
