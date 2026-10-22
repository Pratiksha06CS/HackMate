import { useState } from "react";
import {
FaEnvelope,
FaMapMarkerAlt,
FaPaperPlane,
FaPhoneAlt,
} from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";

function Contact() {
const [formData, setFormData] = useState({
name: "",
email: "",
subject: "",
message: "",
});

const [status, setStatus] = useState({
type: "",
message: "",
});

const handleChange = (event) => {
const { name, value } = event.target;

setFormData((previous) => ({
  ...previous,
  [name]: value,
}));

setStatus({ type: "", message: "" });


};

const handleSubmit = (event) => {
event.preventDefault();

if (
  !formData.name.trim() ||
  !formData.email.trim() ||
  !formData.subject.trim() ||
  !formData.message.trim()
) {
  setStatus({
    type: "error",
    message: "Please fill in all fields.",
  });
  return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(formData.email)) {
  setStatus({
    type: "error",
    message: "Please enter a valid email address.",
  });
  return;
}

// Frontend demonstration only; this does not send an email.
setStatus({
  type: "success",
  message:
    "Your form passed validation! Message delivery is not connected yet.",
});

setFormData({
  name: "",
  email: "",
  subject: "",
  message: "",
});


};

return (
<> <Navbar />


  <main className="contact-page">
    <section className="contact-hero">
      <span className="contact-eyebrow">GET IN TOUCH</span>

      <h1>
        Let's Start a <span>Conversation</span>
      </h1>

      <p>
        Have a question, suggestion, or idea? We'd love to hear
        from you. Send us a message and let us know how we can help.
      </p>
    </section>

    <section className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>

        <p className="contact-info-description">
          Reach out to us with your questions or feedback about
          HackMate.
        </p>

        <div className="contact-info-item">
          <span className="contact-info-icon">
            <FaEnvelope />
          </span>

          <div>
            <h3>Email</h3>
            <p>Use the contact form to send us a message.</p>
          </div>
        </div>

        <div className="contact-info-item">
          <span className="contact-info-icon">
            <FaMapMarkerAlt />
          </span>

          <div>
            <h3>Platform</h3>
            <p>Connect with developers through HackMate.</p>
          </div>
        </div>

        <div className="contact-info-item">
          <span className="contact-info-icon">
            <FaPhoneAlt />
          </span>

          <div>
            <h3>Support</h3>
            <p>Describe your issue in the message field.</p>
          </div>
        </div>

        <div className="contact-decoration">
          <FaPaperPlane />
        </div>
      </div>

      <div className="contact-form-card">
        <h2>Send Us a Message</h2>

        <p className="contact-form-description">
          Fill out the form below.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="contact-name">Full Name</label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                maxLength={100}
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-email">Email Address</label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                maxLength={254}
                required
              />
            </div>
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact-subject">Subject</label>

            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="What is this about?"
              value={formData.subject}
              onChange={handleChange}
              maxLength={150}
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact-message">Message</label>

            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              maxLength={3000}
              required
            />
          </div>

          {status.message && (
            <div
              className={`contact-status ${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </div>
          )}

          <button type="submit" className="contact-submit-btn">
            <span>Send Message</span>
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  </main>

  <Footer />
</>


);
}

export default Contact;
