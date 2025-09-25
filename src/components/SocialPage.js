import React from "react";
import { motion } from "framer-motion";

const DigitalMenuSection = () => {
  const items = [
    { label: "Appetizers", img: "img1.webp", phone: "tel:+917588038163" },
    { label: "My Wish Fries", img: "img2.webp", phone: "tel:+917588038163" },
    { label: "Take Me To Teo", img: "img3.webp", phone: "tel:+917588038163" },
    { label: "Asian Delights", img: "img4.webp", phone: "tel:+917588038163" },
    { label: "Fresh Greens", img: "img5.webp", phone: "tel:+917588038163" },
    { label: "Artisan Bread", img: "img6.webp", phone: "tel:+917588038163" },
    { label: "Signature Biryani", img: "img7.webp", phone: "tel:+917588038163" },
    { label: "Classic Pizza", img: "img8.webp", phone: "tel:+917588038163" },
    { label: "Dessert Heaven", img: "img9.webp", phone: "tel:+917588038163" },
  ];

  return (
    <section className="w-full bg-black text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2
          className="text-center text-4xl md:text-5xl font-extrabold mb-6 tracking-wide"
          style={{ color: "#D4AF37" }}
        >
          Our Exquisite Menu
        </h2>

       {/* Intro Text */}
<div className="max-w-3xl mx-auto text-center mb-12 relative">
  {/* Decorative Line Top */}
  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full" />

  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4 italic">
    Experience a <span className="text-yellow-500 font-semibold">blend of flavors</span> 
    crafted to perfection by our expert chefs. From 
    <span className="text-yellow-500"> crispy appetizers</span> to 
    <span className="text-yellow-500"> rich biryanis</span>, and refreshing 
    <span className="text-yellow-500"> drinks</span> to indulgent 
    <span className="text-yellow-500"> desserts</span> – we bring you a 
    taste of luxury on every plate.
  </p>

  <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
    Explore our <span className="underline decoration-yellow-500 decoration-2">handpicked selections</span> 
    below and let your cravings guide you through a 
    <span className="text-yellow-500"> culinary journey</span> like never before.
  </p>

  {/* Decorative Line Bottom */}
  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full" />
</div>


        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-xl overflow-hidden border"
              style={{ borderColor: "#D4AF37" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Image */}
              <motion.img
                src={item.img}
                alt={item.label}
                className="w-full h-56 md:h-64 object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Label */}
              <div className="absolute top-3 left-3">
                <span
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: "rgba(212,175,55,0.95)",
                    color: "#1a1a1a",
                  }}
                >
                  {item.label}
                </span>
              </div>

              {/* Call Now */}
              <div className="absolute bottom-3 right-3">
                <a
                  href={item.phone}
                  className="inline-block px-4 py-2 rounded-md font-bold"
                  style={{ backgroundColor: "#D4AF37", color: "#1a1a1a" }}
                >
                  Call Now
                </a>
              </div>

              {/* Inner border glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-xl"
                style={{ boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.35)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMenuSection;
