import "./Footer.css";
import { FaRocket, FaEnvelope, FaComments } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <FaRocket />
            <span>HackMate</span>
          </div>

          <p>
            AI-powered platform to help students find hackathon teammates,
            discover events, and build winning projects together.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#">Home</a>
            <a href="#">Find Teams</a>
            <a href="#">Hackathons</a>
            <a href="#">About</a>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>Contact</h4>

            <a href="mailto:team@hackmate.in" className="contact-link">
              <FaEnvelope className="contact-icon" />
              <span>team@hackmate.in</span>
            </a>

            <a href="#" className="contact-link">
              <FaComments className="contact-icon" />
              <span>Live Chat Support</span>
            </a>

            <span className="response-time">
              Usually replies within a few minutes
            </span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 HackMate. Built for students and hackathon enthusiasts.</p>
      </div>
    </footer>
  );
}

export default Footer;