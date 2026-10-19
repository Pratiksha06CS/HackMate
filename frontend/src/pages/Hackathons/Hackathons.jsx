import { useMemo, useState } from "react";

import {
  FaSearch,
  FaTrophy,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaFilter,
  FaUsers,
  FaCode,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Hackathons.css";

const hackathons = [
  {
    id: 1,
    name: "Smart India Hackathon",
    organizer: "Government of India",
    category: "Innovation",
    mode: "Hybrid",
    location: "India",
    date: "Check official website",
    description:
      "Develop innovative solutions to real-world problems presented by participating organizations.",
    tags: ["Innovation", "Problem Solving", "Teamwork"],
    url: "https://www.sih.gov.in/",
  },
  {
    id: 2,
    name: "Major League Hacking",
    organizer: "MLH",
    category: "Technology",
    mode: "Online",
    location: "Various locations",
    date: "View upcoming events",
    description:
      "Discover student hackathons, meet developers, and collaborate on creative technology projects.",
    tags: ["Web Development", "AI/ML", "Open Source"],
    url: "https://mlh.io/",
  },
  {
    id: 3,
    name: "Devpost Hackathons",
    organizer: "Devpost",
    category: "Technology",
    mode: "Online",
    location: "Online",
    date: "View upcoming events",
    description:
      "Explore hackathons across different domains and build projects with developers worldwide.",
    tags: ["Software", "AI", "Projects"],
    url: "https://devpost.com/hackathons",
  },
  {
    id: 4,
    name: "ETHGlobal",
    organizer: "ETHGlobal",
    category: "Blockchain",
    mode: "Online",
    location: "Various locations",
    date: "View upcoming events",
    description:
      "Explore events focused on blockchain, Ethereum, decentralized applications, and Web3.",
    tags: ["Blockchain", "Web3", "Smart Contracts"],
    url: "https://ethglobal.com/events",
  },
  {
    id: 5,
    name: "Unstop Hackathons",
    organizer: "Unstop",
    category: "Innovation",
    mode: "Online",
    location: "India",
    date: "View upcoming events",
    description:
      "Discover student competitions, innovation challenges, and opportunities from organizations.",
    tags: ["Students", "Innovation", "Career"],
    url: "https://unstop.com/hackathons",
  },
  {
    id: 6,
    name: "Kaggle Competitions",
    organizer: "Kaggle",
    category: "AI / ML",
    mode: "Online",
    location: "Online",
    date: "View current competitions",
    description:
      "Practice data science and machine learning through practical competitions and challenges.",
    tags: ["Python", "Machine Learning", "Data Science"],
    url: "https://www.kaggle.com/competitions",
  },
];

const categories = [
  "All Categories",
  "Technology",
  "AI / ML",
  "Blockchain",
  "Innovation",
];

const modes = ["All Modes", "Online", "In-person", "Hybrid"];

function Hackathons() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [mode, setMode] = useState("All Modes");

  const filteredHackathons = useMemo(() => {
    return hackathons.filter((hackathon) => {
      const searchableText = [
        hackathon.name,
        hackathon.organizer,
        hackathon.description,
        hackathon.location,
        ...hackathon.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(
        search.toLowerCase()
      );

      const matchesCategory =
        category === "All Categories" ||
        hackathon.category === category;

      const matchesMode =
        mode === "All Modes" ||
        hackathon.mode
          .toLowerCase()
          .includes(mode.toLowerCase());

      return matchesSearch && matchesCategory && matchesMode;
    });
  }, [search, category, mode]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setMode("All Modes");
  };

  return (
    <>
      <Navbar />

      <main className="hackathons-page">
        {/* Hero */}
        <section className="hackathons-hero">
          <div className="hackathons-hero-content">
            <span className="hackathons-badge">
              <FaTrophy />
              DISCOVER. COLLABORATE. BUILD.
            </span>

            <h1>
              Find Your Next
              <br />
              <span>Hackathon.</span>
            </h1>

            <p>
              Discover hackathon opportunities, explore new technologies,
              and find the perfect event to turn your ideas into reality.
            </p>

            <a
              href="#explore-hackathons"
              className="hackathons-primary-btn"
            >
              Explore Hackathons <FaLaptopCode />
            </a>

            <div className="hackathons-hero-note">
              <FaUsers />
              <span>
                Discover opportunities to build something amazing together.
              </span>
            </div>
          </div>

          {/* Simple Illustration */}
          <div className="hackathons-hero-visual">
            <div className="hackathons-visual-card">
              <div className="hackathons-visual-icon">
                <FaTrophy />
              </div>

              <span className="hackathons-visual-label">
                YOUR NEXT CHALLENGE
              </span>

              <h3>Ideas into Impact</h3>

              <p>
                Meet talented developers, solve real-world problems, and
                create projects worth showcasing.
              </p>

              <div className="hackathons-visual-points">
                <div>
                  <FaUsers />
                  <span>Find teammates</span>
                </div>

                <div>
                  <FaCode />
                  <span>Build projects</span>
                </div>

                <div>
                  <FaTrophy />
                  <span>Showcase your work</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Section */}
        <section
          className="hackathons-explore"
          id="explore-hackathons"
        >
          <div className="hackathons-section-heading">
            <span className="hackathons-eyebrow">
              EXPLORE OPPORTUNITIES
            </span>

            <h2>
              Find an event that
              <br />
              <span>matches your interests.</span>
            </h2>

            <p>
              Search hackathon platforms and discover opportunities
              across different technologies and domains.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="hackathons-filter-panel">
            <div className="hackathons-search-box">
              <FaSearch />

              <input
                type="text"
                placeholder="Search hackathons, technologies, or organizers..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search hackathons"
              />

              {search && (
                <button
                  type="button"
                  className="hackathons-clear-search"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div className="hackathons-select-wrapper">
              <FaFilter />

              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                aria-label="Filter by category"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="hackathons-select-wrapper">
              <FaMapMarkerAlt />

              <select
                value={mode}
                onChange={(event) => setMode(event.target.value)}
                aria-label="Filter by mode"
              >
                {modes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Heading */}
          <div className="hackathons-results-heading">
            <div>
              <h3>Explore Hackathon Platforms</h3>

              <p>
                {filteredHackathons.length}{" "}
                {filteredHackathons.length === 1
                  ? "result"
                  : "results"}{" "}
                found
              </p>
            </div>

            <span className="hackathons-results-label">
              <span></span>
              Explore opportunities
            </span>
          </div>

          {/* Cards */}
          {filteredHackathons.length > 0 ? (
            <div className="hackathons-grid">
              {filteredHackathons.map((hackathon) => (
                <article
                  className="hackathon-card"
                  key={hackathon.id}
                >
                  <div className="hackathon-card-top">
                    <div className="hackathon-card-icon">
                      <FaLaptopCode />
                    </div>

                    <span className="hackathon-category">
                      {hackathon.category}
                    </span>
                  </div>

                  <h3>{hackathon.name}</h3>

                  <p className="hackathon-organizer">
                    Organized by {hackathon.organizer}
                  </p>

                  <p className="hackathon-description">
                    {hackathon.description}
                  </p>

                  <div className="hackathon-meta">
                    <div>
                      <FaCalendarAlt />
                      <span>{hackathon.date}</span>
                    </div>

                    <div>
                      <FaMapMarkerAlt />
                      <span>{hackathon.mode}</span>
                    </div>
                  </div>

                  <div className="hackathon-tags">
                    {hackathon.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="hackathon-card-footer">
                    <span className="hackathon-location">
                      {hackathon.location}
                    </span>

                    <a
                      href={hackathon.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hackathon-visit-btn"
                    >
                      Explore <FaExternalLinkAlt />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="hackathons-empty-state">
              <div>
                <FaSearch />
              </div>

              <h3>No matching opportunities found</h3>

              <p>
                Try a different search term or adjust your filters.
              </p>

              <button type="button" onClick={clearFilters}>
                Clear All Filters
              </button>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="hackathons-cta">
          <div className="hackathons-cta-content">
            <span className="hackathons-eyebrow">
              EVERY GREAT PROJECT STARTS SOMEWHERE
            </span>

            <h2>
              Have an idea?
              <br />
              <span>Find your team on HackMate.</span>
            </h2>

            <p>
              Create your developer profile and connect with people who
              share your passion for building something new.
            </p>

            <Link
              to="/register"
              className="hackathons-primary-btn"
            >
              Get Started <FaUsers />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Hackathons;