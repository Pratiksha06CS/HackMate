import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      {/* =========================
          LEFT CONTENT
      ========================= */}

      <div className="hero-content">

        <span className="hero-badge">
          AI-powered teammate matching
        </span>

        <h1>
          Find Your Perfect
          <br />
          <span>Hackathon Team</span>
        </h1>

        <p>
          Connect with developers, designers, AI engineers, and innovators
          based on skills, interests, availability, and hackathon goals.
        </p>

        {/* BUTTONS */}

        <div className="hero-buttons">

          <Link
            to="/register"
            className="primary-btn"
          >
            <span>Get Started</span>
            <FaArrowRight />
          </Link>

          <Link
            to="/login"
            className="secondary-btn"
          >
            Explore Teams
          </Link>

        </div>

      </div>


      {/* =========================
          RIGHT SIDE
      ========================= */}

      <div className="hero-visual">

        <div className="hackathon-panel">

          <div className="panel-header">

            <h3>Upcoming Hackathons</h3>

            <span className="live-dot">
              LIVE
            </span>

          </div>


          {/* Hackathon 1 */}

          <div className="hackathon-card">

            <div className="hackathon-top">

              <span className="badge">
                National
              </span>

              <span className="time">
                2 days left
              </span>

            </div>

            <h4>
              Smart India Hackathon 2026
            </h4>

            <p>
              AI • IoT • Blockchain
            </p>

          </div>


          {/* Hackathon 2 */}

          <div className="hackathon-card">

            <div className="hackathon-top">

              <span className="badge">
                Online
              </span>

              <span className="time">
                5 days left
              </span>

            </div>

            <h4>
              Devfolio AI Challenge
            </h4>

            <p>
              Generative AI • React
            </p>

          </div>


          {/* View all */}

          <Link
            to="/hackathons"
            className="view-link"
          >
            View all hackathons →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;