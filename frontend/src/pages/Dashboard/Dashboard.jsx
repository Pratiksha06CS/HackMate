import { useNavigate } from "react-router-dom";
import {
  FaRocket,
  FaUsers,
  FaCalendarAlt,
  FaArrowRight,
  FaUserCircle,
  FaSignOutAlt,
  FaCode,
  FaHome,
} from "react-icons/fa";

import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName") || "Developer";
  const userEmail = localStorage.getItem("userEmail") || "";
  const firstName = userName.trim().split(/\s+/)[0] || "Developer";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");

    navigate("/login", { replace: true });
  };

  return (
    <div className="dashboard">
      {/* Top Navbar */}
      <header className="dashboard-navbar">
        <button
          className="dashboard-brand"
          onClick={() => navigate("/dashboard")}
          aria-label="HackMate home"
        >
          <FaRocket />
          <span>HackMate</span>
        </button>

        <div className="dashboard-account">
          <div className="dashboard-avatar">
            {firstName.charAt(0).toUpperCase()}
          </div>

          <div className="dashboard-account-info">
            <span>{userName}</span>
            <small>Developer</small>
          </div>

          <button
            className="dashboard-logout"
            onClick={handleLogout}
            title="Logout"
            aria-label="Logout"
          >
            <FaSignOutAlt />
          </button>
        </div>
      </header>

      {/* Page Layout */}
      <div className="dashboard-layout">
        {/* Left Sidebar */}
        <aside className="dashboard-sidebar">
          <p className="sidebar-heading">WORKSPACE</p>

          <button
            className="sidebar-link sidebar-link-active"
            onClick={() => navigate("/dashboard")}
          >
            <FaHome />
            <span>Dashboard</span>
          </button>

          <p className="sidebar-heading sidebar-heading-spaced">
            YOUR ACCOUNT
          </p>

          {/* My Profile with notification */}
          <button
            className="sidebar-link sidebar-profile-link"
            onClick={() => navigate("/profile")}
            title="Complete your profile"
          >
            <FaUserCircle />
            <span>My Profile</span>

            <span
              className="profile-notification-dot"
              aria-label="Profile completion reminder"
              title="Complete your profile"
            />
          </button>

          <p className="sidebar-heading sidebar-heading-spaced">
            DISCOVER
          </p>

          <button
            className="sidebar-link"
            onClick={() =>
              alert("Team discovery will be implemented next.")
            }
          >
            <FaUsers />
            <span>Find Teammates</span>
          </button>

          <button
            className="sidebar-link"
            onClick={() =>
              alert("Hackathon listings will be implemented next.")
            }
          >
            <FaCalendarAlt />
            <span>Hackathons</span>
          </button>

          {/* Sidebar Footer */}
          <div className="sidebar-bottom">
            <p>HackMate</p>
            <span>Find your people. Build together.</span>
          </div>

          <button
            className="sidebar-logout"
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            <span>Sign out</span>
          </button>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          {/* Welcome */}
          <section className="dashboard-welcome">
            <p className="dashboard-greeting">YOUR WORKSPACE</p>

            <h1>Your next great collaboration starts here.</h1>

            <p className="dashboard-subtitle">
              Find teammates who share your interests, explore hackathons,
              and turn your ideas into projects.
            </p>
          </section>

          {/* Explore HackMate */}
          <section className="dashboard-explore">
            <div className="dashboard-section-heading">
              <h2>Explore HackMate</h2>
              <p>Everything starts with finding the right people.</p>
            </div>

            <div className="dashboard-feature-grid">
              {/* Find Teammates */}
              <article className="dashboard-feature-card">
                <div className="dashboard-feature-icon team-icon">
                  <FaUsers />
                </div>

                <h3>Find teammates</h3>

                <p>
                  Connect with students and developers who share your
                  interests and want to work on exciting projects.
                </p>

                <button
                  className="dashboard-feature-link"
                  onClick={() =>
                    alert("Team discovery will be implemented next.")
                  }
                >
                  Browse teammates
                  <FaArrowRight />
                </button>
              </article>

              {/* Hackathons */}
              <article className="dashboard-feature-card">
                <div className="dashboard-feature-icon hackathon-icon">
                  <FaCalendarAlt />
                </div>

                <h3>Discover hackathons</h3>

                <p>
                  Find opportunities to collaborate, experiment with
                  new technologies, and turn ideas into projects.
                </p>

                <button
                  className="dashboard-feature-link"
                  onClick={() =>
                    alert("Hackathon listings will be implemented next.")
                  }
                >
                  Explore hackathons
                  <FaArrowRight />
                </button>
              </article>
            </div>
          </section>

          {/* Getting Started */}
          <section className="dashboard-activity">
            <div className="dashboard-section-heading">
              <h2>Getting started</h2>
            </div>

            <div className="dashboard-activity-content">
              <div className="dashboard-activity-icon">
                <FaCode />
              </div>

              <div>
                <h3>Your next project starts here</h3>

                <p>
                  Start by completing your profile. You'll then be ready
                  to connect with teammates as we build more features.
                </p>
              </div>
            </div>
          </section>

          {/* Account Information */}
          <section className="dashboard-account-section">
            <div>
              <h2>Account information</h2>

              <p className="dashboard-account-email">
                {userEmail || "Email not available"}
              </p>
            </div>

            <button onClick={handleLogout}>
              <FaSignOutAlt />
              Sign out
            </button>
          </section>

          {/* Footer */}
          <footer className="dashboard-footer">
            <span>HackMate © 2026</span>
            <span>Find your people. Build together.</span>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;