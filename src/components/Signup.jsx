import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import phoneCart from "../assets/phone cart.webp";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    
    const user = { fullName, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");
    navigate("/login"); 
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={phoneCart} alt="Phone Cart" />
      </div>
      <div className="signup-form">
        <h2>Create Your Account</h2>
        <p className="subheading">Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
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
          <button type="submit">Create Account</button>
        </form>
        <p className="login-text">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}
