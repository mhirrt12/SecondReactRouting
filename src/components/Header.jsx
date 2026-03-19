import { NavLink } from "react-router-dom";
import "../styles.css";

export default function Header() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}