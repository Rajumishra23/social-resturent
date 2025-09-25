import React from "react";
import { motion } from "framer-motion";

const SpecialsSection = () => {
  const specials = [
    {
      title: "Chef’s Specials",
      desc: "Hand‑picked signature dishes crafted by our master chefs, perfect for every occasion.",
      img: "offer1.webp",
      phone: "tel:+917588038163"
    },
    {
      title: "Exotic Desserts",
      desc: "Indulge in our heavenly desserts — from molten lava cakes to traditional sweets.",
      img: "offer2.webp",
      phone: "tel:+917588038163"
    },
    {
      title: "Refreshing Beverages",
      desc: "Cool mocktails, fresh juices, and premium blends to keep you refreshed all day.",
      img: "offer3.webp",
      phone: "tel:+917588038163"
    },
    {
      title: "Family Combos",
      desc: "Delicious combos curated for families & groups, offering variety and value together.",
      img: "offer4.webp",
      phone: "tel:+917588038163"
    }
  ];

  return (
    <section className="w-full bg-black text-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2
          className="text-center text-4xl md:text-5xl font-extrabold mb-12 tracking-wide"
          style={{ color: "#D4AF37" }}
        >
         OFFERINGS
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {specials.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#D4AF37" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 flex-grow">
                  {item.desc}
                </p>
                <a
                  href={item.phone}
                  className="inline-block bg-[#D4AF37] text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;