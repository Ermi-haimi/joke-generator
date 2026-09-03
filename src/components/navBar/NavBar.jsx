import { NavLink } from "react-router";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav>
      <div className="links-wrapper">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/discover">Discover</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}
