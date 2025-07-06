import "./Navbar.css";


function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white">
        <div className="logo-title">
            <img src="/images/logo.png" alt="Logo" className="logo-img" />
        </div>
        <ul className="flex gap-6 text-lg font-medium">
            <li><a href="#home">ホーム</a></li>
            <li><a href="#about">教室紹介</a></li>
            <li><a href="#classes">クラス紹介</a></li>
            <li><a href="#instructor">講師紹介</a></li>
            <li><a href="#events">イベント出演情報</a></li>
            <li><a href="#trial-lesson">体験レッスン</a></li>
            <li><a href="#contact">お問合せ</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;
// This is a simple Navbar component for the Tahitian Dance School application.
// It includes a title and a placeholder for navigation links.