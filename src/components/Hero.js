import React, { useState, useEffect } from "react";

const HeroSlider = () => {
  const images = [
    "/rest.webp",
    "/rest1.webp",
    "/club.webp",
    "/club1.webp",
    "/club2.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      className="
        relative w-full 
        h-[500px]    /* 📱 Mobile default */
        sm:h-[500px] /* 📲 Small screens */
        md:h-[600px] /* 💻 Medium */
        lg:h-[1000px] /* 🖥 Desktop */
        overflow-hidden
      "
    >
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
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/60 text-white px-4 py-3 rounded-full hover:bg-black text-xl sm:text-2xl"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/60 text-white px-4 py-3 rounded-full hover:bg-black text-xl sm:text-2xl"
      >
        ❯
      </button>
    </section>
  );
};

export default HeroSlider;
