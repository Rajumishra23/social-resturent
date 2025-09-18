import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-amber-700 font-bold border-b-2 border-amber-700"
      : "hover:text-yellow-400";

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-1">
        
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
          <NavLink to="/" className={navLinkClass}>HOME</NavLink>
          <NavLink to="/social-club" className={navLinkClass}>SOCIAL CLUB</NavLink>
          <NavLink to="/social-work" className={navLinkClass}>SOCIAL WORK</NavLink>
          <NavLink to="/about" className={navLinkClass}>ABOUT</NavLink>
          <NavLink to="/order" className={navLinkClass}>ORDER</NavLink>
          <NavLink to="/event" className={navLinkClass}>EVENT</NavLink>
        </nav>

        {/* Reserve Table Button (Desktop) */}
        <NavLink
          to="/reserve"
          className="hidden md:inline-block bg-amber-700 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-amber-800 transition"
        >
          Reserve Table
        </NavLink>

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
          <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>HOME</NavLink>
          <NavLink to="/social-club" className={navLinkClass} onClick={() => setIsOpen(false)}>SOCIAL CLUB</NavLink>
          <NavLink to="/social-work" className={navLinkClass} onClick={() => setIsOpen(false)}>SOCIAL WORK</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>ABOUT</NavLink>
          <NavLink to="/order" className={navLinkClass} onClick={() => setIsOpen(false)}>ORDER</NavLink>
          <NavLink to="/event" className={navLinkClass} onClick={() => setIsOpen(false)}>EVENT</NavLink>

          {/* Mobile Button */}
          <NavLink
            to="/reserve"
            className="bg-amber-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-amber-800 transition"
            onClick={() => setIsOpen(false)}
          >
            Reserve Table
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
