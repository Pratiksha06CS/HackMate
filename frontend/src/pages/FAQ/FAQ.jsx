import { useState } from "react";
import {
FaChevronDown,
FaSearch,
FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./FAQ.css";

const faqData = [
{
category: "Getting Started",
question: "What is HackMate?",
answer:
"HackMate is a platform designed to help developers connect with like-minded people, discover hackathons, and find suitable teammates for collaborative projects.",
},
{
category: "Getting Started",
question: "How do I create an account?",
answer:
"Click Get Started, complete the registration form, and log in with your credentials. You can then complete your developer profile.",
},
{
category: "Profile",
question: "Why should I complete my developer profile?",
answer:
"Your profile helps other developers understand your technical skills, interests, experience level, and preferred roles when looking for potential teammates.",
},
{
category: "Teams",
question: "How can I find teammates?",
answer:
"The Find Teammates feature is intended to help you discover developers based on their skills, interests, and profiles. Availability depends on the features currently enabled in HackMate.",
},
{
category: "Teams",
question: "Can I collaborate with developers who have different skills?",
answer:
"Yes. Combining frontend, backend, AI/ML, design, and other technical skills can help create a balanced team for a project or hackathon.",
},
{
category: "Hackathons",
question: "Can I discover hackathons on HackMate?",
answer:
"The Hackathons page provides a directory of hackathon platforms and example listings. Check the organizer's official website for current events, deadlines, eligibility, and registration details.",
},
{
category: "Account",
question: "Is creating a profile enough to find teammates?",
answer:
"Completing your profile is an important first step. Finding and connecting with other developers also depends on the discovery and team-request features available in the application.",
},
{
category: "Account",
question: "What should I do if I cannot log in?",
answer:
"Check that your email and password are correct and that the backend service is running. If the problem continues, contact the HackMate support team.",
},
];

function FAQ() {
const [search, setSearch] = useState("");
const [activeIndex, setActiveIndex] = useState(null);

const filteredFAQs = faqData.filter((faq) => {
const query = search.toLowerCase();


return (
  faq.question.toLowerCase().includes(query) ||
  faq.answer.toLowerCase().includes(query) ||
  faq.category.toLowerCase().includes(query)
);
});

return (
<> <Navbar />
  <main className="faq-page">
    <section className="faq-hero">
      <div className="faq-hero-icon">
        <FaQuestionCircle />
      </div>

      <p className="faq-eyebrow">HELP CENTER</p>

      <h1>
        Frequently Asked <span>Questions</span>
      </h1>

      <p className="faq-hero-description">
        Find answers to common questions about HackMate,
        developer profiles, teams, and hackathons.
      </p>

      <div className="faq-search">
        <FaSearch />

        <input
          type="text"
          placeholder="Search your question..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setActiveIndex(null);
          }}
          aria-label="Search frequently asked questions"
        />
      </div>
    </section>

    <section className="faq-content">
      <div className="faq-section-heading">
        <h2>How can we help you?</h2>
        <p>
          {filteredFAQs.length} question
          {filteredFAQs.length !== 1 ? "s" : ""} found
        </p>
      </div>

      <div className="faq-list">
        {filteredFAQs.map((faq, index) => (
          <article className="faq-item" key={faq.question}>
            <button
              type="button"
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() =>
                setActiveIndex(
                  activeIndex === index ? null : index
                )
              }
              aria-expanded={activeIndex === index}
            >
              <span className="faq-question-text">
                <span className="faq-category">
                  {faq.category}
                </span>
                {faq.question}
              </span>

              <FaChevronDown
                className={`faq-chevron ${
                  activeIndex === index ? "rotated" : ""
                }`}
              />
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </article>
        ))}

        {filteredFAQs.length === 0 && (
          <div className="faq-empty">
            <FaSearch />
            <h3>No matching questions found</h3>
            <p>Try a different keyword to find your answer.</p>

            <button
              type="button"
              onClick={() => setSearch("")}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>

    <section className="faq-contact">
      <h2>Still have questions?</h2>

      <p>
        Can't find the answer you're looking for?
        Get in touch with us.
      </p>

      <Link to="/contact" className="faq-contact-button">
        Contact Us
      </Link>
    </section>
  </main>

  <Footer />
</>


);
}

export default FAQ;
