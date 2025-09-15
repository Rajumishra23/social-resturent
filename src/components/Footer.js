import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + Social Icons */}
        <div>
          <h2 className="text-orange-500 text-3xl font-extrabold tracking-wider">
            SOCIAL
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-orange-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-orange-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-orange-500 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Collaboration Invite */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-300 text-sm">
            Looking for collaboration? Send an email to{" "}
            <a href="mailto:feedback@impresario.in" className="text-orange-500 hover:underline">
              feedback@impresario.in
            </a>{" "}
            for enquiries.
          </p>
          <button className="mt-4 inline-flex items-center gap-2 bg-orange-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-orange-400 transition">
            SEND ENQUIRY <span className="text-lg">→</span>
          </button>
        </div>

        {/* Company Info */}
        <div className="text-sm text-gray-400">
          <p>
            Impresario Entertainment & Hospitality Private Limited,
            American Express Bakery House, 1st Floor, Victoria Bakery Bldg,
            Dr. B. Ambedkar Road, Bandra (W), Mumbai, Maharashtra 400050.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 px-6 max-w-6xl mx-auto">
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-orange-500">Terms & Conditions</a>
          <a href="#" className="hover:text-orange-500">Privacy Policy</a>
          <span>Website by Bigdesign software Technologies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;