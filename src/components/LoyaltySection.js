import React from "react";
import { motion } from "framer-motion";

const LoyaltySection = () => {
  return (
    <section className="relative w-full min-h-[700px] bg-gray-50 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 relative inline-block">
            Introducing the{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
              Pulp Club
            </span>
            {/* Watermark behind heading */}
            <span className="absolute -z-10 text-[8rem] md:text-[12rem] font-bold text-gray-200/20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              CLUB
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            Your ultimate loyalty experience — rewards, perks, and exclusive benefits every time you visit.
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl">
          {/* Left - Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/2 bg-gradient-to-br from-orange-500 to-amber-600"
          >
            <iframe
              className="w-full h-[350px] md:h-full object-cover rounded-none"
              src="https://www.youtube.com/embed/h2zkV-l_TbY"
              title="Restaurant Ambience Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* Gradient overlay on video */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black w-full md:w-1/2 text-white p-8 md:p-16 flex flex-col justify-center relative"
          >
            {/* Decorative light flare */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/20 blur-2xl rounded-full"></div>

            <h3 className="text-orange-500 text-sm md:text-lg uppercase tracking-widest font-semibold">
              Loyalty Program
            </h3>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-4 leading-snug">
              The Pulp Club
            </h2>
            <p className="mt-6 text-lg md:text-2xl leading-relaxed text-gray-300 max-w-2xl">
              The ultimate loyalty program that never disappoints. Get exclusive rewards every time you visit your neighbourhood hangout place!
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255,165,0,0.6)",
              }}
              className="mt-8 bg-gradient-to-r from-orange-500 to-amber-700 text-white px-10 py-5 rounded-full font-semibold transition text-xl"
            >
              Explore Program
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltySection;