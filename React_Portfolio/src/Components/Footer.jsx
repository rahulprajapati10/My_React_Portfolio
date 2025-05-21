import React from 'react';
import { useTheme } from '../assets/Additionals/ThemeContext'; // Assuming you're using the ThemeContext for dark mode

const Footer = () => {
  const { darkMode } = useTheme(); // Get dark mode from theme context

  return (
    <footer
      className={`p-6 text-center transition-all duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'
      }`}
    >
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rahul. All rights reserved.
        </p>

        

        <div className="mt-4 text-xs">
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
          <p className="hover:underline cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
