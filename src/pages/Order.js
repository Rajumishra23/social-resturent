import React, { useState } from "react";

const menuItems = [
  // Food
  { id: 1, category: "Food", name: "Classic Margherita Pizza", description: "Cheesy delight with fresh tomatoes", price: 350, img: "img3.webp" },
  { id: 2, category: "Food", name: "Signature Biryani", description: "Aromatic biryani with spices", price: 400, img: "img4.webp" },
  { id: 3, category: "Food", name: "Asian Delights", description: "Stir-fried noodles & veggies", price: 300, img: "img5.webp" },
  { id: 4, category: "Food", name: "Appetizers", description: "Crispy starters to begin", price: 200, img: "img6.webp" },
  { id: 5, category: "Food", name: "Dessert Heaven", description: "Sweet treats to finish", price: 150, img: "img7.webp" },
  
  // Bar
  { id: 6, category: "Drink", name: "Mojito", description: "Refreshing mint cocktail", price: 250, img: "1.jpg" },
  { id: 7, category: "Drink", name: "Classic Whiskey", description: "Premium aged whiskey", price: 400, img: "2.jpg" },
  { id: 8, category: "Drink", name: "Beer Bucket", description: "Assorted cold beers", price: 600, img: "3.jpg" },
  { id: 9, category: "Drink", name: "Cocktail Special", description: "Chef's special cocktail", price: 300, img: "4.jpg" },
  { id: 10, category: "Drink", name: "Refreshing Drinks", description: "Soft drinks and mocktails", price: 100, img: "5.jpg" },
];

const OrderSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Food");

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  return (
    <section className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12" style={{ color: "#D4AF37" }}>
          Place your Order
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          {["Food", "Drink"].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition ${
                selectedCategory === cat ? "bg-yellow-500 text-black" : "bg-gray-800 text-white hover:bg-yellow-500 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="relative rounded-xl overflow-hidden border border-yellow-500 hover:scale-105 transition-transform">
              <img src={item.img} alt={item.name} className="w-full h-64 object-cover"/>
              
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
      </div>
    </section>
  );
};

export default OrderSection;
