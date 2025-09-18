// components/OrderPopup.js
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const OrderPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Jaise hi page load ho, popup show ho jaye
    setShowPopup(true);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg relative">
            
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setShowPopup(false)}
            >
              <FaTimes />
            </button>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-center mb-4">ORDER NOW</h2>
            <hr className="border-white mb-6" />

           {/* Options */}
<div className="flex justify-around items-center">
 {/* Direct */}
<div className="flex flex-col items-center text-center">
  <div className="bg-orange-700 rounded-full w-20 h-20 flex items-center justify-center mb-3 overflow-hidden 
                  hover:scale-110 hover:shadow-lg transition-transform duration-300">
    <img
      src="/main.png"
      alt="Direct"
      className="w-10 h-10 object-contain"
    />
  </div>
  <p className="font-bold text-white">Direct</p>
  <p className="text-sm text-gray-200">For Best Deals & Offers</p>
</div>


  {/* Zomato */}
  <div className="text-center">
    <div className="bg-orange-700 rounded-full w-16 h-16 flex items-center justify-center mb-2 overflow-hidden">
      <img src="/zomato.png" alt="Zomato" className="w-10 h-10 object-contain" />
    </div>
    <p className="font-bold">Zomato</p>
  </div>

  {/* Swiggy */}
  <div className="text-center">
    <div className="bg-orange-700 rounded-full w-16 h-16 flex items-center justify-center mb-2 overflow-hidden">
      <img src="/swigy.png" alt="Swiggy" className="w-10 h-10 object-contain" />
    </div>
    <p className="font-bold">Swiggy</p>
  </div>
</div>

          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
