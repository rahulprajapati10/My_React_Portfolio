import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { useTheme } from '../assets/Additionals/ThemeContext'; // Use theme context

// Import icons for services
import { FaDesktop, FaCode, FaPaintBrush, FaRegFileAlt } from 'react-icons/fa';

const ServicesPage = () => {
  const { darkMode } = useTheme(); // Get dark mode from theme context

  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); // Initialize AOS
  }, []);

  const services = [
    // {
    //   title: 'UI/UX Design',
    //   description: 'Creating user-friendly and aesthetically pleasing interfaces that enhance user satisfaction and engagement.',
    //   icon: <FaDesktop className="text-4xl" />,
    //   border: 'border-2 border-blue-300'
    // },
    {
      title: 'Web Design',
      description: 'Designing visually appealing and responsive websites that provide an optimal viewing experience across all devices.',
      icon: <FaPaintBrush className="text-4xl" />,
      border: 'border-2 border-red-300'
    },
    {
      title: 'Web Development',
      description: 'Building robust and scalable web applications using modern technologies to meet client needs and expectations.',
      icon: <FaCode className="text-4xl" />,
      border: 'border-2 border-orange-300'
    },
    // {
    //   title: 'Graphic Designing',
    //   description: 'Crafting unique graphics and visual content that effectively communicate messages and elevate brand identity.',
    //   icon: <FaRegFileAlt className="text-4xl" />,
    //   border: 'border-2 border-purple-300'
    // },
  ];

  return (
    <section className={`p-10 transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
    id='services'>
      <h1 className="text-4xl font-bold text-center mb-8" data-aos="fade-down">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${darkMode ? 'bg-gray-800 text-white' : 'bg-transparent text-black'} border ${darkMode ? 'border-gray-600' : `${service.border}`} hover:shadow-xl`}
            data-aos="flip-up" // Add flip animation
            data-aos-offset="200" // Optional: adjust trigger offset
            data-aos-easing="ease-in-out" // Optional: adjust easing function
          >
            <div className="flex items-start mb-4">
              {service.icon}
              <h2 className="text-xl font-semibold ml-4">{service.title}</h2>
            </div>
            <p className="mt-2 text-sm">{service.description}</p>
            <div className="absolute inset-0 rounded-lg opacity-10 transition-opacity duration-500 hover:opacity-20 bg-white bg-opacity-10"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
