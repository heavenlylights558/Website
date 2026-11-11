import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-emblem.webp";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/catalog", label: "Catalogue" },
  { to: "/categories", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes via a link click.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Heavenly Lights" className="navbar__logo-mark" />
          <span>Heavenly Lights</span>
        </NavLink>

        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "is-active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
