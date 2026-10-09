import "./Register.css";
import { FaRocket, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [agreeTerms, setAgreeTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setError("");
  };

  // Handle registration
  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");

    // Check password
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Check terms
    if (!agreeTerms) {
      setError("Please agree to the HackMate terms and conditions.");
      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password
        }
      );

      setSuccess(response.data);

      // Redirect to login after successful registration
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {

      if (err.response) {
        setError(
          typeof err.response.data === "string"
            ? err.response.data
            : "Registration failed."
        );
      } else {
        setError(
          "Unable to connect to the server. Please make sure Spring Boot is running."
        );
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      <div className="register-card">

        {/* Logo */}

        <div className="register-logo">
          <FaRocket />
          <span>HackMate</span>
        </div>

        {/* Heading */}

        <div className="register-header">
          <h1>Create your account</h1>

          <p>
            Start finding your perfect hackathon team.
          </p>
        </div>

        {/* Form */}

        <form
          className="register-form"
          onSubmit={handleSubmit}
        >

          {/* Full Name */}

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}

          <div className="form-group">
            <label>Password</label>

            <div className="password-input">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>
          </div>

          {/* Confirm Password */}

          <div className="form-group">
            <label>Confirm Password</label>

            <div className="password-input">

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword
                  ? <FaEyeSlash />
                  : <FaEye />}
              </button>

            </div>
          </div>

          {/* Terms */}

          <label className="terms">

            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) =>
                setAgreeTerms(e.target.checked)
              }
            />

            <span>
              I agree to the HackMate terms and conditions.
            </span>

          </label>

          {/* Error */}

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          {/* Success */}

          {success && (
            <div className="form-success">
              {success}
            </div>
          )}

          {/* Submit */}

          <button
            type="submit"
            className="register-submit"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        {/* Login */}

        <div className="login-link">

          Already have an account?

          <Link to="/login">
            {" "}Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Register;