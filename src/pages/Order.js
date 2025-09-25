import React, { useState } from "react";

const menuItems = [
  // Food
  { id: 1, category: "Food", name: "Classic Margherita Pizza", description: "Cheesy delight with fresh tomatoes", price: 350, img: "img3.webp" },
  { id: 2, category: "Food", name: "Signature Biryani", description: "Aromatic biryani with spices", price: 400, img: "img4.webp" },
  { id: 3, category: "Food", name: "Asian Delights", description: "Stir-fried noodles & veggies", price: 300, img: "img5.webp" },
  { id: 4, category: "Food", name: "Appetizers", description: "Crispy starters to begin", price: 200, img: "img6.webp" },
  { id: 5, category: "Food", name: "Dessert Heaven", description: "Sweet treats to finish", price: 150, img: "img7.webp" },
  { id: 6, category: "Food", name: "Grilled Sandwich", description: "Stuffed with cheese & veggies", price: 180, img: "img8.webp" },
  { id: 7, category: "Food", name: "Pasta Alfredo", description: "Creamy Italian pasta delight", price: 270, img: "img9.webp" },
  { id: 8, category: "Food", name: "Indian Thali", description: "Traditional combo with curries & roti", price: 450, img: "img5.webp" },

  // Drinks
  { id: 11, category: "Drink", name: "Mojito", description: "Refreshing mint cocktail", price: 250, img: "1.jpg" },
  { id: 12, category: "Drink", name: "Classic Whiskey", description: "Premium aged whiskey", price: 400, img: "2.jpg" },
  { id: 13, category: "Drink", name: "Beer Bucket", description: "Assorted cold beers", price: 600, img: "3.jpg" },
  { id: 14, category: "Drink", name: "Cocktail Special", description: "Chef's special cocktail", price: 300, img: "4.jpg" },
  { id: 15, category: "Drink", name: "Refreshing Drinks", description: "Soft drinks and mocktails", price: 100, img: "5.jpg" },
  { id: 16, category: "Drink", name: "Red Wine", description: "Fine imported wine", price: 550, img: "2.jpg" },
  { id: 17, category: "Drink", name: "Irish Coffee", description: "Coffee blended with whiskey", price: 280, img: "1.jpg" },
  { id: 18, category: "Drink", name: "Energy Boost", description: "Power-packed energy drinks", price: 200, img: "4.jpg" },
];

const OrderSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Food");

  const filteredItems = menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-8"
          style={{ color: "#D4AF37" }}
        >
          Place your Order
        </h2>

       {/* Intro Content */}
<div className="max-w-5xl mx-auto mb-16">
  <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
    Experience the Taste of Luxury
  </h3>

  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-center">
    At our <span className="text-yellow-400 font-semibold">restaurant</span>, food is not just about taste, 
    it’s an <span className="italic text-orange-400">experience of flavors</span>. 
    Each dish is carefully crafted by our chefs with passion and authenticity.
  </p>

  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 text-center">
    From <span className="text-yellow-400 font-semibold">traditional Indian curries</span> 
    to <span className="text-yellow-400 font-semibold">cheesy Italian pastas</span> and 
    refreshing Asian delights – we bring you a world of flavors. 
    Don’t forget to pair them with our <span className="underline text-orange-400">exclusive drinks collection</span>.
  </p>

  <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
    Explore our menu below, pick your favorites, and 
    let us serve happiness on your plate. 
    <span className="text-yellow-400 font-bold"> Every bite is a memory, every sip a story.</span>
  </p>
</div>


        {/* Category Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          {["Food", "Drink"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition ${
                selectedCategory === cat
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800 text-white hover:bg-yellow-500 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden border border-yellow-500 hover:scale-105 transition-transform"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <p className="text-sm text-gray-200">{item.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-yellow-400 font-bold">₹{item.price}</span>
                  <button className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Image */}
        <div className="mt-20">
          <img
            src="resturent2.webp"
            alt="Restaurant Special"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
