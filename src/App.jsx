import React from 'react';
// import Navbar from './Components/Navbar'; // adjust path as needed
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

// import { ClassBinding } from './Components/class-bindinf';

const App = () => {
  return (
    <div className="bg-[#1a1a2e] text-white font-sans scroll-smooth">
 
    <Header />
    <HeroSection />
    <Skills /> 
    <Projects /> 
    <About />
    <Contact />
    <Footer />

  </div>
  );
};

export default App;
