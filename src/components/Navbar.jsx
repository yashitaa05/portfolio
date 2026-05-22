import React from 'react';
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {

  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <nav className='fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-gray-800'>

      <div className='container mx-auto flex justify-between items-center px-6 py-4'>

        <a href='#home' className='text-2xl font-bold text-white'>
          Yashita
          <span className='text-pink-500'> Kharbanda</span>
        </a>

        <div className='hidden md:flex space-x-10'>

          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className='capitalize text-white hover:text-pink-500 transition duration-300'
            >
              {item}
            </a>
          ))}

        </div>

        <div className='md:hidden'>
          {
            showMenu ?
              <FaXmark
                className='text-2xl text-white cursor-pointer'
                onClick={() => setShowMenu(false)}
              />
              :
              <FaBars
                className='text-2xl text-white cursor-pointer'
                onClick={() => setShowMenu(true)}
              />
          }
        </div>

      </div>

      {
        showMenu && (
          <div className='md:hidden bg-black border-t border-gray-800 flex flex-col items-center py-6 space-y-6'>

            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setShowMenu(false)}
                className='capitalize text-white hover:text-pink-500 transition duration-300'
              >
                {item}
              </a>
            ))}

          </div>
        )
      }

    </nav>
  );
}

export default Navbar;