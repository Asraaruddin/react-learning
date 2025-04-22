import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import TodoContainer from './Components/TodoContainer';
import { Debounce } from './Components/debounce';
import { Debouncedemo } from './Components/debouncedemo';

// import { ClassBinding } from './Components/class-bindinf';

const App = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center">
    <Debouncedemo/>
  </div>
  );
};

export default App;
