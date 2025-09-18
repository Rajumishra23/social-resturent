import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-widest bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent drop-shadow-lg">
            SOCIAL
          </h1>
          <span className="mt-1 text-sm md:text-base text-gray-400 italic tracking-wide">
            ✦ Taste the Luxury ✦
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center font-semibold gap-7">
          <a href="/" className="hover:text-yellow-400">HOME</a>
          <a href="/Social Club" className="hover:text-yellow-400">SOCIAL CLUB</a>
          <a href="/Social work" className="hover:text-yellow-400">SOCIAL WORK</a>
          <a href="/About" className="hover:text-yellow-400">ABOUT</a>
          <a href="/Order" className="hover:text-yellow-400">ORDER</a>
          <a href="/Event" className="hover:text-yellow-400">EVENT</a>
        </nav>

        {/* Reserve Table Button (Desktop) */}
        <a
          href="/reserve"
          className="hidden md:inline-block bg-amber-700 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-amber-800 transition"
        >
          Reserve Table
        </a>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-amber-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 flex flex-col items-center space-y-6">
          <a href="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>HOME</a>
          <a href="/Social Club" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>SOCIAL CLUB</a>
          <a href="/Social work" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>SOCIAL WORK</a>
          <a href="/About" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>ABOUT</a>
          <a href="/Order" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>ORDER</a>
          <a href="/Event" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>EVENT</a>

          {/* Mobile Button */}
          <a
            href="/reserve"
            className="bg-amber-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-amber-800 transition"
            onClick={() => setIsOpen(false)}
          >
            Reserve Table
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
