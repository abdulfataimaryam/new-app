import React from "react";

const categories = [
  { name: "Phones", icon: "📱" },
  { name: "Computers", icon: "💻" },
  { name: "SmartWatch", icon: "⌚" },
  { name: "Camera", icon: "📷" },
  { name: "HeadPhones", icon: "🎧" },
  { name: "Gaming", icon: "🎮" },
];

export default function Categories() {
  return (
    <section className="categories">
      <h3>Browse By Category</h3>
      <div className="category-grid">
        {categories.map((c, index) => (
          <div className="category-card" key={index}>
            <span className="icon">{c.icon}</span>
            <p>{c.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
