import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import {
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaCode,
  FaArrowRight,
  FaHandshake,
} from "react-icons/fa";

import "./About.css";

function About() {
  const values = [
    {
      icon: <FaUsers />,
      title: "Community First",
      description:
        "We believe great ideas become better when people with different skills work together.",
    },
    {
      icon: <FaLightbulb />,
      title: "Ideas into Reality",
      description:
        "We help developers find collaborators who can turn creative ideas into working projects.",
    },
    {
      icon: <FaHandshake />,
      title: "Collaboration for Everyone",
      description:
        "Whether you're a beginner or an experienced developer, there's a place for you.",
    },
  ];

  return (
    <div className="about-page">
    <Navbar />  
      {/* Hero */}
      <header className="about-hero">
        <div className="about-hero-content">
          <span className="about-badge">ABOUT HACKMATE</span>

          <h1>
            Great ideas deserve
            <br />
            <span>great teammates.</span>
          </h1>

          <p>
            HackMate helps developers connect, discover potential
            collaborators, and take their project ideas from concept
            to creation.
          </p>

          <div className="about-hero-actions">
            <Link to="/register" className="about-primary-button">
              Join the Community <FaArrowRight />
            </Link>

            <Link to="/how-it-works" className="about-secondary-button">
              Discover How It Works
            </Link>
          </div>
        </div>

        <div className="about-hero-visual">
          <div className="about-visual-card">
            <div className="about-visual-icon">
              <FaUsers />
            </div>

            <h3>Better Together</h3>

            <p>
              Connect your skills with people who share your ambition.
            </p>

            <div className="about-avatar-row">
              <span>JS</span>
              <span>AI</span>
              <span>UI</span>
              <span>DB</span>
            </div>

            <small>Different skills. One team.</small>
          </div>

          <div className="about-floating-card">
            <FaRocket />
            <span>Build something amazing</span>
          </div>
        </div>
      </header>

      {/* Mission */}
      <section className="about-mission">
        <div className="about-section-label">OUR MISSION</div>

        <h2>
          Making collaboration
          <br />
          <span>easier for developers.</span>
        </h2>

        <p>
          Finding the right people for a hackathon or a personal project
          can be challenging. Developers may have great ideas but lack
          teammates with complementary skills. HackMate aims to make
          that process simpler by bringing developers together in one
          community.
        </p>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-values-heading">
          <div>
            <div className="about-section-label">WHAT WE BELIEVE</div>
            <h2>Built around collaboration.</h2>
          </div>

          <p>
            A community where skills meet ideas and people build
            meaningful things together.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value) => (
            <article className="about-value-card" key={value.title}>
              <div className="about-value-icon">{value.icon}</div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div>
          <span>YOUR NEXT PROJECT STARTS HERE</span>

          <h2>Find your people. Build together.</h2>

          <p>
            Create your developer profile and take the first step
            toward finding your future teammates.
          </p>
        </div>

        <Link to="/register" className="about-cta-button">
          Get Started <FaArrowRight />
        </Link>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <Link to="/" className="about-logo">
          <span className="about-logo-icon">
            <FaCode />
          </span>
          <span>HackMate</span>
        </Link>

        <p>
          Connecting developers. Inspiring collaboration.
        </p>

        <span>© 2026 HackMate. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default About;