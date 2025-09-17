import React from "react";

const LoyaltySection = () => {
  return (
    <section className="w-full min-h-[650px] md:min-h-[750px] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        
        {/* 🔹 Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Introducing the <span className="text-orange-500">Social Club</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            Your ultimate loyalty experience — rewards, perks, and exclusive benefits every time you visit.
          </p>
        </div>

        {/* 🔹 Content Section */}
        <div className="flex flex-col md:flex-row w-full h-full">
          
          {/* Left Side - Orange BG with Video */}
          <div className="bg-orange-500 w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
            <div className="w-full max-w-2xl aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-xl shadow-2xl"
                src="https://www.youtube.com/embed/h2zkV-l_TbY"
                title="Restaurant Ambience Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Side - Black BG with Text */}
          <div className="bg-black w-full md:w-1/2 text-white p-6 md:p-16 flex flex-col justify-center">
            <h3 className="text-orange-500 text-base md:text-lg uppercase tracking-widest font-semibold">
              Loyalty Program
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 leading-snug">
              The Social Club
            </h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-300 max-w-xl">
              The ultimate loyalty program that never disappoints. Get exclusive rewards every time you visit your neighbourhood hangout place!
            </p>
            <button className="mt-8 bg-black border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition text-lg">
              Explore Program
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LoyaltySection;
