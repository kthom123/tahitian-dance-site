import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery-section">
      <div className="social-links">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-icon" />
          インスタグラム
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="social-icon" />
          フェイスブック
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="social-icon" />
          ユーチューブ
        </a>
      </div>
    </section>
  );
}

export default Gallery;
