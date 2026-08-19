import "./Register.css";
import { FaRocket, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

        <form className="register-form">

          {/* Full Name */}

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

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
            <label>Password</label>

            <div className="password-input">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
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
                placeholder="Confirm your password"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>
          </div>

          {/* Terms */}

          <label className="terms">
            <input type="checkbox" />

            <span>
              I agree to the HackMate terms and conditions.
            </span>
          </label>

          {/* Submit */}

          <button type="submit" className="register-submit">
            Create Account
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