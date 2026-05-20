import React from 'react';
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);
  return (
    <nav className='fixed w-full z-50 bg-black/30 backdrop-blur-sm py-4 px-8 shadow-lg'>
       <div className='container mx-auto flex justify-between items-center'>
           <div>
              <a href='#' className='text-3xl font-bold text-white'>
                Yashita 
                  <span className='text-pink-400 px-2'>Kharbanda</span>
              </a>
           </div>
           <div className='hidden md:flex space-x-10'>
                <a href="#home" className='relative text-white/80 transition durationn-300 hover:text-pink-500 group'>
                    <span>Home</span>
                    <span className='absolute left-0 -bottom-1 w-full h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
                </a>

                <a href="#about" className='relative text-white/80 transition durationn-300 hover:text-pink-500 group'>
                    <span>About</span>
                    <span className='absolute left-0 -bottom-1 w-full h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
                </a>

                <a href="#Skills" className='relative text-white/80 transition durationn-300 hover:text-pink-500 group'>
                    <span>Skills</span>
                    <span className='absolute left-0 -bottom-1 w-full h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
                </a>

                <a href="#Projects" className='relative text-white/80 transition durationn-300 hover:text-pink-500 group'>
                    <span>Projects</span>
                    <span className='absolute left-0 -bottom-1 w-full h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
                </a>

                <a href="#Contact" className='relative text-white/80 transition durationn-300 hover:text-pink-500 group'>
                    <span>Contact</span>
                    <span className='absolute left-0 -bottom-1 w-full h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
                </a>

           </div>

            <div className='md:hidden'>
               {
                showMenu ?
                <FaXmark className='text-2xl cursor-pointer' onClick={() => setShowMenu(false)} />:
                <FaBars className='text-2xl text-white cursor-pointer' onClick={() => setShowMenu(true)} />
               }
            </div>
        </div>

        {
            showMenu && (
                 <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4  flex flex-col space-y-4 items-center justify-center'>
                <a onClick={() => setShowMenu(!showMenu)} href="#home" className='relative text-white/80 transition durationn-300 hover:text-pink-500 group'>
                    <span>Home</span>
                </a>

                <a onClick={() => setShowMenu(!showMenu)} href="#about" className='relative text-white/80 transition durationn-300 hover:text-pink-500 group'>
                    <span>About</span>
                </a>

                <a onClick={() => setShowMenu(!showMenu)} href="#Skills" className='relative text-white/80 transition durationn-300 hover:text-pink-500 group'>
                    <span>Skills</span>
                </a>

                <a onClick={() => setShowMenu(!showMenu)} href="#Projects" className='relative text-white/80 transition durationn-300 hover:text-pink-500 group'>
                    <span>Projects</span>
                </a>

                <a onClick={() => setShowMenu(!showMenu)}   href="#Contact" className='relative text-white/80 transition durationn-300 hover:text-pink-500 group'>
                    <span>Contact</span>
                </a>

           </div>
               
            )
        }

    </nav>
  );
}

export default Navbar;
