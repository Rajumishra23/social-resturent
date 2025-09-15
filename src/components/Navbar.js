import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
       {/* Logo + Tagline */}
<div className="flex flex-col items-center">
  <h1 className="text-2xl md:text-4xl font-extrabold tracking-widest bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent drop-shadow-lg">
    SOCIAL
  </h1>
  <span className="mt-1 text-sm md:text-base text-gray-400 italic tracking-wide">
    ✦ Taste the Luxury ✦
  </span>
</div>


        {/* Nav Links */}
        <nav className="flex items-center font-semibold gap-5">
          <a href="/" className="hover:text-yellow-400">HOME</a>
        <a href="/Social Club" className="hover:text-yellow-400">SOCIAL CLUB</a>
        <a href="/Social work" className="hover:text-yellow-400">SOCIAL WORK</a>
        <a href="/About" className="hover:text-yellow-400">ABOUT</a>
        <a href="/Order" className="hover:text-yellow-400">ORDER</a>
        <a href="/Event" className="hover:text-yellow-400">EVENT</a>
        </nav>

        {/* Reserve Table Button */}
        <a
          href="/reserve"
          className="bg-amber-700 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-amber-800 transition"
        >
          Reserve Table
        </a>
      </div>
    </header>
  );
};

export default Navbar;