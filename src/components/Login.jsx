import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; 
import phoneCart from "../assets/phone cart.webp";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={phoneCart} alt="Phone Cart" />
      </div>
      <div className="signup-form">
        <h2>Log in to Exclusive</h2>
        <p className="subheading">Enter your login details below</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-actions">
            <button type="submit" className="login-button">Log In</button>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
        </form>
        <p className="login-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}
