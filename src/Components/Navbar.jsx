import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';





const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#6495ED] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold tracking-wide">
          ASRAR<span className="text-black">'S</span> PORTFOLIO
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-black transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={toggleNav} className="md:hidden cursor-pointer text-xl">
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#6495ED] py-4 space-y-4 text-lg">
            <h1 className="text-red-500">Hello, Tailwind!</h1>

          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-black transition"
                onClick={() => setNavOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
