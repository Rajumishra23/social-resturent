import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Logo + Social Icons */}
        <div>
          <h2 className="text-orange-500 text-5xl font-extrabold tracking-wider">
            SOCIAL
          </h2>
          <div className="flex items-center gap-6 mt-6">
            <a
              href="#"
              className="p-4 bg-neutral-800 rounded-full hover:bg-orange-500 transition text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-4 bg-neutral-800 rounded-full hover:bg-orange-500 transition text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-4 bg-neutral-800 rounded-full hover:bg-orange-500 transition text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Collaboration Invite */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            Looking for collaboration? Send an email to{" "}
            <a
              href="mailto:feedback@impresario.in"
              className="text-orange-500 hover:underline"
            >
              feedback@impresario.in
            </a>{" "}
            for enquiries.
          </p>
          <button className="mt-6 inline-flex items-center gap-3 bg-orange-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-orange-400 transition text-lg">
            SEND ENQUIRY <span className="text-2xl">→</span>
          </button>
        </div>

        {/* Company Info */}
        <div className="text-lg text-gray-400 leading-relaxed">
          <p>
            Impresario Entertainment & Hospitality Private Limited,
            American Express Bakery House, 1st Floor, Victoria Bakery Bldg,
            Dr. B. Ambedkar Road, Bandra (W), Mumbai, Maharashtra 400050.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 px-8 max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
        <div className="flex gap-6 mt-3 md:mt-0 text-base">
          <a href="#" className="hover:text-orange-500">Terms & Conditions</a>
          <a href="#" className="hover:text-orange-500">Privacy Policy</a>
          <span>Website by Bigdesign software Technologies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
