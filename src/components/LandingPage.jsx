// LandingPage.jsx
import React from "react";
import Sidebar from "./SideBar";
import HeroBanner from "./HeroBanner";
import FlashSales from "./FlashSales";
import Categories from "./Categories";
import LandingLower from "./LandingLower";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      {/* Sidebar + Hero in one row */}
      <div className="hero-row">
        <Sidebar />
        <HeroBanner />
      </div>

      {/* Rest of the sections full width */}
      <FlashSales />
      <Categories />
      <LandingLower />
    </div>
  );
}
