import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaUserCircle,
  FaGithub,
  FaGlobe,
  FaSave,
} from "react-icons/fa";

import "./Profile.css";

const API_URL = "http://localhost:8080/api/profile";

function Profile() {
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName") || "";
  const userEmail = localStorage.getItem("userEmail") || "";
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    fullName: userName,
    college: "",
    branch: "",
    skills: "",
    experienceLevel: "Beginner",
    interests: [],
    preferredRole: "Full Stack Developer",
    github: "",
    portfolio: "",
    availability: "Flexible",
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const interestsList = [
    "Web Development",
    "AI / ML",
    "Cybersecurity",
    "IoT",
    "Blockchain",
    "Cloud Computing",
    "Mobile Development",
    "Data Science",
  ];

  // Load the user's profile from MongoDB
  useEffect(() => {
    const loadProfile = async () => {
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401 || response.status === 403) {
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }

        if (response.status === 404) {
          // No profile exists yet; keep the default form values.
          return;
        }

        if (!response.ok) {
          throw new Error("Could not load your profile.");
        }

        const profile = await response.json();

        setFormData({
          fullName: profile.fullName || userName,
          college: profile.college || "",
          branch: profile.branch || "",
          skills: Array.isArray(profile.skills)
            ? profile.skills.join(", ")
            : "",
          experienceLevel: profile.experienceLevel || "Beginner",
          interests: Array.isArray(profile.interests)
            ? profile.interests
            : [],
          preferredRole: profile.preferredRole || "Full Stack Developer",
          github: profile.github || "",
          portfolio: profile.portfolio || "",
          availability: profile.availability || "Flexible",
        });
      } catch (error) {
        setMessage(
          error.message || "Unable to connect to the backend."
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [navigate, token, userName]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  };

  const handleInterestChange = (interest) => {
    setFormData((previous) => ({
      ...previous,
      interests: previous.interests.includes(interest)
        ? previous.interests.filter((item) => item !== interest)
        : [...previous.interests, interest],
    }));

    setMessage("");
  };

  // Save the profile to MongoDB
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setMessage("Please enter your full name.");
      return;
    }

    if (!formData.skills.trim()) {
      setMessage("Please add at least one technical skill.");
      return;
    }

    if (formData.interests.length === 0) {
      setMessage("Please select at least one area of interest.");
      return;
    }

    if (!token) {
      navigate("/login");
      return;
    }

    const profileData = {
      fullName: formData.fullName.trim(),
      college: formData.college.trim(),
      branch: formData.branch.trim(),
      skills: formData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
      experienceLevel: formData.experienceLevel,
      interests: formData.interests,
      preferredRole: formData.preferredRole,
      github: formData.github.trim(),
      portfolio: formData.portfolio.trim(),
      availability: formData.availability,
    };

    setIsSaving(true);
    setMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileData),
      });

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to save your profile."
        );
      }

      setMessage("Profile saved successfully!");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      setMessage(
        error.message ||
          "Unable to connect to the backend. Check whether Spring Boot is running."
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="profile-page">
      <header className="profile-navbar">
        <button
          className="profile-back-button"
          onClick={() => navigate("/dashboard")}
        >
          <FaArrowLeft />
          <span>Back to Dashboard</span>
        </button>

        <div className="profile-user">
          <FaUserCircle />
          <span>{userName || "Developer"}</span>
        </div>
      </header>

      <main className="profile-container">
        <div className="profile-heading">
          <p className="profile-eyebrow">YOUR ACCOUNT</p>

          <h1>Build your developer profile</h1>

          <p>
            Tell the community about your skills, interests, and the
            projects you want to work on.
          </p>
        </div>

        {message && (
          <div
            className={`profile-message ${
              message === "Profile saved successfully!"
                ? "profile-message-success"
                : "profile-message-error"
            }`}
            role="status"
          >
            {message}
          </div>
        )}

        {isLoading ? (
          <div className="profile-section">
            <p>Loading your profile...</p>
          </div>
        ) : (
          <form className="profile-form" onSubmit={handleSubmit}>
            <section className="profile-section">
              <div className="profile-section-heading">
                <h2>Basic information</h2>
                <p>Introduce yourself to potential teammates.</p>
              </div>

              <div className="profile-form-grid">
                <div className="profile-field">
                  <label htmlFor="fullName">Full name *</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="profile-field">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    value={userEmail}
                    readOnly
                    className="profile-readonly"
                  />
                  <small>Your registered email address.</small>
                </div>

                <div className="profile-field">
                  <label htmlFor="college">College / University</label>
                  <input
                    id="college"
                    name="college"
                    type="text"
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="Enter your college name"
                  />
                </div>

                <div className="profile-field">
                  <label htmlFor="branch">Branch / Specialization</label>
                  <input
                    id="branch"
                    name="branch"
                    type="text"
                    value={formData.branch}
                    onChange={handleChange}
                    placeholder="e.g. Computer Engineering"
                  />
                </div>
              </div>
            </section>

            <section className="profile-section">
              <div className="profile-section-heading">
                <h2>Skills and experience</h2>
                <p>Help others understand what you can contribute.</p>
              </div>

              <div className="profile-field">
                <label htmlFor="skills">Technical skills *</label>
                <input
                  id="skills"
                  name="skills"
                  type="text"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Java, React, Python, MongoDB"
                  required
                />
                <small>Separate skills with commas.</small>
              </div>

              <div className="profile-field profile-field-spaced">
                <label htmlFor="experienceLevel">Experience level</label>
                <select
                  id="experienceLevel"
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </section>

            <section className="profile-section">
              <div className="profile-section-heading">
                <h2>Areas of interest *</h2>
                <p>Select the domains you would like to explore.</p>
              </div>

              <div className="profile-interest-grid">
                {interestsList.map((interest) => (
                  <label
                    key={interest}
                    className={`profile-interest-option ${
                      formData.interests.includes(interest)
                        ? "profile-interest-selected"
                        : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                    />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
            </section>

            <section className="profile-section">
              <div className="profile-section-heading">
                <h2>Collaboration preferences</h2>
                <p>Let others know how you want to contribute.</p>
              </div>

              <div className="profile-form-grid">
                <div className="profile-field">
                  <label htmlFor="preferredRole">Preferred role</label>
                  <select
                    id="preferredRole"
                    name="preferredRole"
                    value={formData.preferredRole}
                    onChange={handleChange}
                  >
                    <option value="Frontend Developer">
                      Frontend Developer
                    </option>
                    <option value="Backend Developer">
                      Backend Developer
                    </option>
                    <option value="Full Stack Developer">
                      Full Stack Developer
                    </option>
                    <option value="AI/ML Engineer">AI/ML Engineer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="IoT Developer">IoT Developer</option>
                  </select>
                </div>

                <div className="profile-field">
                  <label htmlFor="availability">Availability</label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                  >
                    <option value="Weekdays">Weekdays</option>
                    <option value="Weekends">Weekends</option>
                    <option value="Evenings">Evenings</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>
            </section>

            <section className="profile-section">
              <div className="profile-section-heading">
                <h2>Developer links</h2>
                <p>Share your work and projects with the community.</p>
              </div>

              <div className="profile-field">
                <label htmlFor="github">
                  <FaGithub />
                  GitHub profile
                </label>
                <input
                  id="github"
                  name="github"
                  type="url"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/username"
                />
              </div>

              <div className="profile-field profile-field-spaced">
                <label htmlFor="portfolio">
                  <FaGlobe />
                  Portfolio website
                </label>
                <input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </section>

            <div className="profile-form-actions">
              <button
                type="button"
                className="profile-cancel-button"
                onClick={() => navigate("/dashboard")}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="profile-save-button"
                disabled={isSaving}
              >
                <FaSave />
                {isSaving ? "Saving..." : "Save Profile"}
              </button>
            </div>
          </form>
        )}

        <footer className="profile-footer">
          HackMate © 2026 · Find your people. Build together.
        </footer>
      </main>
    </div>
  );
}

export default Profile;