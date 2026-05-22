import React from 'react';

const ProjectCard = ({ title, description, image, tech = [] }) => {
  return (
    <div className='bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-pink-500 hover:-translate-y-2 transition duration-300 shadow-lg p-6'>

      <img
        src={image}
        alt={title}
        className='w-full h-48 object-cover rounded-2xl mb-6'
      />

      <h3 className='text-2xl font-semibold mb-3 text-white'>
        {title}
      </h3>

      <p className='text-gray-400 mb-5'>
        {description}
      </p>

      <div className='flex flex-wrap gap-2 mb-6'>
        {tech.map((item, index) => (
          <span
            key={index}
            className='px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm'
          >
            {item}
          </span>
        ))}
      </div>

      <div className='flex justify-start'>
        <a
          href="#"
          className='px-4 py-2 bg-pink-500 rounded-lg text-sm font-medium hover:bg-pink-600 transition duration-300 inline-block'
        >
          View Project
        </a>
      </div>

    </div>
  );
};

export default ProjectCard;