import React, { useState } from "react";

const HeroSlider = () => {
  const images = [
    "/rest.webp",  // pehla image
    "/rest1.webp", // dusra image
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Left button click
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Right button click
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative w-full h-[450px] overflow-hidden">
      {/* Image */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      ></div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left--1 -translate-y-1/2 bg-black text-white px-3 py-2 rounded hover:bg-gray-800"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-1 -translate-y-1/2 bg-black text-white px-3 py-2 rounded hover:bg-gray-800"
      >
        ❯
      </button>
    </section>
  );
};

export default HeroSlider;