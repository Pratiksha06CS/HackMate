import "./Navbar.css";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

        <FaRocket className="logo-icon" />

        <span>HackMate</span>

      </div>

      <ul className="nav-links">

        <li><a href="#">Home</a></li>

        <li><a href="#">Teams</a></li>

        <li><a href="#">Hackathons</a></li>

        <li><a href="#">About</a></li>

      </ul>

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