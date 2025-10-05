import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-[#010d1f] text-blue-200 px-6 py-10 border-t border-blue-800">
      <div className="flex flex-col items-center gap-5">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="w-12 h-12" />

        {/* Social Icons */}
        <div className="flex gap-5">
          <a href="#" className="hover:text-yellow-400 transition">
            <img src={assets.facebook_icon} alt="Facebook" className="w-5 h-5 filter invert" />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <img src={assets.instagram_icon} alt="Instagram" className="w-5 h-5 filter invert" />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <img src={assets.twitter_icon} alt="Twitter" className="w-5 h-5 filter invert" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-blue-300">
          &copy; {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Imagify</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

