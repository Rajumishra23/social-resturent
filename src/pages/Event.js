import React from "react";

const events = [
  {
    id: 1,
    title: "Live Jazz Night",
    date: "Saturday, 8 PM",
    description: "Enjoy a night of smooth jazz with our resident band.",
    img: "pixel1.webp",
  },
  {
    id: 2,
    title: "Cocktail Making Workshop",
    date: "Friday, 6 PM",
    description: "Learn how to make signature cocktails from our expert mixologists.",
    img: "pixel2.webp",
  },
  {
    id: 3,
    title: "Themed Party: Tropical Fiesta",
    date: "Sunday, 7 PM",
    description: "Dress up and enjoy tropical vibes with live music and drinks.",
    img: "bar1.webp",
  },
  {
    id: 4,
    title: "Wine Tasting Evening",
    date: "Thursday, 7 PM",
    description: "Sample exquisite wines from our sommelier's collection.",
    img: "bar2.webp",
  },
  {
    id: 5,
    title: "Chef's Special Dinner",
    date: "Friday, 8 PM",
    description: "An exclusive 5-course dinner curated by our head chef.",
    img: "bar3.webp",
  },
];

const EventSection = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
          style={{ color: "#D4AF37" }}
        >
          Our Events
        </h2>

        {/* Event Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative rounded-2xl overflow-hidden border border-yellow-500 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Event Image */}
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-64 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">{event.title}</h3>
                <p className="text-sm text-gray-200">{event.date}</p>
                <p className="text-gray-300 mt-1">{event.description}</p>
                <button className="mt-3 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 self-start">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
