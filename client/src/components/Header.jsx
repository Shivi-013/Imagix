import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center text-center px-6 py-24 
                 bg-[#0a192f] relative overflow-hidden"
    >
      {/* Tagline Badge */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-[#1c2541] border border-yellow-400 text-yellow-300 font-medium 
                   inline-flex items-center gap-2 px-5 py-1 rounded-full shadow-sm"
      >
        <p>Top-rated AI Image Creator</p>
        <img src={assets.star_icon} alt="Star Icon" />
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-5xl sm:text-7xl font-extrabold max-w-2xl mt-10 leading-tight text-yellow-400"
      >
        Transform your <span className="text-blue-100">words</span> into art within seconds.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-6 text-blue-300 max-w-xl text-lg sm:text-xl"
      >
        Let your imagination bloom 🌌— just describe your idea and let AI bring it to life as beautiful, vibrant images.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={onClickHandler}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-10 bg-yellow-500 text-[#0a192f] text-lg font-semibold px-10 py-3 
                   rounded-full flex items-center gap-3 hover:bg-yellow-400 transition-colors duration-300 shadow-md"
      >
        Create Now
        <img className="h-6" src={assets.star_group} alt="Sparkles" />
      </motion.button>

      {/* Sample Images */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {Array(6)
          .fill('')
          .map((_, index) => (
            <motion.img
              key={index}
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt="Generated"
              className="rounded-lg shadow-sm hover:scale-105 transition-transform duration-300 w-16 sm:w-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.15 }}
            />
          ))}
      </motion.div>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className="mt-4 text-blue-200 text-sm italic"
      >
        Imagery created by <strong className="text-yellow-400">Imagify</strong>
      </motion.p>

      {/* Accent Glow - positioned side instead of bottom */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute right-[-5rem] top-1/4 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20 -z-10"
      ></motion.div>
    </motion.section>
  );
};

export default Header;


