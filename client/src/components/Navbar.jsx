import "./Navbar.css";


function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white">
        <div className="logo-title">
            <img src="/images/logo.png" alt="Logo" className="logo-img" />
        </div>
        <ul className="flex gap-6 text-lg font-medium">
            <li><a href="#home" className="hover:text-blue-600 transition">ホーム</a></li>
            <li><a href="#about" className="hover:text-blue-600 transition">教室紹介</a></li>
            <li><a href="#classes" className="hover:text-blue-600 transition">クラス紹介</a></li>
            <li><a href="#instructor" className="hover:text-blue-600 transition">講師紹介</a></li>
            <li><a href="#events" className="hover:text-blue-600 transition">イベント出演情報</a></li>
            <li><a href="#trial lesson" className="hover:text-blue-600 transition">体験レッスン</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition">お問合せ</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;
// This is a simple Navbar component for the Tahitian Dance School application.
// It includes a title and a placeholder for navigation links.