import React, { useState } from "react";

const ReserveTable = () => {
  const [formData, setFormData] = useState({
    location: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    seating: "Restaurant",
    requests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Data:", formData);
    alert("Your table has been reserved!");
  };

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
    "Jammu & Kashmir",
    "Ladakh",
    "Puducherry",
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-4">
  <div className="max-w-3xl mx-auto bg-gray-900/80 rounded-2xl p-8 shadow-lg border-2 border-white">
    <h2 className="text-4xl font-extrabold text-center mb-6" style={{ color: "#D4AF37" }}>
          Reserve a Table
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Location First */}
          <div>
            <label className="block mb-1 font-semibold">Location</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="" disabled>Select Your State</option>
              {states.map((state, idx) => (
                <option key={idx} value={state}>{state}</option>
              ))}
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-semibold">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="+91 12345 67890"
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block mb-1 font-semibold">Number of Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              max="20"
              value={formData.guests}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Seating */}
          <div>
            <label className="block mb-1 font-semibold">Seating Preference</label>
            <select
              name="seating"
              value={formData.seating}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option>Restaurant</option>
              <option>Bar</option>
              <option>Outdoor</option>
            </select>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block mb-1 font-semibold">Special Requests</label>
            <textarea
              name="requests"
              value={formData.requests}
              onChange={handleChange}
              rows="3"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Any special requests?"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-600 transition"
            >
              Reserve Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReserveTable;
