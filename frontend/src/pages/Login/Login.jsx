import "./Login.css";
import { FaRocket, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email: formData.email,
          password: formData.password
        }
      );

      // Get login response
      const data = response.data;

      // Save JWT token
      localStorage.setItem("token", data.token);

      // Save user information
      localStorage.setItem("userName", data.name);
      localStorage.setItem("userEmail", data.email);

      // Redirect after successful login
      navigate("/dashboard");

    } catch (err) {
      if (err.response) {
        setError(
          typeof err.response.data === "string"
            ? err.response.data
            : "Invalid email or password."
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
    <div className="login-page">

      <div className="login-card">

        {/* Logo */}
        <div className="login-logo">
          <FaRocket />
          <span>HackMate</span>
        </div>

        {/* Header */}
        <div className="login-header">
          <h1>Welcome back</h1>
          <p>Login to continue finding your perfect hackathon team.</p>
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>

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
                placeholder="Enter your password"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="login-submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Register Link */}
        <div className="register-link">
          Don't have an account?
          <Link to="/register">{" "}Create Account</Link>
        </div>

      </div>

    </div>
  );
}

export default Login;