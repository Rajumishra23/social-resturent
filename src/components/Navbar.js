import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "bg-gradient-to-r from-orange-400 to-amber-700 text-white font-bold px-4 py-1 rounded-full shadow-md transition border-2 border-white"
      : "hover:bg-orange-100 hover:text-amber-700 px-4 py-1 rounded-full transition";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Overlay for better contrast - now covers full width */}
      <div className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-sm -z-10"></div>
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-2 py-1">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src="logo.webp"
            alt="Pulp The Delicacy Logo"
            className="w-32 h-16 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] rounded-xl"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center font-semibold gap-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
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
          className="hidden md:inline-block bg-gradient-to-r from-orange-500 to-amber-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:bg-amber-800 transition border border-white/70 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          Reserve Table
        </NavLink>

        {/* Mobile Hamburger Icon */}
        <button
          className={`md:hidden text-3xl text-white p-2 rounded-full shadow-lg transition ${isOpen ? "bg-orange-500" : "bg-amber-700"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-orange-100 via-yellow-200 to-amber-200 shadow-xl px-6 py-6 flex flex-col items-center space-y-6 rounded-b-3xl animate-slideDown z-50">
          <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>HOME</NavLink>
          <NavLink to="/social-club" className={navLinkClass} onClick={() => setIsOpen(false)}>SOCIAL CLUB</NavLink>
          <NavLink to="/social-work" className={navLinkClass} onClick={() => setIsOpen(false)}>SOCIAL WORK</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>ABOUT</NavLink>
          <NavLink to="/order" className={navLinkClass} onClick={() => setIsOpen(false)}>ORDER</NavLink>
          <NavLink to="/event" className={navLinkClass} onClick={() => setIsOpen(false)}>EVENT</NavLink>

          {/* Mobile Button */}
          <NavLink
            to="/reserve"
            className="bg-gradient-to-r from-orange-500 to-amber-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
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