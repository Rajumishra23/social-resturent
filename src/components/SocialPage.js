import React from "react";

const SocialPages = () => {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        
        {/* 🔹 Small Heading */}
        <h2 className="text-orange-500 text-sm uppercase tracking-widest font-bold">
          FOLLOW US
        </h2>

        {/* 🔹 Main Heading */}
        <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wider">
          SOCIAL PAGES
        </h1>
        {/* ✅ Line under SOCIAL PAGES */}
        <div className="w-24 h-[2px] bg-white mx-auto mt-4 mb-12"></div>

        {/* 🔹 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-black border border-gray-500 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition">
            <h3 className="text-orange-500 text-xl font-extrabold tracking-wider mb-4">
              @SOCIAL.OFFLINE
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              The Instagram page with every fun update about your creative neighbourhood place.
            </p>
            <button className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-bold tracking-wide hover:bg-white hover:text-black transition">
              FOLLOW THE PAGE
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-black border border-gray-500 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition">
            <h3 className="text-orange-500 text-xl font-extrabold tracking-wider mb-4">
              @LIVE.AT.SOCIAL
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              The Instagram page to keep tabs on all upcoming events & gigs.
            </p>
            <button className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-bold tracking-wide hover:bg-white hover:text-black transition">
              FOLLOW THE PAGE
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-black border border-gray-500 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition">
            <h3 className="text-orange-500 text-xl font-extrabold tracking-wider mb-4">
              WHATSAPP COMMUNITIES
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Our WhatsApp Community Channel will help you keep a closer eye on EVERYTHING SOCIAL!
            </p>
            <button className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-bold tracking-wide hover:bg-white hover:text-black transition">
              JOIN THE CHANNEL
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialPages;
