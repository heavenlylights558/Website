import { Link } from "react-router-dom";
import logo from "../assets/logo-emblem.webp";
import useInView from "../hooks/useInView";
import FragranceRibbon from "./FragranceRibbon";
import FooterCandle from "./FooterCandle";
import "./Footer.css";

// Small golden embers that drift upward behind the footer content.
const embers = [
  { left: "6%", size: 4, delay: "0s", duration: "11s" },
  { left: "14%", size: 3, delay: "3s", duration: "9s" },
  { left: "23%", size: 5, delay: "6s", duration: "13s" },
  { left: "34%", size: 3, delay: "1.5s", duration: "10s" },
  { left: "45%", size: 4, delay: "4.5s", duration: "12s" },
  { left: "56%", size: 3, delay: "2s", duration: "9.5s" },
  { left: "66%", size: 5, delay: "7s", duration: "14s" },
  { left: "76%", size: 3, delay: "0.5s", duration: "10.5s" },
  { left: "85%", size: 4, delay: "5s", duration: "12.5s" },
  { left: "93%", size: 3, delay: "8s", duration: "11.5s" },
];

// Twinkling gold sparkles scattered across the footer.
const sparkles = [
  { top: "14%", left: "8%", size: 12, delay: "0s", duration: "4s" },
  { top: "30%", left: "22%", size: 8, delay: "1.2s", duration: "3.5s" },
  { top: "18%", left: "38%", size: 10, delay: "2.4s", duration: "4.5s" },
  { top: "40%", left: "52%", size: 8, delay: "0.6s", duration: "3.8s" },
  { top: "22%", left: "64%", size: 12, delay: "1.8s", duration: "4.2s" },
  { top: "46%", left: "78%", size: 9, delay: "3s", duration: "3.6s" },
  { top: "12%", left: "90%", size: 10, delay: "0.9s", duration: "4.4s" },
  { top: "60%", left: "12%", size: 8, delay: "2.1s", duration: "3.9s" },
];

function Footer() {
  const [ref, inView] = useInView(0.12);

  return (
    <footer className={`footer ${inView ? "is-visible" : ""}`} ref={ref}>
      <div className="footer__embers" aria-hidden="true">
        {embers.map((ember, index) => (
          <span
            key={index}
            style={{
              "--left": ember.left,
              "--size": `${ember.size}px`,
              "--delay": ember.delay,
              "--duration": ember.duration,
            }}
          />
        ))}
      </div>

      <div className="footer__sparkles" aria-hidden="true">
        {sparkles.map((sparkle, index) => (
          <span
            key={index}
            style={{
              "--top": sparkle.top,
              "--left": sparkle.left,
              "--size": `${sparkle.size}px`,
              "--delay": sparkle.delay,
              "--duration": sparkle.duration,
            }}
          />
        ))}
      </div>

      <FragranceRibbon />

      <div className="container footer__grid">
        <div className="footer__brand" style={{ "--i": 0 }}>
          <div className="footer__brand-row">
            <span className="footer__badge">
              <img src={logo} alt="Heavenly Lights" className="footer__logo-mark" />
            </span>
            <span className="footer__logo">Heavenly Lights</span>
          </div>
          <p className="footer__tagline">A Touch of Heavenly Peace at Home.</p>
          <p>
            Hand-poured candles made to bring warmth, calm and a little
            glow to everyday moments.
          </p>
          <ul className="footer__social" aria-label="Social media">
            <li><a href="#" aria-label="Instagram">IG</a></li>
            <li><a href="#" aria-label="Facebook">FB</a></li>
            <li><a href="#" aria-label="Pinterest">PIN</a></li>
          </ul>
        </div>

        <div className="footer__col" style={{ "--i": 1 }}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/catalog">Catalogue</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col" style={{ "--i": 2 }}>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:heavenlylights558@gmail.com">heavenlylights558@gmail.com</a></li>
            <li><a href="tel:+917902879115">+91 79028 79115</a></li>
            <li>Kerala, India</li>
          </ul>
        </div>

        <div className="footer__candle-col" style={{ "--i": 3 }}>
          <FooterCandle />
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-row">
          <p>© 2026 Heavenly Lights. All rights reserved.</p>
          <p className="footer__credit">Developed by Albin Joseph</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
