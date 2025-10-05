import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Steps = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-20 px-4 bg-[#0a192f] overflow-hidden">
      
      
      
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-md text-center">
        <span className="text-yellow-400">Your</span>{' '}
        <span className="text-blue-100">Creative Journey</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-blue-300 mb-12 font-medium text-center max-w-2xl">
        Watch your words bloom into beautiful visuals with just a few simple steps.
      </p>

      {/* Steps Cards */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-6 bg-[#0f213d] rounded-2xl p-6 shadow-lg border-l-8 border-yellow-400 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              width={60}
              height={60}
              src={item.icon}
              alt={item.title}
              className="rounded-full bg-yellow-200 p-2 shadow-sm"
            />
            <div>
              <h2 className="text-xl font-semibold text-yellow-300">{item.title}</h2>
              <p className="text-blue-100 mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-12 px-8 py-3 bg-yellow-400 text-[#0a192f] font-semibold rounded-full shadow-md hover:bg-yellow-300 transition duration-300"
      >
        Start Creating
      </motion.button>
    </div>
  );
};

export default Steps;


