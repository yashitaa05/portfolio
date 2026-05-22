import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contacts';
import Projects from '../components/Projects';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  return (
    <div>
       <Hero />
       <About />
       <Skills />
       <Projects/>
       <Contact />
    </div>
  );
}
export default Home;