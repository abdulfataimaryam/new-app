import React from "react";
import { FaShippingFast, FaHeadset, FaUndo } from "react-icons/fa";

export default function Benefits() {
  const items = [
    { id: 1, icon: <FaShippingFast />, title: "FREE AND FAST DELIVERY", text: "Free delivery for all orders over $140" },
    { id: 2, icon: <FaHeadset />, title: "24/7 CUSTOMER SERVICE", text: "Friendly 24/7 customer support" },
    { id: 3, icon: <FaUndo />, title: "MONEY BACK GUARANTEE", text: "We return money within 30 days" },
  ];

  return (
    <section className="benefits">
      <div className="benefits-grid">
        {items.map((it) => (
          <div key={it.id} className="benefit-item">
            <div className="benefit-icon">{it.icon}</div>
            <h5>{it.title}</h5>
            <p>{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
