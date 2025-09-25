import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaLeaf, FaFireAlt } from "react-icons/fa";

const RestaurantAboutBanner = () => {
  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: { opacity: 0, y: 12 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#fffaf5] to-[#fdfdfd] text-gray-800 overflow-hidden">
      {/* Decorative glow accents */}
      <div className="absolute -top-16 -left-16 h-56 w-56 bg-orange-200/40 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-20 h-64 w-64 bg-yellow-200/30 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-10 h-52 w-52 bg-green-200/40 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 relative z-10">
        {/* Video with overlay & floating badges */}
        <motion.div
          className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-orange-200/50"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
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
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-2xl pointer-events-none" />

          {/* Floating badges */}
          <motion.div
            className="absolute left-5 bottom-5 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-gray-900 px-3 py-2 rounded-full text-sm font-semibold shadow-md border border-orange-200/50">
              <FaUtensils className="text-orange-500" />
              Chef’s Special
            </span>
            <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-gray-900 px-3 py-2 rounded-full text-sm font-semibold shadow-md border border-green-200/50">
              <FaLeaf className="text-green-600" />
              Farm Fresh
            </span>
          </motion.div>

          {/* Top corner badge */}
          <motion.div
            className="absolute top-5 right-5 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md"
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
          {/* Gradient Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent"
            variants={stagger}
            custom={0}
          >
            About Our Restaurant
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed mb-4 text-gray-700"
            variants={stagger}
            custom={1}
          >
            Welcome to <strong>Spice & Soul</strong>, where food is more than
            just a meal — it’s an experience. Since our beginning, we’ve
            combined{" "}
            <em className="text-orange-600">traditional family recipes</em> with
            innovative cooking techniques to create dishes that speak to the
            heart.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed mb-6 text-gray-700"
            variants={stagger}
            custom={2}
          >
            From{" "}
            <span className="font-semibold text-orange-600">
              farm-fresh produce
            </span>{" "}
            to carefully sourced spices, every plate is crafted with{" "}
            <span className="italic">love, passion, and authenticity</span>.
            Whether you’re here for a cozy dinner, a family celebration, or just
            a coffee with friends — our warm ambiance makes you feel at home.
          </motion.p>

          {/* Highlight points */}
          <motion.ul
            className="text-left text-gray-700 mb-8 space-y-3"
            variants={stagger}
            custom={3}
          >
            <li className="flex items-start gap-2">
              🌿 <span>Organic & Locally Sourced Ingredients</span>
            </li>
            <li className="flex items-start gap-2">
              👨‍🍳 <span>Experienced Chefs with global expertise</span>
            </li>
            <li className="flex items-start gap-2">
              🍷 <span>Handpicked Wines & Signature Beverages</span>
            </li>
            <li className="flex items-start gap-2">
              🎶 <span>Cozy Ambience with Live Music Nights</span>
            </li>
          </motion.ul>

          {/* Stats row */}
          <motion.div
            className="mb-8 grid grid-cols-3 gap-4"
            variants={stagger}
            custom={4}
          >
            {[
              { number: "250+", label: "Signature Dishes" },
              { number: "4.8", label: "Avg. Rating" },
              { number: "10yrs", label: "Culinary Craft" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white/90 backdrop-blur-md shadow-md p-4 border border-gray-100 hover:shadow-lg transition"
              >
                <p className="text-2xl font-extrabold text-gray-900">
                  {stat.number}
                </p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Button with Shine */}
          <motion.a
            href="#menu"
            className="inline-block relative bg-gradient-to-r from-orange-600 to-yellow-500 px-7 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            variants={stagger}
            custom={5}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Discover More
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute -inset-8 bg-gradient-to-r from-transparent via-white/25 to-transparent rotate-12 translate-y-[-60%] animate-[shine_2.5s_ease-in-out_infinite]" />
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
