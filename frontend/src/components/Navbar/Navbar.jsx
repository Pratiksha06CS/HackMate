import "./Navbar.css";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        <FaRocket className="logo-icon" />
        <span>HackMate</span>
      </Link>

      {/* Navigation links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">Teams</Link>
        </li>

        <li>
          <Link to="/hackathons">Hackathons</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      {/* Authentication buttons */}
      <div className="nav-buttons">
        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/register" className="register-btn">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;