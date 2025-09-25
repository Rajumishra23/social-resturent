import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const slides = [
    { img: "/1.jpg", caption: "Neon Nights" },
    { img: "/2.jpg", caption: "Signature Cocktails" },
    { img: "3.jpg", caption: "Live DJ Party" },
    { img: "4.jpg", caption: "Dance & Vibes" },
    { img: "5.jpg", caption: "Midnight Specials" },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 sec
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="w-full bg-black">
      <div className="relative w-full h-[70vh] md:h-[90vh]">
        {/* Image */}
        <img
          src={slides[current].img}
          alt={slides[current].caption}
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* Caption (Overlay Center) */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-white text-xl md:text-2xl font-semibold bg-black/50 px-4 py-2 rounded-lg">
            {slides[current].caption}
          </p>
        </div>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index ? "bg-orange-500" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Paragraph below slider */}
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-200 text-sm md:text-base leading-relaxed tracking-wide">
          <span className="font-semibold text-yellow-400">PULP</span> is where work meets play, 
          where mundane blends with the extraordinary and where conversations are free flowing. 
          <br /><br />
          <span className="italic text-gray-300">
            It’s a reflection of the passion, vibrance and energy that connects neighbourhoods across India.
          </span>
        </p>
      </div>
    </section>
  );
};

export default ImageSlider;
