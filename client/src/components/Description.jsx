import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Description = () => {
  return (
    <section className="bg-[#0a192f] py-24 px-6 md:px-28 overflow-hidden text-white">
      {/* Decorative Glow */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-blue-500 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-600 rounded-full blur-2xl opacity-20 -z-10"></div>

      <motion.div
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-blue-200 tracking-tight leading-snug drop-shadow"
        >
          Let AI Paint Your Imagination
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl text-blue-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Express your thoughts and watch them come alive as stunning visuals—crafted by the magic of artificial intelligence.
        </motion.p>
      </motion.div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-14">
        {/* Text Block */}
        <motion.div
          className="md:w-1/2 space-y-6 text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-blue-200">
            Why Choose Our AI Image Generator?
          </h2>
          <p className="text-blue-300 text-base leading-relaxed">
            Built with cutting-edge AI and a love for creativity, our tool empowers you to create expressive images with just a line of text.
          </p>
          <p className="text-blue-300 text-base leading-relaxed">
            Whether you're an artist, dreamer, or designer, our generator translates your vision into vibrant visuals—effortlessly and instantly.
          </p>
          <p className="text-indigo-300 italic">
            “Words are seeds—watch them bloom into art.” 🌌
          </p>
        </motion.div>

        {/* Image Block */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={assets.sample_img_1}
            alt="AI Generated"
            className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Description;
