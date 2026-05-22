import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white'
    >
      <div className='container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12'>

        <div className='md:w-1/2 text-center md:text-left'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight mb-4'>
            Hey, I'm
            <span className='text-pink-500'> Yashita Kharbanda</span>
          </h1>

          <h2 className='text-2xl md:text-4xl font-semibold text-gray-300 mb-4'>
            Full Stack Developer
          </h2>

          <p className='text-lg text-gray-400 mb-8'>
            Code • Create • Learn
          </p>

          <div className='flex flex-wrap justify-center md:justify-start gap-4'>
            <a
              href="#projects"
              className='px-6 py-3 bg-pink-500 rounded-full font-medium hover:bg-pink-600 transition duration-300 shadow-lg'
            >
              View Work
            </a>

            <a
              href="#contact"
              className='px-6 py-3 border border-pink-500 rounded-full font-medium hover:bg-pink-500 transition duration-300'
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className='md:w-1/2 flex justify-center'>
          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            src={profile}
            alt="Profile"
            className='w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-pink-500 shadow-[0_0_40px_rgba(236,72,153,0.5)]'
          />
        </div>

      </div>
    </motion.div>
  );
};

export default Hero;