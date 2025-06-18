import "./Navbar.css";


function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold">
        Avae Api
      </div>
      <ul className="flex gap-6 text-lg font-medium justify-right">
        <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600 transition">About Us</a></li>
        <li><a href="#classes" className="hover:text-blue-600 transition">Classes</a></li>
        <li><a href="#instructor" className="hover:text-blue-600 transition">Instructor</a></li>
        <li><a href="#events" className="hover:text-blue-600 transition">Events</a></li>
        <li><a href="#trial lesson" className="hover:text-blue-600 transition">Trial Lesson</a></li>
        <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
// This is a simple Navbar component for the Tahitian Dance School application.
// It includes a title and a placeholder for navigation links.