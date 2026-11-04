import { Link } from "react-router-dom";
import "./Button.css";

// A single reusable button/link. Pass `to` for internal navigation,
// or `onClick` for an in-page action (e.g. the contact form).
function Button({ children, to, onClick, variant = "primary", type = "button" }) {
  const className = `btn btn--${variant}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
