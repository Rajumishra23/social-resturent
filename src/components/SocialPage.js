import React from "react";

const SocialPages = () => {
  return (
    <section className="w-full bg-black py-12">
      <div className="max-w-6xl mx-auto text-center px-6">
        
        {/* Heading */}
        <h2 className="text-orange-500 text-sm uppercase tracking-widest font-semibold">
          FOLLOW US
        </h2>
        <h1 className="text-white text-3xl md:text-4xl  font-extrabold mt-2 mb-10">
          SOCIAL PAGES
        </h1>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-black border border-gray-700 p-5 rounded-lg flex flex-col justify-between text-center">
            <div>
              <h3 className="text-orange-500 text-lg font-bold mb-2">
                @SOCIAL.OFFLINE
              </h3>
              <p className="text-gray-400 mb-6">
                The Instagram page with every fun update about your creative neighbourhood place.
              </p>
            </div>
            <button className="bg-black border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              FOLLOW THE PAGE
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-black border border-gray-700 p-5 rounded-lg flex flex-col justify-between text-center">
            <div>
              <h3 className="text-orange-500 text-lg font-bold mb-2">
                @LIVE.AT.SOCIAL
              </h3>
              <p className="text-gray-400 mb-6">
                The Instagram page to keep tabs on all upcoming events & gigs.
              </p>
            </div>
            <button className="bg-black border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              FOLLOW THE PAGE
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-black border border-gray-700 p-5 rounded-lg flex flex-col justify-between text-center">
            <div>
              <h3 className="text-orange-500 text-lg font-bold mb-2">
                WHATSAPP COMMUNITIES
              </h3>
              <p className="text-gray-400 mb-6">
                Our WhatsApp Community Channel will help you keep a closer eye on EVERYTHING SOCIAL!
              </p>
            </div>
            <button className="bg-black border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              JOIN THE CHANNEL
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialPages;