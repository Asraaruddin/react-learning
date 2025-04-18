// src/Components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-400 py-6 mt-10 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Asrar Uddin. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/Asraaruddin" target="_blank" className="hover:text-white">
          GitHub
        </a>
        <span>|</span>
        <a href="https://linkedin.com/in/asrarudd1n" target="_blank" className="hover:text-white">
          LinkedIn
        </a>
        <span>|</span>
        <a href="mailto:asraruddin000@gmail.com" className="hover:text-white">
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
