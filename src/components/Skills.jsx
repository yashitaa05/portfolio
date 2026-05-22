import React from 'react';
import { motion } from 'framer-motion';

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa';

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si';

const skills = [
  {
    title: 'HTML',
    icon: FaHtml5,
  },
  {
    title: 'CSS',
    icon: FaCss3Alt,
  },
  {
    title: 'JavaScript',
    icon: FaJsSquare,
  },
  {
    title: 'React',
    icon: FaReact,
  },
  {
    title: 'Node.js',
    icon: FaNodeJs,
  },
  {
    title: 'Express.js',
    icon: SiExpress,
  },
  {
    title: 'MongoDB',
    icon: SiMongodb,
  },
  {
  title: 'Tailwind CSS',
  icon: SiTailwindcss,
  }
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      id='skills'
      className='py-24 bg-black text-white'
    >
      <div className='container mx-auto px-6'>

        <h2 className='text-4xl font-bold text-center mb-4'>
          My <span className='text-pink-500'>Skills</span>
        </h2>

        <p className='text-center text-gray-400 mb-16'>
          Technologies I work with
        </p>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>

          {skills.map((skill, index) => (
            <div
              key={index}
              className='bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 hover:border-pink-500 transition duration-300 text-center shadow-lg'
            >
              <skill.icon className='w-14 h-14 text-pink-500 mx-auto mb-6' />

              <h3 className='text-xl font-semibold'>
                {skill.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </motion.div>
  );
};

export default Skills;