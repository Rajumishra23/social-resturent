import React, { useState, useEffect } from "react";

const HeroSlider = () => {
  const images = [
    "/rest.webp",  // pehla image
    "/rest1.webp",
    "/club.webp",
    "/club1.webp",
    "/club2.webp", // dusra image
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto Slide (every 3 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 sec me slide change hoga

    return () => clearInterval(interval);
  }, [currentIndex]);

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
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* ✅ Slides container */}
      <div
        className="flex w-full h-full transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded hover:bg-black"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded hover:bg-black"
      >
        ❯
      </button>
    </section>
  );
};

export default HeroSlider;
