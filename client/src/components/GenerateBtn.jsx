import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const GenerateBtn = () => {
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
      className="bg-gradient-to-b from-[#0a192f] to-[#112240] py-20 px-6 text-center" // ✅ matched with Testimonials
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-6 drop-shadow-sm"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        See the Magic. <span className="text-blue-100">Try Now</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-blue-300 mb-10 text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Type your idea, click the button, and watch it transform into stunning visuals.
      </motion.p>

      {/* Button */}
      <motion.button
        onClick={onClickHandler}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-3 bg-yellow-500 text-[#0a192f] px-10 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-400 transition duration-300"
      >
        Generate Images
        <motion.img
          src={assets.star_group}
          alt="Stars"
          className="h-6"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </motion.button>
    </motion.section>
  );
};

export default GenerateBtn;

