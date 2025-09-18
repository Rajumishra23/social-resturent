import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OrderPopup from "./components/OrderPopup";   // ✅ Popup import

// ✅ Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SocialClub from "./pages/SocialClub";
import SocialWork from "./pages/SocialWork";
import Order from "./pages/Order";
import Event from "./pages/Event";
import Reserve from "./pages/Reserve";

const App = () => {
  return (
    <Router>
      {/* ✅ Popup sabse pehle show hoga */}
      <OrderPopup />

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/social-club" element={<SocialClub />} />
        <Route path="/social-work" element={<SocialWork />} />
        <Route path="/order" element={<Order />} />
        <Route path="/event" element={<Event />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
