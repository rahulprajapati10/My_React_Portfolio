import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const socialMediaLinks = [
    { icon: FaInstagram, name: 'Instagram', color: '#E1306C', url: 'https://www.instagram.com/rahulprajapati.10/' },
    { icon: FaLinkedin, name: 'LinkedIn', color: '#0077B5', url: 'https://www.linkedin.com/in/rahulprajapati10' },
    { icon: FaGithub, name: 'GitHub', color: '#333', url: 'https://github.com/rahulprajapati10' },
    { icon: FaFacebook, name: 'Facebook', color: '#3b5998', url: '#' },
    { icon: FaXTwitter, name: 'Twitter', color: '#1DA1F2', url: '#' },
  ];

  return (
    <motion.div
      className={`fixed bottom-0 top-50 h-fit p-2 transition-transform sidenavbar duration-300 mt-50 ${isOpen ? 'w-64' : 'w-16'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ width: '4rem' }}
      animate={{ width: isOpen ? '16rem' : '4rem' }}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {socialMediaLinks.map((link) => (
          <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.name}>
            <motion.div
              className="flex items-center cursor-pointer p-2 rounded-full mx-5 bg-pink-500 bg-opacity-90 shadow-md "
              whileHover={{ scale: 1.1 }}
              style={{ backgroundColor: link.color }}
            >
              <link.icon className="text-white text-2xl" />
              <span className={`ml-2 text-white ${isOpen ? 'block' : 'hidden'}`}>{link.name}</span>
            </motion.div>
          </a>
        ))}
        
      </div>
    </motion.div>
  );
};

export default SideNavbar;
