// App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Components/Home';// Import the HomePage component
import { ThemeProvider } from './assets/Additionals/ThemeContext'; // ThemeProvider
import About from './Components/About'
import ServicesPage from './Components/Services';
import ProjectsPage from './Components/MyProject';
import ContactPage from './Components/ContactMe';
import Footer from './Components/Footer';
import SideNavBar from './Components/SideNavbar';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HomePage />
        <About/>
        <ServicesPage/>
        <ProjectsPage/>
        <ContactPage/>
        <SideNavBar/>
        <Footer/>

      </div>
    </ThemeProvider>
  );
};

export default App;