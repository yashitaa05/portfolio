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
             <p className='text-lg  text-gray-300 drop-shadow-lg mb-8'>
                Code • Create • Learn
             </p>
             <div  className='flex space-x-4'>
                <a href="#projects" className=' px-6 py-3 bg-pink-500 rounded-lg font-medium hover:bg-pink-600 transition duration-300'>
                    View Work
                </a>
                <a href="#contact" className=' px-6 py-3 border border-pink-500 rounded-lg font-medium bg-transparent hover:bg-pink-600 border border-pink-500 hover:border-pink-600 rounded-full transition duration-300'>
                    Contact Me
                </a>
             </div>
            </div>

            <div className='md:w-1/2 flex justify-center'>
                <div className='relative w-64 h-64 md:w-80 md:h-80'>
                    <div className='basolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink animate-pluse-slow opacity-70'>
                        <motion.img 
                        animate={{y:[0, -20, 0]}}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }}
                        className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float'
                        src={profile} alt="Profile" className='absolute inset-0 rounded-full object-cover' />
                    </div>


                </div>


            </div>
      </div>
    </motion.div>
  );
};

export default Hero;