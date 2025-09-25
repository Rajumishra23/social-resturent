import React from "react";

const MenuSection = () => {
  const menuItems = [
   { img: "pulp1.jpg" },
    { img: "pulp2.jpg" },
    { img: "pulp3.jpg" },
    { img: "pulp4..jpg" },
    { img: "pulp5.jpg" },
    { img: "pulp6.jpg" },
    { img: "pulp7.jpg" },
    { img: "pulp8.jpg" },
    { img: "pulp9.jpg" },
    { img: "pulp10.jpg" },
  ];


  return (
    <>
      {/* Banner Section */}
      <section className="relative bg-[url('/menu.webp')] bg-cover bg-center h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <h2 className="relative text-5xl md:text-6xl font-extrabold text-white text-center">
          Our Menu
        </h2>
      </section>

      {/* Menu Section */}
      <section className="w-full bg-black text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <h2
            className="text-center text-4xl md:text-5xl font-extrabold mb-6 tracking-wide"
            style={{ color: "#D4AF37" }}
          >
            Explore Our Dishes
          </h2>

          {/* Introductory Content */}
          <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            At <span className="text-yellow-400 font-semibold">Dasaprakash</span>, 
            our menu is a symphony of flavors crafted with passion. From 
            <span className="text-yellow-400"> appetizers</span> that awaken your taste buds, 
            to <span className="text-yellow-400">main courses</span> that celebrate tradition 
            and innovation, and <span className="text-yellow-400">desserts</span> that end your 
            meal on a sweet note — every dish is made with fresh ingredients 
            and authentic recipes. Pair it with our <span className="text-yellow-400">refreshing drinks</span> 
            for the perfect dining experience.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden border w-full h-80 md:h-96"
                style={{ borderColor: "#D4AF37" }}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Label */}
                <div className="absolute bottom-3 left-3">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuSection;