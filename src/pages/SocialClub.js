import React from "react";

const MenuSection = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="relative bg-[url('/menu.webp')] bg-cover bg-center h-96 flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Heading */}
        <h2 className="relative text-5xl md:text-6xl font-extrabold text-white text-center">
          Our Menu
        </h2>
      </section>

      {/* Menu Grid Section */}
      <section className="w-full bg-black text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
         

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {[
              { img: "pulp1.jpg", label: "Special Dish 1" },
              { img: "pulp2.jpg", label: "Special Dish 2" },
              { img: "pulp3.jpg", label: "Special Dish 3" },
              { img: "pulp4..jpg", label: "Special Dish 4" },
              { img: "pulp5.jpg", label: "Special Dish 5" },
              { img: "pulp6.jpg", label: "Special Dish 6" },
              { img: "pulp7.jpg", label: "Special Dish 7" },
              { img: "pulp8.jpg", label: "Special Dish 8" },
              { img: "pulp9.jpg", label: "Special Dish 9" },
              { img: "pulp10.jpg", label: "Refreshing Drinks" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden border4 w-full h-80 md:h-100" 
                style={{ borderColor: "yellow" }}
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuSection;