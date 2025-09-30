import React, { useState, useEffect } from "react";
import gamepadImg from "../assets/G-29.webp";
import keyboardImg from "../assets/keyboard.webp";
import monitorImg from "../assets/monitor.webp";
import chairImg from "../assets/chair.webp";

export default function FlashSales() {
  // 📌 Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date (3 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 📌 Products Data
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      img: gamepadImg,
      oldPrice: "$120",
      newPrice: "$100",
      rating: 4,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      img: keyboardImg,
      oldPrice: "$60",
      newPrice: "$40",
      rating: 5,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      img: monitorImg,
      oldPrice: "$400",
      newPrice: "$370",
      rating: 3,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      img: chairImg,
      oldPrice: "$200",
      newPrice: "$180",
      rating: 4,
    },
  ];

  return (
    <section className="flash-sales">
      {/* Countdown Header */}
      <div className="flash-header">
        <h2>Flash Sales</h2>
        <div className="countdown">
          <div>
            <span>{String(timeLeft.days).padStart(2, "0")}</span>
            <p>Days</p>
          </div>
          <div>
            <span>{String(timeLeft.hours).padStart(2, "0")}</span>
            <p>Hours</p>
          </div>
          <div>
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
            <p>Minutes</p>
          </div>
          <div>
            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
            <p>Seconds</p>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="flash-products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-img" />
            <h3 className="product-name">{product.name}</h3>

            {/* ⭐️ Ratings */}
            <div className="product-rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < product.rating ? "star filled" : "star"}>
                  ★
                </span>
              ))}
            </div>

            {/* Prices */}
            <div className="product-prices">
              <span className="old-price">{product.oldPrice}</span>
              <span className="new-price">{product.newPrice}</span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="view-all">
        <button
          className="view-all-btn"
          onClick={() => {
            const section = document.getElementById("categories");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          View All Products
        </button>
      </div>
    </section>
  );
}