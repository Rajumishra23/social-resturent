import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const slides = [
    { img: "/bar1.webp", caption: "Neon Nights" },
{ img: "/bar2.webp", caption: "Signature Cocktails" },
{ img: "/bar3.webp", caption: "Live DJ Party" },
{ img: "/bar4.webp", caption: "Dance & Vibes" },
{ img: "/bar5.webp", caption: "Midnight Specials" },

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
    <section className="w-full bg-black py-10">
      <div className="max-w-4xl mx-auto relative">
        
        {/* Image */}
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden rounded-lg">
          <img
            src={slides[current].img}
            alt={slides[current].caption}
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>

        {/* Caption */}
        <p className="text-center text-white mt-4 text-lg font-medium">
          {slides[current].caption}
        </p>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
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
         {/* Paragraph below dots */}
<p className="text-center text-gray-200 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed tracking-wide">
  <span className="font-semibold text-yellow-400">SOCIAL</span> is where work meets play, 
  where mundane blends with the extraordinary and where conversations are free flowing. <br /><br />
  <span className="italic text-gray-300">
    It’s a reflection of the passion, vibrance and energy that connects neighbourhoods across India.
  </span>
</p>


      </div>
    </section>
  );
};

export default ImageSlider;