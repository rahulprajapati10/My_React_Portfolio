import React, { useEffect, useState } from 'react';
import { IoMdSunny, IoIosMoon, IoMdMenu, IoMdClose } from 'react-icons/io';
import { useTheme } from '../assets/Additionals/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const menus = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contacts', href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-500 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-4xl font-bold">
          <span  className="text-blue-500">Rahul</span>
        </div>

        {/* Centered Menu Items */}
        <div className="hidden md:flex justify-center flex-1">
          <ul className="flex space-x-6">
            {menus.map((menu) => (
              <li key={menu.title}>
                <a
                  href={menu.href}
                  className={`relative py-2 px-4 rounded-lg
                             text-black dark:text-white 
                             hover:bg-white dark:hover:bg-white
                             ${darkMode 
                               ? 'hover:shadow-[0_0_10px_#8080ff]'
                               : 'hover:shadow-[0_0_10px_#ff9999]'
                             }
                             transition duration-300 transform tilt`}
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Toggle Button on the Right */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Icon */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoMdClose className="h-8 w-8 text-black dark:text-white" />
            ) : (
              <IoMdMenu className="h-8 w-8 text-black dark:text-white" />
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white p-2 rounded-full border-2 border-gray-400 dark:border-gray-600 focus:outline-none bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
          >
            {darkMode ? (
              <IoMdSunny className="h-6 w-6 text-yellow-400" />
            ) : (
              <IoIosMoon className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 w-full absolute top-full left-0 transition-all duration-300 z-40">
          <ul className="flex flex-col items-center space-y-2 py-4">
            {menus.map((menu) => (
              <li key={menu.title}>
                <a
                  href={menu.href}
                  className={`relative py-2 px-4 rounded-lg
                             text-black dark:text-white 
                             hover:bg-white dark:hover:bg-white
                             ${darkMode 
                               ? 'hover:shadow-[0_0_10px_#8080ff]' 
                               : 'hover:shadow-[0_0_10px_#ff9999]'
                             }
                             transition duration-300 transform tilt`}
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
