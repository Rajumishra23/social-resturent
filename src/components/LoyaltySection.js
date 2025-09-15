import React from "react";

const LoyaltySection = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row w-full">
        
        {/* Left Side - Orange BG with Video */}
        <div className="bg-orange-500 w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-lg aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/h2zkV-l_TbY" // Restaurant ambience video
              title="Restaurant Ambience Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Side - Black BG with Text */}
        <div className="bg-black w-full md:w-1/2 text-white p-8 flex flex-col justify-center">
          <h3 className="text-orange-500 text-sm uppercase tracking-widest font-semibold">
            Loyalty Program
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            The Social Club
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-200">
            The ultimate loyalty program that never disappoints. Get exclusive rewards every time you visit your neighbourhood hangout place!
          </p>
          <button className="mt-6 bg-black border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Explore Program
          </button>
        </div>

      </div>
    </section>
  );
};

export default LoyaltySection;