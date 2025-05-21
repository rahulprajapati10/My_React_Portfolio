import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { useTheme } from '../assets/Additionals/ThemeContext'; // Use theme context
import me17 from '../Images/me17.jpg'; // Replace with your image path
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFileWord, FaFilePowerpoint, FaFileExcel } from 'react-icons/fa';






import CV from '../Images/Rahul_Prajapati_CV.pdf';

const HomePage = () => {
  const { darkMode } = useTheme(); // Get dark mode from theme context
  const jobTitles = [
    { title: 'Frontend Developer', lightColor: 'text-green-600', darkColor: 'text-green-300' },
    { title: 'Web Developer', lightColor: 'text-blue-600', darkColor: 'text-blue-300' },
    { title: 'Software Developer', lightColor: 'text-yellow-600', darkColor: 'text-yellow-200' },
  ];

  const [currentTitle, setCurrentTitle] = useState('');
  const [index, setIndex] = useState(0);
  const typingSpeed = 5; // Speed of typing effect
  const pauseDuration = 2000; // Pause duration after typing

  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); // Initialize AOS with custom duration
  }, []);

  useEffect(() => {
    let typingTimeout;
    let pauseTimeout;

    const typeTitle = () => {
      const currentJobTitle = jobTitles[index].title;

      // Typing effect
      setCurrentTitle((prev) => prev + currentJobTitle.charAt(prev.length));

      if (currentTitle.length < currentJobTitle.length) {
        typingTimeout = setTimeout(typeTitle, typingSpeed);
      } else {
        // Pause after typing
        pauseTimeout = setTimeout(() => {
          setCurrentTitle(''); // Clear title for the next one
          setIndex((prevIndex) => (prevIndex + 1) % jobTitles.length); // Move to the next job title
        }, pauseDuration);
      }
    };

    // Start typing the title if currentTitle is not fully typed
    if (currentTitle.length < jobTitles[index].title.length) {
      typeTitle();
    } else {
      // If finished typing, wait for pauseDuration to start typing again
      pauseTimeout = setTimeout(() => {
        setCurrentTitle(''); // Clear title for the next one
        setIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      }, pauseDuration);
    }

    // Cleanup function to clear timeouts
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [currentTitle, index, jobTitles]);

  useEffect(() => {
    // Reset currentTitle if the index changes
    setCurrentTitle('');
  }, [index]);

  // Set icon background colors based on the theme
  const iconBackgroundColor = darkMode ? 'bg-white' : 'bg-red-50';

  return (
    <section
      className={` relative flex flex-col-reverse md:flex-row items-center justify-between h-auto md:h-screen p-6 md:p-10 transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
      id='home'
    >
      {/* Image with floating skills for smaller screens (image on top) */}
      <div
        className="w-full md:w-1/3 mt-10 md:mt-0 relative flex justify-center md:order-2"
        data-aos="fade-left" // Apply AOS animation to the image
      >
        <img
          src={me17} // Replace with your image path
          alt="Rahul Prajapati"
          className={`w-48 md:w-3/4 rounded-full shadow-lg transition-all duration-300 
            ${darkMode ? 'shadow-blue-500' : 'shadow-pink-500'} 
            hover:scale-105 hover:shadow-2xl glow-effect bounce-animation`}
        />

        {/* Floating skill icons scattered across the screen */}
        <div className="absolute w-full h-full hidden md:block">
          <div className="skill-icon absolute" style={{ top: '5%', left: '5%' }}>
            <FaHtml5 className={`text-3xl md:text-5xl ${iconBackgroundColor} p-2 rounded-full border-2 border-red-200 shadow-lg text-red-600`} />
          </div>
          <div className="skill-icon absolute" style={{ top: '5%', right: '5%' }}>
            <FaCss3Alt className={`text-3xl md:text-5xl ${iconBackgroundColor} p-2 rounded-full border-2 border-red-200 shadow-lg text-blue-600`} />
          </div>
          <div className="skill-icon absolute" style={{ top: '-18%', right: '40%' }}>
            <FaJs className={`text-3xl md:text-5xl ${iconBackgroundColor} p-2 rounded-full border-2 border-red-200 shadow-lg text-yellow-300`} />
          </div>
          <div className="skill-icon absolute" style={{ top: '50%', left: '0%' }}>
            <FaReact className={`text-3xl md:text-5xl ${iconBackgroundColor} p-2 rounded-full border-2 border-red-200 shadow-lg text-cyan-500`} />
          </div>

          <div className="skill-icon absolute" style={{ bottom: '0%', left: '10%' }}>
            <FaFileWord className={`text-3xl md:text-5xl ${iconBackgroundColor} p-2 rounded-full border-2 border-red-200 shadow-lg text-blue-700`} />
          </div>
          <div className="skill-icon absolute" style={{ bottom: '20%', right: '5%' }}>
            <FaFilePowerpoint className={`text-3xl md:text-5xl ${iconBackgroundColor} p-2 rounded-full border-2 border-red-200 shadow-lg text-orange-600`} />
          </div>
          <div className="skill-icon absolute" style={{ bottom: '-15%', left: '40%' }}>
            <FaFileExcel className={`text-3xl md:text-5xl ${iconBackgroundColor} p-2 rounded-full border-2 border-red-200 shadow-lg text-green-600`} />
          </div>


        </div>
      </div>

      <div
        className="w-full md:w-1/2 text-center md:text-left md:order-1 "
        data-aos="fade-right" // Apply AOS animation to this div
      >
        <h2 className="text-xl md:text-3xl font-normal mb-2">Hello, This is</h2>
        <h1 className="text-3xl md:text-5xl font-bold">Rahul Prajapati</h1>
        <h2 className="text-xl md:text-3xl mt-3 md:mt-5 font-normal">
          I'm a
          <span
            className={`font-semibold transition-transform transform ${currentTitle ? 'scale-110' : ''} 
              ${darkMode ? jobTitles[index].darkColor : jobTitles[index].lightColor}`}
          >
            &nbsp;{currentTitle}
          </span>
        </h2>
        <p className="mt-4 text-sm md:text-base font-normal">
          A passionate and creative individual skilled in front-end development, and web development.
          I thrive on transforming ideas into visually appealing and user-friendly interfaces, ensuring optimal functionality.
        </p>
        <a
          href={CV} // Replace with your CV link
          download
          className="mt-6 inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 md:py-2 md:px-6 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl active:scale-95 tilt"
          target='_blank'
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default HomePage;
