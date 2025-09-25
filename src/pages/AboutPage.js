import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="bg-black text-white">
      {/* Hero Section with Video */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Videos/1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center"
          >
            ABOUT_<span className="text-orange-500">US</span>
          </motion.h1>
        </div>
      </div>

     {/* About Content */}
<div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 items-center">
  {/* Left Main Image */}
  <motion.img
    src="/about1.webp"
    alt="Restaurant Food"
    className="rounded-2xl shadow-lg"
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  />

  {/* Middle Small Image */}
  <motion.img
    src="/r1.webp"
    alt="Small Highlight"
    className="rounded-xl shadow-md w-[320px] h-[420px] object-cover mx-auto md:mx-0"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  />

  {/* Text Content */}
  <motion.div
    initial={{ x: 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      A Perfect Blend of <span className="text-orange-500">Taste</span> &{" "}
      <span className="text-yellow-400">Vibes</span>
    </h2>
    <p className="text-gray-300 mb-4">
      We combine the flavors of a fine dining restaurant with the energy
      of a vibrant bar. From chef-special dishes crafted with fresh
      ingredients 🍽️ to signature cocktails made by expert bartenders 🍸 – 
      we make every visit unforgettable.
    </p>
    <ul className="space-y-3 mb-6">
      <li>✅ Fresh & Hygienic Ingredients</li>
      <li>✅ Professional Bartenders & Chefs</li>
      <li>✅ Cozy Family Dinners & Lively Nightlife</li>
    </ul>
    <div className="flex gap-4">
      <a
        href="#menu"
        className="px-6 py-3 bg-orange-600 rounded-full font-semibold hover:bg-orange-700 transition"
      >
        Explore Menu
      </a>
      <a
        href="#reserve"
        className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
      >
        Reserve Table
      </a>
    </div>
  </motion.div>
</div>

     {/* Gallery */}
<div className="container mx-auto px-6 pb-16">
  <h3 className="text-2xl font-bold text-center mb-8">
    Experience Our <span className="text-orange-500">Ambiance</span>
  </h3>

  {/* Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {[1, 2, 3, 4, 5, 6].map((num) => (
      <img
        key={num}
        src={`/gall${num}.webp`}
        alt="Gallery Image"
        className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out w-full h-48 object-cover"
      />
    ))}
  </div>
</div>
<section className="relative bg-[url('/bg.webp')] bg-cover bg-center py-24">
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg">
    <h2 className="text-3xl text-black font-bold text-center mb-8">
      Reserve a <span className="text-black">Table</span>
    </h2>
    <hr />

    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const data = {
          guests: e.target.guests.value,
          name: e.target.name.value,
          phone: e.target.phone.value,
          date: e.target.date.value,
          time: e.target.time.value
        };
        console.log("Form Submitted:", data);
        alert("Table Reserved Successfully!");
      }}
    >
      <input
        type="number"
        name="guests"
        placeholder="No of Guest"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      <div className="flex flex-col md:flex-row md:gap-4">
        <input
          type="text"
          name="name"
          placeholder="Complete Name"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone No"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <div className="flex flex-col md:flex-row md:gap-4">
        <input
          type="date"
          name="date"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="time"
          name="time"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-yellow-600 transition"
      >
        Reserve A Table
      </button>
    </form>
  </div>

</section>


    </section>
    
  );
};

export default AboutSection;
