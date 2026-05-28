import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpeg'; 

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }} 
      id='about'
      className='py-24 bg-gray-950 text-white'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center mb-4'>
          About <span className='text-pink-500'>Me</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          I'm continuously learning and growing as a frontend developer.
        </p>

        <div className='flex flex-col md:flex-row items-center gap-12'>

          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='md:w-1/2'
          >
            <img
              src={profile}
              alt="Profile"
              className='rounded-3xl shadow-xl w-full max-w-md mx-auto border border-pink-500'
            />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=' w-full flex justify-center'
          >
            
                <div className='bg-gray-900 p-10 rounded-3xl border border-gray-800 shadow-lg max-w-5xl mx-auto'>
              <h3 className='text-3xl font-semibold mb-6 text-pink-500'>
                My Journey
              </h3>

              <p className='text-gray-300 leading-8'>
                I'm a passionate Full Stack Developer focused on creating modern,
                responsive and user-friendly websites using React, Tailwind CSS
                and JavaScript. I enjoy learning new technologies and building
                projects that improve my skills every day.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default About;