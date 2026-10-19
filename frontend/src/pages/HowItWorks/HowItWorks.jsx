import { Link } from "react-router-dom";
import {
  FaUserEdit,
  FaSearch,
  FaHandshake,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <FaUserEdit />,
      title: "Create Your Profile",
      description:
        "Introduce yourself to the HackMate community. Add your technical skills, interests, experience level, and preferred role.",
      details: [
        "Showcase your technical skills",
        "Add your GitHub and portfolio",
        "Choose your areas of interest",
      ],
    },
    {
      number: "02",
      icon: <FaSearch />,
      title: "Discover Developers",
      description:
        "Explore developers with different skills and interests. Find people who could complement your strengths.",
      details: [
        "Explore developer profiles",
        "Search by skills and interests",
        "Discover potential collaborators",
      ],
    },
    {
      number: "03",
      icon: <FaHandshake />,
      title: "Connect With Teammates",
      description:
        "Find developers who share your goals and identify people you'd like to collaborate with on your next project.",
      details: [
        "Find people with complementary skills",
        "Explore potential project partners",
        "Build your developer network",
      ],
    },
    {
      number: "04",
      icon: <FaRocket />,
      title: "Build Something Amazing",
      description:
        "Bring your ideas to life by working with your teammates on projects, prototypes, and hackathon challenges.",
      details: [
        "Collaborate on project ideas",
        "Prepare for hackathons",
        "Learn and grow together",
      ],
    },
  ];

  return (
    <div className="how-page">
      <Navbar />

      {/* Hero */}
      <section className="how-hero">
        <div className="how-hero-content">
          <span className="how-eyebrow">
            YOUR JOURNEY STARTS HERE
          </span>

          <h1>
            From individual skills
            <br />
            to <span>incredible teams.</span>
          </h1>

          <p>
            Finding the right teammates shouldn't be difficult.
            HackMate aims to make developer discovery and collaboration
            easier through a simple, four-step journey.
          </p>

          <Link to="/register" className="how-primary-button">
            Get Started <FaArrowRight />
          </Link>
        </div>

        <div className="how-hero-visual">
          <div className="how-visual-circle how-circle-one"></div>
          <div className="how-visual-circle how-circle-two"></div>

          <div className="how-team-card">
            <div className="how-team-icon">
              <FaHandshake />
            </div>

            <h3>One Team. Different Skills.</h3>

            <p>
              Bring developers together to turn ideas into projects.
            </p>

            <div className="how-skill-tags">
              <span>Frontend</span>
              <span>Backend</span>
              <span>AI / ML</span>
              <span>Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="how-steps-section">
        <div className="how-section-heading">
          <span className="how-eyebrow">THE PROCESS</span>

          <h2>Four steps to get started.</h2>

          <p>
            A straightforward path from creating your profile to
            discovering opportunities to collaborate.
          </p>
        </div>

        <div className="how-steps-grid">
          {steps.map((step) => (
            <article className="how-step-card" key={step.number}>
              <div className="how-step-top">
                <span className="how-step-number">
                  {step.number}
                </span>

                <div className="how-step-icon">
                  {step.icon}
                </div>
              </div>

              <h3>{step.title}</h3>

              <p className="how-step-description">
                {step.description}
              </p>

              <ul>
                {step.details.map((detail) => (
                  <li key={detail}>
                    <FaCheckCircle />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="how-benefits">
        <div className="how-benefits-content">
          <span className="how-eyebrow">WHY HACKMATE?</span>

          <h2>
            Better collaboration
            <br />
            starts with the right people.
          </h2>

          <p>
            Everyone brings something different to a team. HackMate
            is being built to help developers find potential
            collaborators, exchange ideas, and create opportunities
            to learn from one another.
          </p>

          <Link to="/about" className="how-text-link">
            Learn more about HackMate <FaArrowRight />
          </Link>
        </div>

        <div className="how-benefit-list">
          <div className="how-benefit-item">
            <FaCheckCircle />
            <div>
              <h3>Discover different skills</h3>
              <p>
                Explore developers with technical strengths different
                from your own.
              </p>
            </div>
          </div>

          <div className="how-benefit-item">
            <FaCheckCircle />
            <div>
              <h3>Learn through collaboration</h3>
              <p>
                Work with others to exchange knowledge and develop
                practical experience.
              </p>
            </div>
          </div>

          <div className="how-benefit-item">
            <FaCheckCircle />
            <div>
              <h3>Turn ideas into projects</h3>
              <p>
                Find potential teammates who can help bring your
                ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="how-cta">
        <span>READY TO BEGIN?</span>

        <h2>Your next great project starts with a team.</h2>

        <p>
          Create your profile and take the first step toward finding
          your potential collaborators.
        </p>

        <Link to="/register" className="how-cta-button">
          Create Your Profile <FaArrowRight />
        </Link>
      </section>

      {/* Footer */}
      <footer className="how-footer">
        <Link to="/" className="how-footer-logo">
          HackMate
        </Link>

        <p>Connecting developers. Inspiring collaboration.</p>

        <span>© 2026 HackMate. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default HowItWorks;