import "./Features.css";
import {
  FaRobot,
  FaUsers,
  FaTrophy,
  FaComments,
  FaArrowRight,
} from "react-icons/fa";

function Features() {
  return (
    <section className="features">
      <div className="features-header">
        <h2>Why HackMate Wins</h2>

        <p>
          Discover teammates, explore hackathons, and build stronger teams with
          AI-powered recommendations.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <FaRobot />
          </div>

          <h3>AI Skill Matching</h3>

          <p>
            Get smart teammate recommendations based on programming languages,
            frameworks, availability, and hackathon interests.
          </p>

          <a href="#">
            Learn more <FaArrowRight />
          </a>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaUsers />
          </div>

          <h3>Team Finder</h3>

          <p>
            Find students from SPPU, COEP, VIT, PCCOE, and other colleges by
            role, location, and experience level.
          </p>

          <a href="#">
            Explore teams <FaArrowRight />
          </a>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaTrophy />
          </div>

          <h3>Hackathon Discovery</h3>

          <p>
            Browse upcoming hackathons from Devfolio, Unstop, SIH, and other
            platforms in one place.
          </p>

          <a href="#">
            View events <FaArrowRight />
          </a>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaComments />
          </div>

          <h3>Real-Time Collaboration</h3>

          <p>
            Chat with teammates, share resources, and coordinate tasks before
            and during hackathons.
          </p>

          <a href="#">
            Start collaborating <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Features;