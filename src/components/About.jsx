import React from 'react';
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div>
        <motion.div
            initial={{opacity:0, y:50}}
            whileInView= {{opacity:1, y:0}}
            transition={{duration: 0.6, ease: 'easeOut'}}
            viewport={{once: true}}
            id= 'about'
            className= 'py-20 bg-dark-200' >

                <div className='container mx-0 px-6'>
                    <h2 className='text-3xl font-bold text-center mb-4'>About
                        <span className='text-pink-400'>Me</span>
                    </h2>
                    <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>I’m continuously learning and growing as a frontend developer.</p>

                    <div className='text-grey-400 bg-color-black '>
                        <p1 className='text-grey-400 text-center max-w-2xl mx-auto mb-16'>
                            I have learned frontend technologies including HTML, CSS, JavaScript,
                            React.js, Tailwind CSS, and Git/GitHub, with a focus on creating responsive
                            and user-friendly web applications.”
                        </p1>

                    </div>

                </div>





        </motion.div> 
    </div>
  );
}

export default About;
