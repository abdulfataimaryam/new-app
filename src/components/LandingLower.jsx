import React from "react";
import ProductGrid from "./ProductGrid";
import FeaturedSection from "./FeaturedSection";
import Benefits from "./Benefits";
import "./LandingLower.css";
import ProductCard from "./ProductCard";


export default function LandingLower() {
  return (
    <div className="landing-lower">
      <ProductGrid />
      <FeaturedSection />
      <Benefits />
      <ProductCard/>
    </div>
  );
}
