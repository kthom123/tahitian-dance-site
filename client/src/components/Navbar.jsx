import React from "react";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold">
        Avae Api
      </div>
      <ul className="flex gap-6 text-lg font-medium">
        <li><a href="#home">Home</a></li>
        <li><a href="#classes">Classes</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#signup">Sign Up</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
// This is a simple Navbar component for the Tahitian Dance School application.
// It includes a title and a placeholder for navigation links.