import React, { useState, useEffect } from "react";

const InstagramSection = () => {
  const videos = [
    "/Videos/videos1.mp4",
    "/Videos/videos2.mp4",
    "/Videos/videos3.mp4",
    "/Videos/videos4.mp4",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 sec auto change
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="py-16 bg-black">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-orange-500 text-sm md:text-base font-medium tracking-widest">
          CHECK OUR REELS
        </h2>
        <h1 className="text-white text-3xl md:text-4xl font-bold mt-2">
          INSTAGRAM VIDEOS
        </h1>
        <p className="text-gray-400 text-sm md:text-base mt-3 max-w-3xl mx-auto">
          Get a sneak peek of the Social vibe straight from our Instagram reels!
        </p>
      </div>

      {/* Slider Container */}
      <div className="w-full max-w-7xl mx-auto relative px-4">
        {/* Video */}
        <div className="w-full h-[550px] md:h-[700px] rounded-2xl overflow-hidden shadow-xl">
          <video
            src={videos[current]}
            autoPlay
            muted
            loop
            controls
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-3">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index ? "bg-orange-500" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
