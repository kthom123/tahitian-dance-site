import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      {/* Hamburger Button */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <ul>
          <li><a href="#home">ホーム</a></li>
          <li><a href="#about">教室紹介</a></li>
          <li><a href="#classes">クラス紹介</a></li>
          <li><a href="#instructor">講師紹介</a></li>
          <li><a href="#events">イベント出演情報</a></li>
          <li><a href="#trial-lesson">体験レッスン</a></li>
          <li><a href="#contact">お問合せ</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
