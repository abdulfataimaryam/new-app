import React from "react";
import ProductCard from "./ProductCard";

// replace these imports with your product images in src/assets
import p1 from "../assets/dog.webp";
import p2 from "../assets/camera.webp";
import p3 from "../assets/laptop.webp";
import p4 from "../assets/curology.webp";
import p5 from "../assets/k-car.webp";
import p6 from "../assets/soccer.webp";
import p7 from "../assets/G-29.webp";
import p8 from "../assets/jacket.webp";

export default function ProductGrid() {
  const products = [
    { id: 1, name: "Breed Dry Dog Food", newPrice: 100, oldPrice: 120, img: p1, rating: 4.6, reviews: 35, badge: null, colors: ["#e60023", "#333"] },
    { id: 2, name: "CANON EOS DSLR Camera", newPrice: 380, oldPrice: 420, img: p2, rating: 4.5, reviews: 95, showAddOverlay: true, colors: ["#000"] },
    { id: 3, name: "ASUS FHD Gaming Laptop", newPrice: 700, oldPrice: 750, img: p3, rating: 4.7, reviews: 325, colors: ["#0f0"] },
    { id: 4, name: "Curology Product Set", newPrice: 500, oldPrice: 560, img: p4, rating: 4.4, reviews: 145 },
    { id: 5, name: "Kids Electric Car", newPrice: 960, oldPrice: 1160, img: p5, rating: 4.3, reviews: 65, badge: "NEW", colors: ["#e60023"] },
    { id: 6, name: "Jr. Zoom Soccer Cleats", newPrice: 1160, oldPrice: 1260, img: p6, rating: 4.0, reviews: 35 },
    { id: 7, name: "GPII Shooter USB Gamepad", newPrice: 660, oldPrice: 800, img: p7, rating: 4.2, reviews: 55, badge: "NEW" },
    { id: 8, name: "Quilted Satin Jacket", newPrice: 660, oldPrice: 720, img: p8, rating: 4.1, reviews: 55 }
  ];

  return (
    <section className="pl-section">
      <div className="pl-header">
        <div className="pl-left">
          <span className="pl-pill">Our Products</span>
          <h2 className="pl-title-main">Explore Our Products</h2>
        </div>

        <div className="pl-arrows">
          <button className="arrow">‹</button>
          <button className="arrow">›</button>
        </div>
      </div>

      <div className="pl-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="pl-viewall">
        <button className="view-all-btn">View All Products</button>
      </div>
    </section>
  );
}
