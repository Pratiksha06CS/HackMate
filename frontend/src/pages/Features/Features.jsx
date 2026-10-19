import {
  FaUsers,
  FaSearch,
  FaCode,
  FaTrophy,
  FaComments,
  FaUserCheck,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Features.css";

const features = [
  {
    icon: <FaUsers />,
    title: "Smart Team Formation",
    description:
      "Find teammates who complement your skills, interests, and project goals.",
    tag: "Collaboration",
  },
  {
    icon: <FaSearch />,
    title: "Discover Developers",
    description:
      "Explore developer profiles and connect with people who share your vision.",
    tag: "Networking",
  },
  {
    icon: <FaCode />,
    title: "Skill-Based Matching",
    description:
      "Discover potential teammates based on programming languages, technologies, and experience.",
    tag: "Smart Matching",
  },
  {
    icon: <FaTrophy />,
    title: "Hackathon Discovery",
    description:
      "Explore hackathons and discover opportunities to turn your ideas into real projects.",
    tag: "Opportunities",
  },
  {
    icon: <FaComments />,
    title: "Team Collaboration",
    description:
      "Connect with like-minded developers and start building something meaningful together.",
    tag: "Communication",
  },
  {
    icon: <FaUserCheck />,
    title: "Developer Profiles",
    description:
      "Showcase your skills, experience, interests, and portfolio in one place.",
    tag: "Your Identity",
  },
  {
    icon: <FaLightbulb />,
    title: "Project Ideas",
    description:
      "Find people who are excited about similar ideas and ready to collaborate.",
    tag: "Innovation",
  },
  {
    icon: <FaRocket />,
    title: "Build and Launch",
    description:
      "Bring your team together, turn ideas into working prototypes, and prepare for competitions.",
    tag: "Build Faster",
  },
];

function Features() {
  return (
    <>
      <Navbar />

      <main className="features-page">
        {/* Hero Section */}
        <section className="features-hero">
          <div className="features-hero-content">
            <span className="features-badge">
              EVERYTHING YOU NEED TO COLLABORATE
            </span>

            <h1>
              Great Ideas Need
              <br />
              <span>Great Teammates.</span>
            </h1>

            <p>
              HackMate helps you discover developers, find complementary
              skills, and connect with people who are ready to build
              something extraordinary.
            </p>

            <div className="features-hero-buttons">
              <Link to="/register" className="features-primary-btn">
                Get Started <FaRocket />
              </Link>

              <Link
                to="/how-it-works"
                className="features-secondary-btn"
              >
                How It Works
              </Link>
            </div>

            <div className="features-trust-line">
              <span className="trust-dot"></span>
              Made for developers, innovators, and hackathon enthusiasts
            </div>
          </div>

          {/* Simple Right-Side Illustration */}
          <div className="features-hero-visual">
            <div className="simple-feature-card">
              <div className="simple-feature-icon">
                <FaRocket />
              </div>

              <span className="simple-feature-label">
                BUILT FOR COLLABORATION
              </span>

              <h3>Build Your Dream Team</h3>

              <p>
                Connect with developers, share ideas, and create something
                amazing together.
              </p>

              <div className="simple-feature-tags">
                <span>
                  <FaCode /> Developers
                </span>

                <span>
                  <FaUsers /> Teamwork
                </span>

                <span>
                  <FaTrophy /> Hackathons
                </span>
              </div>

              <div className="simple-feature-footer">
                <div className="simple-feature-footer-icon">
                  <FaUsers />
                </div>

                <div>
                  <strong>Better Together</strong>
                  <span>Find your people. Build together.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="features-section">
          <div className="features-section-heading">
            <span className="features-eyebrow">
              EXPLORE HACKMATE
            </span>

            <h2>
              Everything to help you
              <br />
              <span>find your next teammate.</span>
            </h2>

            <p>
              From discovering talented developers to preparing for your
              next hackathon, HackMate brings your collaboration journey
              together.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-card-top">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>

                  <span className="feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="feature-tag">
                  {feature.tag}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <div className="feature-card-line"></div>
              </article>
            ))}
          </div>
        </section>

        {/* Call To Action */}
        <section className="features-cta">
          <div className="features-cta-content">
            <span className="features-eyebrow">
              YOUR NEXT PROJECT STARTS HERE
            </span>

            <h2>
              Stop building alone.
              <br />
              <span>Start building together.</span>
            </h2>

            <p>
              Create your profile, showcase your skills, and discover
              people who can help turn your ideas into reality.
            </p>

            <Link to="/register" className="features-primary-btn">
              Join HackMate <FaRocket />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Features;