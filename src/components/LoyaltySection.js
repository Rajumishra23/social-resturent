import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaLeaf, FaFireAlt } from "react-icons/fa";

const RestaurantAboutBanner = () => {
  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stagger = {
    hidden: { opacity: 0, y: 12 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <section className="relative py-16 md:py-20 bg-[#fefcf9] text-gray-800 overflow-hidden">
      {/* Decorative blur accents */}
      <div className="absolute -top-10 -left-10 h-40 w-40 bg-orange-200/40 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 h-48 w-48 bg-green-200/40 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Video with overlay */}
        <motion.div
          className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.video
            src="/Videos/1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover aspect-[4/3]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent rounded-2xl pointer-events-none" />

          {/* Floating badges */}
          <motion.div
            className="absolute left-5 bottom-5 flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/90 text-gray-900 px-3 py-2 rounded-full text-sm font-semibold shadow-md">
              <FaUtensils className="text-orange-500" />
              Chef’s Special
            </span>
            <span className="inline-flex items-center gap-2 bg-white/90 text-gray-900 px-3 py-2 rounded-full text-sm font-semibold shadow-md">
              <FaLeaf className="text-green-600" />
              Farm Fresh
            </span>
          </motion.div>

          {/* Top corner badge */}
          <motion.div
            className="absolute top-5 right-5 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-1">
              <FaFireAlt />
              Fresh & Hot
            </span>
          </motion.div>
        </motion.div>

       {/* Content */}
<motion.div
  className="md:w-1/2 text-center md:text-left"
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
>
  <motion.h2
    className="text-3xl md:text-4xl font-bold mb-4"
    variants={stagger}
    custom={0}
  >
    About <span className="text-orange-600">Our Restaurant</span>
  </motion.h2>

  <motion.p
    className="text-lg leading-relaxed mb-4 text-gray-700"
    variants={stagger}
    custom={1}
  >
    Welcome to <strong>Spice & Soul</strong>, where food is more than just a meal — it’s an 
    emotion. Since our beginning, we’ve combined <em>traditional family recipes</em> with 
    innovative cooking techniques to create dishes that speak to the heart.
  </motion.p>

  <motion.p
    className="text-lg leading-relaxed mb-6 text-gray-700"
    variants={stagger}
    custom={2}
  >
    From <span className="font-semibold text-orange-600">farm-fresh produce</span> to 
    carefully sourced spices, every plate is crafted with love, passion, and 
    authenticity. Whether you’re here for a cozy dinner, a family celebration, 
    or just to enjoy a hot cup of coffee with friends, our warm ambiance makes 
    you feel at home.
  </motion.p>

  {/* Highlight points */}
  <motion.ul
    className="list-disc list-inside text-left text-gray-700 mb-6 space-y-2"
    variants={stagger}
    custom={3}
  >
    <li>🌿 <strong>Organic & Locally Sourced Ingredients</strong></li>
    <li>👨‍🍳 <strong>Experienced Chefs</strong> with global culinary background</li>
    <li>🍷 <strong>Handpicked Wines & Beverages</strong> to complement your meal</li>
    <li>🎶 <strong>Cozy Atmosphere</strong> with live music on weekends</li>
  </motion.ul>

  {/* Stats row */}
  <motion.div
    className="mb-6 grid grid-cols-3 gap-4"
    variants={stagger}
    custom={4}
  >
    <div className="rounded-xl bg-white shadow-sm p-4">
      <p className="text-2xl font-extrabold text-gray-900">250+</p>
      <p className="text-xs text-gray-500">Signature Dishes</p>
    </div>
    <div className="rounded-xl bg-white shadow-sm p-4">
      <p className="text-2xl font-extrabold text-gray-900">4.8</p>
      <p className="text-xs text-gray-500">Avg. Rating</p>
    </div>
    <div className="rounded-xl bg-white shadow-sm p-4">
      <p className="text-2xl font-extrabold text-gray-900">10yrs</p>
      <p className="text-xs text-gray-500">Culinary Craft</p>
    </div>
  </motion.div>

  {/* CTA with shine */}
  <motion.a
    href="#menu"
    className="inline-block relative bg-orange-600 hover:bg-orange-700 px-7 py-3 rounded-full text-white font-semibold shadow-lg transition-colors"
    variants={stagger}
    custom={5}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    Discover More
    <span className="absolute inset-0 rounded-full overflow-hidden">
      <span className="absolute -inset-8 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-y-[-60%] animate-[shine_2.2s_ease-in-out_infinite]" />
    </span>
  </motion.a>



          <style>
            {`
              @keyframes shine {
                0% { transform: translateX(-100%) rotate(12deg); }
                100% { transform: translateX(100%) rotate(12deg); }
              }
            `}
          </style>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantAboutBanner;
