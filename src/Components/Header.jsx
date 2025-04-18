import React from "react";

function Header() {
  return (
    <header className="bg-indigo-600 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Asrar's Portfolio</h1>
        <ul className="flex space-x-6 text-white font-medium">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
