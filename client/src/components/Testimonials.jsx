import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section className="bg-[#0a192f] py-24 px-6 md:px-20 text-white">
      <div className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-200 drop-shadow">
          What Our Users Say
        </h1>
        <p className="mt-4 text-blue-300 max-w-2xl mx-auto text-lg">
          Real stories from creative people who turned their words into art using our AI-powered generator.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-[#1c2541] rounded-3xl shadow-lg p-6 border-l-8 border-yellow-400 hover:shadow-xl hover:scale-[1.02] transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Profile */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
              />
              <div>
                <h2 className="font-semibold text-blue-100 text-lg">{testimonial.name}</h2>
                <p className="text-sm text-blue-300">{testimonial.role}</p>
              </div>
            </div>

            {/* Star Ratings */}
            <div className="flex items-center gap-1 mb-4">
              {Array(testimonial.stars).fill().map((_, i) => (
                <img
                  key={i}
                  src={assets.rating_star}
                  alt="Star"
                  className="w-5 h-5"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-blue-200 text-sm leading-relaxed italic">
              “{testimonial.text}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

