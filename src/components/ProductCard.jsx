import React from "react";
import { FaRegHeart, FaRegEye } from "react-icons/fa";

export default function ProductCard({ product }) {
  // Guard clause: return null if product is not defined
  if (!product) return null;

  const format = (n) =>
    typeof n === "number"
      ? n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
      : n;

  return (
    <article className="pl-card">
      {/* top-left badge & top-right action icons */}
      <div className="pl-card-top">
        {product.badge && <span className="pl-badge">{product.badge}</span>}

        <div className="pl-icons">
          <button aria-label="wishlist" className="icon-btn"><FaRegHeart /></button>
          <button aria-label="quick-view" className="icon-btn"><FaRegEye /></button>
        </div>
      </div>

      {/* image */}
      <div className="pl-img-wrap">
        {product.img ? (
          <img src={product.img} alt={product.name || "Product"} className="pl-img" />
        ) : (
          <div className="pl-img-placeholder">No Image</div>
        )}
        {product.showAddOverlay && <div className="add-overlay">Add To Cart</div>}
      </div>

      {/* body */}
      <div className="pl-body">
        <h4 className="pl-title">{product.name || "No Name"}</h4>

        <div className="pl-rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < Math.round(product.rating || 0) ? "star filled" : "star"}>★</span>
          ))}
          <span className="pl-rating-count"> ({product.reviews || 0})</span>
        </div>

        <div className="pl-price-row">
          <span className="pl-price-new">{format(product.newPrice || 0)}</span>
          <span className="pl-price-old">{format(product.oldPrice || 0)}</span>
        </div>

        {/* color dots example */}
        {product.colors && (
          <div className="pl-color-dots">
            {product.colors.map((c, idx) => (
              <span key={idx} className="dot" style={{ background: c }} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
