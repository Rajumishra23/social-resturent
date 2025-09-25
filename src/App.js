import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OrderPopup from "./components/OrderPopup"; // ✅ Popup import
import { FaArrowUp } from "react-icons/fa";

// ✅ Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SocialClub from "./pages/SocialClub";
import SocialWork from "./pages/SocialWork";
import Order from "./pages/Order";
import Event from "./pages/Event";
import Reserve from "./pages/Reserve";

// Scroll to top on route change
const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

// Scroll-to-top button
const ScrollToTopButton = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) setVisible(true);
    else setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-4 rounded-full bg-yellow-500 text-black shadow-lg hover:bg-yellow-600 z-50 transition"
    >
      <FaArrowUp />
    </button>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTopOnRouteChange /> {/* ✅ Scroll to top on route change */}

      <div className="flex flex-col min-h-screen">
        <OrderPopup />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/social-club" element={<SocialClub />} />
            <Route path="/social-work" element={<SocialWork />} />
            <Route path="/order" element={<Order />} />
            <Route path="/event" element={<Event />} />
            <Route path="/reserve" element={<Reserve />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTopButton /> {/* ✅ Scroll-to-top button */}
      </div>
    </Router>
  );
};

export default App;
