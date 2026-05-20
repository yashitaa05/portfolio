import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
         <div className='md:w-1/2'>
             <h1 className='text-2xl md:text-4xl font-bold'>
                Hey, I'm <span className='text-pink-400'>Yashita Kharbanda</span>
             </h1>
             <h2 className='text-2xl md:text-3xl font-semibold typewriter'>
                 Full Stack Developer
             </h2>
             <p className='text-lg  text-gray-300 drop-shadow-lg'>
                Code • Create • Learn
             </p>
            </div>
      </div>
    </motion.div>
  );
};

export default Hero;