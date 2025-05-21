import React, { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { useTheme } from '../assets/Additionals/ThemeContext'; // Use theme context

const ProjectsPage = () => {
  const { darkMode } = useTheme(); // Get dark mode from theme context
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); // Initialize AOS
  }, []);

  // Projects data
  const projects = {
    fullStack: [
      { name: 'Job Portal Web App', link: 'https://job-portal-hosting.onrender.com/' },
      
    ],
    frontend: [
      { name: 'Burger Website', link: 'https://burger-website-blue.vercel.app/' },
      { name: 'My Static Portfolio', link: 'https://portfolio-rahul-snowy.vercel.app/' },
      { name: 'Authentication_Web_Page', link: 'https://rahulprajapati10.github.io/Authentication_web_page/#' },
    ],
    // uiUxDesign: [
    //   { name: 'My Designs', link: '' },
    // ],
  };

  const cards = [
    {
      title: 'Full Stack Development',
      category: 'fullStack',
      color: `${darkMode ? 'bg-gray border-2 border-gray-600' : 'bg-white border-2 border-blue-300'}`,
      a: 'text-blue-500',
    },
    {
      title: 'Frontend Development',
      category: 'frontend',
      color: `${darkMode ? 'bg-gray border-2 border-gray-600' : 'bg-white border-2 border-red-300'}`,
      a: 'text-red-500',
    },
    // {
    //   title: 'UI/UX Design',
    //   category: 'uiUxDesign',
    //   color: `${darkMode ? 'bg-gray border-2 border-gray-600' : 'bg-white border-2 border-yellow-300'}`,
    //   a: 'text-yellow-500',
    // },
  ];

  return (
    <section
      className={`p-6 sm:p-8 lg:p-10 transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
      id="projects"
    >
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-10"
        data-aos="fade-down"
      >
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative p-6 sm:p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${darkMode ? 'text-black' : 'text-black'} ${card.color}`}
            onMouseEnter={() => setHoveredCard(card.category)}
            onMouseLeave={() => setHoveredCard(null)}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
          >
            <h2 className={`text-2xl sm:text-3xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
              {card.title}
            </h2>
            {hoveredCard === card.category && (
              <div className="mt-4 space-y-4">
                {/* {projects[card.category].map((project, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                  >
                    <span className="text-sm sm:text-base">{project.name}</span>
                    <a
                      href={project.link}
                      className={`${card.a} dark:text-blue-300 font-semibold text-sm sm:text-base hover:underline`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                ))} */}
                {projects[card.category]?.map((project, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                  >
                    <span className="text-sm sm:text-base">{project.name}</span>
                    <a
                      href={project.link}
                      className={`${card.a} dark:text-blue-300 font-semibold text-sm sm:text-base hover:underline`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                ))}

              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
