import "./HowItWorks.css";
import {
  FaUserPlus,
  FaCode,
  FaRobot,
  FaUsers,
} from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="how-it-works">

      <div className="how-header">

        <span className="how-badge">Simple Process</span>

        <h2>How HackMate Works</h2>

        <p>
          Find your ideal hackathon team in four simple steps and start
          building winning projects together.
        </p>

      </div>

      <div className="timeline">

        <div className="timeline-line"></div>

        <div className="step">

          <div className="step-number">01</div>

          <div className="step-circle">
            <FaUserPlus />
          </div>

          <h3>Create Profile</h3>

          <p>
            Sign up and create your HackMate profile with your basic details.
          </p>

        </div>

        <div className="step">

          <div className="step-number">02</div>

          <div className="step-circle">
            <FaCode />
          </div>

          <h3>Add Your Skills</h3>

          <p>
            Select technologies like Java, React, Spring Boot, MongoDB, AI,
            Blockchain and more.
          </p>

        </div>

        <div className="step">

          <div className="step-number">03</div>

          <div className="step-circle">
            <FaRobot />
          </div>

          <h3>Get AI Matches</h3>

          <p>
            Receive teammate recommendations based on skills, interests and
            availability.
          </p>

        </div>

        <div className="step">

          <div className="step-number">04</div>

          <div className="step-circle">
            <FaUsers />
          </div>

          <h3>Join Team</h3>

          <p>
            Connect with teammates, chat, and participate in hackathons
            together.
          </p>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;