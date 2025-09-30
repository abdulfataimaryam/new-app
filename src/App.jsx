import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            
            <Route 
              path="/login" 
              element={<Login setIsLoggedIn={setIsLoggedIn} />} 
            />
 

            <Route
              path="/landing"
              element={isLoggedIn ? <LandingPage /> : <Navigate to="/login" />}
            />

            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
