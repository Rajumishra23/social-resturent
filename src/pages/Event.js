import React from "react";

const events = [
  {
    id: 1,
    title: "Live Jazz Night",
    date: "Saturday, 8 PM",
    description: "Enjoy a night of smooth jazz with our resident band and a fine selection of wines.",
    img: "pixel1.webp",
  },
  {
    id: 2,
    title: "Cocktail Making Workshop",
    date: "Friday, 6 PM",
    description: "Shake, stir, and sip – learn the art of mixology with our expert bartenders.",
    img: "pixel2.webp",
  },
  {
    id: 3,
    title: "Themed Party: Tropical Fiesta",
    date: "Sunday, 7 PM",
    description: "Step into paradise with tropical beats, vibrant cocktails, and beach vibes.",
    img: "bar1.webp",
  },
  {
    id: 4,
    title: "Wine Tasting Evening",
    date: "Thursday, 7 PM",
    description: "Discover premium wines handpicked by our sommelier, paired with gourmet bites.",
    img: "bar2.webp",
  },
  {
    id: 5,
    title: "Chef's Special Dinner",
    date: "Friday, 8 PM",
    description: "An exclusive 5-course dinner experience crafted by our award-winning chef.",
    img: "bar3.webp",
  },
];

const EventSection = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-6"
          style={{ color: "#D4AF37" }}
        >
          Our Events
        </h2>

        {/* Intro Content */}
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          At <span className="text-yellow-500 font-semibold">Golden Flame Restaurant & Bar</span>, 
          we believe dining is not just about food – it’s about unforgettable experiences. 
          From <span className="text-yellow-500">live music nights</span> and 
          <span className="text-yellow-500"> themed parties</span> to 
          <span className="text-yellow-500"> cocktail workshops</span> and 
          <span className="text-yellow-500"> wine tastings</span>, 
          there’s always something happening. Join us for evenings filled with flavors, 
          laughter, and memories.
        </p>

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
