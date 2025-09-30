import React from "react";
import { FaApple } from "react-icons/fa";  // ✅ Apple logo
import iphoneImg from "../assets/iphone.webp";

export default function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="banner-content">
        <h2>
          <FaApple className="apple-icon" /> iPhone 14 Series
        </h2>
        <p>Up to 10% off Voucher</p>
        <button>Shop Now →</button>
      </div>
      <img src={iphoneImg} alt="iPhone" />
    </div>
  );
}
