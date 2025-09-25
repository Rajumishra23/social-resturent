import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const HeroSlider = () => {
  const slides = [
    { src: "/food.webp", caption: "Delicious Food Delivered" },
    { src: "/food3.webp", caption: "Taste The Difference" },
    { src: "/pixel1.webp", caption: "Reserve Your Table Now" },
    { src: "/food2.webp", caption: "Free Home delivery" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentIndex].src})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h2
              key={slides[currentIndex].caption}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-6"
            >
              {slides[currentIndex].caption}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex gap-4"
            >
              <NavLink
                to="/order"
                className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all"
              >
                Order Now
              </NavLink>
              <NavLink
                to="/reserve"
                className="px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all"
              >
                Reserve Now
              </NavLink>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

     {/* Left Arrow (Desktop only) */}
<button
  onClick={prevSlide}
  className="hidden md:flex absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 hover:bg-amber-700 text-white p-3 rounded-full transition"
>
  ❮
</button>

{/* Right Arrow (Desktop only) */}
<button
  onClick={nextSlide}
  className="hidden md:flex absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 hover:bg-amber-700 text-white p-3 rounded-full transition"
>
  ❯
</button>


      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === currentIndex
                ? "bg-yellow-500 scale-125"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
