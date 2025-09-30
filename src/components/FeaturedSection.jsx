import React from "react";
import big from "../assets/playstation.webp";
import women from "../assets/fashionwoman.webp";
import speakers from "../assets/speaker.webp";
import perfume from "../assets/perf.webp";

export default function FeaturedSection() {
  return (
    <section className="featured-section">
      <div className="featured-pill">Featured</div>
      <h3 className="featured-title">New Arrival</h3>

      <div className="featured-grid">
        <div className="featured-left" style={{ backgroundImage: `url(${big})` }}>
          <div className="featured-overlay">
            <small>PlayStation 5</small>
            <h4>Black and White version of the PS5<br />coming out on sale.</h4>
            <button className="featured-btn">Shop Now</button>
          </div>
        </div>

        <div className="featured-right">
          <div className="featured-top" style={{ backgroundImage: `url(${women})` }}>
            <div className="featured-overlay small">
              <h4>Women's Collections</h4>
              <p>Featured woman collections that give you another vibe.</p>
              <button className="featured-btn small">Shop Now</button>
            </div>
          </div>

          <div className="featured-bottom">
            <div className="small-card" style={{ backgroundImage: `url(${speakers})` }}>
              <div className="overlay-small">Speakers<br /><button className="featured-btn tiny">Shop Now</button></div>
            </div>
            <div className="small-card" style={{ backgroundImage: `url(${perfume})` }}>
              <div className="overlay-small">Perfume<br /><button className="featured-btn tiny">Shop Now</button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
