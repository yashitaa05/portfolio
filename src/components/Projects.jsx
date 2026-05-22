import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { projects } from '../assets/assets';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      id='projects'
      className='py-24 bg-gray-950 text-white'
    >
      <div className='container mx-auto px-6'>

        <h2 className='text-4xl font-bold text-center mb-4'>
          My <span className='text-pink-500'>Projects</span>
        </h2>

        <p className='text-gray-400 text-center mb-16'>
          A section of my recent work
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default Projects;