import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      {/* Hamburger Button */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <ul>
          <li><a href="#home" onClick={() => setOpen(false)}>ホーム</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>教室紹介</a></li>
          <li><a href="#classes" onClick={() => setOpen(false)}>クラス紹介</a></li>
          <li><a href="#instructor" onClick={() => setOpen(false)}>講師紹介</a></li>
          <li><a href="#events" onClick={() => setOpen(false)}>イベント出演情報</a></li>
          <li><a href="#trial-lesson" onClick={() => setOpen(false)}>体験レッスン</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>お問合せ</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
