import "./Login.css";
import { FaRocket, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

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

          <p>
            Sign in to continue finding your perfect team.
          </p>
        </div>

        {/* Form */}
        <form className="login-form">

          {/* Email */}
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="form-group">

            <div className="password-label">
              <label>Password</label>

              <a href="#">
                Forgot password?
              </a>
            </div>

            <div className="password-input">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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

          {/* Remember Me */}
          <label className="remember-me">

            <input type="checkbox" />

            <span>Remember me</span>

          </label>

          {/* Login */}
          <button
            type="submit"
            className="login-submit"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <div className="register-link">

          Don't have an account?

          <Link to="/register">
            {" "}Create Account
            </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;