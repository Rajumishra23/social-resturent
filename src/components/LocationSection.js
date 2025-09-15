import React, { useState } from "react";

const LocationSection = () => {
  const cities = [
    "All",
    "Bengaluru",
    "Chandigarh",
    "Delhi",
    "Hyderabad",
    "Indore",
    "Kolkata",
    "Lucknow",
    "Mumbai",
    "Pune",
  ];

  const locations = [
    { name: "CONNAUGHT PLACE SOCIAL", city: "Delhi", img: "cp1.webp" },
    { name: "E-CITY SOCIAL", city: "Bengaluru", img: "cp2.webp" },
    { name: "हेज़रतगंज SOCIAL", city: "Lucknow", img: "p3.webp" },
    { name: "RAJOURI GARDEN SOCIAL", city: "Delhi", img: "cp4.webp" },
    { name: "antiSOCIAL", city: "Mumbai", img: "cp5.webp" },
    { name: "BELLANDUR SOCIAL", city: "Bengaluru", img: "/cp6.webp" },
    { name: "JP NAGAR SOCIAL", city: "Bengaluru", img: "cp7.webp" },
    { name: "KORAMANGALA SOCIAL", city: "Bengaluru", img: "/cp8.webp" },
    { name: "F.C. ROAD SOCIAL", city: "Pune", img: "/cp9.webp" },
    { name: "विभूति खंड SOCIAL", city: "Lucknow", img: "/cp10.webp" },
    { name: "ELANTE SOCIAL", city: "Chandigarh", img: "/cp11.webp" },
    { name: "SECTOR-7 SOCIAL", city: "Chandigarh", img: "/cp12.webp" },
    { name: "PARK STREET SOCIAL", city: "Kolkata", img: "cp13.webp" },
    { name: "MINDSPACE SOCIAL", city: "Hyderabad", img: "cp14.webp" },
    { name: "SECTOR 85 SOCIAL", city: "Delhi", img: "/cp15.webp" },
    { name: "BATA CHOWK SOCIAL", city: "Delhi", img: "/cp16.webp" },
    { name: "IFC SOCIAL", city: "Delhi", img: "cp17.webp" },
    { name: "CIVIL LINES SOCIAL", city: "Delhi", img: "/cp18.webp" },
    { name: "AEROCITY SOCIAL", city: "Delhi", img: "/cp19.webp" },
    { name: "SAKET SOCIAL", city: "Delhi", img: "/cp20.webp" },

  ];

  const [selectedCity, setSelectedCity] = useState("All");

  const filteredLocations =
    selectedCity === "All"
      ? locations
      : locations.filter((loc) => loc.city === selectedCity);

  return (
    <section className="py-16 bg-black">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-orange-500 text-sm md:text-base font-medium tracking-widest">
          FIND US
        </h2>
        <h1 className="text-white text-3xl md:text-4xl font-bold mt-2">
          LOCATIONS
        </h1>
      </div>

      {/* City Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 px-6">
        {cities.map((city, index) => (
          <button
            key={index}
            onClick={() => setSelectedCity(city)}
            className={`rounded-full px-5 py-2.5 font-semibold text-sm transition ${
              selectedCity === city
                ? "bg-orange-500 text-black"
                : "bg-neutral-900 text-gray-300 hover:text-orange-500"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Location Boxes with Images */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 px-6">
        {filteredLocations.map((loc, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image Box - Smaller */}
            <div className="w-[120px] h-[120px] font-bold rounded-lg bg-white overflow-hidden shadow-lg">
              <img
                src={loc.img}
                alt={loc.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Text below image */}
            <p className="mt-2 text-[11px] text-gray-300 text-center leading-tight">
              {loc.name}
            </p>
            <p className="text-[10px] text-orange-400">{loc.city}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationSection;