import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery-section">
      <img src="/images/gallery1.png" alt="Gallery 1" className="gallery-img" />
      <img src="/images/gallery2.png" alt="Gallery 2" className="gallery-img" />
      <img src="/images/gallery3.png" alt="Gallery 3" className="gallery-img" />
    </section>
  );
}

export default Gallery;
